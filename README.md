# Sky Ruins Run 3D / そらいろ遺跡ラン 3D

A separate v2.0 edition of the original three-lane runner. Original eight projects and sky-ruins-run-test are preserved. No shared writes or deployments. New storage key: sky_ruins_run_3d_v1.

Actual WebGL 3D: custom triangle-batched renderer, perspective camera following lane movement, curved elevated roads, low-poly temples/trees/floating islands, waterfalls, distance fog and directional lighting. Articulated character with running limbs, jump/slide poses, backpack/scarf/lantern companion, contact-shadow shapes, coin/powerup models and 3D celebration particles. Camera impact and a soft landing sound reinforce jumps. No third-party runtime, models, images, fonts or recorded audio.

Controls and fair-generation engine retained: swipes/buttons/arrows/WASD, jump crates/gaps, slide arches, dodge tall crystals; coin trails,8-second magnets,one-hit shields,3 per-run missions and outfit unlocks. Best450m/900m unlock next-run region selection; choosing a starting region during a run takes effect next run. Record state is independent from original edition.

Low-power mode reduces scenery density and caps pixel ratio at1 instead of1.5; hazard/coin logic stays identical. Context-loss handling saves a checkpoint and stops the game, with an explicit reload/new-run action. Unsupported WebGL falls back to the retained2D renderer with a visible notice. Cosmetics respect reduced-motion settings.

Preview: node serve.cjs,127.0.0.1:4198. Checks: node tests.cjs, node music-tests.cjs,node render-tests.cjs (29 total, including100 seeded1000m routes). context-lab.html is a local QA fixture, excluded from runtime ZIP. Runtime: index.html,style.css,engine.js,music.js,renderer.js,game.js.

Physical iPhone GPU performance awaits user confirmation. No Playables SDK integration, official certification or ninth-game form update has been performed.
