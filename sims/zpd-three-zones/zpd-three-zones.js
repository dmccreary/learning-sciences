// Zone of Proximal Development — Three Concentric Zones
// Adapted from automating-instructional-design zpd-visualization
// Three concentric circles with scaffolding slider that expands ZPD

let canvasWidth = 600;
let drawHeight = 480;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let centerX, centerY, maxRadius;
let innerRadius, middleRadius, outerRadius;
let scaffoldingSlider;
let scaffoldingLevel = 50;
let hoveredZone = -1;
let modeSelect;
let mode = 'explore';

// Quiz state
let quizIndex = 0;
let quizFeedback = '';
let quizFeedbackColor;
let quizCorrectCount = 0;
let quizTotal = 0;

const zones = [
  {
    name: 'Can Do Independently',
    color: '#27AE60',
    description: 'Skills the learner has already mastered and can perform without help.',
    classroom: 'A student who can solve single-variable equations without any prompts.',
    textbookImplication: 'Practice exercises at this level build fluency and confidence — no hints needed.'
  },
  {
    name: 'Zone of Proximal Development',
    color: '#F39C12',
    description: 'Tasks the learner can accomplish with appropriate scaffolding from a teacher, peer, or tool.',
    classroom: 'A student who can solve two-variable systems when the teacher provides the first substitution step.',
    textbookImplication: 'Worked examples with fading prompts; MicroSims with graduated hint levels.'
  },
  {
    name: 'Cannot Do Yet',
    color: '#E74C3C',
    description: 'Tasks beyond the learner\'s current reach, even with support.',
    classroom: 'Asking a student learning arithmetic to prove a theorem in abstract algebra.',
    textbookImplication: 'These topics appear in later chapters — previewing them now would overload working memory.'
  }
];

const quizQuestions = [
  {
    text: 'A beginning reader can sound out three-letter CVC words (cat, dog, sun) all by herself.',
    answer: 0,
    explanation: 'She can do this independently — it sits in her inner zone of mastered skills.'
  },
  {
    text: 'With his teacher pointing out the topic sentence in each paragraph, a student can identify the main idea of a passage.',
    answer: 1,
    explanation: 'He needs scaffolding (the teacher\'s guidance) — this task is in his ZPD.'
  },
  {
    text: 'A student who just learned addition is asked to solve a system of differential equations.',
    answer: 2,
    explanation: 'This is far beyond current capability — it sits in the "Cannot Do Yet" zone.'
  },
  {
    text: 'With a worked example showing the first two steps, a student can complete a multi-step word problem.',
    answer: 1,
    explanation: 'The worked example is the scaffold — the task is in the ZPD.'
  },
  {
    text: 'A student writes a five-paragraph essay independently, using the structure she internalized last month.',
    answer: 0,
    explanation: 'She has internalized this skill — it has moved from ZPD to the independent zone.'
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  let controlDiv = createDiv('');
  controlDiv.parent(document.querySelector('main'));
  controlDiv.style('display', 'flex');
  controlDiv.style('align-items', 'center');
  controlDiv.style('gap', '10px');
  controlDiv.style('margin', '8px');
  controlDiv.style('flex-wrap', 'wrap');
  controlDiv.style('font-family', 'Arial, sans-serif');

  let label = createSpan('Scaffolding:');
  label.parent(controlDiv);
  label.style('font-size', '14px');

  scaffoldingSlider = createSlider(0, 100, 50);
  scaffoldingSlider.parent(controlDiv);
  scaffoldingSlider.style('width', '180px');
  scaffoldingSlider.input(() => {
    scaffoldingLevel = scaffoldingSlider.value();
    updateRadii();
  });

  let valSpan = createSpan('50%');
  valSpan.parent(controlDiv);
  valSpan.id('scaff-val');
  valSpan.style('font-size', '14px');
  valSpan.style('min-width', '35px');

  modeSelect = createSelect();
  modeSelect.parent(controlDiv);
  modeSelect.option('Explore Mode', 'explore');
  modeSelect.option('Quiz Mode', 'quiz');
  modeSelect.changed(() => {
    mode = modeSelect.value();
    quizIndex = 0;
    quizFeedback = '';
    quizCorrectCount = 0;
    quizTotal = 0;
  });
  modeSelect.style('padding', '4px 10px');
  modeSelect.style('font-size', '14px');
  modeSelect.style('border-radius', '4px');
  modeSelect.style('border', '1px solid #ccc');

  calculateDimensions();
  describe('Interactive visualization of Vygotsky\'s Zone of Proximal Development with three concentric zones and a scaffolding slider.', LABEL);
}

function calculateDimensions() {
  centerX = canvasWidth * 0.42;
  centerY = drawHeight / 2 + 15;
  maxRadius = min(canvasWidth * 0.32, drawHeight * 0.38);
  updateRadii();
}

function updateRadii() {
  let expansion = map(scaffoldingLevel, 0, 100, 0.15, 0.35);
  innerRadius = maxRadius * 0.3;
  middleRadius = maxRadius * (0.3 + expansion);
  outerRadius = maxRadius;
  let el = document.getElementById('scaff-val');
  if (el) el.innerText = scaffoldingLevel + '%';
}

function draw() {
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
  textSize(18);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text('Zone of Proximal Development', canvasWidth / 2, 10);
  textStyle(NORMAL);

  detectHover();
  drawZones();
  drawArrowAnnotation();

  if (mode === 'explore') {
    drawInfoPanel();
  } else {
    drawQuiz();
  }

  // Vygotsky quote
  fill(80);
  noStroke();
  textSize(10);
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  text('"What a child can do with assistance today, she will be able to do by herself tomorrow."', canvasWidth / 2, drawHeight - 12);
  textStyle(NORMAL);
}

function detectHover() {
  let d = dist(mouseX, mouseY, centerX, centerY);
  hoveredZone = -1;
  if (d < innerRadius) hoveredZone = 0;
  else if (d < middleRadius) hoveredZone = 1;
  else if (d < outerRadius) hoveredZone = 2;
}

function drawZones() {
  // Outer zone — hatched
  let c2 = color(zones[2].color);
  fill(hoveredZone === 2 ? color(red(c2) + 20, green(c2) + 20, blue(c2) + 20) : c2);
  stroke(hoveredZone === 2 ? 50 : 100);
  strokeWeight(hoveredZone === 2 ? 3 : 1);
  ellipse(centerX, centerY, outerRadius * 2, outerRadius * 2);

  // Hatch
  stroke(red(c2) - 40, green(c2) - 40, blue(c2) - 40, 80);
  strokeWeight(1);
  for (let i = -outerRadius; i < outerRadius; i += 14) {
    let h = sqrt(outerRadius * outerRadius - i * i);
    line(centerX + i, centerY - h, centerX + i, centerY + h);
  }

  // Middle zone — gradient ring
  noStroke();
  let c1 = color(zones[1].color);
  let steps = 15;
  for (let s = 0; s < steps; s++) {
    let t = s / steps;
    let r = lerp(middleRadius, innerRadius, t);
    let alpha = lerp(180, 255, t);
    if (hoveredZone === 1) {
      fill(red(c1) + 20, green(c1) + 20, blue(c1) + 20, alpha);
    } else {
      fill(red(c1), green(c1), blue(c1), alpha);
    }
    ellipse(centerX, centerY, r * 2, r * 2);
  }
  noFill();
  stroke(hoveredZone === 1 ? 50 : 100);
  strokeWeight(hoveredZone === 1 ? 3 : 1);
  ellipse(centerX, centerY, middleRadius * 2, middleRadius * 2);

  // Inner zone
  let c0 = color(zones[0].color);
  fill(hoveredZone === 0 ? color(red(c0) + 20, green(c0) + 20, blue(c0) + 20) : c0);
  stroke(hoveredZone === 0 ? 50 : 100);
  strokeWeight(hoveredZone === 0 ? 3 : 1);
  ellipse(centerX, centerY, innerRadius * 2, innerRadius * 2);

  // Labels
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(11);
  textStyle(BOLD);
  text('Can Do', centerX, centerY - 8);
  text('Independently', centerX, centerY + 8);

  fill(50);
  let zpdR = (innerRadius + middleRadius) / 2;
  textSize(10);
  text('ZPD', centerX, centerY - zpdR);

  fill(255);
  let outR = (middleRadius + outerRadius) / 2;
  textSize(10);
  text('Cannot Do Yet', centerX, centerY - outR);
  textStyle(NORMAL);
}

function drawArrowAnnotation() {
  let ax = centerX + outerRadius + 15;
  let ay = centerY - 15;
  let ex = centerX + (innerRadius + middleRadius) / 2 + 5;

  stroke('#2980B9');
  strokeWeight(2);
  line(ax, ay, ex, centerY);

  fill('#2980B9');
  noStroke();
  push();
  translate(ex, centerY);
  rotate(atan2(centerY - ay, ex - ax) + PI);
  triangle(0, 0, 10, -4, 10, 4);
  pop();

  textAlign(LEFT, CENTER);
  textSize(11);
  fill('#2980B9');
  textStyle(ITALIC);
  text('Learning', ax + 4, ay - 14);
  text('happens here!', ax + 4, ay);
  textStyle(NORMAL);
}

function drawInfoPanel() {
  let panelLeft = canvasWidth * 0.68;
  let panelTop = 45;
  let panelW = canvasWidth * 0.30;
  let panelH = drawHeight - 100;

  if (hoveredZone >= 0) {
    let z = zones[hoveredZone];
    let zc = color(z.color);

    fill(255);
    stroke(zc);
    strokeWeight(2);
    rect(panelLeft, panelTop, panelW, panelH, 8);

    let tx = panelLeft + 10;
    let ty = panelTop + 12;

    fill(zc);
    noStroke();
    textSize(13);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    text(z.name, tx, ty, panelW - 20);
    textStyle(NORMAL);
    ty += 35;

    fill('#444');
    textSize(10);
    text(z.description, tx, ty, panelW - 20);
    ty += 55;

    fill(zc);
    textSize(11);
    textStyle(BOLD);
    text('Classroom Example:', tx, ty);
    textStyle(NORMAL);
    ty += 16;
    fill('#555');
    textSize(10);
    text(z.classroom, tx, ty, panelW - 20);
    ty += 55;

    fill(zc);
    textSize(11);
    textStyle(BOLD);
    text('Textbook Implication:', tx, ty);
    textStyle(NORMAL);
    ty += 16;
    fill('#555');
    textSize(10);
    text(z.textbookImplication, tx, ty, panelW - 20);
  } else {
    fill(255);
    stroke(180);
    strokeWeight(1);
    rect(panelLeft, panelTop, panelW, panelH, 8);

    fill(120);
    noStroke();
    textSize(13);
    textAlign(CENTER, CENTER);
    text('Hover over a zone\nto see details', panelLeft + panelW / 2, panelTop + panelH / 2 - 15);
    textSize(11);
    fill(160);
    text('Adjust the slider\nto change scaffolding', panelLeft + panelW / 2, panelTop + panelH / 2 + 25);
  }
}

function drawQuiz() {
  if (quizIndex < quizQuestions.length) {
    let q = quizQuestions[quizIndex];
    let panelLeft = canvasWidth * 0.68;
    let panelTop = 45;
    let panelW = canvasWidth * 0.30;

    fill(255);
    stroke('#3B82F6');
    strokeWeight(2);
    rect(panelLeft, panelTop, panelW, 80, 8);

    fill('#333');
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text(q.text, panelLeft + panelW / 2, panelTop + 40, panelW - 16);

    fill('#888');
    textSize(10);
    text('Click the correct zone', panelLeft + panelW / 2, panelTop + 95);

    if (quizFeedback) {
      fill(255);
      stroke(quizFeedbackColor);
      strokeWeight(2);
      rect(panelLeft, panelTop + 110, panelW, 60, 8);
      fill(quizFeedbackColor);
      noStroke();
      textSize(9);
      text(quizFeedback, panelLeft + panelW / 2, panelTop + 140, panelW - 16);
    }

    // Score
    fill('#666');
    textSize(11);
    noStroke();
    text('Q ' + (quizIndex + 1) + ' / ' + quizQuestions.length, panelLeft + panelW / 2, panelTop + panelW + 60);
  } else {
    let panelLeft = canvasWidth * 0.68;
    let panelTop = 80;
    let panelW = canvasWidth * 0.30;
    fill('#333');
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Quiz Complete!', panelLeft + panelW / 2, panelTop);
    textStyle(NORMAL);
    textSize(13);
    text(quizCorrectCount + ' / ' + quizTotal + ' correct', panelLeft + panelW / 2, panelTop + 25);
  }
}

function mousePressed() {
  if (mode !== 'quiz' || quizIndex >= quizQuestions.length) return;
  if (hoveredZone < 0) return;

  let q = quizQuestions[quizIndex];
  quizTotal++;
  if (hoveredZone === q.answer) {
    quizCorrectCount++;
    quizFeedback = 'Correct! ' + q.explanation;
    quizFeedbackColor = '#16A34A';
  } else {
    quizFeedback = 'Not quite. ' + q.explanation;
    quizFeedbackColor = '#DC2626';
  }
  setTimeout(() => {
    quizIndex++;
    quizFeedback = '';
  }, 2500);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  calculateDimensions();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    canvasHeight = drawHeight + controlHeight;
  }
}
