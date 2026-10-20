// Procedural Web Audio Engine: Synthesized engine, jet thrusters, aerodynamic wind, and RCS puffs
export class DriveAudio {
  constructor() {
    this.enabled = true;
    this.context = null;
  }

  start() {
    if (this.context) {
      if (this.context.state === 'suspended') this.context.resume().catch(() => {});
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.context = new AudioContext();

    // 1. Engine Oscillator (V8 / Electric Dual-Drive)
    this.osc = this.context.createOscillator();
    this.osc.type = 'sawtooth';
    this.engineFilter = this.context.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineGain = this.context.createGain();
    this.engineGain.gain.value = 0;
    this.osc.connect(this.engineFilter).connect(this.engineGain).connect(this.context.destination);
    this.osc.start();

    // Generate White Noise Buffer for Thrusters & Wind
    const bufferSize = 2 * this.context.sampleRate;
    const noiseBuffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

    // 2. Jet Thruster / Rocket Boost Audio
    this.thrusterSource = this.context.createBufferSource();
    this.thrusterSource.buffer = noiseBuffer;
    this.thrusterSource.loop = true;
    this.thrusterFilter = this.context.createBiquadFilter();
    this.thrusterFilter.type = 'bandpass';
    this.thrusterFilter.frequency.value = 420;
    this.thrusterFilter.Q.value = 1.4;
    this.thrusterGain = this.context.createGain();
    this.thrusterGain.gain.value = 0;
    this.thrusterSource.connect(this.thrusterFilter).connect(this.thrusterGain).connect(this.context.destination);
    this.thrusterSource.start();

    // 3. High-Speed Aerodynamic Wind Whoosh
    this.windSource = this.context.createBufferSource();
    this.windSource.buffer = noiseBuffer;
    this.windSource.loop = true;
    this.windFilter = this.context.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.value = 350;
    this.windGain = this.context.createGain();
    this.windGain.gain.value = 0;
    this.windSource.connect(this.windFilter).connect(this.windGain).connect(this.context.destination);
    this.windSource.start();

    this.context.resume().catch(() => {});
  }

  update(speed, throttle, running, airborne, boosting = false) {
    if (!this.context || !this.enabled) return;
    const t = this.context.currentTime;

    // Engine Pitch & Gain
    const engineFreq = 38 + Math.min(speed, 280) * 0.7 + throttle * 24;
    this.osc.frequency.setTargetAtTime(engineFreq, t, 0.08);
    this.engineFilter.frequency.setTargetAtTime(airborne ? 220 : 180 + speed * 3.5, t, 0.12);
    this.engineGain.gain.setTargetAtTime(running ? 0.022 + throttle * 0.018 : 0, t, 0.08);

    // Jet Thruster Roar
    const thrusterVol = (running && boosting) ? 0.075 : (airborne && boosting ? 0.09 : 0);
    this.thrusterGain.gain.setTargetAtTime(thrusterVol, t, 0.06);
    this.thrusterFilter.frequency.setTargetAtTime(boosting ? 680 : 380, t, 0.1);

    // Aerodynamic Wind Whoosh
    const windVol = running ? Math.max(0, Math.min(0.045, (speed - 60) * 0.00035)) : 0;
    this.windGain.gain.setTargetAtTime(windVol, t, 0.15);
    this.windFilter.frequency.setTargetAtTime(250 + speed * 5, t, 0.15);
  }

  rcsPuff() {
    if (!this.context || !this.enabled) return;
    try {
      const t = this.context.currentTime;
      const osc = this.context.createOscillator();
      const gain = this.context.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, t);
      osc.frequency.exponentialRampToValueAtTime(120, t + 0.09);
      gain.gain.setValueAtTime(0.025, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.connect(gain).connect(this.context.destination);
      osc.start(t);
      osc.stop(t + 0.11);
      osc.onended = () => { osc.disconnect(); gain.disconnect(); };
    } catch {}
  }

  chime(success = true) {
    if (!this.context || !this.enabled) return;
    try {
      const t = this.context.currentTime;
      const o = this.context.createOscillator();
      const g = this.context.createGain();
      o.connect(g).connect(this.context.destination);
      o.frequency.setValueAtTime(success ? 660 : 140, t);
      o.frequency.exponentialRampToValueAtTime(success ? 1040 : 55, t + 0.26);
      g.gain.setValueAtTime(0.05, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      o.start(t);
      o.stop(t + 0.32);
      o.onended = () => { o.disconnect(); g.disconnect(); };
    } catch {}
  }
}
