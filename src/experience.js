// Synthesized audio: no downloads, tracking, or external audio assets.
export class DriveAudio {
  constructor() { this.enabled = true; }
  start() {
    if (!this.context) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.context = new AudioContext();
      this.osc = this.context.createOscillator();
      this.osc.type = 'sawtooth';
      this.filter = this.context.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.gain = this.context.createGain();
      this.gain.gain.value = 0;
      this.osc.connect(this.filter).connect(this.gain).connect(this.context.destination);
      this.osc.start();
    }
    this.context.resume().catch(() => {});
  }
  update(speed, throttle, running, airborne) {
    if (!this.context) return;
    const t = this.context.currentTime;
    this.osc.frequency.setTargetAtTime(38 + Math.min(speed, 280) * .65 + throttle * 18, t, .12);
    this.filter.frequency.setTargetAtTime(airborne ? 260 : 180 + speed * 3, t, .15);
    this.gain.gain.setTargetAtTime(this.enabled && running ? .018 + throttle * .015 : 0, t, .08);
  }
  chime(success = true) {
    if (!this.context || !this.enabled) return;
    const t = this.context.currentTime, o = this.context.createOscillator(), g = this.context.createGain();
    o.connect(g).connect(this.context.destination);
    o.frequency.setValueAtTime(success ? 660 : 140, t);
    o.frequency.exponentialRampToValueAtTime(success ? 990 : 55, t + .24);
    g.gain.setValueAtTime(.05, t); g.gain.exponentialRampToValueAtTime(.001, t + .3);
    o.start(t); o.stop(t + .32);
    o.onended = () => { o.disconnect(); g.disconnect(); };
  }
}

export const courses = [
  { name: '01 / THE MEGA GAP', gap: 65, rise: 23.4, curve: .0065, description: '65 m gap / balanced launch' },
  { name: '02 / ORBITAL', gap: 95, rise: 36, curve: .01, description: '95 m gap / high altitude' },
  { name: '03 / PRECISION', gap: 45, rise: 18, curve: .005, description: '45 m gap / narrow receiver', width: 12 },
];

export function installExperience() {
  document.querySelector('.select-label').insertAdjacentHTML('beforebegin', `<label class="select-label" for="course-select">CHOOSE TEST FACILITY</label><select id="course-select">${courses.map((c,i)=>`<option value="${i}">${c.name}</option>`).join('')}</select>`);
  document.querySelector('.top-actions').insertAdjacentHTML('afterbegin', '<button class="small" id="sound">SOUND ON</button><button class="small" id="quality">FX HIGH</button>');
  document.querySelector('#ui').insertAdjacentHTML('beforeend', `<div id="flight-hud"><span class="eyebrow" id="flight-label">FLIGHT TELEMETRY</span><strong id="pending">+0</strong><div id="trick">BUILD SPEED. FIND YOUR LINE.</div><div class="flight-metrics"><span>ALT <b id="altitude">0.0</b> M</span><span>AIR <b id="airtime">0.0</b> S</span><span id="combo">1×</span></div></div><div id="run-strip"><span id="run-time">00:00.0</span><div class="progress-track"><i id="run-progress"></i></div><span id="checkpoint">LAUNCH PAD</span></div><div id="pause-menu" hidden><div class="eyebrow">SIMULATION SUSPENDED</div><h2>TAKE A BREATH.</h2><button class="launch" id="resume">RESUME RUN</button><button class="small" id="restart">RESTART RUN</button></div></div>`);
  document.body.insertAdjacentHTML('beforeend', `<div id="results" hidden><div class="result-card"><div class="eyebrow">TEST FLIGHT / COMPLETE</div><h2>VOID<br>CLEARED.</h2><div class="result-stats" id="result-stats"></div><button class="launch" id="again">RUN IT AGAIN <span>↗</span></button><button class="small" id="result-garage">BACK TO GARAGE</button></div></div>`);
}
