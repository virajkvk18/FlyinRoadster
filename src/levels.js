// Planetary Campaign Progression System
// Level Order: Level 1 Pluto -> Level 2 Neptune -> Level 3 Uranus -> Level 4 Saturn -> Level 5 Jupiter -> Level 6 Mars (Final)

export const PLANET_LEVELS = [
  {
    id: 'pluto',
    level: 1,
    name: 'PLUTO',
    icon: '❄️',
    title: 'THE FROZEN FRONTIER',
    subtitle: 'Kuiper Belt Outer Rim',
    desc: 'Launch past the outer solar system! Eat <i class="ec"></i> 5 Elon heads & land on the icy plains of <span class="m">PLUTO</span> in 3 km.',
    badge: '❄️ LVL 1: PLUTO',
    distance: 3000,
    color: '#74b9ff',
    terrainColor: 0x8fa4b8,
    skyGradient: 'mix(vec3(0.5, 0.65, 0.88), vec3(0.04, 0.03, 0.12), smoothstep(0., .7, h))',
    glowColor: [1.1, 1.4, 2.0],
    planetColor: 0x8a9ba8,
    planetEmissive: 0x102030,
    sunLight: 0x90b4d4,
    welcomeText: 'WELCOME TO PLUTO! ❄️',
    arrivalSub: 'PLUTO OUTPOST CONQUERED',
    endWhy: 'LANDED ON PLUTO ❄️',
    unlockMsg: 'LEVEL 1 CLEARED! 🔓 NEPTUNE UNLOCKED!'
  },
  {
    id: 'neptune',
    level: 2,
    name: 'NEPTUNE',
    icon: '🔵',
    title: 'THE AZURE ICE GIANT',
    subtitle: 'Supersonic Winds & Deep Cobalt',
    desc: 'Brave supersonic winds! Eat <i class="ec"></i> 5 Elon heads & land into the deep cobalt atmosphere of <span class="m">NEPTUNE</span> in 3 km.',
    badge: '🔵 LVL 2: NEPTUNE',
    distance: 3000,
    color: '#0984e3',
    terrainColor: 0x0c2461,
    skyGradient: 'mix(vec3(0.15, 0.45, 0.95), vec3(0.02, 0.04, 0.15), smoothstep(0., .7, h))',
    glowColor: [0.3, 0.9, 2.2],
    planetColor: 0x1b3a6b,
    planetEmissive: 0x091834,
    sunLight: 0x54a0ff,
    welcomeText: 'WELCOME TO NEPTUNE! 🔵',
    arrivalSub: 'AZURE STORM CONQUERED',
    endWhy: 'LANDED ON NEPTUNE 🔵',
    unlockMsg: 'LEVEL 2 CLEARED! 🔓 URANUS UNLOCKED!'
  },
  {
    id: 'uranus',
    level: 3,
    name: 'URANUS',
    icon: '🩵',
    title: 'THE TILTED ICE EXPANSE',
    subtitle: 'Aquamarine Atmosphere & Crystalline Skies',
    desc: 'Cruise through aquamarine crystal skies! Eat <i class="ec"></i> 5 Elon heads & touch down on <span class="m">URANUS</span> in 3 km.',
    badge: '🩵 LVL 3: URANUS',
    distance: 3000,
    color: '#00cec9',
    terrainColor: 0x0abde3,
    skyGradient: 'mix(vec3(0.3, 0.85, 0.85), vec3(0.02, 0.08, 0.12), smoothstep(0., .7, h))',
    glowColor: [0.4, 1.8, 2.0],
    planetColor: 0x55afb8,
    planetEmissive: 0x103038,
    sunLight: 0x48dbfb,
    hasRings: true,
    ringColor: [0.5, 1.8, 2.0],
    welcomeText: 'WELCOME TO URANUS! 🩵',
    arrivalSub: 'ICE REALM CONQUERED',
    endWhy: 'LANDED ON URANUS 🩵',
    unlockMsg: 'LEVEL 3 CLEARED! 🔓 SATURN UNLOCKED!'
  },
  {
    id: 'saturn',
    level: 4,
    name: 'SATURN',
    icon: '🪐',
    title: 'THE GOLDEN RING REALM',
    subtitle: 'Majestic Planetary Rings',
    desc: 'Navigate cosmic asteroid rings! Eat <i class="ec"></i> 5 Elon heads & set down on the golden cloud decks of <span class="m">SATURN</span> in 3 km.',
    badge: '🪐 LVL 4: SATURN',
    distance: 3000,
    color: '#fdcb6e',
    terrainColor: 0xd49b28,
    skyGradient: 'mix(vec3(0.9, 0.75, 0.35), vec3(0.12, 0.08, 0.03), smoothstep(0., .7, h))',
    glowColor: [2.2, 1.8, 0.8],
    planetColor: 0xcfa864,
    planetEmissive: 0x3d2b0e,
    sunLight: 0xfed330,
    hasRings: true,
    ringColor: [2.2, 1.9, 1.2],
    welcomeText: 'WELCOME TO SATURN! 🪐',
    arrivalSub: 'RING REALM CONQUERED',
    endWhy: 'LANDED ON SATURN 🪐',
    unlockMsg: 'LEVEL 4 CLEARED! 🔓 JUPITER UNLOCKED!'
  },
  {
    id: 'jupiter',
    level: 5,
    name: 'JUPITER',
    icon: '🟠',
    title: 'THE JOVIAN STORM GIANT',
    subtitle: 'Colossal Thunderbands & Great Red Spot',
    desc: 'Survive the King of Planets! Eat <i class="ec"></i> 5 Elon heads & conquer the immense gravitational pull of <span class="m">JUPITER</span> in 3 km.',
    badge: '🟠 LVL 5: JUPITER',
    distance: 3000,
    color: '#e17055',
    terrainColor: 0xb95e1e,
    skyGradient: 'mix(vec3(0.95, 0.55, 0.25), vec3(0.15, 0.06, 0.02), smoothstep(0., .7, h))',
    glowColor: [2.4, 1.3, 0.4],
    planetColor: 0xc68b59,
    planetEmissive: 0x3d1a08,
    sunLight: 0xf39c12,
    welcomeText: 'WELCOME TO JUPITER! 🟠',
    arrivalSub: 'KING OF PLANETS CONQUERED',
    endWhy: 'LANDED ON JUPITER 🟠',
    unlockMsg: 'LEVEL 5 CLEARED! 🔓 FINAL LEVEL: MARS UNLOCKED!'
  },
  {
    id: 'mars',
    level: 6,
    name: 'MARS',
    icon: '🚀',
    title: 'THE FINAL DESTINATION · MARS',
    subtitle: 'The Musk Empire & Ultimate Victory',
    desc: 'The ultimate interplanetary mission! Eat <i class="ec"></i> 5 Elon heads & establish the Musk Empire on <span class="m">MARS</span>!',
    badge: '🚀 LVL 6: MARS (FINAL)',
    distance: 3000,
    color: '#ff7675',
    terrainColor: 0xd08060,
    skyGradient: 'mix(vec3(.85, .45, .28), vec3(.08, .06, .16), smoothstep(0., .7, h))',
    glowColor: [1.6, .5, .25],
    planetColor: 0xb2502a,
    planetEmissive: 0x2a0804,
    sunLight: 0xffa070,
    welcomeText: 'WELCOME TO MARS! 🚀',
    arrivalSub: 'MUSK EMPIRE CONQUERED · SOLAR SYSTEM COMPLETE!',
    endWhy: 'MUSK EMPIRE REACHED 🚀',
    unlockMsg: '🏆 ALL LEVELS CONQUERED! SOLAR SYSTEM MASTER!'
  }
];

// Storage helpers
export function getUnlockedMaxLevel() {
  try {
    const saved = localStorage.getItem('rds.max_level');
    const parsed = parseInt(saved, 10);
    if (Number.isFinite(parsed) && parsed >= 1 && parsed <= 6) {
      return parsed;
    }
  } catch (e) {}
  return 1; // Default to Level 1 unlocked
}

export function isLevelUnlocked(lvlNumber) {
  return lvlNumber <= getUnlockedMaxLevel();
}

export function isLevelCompleted(lvlNumber) {
  try {
    const raw = localStorage.getItem('rds.completed_levels');
    if (raw) {
      const list = JSON.parse(raw);
      return Array.isArray(list) && list.includes(lvlNumber);
    }
  } catch (e) {}
  return false;
}

export function completeLevel(lvlNumber) {
  try {
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem('rds.completed_levels') || '[]');
    } catch {}
    if (!list.includes(lvlNumber)) {
      list.push(lvlNumber);
      localStorage.setItem('rds.completed_levels', JSON.stringify(list));
    }
    
    // Unlock next level if this was the highest unlocked
    const curMax = getUnlockedMaxLevel();
    if (lvlNumber >= curMax && lvlNumber < 6) {
      localStorage.setItem('rds.max_level', String(lvlNumber + 1));
      return { newlyUnlocked: lvlNumber + 1 };
    }
  } catch (e) {}
  return { newlyUnlocked: null };
}

// Global active level
let currentSelectedLevel = 1;

export function setSelectedLevel(lvlNumber) {
  const num = Math.max(1, Math.min(6, lvlNumber));
  if (isLevelUnlocked(num)) {
    currentSelectedLevel = num;
    window.selectedLevel = num;
    window.selectedMode = 'campaign';
    return true;
  }
  return false;
}

export function getSelectedLevel() {
  if (typeof window !== 'undefined' && window.selectedLevel) {
    return window.selectedLevel;
  }
  return currentSelectedLevel;
}

export function getLevelConfig(lvlNumber = getSelectedLevel()) {
  const index = Math.max(0, Math.min(PLANET_LEVELS.length - 1, (lvlNumber || 1) - 1));
  return PLANET_LEVELS[index];
}

// Procedural Canvas Planet Texture Generator
const textureCache = new Map();

export function createPlanetCanvas(planetConfig) {
  if (textureCache.has(planetConfig.id)) {
    return textureCache.get(planetConfig.id);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Pseudo-random deterministic generator
  let seed = 42 + planetConfig.level * 1337;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };

  const w = canvas.width;
  const h = canvas.height;

  if (planetConfig.id === 'pluto') {
    // Pluto: Icy nitrogen/methane crust with reddish tholin patches & pale Tombaugh Regio heart
    ctx.fillStyle = '#8e9aa6';
    ctx.fillRect(0, 0, w, h);

    // Dark equatorial tholin stains
    for (let i = 0; i < 400; i++) {
      const x = rnd() * w;
      const y = h * 0.45 + (rnd() - 0.5) * h * 0.35;
      const r = 8 + rnd() * 45;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rnd() < 0.5 ? 'rgba(100,50,30,0.45)' : 'rgba(70,40,30,0.5)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }

    // Bright icy heart (Tombaugh Regio)
    const heartX = w * 0.42;
    const heartY = h * 0.52;
    const hg = ctx.createRadialGradient(heartX, heartY, 10, heartX, heartY, 140);
    hg.addColorStop(0, 'rgba(245,248,255,0.9)');
    hg.addColorStop(0.5, 'rgba(220,230,245,0.7)');
    hg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = hg;
    ctx.fillRect(heartX - 140, heartY - 140, 280, 280);

    // Frosty polar caps
    ctx.fillStyle = 'rgba(235,242,250,0.65)';
    ctx.fillRect(0, 0, w, 22);
    ctx.fillRect(0, h - 22, w, 22);

  } else if (planetConfig.id === 'neptune') {
    // Neptune: Deep azure with subtle zonal storm bands & brilliant white/cyan methane clouds
    ctx.fillStyle = '#183c74';
    ctx.fillRect(0, 0, w, h);

    // Latitudinal bands
    for (let y = 0; y < h; y += 4) {
      const shade = Math.sin(y * 0.08) * 0.15 + (rnd() - 0.5) * 0.08;
      ctx.fillStyle = shade > 0 ? `rgba(40,110,210,${shade.toFixed(2)})` : `rgba(10,25,60,${(-shade).toFixed(2)})`;
      ctx.fillRect(0, y, w, 4);
    }

    // Great Dark Spot oval
    const spotX = w * 0.35;
    const spotY = h * 0.48;
    const sg = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, 55);
    sg.addColorStop(0, 'rgba(8,20,48,0.85)');
    sg.addColorStop(0.8, 'rgba(15,40,90,0.4)');
    sg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(spotX - 60, spotY - 40, 120, 80);

    // High altitude white cirrus streaks
    for (let i = 0; i < 70; i++) {
      const x = rnd() * w;
      const y = h * 0.3 + rnd() * h * 0.45;
      const len = 30 + rnd() * 120;
      ctx.fillStyle = 'rgba(180,230,255,0.55)';
      ctx.fillRect(x, y, len, 2.5);
    }

  } else if (planetConfig.id === 'uranus') {
    // Uranus: Clean, serene aquamarine with subtle soft banding
    ctx.fillStyle = '#4dbdc9';
    ctx.fillRect(0, 0, w, h);

    for (let y = 0; y < h; y += 6) {
      const v = Math.sin(y * 0.04) * 0.09 + (rnd() - 0.5) * 0.04;
      ctx.fillStyle = v > 0 ? `rgba(130,240,250,${v.toFixed(2)})` : `rgba(30,120,135,${(-v).toFixed(2)})`;
      ctx.fillRect(0, y, w, 6);
    }

    // Soft pale polar hood
    ctx.fillStyle = 'rgba(180,245,255,0.4)';
    ctx.fillRect(0, 0, w, 35);

  } else if (planetConfig.id === 'saturn') {
    // Saturn: Golden honey and amber banded atmosphere
    ctx.fillStyle = '#cca566';
    ctx.fillRect(0, 0, w, h);

    for (let y = 0; y < h; y += 4) {
      const b = Math.sin(y * 0.12) * 0.14 + Math.sin(y * 0.03) * 0.1 + (rnd() - 0.5) * 0.05;
      ctx.fillStyle = b > 0 ? `rgba(245,215,140,${b.toFixed(2)})` : `rgba(120,85,35,${(-b).toFixed(2)})`;
      ctx.fillRect(0, y, w, 4);
    }

    // Polar hexagon hint
    ctx.fillStyle = 'rgba(140,105,45,0.5)';
    ctx.fillRect(0, 0, w, 28);

  } else if (planetConfig.id === 'jupiter') {
    // Jupiter: Striking alternating belts, swirling storms, and the Great Red Spot
    ctx.fillStyle = '#c78f5d';
    ctx.fillRect(0, 0, w, h);

    // Belts and zones
    for (let y = 0; y < h; y += 3) {
      const band = Math.sin(y * 0.18) * 0.22 + Math.cos(y * 0.05) * 0.15;
      ctx.fillStyle = band > 0 ? `rgba(125,55,20,${band.toFixed(2)})` : `rgba(240,215,185,${(-band).toFixed(2)})`;
      ctx.fillRect(0, y, w, 3);
    }

    // Turbulent vortices
    for (let i = 0; i < 300; i++) {
      const x = rnd() * w;
      const y = h * 0.2 + rnd() * h * 0.6;
      const r = 5 + rnd() * 25;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rnd() < 0.5 ? 'rgba(90,35,15,0.4)' : 'rgba(250,225,195,0.35)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }

    // Great Red Spot
    const grsX = w * 0.62;
    const grsY = h * 0.64;
    const grs = ctx.createRadialGradient(grsX, grsY, 5, grsX, grsY, 55);
    grs.addColorStop(0, 'rgba(165,45,20,0.95)');
    grs.addColorStop(0.5, 'rgba(215,90,40,0.85)');
    grs.addColorStop(0.8, 'rgba(240,160,90,0.5)');
    grs.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grs;
    ctx.beginPath();
    ctx.ellipse(grsX, grsY, 65, 38, 0, 0, Math.PI * 2);
    ctx.fill();

  } else {
    // Mars: Rust red with dark basalt plains and polar ice cap
    ctx.fillStyle = '#b2502a';
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 900; i++) {
      const x = rnd() * w;
      const y = rnd() * h;
      const r = 4 + rnd() * 45;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const col = ['rgba(120,40,20,.6)', 'rgba(220,120,70,.5)', 'rgba(80,30,20,.5)', 'rgba(240,170,110,.35)'][Math.floor(rnd() * 4)];
      g.addColorStop(0, col);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }

    // Polar ice cap
    ctx.fillStyle = 'rgba(255,240,230,.8)';
    ctx.fillRect(0, 0, w, 18);
    ctx.fillRect(0, h - 18, w, 18);
  }

  textureCache.set(planetConfig.id, canvas);
  return canvas;
}

// Expose globally so game engine can access dynamically
if (typeof window !== 'undefined') {
  window.PLANET_LEVELS = PLANET_LEVELS;
  window.getLevelConfig = getLevelConfig;
  window.setSelectedLevel = setSelectedLevel;
  window.getSelectedLevel = getSelectedLevel;
  window.isLevelUnlocked = isLevelUnlocked;
  window.isLevelCompleted = isLevelCompleted;
  window.completeLevel = completeLevel;
  window.createPlanetCanvas = createPlanetCanvas;
  window.selectedLevel = 1;
}
