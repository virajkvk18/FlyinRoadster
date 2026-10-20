import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateFlight } from '../src/stunts.js';

test('complete rotations on all axes score; partial turns do not', () => {
  const flight = evaluateFlight({ x: Math.PI * 2, y: -Math.PI * 4, z: Math.PI }, 2, 2);
  assert.deepEqual(flight.turns, [1, 2, 0]);
  assert.equal(flight.points, 3200);
  assert.match(flight.label, /FLIP.*SPIN/);
});
test('a canceled rotation earns airtime only', () => {
  const flight = evaluateFlight({ x: 0, y: .1, z: -.1 }, 1);
  assert.equal(flight.points, 50);
  assert.deepEqual(flight.turns, [0, 0, 0]);
});
test('multiplier has an upper limit and negative airtime gives no reward', () => {
  assert.equal(evaluateFlight({ x: 0, y: 0, z: Math.PI * 2 }, -3, 99).points, 2500);
});
