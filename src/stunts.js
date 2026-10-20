export function evaluateFlight(rotation, seconds, multiplier = 1) {
  const turns = [rotation.x, rotation.y, rotation.z].map(value => Math.floor(Math.abs(value) / (Math.PI * 2)));
  const totalTurns = turns.reduce((sum, n) => sum + n, 0);
  const baseLabel = turns.map((n, i) => n ? `${n}× ${['FLIP', 'SPIN', 'ROLL'][i]}` : '').filter(Boolean).join(' + ');
  let title = baseLabel;
  if (totalTurns === 0) {
    title = seconds > 2.5 ? 'STRATOSPHERE GLIDE' : 'AIRBORNE / STICK THE LANDING';
  } else if (totalTurns >= 3) {
    title = `${baseLabel} ★ MEGA COMBO ★`;
  }
  return {
    turns,
    points: Math.round((Math.max(0, seconds) * 50 + totalTurns * 500) * Math.min(5, Math.max(1, multiplier))),
    label: title || 'AIRBORNE / STICK THE LANDING',
  };
}
