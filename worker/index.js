const TTL = 600;
const MAX_BYTES = 2_000_000;
const number = v => typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : null;
const text = (v, max = 160) => typeof v === 'string' ? v.slice(0, max) : '';

async function jsonFetch(url, options = {}) {
  // Workers supports manual redirects; the status check below rejects 3xx responses.
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(8000), redirect: 'manual' });
  if (!response.ok) throw new Error(`upstream_${response.status}`);
  const reader = response.body.getReader();
  let size = 0; const chunks = [];
  while (true) {
    const { value, done } = await reader.read(); if (done) break;
    size += value.length;
    if (size > MAX_BYTES) { await reader.cancel(); throw new Error('upstream_too_large'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export function sanitizeSteam(owned, recent, steamId) {
  const games = (Array.isArray(owned.response?.games) ? owned.response.games : []);
  const recentGames = Array.isArray(recent.response?.games) ? recent.response.games : [];
  const card = g => ({ appId: number(g.appid), name: text(g.name), minutes: number(g.playtime_forever), recentMinutes: number(g.playtime_2weeks) });
  return {
    profileUrl: `https://steamcommunity.com/profiles/${steamId}`,
    gameCount: number(owned.response?.game_count),
    totalMinutes: games.length ? games.reduce((n, g) => n + (number(g.playtime_forever) ?? 0), 0) : null,
    mostPlayed: [...games].sort((a, b) => (b.playtime_forever || 0) - (a.playtime_forever || 0)).slice(0, 4).map(card),
    recent: recentGames.slice(0, 4).map(card),
    visible: Array.isArray(owned.response?.games),
  };
}

export function sanitizeFinals(career, weapons, username) {
  // Publish only these career metrics. Never return the raw personal-key payload.
  const metrics = ['kills', 'deaths', 'revivesDone', 'roundsWon', 'roundsPlayed'];
  return {
    profileUrl: `https://finals.id/player/${encodeURIComponent(username)}`,
    season: text(career.season || 'lifetime'),
    modes: (Array.isArray(career.modes) ? career.modes : []).slice(0, 4).map(m => ({
      mode: text(m.mode, 30), capturedAt: text(m.capturedAt, 40),
      stats: Object.fromEntries(metrics.filter(k => number(m.stats?.[k]) !== null).map(k => [k, m.stats[k]])),
    })),
    weapons: (Array.isArray(weapons.modes) ? weapons.modes : []).slice(0, 4).map(m => ({
      mode: text(m.mode, 30),
      items: (Array.isArray(m.weapons) ? m.weapons : []).map(w => ({name: text(w.name), kills: number(w.kills), damage: number(w.damage)}))
        .sort((a,b) => (b.kills || 0) - (a.kills || 0)).slice(0, 4),
    })),
  };
}

export function sanitizeSpotify(pages) {
  return { playlists: pages.flatMap(p => p.items || []).filter(p => p && p.public === true && /^[a-zA-Z0-9]{22}$/.test(p.id))
    .slice(0, 12).map(p => ({ id: p.id, name: text(p.name), url: `https://open.spotify.com/playlist/${p.id}` })) };
}

async function steam(env) {
  if (!env.STEAM_API_KEY || !/^\d{17}$/.test(env.STEAM_ID)) return { status: 'not_connected' };
  const base = 'https://api.steampowered.com/IPlayerService/';
  const params = new URLSearchParams({ key: env.STEAM_API_KEY, steamid: env.STEAM_ID, format: 'json' });
  const [owned, recent] = await Promise.all([
    jsonFetch(`${base}GetOwnedGames/v1/?${params}&include_appinfo=true&include_played_free_games=true`),
    jsonFetch(`${base}GetRecentlyPlayedGames/v1/?${params}&count=4`),
  ]);
  return { status: 'ok', ...sanitizeSteam(owned, recent, env.STEAM_ID) };
}
async function finals(env) {
  if (!env.FINALS_API_KEY || !env.FINALS_USERNAME) return { status: 'not_connected' };
  const base = `https://api.finals.id/v1/profiles/${encodeURIComponent(env.FINALS_USERNAME)}`;
  const options = { headers: { Authorization: `Bearer ${env.FINALS_API_KEY}` } };
  const [career, weapons] = await Promise.all([jsonFetch(`${base}/career?season=lifetime`, options), jsonFetch(`${base}/weapons?season=lifetime`, options)]);
  return { status: 'ok', ...sanitizeFinals(career, weapons, env.FINALS_USERNAME) };
}
async function spotify(env) {
  if (!env.SPOTIFY_CLIENT_ID || !env.SPOTIFY_CLIENT_SECRET || !env.SPOTIFY_REFRESH_TOKEN) return { status: 'not_connected' };
  const token = await jsonFetch('https://accounts.spotify.com/api/token', {
    method: 'POST', headers: { Authorization: `Basic ${btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`)}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: env.SPOTIFY_REFRESH_TOKEN }),
  });
  const pages = [];
  // Bounded pagination; public playlists only, no listening history or private library exposure.
  for (let offset = 0; offset < 200; offset += 50) {
    const page = await jsonFetch(`https://api.spotify.com/v1/me/playlists?limit=50&offset=${offset}`, { headers: { Authorization: `Bearer ${token.access_token}` } });
    pages.push(page);
    if (!page.next || sanitizeSpotify(pages).playlists.length >= 12) break;
  }
  return { status: 'ok', ...sanitizeSpotify(pages) };
}
const providers = { steam, finals, spotify };

export async function getProvider(name, request, env, ctx, cache) {
  const key = new Request(`${new URL(request.url).origin}/cache/v2/${name}`);
  const cached = await cache.match(key);
  if (cached) return cached.json();
  try {
    const result = { ...await providers[name](env), fetchedAt: new Date().toISOString() };
    if (result.status === 'ok') ctx.waitUntil(cache.put(key, Response.json(result, { headers: { 'Cache-Control': `public, max-age=${TTL}` } })));
    return result;
  } catch (error) {
    // Do not log upstream URLs (Steam puts its key in the query string) or payloads.
    console.warn('Provider request failed', name, /^upstream_\d+$/.test(error?.message) ? error.message : 'request_error');
    const result = { status: 'unavailable' };
    ctx.waitUntil(cache.put(key, Response.json(result, { headers: { 'Cache-Control': 'public, max-age=60' } })));
    return result;
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');
    const allowedOrigins = [env.ALLOWED_ORIGIN, env.PREVIEW_ORIGIN].filter(Boolean);
    const headers = { 'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : env.ALLOWED_ORIGIN, 'Vary': 'Origin', 'X-Content-Type-Options': 'nosniff' };
    if (origin && !allowedOrigins.includes(origin)) return new Response('Forbidden', { status: 403 });
    if (url.pathname !== '/v1/activity') return new Response('Not found', { status: 404 });
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { ...headers, 'Access-Control-Allow-Methods': 'GET, OPTIONS' } });
    if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: { ...headers, Allow: 'GET, OPTIONS' } });
    const allowed = await env.RATE_LIMITER.limit({ key: request.headers.get('CF-Connecting-IP') || 'unknown' });
    if (!allowed.success) return Response.json({ error: 'Try again shortly' }, { status: 429, headers: { ...headers, 'Retry-After': '60' } });
    const values = await Promise.all(Object.keys(providers).map(name => getProvider(name, request, env, ctx, caches.default)));
    return Response.json(Object.fromEntries(Object.keys(providers).map((name, i) => [name, values[i]])), { headers: { ...headers, 'Cache-Control': 'public, max-age=60' } });
  },
};
