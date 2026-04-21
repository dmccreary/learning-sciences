// Retrieval Strength vs. Storage Strength
// Interactive 2D quadrant plot with explore and quiz modes

let canvasWidth = 600;
let drawHeight = 500;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let plotLeft = 80;
let plotRight = 30;
let plotTop = 50;
let plotBottom = 60;

let modeSelect, resetBtn;
let hoveredDot = -1;
let quizIdx = 0;
let quizFeedback = '';
let quizCorrect = 0;
let quizTotal = 0;

// Pre-placed example items
let items = [
  { name: 'Looked-up phone number', rs: 0.85, ss: 0.15,
    rationale: 'High retrieval now (you just looked it up), but no durable trace — it will fade in minutes.',
    move: 'Rehearse it or write it down to build storage strength.' },
  { name: 'Childhood home address', rs: 0.25, ss: 0.9,
    rationale: 'Deeply encoded from years of use, but you may need a moment to retrieve it — low current accessibility.',
    move: 'A single retrieval cue will bring it back quickly. No re-study needed.' },
  { name: 'Word studied last week', rs: 0.55, ss: 0.45,
    rationale: 'Moderate on both — some encoding happened, but retrieval is already fading.',
    move: 'Schedule a retrieval practice session now, before retrieval drops further.' },
  { name: 'Multiplication fact (7x8)', rs: 0.9, ss: 0.95,
    rationale: 'Overlearned through hundreds of retrievals. Both strengths are high.',
    move: 'Maintenance only — occasional use keeps it accessible.' },
  { name: 'Novel term seen once', rs: 0.1, ss: 0.08,
    rationale: 'Barely encoded and not accessible. Essentially unlearned.',
    move: 'Start from scratch with elaborative encoding and immediate retrieval practice.' }
];

// Quiz scenarios
let quizzes = [
  { scenario: 'You crammed this formula for a test yesterday and aced it. The retest is in a month.',
    answer: 'fleeting', quadrant: 'High RS, Low SS' },
  { scenario: 'You learned to ride a bike as a child. You have not ridden in 10 years.',
    answer: 'durable but dormant', quadrant: 'Low RS, High SS' },
  { scenario: 'A friend mentions a movie title you have never heard before.',
    answer: 'unlearned', quadrant: 'Low RS, Low SS' },
  { scenario: 'Your own name — you use it every single day.',
    answer: 'well-learned', quadrant: 'High RS, High SS' },
  { scenario: 'A vocabulary word from a language class you took last semester. You remember studying it but cannot recall the meaning.',
    answer: 'durable but dormant', quadrant: 'Low RS, High SS' }
];

let quadrants = [
  { name: 'unlearned', label: 'Unlearned', x: 0.25, y: 0.25, color: '#e74c3c40' },
  { name: 'fleeting', label: 'Fleeting', x: 0.75, y: 0.25, color: '#f39c1240' },
  { name: 'durable but dormant', label: 'Durable but\nDormant', x: 0.25, y: 0.75, color: '#3498db40' },
  { name: 'well-learned', label: 'Well-Learned', x: 0.75, y: 0.75, color: '#2ecc7140' }
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
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  let lbl = createDiv('Mode: ');
  lbl.parent(document.querySelector('main'));
  lbl.style('font-size', '13px');
  lbl.style('display', 'inline-block');
  lbl.style('margin-left', '10px');
  lbl.style('margin-top', '6px');

  modeSelect = createSelect();
  modeSelect.parent(document.querySelector('main'));
  modeSelect.option('Explore');
  modeSelect.option('Quiz');
  modeSelect.selected('Explore');
  modeSelect.style('display', 'inline-block');
  modeSelect.changed(() => {
    quizIdx = 0;
    quizFeedback = '';
    quizCorrect = 0;
    quizTotal = 0;
  });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '15px');
  resetBtn.mousePressed(() => {
    quizIdx = 0;
    quizFeedback = '';
    quizCorrect = 0;
    quizTotal = 0;
  });

  describe('Two-axis plot of retrieval strength vs storage strength with four quadrants and interactive items');
}

function draw() {
  background(255);

  let pw = canvasWidth - plotLeft - plotRight;
  let ph = drawHeight - plotTop - plotBottom;

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
  text('Retrieval Strength vs. Storage Strength', canvasWidth / 2, 8);

  // Plot background with quadrant colors
  for (let q of quadrants) {
    let qx = q.x < 0.5 ? plotLeft : plotLeft + pw / 2;
    let qy = q.y > 0.5 ? plotTop : plotTop + ph / 2;
    fill(q.color);
    noStroke();
    rect(qx, qy, pw / 2, ph / 2);
  }

  // Quadrant labels
  textSize(13);
  fill(80);
  textAlign(CENTER, CENTER);
  // Unlearned (low RS, low SS) = bottom-left
  text('Unlearned', plotLeft + pw * 0.25, plotTop + ph * 0.75);
  // Fleeting (high RS, low SS) = bottom-right
  text('Fleeting', plotLeft + pw * 0.75, plotTop + ph * 0.75);
  // Durable but Dormant (low RS, high SS) = top-left
  text('Durable but', plotLeft + pw * 0.25, plotTop + ph * 0.22);
  text('Dormant', plotLeft + pw * 0.25, plotTop + ph * 0.28);
  // Well-Learned (high RS, high SS) = top-right
  text('Well-Learned', plotLeft + pw * 0.75, plotTop + ph * 0.25);

  // Axes
  stroke(80);
  strokeWeight(1.5);
  line(plotLeft, plotTop, plotLeft, plotTop + ph);
  line(plotLeft, plotTop + ph, plotLeft + pw, plotTop + ph);

  // Midlines (dashed)
  stroke(180);
  strokeWeight(1);
  drawingContext.setLineDash([4, 4]);
  line(plotLeft + pw / 2, plotTop, plotLeft + pw / 2, plotTop + ph);
  line(plotLeft, plotTop + ph / 2, plotLeft + pw, plotTop + ph / 2);
  drawingContext.setLineDash([]);

  // Axis labels
  noStroke();
  fill(60);
  textSize(12);
  textAlign(CENTER, TOP);
  text('Low', plotLeft + pw * 0.25, plotTop + ph + 5);
  text('High', plotLeft + pw * 0.75, plotTop + ph + 5);
  textSize(13);
  text('Retrieval Strength', plotLeft + pw / 2, plotTop + ph + 22);

  push();
  translate(20, plotTop + ph / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  textSize(13);
  text('Storage Strength', 0, 0);
  pop();

  textAlign(RIGHT, CENTER);
  textSize(12);
  fill(60);
  text('High', plotLeft - 8, plotTop + ph * 0.25);
  text('Low', plotLeft - 8, plotTop + ph * 0.75);

  let mode = modeSelect.value();

  if (mode === 'Explore') {
    drawExploreMode(pw, ph);
  } else {
    drawQuizMode(pw, ph);
  }
}

function drawExploreMode(pw, ph) {
  // Draw item dots
  hoveredDot = -1;
  for (let i = 0; i < items.length; i++) {
    let it = items[i];
    let dx = plotLeft + it.rs * pw;
    let dy = plotTop + (1 - it.ss) * ph;
    let d = dist(mouseX, mouseY, dx, dy);
    if (d < 12) hoveredDot = i;

    fill(hoveredDot === i ? '#2c3e50' : '#2980b9');
    stroke(255);
    strokeWeight(2);
    ellipse(dx, dy, 18, 18);

    noStroke();
    fill(40);
    textSize(10);
    textAlign(CENTER, BOTTOM);
    text(it.name, dx, dy - 12);
  }

  // Tooltip
  if (hoveredDot >= 0) {
    let it = items[hoveredDot];
    let tx = mouseX + 15;
    let ty = mouseY - 10;
    let tw = 260;
    let th = 80;
    if (tx + tw > canvasWidth - 10) tx = mouseX - tw - 15;
    if (ty + th > drawHeight) ty = drawHeight - th - 5;
    if (ty < 5) ty = 5;

    fill(255, 255, 240, 240);
    stroke(180);
    strokeWeight(1);
    rect(tx, ty, tw, th, 5);

    noStroke();
    fill(30);
    textSize(11);
    textAlign(LEFT, TOP);
    text(it.name, tx + 8, ty + 6);
    fill(80);
    textSize(10);
    let lines = wrapText(it.rationale, tw - 16);
    for (let li = 0; li < lines.length; li++) {
      text(lines[li], tx + 8, ty + 22 + li * 13);
    }
    fill(40, 120, 40);
    text('Move: ' + it.move, tx + 8, ty + 22 + lines.length * 13 + 2);
  }

  noStroke();
  fill(100);
  textSize(11);
  textAlign(LEFT, TOP);
  text('Hover over dots to explore items', plotLeft, drawHeight - 18);
}

function drawQuizMode(pw, ph) {
  if (quizIdx >= quizzes.length) {
    noStroke();
    fill(30);
    textSize(14);
    textAlign(CENTER, CENTER);
    text('Quiz complete! Score: ' + quizCorrect + ' / ' + quizTotal, canvasWidth / 2, plotTop + 20);
    text('Click Reset to try again.', canvasWidth / 2, plotTop + 42);
    return;
  }

  let q = quizzes[quizIdx];

  // Show scenario
  noStroke();
  fill(30);
  textSize(12);
  textAlign(CENTER, TOP);
  let scenLines = wrapText('Scenario: ' + q.scenario, canvasWidth - 40);
  for (let i = 0; i < scenLines.length; i++) {
    text(scenLines[i], canvasWidth / 2, plotTop + ph + 8 + i * 15);
  }

  // Clickable quadrant labels
  textSize(11);
  fill(100);
  textAlign(CENTER, BOTTOM);
  text('Click the quadrant that matches this scenario', canvasWidth / 2, drawHeight - 4);

  // Feedback
  if (quizFeedback) {
    fill(quizFeedback.startsWith('Correct') ? color(40, 140, 40) : color(200, 40, 40));
    textSize(13);
    textAlign(CENTER, CENTER);
    text(quizFeedback, canvasWidth / 2, plotTop + ph * 0.5);
  }

  // Score
  noStroke();
  fill(80);
  textSize(11);
  textAlign(RIGHT, TOP);
  text('Score: ' + quizCorrect + '/' + quizTotal + ' | Q' + (quizIdx + 1) + '/' + quizzes.length, canvasWidth - 15, 32);
}

function mousePressed() {
  if (modeSelect.value() !== 'Quiz') return;
  if (quizIdx >= quizzes.length) return;

  let pw = canvasWidth - plotLeft - plotRight;
  let ph = drawHeight - plotTop - plotBottom;

  // Check if click is in plot area
  if (mouseX < plotLeft || mouseX > plotLeft + pw || mouseY < plotTop || mouseY > plotTop + ph) return;

  // Determine which quadrant was clicked
  let inRight = mouseX > plotLeft + pw / 2;
  let inTop = mouseY < plotTop + ph / 2;

  let clicked;
  if (!inRight && !inTop) clicked = 'durable but dormant';
  else if (!inRight && inTop) clicked = 'durable but dormant'; // top-left = high SS
  // Correction: SS on y axis, high SS = top
  if (inTop && !inRight) clicked = 'durable but dormant';   // low RS, high SS
  if (inTop && inRight) clicked = 'well-learned';            // high RS, high SS
  if (!inTop && !inRight) clicked = 'unlearned';             // low RS, low SS
  if (!inTop && inRight) clicked = 'fleeting';               // high RS, low SS

  let q = quizzes[quizIdx];
  quizTotal++;

  if (clicked === q.answer) {
    quizCorrect++;
    quizFeedback = 'Correct! ' + q.quadrant;
    setTimeout(() => {
      quizIdx++;
      quizFeedback = '';
    }, 1500);
  } else {
    quizFeedback = 'Not quite. The answer is: ' + q.quadrant + ' (' + q.answer + ')';
    setTimeout(() => {
      quizIdx++;
      quizFeedback = '';
    }, 2500);
  }
}

function wrapText(txt, maxW) {
  let words = txt.split(' ');
  let lines = [];
  let current = '';
  for (let w of words) {
    let test = current ? current + ' ' + w : w;
    if (textWidth(test) > maxW && current) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
