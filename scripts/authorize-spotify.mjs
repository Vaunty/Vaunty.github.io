// Local, one-time OAuth setup. No credentials or codes are printed.
// node scripts/authorize-spotify.mjs PRIVATE_CREDENTIALS_FILE PRIVATE_OUTPUT_FILE
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { randomBytes, createHash, timingSafeEqual } from 'node:crypto';
const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error('Supply private input and output file paths.');
const credentials = JSON.parse(await readFile(input, 'utf8'));
if (!credentials.client_id || !credentials.client_secret) throw new Error('Missing Spotify credentials.');
const state = randomBytes(32).toString('hex');
const verifier = randomBytes(64).toString('base64url');
const redirect = 'http://127.0.0.1:8888/callback';
const auth = new URL('https://accounts.spotify.com/authorize');
auth.search = new URLSearchParams({client_id:credentials.client_id,response_type:'code',redirect_uri:redirect,state,code_challenge_method:'S256',code_challenge:createHash('sha256').update(verifier).digest('base64url')});
const server = createServer(async (req,res)=>{
  const url = new URL(req.url, 'http://127.0.0.1:8888');
  res.setHeader('Cache-Control','no-store');res.setHeader('Content-Type','text/plain; charset=utf-8');
  if (url.pathname === '/login') {res.writeHead(302,{Location:auth.href});res.end();return;}
  if (url.pathname !== '/callback') {res.writeHead(404);res.end('Not found');return;}
  const received=Buffer.from(url.searchParams.get('state') || '');
  if (received.length!==state.length || !timingSafeEqual(received,Buffer.from(state))) {res.writeHead(400);res.end('Invalid authorization state.');return;}
  if (url.searchParams.has('error')) {res.end('Authorization declined. Nothing was saved.');server.close();clearTimeout(timer);return;}
  try {
    const response=await fetch('https://accounts.spotify.com/api/token',{
      method:'POST',headers:{Authorization:`Basic ${Buffer.from(`${credentials.client_id}:${credentials.client_secret}`).toString('base64')}`,'Content-Type':'application/x-www-form-urlencoded'},
      body:new URLSearchParams({grant_type:'authorization_code',code:url.searchParams.get('code'),redirect_uri:redirect,code_verifier:verifier}),signal:AbortSignal.timeout(15000),
    });
    if(!response.ok)throw new Error('Token exchange failed');
    const token=await response.json();if(!token.refresh_token)throw new Error('No refresh token');
    await writeFile(output,JSON.stringify({SPOTIFY_CLIENT_ID:credentials.client_id,SPOTIFY_CLIENT_SECRET:credentials.client_secret,SPOTIFY_REFRESH_TOKEN:token.refresh_token}),{mode:0o600,flag:'wx'});
    res.end('Spotify connected. You can close this tab.');console.log('Spotify credentials saved to the private output file.');
    server.close();clearTimeout(timer);
  }catch{res.writeHead(502);res.end('Authorization could not complete. Please retry the setup.');server.close();clearTimeout(timer);process.exitCode=1;}
});
const timer=setTimeout(()=>{server.close();console.log('Spotify authorization timed out.');process.exitCode=1;},600000);
server.listen(8888,'127.0.0.1',()=>console.log('Authorize Spotify at http://127.0.0.1:8888/login'));
