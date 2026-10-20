# 🚀 Flyin Roadster — Supersonic Flight & SpaceX Thruster Simulator

[![Three.js](https://img.shields.io/badge/Three.js-r180-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![WebGL 2.0](https://img.shields.io/badge/WebGL-2.0-990000?style=for-the-badge&logo=webgl)](https://www.khronos.org/webgl/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tests](https://img.shields.io/badge/Tests-8%20Passed-brightgreen?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> **Flyin Roadster** is a high-performance 3D web driving and flight simulator inspired by the next-generation **Tesla Roadster** equipped with the rumored **SpaceX Cold-Gas Thruster Package**. Launch off vertical ramps, fire composite pressure thrusters to soar over multi-lane highway traffic, bounce across car roofs, collect golden Elon heads, and race to **Mars** in a cinematic interplanetary blastoff.

---

## ⚡ Game Overview & Core Concept

Inspired by Elon Musk's announcement of a flying sports car engineered with composite overwrapped pressure vessels (COPVs) and cold-gas thrusters, **Flyin Roadster** brings the physics of extreme electric acceleration and airborne thruster flight to life right in your web browser with zero installs:

- **💨 SpaceX Cold-Gas Thruster Flight**: Hold `Space` / `W` (or touch `FLY`) to fire four high-pressure thrusters. Lift above gridlocked city traffic jams, leap across highway chasms, and perform mid-air barrel rolls.
- **⚡ Conic Pressure Tank Management**: Circular pressure gauge depletes during aerial burn and automatically recharges when grounded via regenerative vehicle compressors.
- **🚗 Roof Stomp & Traffic Physics**: Bounce across vehicle roofs (`STOMP!`) to recover propellant and chain combo multipliers, or ram obstacles to launch them into the air (`CRASH!`).
- **🪙 5 Golden Elon Head Collectibles**: Eat golden Elon coins along the 3 km highway to trigger instant **TURBO** surges and propellant tank top-offs.
- **🔴 Mars Launch Pad (3 km / 3000m)**:
  - **$\ge$ 5 Elons Collected**: The thrusters ignite at full power, punching through the atmosphere into deep space, engaging warp speed through the stars, and touching down at the **Musk Empire** on Mars with celebratory fireworks.
  - **$<$ 5 Elons Collected**: Thrusters flame out mid-flight, plummeting back to Earth (`LAUNCH FAIL`).

---

## 🎮 Game Modes

Flyin Roadster features **5 distinct mission modes** selectable from the main title menu:

| Mode | Icon | Objective | Highlight |
| :--- | :---: | :--- | :--- |
| **Mars Flight** | 🚀 | Race 3 km to Mars Launch Pad | Eat 5 Elons, dodge traffic jams, and achieve fastest time to Mars. |
| **Mega Ramp Gap** | 🛹 | Drop down the giant vert ramp | Hit 220+ km/h, kickflip through the sky, and stick the floating deck landing. |
| **Car Jump** | 🚗 | Leap over parked car lineup | Customizable **1 to 15 parked cars** with kicker launch ramp and landing zones. |
| **Free Roam** | 🌐 | Open stunt playground | Unlimited cold-gas propellant (`tank = 100%`), neon ramps, loops, and instant auto-recovery. |
| **0–60 Sprint** | ⚡ | Precision acceleration test | Standstill drag strip with sub-centisecond crossing telemetry to 60 mph (96.56 km/h). |

---

## 🕹️ Controls Guide

### 🖥️ Desktop / Web Browser View
On desktop screens, the on-screen mobile touch pad is hidden to preserve an expansive, unobstructed view. A clean controls telemetry card is displayed in the **bottom-right**:

| Key | Ground Action | Flight Action |
| :--- | :--- | :--- |
| <kbd>A</kbd> / <kbd>D</kbd> or <kbd>◀</kbd> / <kbd>▶</kbd> | Steer / Lane Change | Aerial Roll / Alignment |
| <kbd>SPACE</kbd> or <kbd>W</kbd> / <kbd>▲</kbd> | Activate Cold-Gas Thrusters (`FLY`) | Sustained Rocket Lift |
| <kbd>S</kbd> / <kbd>▼</kbd> | Regenerative Brake / Reverse | Airbrake Descents |
| <kbd>R</kbd> | Instant Quick Restart | Instant Quick Restart |
| <kbd>C</kbd> | Toggle Camera (Chase, Hood, Orbit) | Toggle Camera View |
| <kbd>M</kbd> | Toggle Audio Synthesizer | Toggle Audio Synthesizer |
| <kbd>P</kbd> / <kbd>ESC</kbd> | Pause / Menu | Pause / Menu |

### 📱 Mobile / Touch Device View
On touchscreen and mobile devices, the game automatically switches to an ergonomic bottom touch pad:
- **Left / Right Wings (`◀` / `▶`)**: One-touch smooth lane switching.
- **Center Jet Ring (`🚀 FLY`)**: Radial conic gauge displaying live tank pressure. Hold to fire thrusters.
- **Skippable Intro**: One-tap `TAP TO SKIP` to jump straight onto the highway.

---

## 📐 Camera & HUD Architecture

- **Clean Center Viewport**: All telemetry (Mode Badge, Distance/Timer, Speedometer, Mars Progress Bar, Elon Coins, and Wanted Stars) is docked on the **Top-Left** alongside the G-Force gauge, leaving the center of the screen **100% unobstructed**.
- **Top-Left G-Force Gauge**: Real-time G-force calculation with dynamic roll-tilt vehicle icon and neon cyan SVG arc.
- **Top-Right Altitude Gauge**: Real-time height in meters with pitch-tilt vehicle silhouette.
- **Top-Right Utilities**: Quick toggles for camera modes, audio mute, and pause dialog.
- **Bottom-Right Controls Card**: Semi-transparent glassmorphism card listing all keyboard shortcuts and live propellant bar.

---

## 🔊 Pure Web Audio Synthesizer Engine

Flyin Roadster requires **zero external audio downloads**. All sound effects and music are synthesized procedurally in real-time using the **Web Audio API**:

- **Dual-Oscillator Electric Powertrain**: Sawtooth and sine wave oscillators routed through dynamic lowpass biquad filters tracking wheel velocity.
- **Cold-Gas Thruster Hiss**: Highpass filtered white noise buffer modulated by thruster firing amplitude.
- **Wind Turbulence**: Speed-dependent bandpass noise tracking $v^2$.
- **Procedural FX**: FM arpeggios for golden coin collections, explosive sub-bass impacts, siren sweeps, roof stomps, and landing chords.

---

## 🛠️ Technology Stack

- **Core**: JavaScript ES6+ (Native ES Modules)
- **3D Graphics Engine**: [Three.js r180](https://threejs.org/) with ACES Filmic Tone Mapping, Bloom Pass, and procedural mesh generation
- **Physics**: Custom high-speed sub-stepped numerical integration with Rapier compatibility
- **Build Tool**: [Vite 7.1](https://vitejs.dev/) with hot module replacement (HMR) and optimized production minification
- **Persistence**: In-browser local storage adapter for records, leaderboards, vehicle skins, and custom pilot names

---

## 🚀 Quickstart & Local Development

### Prerequisites
- **Node.js**: v20+ or v22+
- **Browser**: Chrome, Edge, Firefox, or Safari with WebGL2 support

### Installation
```bash
# Clone the repository
git clone https://github.com/virajkvk18/FlyinRoadster.git

# Navigate to directory
cd FlyinRoadster

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Scripts
```bash
# Run unit test suite
npm test

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Repository Structure

```text
FlyinRoadster/
├── public/
│   ├── favicon.svg          # High-contrast Roadster SVG favicon
│   ├── favicon-32.png       # 32x32 PNG icon
│   └── musk.jpg             # Golden coin avatar asset
├── src/
│   ├── main.js              # Entrypoint, mission mode wireup & init
│   ├── gameEngine.js        # Core 3D engine, physics, audio synth & track generator
│   ├── mockApi.js           # In-browser local leaderboard & state persistence
│   ├── gameplay.js          # Tested math helpers (smoothing, crossing, landing grades)
│   ├── stunts.js            # Aerial rotation and kickflip scoring rules
│   ├── style.css            # Responsive widescreen cyberpunk styling
│   └── track.js             # Track layout and colliders
├── tests/
│   ├── gameplay.test.js     # Unit tests for acceleration, steering & landing
│   └── stunts.test.js       # Unit tests for aerial rotation calculations
├── index.html               # Main viewport & game DOM structure
├── package.json             # Project dependencies and test scripts
└── README.md                # Project documentation
```

---

## 📜 Legal & Attribution

*Flyin Roadster is an experimental, fan-inspired web game created for enthusiast entertainment. Not affiliated with, endorsed by, or sponsored by Tesla, Inc., SpaceX, or Elon Musk.*
