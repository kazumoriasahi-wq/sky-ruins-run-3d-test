# Sky Ruins Run 3D / そらいろ遺跡ラン 3D

A separate v2.4 edition of the original three-lane runner. Original eight projects and sky-ruins-run-test are preserved. No shared writes or deployments. New storage key: sky_ruins_run_3d_v1.

Actual WebGL 3D: custom triangle-batched renderer, perspective camera following lane movement, curved elevated roads, low-poly temples/trees/floating islands, waterfalls, distance fog and directional lighting. Articulated character with running limbs, jump/slide poses, backpack/scarf, contact-shadow shapes, coin/powerup models and 3D celebration particles. Camera impact and a soft landing sound reinforce jumps. No third-party runtime, models, images, fonts or recorded audio.

Controls and fair-generation engine retained: swipes/buttons/arrows/WASD, jump crates/gaps, slide arches, dodge tall crystals; coin trails,8-second magnets,one-hit shields,3 per-run missions and outfit unlocks. Best450m/900m unlock next-run region selection; choosing a starting region during a run takes effect next run. Record state is independent from original edition.

Low-power mode reduces scenery density and caps pixel ratio at1 instead of1.5; hazard/coin logic stays identical. Context-loss handling saves a checkpoint and stops the game, with an explicit reload/new-run action. Unsupported WebGL falls back to the retained2D renderer with a visible notice. Cosmetics respect reduced-motion settings.

Preview: node serve.cjs,127.0.0.1:4198. Checks: node tests.cjs, node music-tests.cjs,node render-tests.cjs (29 total, including100 seeded1000m routes). context-lab.html is a local QA fixture, excluded from runtime ZIP. Runtime: index.html,style.css,engine.js,music.js,renderer.js,game.js.

Physical iPhone GPU performance awaits user confirmation. SDK integration preparation is implemented in v2.4. Official certification and ninth-game form submission remain pending.

## v2.1 — grounded adventure visuals
Rounded, articulated runner with swinging arms, jointed legs, hair, boots and canvas backpack. Layered mountain slopes, trees, eroded rock, masonry blocks and restrained surface grain replace the earlier toy-like forms. Lower chase camera, gradual field-of-view widening, close vegetation and peripheral wind trails strengthen speed cues; reduced-motion mode suppresses camera bounce, field-of-view changes and trails. Engine speed, collision rules and stored records are unchanged. Low-power mode reduces scenery and mesh detail.

Previous v2.0 is preserved locally in SKY-RUINS-RUN-3D-v2.0-backup.zip and in GitHub commit a623d7b4101c3345cc33ef5c7c9c5cdab69445f0.

## v2.2 — distance progression and running gait
Every250m increases the level (LV1–7; max at1500m). Speed targets16,18.5,21,23.5,26,28.5,31m/s ramp at0.9m/s². Spawn intervals shrink48→27m plus bounded jitter; basic single-lane obstacles lead into two-lane mixed patterns with rocks fromLV3. The first three tutorial rows and an always-clear lane remain. Pattern changes apply to newly generated rows, allowing visible old rows to pass naturally. Speed-up notice and persistent level/speed/next-distance HUD support Japanese and English. Gait phase integrates distance continuously, so acceleration never snaps the pose. Larger opposing arm swing, stride, knee lift, body bounce and forward lean scale with speed; reduced motion keeps the running pose still.

Checks include progression-tests.cjs (six additional checks, including100 seeds safely navigating3000m through all seven levels). motion-lab.html/js are local visual QA fixtures and excluded from runtime package. Previous v2.1 is preserved in SKY-RUINS-RUN-3D-v2.1-backup.zip and commit ad40cc2c7134447c3b8224172464ce8917fc9ec2. Saved-record key and existing projects are unchanged.

## v2.3 — fifteen levels
Level cap15 at3500m;250m steps retained. LV1–7 use the existing speed curve, then targets rise by0.75m/s each level to37m/s. Late row spacing grows with speed to retain at least0.9seconds between rows. LV9 introduces guaranteed changing safe lanes and mixed obstacle pairs; LV11 removes single-obstacle rest rows; LV13 adds periodic full-width safe-lane switches. All rows retain a clear lane and visual approach time. Saved records and original projects are unchanged. v2.2 backup: SKY-RUINS-RUN-3D-v2.2-backup.zip; source commit094493018a8834b0096a614018cb4632ca1f0f20. Updated progression tests cover100 seeded runs to5500m and the full level cap.

## v2.4 — YouTube Playables SDK preparation
Official v1 SDK loading, first-frame/ready signals, cloud records with safe retry and old-save compatibility, best-distance scoreboard, authoritative host mute, full host pause/resume and SDK language integration. Browser records retain their existing key. See PLAYABLES.md for behavior, tests, official sources and remaining certification work.48 checks pass; mocked host tests are separate from official certification.
