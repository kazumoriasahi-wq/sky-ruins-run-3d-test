# Sky Ruins Run 3D — Playables preparation

Version 2.4, checked against official documentation on 2026-10-18. This is SDK integration preparation, not YouTube publication, certification, partner approval, or a ninth-game application submission.

## Runtime and loading

`index.html` loads https://www.youtube.com/game_api/v1 before host.js, engine.js, music.js, renderer.js and game.js. The startup panel stays visible and the main menu stays inert until data and language load successfully. firstFrameReady announces the startup panel; gameReady follows successful loading and an interactive menu. Retry never replaces unreadable data with an empty record. Ready signals are sent once.

Seven runtime files: index.html, style.css, host.js, engine.js, music.js, renderer.js, game.js. The submission ZIP excludes all mock SDKs, local fixtures, tests, guides and development servers. No external fonts, images, models, music files, analytics or ad integrations. WebGL unsupported devices retain the visible 2D fallback. SDK is the only external script.

## Host behavior

- IN_PLAYABLES_ENV gates all platform behavior. Hosted progress uses only game.loadData/saveData; browser progress keeps sky_ruins_run_3d_v1 and existing records.
- Save schema1 retains best distance, points, lifetime coins, run count, outfit, audio preference, low-power setting and route. Older schema1 saves lacking the last two fields receive defaults. Negative, malformed or future-version data blocks starting and saving. Language is never stored.
- Save at100m checkpoints, level changes, pause, settings changes and end of run. Writes serialize and coalesce; failures stay dirty for a later retry. Host pause checkpoints then allows a final save. A run itself restarts after a full reload; lifetime progress and bests persist.
- Score dimension is **best distance in whole meters**, matching the BEST…m HUD and cloud best. engagement.sendScore uses only a successfully persisted best; failures are retried on later flush/resume. Points remain a separate in-game statistic.
- onPause stops RAF and closes AudioContext, clears gestures and makes game/dialog controls inert. No game rendering, input or audio restarts until onResume. Page Visibility/blur listeners are registered only outside Playables. A host pause preserves an already-open in-game pause/settings dialog.
- isAudioEnabled/onAudioEnabledChange override in-game preferences. Hosted settings hide the master mute switch; YouTube controls audio. Audio begins only after the player starts, or resumes an already-started run.
- getLanguage determines hosted language; no navigator or URL override is used there. Japanese and English are supported; other tags use English. Loading errors allow retry.

## Verification

Run `node --test tests.cjs music-tests.cjs render-tests.cjs progression-tests.cjs host-tests.cjs`:48 assertions/checks across the engine,100 seeded5500m routes,15 levels, projection, music and host adapter.

Local preview: `node serve.cjs`. For the official documented CSP, set RUINS3D_CSP=1 before launching. This header applies to index.html and mock-sandbox.html; the outer diagnostic harness is unrestricted so it can contain the game iframe. The sandboxed game itself receives the official header. sdk-lab.html is explicitly a mock, not official certification. It provides pause, mute, language, save/load failure, restore, reload and status controls, with actual RAF and AudioContext counters.

Observed mock checks: firstFrameReady→loadData/getLanguage→gameReady; pause held14m/19 RAF callbacks with0 audio contexts over separate observations; muted resume advanced distance with0 audio contexts; unmute reopened audio; pause closed it and saved; reload restored133m best; load failure prevented menu/ready/save until retry; successful retry restored the record; SDK English switched the entire menu. Normal browser retained428m best. Game rendered under the documented CSP without captured violations.

## Remaining release work

1. Complete official SDK Test Suite checks with the authorized game/invite environment; preserve its results separately from mock results.
2. Test on physical iPhone/Android inside YouTube, including interruption, audio, cloud restore across sessions and GPU performance. Browser device emulation does not replace this.
3. Confirm all current technical/content/accessibility requirements, performance and metadata in the authorized developer portal. No claim of full certification is made.
4. After the user's rights confirmation and request, add the ninth game to the interest/application submission. Existing eight games and their application are unchanged here.

Sources: [SDK](https://developers.google.com/youtube/gaming/playables/reference/sdk), [integration requirements](https://developers.google.com/youtube/gaming/playables/certification/requirements_integration), [official test/CSP guide](https://developers.google.com/youtube/gaming/playables/reference/test_suite_guide).

Backup before this integration: SKY-RUINS-RUN-3D-v2.3-before-playables.zip, source commit79f2768fccbeb00f8bacc006a3158beb42ce6ff3. Existing eight games and original sky-ruins-run-test are untouched.
