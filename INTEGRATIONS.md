# Personal activity integrations

The **Off duty** tab loads selected public data from a separate Cloudflare Worker.
No credentials belong in `src`, `index.html`, `hero.js`, or GitHub Pages assets.

## Current wiring

- Backend: `https://matthew-portfolio-activity.matthew-portfolio.workers.dev/v1/activity`
- Finals account: `Girbaud#8191`.
- Steam ID: `76561198145578413`, resolved from the owner's supplied profile
  `https://steamcommunity.com/id/TheBadAzzMatt/`. Profile visibility is public;
  game-details access verified through the deployed backend: 60 games returned
  on 2026-11-06. The API key is installed as an encrypted Worker secret.
- Spotify: authorization required. Only explicitly public playlists are returned.
- Finals replacement key is installed and authenticated career/weapon responses
  are verified. The original unused key is revoked. Spotify is deferred by the owner.
  The UI distinguishes disconnected, private,
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
Career field names were verified against an authenticated response: `kills`,
`deaths`, `revivesDone`, `roundsWon`, and `roundsPlayed`. Rounds won are labelled
explicitly; they are not presented as match wins. The untyped scorecards and
playtime fields are excluded.
No raw session tokens, teammates, private account data or editable privacy settings
are exposed by the public Worker. Personal Finals keys are more privileged than
this display needs; keep them server-side.

Successful provider responses are cached at the edge for 10 minutes. Failures are
cached for one minute. Providers fail independently. Requests have time and response
size limits; the fixed GET endpoint cannot proxy arbitrary URLs or account writes.
Rate limiting is 30 requests/minute/IP; CORS allows the portfolio origin.

Finals data requires visible Finals.ID credit and CC BY-NC-SA 4.0 attribution.
The helper app still renews Embark access; the personal API key doesn't replace it.
On 2026-11-06, personal-key creation initially failed server validation for a missing
`accessCode`. Creating an empty owned team and submitting its valid code with the
personal-key form resolved that bug. The Personal website key now exists; secure
transfer initially remained pending. A replacement key was installed and verified
on 2026-11-06; the original key was revoked after successful authentication.
See `FINALS_INTEGRATION_NOTES.md` for the investigation and exact scope.

## Build and deploy

`npm ci`, `npm test`, `npm run build`, `npm run worker:check`.
`npm run worker:deploy` deploys the backend separately. GitHub Pages publishes only
`dist/`, excluding backend code, local tooling, and credentials.

The separate live demo is https://matthew-portfolio-preview.matthew-portfolio.workers.dev.
Run `npm run preview:deploy` to build and publish only `dist/` to that preview.
The backend allows both the production and preview origins; credentials remain
in the backend Worker. Preview deployment does not change GitHub Pages.

The guide retains only its latest answer in an optional accessible dialog; normal
questions update the 3D bubble without a transcript or automatic scrolling.
