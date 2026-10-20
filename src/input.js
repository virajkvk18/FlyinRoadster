export class Input {
  constructor() {
    this.keys = new Set();
    this.touch = new Set();
    this.jump = false;
    this.onAction = () => {};

    window.addEventListener('keydown', e => {
      if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
      if (['Space','Escape','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyS','KeyA','KeyD'].includes(e.code)) {
        if (['Space','Escape','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)) e.preventDefault();
      }
      this.keys.add(e.code);
      if (!e.repeat) {
        if (e.code === 'Space') this.jump = true;
        this.onAction(e.code);
      }
    });

    window.addEventListener('keyup', e => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.clear());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.clear(); });

    this.bindHoldButtons();
  }

  bindHoldButtons() {
    document.querySelectorAll('[data-hold]').forEach(button => {
      const code = button.dataset.hold;
      button.addEventListener('pointerdown', e => {
        e.preventDefault();
        try { button.setPointerCapture(e.pointerId); } catch {}
        this.touch.add(code);
        button.classList.add('held');
        if (code === 'Space') this.jump = true;
      });
      for (const name of ['pointerup','pointercancel','lostpointercapture']) {
        button.addEventListener(name, () => {
          this.touch.delete(code);
          button.classList.remove('held');
        });
      }
    });
  }

  has(...codes) {
    return codes.some(c => this.keys.has(c) || this.touch.has(c));
  }

  axis(positive, negative) {
    return Number(this.has(...positive)) - Number(this.has(...negative));
  }

  clear() {
    this.keys.clear();
    this.touch.clear();
    this.jump = false;
    document.querySelectorAll('.held').forEach(b => b.classList.remove('held'));
  }
}
