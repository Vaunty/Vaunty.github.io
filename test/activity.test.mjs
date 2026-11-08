import test from 'node:test';
import assert from 'node:assert/strict';
import worker, {sanitizeFinals,sanitizeSpotify,sanitizeSteam,getProvider} from '../worker/index.js';

test('Spotify publishes only explicitly public playlists and constructs trusted URLs',()=>{
 const result=sanitizeSpotify([{items:[{id:'A'.repeat(22),name:'Public',public:true,external_urls:{spotify:'javascript:bad'}},{id:'B'.repeat(22),public:false},{id:'C'.repeat(22),public:null},{id:'bad',public:true}]}]);
 assert.equal(result.playlists.length,1);assert.equal(result.playlists[0].url,`https://open.spotify.com/playlist/${'A'.repeat(22)}`);
});
test('Finals allowlist removes hidden/session fields and preserves mode boundaries',()=>{
 const data=sanitizeFinals({season:'lifetime',modes:[{mode:'casual',capturedAt:'2026-11-06',stats:{kills:12,deaths:6,token:'secret',friends:['private'],wins:-1}},{mode:'ranked',stats:{kills:3}}]},{modes:[{mode:'casual',weapons:[{name:'AKM',kills:2,damage:42,sessionToken:'private'}]}]},'Name#1234');
 assert.deepEqual(data.modes[0].stats,{kills:12,deaths:6});assert.equal(data.modes[1].stats.kills,3);assert(!JSON.stringify(data).includes('private'));assert(!JSON.stringify(data).includes('secret'));assert(data.profileUrl.includes('%23'));
});
test('Private Steam library is unavailable rather than fabricated zero hours',()=>{
 const data=sanitizeSteam({response:{}},{response:{}},'12345678901234567');assert.equal(data.visible,false);assert.equal(data.totalMinutes,null);assert.equal(data.gameCount,null);
});

test('Finals uses verified API fields without treating rounds won as match wins',()=>{
 const result=sanitizeFinals({modes:[{mode:'casual',stats:{kills:36809,deaths:27604,revivesDone:8692,roundsWon:2603,roundsPlayed:5103,scorecards:{},timePlayed:2863640614}}]},{modes:[]},'Name#1234');
 assert.deepEqual(result.modes[0].stats,{kills:36809,deaths:27604,revivesDone:8692,roundsWon:2603,roundsPlayed:5103});
});
test('Steam reports correct recent playtime and lifetime totals without leaking raw fields',()=>{
 const g={appid:123,name:'Game',playtime_forever:120,playtime_2weeks:30,private:'secret'};
 const data=sanitizeSteam({response:{game_count:1,games:[g]}},{response:{games:[g]}},'12345678901234567');assert.equal(data.totalMinutes,120);assert.equal(data.recent[0].recentMinutes,30);assert(!JSON.stringify(data).includes('secret'));
});
test('Upstream errors cannot leak credentials and failed requests are briefly cached',async()=>{
 const original=globalThis.fetch;globalThis.fetch=async()=>{throw new Error('SECRET_STEAM_KEY');};
 const jobs=[];let stored;const cache={match:async()=>null,put:async(k,v)=>{stored=v;}};
 try {const data=await getProvider('steam',new Request('https://test/v1/activity'),{STEAM_API_KEY:'SECRET_STEAM_KEY',STEAM_ID:'12345678901234567'},{waitUntil:p=>jobs.push(p)},cache);await Promise.all(jobs);assert.deepEqual(data,{status:'unavailable'});assert.equal(stored.headers.get('cache-control'),'public, max-age=60');} finally {globalThis.fetch=original;}
});
test('Cache hit performs no upstream request',async()=>{
 const data=await getProvider('steam',new Request('https://test/v1/activity'),{}, {},{match:async()=>Response.json({status:'ok',fetchedAt:'older'})});assert.equal(data.fetchedAt,'older');
});

test('Provider redirects are rejected without forwarding the Steam credential',async()=>{
 const original=globalThis.fetch;const jobs=[];
 globalThis.fetch=async(url,options)=>{
  assert.equal(options.redirect,'manual');
  return new Response(null,{status:302,headers:{Location:'https://untrusted.test'}});
 };
 try {
  const data=await getProvider('steam',new Request('https://test/v1/activity'),{STEAM_API_KEY:'private-key',STEAM_ID:'12345678901234567'},{waitUntil:p=>jobs.push(p)},{match:async()=>null,put:async()=>{}});
  await Promise.all(jobs);assert.deepEqual(data,{status:'unavailable'});
 } finally {globalThis.fetch=original;}
});
test('Public route rejects mutations, unrelated origins and unknown paths',async()=>{
 const env={ALLOWED_ORIGIN:'https://vaunty.github.io'};
 for(const [url,init,status] of [['https://test/v1/activity',{method:'POST'},405],['https://test/v1/activity',{headers:{Origin:'https://evil.test'}},403],['https://test/v1/me/privacy',{},404]])assert.equal((await worker.fetch(new Request(url,init),env,{})).status,status);
});

test('Production and preview preflights return the requesting allowed origin',async()=>{
 const env={ALLOWED_ORIGIN:'https://vaunty.github.io',PREVIEW_ORIGIN:'https://preview.example'};
 for(const origin of Object.values(env)) {
  const response=await worker.fetch(new Request('https://test/v1/activity',{method:'OPTIONS',headers:{Origin:origin}}),env,{});
  assert.equal(response.status,204);assert.equal(response.headers.get('Access-Control-Allow-Origin'),origin);assert.equal(response.headers.get('Vary'),'Origin');
 }
});
