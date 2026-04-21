// ARCS Four Pillars - Interactive MicroSim
// Four pillars (Attention, Relevance, Confidence, Satisfaction) with hover details and audit mode

let canvasWidth = 600;
let drawHeight = 480;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect, resetBtn;
let hoveredPillar = -1;
let pillarRatings = [3, 3, 3, 3];
let auditSubmitted = false;
let auditFeedback = '';

const pillars = [
  {
    name: 'Attention',
    color: '#E8543A',
    letter: 'A',
    questions: [
      'Does the chapter open with a hook that creates curiosity?',
      'Are there varied activities to sustain interest?'
    ],
    designMove: 'Open with a surprising finding or a puzzle that the chapter content resolves.',
    description: 'Capturing and sustaining learner curiosity through novelty, inquiry, and variability.'
  },
  {
    name: 'Relevance',
    color: '#F5A623',
    letter: 'R',
    questions: [
      'Does the content connect to the learner\'s goals or experience?',
      'Are real-world applications shown early?'
    ],
    designMove: 'Tie every concept to a concrete professional scenario the reader recognizes.',
    description: 'Connecting content to learner goals, experiences, and future needs.'
  },
  {
    name: 'Confidence',
    color: '#4A90D9',
    letter: 'C',
    questions: [
      'Are expectations clear and achievable?',
      'Do learners get early wins before hard material?'
    ],
    designMove: 'Provide low-stakes practice with immediate feedback before high-stakes assessment.',
    description: 'Building learner belief that they can succeed through clear expectations and scaffolding.'
  },
  {
    name: 'Satisfaction',
    color: '#7ED321',
    letter: 'S',
    questions: [
      'Do learners see the value of what they accomplished?',
      'Is feedback timely and constructive?'
    ],
    designMove: 'End each section with a retrieval prompt that lets the reader prove to themselves what they learned.',
    description: 'Reinforcing accomplishment through meaningful feedback and intrinsic rewards.'
  }
];

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}

function setup() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  modeSelect = createSelect();
  modeSelect.parent(document.querySelector('main'));
  modeSelect.option('Explore');
  modeSelect.option('Audit');
  modeSelect.selected('Explore');
  modeSelect.style('font-size', '14px');
  modeSelect.style('padding', '4px 8px');
  modeSelect.style('margin', '4px');
  modeSelect.changed(onModeChange);

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('font-size', '14px');
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('margin', '4px');
  resetBtn.mousePressed(onReset);

  describe('Four pillars labeled Attention, Relevance, Confidence, and Satisfaction supporting a beam labeled Motivated Learning. Hover to explore or switch to audit mode.');
}

function onModeChange() {
  pillarRatings = [3, 3, 3, 3];
  auditSubmitted = false;
  auditFeedback = '';
}

function onReset() {
  pillarRatings = [3, 3, 3, 3];
  auditSubmitted = false;
  auditFeedback = '';
}

function getPillarGeometry(i) {
  let margin = 50;
  let gap = 20;
  let totalWidth = canvasWidth - margin * 2;
  let pillarWidth = (totalWidth - gap * 3) / 4;
  let maxHeight = drawHeight - 160;
  let baseY = drawHeight - 50;

  let x = margin + i * (pillarWidth + gap);
  let h = maxHeight * (pillarRatings[i] / 5);
  let y = baseY - h;

  return { x, y, w: pillarWidth, h, baseY, maxHeight };
}

function draw() {
  let mode = modeSelect.value();

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Title
  noStroke();
  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(18);
  text('ARCS Model: Four Pillars of Motivation', canvasWidth / 2, 10);

  if (mode === 'Audit') {
    fill('#555');
    textSize(12);
    text('Click on pillars to adjust height (1-5). Weakest pillar limits the whole.', canvasWidth / 2, 34);
  } else {
    fill('#666');
    textSize(12);
    text('Hover over a pillar to learn more', canvasWidth / 2, 34);
  }

  // Detect hover
  hoveredPillar = -1;
  for (let i = 0; i < 4; i++) {
    let g = getPillarGeometry(i);
    if (mouseX >= g.x && mouseX <= g.x + g.w && mouseY >= g.y - 20 && mouseY <= g.baseY) {
      hoveredPillar = i;
    }
  }

  // Draw beam
  let beamY = 55;
  let minRating = min(pillarRatings);
  let maxRating = max(pillarRatings);

  if (mode === 'Audit') {
    // Tilt beam based on ratings
    let leftAvg = (pillarRatings[0] + pillarRatings[1]) / 2;
    let rightAvg = (pillarRatings[2] + pillarRatings[3]) / 2;
    let tiltAngle = (rightAvg - leftAvg) * 0.03;

    push();
    translate(canvasWidth / 2, beamY);
    rotate(tiltAngle);
    fill('#1a3a6c');
    noStroke();
    rectMode(CENTER);
    rect(0, 0, canvasWidth * 0.75, 30, 4);
    fill('#fff');
    textAlign(CENTER, CENTER);
    textSize(14);
    textStyle(BOLD);
    text('Motivated Learning', 0, 0);
    textStyle(NORMAL);
    rectMode(CORNER);
    pop();
  } else {
    fill('#1a3a6c');
    noStroke();
    let beamW = canvasWidth * 0.75;
    rect(canvasWidth / 2 - beamW / 2, beamY - 15, beamW, 30, 4);
    fill('#fff');
    textAlign(CENTER, CENTER);
    textSize(14);
    textStyle(BOLD);
    text('Motivated Learning', canvasWidth / 2, beamY);
    textStyle(NORMAL);
  }

  // Draw pillars
  for (let i = 0; i < 4; i++) {
    let g = getPillarGeometry(i);
    let p = pillars[i];
    let isHovered = (hoveredPillar === i);

    // Pillar body
    if (isHovered) {
      let c = color(p.color);
      fill(red(c), green(c), blue(c), 220);
    } else {
      fill(p.color);
    }
    stroke('#fff');
    strokeWeight(1);

    if (mode === 'Audit') {
      // Draw full-height pillar with fill level
      let fullY = g.baseY - g.maxHeight;
      // Empty pillar
      fill(230);
      rect(g.x, fullY, g.w, g.maxHeight, 4, 4, 0, 0);
      // Filled portion
      if (isHovered) {
        let c = color(p.color);
        fill(red(c), green(c), blue(c), 220);
      } else {
        fill(p.color);
      }
      rect(g.x, g.y, g.w, g.h, 0, 0, 0, 0);

      // Rating number
      noStroke();
      fill('#fff');
      textAlign(CENTER, CENTER);
      textSize(20);
      textStyle(BOLD);
      text(pillarRatings[i], g.x + g.w / 2, g.y + g.h / 2);
      textStyle(NORMAL);
    } else {
      // Full height in explore mode
      let fullH = g.maxHeight;
      rect(g.x, g.baseY - fullH, g.w, fullH, 4, 4, 0, 0);

      // Letter
      noStroke();
      fill('#fff');
      textAlign(CENTER, CENTER);
      textSize(32);
      textStyle(BOLD);
      text(p.letter, g.x + g.w / 2, g.baseY - fullH / 2);
      textStyle(NORMAL);
    }

    // Pillar name below
    noStroke();
    fill('#333');
    textAlign(CENTER, TOP);
    textSize(12);
    textStyle(BOLD);
    text(p.name, g.x + g.w / 2, g.baseY + 5);
    textStyle(NORMAL);
  }

  // Weakness indicator in audit mode
  if (mode === 'Audit') {
    let weakest = pillarRatings.indexOf(minRating);
    if (minRating < 3) {
      fill('#C62828');
      textAlign(CENTER, BOTTOM);
      textSize(12);
      text('Weakest: ' + pillars[weakest].name + ' (limits the whole)', canvasWidth / 2, drawHeight - 25);
    } else if (minRating >= 4) {
      fill('#2E7D32');
      textAlign(CENTER, BOTTOM);
      textSize(12);
      text('All pillars strong — motivation well-supported!', canvasWidth / 2, drawHeight - 25);
    }
  }

  // Tooltip for Explore
  if (mode === 'Explore' && hoveredPillar >= 0) {
    drawTooltip(hoveredPillar);
  }

  // Control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);
}

function drawTooltip(idx) {
  let p = pillars[idx];
  let tw = min(280, canvasWidth - 20);
  let th = 120;
  let tx = constrain(mouseX + 15, 5, canvasWidth - tw - 5);
  let ty = constrain(mouseY - th - 10, 55, drawHeight - th - 5);

  fill(0, 0, 0, 30);
  noStroke();
  rect(tx + 3, ty + 3, tw, th, 6);

  fill(255, 255, 255, 245);
  stroke('#ccc');
  strokeWeight(1);
  rect(tx, ty, tw, th, 6);

  noStroke();
  let py = ty + 10;

  fill(p.color);
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text(p.name, tx + 10, py);
  textStyle(NORMAL);
  py += 20;

  fill('#333');
  textSize(11);
  text(p.description, tx + 10, py, tw - 20);
  py += 28;

  fill('#555');
  textSize(10);
  text('Audit questions:', tx + 10, py);
  py += 14;
  for (let q of p.questions) {
    text('- ' + q, tx + 10, py, tw - 20);
    py += 18;
  }
}

function mousePressed() {
  if (modeSelect.value() !== 'Audit') return;

  for (let i = 0; i < 4; i++) {
    let g = getPillarGeometry(i);
    let fullY = g.baseY - g.maxHeight;
    if (mouseX >= g.x && mouseX <= g.x + g.w && mouseY >= fullY && mouseY <= g.baseY) {
      // Map click position to 1-5 rating
      let ratio = 1 - (mouseY - fullY) / g.maxHeight;
      let rating = constrain(round(ratio * 5), 1, 5);
      pillarRatings[i] = rating;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
