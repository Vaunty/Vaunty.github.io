# Personal activity integrations

The **Off duty** tab loads selected public data from a separate Cloudflare Worker.
No credentials belong in `src`, `index.html`, `hero.js`, or GitHub Pages assets.

## Current wiring

- Backend: `https://matthew-portfolio-activity.matthew-portfolio.workers.dev/v1/activity`
- Finals account: `Girbaud#8191`.
- Steam ID: `76561198145578413`, resolved from the owner's supplied profile
  `https://steamcommunity.com/id/TheBadAzzMatt/`. Profile visibility is public;
  game-details access still needs verification with the API key.
- Spotify: authorization required. Only explicitly public playlists are returned.
- API credentials: not installed yet. The UI distinguishes disconnected, private,
  unavailable, and empty data instead of inventing statistics.

## Backend configuration

Set `STEAM_ID` (17-digit SteamID64) in `worker/wrangler.jsonc` and the public profile
link in `src/activity-config.js`. Supply these Worker secrets through Wrangler's
secret input, never command-line values or a checked-in file:

- `STEAM_API_KEY`
- `FINALS_API_KEY`
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

For Spotify, register `http://127.0.0.1:8888/callback` in the developer app, then run
`node scripts/authorize-spotify.mjs PRIVATE_INPUT_PATH PRIVATE_OUTPUT_PATH`.
The input is JSON with `client_id` and `client_secret`. Open
`http://127.0.0.1:8888/login` to authorize. The output is a private JSON file for
`wrangler secret bulk`; it must stay outside this repository. Authorization uses
state validation and PKCE. It requests public access only, not email, listening
history, playback control, or private playlists.

## Data boundaries

Steam returns selected game names, playtime and library totals. Finals returns
an allowlist of career metrics and top weapon totals, keeping game modes separate.
Verify the career field names against an authenticated response before declaring
the integration live: the public OpenAPI spec leaves `stats` as an untyped object.
No raw session tokens, teammates, private account data or editable privacy settings
are exposed by the public Worker. Personal Finals keys are more privileged than
this display needs; keep them server-side.

Successful provider responses are cached at the edge for 10 minutes. Failures are
cached for one minute. Providers fail independently. Requests have time and response
size limits; the fixed GET endpoint cannot proxy arbitrary URLs or account writes.
Rate limiting is 30 requests/minute/IP; CORS allows the portfolio origin.

Finals data requires visible Finals.ID credit and CC BY-NC-SA 4.0 attribution.
The helper app still renews Embark access; the personal API key doesn't replace it.
On 2026-11-06, the personal key form failed server validation for a missing
`accessCode`, including a retry with that optional field explicitly empty.
No key was created during those attempts.

## Build and deploy

`npm ci`, `npm test`, `npm run build`, `npm run worker:check`.
`npm run worker:deploy` deploys the backend separately. GitHub Pages publishes only
`dist/`, excluding backend code, local tooling, and credentials.

The guide retains only its latest answer in an optional accessible dialog; normal
questions update the 3D bubble without a transcript or automatic scrolling.
