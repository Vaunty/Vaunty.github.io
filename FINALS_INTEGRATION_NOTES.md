# Finals.ID investigation — 2026-11-06

## Personal key creation resolved

The website's `createKey` action validates `accessCode` as either an 18-digit code
or an empty string. Its normal personal-key form omits that field. Submissions
without it, or with an empty field, failed as `null`; whitespace failed the regex.

Created an empty team named **Matthew personal website**, owned by Girbaud#8191,
using the site's supported immediate team-creation flow. Supplying that team's
valid code alongside the existing **personal** key form succeeded. The resulting
**Personal website** key is shown as personal/active, not a team or service key.
No other members were invited and no organization application was submitted.
The key is displayed once in a readonly textarea; it was not copied into source,
logs, or this document. Secure transfer to the Worker is the remaining step.

The empty team still exists; no background tracking task was created.

## Public website data: investigated, not used

The public profile renders `.career-card .career-mode` sections containing career
stats. Its `TopWeapons` client uses a read-only `weaponsData` action with
`{tag, owner:false}`. Both returned data in the browser with credentials omitted.
However, ordinary Node and Cloudflare Worker requests received Cloudflare's 403
challenge. A temporary public-page adapter was tested, then removed. The deployed
backend is back on the documented API; it does not scrape or bypass that challenge.

## Helper architecture: static evidence

Downloaded the published v2.5.0 portable archive from the official download page,
extracted it for static inspection only, and did not run it. Its executable SHA-256
matches the VirusTotal file link published beside that download:
`46f1f88cd90678be153780b496b271609086493d55d2e9bb9534ba3d02afb02e`.

Strings/imports in the Rust/Tauri binary indicate this flow:

1. Wait for the local Steam client and obtain a Steam Web API auth ticket using
   `SteamAPI_ISteamUser_GetAuthTicketForWebApi`.
2. Exchange Steam authentication with Embark's OAuth service.
3. Submit an Embark bearer through Finals.ID's helper interface.
4. Renew it and read account stats through the Finals.ID backend.

This supports an authenticated desktop-helper design, not an anonymous Embark
stats API. The exact request signing and full protocol were not reconstructed or
executed. No embedded application credential was reused. A replica is unnecessary
for the website now that personal-key creation works; the official helper still
handles the game's session renewal.

Sources: https://finals.id/download, https://finals.id/privacy,
https://finals.id/account/api, https://api.finals.id/ and the published executable.
