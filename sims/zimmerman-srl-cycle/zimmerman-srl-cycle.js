// Zimmerman's Self-Regulated Learning Cycle
// Interactive circular diagram with Explore and Quiz modes

let canvasWidth = 600;
let drawHeight = 500;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let centerX, centerY, cycleRadius;
let hoveredPhase = -1;
let mode = 'explore'; // 'explore' or 'quiz'
let modeSelect;

// Quiz state
let quizIndex = 0;
let quizFeedback = '';
let quizFeedbackColor;
let quizCorrectCount = 0;
let quizTotal = 0;

const phases = [
  {
    name: 'Forethought',
    color: '#3B82F6',
    angle: -90, // top
    definition: 'Planning and goal-setting before a learning task begins.',
    subProcesses: ['Goal-setting', 'Strategic planning', 'Self-efficacy activation'],
    prompt: 'Ask yourself: "What is my goal, and what strategy will I use to reach it?"'
  },
  {
    name: 'Performance',
    color: '#F59E0B',
    angle: 30, // lower right
    definition: 'Executing the task while monitoring progress and staying focused.',
    subProcesses: ['Self-monitoring', 'Attention focusing', 'Task strategies'],
    prompt: 'Ask yourself: "Am I on track? Do I need to adjust my approach?"'
  },
  {
    name: 'Self-Reflection',
    color: '#EF4444',
    angle: 150, // lower left
    definition: 'Evaluating outcomes and attributing success or failure to controllable causes.',
    subProcesses: ['Self-evaluation', 'Causal attribution', 'Adaptive inference'],
    prompt: 'Ask yourself: "What worked, what didn\'t, and what will I change next time?"'
  }
];

const quizQuestions = [
  {
    text: 'Before starting the problem set, she wrote down what strategy she would try first and predicted how long it would take.',
    answer: 0,
    explanation: 'This is Forethought — strategic planning and goal-setting happen before the task begins.'
  },
  {
    text: 'While reading the chapter, he noticed he was daydreaming and re-read the last paragraph more carefully.',
    answer: 1,
    explanation: 'This is Performance — self-monitoring and attention focusing happen during the task.'
  },
  {
    text: 'After the exam, she compared her score to her goal and decided that her flashcard strategy needed more spaced repetition.',
    answer: 2,
    explanation: 'This is Self-Reflection — self-evaluation and adaptive inference happen after the task.'
  },
  {
    text: 'He set a specific target of completing 20 practice problems and chose to work in a quiet room to minimize distractions.',
    answer: 0,
    explanation: 'This is Forethought — goal-setting and environmental planning occur before the task.'
  },
  {
    text: 'During the group project, she kept a checklist of steps and crossed each one off as it was completed.',
    answer: 1,
    explanation: 'This is Performance — task strategies and self-monitoring occur during execution.'
  },
  {
    text: 'He realized his poor test grade was due to cramming the night before rather than lack of ability, and resolved to space his study sessions next time.',
    answer: 2,
    explanation: 'This is Self-Reflection — causal attribution (effort vs. ability) and adaptive inference.'
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  modeSelect = createSelect();
  modeSelect.parent(document.querySelector('main'));
  modeSelect.option('Explore Mode', 'explore');
  modeSelect.option('Quiz Mode', 'quiz');
  modeSelect.changed(() => {
    mode = modeSelect.value();
    quizIndex = 0;
    quizFeedback = '';
    quizCorrectCount = 0;
    quizTotal = 0;
  });
  modeSelect.style('margin', '8px');
  modeSelect.style('padding', '6px 12px');
  modeSelect.style('font-size', '14px');
  modeSelect.style('border-radius', '4px');
  modeSelect.style('border', '1px solid #ccc');

  calculateDimensions();
  describe('Interactive Zimmerman Self-Regulated Learning Cycle with three phases: Forethought, Performance, and Self-Reflection. Hover to explore or switch to Quiz mode to test your knowledge.', LABEL);
}

function calculateDimensions() {
  centerX = canvasWidth / 2;
  centerY = drawHeight / 2 + 10;
  cycleRadius = min(canvasWidth, drawHeight) * 0.28;
}

function draw() {
  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('#1a3a6c');
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Zimmerman's Self-Regulated Learning Cycle", canvasWidth / 2, 12);
  textStyle(NORMAL);

  if (mode === 'explore') {
    drawExploreMode();
  } else {
    drawQuizMode();
  }
}

function drawExploreMode() {
  detectHover();
  drawCycle();
  drawArrows();

  // Info panel
  if (hoveredPhase >= 0) {
    drawInfoPanel(phases[hoveredPhase]);
  } else {
    fill('#666');
    noStroke();
    textSize(13);
    textAlign(CENTER, CENTER);
    text('Hover over a phase to explore its sub-processes', canvasWidth / 2, drawHeight - 25);
  }
}

function drawQuizMode() {
  drawCycle();
  drawArrows();

  if (quizIndex < quizQuestions.length) {
    let q = quizQuestions[quizIndex];
    // Question box
    fill(255);
    stroke('#3B82F6');
    strokeWeight(2);
    let boxW = canvasWidth - 40;
    let boxH = 60;
    let boxY = 40;
    rect(20, boxY, boxW, boxH, 8);

    fill('#333');
    noStroke();
    textSize(12);
    textAlign(CENTER, CENTER);
    text(q.text, canvasWidth / 2, boxY + boxH / 2, boxW - 20);

    // Instruction
    fill('#888');
    textSize(11);
    text('Click the phase this behavior illustrates', canvasWidth / 2, boxY + boxH + 16);
  } else {
    // Quiz complete
    fill('#333');
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Quiz Complete!', canvasWidth / 2, 55);
    textStyle(NORMAL);
    textSize(14);
    text(quizCorrectCount + ' / ' + quizTotal + ' correct', canvasWidth / 2, 78);
  }

  // Feedback
  if (quizFeedback) {
    fill(255);
    stroke(quizFeedbackColor);
    strokeWeight(2);
    let fbY = drawHeight - 65;
    rect(20, fbY, canvasWidth - 40, 50, 8);
    fill(quizFeedbackColor);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text(quizFeedback, canvasWidth / 2, fbY + 25, canvasWidth - 60);
  }
}

function drawCycle() {
  for (let i = 0; i < 3; i++) {
    let p = phases[i];
    let a = radians(p.angle);
    let px = centerX + cos(a) * cycleRadius;
    let py = centerY + sin(a) * cycleRadius;
    let r = cycleRadius * 0.55;

    // Highlight on hover (explore) or default
    let isHovered = (mode === 'explore' && hoveredPhase === i);
    let c = color(p.color);

    if (isHovered) {
      fill(red(c), green(c), blue(c), 220);
      stroke(50);
      strokeWeight(3);
    } else {
      fill(red(c), green(c), blue(c), 180);
      stroke(100);
      strokeWeight(1);
    }
    ellipse(px, py, r * 2, r * 2);

    // Phase label
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(15);
    textStyle(BOLD);
    text(p.name, px, py);
    textStyle(NORMAL);
  }
}

function drawArrows() {
  stroke('#555');
  strokeWeight(2);
  fill('#555');

  for (let i = 0; i < 3; i++) {
    let from = phases[i];
    let to = phases[(i + 1) % 3];
    let a1 = radians(from.angle);
    let a2 = radians(to.angle);
    let r = cycleRadius;
    let nodeR = cycleRadius * 0.55;

    let fx = centerX + cos(a1) * r;
    let fy = centerY + sin(a1) * r;
    let tx = centerX + cos(a2) * r;
    let ty = centerY + sin(a2) * r;

    // Shorten arrow to not overlap circles
    let dx = tx - fx;
    let dy = ty - fy;
    let d = sqrt(dx * dx + dy * dy);
    let ux = dx / d;
    let uy = dy / d;

    let startX = fx + ux * nodeR;
    let startY = fy + uy * nodeR;
    let endX = tx - ux * nodeR;
    let endY = ty - uy * nodeR;

    // Curved arrow using bezier
    let midX = (startX + endX) / 2;
    let midY = (startY + endY) / 2;
    // Push midpoint outward from center for curve
    let cmx = midX - centerX;
    let cmy = midY - centerY;
    let cmd = sqrt(cmx * cmx + cmy * cmy);
    let curveOff = 25;
    let cx1 = midX + (cmx / cmd) * curveOff;
    let cy1 = midY + (cmy / cmd) * curveOff;

    noFill();
    stroke('#555');
    strokeWeight(2);
    bezier(startX, startY, cx1, cy1, cx1, cy1, endX, endY);

    // Arrowhead
    let arrowAngle = atan2(endY - cy1, endX - cx1);
    fill('#555');
    noStroke();
    push();
    translate(endX, endY);
    rotate(arrowAngle);
    triangle(0, 0, -12, -5, -12, 5);
    pop();
  }
}

function drawInfoPanel(phase) {
  let panelW = canvasWidth - 40;
  let panelH = 130;
  let panelY = drawHeight - panelH - 15;

  fill(255, 250);
  stroke(color(phase.color));
  strokeWeight(2);
  rect(20, panelY, panelW, panelH, 8);

  let tx = 35;
  let ty = panelY + 15;

  fill(color(phase.color));
  noStroke();
  textSize(15);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text(phase.name, tx, ty);
  textStyle(NORMAL);
  ty += 22;

  fill('#444');
  textSize(12);
  text(phase.definition, tx, ty, panelW - 30);
  ty += 32;

  fill('#666');
  textSize(11);
  textStyle(BOLD);
  text('Sub-processes: ', tx, ty);
  textStyle(NORMAL);
  let spx = tx + textWidth('Sub-processes: ');
  text(phase.subProcesses.join(', '), spx, ty, panelW - spx + 10);
  ty += 28;

  fill(color(phase.color));
  textSize(11);
  textStyle(ITALIC);
  text(phase.prompt, tx, ty, panelW - 30);
  textStyle(NORMAL);
}

function detectHover() {
  hoveredPhase = -1;
  for (let i = 0; i < 3; i++) {
    let p = phases[i];
    let a = radians(p.angle);
    let px = centerX + cos(a) * cycleRadius;
    let py = centerY + sin(a) * cycleRadius;
    let r = cycleRadius * 0.55;
    if (dist(mouseX, mouseY, px, py) < r) {
      hoveredPhase = i;
      break;
    }
  }
}

function mousePressed() {
  if (mode !== 'quiz' || quizIndex >= quizQuestions.length) return;

  // Check which phase was clicked
  for (let i = 0; i < 3; i++) {
    let p = phases[i];
    let a = radians(p.angle);
    let px = centerX + cos(a) * cycleRadius;
    let py = centerY + sin(a) * cycleRadius;
    let r = cycleRadius * 0.55;
    if (dist(mouseX, mouseY, px, py) < r) {
      let q = quizQuestions[quizIndex];
      quizTotal++;
      if (i === q.answer) {
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
      break;
    }
  }
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
