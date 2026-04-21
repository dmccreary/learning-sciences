// Leitner Box Simulator
// Five-box spaced repetition system visualization

let canvasWidth = 600;
let drawHeight = 450;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let deckSizeSlider, retentionSlider, speedSlider;
let playBtn, pauseBtn, resetBtn, histCheckbox;

let cards = [];
let day = 0;
let playing = false;
let lastAdvance = 0;

let boxIntervals = [1, 2, 4, 8, 16];
let boxColors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#3498db'];
let boxLabels = ['Box 1\n1 day', 'Box 2\n2 days', 'Box 3\n4 days', 'Box 4\n8 days', 'Box 5\n16 days'];

let history = []; // array of {day, counts: [5 numbers]}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}

function initCards(n) {
  cards = [];
  for (let i = 0; i < n; i++) {
    cards.push({ box: 0, lastReview: 0 });
  }
  day = 0;
  history = [];
  recordHistory();
}

function recordHistory() {
  let counts = [0, 0, 0, 0, 0];
  for (let c of cards) {
    counts[c.box]++;
  }
  history.push({ day: day, counts: counts.slice() });
}

function simulateDay() {
  day++;
  let baseRetention = retentionSlider.value() / 100;

  for (let c of cards) {
    let interval = boxIntervals[c.box];
    if ((day - c.lastReview) >= interval) {
      // Card is due for review
      // Higher boxes have higher retention
      let prob = Math.min(0.98, baseRetention + c.box * 0.05);
      if (Math.random() < prob) {
        // Correct -- promote
        if (c.box < 4) c.box++;
        c.lastReview = day;
      } else {
        // Incorrect -- demote to box 0
        c.box = 0;
        c.lastReview = day;
      }
    }
  }
  recordHistory();
}

function setup() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  // Controls
  let lbl1 = createDiv('Deck Size: ');
  lbl1.parent(document.querySelector('main'));
  lbl1.style('font-size', '13px');
  lbl1.style('display', 'inline-block');
  lbl1.style('margin-left', '10px');
  lbl1.style('margin-top', '6px');

  deckSizeSlider = createSlider(20, 200, 50, 10);
  deckSizeSlider.parent(document.querySelector('main'));
  deckSizeSlider.style('width', '100px');
  deckSizeSlider.style('display', 'inline-block');
  deckSizeSlider.style('vertical-align', 'middle');
  deckSizeSlider.input(() => { initCards(deckSizeSlider.value()); playing = false; });

  let lbl2 = createDiv('Retention %: ');
  lbl2.parent(document.querySelector('main'));
  lbl2.style('font-size', '13px');
  lbl2.style('display', 'inline-block');
  lbl2.style('margin-left', '15px');

  retentionSlider = createSlider(40, 95, 70, 5);
  retentionSlider.parent(document.querySelector('main'));
  retentionSlider.style('width', '80px');
  retentionSlider.style('display', 'inline-block');
  retentionSlider.style('vertical-align', 'middle');

  let lbl3 = createDiv('Speed: ');
  lbl3.parent(document.querySelector('main'));
  lbl3.style('font-size', '13px');
  lbl3.style('display', 'inline-block');
  lbl3.style('margin-left', '15px');

  speedSlider = createSlider(1, 20, 5, 1);
  speedSlider.parent(document.querySelector('main'));
  speedSlider.style('width', '80px');
  speedSlider.style('display', 'inline-block');
  speedSlider.style('vertical-align', 'middle');

  let br1 = createDiv('');
  br1.parent(document.querySelector('main'));
  br1.style('height', '4px');

  playBtn = createButton('Play');
  playBtn.parent(document.querySelector('main'));
  playBtn.style('margin-left', '10px');
  playBtn.mousePressed(() => { playing = true; });

  pauseBtn = createButton('Pause');
  pauseBtn.parent(document.querySelector('main'));
  pauseBtn.style('margin-left', '5px');
  pauseBtn.mousePressed(() => { playing = false; });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '5px');
  resetBtn.mousePressed(() => { initCards(deckSizeSlider.value()); playing = false; });

  histCheckbox = createCheckbox('Show Histogram', true);
  histCheckbox.parent(document.querySelector('main'));
  histCheckbox.style('font-size', '13px');
  histCheckbox.style('display', 'inline-block');
  histCheckbox.style('margin-left', '15px');

  initCards(50);

  describe('Leitner box spaced repetition simulator showing cards moving between five boxes over time');
}

function draw() {
  background(255);

  // Advance simulation
  if (playing) {
    let dps = speedSlider.value();
    let interval = 1000 / dps;
    if (millis() - lastAdvance > interval) {
      simulateDay();
      lastAdvance = millis();
    }
  }

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Title
  noStroke();
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Leitner Box System -- Day ' + day, canvasWidth / 2, 8);

  // Count cards per box
  let counts = [0, 0, 0, 0, 0];
  for (let c of cards) {
    counts[c.box]++;
  }
  let total = cards.length;

  // Draw boxes
  let showHist = histCheckbox.checked();
  let boxAreaTop = 35;
  let boxAreaHeight = showHist ? 180 : 350;
  let boxWidth = (canvasWidth - 80) / 5;
  let boxGap = 8;
  let startX = 30;

  for (let i = 0; i < 5; i++) {
    let bx = startX + i * (boxWidth + boxGap);
    let by = boxAreaTop + 30;
    let bh = boxAreaHeight - 40;

    // Box background
    fill(255);
    stroke(boxColors[i]);
    strokeWeight(2);
    rect(bx, by, boxWidth, bh, 6);

    // Box label
    noStroke();
    fill(boxColors[i]);
    textSize(12);
    textAlign(CENTER, TOP);
    text('Box ' + (i + 1), bx + boxWidth / 2, boxAreaTop);
    fill(100);
    textSize(10);
    text(boxIntervals[i] + 'd interval', bx + boxWidth / 2, boxAreaTop + 14);

    // Draw cards as stacked rectangles
    let cardCount = counts[i];
    let maxVisible = Math.min(cardCount, 20);
    let cardH = Math.min(12, (bh - 10) / Math.max(maxVisible, 1));

    for (let j = 0; j < maxVisible; j++) {
      let cy = by + bh - 5 - (j + 1) * (cardH + 1);
      fill(boxColors[i] + '40');
      stroke(boxColors[i]);
      strokeWeight(1);
      rect(bx + 4, cy, boxWidth - 8, cardH, 2);
    }

    // Count label
    noStroke();
    fill(40);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(cardCount, bx + boxWidth / 2, by + bh + 16);

    // Percentage
    fill(100);
    textSize(10);
    text(((cardCount / total) * 100).toFixed(0) + '%', bx + boxWidth / 2, by + bh + 30);
  }

  // Histogram over time
  if (showHist && history.length > 1) {
    let histTop = boxAreaTop + boxAreaHeight + 20;
    let histH = drawHeight - histTop - 30;
    let histW = canvasWidth - 80;

    // Background
    fill(255);
    stroke(200);
    strokeWeight(1);
    rect(startX, histTop, histW, histH);

    noStroke();
    fill(60);
    textSize(12);
    textAlign(CENTER, BOTTOM);
    text('Card Distribution Over Time', startX + histW / 2, histTop - 3);

    // Stacked area chart
    let maxDay = history[history.length - 1].day;
    if (maxDay > 0) {
      let step = Math.max(1, Math.floor(history.length / histW));
      for (let hi = 0; hi < history.length; hi += step) {
        let h = history[hi];
        let x = startX + (h.day / maxDay) * histW;
        let barW = Math.max(1, (histW / history.length) * step);
        let cumY = histTop + histH;
        for (let b = 0; b < 5; b++) {
          let segH = (h.counts[b] / total) * histH;
          fill(boxColors[b] + 'A0');
          noStroke();
          rect(x, cumY - segH, barW, segH);
          cumY -= segH;
        }
      }
    }

    // Axis labels
    noStroke();
    fill(100);
    textSize(10);
    textAlign(LEFT, TOP);
    text('Day 0', startX, histTop + histH + 3);
    textAlign(RIGHT, TOP);
    text('Day ' + (history.length > 0 ? history[history.length - 1].day : 0), startX + histW, histTop + histH + 3);
  }

  // Info
  noStroke();
  fill(80);
  textSize(11);
  textAlign(LEFT, BOTTOM);
  text('Deck: ' + total + ' cards | Retention: ' + retentionSlider.value() + '% | Speed: ' + speedSlider.value() + ' days/sec', 10, drawHeight - 4);
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
