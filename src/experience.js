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

