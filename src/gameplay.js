export const MPH60 = 26.8224;
export const MODES = [
  { id: 'sprint', name: 'The 0–60', subtitle: 'ACCELERATION LAB', detail: 'Launch from a standstill. Chase your fastest 0–60 mph time.', goal: 'Reach 60 mph · 96.6 km/h', accent: '#c5f879' },
  { id: 'kickflip', name: 'The Kickflip', subtitle: 'COLD-GAS PLAYGROUND', detail: 'Jump. Rotate. Stick the landing. Master a full airborne roll.', goal: 'Land one full roll upright', accent: '#bba8ff' },
  { id: 'ramp', name: 'The Ramp', subtitle: 'MEGA GAP CHALLENGE', detail: 'Build speed, launch into the void, and reach the landing deck.', goal: 'Clear the gap and cross the finish', accent: '#ff6654' },
  { id: 'free', name: 'Free Roam', subtitle: 'NO CLOCK. NO FINISH.', detail: 'Explore a huge stunt park with ramps, slalom cones, speed pads, and build your own obstacles.', goal: 'Unlimited session / explore & build', accent: '#78dce8' },
  { id: 'carjump', name: 'Car Jump', subtitle: 'BUILD YOUR CHALLENGE', detail: 'Choose 1 to 15 parked cars. Launch over the lineup and land cleanly beyond it.', goal: 'Your car count. Your jump.', accent: '#ffd37a' },
];
export const FACILITIES = [
  { name: 'Training', gap: 28, rise: 13, width: 30 },
  { name: 'Classic', gap: 55, rise: 20, width: 25 },
  { name: 'Extreme', gap: 80, rise: 28, width: 18 },
];
export function damp(current, target, response, dt) { return target + (current - target) * Math.exp(-response * dt); }
export function steeringRate(speed, input, drift = false) {
  const v = Math.abs(speed), angle = input * .48 / (1 + v * .025);
  const bicycle = speed / 2.8 * Math.tan(angle);
  const limit = (drift ? 12 : 8) / Math.max(v, 6);
  return Math.max(-limit, Math.min(limit, bicycle));
}
export function normalizeCarCount(value) { const n = Number(value); return Number.isFinite(n) ? Math.max(1, Math.min(15, Math.round(n))) : 3; }
export function carJumpLayout(count) { const n = normalizeCarCount(count); return { count: n, takeoff: -110, lastCar: -116 - (n - 1) * 3.3, receiver: -122 - n * 3.3 }; }
export function carJumpCleared(position, flightStart, layout, hitCar, upright) {
  return !hitCar && upright && flightStart >= layout.takeoff - 3 && position.z < layout.lastCar - 4 && Math.abs(position.x) < 7;
}
export function validMotion(position,velocity,angular){return [...Object.values(position),...Object.values(velocity),...Object.values(angular)].every(Number.isFinite);}
export function pixelRatio(width,height,deviceRatio,high){return Math.min(deviceRatio,high?1.5:1,Math.sqrt((high?2000000:1000000)/Math.max(1,width*height)));}
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
