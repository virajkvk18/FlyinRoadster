import test from 'node:test';
import assert from 'node:assert/strict';

// Mock localStorage for Node test environment
const store = new Map();
global.localStorage = {
  getItem: (k) => store.get(k) || null,
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear()
};

const {
  PLANET_LEVELS,
  getUnlockedMaxLevel,
  isLevelUnlocked,
  isLevelCompleted,
  completeLevel,
  setSelectedLevel,
  getSelectedLevel,
  getLevelConfig
} = await import('../src/levels.js');

test('Planet level sequence starts with Pluto and ends with Mars', () => {
  assert.equal(PLANET_LEVELS.length, 6);
  assert.equal(PLANET_LEVELS[0].name, 'PLUTO');
  assert.equal(PLANET_LEVELS[1].name, 'NEPTUNE');
  assert.equal(PLANET_LEVELS[2].name, 'URANUS');
  assert.equal(PLANET_LEVELS[3].name, 'SATURN');
  assert.equal(PLANET_LEVELS[4].name, 'JUPITER');
  assert.equal(PLANET_LEVELS[5].name, 'MARS');
});

test('Only Level 1 is unlocked initially', () => {
  localStorage.clear();
  assert.equal(getUnlockedMaxLevel(), 1);
  assert.equal(isLevelUnlocked(1), true);
  assert.equal(isLevelUnlocked(2), false);
  assert.equal(isLevelUnlocked(3), false);
  assert.equal(isLevelUnlocked(4), false);
  assert.equal(isLevelUnlocked(5), false);
  assert.equal(isLevelUnlocked(6), false);
});

test('Cannot select locked levels', () => {
  localStorage.clear();
  const res = setSelectedLevel(2);
  assert.equal(res, false);
});

test('Completing Level 1 unlocks Level 2 (Neptune)', () => {
  localStorage.clear();
  const { newlyUnlocked } = completeLevel(1);
  assert.equal(newlyUnlocked, 2);
  assert.equal(getUnlockedMaxLevel(), 2);
  assert.equal(isLevelUnlocked(2), true);
  assert.equal(isLevelUnlocked(3), false);
  assert.equal(isLevelCompleted(1), true);
});

test('Sequential completion progresses through all planets to Mars', () => {
  localStorage.clear();
  for (let i = 1; i <= 5; i++) {
    completeLevel(i);
    assert.equal(getUnlockedMaxLevel(), i + 1);
    assert.equal(isLevelUnlocked(i + 1), true);
  }
  // Level 6 is Mars
  assert.equal(isLevelUnlocked(6), true);
  assert.equal(getLevelConfig(6).name, 'MARS');
  
  // Completing Mars completes all levels
  const { newlyUnlocked } = completeLevel(6);
  assert.equal(newlyUnlocked, null);
  assert.equal(isLevelCompleted(6), true);
});
