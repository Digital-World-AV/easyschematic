# DWAV notes (read before touching this fork)

This is Digital World Audio Visual's fork of
[duremovich/EasySchematic](https://github.com/duremovich/EasySchematic),
self-hosted at **https://dwav-easyschematic.onrender.com** (Render static
site `dwav-easyschematic`, id `srv-daabcr4s728c73ftlss0`, workspace
`tea-d9tseqe417fc73f6cbk0`). Full project context, decisions, and the CRM
integration this fork feeds: see
[dwav-design-studio](https://github.com/Digital-World-AV/dwav-design-studio)
(private), especially `docs/CREATED.md`.

This file is DWAV-only — never touched by upstream, safe to keep current
across merges from `duremovich/EasySchematic`.

## Always do this before verifying ANY change on the live site

**The app registers a service worker (`/sw.js`) that aggressively caches the
bundle.** A fresh page load — even a forced/hard navigation — can silently
keep serving the OLD JavaScript after a successful deploy, making a real
fix look like it didn't work. This cost real time twice in one session
before it was caught (see `docs/CREATED.md`, "DWAV-verified badge" entry).

**Before concluding a deployed change "isn't working," always run this in
the browser console (or via an automation's JS-exec tool) first, THEN
reload:**

```js
const regs = await navigator.serviceWorker.getRegistrations();
for (const r of regs) await r.unregister();
if (window.caches) {
  const keys = await caches.keys();
  await Promise.all(keys.map(k => caches.delete(k)));
}
```

Then hard-navigate (not just refresh) and check the version string in the
bottom-left of the editor (`vX.Y.Z (commitsha)`) matches the commit you just
pushed before drawing any conclusion about whether the code works.

## Auto-deploy is currently broken for this fork

Render's `autoDeploy` is configured correctly (`yes` / trigger `commit` /
branch `master`), but pushes via the GitHub Contents API have NOT triggered
a build automatically — likely because Render's GitHub App is scoped to
"selected repositories" and was never granted access to this fork.

**One-time fix (manual, in GitHub, not doable via API):** GitHub → the
`Digital-World-AV` org → Settings → Installed GitHub Apps → Render →
Configure → add `easyschematic` to the repository access list.

**Until that's fixed:** every push needs a manual deploy trigger (Render
dashboard "Manual Deploy", or `mcp__render__trigger_deploy` if working via
Claude with the Render MCP connector).

## Adding a DWAV device to the shared library

Devices in `src/devices/dwav.ts` ship to every visitor automatically (no
import, no account, no localStorage) — see `docs/CREATED.md` for the full
mechanism (`generate-fallback` → `deviceLibrary.fallback.json`, merged
under the live community catalog in `templateApi.ts`). To add one:

1. Append a `DeviceTemplate` object to the `templates` array in
   `src/devices/dwav.ts`, using the shared `port()` helper from `./_helpers`.
   Give it a stable UUID (`id`) and set `dwavVerified: true`.
2. Push. Trigger a deploy manually until the auto-deploy gap above is fixed.
3. Verify per the service-worker steps above — search the device's model
   number in the real device search box and confirm the orange **DWAV**
   badge appears (not just "no error in the console").

`deviceLibrary.ts` (the file that imports `dwav.ts` into `DEVICE_TEMPLATES`)
does not need to change again for future devices — only `dwav.ts` itself.
