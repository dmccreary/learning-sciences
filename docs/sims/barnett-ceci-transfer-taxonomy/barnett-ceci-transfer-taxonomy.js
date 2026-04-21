// Barnett and Ceci Transfer Taxonomy
// Interactive hexagonal radar diagram with explore and quiz modes

let canvasWidth = 600;
let drawHeight = 520;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect, resetBtn;
let hoveredAxis = -1;
let quizIdx = 0;
let quizFeedback = '';
let quizAnswers = {};
let quizCorrect = 0;
let quizTotal = 0;
let quizSubmitted = false;

let dimensions = [
  { name: 'Knowledge Domain',
    def: 'How different is the knowledge area of the training from the transfer task?',
    nearEx: 'Trained on addition, tested on addition with larger numbers',
    farEx: 'Trained on math, tested on musical rhythm patterns',
    note: 'Designers often assume same-subject = near, but sub-domain shifts matter.' },
  { name: 'Physical Context',
    def: 'How different is the physical setting of learning from the transfer setting?',
    nearEx: 'Learned in classroom A, tested in classroom B',
    farEx: 'Learned in a classroom, applied on a construction site',
    note: 'Context-dependent memory means even room changes can reduce transfer.' },
  { name: 'Temporal Context',
    def: 'How much time has passed between training and transfer?',
    nearEx: 'Tested the same day as training',
    farEx: 'Applied the skill six months later on the job',
    note: 'Most training evaluations test immediately; real transfer is delayed.' },
  { name: 'Functional Context',
    def: 'How different is the purpose or function of the transfer task?',
    nearEx: 'Practiced for a test, tested on a similar test',
    farEx: 'Practiced for a test, asked to teach it to a peer',
    note: 'Shifting from recall to application or creation is a large functional leap.' },
  { name: 'Social Context',
    def: 'How different is the social situation (alone, group, evaluated)?',
    nearEx: 'Practiced alone, tested alone',
    farEx: 'Practiced alone, asked to perform in front of an audience',
    note: 'Social pressure can suppress transfer even when knowledge is solid.' },
  { name: 'Modality',
    def: 'How different is the format or modality (written, oral, visual, physical)?',
    nearEx: 'Trained on written problems, tested on written problems',
    farEx: 'Trained on paper diagrams, tested with physical 3D models',
    note: 'Modality shifts are invisible in many curricula but costly for transfer.' }
];

let quizScenarios = [
  { scenario: 'Trained on paper algebra in a classroom, tested orally on a word problem a month later in a workplace.',
    correct: { 'Knowledge Domain': 'near', 'Physical Context': 'far', 'Temporal Context': 'far',
               'Functional Context': 'far', 'Social Context': 'near', 'Modality': 'far' }
  },
  { scenario: 'Practiced CPR on a mannequin in a training room last week, now performing CPR on a real person at a pool.',
    correct: { 'Knowledge Domain': 'near', 'Physical Context': 'far', 'Temporal Context': 'near',
               'Functional Context': 'far', 'Social Context': 'far', 'Modality': 'near' }
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
  modeSelect.changed(() => { resetQuiz(); });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '15px');
  resetBtn.mousePressed(resetQuiz);

  describe('Barnett and Ceci transfer taxonomy radar diagram with six dimensions from near to far');
}

function resetQuiz() {
  quizIdx = 0;
  quizFeedback = '';
  quizAnswers = {};
  quizCorrect = 0;
  quizTotal = 0;
  quizSubmitted = false;
}

function draw() {
  background(255);

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Title
  noStroke();
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Barnett & Ceci Transfer Taxonomy', canvasWidth / 2, 8);

  let cx = canvasWidth / 2;
  let cy = 240;
  let maxR = Math.min(canvasWidth / 2 - 80, 180);

  // Draw radar
  drawRadar(cx, cy, maxR);

  let mode = modeSelect.value();
  if (mode === 'Explore') {
    drawExploreMode(cx, cy, maxR);
  } else {
    drawQuizMode(cx, cy, maxR);
  }
}

function drawRadar(cx, cy, maxR) {
  // Concentric rings
  for (let r = 1; r <= 3; r++) {
    let radius = (r / 3) * maxR;
    stroke(200);
    strokeWeight(0.5);
    noFill();
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = -HALF_PI + (TWO_PI / 6) * i;
      vertex(cx + cos(angle) * radius, cy + sin(angle) * radius);
    }
    endShape(CLOSE);
  }

  // Ring labels
  noStroke();
  fill(160);
  textSize(9);
  textAlign(CENTER, CENTER);
  text('Near', cx + 8, cy - maxR / 3 - 8);
  text('Mid', cx + 8, cy - maxR * 2 / 3 - 8);
  text('Far', cx + 8, cy - maxR - 8);

  // Axes and labels
  hoveredAxis = -1;
  for (let i = 0; i < 6; i++) {
    let angle = -HALF_PI + (TWO_PI / 6) * i;
    let ex = cx + cos(angle) * maxR;
    let ey = cy + sin(angle) * maxR;

    stroke(120);
    strokeWeight(1);
    line(cx, cy, ex, ey);

    // Label position
    let lx = cx + cos(angle) * (maxR + 30);
    let ly = cy + sin(angle) * (maxR + 30);

    noStroke();
    fill(40);
    textSize(11);
    textAlign(CENTER, CENTER);

    // Adjust alignment based on position
    if (Math.abs(cos(angle)) < 0.3) {
      textAlign(CENTER, sin(angle) < 0 ? BOTTOM : TOP);
    } else {
      textAlign(cos(angle) < 0 ? RIGHT : LEFT, CENTER);
    }

    text(dimensions[i].name, lx, ly);

    // Check hover on axis endpoint
    if (dist(mouseX, mouseY, ex, ey) < 25 || dist(mouseX, mouseY, lx, ly) < 30) {
      hoveredAxis = i;
    }
  }

  // Center dot
  fill(80);
  noStroke();
  ellipse(cx, cy, 6, 6);
}

function drawExploreMode(cx, cy, maxR) {
  // Highlight hovered axis
  if (hoveredAxis >= 0) {
    let i = hoveredAxis;
    let angle = -HALF_PI + (TWO_PI / 6) * i;
    let ex = cx + cos(angle) * maxR;
    let ey = cy + sin(angle) * maxR;

    stroke(41, 128, 185);
    strokeWeight(3);
    line(cx, cy, ex, ey);

    // Tooltip
    let dim = dimensions[i];
    let tw = 280;
    let th = 120;
    let tx = canvasWidth / 2 - tw / 2;
    let ty = drawHeight - th - 15;

    fill(255, 255, 240, 245);
    stroke(180);
    strokeWeight(1);
    rect(tx, ty, tw, th, 5);

    noStroke();
    fill(30);
    textSize(12);
    textAlign(LEFT, TOP);
    text(dim.name, tx + 8, ty + 6);

    fill(60);
    textSize(10);
    text(dim.def, tx + 8, ty + 24, tw - 16, 30);
    fill(46, 139, 87);
    text('Near: ' + dim.nearEx, tx + 8, ty + 52, tw - 16, 25);
    fill(192, 57, 43);
    text('Far: ' + dim.farEx, tx + 8, ty + 76, tw - 16, 25);
    fill(120);
    textSize(9);
    text(dim.note, tx + 8, ty + 100, tw - 16, 20);
  } else {
    noStroke();
    fill(100);
    textSize(11);
    textAlign(CENTER, BOTTOM);
    text('Hover over an axis to explore each dimension', canvasWidth / 2, drawHeight - 10);
  }
}

function drawQuizMode(cx, cy, maxR) {
  if (quizIdx >= quizScenarios.length) {
    noStroke();
    fill(30);
    textSize(14);
    textAlign(CENTER, CENTER);
    text('Quiz complete! Score: ' + quizCorrect + '/' + quizTotal, canvasWidth / 2, drawHeight - 50);
    return;
  }

  let q = quizScenarios[quizIdx];

  // Show scenario
  noStroke();
  fill(30);
  textSize(11);
  textAlign(CENTER, TOP);
  text(q.scenario, 30, 30, canvasWidth - 60, 40);

  // Draw clickable near/far on each axis
  for (let i = 0; i < 6; i++) {
    let angle = -HALF_PI + (TWO_PI / 6) * i;
    let dim = dimensions[i];
    let answer = quizAnswers[dim.name];

    // Near marker (1/3 radius)
    let nr = maxR / 3;
    let nx = cx + cos(angle) * nr;
    let ny = cy + sin(angle) * nr;

    // Far marker (full radius)
    let fx = cx + cos(angle) * maxR;
    let fy = cy + sin(angle) * maxR;

    // Color based on answer state
    if (quizSubmitted) {
      let correct = q.correct[dim.name];
      // Show correct answer
      if (correct === 'near') {
        fill(46, 204, 113);
        noStroke();
        ellipse(nx, ny, 14, 14);
      } else {
        fill(46, 204, 113);
        noStroke();
        ellipse(fx, fy, 14, 14);
      }
      // Show user's wrong answer in red
      if (answer && answer !== correct) {
        fill(231, 76, 60, 150);
        ellipse(answer === 'near' ? nx : fx, answer === 'near' ? ny : fy, 14, 14);
      }
    } else {
      // Near dot
      fill(answer === 'near' ? '#2ecc71' : '#ddd');
      stroke(150);
      strokeWeight(1);
      ellipse(nx, ny, 12, 12);

      // Far dot
      fill(answer === 'far' ? '#e74c3c' : '#ddd');
      ellipse(fx, fy, 12, 12);
    }
  }

  // Instructions
  noStroke();
  fill(80);
  textSize(10);
  textAlign(CENTER, BOTTOM);
  if (!quizSubmitted) {
    text('Click near the center for "near" or at the edge for "far" on each axis. Then click Submit.', canvasWidth / 2, drawHeight - 8);
  } else {
    let numCorrect = 0;
    for (let dim of dimensions) {
      if (quizAnswers[dim.name] === q.correct[dim.name]) numCorrect++;
    }
    text('Score: ' + numCorrect + '/6 correct. Green = correct answer.', canvasWidth / 2, drawHeight - 8);
  }
}

function mousePressed() {
  if (modeSelect.value() !== 'Quiz') return;
  if (quizIdx >= quizScenarios.length) return;
  if (quizSubmitted) {
    // Advance to next
    quizIdx++;
    quizAnswers = {};
    quizSubmitted = false;
    return;
  }

  let cx = canvasWidth / 2;
  let cy = 240;
  let maxR = Math.min(canvasWidth / 2 - 80, 180);

  for (let i = 0; i < 6; i++) {
    let angle = -HALF_PI + (TWO_PI / 6) * i;
    let dim = dimensions[i];

    let nr = maxR / 3;
    let nx = cx + cos(angle) * nr;
    let ny = cy + sin(angle) * nr;
    let fx = cx + cos(angle) * maxR;
    let fy = cy + sin(angle) * maxR;

    if (dist(mouseX, mouseY, nx, ny) < 15) {
      quizAnswers[dim.name] = 'near';
      return;
    }
    if (dist(mouseX, mouseY, fx, fy) < 15) {
      quizAnswers[dim.name] = 'far';
      return;
    }
  }
}

function keyPressed() {
  // Submit with Enter
  if (keyCode === ENTER && modeSelect.value() === 'Quiz' && !quizSubmitted) {
    if (Object.keys(quizAnswers).length === 6) {
      quizSubmitted = true;
      let q = quizScenarios[quizIdx];
      let numCorrect = 0;
      for (let dim of dimensions) {
        if (quizAnswers[dim.name] === q.correct[dim.name]) numCorrect++;
      }
      quizCorrect += numCorrect;
      quizTotal += 6;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
