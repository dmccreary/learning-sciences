// Token Budget Explorer
// Interactive budget calculator showing token costs for different agent skills
// Purely a budget visualizer — no real API calls

let canvasWidth = 600;
let drawHeight = 500;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let depthSlider, outputSlider, cadenceSlider;
let contextSelect, resetBtn;

let contextWindow = 1000000;
let instructionDepth = 5;
let outputLength = 4000;
let runCadence = 300; // seconds

const CACHE_TTL = 300; // 5 minutes

// Token segments
const segments = [
  { name: 'System Role', baseTokens: 2000, color: '#3B82F6', scalable: false },
  { name: 'Style Guide', baseTokens: 8000, color: '#8B5CF6', scalable: true, scaleField: 'depth' },
  { name: 'Outline', baseTokens: 3000, color: '#06B6D4', scalable: false },
  { name: 'Prior Chapters', baseTokens: 15000, color: '#F59E0B', scalable: true, scaleField: 'depth' },
  { name: 'Graph Subgraph', baseTokens: 5000, color: '#10B981', scalable: false },
  { name: 'In-Flight Response', baseTokens: 4000, color: '#EF4444', scalable: true, scaleField: 'output' }
];

// Pricing (per million tokens, sample)
const INPUT_COST = 3.00;  // $ per 1M input tokens
const OUTPUT_COST = 15.00; // $ per 1M output tokens
const CACHED_INPUT_COST = 0.30; // $ per 1M cached input tokens

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  let ctrlDiv = createDiv('');
  ctrlDiv.parent(document.querySelector('main'));
  ctrlDiv.style('display', 'flex');
  ctrlDiv.style('flex-wrap', 'wrap');
  ctrlDiv.style('gap', '12px');
  ctrlDiv.style('padding', '8px');
  ctrlDiv.style('font-family', 'Arial, sans-serif');
  ctrlDiv.style('font-size', '12px');
  ctrlDiv.style('align-items', 'center');

  // Instruction depth
  let d1 = createDiv('');
  d1.parent(ctrlDiv);
  let l1 = createSpan('Instruction Depth: ');
  l1.parent(d1);
  depthSlider = createSlider(1, 10, 5);
  depthSlider.parent(d1);
  depthSlider.style('width', '100px');
  let v1 = createSpan('5');
  v1.parent(d1);
  v1.id('depth-val');

  // Output length
  let d2 = createDiv('');
  d2.parent(ctrlDiv);
  let l2 = createSpan('Output Length: ');
  l2.parent(d2);
  outputSlider = createSlider(500, 15000, 4000, 500);
  outputSlider.parent(d2);
  outputSlider.style('width', '100px');
  let v2 = createSpan('4000');
  v2.parent(d2);
  v2.id('output-val');

  // Context window
  let d3 = createDiv('');
  d3.parent(ctrlDiv);
  let l3 = createSpan('Context: ');
  l3.parent(d3);
  contextSelect = createSelect();
  contextSelect.parent(d3);
  contextSelect.option('200K', '200000');
  contextSelect.option('400K', '400000');
  contextSelect.option('1M', '1000000');
  contextSelect.selected('1000000');
  contextSelect.style('padding', '2px 6px');

  // Run cadence
  let d4 = createDiv('');
  d4.parent(ctrlDiv);
  let l4 = createSpan('Run Cadence (s): ');
  l4.parent(d4);
  cadenceSlider = createSlider(60, 3600, 300, 30);
  cadenceSlider.parent(d4);
  cadenceSlider.style('width', '100px');
  let v4 = createSpan('300');
  v4.parent(d4);
  v4.id('cadence-val');

  // Reset
  resetBtn = createButton('Reset');
  resetBtn.parent(ctrlDiv);
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('border-radius', '4px');
  resetBtn.style('border', '1px solid #ccc');
  resetBtn.style('cursor', 'pointer');
  resetBtn.mousePressed(() => {
    depthSlider.value(5);
    outputSlider.value(4000);
    contextSelect.selected('1000000');
    cadenceSlider.value(300);
  });

  describe('Interactive token budget explorer showing context window usage segments, cache timer, and cost estimation for AI-powered textbook generation.', LABEL);
}

function draw() {
  // Read controls
  instructionDepth = depthSlider.value();
  outputLength = outputSlider.value();
  contextWindow = int(contextSelect.value());
  runCadence = cadenceSlider.value();

  document.getElementById('depth-val').innerText = instructionDepth;
  document.getElementById('output-val').innerText = outputLength;
  document.getElementById('cadence-val').innerText = runCadence + 's';

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('#1a3a6c');
  noStroke();
  textSize(16);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text('Token Budget Explorer', canvasWidth / 2, 10);
  textStyle(NORMAL);

  drawBudgetBar();
  drawCacheTimer();
  drawCostPanel();
  drawLegend();
}

function getSegmentTokens() {
  let result = [];
  for (let s of segments) {
    let tokens = s.baseTokens;
    if (s.scalable && s.scaleField === 'depth') {
      tokens = s.baseTokens * (instructionDepth / 5);
    } else if (s.scalable && s.scaleField === 'output') {
      tokens = outputLength;
    }
    result.push({ name: s.name, tokens: Math.round(tokens), color: s.color });
  }
  return result;
}

function drawBudgetBar() {
  let barX = 30;
  let barY = 50;
  let barW = canvasWidth - 60;
  let barH = 50;

  // Background
  fill(230);
  stroke('#aaa');
  strokeWeight(1);
  rect(barX, barY, barW, barH, 4);

  // Context window label
  fill('#666');
  noStroke();
  textSize(10);
  textAlign(RIGHT, BOTTOM);
  text(formatTokens(contextWindow) + ' context window', barX + barW, barY - 3);

  let segs = getSegmentTokens();
  let totalUsed = segs.reduce((sum, s) => sum + s.tokens, 0);
  let x = barX;

  for (let s of segs) {
    let sw = (s.tokens / contextWindow) * barW;
    fill(s.color);
    noStroke();
    rect(x, barY, sw, barH);

    // Label if wide enough
    if (sw > 40) {
      fill(255);
      textSize(8);
      textAlign(CENTER, CENTER);
      text(formatTokens(s.tokens), x + sw / 2, barY + barH / 2);
    }
    x += sw;
  }

  // Usage percentage
  let pct = (totalUsed / contextWindow * 100).toFixed(1);
  let remaining = contextWindow - totalUsed;

  fill('#333');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Used: ' + formatTokens(totalUsed) + ' (' + pct + '%)  |  Remaining: ' + formatTokens(remaining), barX, barY + barH + 8);

  // Warning if over budget
  if (totalUsed > contextWindow) {
    fill('#EF4444');
    textStyle(BOLD);
    textSize(13);
    text('OVER BUDGET', barX + barW - 100, barY + barH + 8);
    textStyle(NORMAL);
  }
}

function drawCacheTimer() {
  let timerX = 30;
  let timerY = 140;
  let timerW = canvasWidth - 60;
  let timerH = 25;

  fill('#333');
  noStroke();
  textSize(12);
  textAlign(LEFT, BOTTOM);
  textStyle(BOLD);
  text('Prompt Cache Timer (TTL: 300s)', timerX, timerY - 4);
  textStyle(NORMAL);

  // Timer bar background
  fill(230);
  stroke('#aaa');
  strokeWeight(1);
  rect(timerX, timerY, timerW, timerH, 4);

  let isCacheHit = runCadence <= CACHE_TTL;
  let fillPct = isCacheHit ? (1 - runCadence / CACHE_TTL) : 0;

  // Fill
  if (isCacheHit) {
    fill('#10B981');
  } else {
    fill('#EF4444');
  }
  noStroke();
  rect(timerX, timerY, timerW * fillPct, timerH, 4);

  // Label
  fill(isCacheHit ? '#065F46' : '#991B1B');
  textSize(11);
  textAlign(CENTER, CENTER);
  if (isCacheHit) {
    text('CACHE HIT — ' + Math.round(fillPct * 100) + '% TTL remaining at next run', timerX + timerW / 2, timerY + timerH / 2);
  } else {
    text('CACHE MISS — run cadence (' + runCadence + 's) exceeds 300s TTL', timerX + timerW / 2, timerY + timerH / 2);
  }

  // Run cadence visualization
  let vizY = timerY + timerH + 15;
  fill('#666');
  textSize(10);
  textAlign(LEFT, TOP);
  text('Run schedule (each tick = one run):', timerX, vizY);

  vizY += 16;
  let numRuns = min(8, Math.floor(1800 / runCadence));
  let tickSpacing = timerW / 8;

  for (let i = 0; i < numRuns; i++) {
    let tx = timerX + i * tickSpacing;
    let runTime = i * runCadence;
    let hit = (i === 0) || (runCadence <= CACHE_TTL);

    fill(hit ? '#10B981' : '#EF4444');
    noStroke();
    ellipse(tx + 10, vizY + 8, 12, 12);

    fill(255);
    textSize(7);
    textAlign(CENTER, CENTER);
    text(i + 1, tx + 10, vizY + 8);

    fill('#888');
    textSize(8);
    textAlign(CENTER, TOP);
    text(formatTime(runTime), tx + 10, vizY + 18);
  }
}

function drawCostPanel() {
  let panelX = 30;
  let panelY = 265;
  let panelW = canvasWidth - 60;
  let panelH = 80;

  fill(255);
  stroke('#ddd');
  strokeWeight(1);
  rect(panelX, panelY, panelW, panelH, 8);

  let segs = getSegmentTokens();
  let inputTokens = segs.slice(0, 5).reduce((sum, s) => sum + s.tokens, 0);
  let outputTokens = segs[5].tokens;
  let isCacheHit = runCadence <= CACHE_TTL;

  let inputCostRate = isCacheHit ? CACHED_INPUT_COST : INPUT_COST;
  let costPerRun = (inputTokens / 1000000) * inputCostRate + (outputTokens / 1000000) * OUTPUT_COST;
  let runsPerHour = 3600 / runCadence;
  let costPerHour = costPerRun * runsPerHour;

  fill('#333');
  noStroke();
  textSize(13);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text('Cost Estimate', panelX + 10, panelY + 8);
  textStyle(NORMAL);

  textSize(11);
  let ty = panelY + 28;
  fill('#555');
  text('Input: ' + formatTokens(inputTokens) + ' @ $' + inputCostRate.toFixed(2) + '/M' + (isCacheHit ? ' (cached)' : ''), panelX + 10, ty);
  text('Output: ' + formatTokens(outputTokens) + ' @ $' + OUTPUT_COST.toFixed(2) + '/M', panelX + 10, ty + 16);

  fill('#1a3a6c');
  textStyle(BOLD);
  text('Cost per run: $' + costPerRun.toFixed(4) + '  |  Per hour (' + runsPerHour.toFixed(1) + ' runs): $' + costPerHour.toFixed(3), panelX + 10, ty + 36);
  textStyle(NORMAL);
}

function drawLegend() {
  let lx = 30;
  let ly = 360;

  fill('#333');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text('Budget Segments', lx, ly);
  textStyle(NORMAL);

  ly += 18;
  let segs = getSegmentTokens();
  let col = 0;
  let colW = (canvasWidth - 60) / 3;

  for (let i = 0; i < segs.length; i++) {
    let s = segs[i];
    let cx = lx + (i % 3) * colW;
    let cy = ly + Math.floor(i / 3) * 20;

    fill(s.color);
    noStroke();
    rect(cx, cy + 2, 12, 12, 2);

    fill('#555');
    textSize(10);
    textAlign(LEFT, TOP);
    text(s.name + ': ' + formatTokens(s.tokens), cx + 16, cy + 2);
  }
}

function formatTokens(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

function formatTime(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    canvasHeight = drawHeight + controlHeight;
  }
}
