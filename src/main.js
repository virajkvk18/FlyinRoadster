import './style.css';
import { inject } from '@vercel/analytics';
import { initMockApi } from './mockApi.js';

// Initialize Vercel Web Analytics
inject();

// Initialize mock API for rankings, settings, and player profile persistence
initMockApi();

// Ensure the Elon Musk coin avatar style is immediately set
document.documentElement.style.setProperty('--musk', 'url(/musk.jpg)');

// Mode Selector State
window.selectedMode = 'mars';
window.carJumpCount = 5;

function setupModeSelector() {
  const modeCards = document.querySelectorAll('.mode-card');
  const stepper = document.getElementById('car-jump-stepper');
  const carNum = document.getElementById('car-count-num');
  const modeBadge = document.getElementById('mode-badge');
  const descElem = document.querySelector('#title .logo p');

  const MODE_DESCS = {
    mars: 'Eat <i class="ec"></i> 5 Elon heads & reach <span class="m">MARS</span> in 3 km',
    megaramp: 'Launch off the <b>MEGA VERT RAMP</b> into the void & stick the landing',
    carjump: 'Clear the parked car lineup with ramp boost & roof stomps',
    free: '<b>FREE ROAM</b>: Endless open stunt park with infinite cold-gas thrusters',
    sprint: '<b>0–60 SPRINT</b>: Drag strip acceleration telemetry'
  };

  const MODE_BADGES = {
    mars: '🚀 MARS FLIGHT',
    megaramp: '🛹 MEGA RAMP',
    carjump: `🚗 CAR JUMP (${window.carJumpCount})`,
    free: '🌐 FREE ROAM',
    sprint: '⚡ 0–60 SPRINT'
  };

  modeCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      modeCards.forEach(c => c.classList.remove('on'));
      card.classList.add('on');
      const mode = card.dataset.mode;
      window.selectedMode = mode;

      if (stepper) stepper.classList.toggle('hide', mode !== 'carjump');
      if (descElem && MODE_DESCS[mode]) descElem.innerHTML = MODE_DESCS[mode];
      if (modeBadge && MODE_BADGES[mode]) modeBadge.textContent = MODE_BADGES[mode];
    });
  });

  document.getElementById('b-car-minus')?.addEventListener('click', (e) => {
    e.stopPropagation();
    window.carJumpCount = Math.max(1, (window.carJumpCount || 5) - 1);
    if (carNum) carNum.textContent = window.carJumpCount;
    if (modeBadge) modeBadge.textContent = `🚗 CAR JUMP (${window.carJumpCount})`;
  });

  document.getElementById('b-car-plus')?.addEventListener('click', (e) => {
    e.stopPropagation();
    window.carJumpCount = Math.min(15, (window.carJumpCount || 5) + 1);
    if (carNum) carNum.textContent = window.carJumpCount;
    if (modeBadge) modeBadge.textContent = `🚗 CAR JUMP (${window.carJumpCount})`;
  });

  // Pause menu restart button
  document.getElementById('b-restart')?.addEventListener('click', () => {
    if (window.game) {
      window.game.pause();
      window.game.start();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupModeSelector);
} else {
  setupModeSelector();
}

// Import and run the game engine
import './gameEngine.js';
