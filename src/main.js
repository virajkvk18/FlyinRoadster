import './style.css';
import { inject } from '@vercel/analytics';
import { initMockApi } from './mockApi.js';
import {
  PLANET_LEVELS,
  getLevelConfig,
  getSelectedLevel,
  setSelectedLevel,
  isLevelUnlocked,
  isLevelCompleted,
  getUnlockedMaxLevel,
  completeLevel
} from './levels.js';

// Initialize Vercel Web Analytics
inject();

// Initialize mock API for rankings, settings, and player profile persistence
initMockApi();

// Ensure the Elon Musk coin avatar style is immediately set
document.documentElement.style.setProperty('--musk', 'url(/musk.jpg)');

// Global Mode and Level Selector State
window.selectedMode = 'campaign';
window.selectedLevel = getSelectedLevel() || 1;
window.carJumpCount = 5;

// Expose level helper globally
window.getLevelConfig = getLevelConfig;
window.completeLevel = completeLevel;

export function updateStartButton() {
  const startBtnText = document.querySelector('#b-start .cta-text');
  const startBtnIcon = document.querySelector('#b-start .cta-icon');
  if (!startBtnText) return;

  if (window.selectedMode === 'campaign') {
    const curCfg = getLevelConfig(window.selectedLevel);
    startBtnText.textContent = `START LEVEL ${curCfg.level}: ${curCfg.name}`;
    if (startBtnIcon) startBtnIcon.textContent = curCfg.icon;
  } else {
    const MODE_TITLES = {
      megastunt: 'START MEGA RAMPS & LOOP',
      megaramp: 'START MEGA RAMPS & LOOP',
      carjump: `START CAR JUMP (${window.carJumpCount})`,
      free: 'ENTER FREE ROAM',
      sprint: 'START 0–60 SPRINT'
    };
    startBtnText.textContent = MODE_TITLES[window.selectedMode] || 'START ENGINE';
    if (startBtnIcon) startBtnIcon.textContent = '🚀';
  }
}

export function showToast(message, isWarning = false) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.borderColor = isWarning ? '#ff4757' : '#28e0ff';
  toast.style.color = isWarning ? '#ffa8a8' : '#fff';
  toast.classList.remove('hide');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.add('hide');
  }, 2200);
}

export function renderLevelSelector() {
  const grid = document.getElementById('level-grid');
  const progText = document.getElementById('campaign-prog-text');
  const descElem = document.querySelector('#title .logo p');
  const modeBadge = document.getElementById('mode-badge');
  if (!grid) return;

  const maxLvl = getUnlockedMaxLevel();
  if (progText) {
    progText.textContent = `${maxLvl}/6 PLANETS UNLOCKED`;
  }

  const curLvl = window.selectedLevel || 1;
  const activeCfg = getLevelConfig(curLvl);
  if (descElem && window.selectedMode === 'campaign') {
    descElem.innerHTML = activeCfg.desc;
  }
  if (modeBadge && window.selectedMode === 'campaign') {
    modeBadge.textContent = activeCfg.badge;
  }

  grid.innerHTML = PLANET_LEVELS.map(lvl => {
    const unlocked = isLevelUnlocked(lvl.level);
    const completed = isLevelCompleted(lvl.level);
    const isSelected = window.selectedMode === 'campaign' && lvl.level === curLvl;

    const statusText = !unlocked ? '🔒 LOCKED' : completed ? (isSelected ? 'ACTIVE' : '✓ BEATEN') : isSelected ? 'ACTIVE' : 'OPEN';

    return `
      <div class="lvl-card ${isSelected ? 'on' : ''} ${!unlocked ? 'locked' : ''} ${completed ? 'completed' : ''}" 
           data-level="${lvl.level}" 
           style="--accent:${lvl.color}">
        <span class="lvl-badge">LVL ${lvl.level}</span>
        <span class="lvl-icon">${lvl.icon}</span>
        <b class="lvl-name">${lvl.name}</b>
        <span class="lvl-status">${statusText}</span>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.lvl-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const lvlNum = parseInt(card.dataset.level, 10);

      if (!isLevelUnlocked(lvlNum)) {
        card.classList.remove('shake');
        void card.offsetWidth;
        card.classList.add('shake');
        const prevPlanet = PLANET_LEVELS[lvlNum - 2]?.name || 'previous level';
        showToast(`🔒 Level ${lvlNum} is locked! Complete ${prevPlanet} first!`, true);
        return;
      }

      window.selectedMode = 'campaign';
      setSelectedLevel(lvlNum);
      renderLevelSelector();
      updateStartButton();
    });
  });

  updateStartButton();
}
window.renderLevelSelector = renderLevelSelector;

export function updateResultNextButton(cleared) {
  const nextBox = document.getElementById('res-next-box');
  const nextBtn = document.getElementById('b-next-lvl');
  const nextText = document.getElementById('b-next-lvl-text');
  if (!nextBox || !nextBtn || !nextText) return;

  if (!cleared || window.selectedMode !== 'campaign') {
    nextBox.classList.add('hide');
    return;
  }

  const curLvl = window.selectedLevel || 1;
  if (curLvl < 6) {
    const nextLvl = curLvl + 1;
    const nextPlanet = PLANET_LEVELS[nextLvl - 1];
    nextText.textContent = `➔ NEXT MISSION: LEVEL ${nextLvl} (${nextPlanet.name} ${nextPlanet.icon})`;
    nextBox.classList.remove('hide');

    nextBtn.onclick = (e) => {
      e.stopPropagation();
      setSelectedLevel(nextLvl);
      renderLevelSelector();
      const res = document.getElementById('result');
      if (res) res.classList.add('hide');
      if (window.game) {
        window.game.start();
      }
    };
  } else {
    // Mars completed - Final Campaign Victory!
    nextText.textContent = '🏆 CAMPAIGN COMPLETE! REPLAY PLANETARY MAP ➔';
    nextBox.classList.remove('hide');
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      const res = document.getElementById('result');
      if (res) res.classList.add('hide');
      const title = document.getElementById('title');
      if (title) title.classList.remove('hide');
      renderLevelSelector();
    };
  }
}
window.updateResultNextButton = updateResultNextButton;

function setupModeSelector() {
  const tabCampaign = document.getElementById('tab-campaign');
  const tabStunt = document.getElementById('tab-stunt');
  const campaignView = document.getElementById('campaign-view');
  const stuntView = document.getElementById('stunt-view');

  const modeCards = document.querySelectorAll('#stunt-view .mode-card');
  const stepper = document.getElementById('car-jump-stepper');
  const carNum = document.getElementById('car-count-num');
  const modeBadge = document.getElementById('mode-badge');
  const descElem = document.querySelector('#title .logo p');

  const STUNT_DESCS = {
    megastunt: 'Launch off <b>COLOSSAL MEGA RAMPS</b> & conquer the <b>360° CIRCULAR LOOP</b> with Shift Nitro Boosters!',
    megaramp: 'Launch off <b>COLOSSAL MEGA RAMPS</b> & conquer the <b>360° CIRCULAR LOOP</b> with Shift Nitro Boosters!',
    carjump: 'Clear the parked car lineup with ramp boost & roof stomps',
    free: '<b>FREE ROAM</b>: Endless open stunt park with infinite cold-gas thrusters',
    sprint: '<b>0–60 SPRINT</b>: Drag strip acceleration telemetry'
  };

  const STUNT_BADGES = {
    megastunt: '🎢 MEGA RAMPS & LOOP',
    megaramp: '🎢 MEGA RAMPS & LOOP',
    carjump: `🚗 CAR JUMP (${window.carJumpCount})`,
    free: '🌐 FREE ROAM',
    sprint: '⚡ 0–60 SPRINT'
  };

  // Tab switching: Campaign vs Stunt Lab
  tabCampaign?.addEventListener('click', () => {
    tabCampaign.classList.add('on');
    tabStunt?.classList.remove('on');
    campaignView?.classList.remove('hide');
    stuntView?.classList.add('hide');
    window.selectedMode = 'campaign';
    renderLevelSelector();
    updateStartButton();
  });

  tabStunt?.addEventListener('click', () => {
    tabStunt.classList.add('on');
    tabCampaign?.classList.remove('on');
    stuntView?.classList.remove('hide');
    campaignView?.classList.add('hide');
    if (window.selectedMode === 'campaign' || window.selectedMode === 'megaramp') {
      window.selectedMode = 'megastunt';
    }
    modeCards.forEach(c => c.classList.toggle('on', c.dataset.mode === window.selectedMode));
    if (descElem && STUNT_DESCS[window.selectedMode]) descElem.innerHTML = STUNT_DESCS[window.selectedMode];
    if (modeBadge && STUNT_BADGES[window.selectedMode]) modeBadge.textContent = STUNT_BADGES[window.selectedMode];
    if (stepper) stepper.classList.toggle('hide', window.selectedMode !== 'carjump');
    updateStartButton();
  });

  // Stunt Lab Mode Cards
  modeCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      modeCards.forEach(c => c.classList.remove('on'));
      card.classList.add('on');
      const mode = card.dataset.mode;
      window.selectedMode = mode;

      if (stepper) stepper.classList.toggle('hide', mode !== 'carjump');
      if (descElem && STUNT_DESCS[mode]) descElem.innerHTML = STUNT_DESCS[mode];
      if (modeBadge && STUNT_BADGES[mode]) modeBadge.textContent = STUNT_BADGES[mode];
      updateStartButton();
    });
  });

  // Car jump stepper
  document.getElementById('b-car-minus')?.addEventListener('click', (e) => {
    e.stopPropagation();
    window.carJumpCount = Math.max(1, (window.carJumpCount || 5) - 1);
    if (carNum) carNum.textContent = window.carJumpCount;
    if (modeBadge && window.selectedMode === 'carjump') modeBadge.textContent = `🚗 CAR JUMP (${window.carJumpCount})`;
    updateStartButton();
  });

  document.getElementById('b-car-plus')?.addEventListener('click', (e) => {
    e.stopPropagation();
    window.carJumpCount = Math.min(15, (window.carJumpCount || 5) + 1);
    if (carNum) carNum.textContent = window.carJumpCount;
    if (modeBadge && window.selectedMode === 'carjump') modeBadge.textContent = `🚗 CAR JUMP (${window.carJumpCount})`;
    updateStartButton();
  });

  // Pause menu restart button
  document.getElementById('b-restart')?.addEventListener('click', () => {
    if (window.game) {
      window.game.pause();
      window.game.start();
    }
  });

  // Initial render of Planetary Campaign
  renderLevelSelector();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupModeSelector);
} else {
  setupModeSelector();
}

// Import and run the game engine
import './gameEngine.js';
