import { MODES, FACILITIES } from './gameplay.js';
import { FLEET } from './vehicle.js';

const carIcon = '<path d="M65 91 L83 77 L132 77 L150 87 L173 91 L177 106 L62 106Z"/><path class="glass" d="M89 79 L103 66 L135 69 L148 87Z"/><circle cx="86" cy="106" r="12"/><circle cx="151" cy="106" r="12"/>';

function artwork(id) {
  if (id === 'sprint') {
    return `<svg viewBox="0 0 240 150" aria-hidden="true"><g class="road-lines"><path d="M0 128H240 M0 133H240"/><path d="M5 85H50 M0 94H40 M10 104H50"/></g><g class="mini-car sprint">${carIcon}</g></svg>`;
  }
  if (id === 'kickflip') {
    return `<svg viewBox="0 0 240 150" aria-hidden="true"><g class="road-lines"><ellipse cx="120" cy="87" rx="78" ry="48" stroke-dasharray="5 8"/></g><g class="mini-car kickflip">${carIcon}</g></svg>`;
  }
  if (id === 'ramp') {
    return `<svg viewBox="0 0 240 150" aria-hidden="true"><g class="road-lines"><path d="M0 130L85 130Q130 130 173 54 M190 100L240 130"/></g><g class="mini-car ramp">${carIcon}</g></svg>`;
  }
  if (id === 'free') {
    return `<svg viewBox="0 0 240 150" aria-hidden="true"><g class="road-lines"><circle cx="120" cy="75" r="45" stroke="#78dce8" stroke-width="1.5" stroke-dasharray="6 6" fill="none"/><path d="M120 20L120 130 M65 75L175 75" stroke="#52606e" stroke-width="1"/><polygon points="120,15 115,25 125,25" fill="#78dce8"/><polygon points="120,135 115,125 125,125" fill="#78dce8"/><polygon points="60,75 70,70 70,80" fill="#78dce8"/><polygon points="180,75 170,70 170,80" fill="#78dce8"/></g><g class="mini-car free" style="transform: scale(0.85) translate(22px, 10px);">${carIcon}</g></svg>`;
  }
  if (id === 'carjump') {
    return `<svg viewBox="0 0 240 150" aria-hidden="true"><g class="road-lines"><path d="M0 130L65 130Q95 130 120 80 M180 115L240 130"/><rect x="125" y="112" width="14" height="8" rx="2" fill="#5e7994"/><rect x="142" y="112" width="14" height="8" rx="2" fill="#e78435"/><rect x="159" y="112" width="14" height="8" rx="2" fill="#ffd37a"/></g><g class="mini-car carjump" style="transform: translate(15px, -15px) rotate(-14deg);">${carIcon}</g></svg>`;
  }
  return `<svg viewBox="0 0 240 150" aria-hidden="true"><g class="mini-car">${carIcon}</g></svg>`;
}

export function mountUI() {
  document.querySelector('#app').innerHTML = `
  <div id="loading"><span class="loader"></span><b>FLYIN / ROADSTER</b><p>Preparing your driving lab…</p></div>
  <div id="ui">
    <header>
      <a class="brand" href="#" id="brand">FLYIN<span>/</span>ROADSTER<sup>LAB 03</sup></a>
      <nav>
        <button id="tutorial-btn" class="small">Tutorial</button>
        <button id="help-button" class="small">Controls</button>
        <button id="sound" class="small" aria-pressed="true">Sound on</button>
        <button id="quality" class="small">FX High</button>
        <button id="garage" class="small play-only">Menu</button>
        <button id="pause-button" class="small play-only">Pause</button>
      </nav>
    </header>

    <section id="menu">
      <div class="menu-title">
        <div>
          <span class="eyebrow">COLD-GAS STUNT DRIVING</span>
          <h1>GRAVITY IS<br>JUST A SUGGESTION.</h1>
        </div>
        <p>Master the machine across 5 distinct modes.<br>Drive, launch, stunt, or explore the void.</p>
      </div>

      <div class="mode-grid" role="group" aria-label="Game mode">
        ${MODES.map((m, i) => `
          <button class="mode-card ${i === 0 ? 'selected' : ''}" data-mode="${m.id}" aria-pressed="${i === 0}" style="--accent:${m.accent}">
            <div class="card-top">
              <span>0${i + 1} / ${m.subtitle}</span>
              <span class="selected-mark">↗</span>
            </div>
            ${artwork(m.id)}
            <h2>${m.name}</h2>
            <p>${m.detail}</p>
            <span class="mode-goal">${m.goal}</span>
          </button>
        `).join('')}
      </div>

      <div class="setup">
        <label>YOUR MACHINE
          <select id="vehicle">
            ${FLEET.map((v, i) => `<option value="${i}">${v.name} (${v.kind.toUpperCase()})</option>`).join('')}
          </select>
        </label>

        <label id="difficulty-wrap" hidden>RAMP DIFFICULTY
          <select id="difficulty">
            ${FACILITIES.map((f, i) => `<option value="${i}">${f.name} · ${f.gap} m gap</option>`).join('')}
          </select>
        </label>

        <label id="carjump-wrap" hidden>CARS TO JUMP OVER
          <select id="car-count">
            <option value="1">1 car · Warm-up leap</option>
            <option value="2">2 cars · Stunt starter</option>
            <option value="3" selected>3 cars · Classic lineup</option>
            <option value="5">5 cars · Daredevil jump</option>
            <option value="8">8 cars · High roller stunt</option>
            <option value="10">10 cars · Mega lineup leap</option>
            <option value="12">12 cars · World record attempt</option>
            <option value="15">15 cars · INSANE void jump</option>
          </select>
        </label>

        <div id="free-wrap" class="setup-note" hidden>
          <span>STUNT PLAYGROUND</span>
          <small>No clock · Mega ramps & loops · Spawn custom obstacles</small>
        </div>

        <label class="assist-label">
          <input id="assist" type="checkbox" checked> Smooth air control
          <span>Releasing stunt keys slows rotation</span>
        </label>

        <button id="launch" class="primary">START EXPERIMENT <span>↗</span></button>
      </div>

      <div class="menu-footer">
        <span>WASD to drive · Space to jump · Arrows for stunts · Shift for Nitro/Drift</span>
        <span>Original procedural vehicles · WebGL & Rapier Physics</span>
      </div>
    </section>

    <section id="hud" hidden>
      <div class="mission">
        <span id="mode-label" class="eyebrow"></span>
        <h2 id="objective"></h2>
        <div class="progress"><i id="progress"></i></div>
        <p id="coach"></p>
      </div>

      <div class="score-block">
        <span class="eyebrow">BANKED SCORE</span>
        <strong id="score">0</strong>
        <small>BEST <span id="best">0</span></small>
      </div>

      <div id="stunt-panel">
        <span class="eyebrow">PENDING LANDING</span>
        <strong id="pending">+0</strong>
        <span id="trick"></span>
      </div>

      <div id="spawner-toolbar" hidden>
        <span class="spawner-title">🛠 FREE ROAM BUILDER</span>
        <div class="spawner-buttons">
          <button id="spawn-ramp" class="tool-btn" title="Spawn stunt ramp">➕ Ramp</button>
          <button id="spawn-barrel" class="tool-btn" title="Spawn barrels">➕ Barrels</button>
          <button id="spawn-cone" class="tool-btn" title="Spawn cones">➕ Cones</button>
          <button id="spawn-boost" class="tool-btn" title="Spawn turbo pad">⚡ Turbo Pad</button>
          <button id="spawn-barrier" class="tool-btn" title="Spawn barrier">➕ Barrier</button>
          <button id="clear-spawned" class="tool-btn danger" title="Clear placed objects">🧹 Clear All</button>
        </div>
      </div>

      <div class="bottom-hud">
        <div class="speed">
          <strong id="speed">000</strong>
          <span>KM/H <b id="mph">0 MPH</b></span>
        </div>

        <div class="gas">
          <div>
            <span>THRUSTER PRESSURE</span>
            <b id="gas-text">100%</b>
          </div>
          <div class="progress"><i id="gas-bar"></i></div>
          <small id="state">READY</small>
        </div>

        <div class="metrics">
          <span>TIME <b id="timer">0.00</b> s</span>
          <span>AIR <b id="airtime">0.0</b> s</span>
          <span>COMBO <b id="combo">1×</b></span>
        </div>

        <div class="keyboard-help">
          <kbd>WASD</kbd> Drive / Brake &nbsp; <kbd>SPACE</kbd> Jump<br>
          <kbd>ARROWS</kbd> Rotate &nbsp; <kbd>SHIFT</kbd> Nitro / Drift<br>
          <kbd>F</kbd> Level &nbsp; <kbd>X</kbd> Recover &nbsp; <kbd>C</kbd> Camera
        </div>
      </div>
    </section>

    <div id="toast" role="status" aria-live="polite"></div>
    <div id="countdown" aria-live="polite"></div>

    <div id="touch-controls" hidden>
      <div class="touch-left-side">
        <button class="touch-btn touch-steer" data-hold="KeyA" aria-label="Steer Left">◀ STEER</button>
        <button class="touch-btn touch-steer" data-hold="KeyD" aria-label="Steer Right">STEER ▶</button>
      </div>

      <div class="touch-center-bar">
        <button class="touch-pill" id="touch-cam-btn">📹 CAM</button>
        <button class="touch-pill" id="touch-reset-btn">↺ RESET</button>
        <button class="touch-pill" id="touch-build-btn" hidden>🛠 BUILD</button>
      </div>

      <div class="touch-right-side">
        <div class="touch-actions-row">
          <button class="touch-circle jump" data-hold="Space" aria-label="Jump">JUMP ⇪</button>
          <button class="touch-circle boost" data-hold="ShiftLeft" aria-label="Nitro / Boost">NITRO ⚡</button>
          <button class="touch-circle level" data-hold="KeyF" aria-label="Level car">LEVEL ◈</button>
        </div>
        <div class="touch-pedals-row">
          <button class="touch-pedal brake" data-hold="KeyS" aria-label="Brake and Reverse">BRAKE ▼</button>
          <button class="touch-pedal drive" data-hold="KeyW" aria-label="Drive Forward">DRIVE ▲</button>
        </div>
      </div>
    </div>
  </div>

  <dialog id="help">
    <div class="eyebrow">QUICK START / FLIGHT MANUAL</div>
    <h2>YOU HAVE CONTROL.</h2>
    <div class="help-columns">
      <div>
        <h3>On the ground</h3>
        <p>
          <kbd>W / S</kbd> Accelerate, brake & reverse<br>
          <kbd>A / D</kbd> Smooth progressive steering<br>
          <kbd>SPACE</kbd> Jump immediately<br>
          <kbd>SHIFT</kbd> Handbrake / power drift
        </p>
      </div>
      <div>
        <h3>In the air</h3>
        <p>
          <kbd>↑ / ↓</kbd> Pitch forward / back<br>
          <kbd>← / →</kbd> Roll left / right<br>
          <kbd>Q / E</kbd> Yaw rotation<br>
          <kbd>SHIFT</kbd> Jet thruster lift<br>
          <kbd>F</kbd> Hold to auto-level car
        </p>
      </div>
    </div>
    <p>
      <strong>Free Roam:</strong> Unlimited stunt session. Spawn ramps, barrels and cones with <kbd>O</kbd> or the on-screen toolbar.<br>
      <strong>Car Jump:</strong> Select how many cars you want to jump over in the menu, build speed, launch and clear the entire lineup!
    </p>
    <p><kbd>R</kbd> Restart · <kbd>X</kbd> Recover · <kbd>C</kbd> Camera · <kbd>ESC</kbd> Pause. Touch buttons appear on mobile.</p>
    <button class="primary" id="close-help">GOT IT</button>
  </dialog>

  <dialog id="pause-menu">
    <span class="eyebrow">SIMULATION PAUSED</span>
    <h2>TAKE A BREATH.</h2>
    <button id="resume" class="primary">RESUME</button>
    <button id="restart" class="secondary">RESTART RUN</button>
    <button id="pause-garage" class="secondary">BACK TO MODES</button>
  </dialog>

  <dialog id="results">
    <span class="eyebrow" id="result-eyebrow">TEST COMPLETE</span>
    <h2 id="result-title">MISSION COMPLETE.</h2>
    <p id="result-detail"></p>
    <div id="result-stats"></div>
    <button class="primary" id="again">TRY AGAIN ↗</button>
    <button class="secondary" id="result-garage">CHOOSE ANOTHER MODE</button>
  </dialog>
  `;
}

export const $ = id => document.getElementById(id);
