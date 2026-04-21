// Aggregate Quality-Metrics Dashboard
// Chart.js dashboard with synthetic data — NO STUDENT DATA
// Four panels: completion funnel, difficulty scatter, engagement heatmap, Bloom distribution

const CHAPTERS = ['Ch1','Ch2','Ch3','Ch4','Ch5','Ch6','Ch7','Ch8','Ch9','Ch10','Ch11','Ch12','Ch13','Ch14','Ch15'];
const BLOOM_LEVELS = ['Remember','Understand','Apply','Analyze','Evaluate','Create'];
const BLOOM_COLORS = ['#3B82F6','#06B6D4','#10B981','#F59E0B','#EF4444','#8B5CF6'];
const DISCLAIMER = 'SYNTHETIC DATA — NO STUDENT DATA | N=500 simulated | Jan–Apr 2026';

// Seed-based pseudo-random for reproducibility
let seed = 42;
function seededRandom() {
  seed = (seed * 16807 + 0) % 2147483647;
  return (seed - 1) / 2147483646;
}

function generateData() {
  seed = 42;
  const data = {};

  // 1. Chapter completion rates
  data.completion = CHAPTERS.map((ch, i) => {
    let base = 0.95 - i * 0.03;
    return Math.max(0.35, Math.min(0.98, base + (seededRandom() - 0.5) * 0.1));
  });

  // 2. Quiz item difficulty scatter
  data.quizItems = [];
  for (let c = 0; c < 15; c++) {
    let numItems = 8 + Math.floor(seededRandom() * 5);
    for (let j = 0; j < numItems; j++) {
      let difficulty = -2 + seededRandom() * 4; // IRT b parameter
      let pctCorrect = 1 / (1 + Math.exp(difficulty)) + (seededRandom() - 0.5) * 0.15;
      pctCorrect = Math.max(0.05, Math.min(0.98, pctCorrect));
      data.quizItems.push({ chapter: c, difficulty: difficulty, pctCorrect: pctCorrect });
    }
  }

  // 3. MicroSim engagement (chapters x sims)
  data.engagement = [];
  const simNames = ['Sim A','Sim B','Sim C','Sim D'];
  for (let c = 0; c < 15; c++) {
    let row = [];
    for (let s = 0; s < 4; s++) {
      row.push(Math.max(0, Math.min(1, 0.3 + seededRandom() * 0.6)));
    }
    data.engagement.push(row);
  }
  data.simNames = simNames;

  // 4. Bloom-level distribution per chapter
  data.bloomDist = [];
  for (let c = 0; c < 15; c++) {
    let counts = [];
    let total = 10 + Math.floor(seededRandom() * 6);
    let remaining = total;
    for (let b = 0; b < 5; b++) {
      let share;
      if (b < 2) share = Math.floor(remaining * (0.2 + seededRandom() * 0.2));
      else share = Math.floor(remaining * (0.1 + seededRandom() * 0.15));
      share = Math.min(share, remaining);
      counts.push(share);
      remaining -= share;
    }
    counts.push(remaining); // Create level
    data.bloomDist.push(counts);
  }

  return data;
}

function initDashboard() {
  const data = generateData();

  // 1. Completion Funnel — horizontal bars
  const ctx1 = document.getElementById('completionChart').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: CHAPTERS,
      datasets: [{
        label: 'Completion Rate',
        data: data.completion.map(v => (v * 100).toFixed(1)),
        backgroundColor: data.completion.map(v => v >= 0.7 ? '#10B981' : v >= 0.5 ? '#F59E0B' : '#EF4444'),
        borderRadius: 3
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: { display: true, text: 'Chapter Completion Funnel' },
        legend: { display: false },
        annotation: {
          annotations: {
            targetLine: {
              type: 'line',
              xMin: 70, xMax: 70,
              borderColor: '#EF4444',
              borderWidth: 2,
              borderDash: [5, 5],
              label: { display: true, content: 'Target: 70%', position: 'start' }
            }
          }
        }
      },
      scales: {
        x: { min: 0, max: 100, title: { display: true, text: 'Completion %' } }
      }
    }
  });

  // 2. Difficulty Scatter
  const ctx2 = document.getElementById('difficultyChart').getContext('2d');
  const scatterData = data.quizItems.map(item => ({
    x: item.difficulty,
    y: item.pctCorrect * 100
  }));

  // Diagonal reference: as difficulty goes up, pctCorrect should go down
  const refLine = [];
  for (let d = -2; d <= 2; d += 0.5) {
    refLine.push({ x: d, y: (1 / (1 + Math.exp(d))) * 100 });
  }

  new Chart(ctx2, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Quiz Items',
          data: scatterData,
          backgroundColor: '#3B82F680',
          pointRadius: 4
        },
        {
          label: 'IRT Reference',
          data: refLine,
          type: 'line',
          borderColor: '#EF4444',
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: { display: true, text: 'Quiz Item Difficulty vs. Percent Correct' }
      },
      scales: {
        x: { title: { display: true, text: 'IRT Difficulty (b)' }, min: -2.5, max: 2.5 },
        y: { title: { display: true, text: '% Correct' }, min: 0, max: 100 }
      }
    }
  });

  // 3. Engagement Heatmap (using a matrix of colored cells via a custom canvas)
  drawEngagementHeatmap(data);

  // 4. Bloom-level stacked bar
  const ctx4 = document.getElementById('bloomChart').getContext('2d');
  const bloomDatasets = BLOOM_LEVELS.map((level, bi) => ({
    label: level,
    data: data.bloomDist.map(row => row[bi]),
    backgroundColor: BLOOM_COLORS[bi]
  }));

  new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: CHAPTERS,
      datasets: bloomDatasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: { display: true, text: 'Bloom-Level Distribution per Chapter' },
        legend: { position: 'bottom' }
      },
      scales: {
        x: { stacked: true },
        y: { stacked: true, title: { display: true, text: 'Item Count' } }
      }
    }
  });
}

function drawEngagementHeatmap(data) {
  const canvas = document.getElementById('engagementCanvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  const margin = { top: 30, right: 20, bottom: 30, left: 50 };
  const plotW = w - margin.left - margin.right;
  const plotH = h - margin.top - margin.bottom;
  const cellW = plotW / data.simNames.length;
  const cellH = plotH / CHAPTERS.length;

  // Title
  ctx.fillStyle = '#333';
  ctx.font = 'bold 13px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('MicroSim Engagement Heatmap', w / 2, 18);

  // Column headers
  ctx.font = '10px Arial';
  data.simNames.forEach((name, i) => {
    ctx.fillText(name, margin.left + i * cellW + cellW / 2, margin.top - 5);
  });

  // Row labels and cells
  for (let r = 0; r < CHAPTERS.length; r++) {
    ctx.fillStyle = '#555';
    ctx.font = '9px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(CHAPTERS[r], margin.left - 5, margin.top + r * cellH + cellH / 2 + 3);

    for (let c = 0; c < data.simNames.length; c++) {
      let val = data.engagement[r][c];
      // Color ramp: white (0) to blue (1)
      let red = Math.round(255 - val * 200);
      let green = Math.round(255 - val * 170);
      let blue = Math.round(255 - val * 50);
      ctx.fillStyle = `rgb(${red},${green},${blue})`;
      ctx.fillRect(margin.left + c * cellW + 1, margin.top + r * cellH + 1, cellW - 2, cellH - 2);

      // Value text
      ctx.fillStyle = val > 0.6 ? '#fff' : '#333';
      ctx.font = '8px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(val.toFixed(2), margin.left + c * cellW + cellW / 2, margin.top + r * cellH + cellH / 2 + 3);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initDashboard);
