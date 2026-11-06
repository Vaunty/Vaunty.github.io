import { ACTIVITY } from './activity-config.js';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num = v => typeof v === 'number' && Number.isFinite(v) ? v.toLocaleString(undefined, {maximumFractionDigits:1}) : '—';
const hours = v => typeof v === 'number' ? `${num(v / 60)} h` : '—';
const stamp = v => { const d = new Date(v); return Number.isFinite(d.getTime()) ? d.toLocaleString(undefined, {dateStyle:'medium',timeStyle:'short'}) : 'Unknown'; };
const link = (url, label) => `<a class="source-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
const metrics = list => `<dl class="activity-metrics">${list.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
const unavailable = data => `<p class="activity-note">${data?.status === 'not_connected' ? 'Not connected yet.' : 'Stats are temporarily unavailable. Check back later.'}</p>`;
let pending, expires = 0;

function steamCard(data) {
  const profile = data?.profileUrl || ACTIVITY.steamProfile;
  if (data?.status !== 'ok') return unavailable(data) + (profile ? link(profile, 'Steam profile') : '');
  if (!data.visible) return '<p class="activity-note">Game details are private on Steam.</p>' + link(profile, 'Steam profile');
  const games = data.recent.length ? data.recent : data.mostPlayed;
  return metrics([['Games', num(data.gameCount)], ['Library playtime', hours(data.totalMinutes)]]) +
    `<h4>${data.recent.length ? 'Recently played' : 'Most played'}</h4><ul class="activity-list">${games.map(g=>`<li><a href="https://store.steampowered.com/app/${g.appId}/" target="_blank" rel="noopener noreferrer">${esc(g.name)}</a><span>${hours(g.minutes)} total${g.recentMinutes !== null ? ` · ${hours(g.recentMinutes)} in 2 weeks` : ''}</span></li>`).join('')}</ul>` +
    `<p class="activity-note">Fetched ${esc(stamp(data.fetchedAt))}</p>` + link(profile, 'Steam profile');
}
function finalsCard(data) {
  const credit = `<p class="activity-credit">Data from ${link('https://finals.id', 'Finals.ID')} · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a></p>`;
  if (data?.status !== 'ok') return unavailable(data) + link(ACTIVITY.finalsProfile, 'My Finals profile');
  const blocks = data.modes.map(m => {
    const s=m.stats, kd=typeof s.kills==='number' && s.deaths>0 ? num(s.kills/s.deaths) : '—';
    const weapons=data.weapons.find(w=>w.mode===m.mode)?.items || [];
    const pairs=[['Kills',s.kills],['Deaths',s.deaths],['Wins',s.wins],['Revives',s.revives]].filter(([,v])=>typeof v==='number').map(([k,v])=>[k,num(v)]);
    if (kd!=='—') pairs.push(['K/D',kd]);
    return `<section class="activity-mode"><h4>${esc({ranked:'Ranked',casual:'Casual',worldTour:'World Tour'}[m.mode] || m.mode)}</h4>${pairs.length ? metrics(pairs) : '<p class="activity-note">Career totals are not available for this mode.</p>'}${weapons.length?`<ul class="activity-list">${weapons.slice(0,3).map(w=>`<li><strong>${esc(w.name)}</strong><span>${num(w.kills)} kills · ${num(w.damage)} damage</span></li>`).join('')}</ul>`:''}<p class="activity-note">Captured ${esc(stamp(m.capturedAt))}</p></section>`;
  }).join('');
  return (blocks || '<p class="activity-note">No stats recorded yet.</p>') + link(data.profileUrl,'Full Finals profile') + credit;
}
function spotifyCard(data) {
  if (data?.status !== 'ok') return unavailable(data);
  if (!data.playlists.length) return '<p class="activity-note">No public playlists to show yet.</p>';
  return `<p class="activity-note">A few playlists from my rotation. Open one to listen.</p><div class="playlist-grid">${data.playlists.map(p=>`<article class="playlist"><h4>${esc(p.name)}</h4><button type="button" class="activity-button" data-playlist="${esc(p.id)}" data-title="${esc(p.name)}">Load player</button>${link(p.url,'Open in Spotify')}</article>`).join('')}</div>`;
}
export async function renderActivity(body) {
  body.innerHTML='<p class="activity-intro">What I play. What I listen to.</p><div class="activity-grid"><section class="activity-card"><h3>Steam</h3><div data-service="steam" aria-live="polite">Loading games…</div></section><section class="activity-card"><h3>THE FINALS</h3><div data-service="finals" aria-live="polite">Loading stats…</div></section><section class="activity-card activity-music"><h3>Spotify</h3><div data-service="spotify" aria-live="polite">Loading playlists…</div></section></div>';
  const grid=body.querySelector('.activity-grid');
  if (!pending || Date.now() > expires) {
    expires = Date.now() + 600000;
    pending = ACTIVITY.endpoint ? fetch(ACTIVITY.endpoint, {signal:AbortSignal.timeout(12000)}).then(r=>{if(!r.ok)throw new Error('unavailable');return r.json();}).catch(()=>null) : Promise.resolve(null);
  }
  const data=await pending;
  if (!grid.isConnected) return; // A slow response must not replace another tab.
  for (const [name, render] of Object.entries({steam:steamCard,finals:finalsCard,spotify:spotifyCard})) {
    grid.querySelector(`[data-service="${name}"]`).innerHTML=render(data?.[name] || {status:ACTIVITY.endpoint?'unavailable':'not_connected'});
  }
  if (!data) pending=null;
  grid.addEventListener('click', e=>{
    const button=e.target.closest('[data-playlist]');if(!button)return;
    const id=button.dataset.playlist;if(!/^[a-zA-Z0-9]{22}$/.test(id))return;
    const frame=document.createElement('iframe');frame.title=`Spotify playlist: ${button.dataset.title}`;
    frame.src=`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`;
    frame.height='352';frame.width='100%';frame.loading='lazy';
    frame.allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    frame.referrerPolicy='strict-origin-when-cross-origin';button.replaceWith(frame);
  });
}
