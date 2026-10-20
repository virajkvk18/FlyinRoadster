// In-browser mock backend for rankings, profiles, and skins
const DEFAULT_LEADERBOARD = [
  { name: "Starman", country: "US", score: 9948200 }, // ~51.80s to Mars
  { name: "Musk_X", country: "US", score: 9946500 },  // ~53.50s
  { name: "HyperBoost", country: "DE", score: 9944100 }, // ~55.90s
  { name: "NeonRider", country: "KR", score: 9941500 }, // ~58.50s
  { name: "CyberDrift", country: "JP", score: 9939200 }, // ~60.80s
  { name: "RedPlanet", country: "GB", score: 9935400 }, // ~64.60s
  { name: "DogeRocket", country: "CA", score: 9931000 },
  { name: "FalconHeavy", country: "FR", score: 2980 },   // 2980m (still on earth)
  { name: "RampMaster", country: "AU", score: 2840 },
  { name: "SpeedDemon", country: "BR", score: 2710 }
];

export function initMockApi() {
  const origFetch = window.fetch;
  window.fetch = async function(input, init) {
    const url = typeof input === 'string' ? input : input instanceof Request ? input.url : '';
    
    if (url.includes('api/me')) {
      const name = localStorage.getItem('rds.name') || 'Roadster Pilot';
      return new Response(JSON.stringify({ name }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.includes('api/name') && init?.method === 'POST') {
      try {
        const body = JSON.parse(init.body || '{}');
        if (body.name) {
          localStorage.setItem('rds.name', body.name);
        }
      } catch (e) {}
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.includes('api/invites')) {
      const invCount = +(localStorage.getItem('rds.inv') || 4);
      return new Response(JSON.stringify({ count: invCount, champ: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.includes('api/ticket')) {
      return new Response(JSON.stringify({ tk: 'tk_' + Math.random().toString(36).slice(2) }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.includes('api/rank')) {
      let savedScores = [];
      try {
        savedScores = JSON.parse(localStorage.getItem('rds.local_ranks') || '[]');
      } catch (e) {}

      if (init?.method === 'POST') {
        let entry = {};
        try {
          entry = JSON.parse(init.body || '{}');
        } catch (e) {}
        
        const playerName = entry.name || localStorage.getItem('rds.name') || 'Roadster Pilot';
        // if cleared Mars, score is 10,000,000 - t100 centiseconds
        const score = entry.cleared ? 10000000 - (entry.t100 || 6000) : (entry.dist || 0);
        
        savedScores.push({
          name: playerName,
          country: 'US',
          score,
          date: Date.now()
        });
        localStorage.setItem('rds.local_ranks', JSON.stringify(savedScores));
      }

      // Combine default leaderboard with player scores
      const combined = [...DEFAULT_LEADERBOARD];
      const playerName = localStorage.getItem('rds.name') || 'Roadster Pilot';

      for (const item of savedScores) {
        combined.push({
          name: item.name,
          country: item.country || 'US',
          score: item.score,
          me: true
        });
      }

      // Sort descending by score
      combined.sort((a, b) => b.score - a.score);

      // Find player rank
      let playerRank = combined.findIndex(x => x.me || x.name === playerName) + 1;
      if (playerRank <= 0) playerRank = 4;

      const myBest = combined.find(x => x.me)?.score || (savedScores.length ? savedScores[0].score : 0);

      const responsePayload = {
        list: combined.slice(0, 50),
        rank: playerRank,
        best: myBest,
        total: combined.length + 120
      };

      return new Response(JSON.stringify({
        all: responsePayload,
        day: responsePayload
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.includes('api/pulse') || url.includes('api/ref') || url.includes('api/ev')) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return origFetch.apply(this, arguments);
  };
}
