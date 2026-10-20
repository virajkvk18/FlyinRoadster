# Flyin Roadster - Driving Lab v3

A browser-based Three.js and Rapier stunt driving game. Live site: https://flyinroadster.vercel.app/

## Three featured modes

- **The 0-60:** launch from rest and measure your time to 60 mph (96.56 km/h). Records are kept per vehicle.
- **The Kickflip:** jump from the marked pad, complete a full airborne roll and land upright.
- **The Ramp:** clear the gap and cross the finish gate. Training, Classic and Extreme layouts offer 28, 55 and 80 metre gaps.

## Run locally

Install Node.js 22.12+ (Node 24 also works). Double-click START-GAME.bat, or run:

```sh
npm install
npm run dev
```

Open http://localhost:5173. First installation requires internet. The game needs WebGL; Google Fonts are optional with local fallbacks.

## Controls

| Input | Ground | Air |
| --- | --- | --- |
| W / S | Accelerate / brake / reverse | No pitch input |
| A / D | Steer | No roll input |
| Space | Jump immediately | - |
| Arrow up / down | - | Pitch |
| Arrow left / right | - | Roll |
| Q / E | - | Yaw |
| Shift | Handbrake / drift | Thruster lift |
| F | - | Hold to level |
| X | Recover | Recover |
| R | New run | New run |
| C | Cycle cameras | Cycle cameras |
| Escape | Pause / resume | Pause / resume |

Hold W through the countdown to launch. For a kickflip, jump from rest and hold a roll arrow, then release it before landing. Smooth air control is enabled by default and slows rotation after release. Turn it off in the menu for more momentum. Touch buttons appear on coarse-pointer devices.

A clean landing banks points and refills pressure. Hard landings lose the pending stunt. Recovery keeps banked points in stunt modes; a sprint recovery starts a fresh timed attempt. Ramp recovery moves to the receiver after a successful landing. Personal bests are stored locally per mode and vehicle.

## Improvements

- Three animated mode cards, mode-specific goals, countdowns and result screens.
- Smoothed steering/throttle, speed-dependent turning, wheel steering and suspension visuals.
- Separate driving and flight inputs prevent accidental flips when accelerating off a ramp.
- Fixed-step simulation with interpolated rendering and a chase camera that holds its heading during rolls.
- Shaped procedural bodywork, angled glass, metallic reflections, moving shadows and restrained bloom.
- Track lighting merged into two meshes; bounded vapor particles and low-FX option.
- Pause/help dialogs, touch inputs, responsive menus and clear recovery controls.

## Project structure

- src/main.js: simulation, rendering and mode lifecycle.
- src/gameplay.js: mode definitions, smoothing, timer and landing rules.
- src/input.js: keyboard/touch input and stuck-key cleanup.
- src/vehicle.js: six procedural vehicle models.
- src/track.js: course geometry, colliders and batched lights.
- src/ui.js: menus, HUD, help and dialogs.
- src/experience.js: synthesized audio.
- src/stunts.js: stunt scoring.
- src/style.css: responsive interface.
- tests/: scoring, steering, timing and completion regressions.

## Checks and deployment

```sh
npm test
npm run build
npm run preview
```

Eight logic tests and JavaScript syntax checks passed during implementation. Local dependency installation was blocked by DNS access to registry.npmjs.org; production build and interactive checks are tracked separately. Vercel uses the Vite preset, `npm run build`, and the `dist` output directory.

Models and handling are stylized procedural approximations, not manufacturer-accurate assets or a validated vehicle simulator. There is no multiplayer, vehicle deformation or replay recording.
