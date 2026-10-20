export function evaluateFlight(rotation, seconds, multiplier = 1) {
  const turns = [rotation.x, rotation.y, rotation.z].map(value => Math.floor(Math.abs(value) / (Math.PI * 2)));
  return {
    turns,
    points: Math.round((Math.max(0, seconds) * 50 + turns.reduce((sum, n) => sum + n, 0) * 500) * Math.min(5, Math.max(1, multiplier))),
    label: turns.map((n, i) => n ? `${n}× ${['FLIP', 'SPIN', 'ROLL'][i]}` : '').filter(Boolean).join(' + ') || 'AIRBORNE / STICK THE LANDING',
  };
}
