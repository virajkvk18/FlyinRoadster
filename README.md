# Thruster Void — Stunt Driving Lab v2

Three.js + Rapier stunt driving in a black void with illuminated ramps and six selectable procedural vehicles.

## Run

Install Node.js 22.12+ (Node 24 works), then double-click START-GAME.bat. Or run `npm install` followed by `npm run dev` and open http://localhost:5173.

The first installation needs internet. If npm reports ENOTFOUND, check connectivity and retry. Desktop keyboard and WebGL are required. Google Fonts are optional and have local fallbacks.

## Upgrades

- Three facilities: Mega Gap (65 m), Orbital (95 m / higher ramp), Precision (45 m / narrow receiver).
- Live pending score, flip/spin/roll labels, airtime and altitude above the facility baseline.
- Clean landings bank points and increase the combo up to 5x. Opposite rotations cancel instead of rewarding wobbling.
- Receiver checkpoint, automatic fall recovery and manual recovery, finish gate and run summary.
- Synthesized engine audio and landing/recovery cues, with a sound toggle.
- Chase, side and overhead cameras, speed-sensitive field of view, textured road, runway markers and Roadster rear wing.
- High/low FX toggle, clickable pause menu and compact-screen HUD adjustments.
- Stronger braking, reverse-speed limit and cleanup of old vehicle materials and particles.

## Controls

| Input | Action |
| --- | --- |
| W/S or Up/Down | Accelerate / brake / reverse; pitch in air |
| A/D or Left/Right | Steer; roll in air |
| Q/E or PageUp/PageDown | Yaw in air |
| Shift | Drift / handbrake |
| Tap Space | Jump, using pressure |
| Hold Space | Ground handbrake / airborne lift |
| X | Recover to checkpoint; keep banked score and elapsed time, reset combo |
| R | Start a new run, clearing score and time |
| C | Cycle three cameras |
| Escape | Pause / resume |

Build speed toward the ramp. Release W in flight to stop commanding pitch. Use air controls sparingly: they consume pressure. Land upright on all four wheels to bank the stunt and refill. Hard landings lose the pending stunt and combo. Falling loses pending points but keeps banked points. Reach the receiver checkpoint to enable recovery there, then cross the finish gate.

## Files

- index.html: entry point.
- src/main.js: rendering, track generation, vehicles, suspension and simulation.
- src/experience.js: course definitions, interface additions and synthesized audio.
- src/stunts.js: shared flight scoring logic.
- src/style.css: interface styles.
- tests/stunts.test.js: scoring regression checks.
- START-GAME.bat: Windows launcher.

## Verification

`npm test` runs scoring checks without dependencies. `npm run build` produces dist; `npm run preview` serves it locally.

Version 2 JavaScript syntax checks and three scoring tests passed. Full build and browser gameplay verification were blocked because this environment could not resolve registry.npmjs.org to install dependencies. Physics tuning and visual appearance still need an interactive playtest.

Vehicle models are simplified original procedural approximations. This prototype does not include licensed meshes, deformation/damage, replay recording, multiplayer or touch driving controls.
