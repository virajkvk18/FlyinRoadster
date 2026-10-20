export const MPH60 = 26.8224;
export const MODES = [
  { id: 'sprint', name: 'The 0–60', subtitle: 'ACCELERATION LAB', detail: 'Launch from a standstill. Chase your fastest 0–60 mph time.', goal: 'Reach 60 mph · 96.6 km/h', accent: '#c5f879' },
  { id: 'kickflip', name: 'The Kickflip', subtitle: 'COLD-GAS PLAYGROUND', detail: 'Jump. Rotate. Stick the landing. Master a full airborne roll.', goal: 'Land one full roll upright', accent: '#bba8ff' },
  { id: 'ramp', name: 'The Ramp', subtitle: 'MEGA GAP CHALLENGE', detail: 'Build speed, launch into the void, and reach the landing deck.', goal: 'Clear the gap and cross the finish', accent: '#ff6654' },
];
export const FACILITIES = [
  { name: 'Training', gap: 28, rise: 13, width: 30 },
  { name: 'Classic', gap: 55, rise: 20, width: 25 },
  { name: 'Extreme', gap: 80, rise: 28, width: 18 },
];
export function damp(current, target, response, dt) { return target + (current - target) * Math.exp(-response * dt); }
export function steeringRate(speed, input, drift = false) {
  return input * Math.min(Math.abs(speed) / 5, 1) * (drift ? 1.35 : 1.05 / (1 + Math.abs(speed) / 28)) * Math.sign(speed || 1);
}
export function sprintCrossing(previousSpeed, speed, elapsed, dt, target = MPH60) {
  if (previousSpeed >= target || speed < target || speed <= previousSpeed) return null;
  return Math.max(0, elapsed - dt + dt * (target - previousSpeed) / (speed - previousSpeed));
}
export function landingGrade(upY, impactSpeed, angularSpeed) {
  if (upY < .72 || impactSpeed > 15 || angularSpeed > 5) return 'hard';
  return upY > .94 && impactSpeed < 7 && angularSpeed < 2 ? 'perfect' : 'clean';
}
export function finishReached(mode, position, grounded, receiverLanded, width) {
  return mode === 'ramp' && receiverLanded && grounded && position.z <= -430 && Math.abs(position.x) < width / 2;
}
