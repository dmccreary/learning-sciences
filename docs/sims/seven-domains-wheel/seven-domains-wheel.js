// Seven Domains Wheel - Interactive MicroSim
// Explore: hover segments for tooltips. Diagnose: identify domains in excerpts.

let canvasWidth = 600;
let drawHeight = 520;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect, resetBtn, nextBtn;
let hoveredSegment = -1;
let selectedSegments = [];
let diagnoseQuestion = null;
let diagnoseFeedback = '';
let feedbackTimer = 0;
let score = { correct: 0, total: 0 };

const domains = [
  {
    name: 'Motivation',
    color: '#E8543A',
    definition: 'Why learners engage and persist with the material.',
    decisions: ['Add a real-world hook at chapter opening', 'Include self-assessment checkpoints', 'Connect content to learner goals'],
    chapter: 'Chapter 3'
  },
  {
    name: 'Understanding',
    color: '#F5A623',
    definition: 'How learners build accurate mental models of new concepts.',
    decisions: ['Use worked examples before practice', 'Provide multiple representations', 'Scaffold from concrete to abstract'],
    chapter: 'Chapter 5'
  },
  {
    name: 'Retention',
    color: '#7ED321',
    definition: 'How knowledge is stored in and retrieved from long-term memory.',
    decisions: ['Space retrieval practice across chapters', 'Interleave related topics', 'Use testing effect in review sections'],
    chapter: 'Chapter 6'
  },
  {
    name: 'Application',
    color: '#4A90D9',
    definition: 'How learners transfer knowledge to new problems and contexts.',
    decisions: ['Include varied practice contexts', 'Build MicroSims for exploration', 'Require near and far transfer tasks'],
    chapter: 'Chapter 7'
  },
  {
    name: 'Expertise',
    color: '#7B68EE',
    definition: 'How novices progress toward fluent, flexible expert performance.',
    decisions: ['Fade scaffolding progressively', 'Offer deliberate practice tasks', 'Model expert reasoning aloud'],
    chapter: 'Chapter 8'
  },
  {
    name: 'Measurement',
    color: '#BD10E0',
    definition: 'How we assess what learners know and can do.',
    decisions: ['Align quiz items to Bloom levels', 'Use formative checks before summative', 'Provide diagnostic feedback on errors'],
    chapter: 'Chapter 9'
  },
  {
    name: 'Learning\nConditions',
    color: '#9B9B9B',
    definition: 'The environmental and contextual factors that shape learning.',
    decisions: ['Ensure accessibility across devices', 'Reduce extraneous cognitive load', 'Design for both individual and collaborative use'],
    chapter: 'Chapter 10',
    dashed: true
  }
];

const diagnoseBank = [
  {
    text: 'The chapter opens with a surprising statistic about student dropout rates to grab reader interest.',
    answers: [0], // Motivation
    explanation: 'A surprising hook targets Motivation by capturing learner attention and creating curiosity.'
  },
  {
    text: 'A worked example walks through solving a problem step by step before asking the reader to try one.',
    answers: [1], // Understanding
    explanation: 'Worked examples build Understanding by demonstrating the reasoning process before practice.'
  },
  {
    text: 'The chapter includes spaced review questions that revisit concepts from three chapters ago.',
    answers: [2], // Retention
    explanation: 'Spaced retrieval practice directly targets Retention through the testing and spacing effects.'
  },
  {
    text: 'Students are asked to apply a formula to a completely new real-world dataset they haven\'t seen before.',
    answers: [3], // Application
    explanation: 'Applying knowledge to a novel context is the core of the Application domain — transfer.'
  },
  {
    text: 'The quiz uses multiple-choice items aligned to specific Bloom levels with diagnostic feedback.',
    answers: [5], // Measurement
    explanation: 'Bloom-aligned assessment with diagnostic feedback is a Measurement design decision.'
  },
  {
    text: 'A MicroSim lets learners manipulate variables and observe the effect, building intuition before formalization.',
    answers: [1, 3], // Understanding + Application
    explanation: 'Interactive exploration builds Understanding through multiple representations and Application through hands-on transfer.'
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
  modeSelect.option('Diagnose');
  modeSelect.selected('Explore');
  modeSelect.style('font-size', '14px');
  modeSelect.style('padding', '4px 8px');
  modeSelect.style('margin', '4px');
  modeSelect.changed(onModeChange);

  nextBtn = createButton('Next Question');
  nextBtn.parent(document.querySelector('main'));
  nextBtn.style('font-size', '14px');
  nextBtn.style('padding', '4px 12px');
  nextBtn.style('margin', '4px');
  nextBtn.mousePressed(pickNewQuestion);
  nextBtn.hide();

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('font-size', '14px');
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('margin', '4px');
  resetBtn.mousePressed(onReset);

  describe('Interactive seven-segment pie wheel showing the seven domains of learning sciences. Hover segments to explore or switch to diagnose mode.');
}

function onModeChange() {
  diagnoseFeedback = '';
  feedbackTimer = 0;
  selectedSegments = [];
  if (modeSelect.value() === 'Diagnose') {
    nextBtn.show();
    pickNewQuestion();
  } else {
    nextBtn.hide();
    diagnoseQuestion = null;
  }
}

function onReset() {
  score = { correct: 0, total: 0 };
  diagnoseFeedback = '';
  feedbackTimer = 0;
  selectedSegments = [];
  if (modeSelect.value() === 'Diagnose') {
    pickNewQuestion();
  }
}

function pickNewQuestion() {
  diagnoseQuestion = diagnoseBank[floor(random(diagnoseBank.length))];
  diagnoseFeedback = '';
  feedbackTimer = 0;
  selectedSegments = [];
}

function getWheelCenter() {
  return { x: canvasWidth / 2, y: drawHeight / 2 + 20 };
}

function getWheelRadius() {
  return min(canvasWidth, drawHeight) * 0.32;
}

function draw() {
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Title
  noStroke();
  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(18);
  text('The Seven Domains of Learning Sciences', canvasWidth / 2, 10);

  let mode = modeSelect.value();
  let center = getWheelCenter();
  let radius = getWheelRadius();
  let anglePerSegment = TWO_PI / 7;
  let startOffset = -HALF_PI; // Start at 12 o'clock

  // Detect hover
  hoveredSegment = -1;
  let dx = mouseX - center.x;
  let dy = mouseY - center.y;
  let dist2 = dx * dx + dy * dy;
  if (dist2 < radius * radius && dist2 > 0) {
    let angle = atan2(dy, dx) - startOffset;
    if (angle < 0) angle += TWO_PI;
    hoveredSegment = floor(angle / anglePerSegment);
    if (hoveredSegment >= 7) hoveredSegment = 6;
  }

  // Draw segments
  for (let i = 0; i < 7; i++) {
    let a1 = startOffset + i * anglePerSegment;
    let a2 = a1 + anglePerSegment;
    let d = domains[i];
    let isHovered = (hoveredSegment === i);
    let isSelected = selectedSegments.includes(i);
    let isCorrectAnswer = (feedbackTimer > 0 && diagnoseQuestion && diagnoseQuestion.answers.includes(i));

    if (isCorrectAnswer && isSelected) {
      fill('#4CAF50');
    } else if (isCorrectAnswer && !isSelected) {
      fill('#FFC107');
    } else if (isSelected && feedbackTimer > 0) {
      fill('#EF5350');
    } else if (isSelected) {
      let c = color(d.color);
      fill(red(c), green(c), blue(c), 240);
    } else if (isHovered) {
      let c = color(d.color);
      fill(red(c), green(c), blue(c), 200);
    } else {
      fill(d.color);
    }

    if (d.dashed) {
      drawingContext.setLineDash([5, 5]);
      stroke('#666');
    } else {
      drawingContext.setLineDash([]);
      stroke('#fff');
    }
    strokeWeight(2);
    arc(center.x, center.y, radius * 2, radius * 2, a1, a2, PIE);
    drawingContext.setLineDash([]);

    // Label
    let midAngle = (a1 + a2) / 2;
    let labelR = radius * 0.6;
    let lx = center.x + cos(midAngle) * labelR;
    let ly = center.y + sin(midAngle) * labelR;

    noStroke();
    fill('#fff');
    textAlign(CENTER, CENTER);
    textSize(11);
    textStyle(BOLD);
    text(d.name, lx, ly);
    textStyle(NORMAL);
  }

  // Center circle
  fill('#fff');
  stroke('#ccc');
  strokeWeight(1);
  ellipse(center.x, center.y, radius * 0.35, radius * 0.35);
  noStroke();
  fill('#1a3a6c');
  textSize(10);
  textAlign(CENTER, CENTER);
  text('Seven\nDomains', center.x, center.y);

  // Diagnose mode question
  if (mode === 'Diagnose' && diagnoseQuestion) {
    fill('#333');
    textSize(12);
    textAlign(CENTER, TOP);
    text('Click the domain(s): "' + diagnoseQuestion.text + '"', canvasWidth / 2, 34, canvasWidth - 40);
  }

  if (mode === 'Explore') {
    fill('#666');
    textSize(12);
    textAlign(CENTER, TOP);
    text('Hover over a segment to learn more', canvasWidth / 2, 34);
  }

  // Tooltip for Explore
  if (mode === 'Explore' && hoveredSegment >= 0) {
    drawTooltip(hoveredSegment);
  }

  // Feedback
  if (feedbackTimer > 0) {
    noStroke();
    fill(diagnoseFeedback.startsWith('Correct') ? '#2E7D32' : '#E65100');
    textAlign(CENTER, BOTTOM);
    textSize(12);
    textStyle(BOLD);
    text(diagnoseFeedback, canvasWidth / 2, drawHeight - 10, canvasWidth - 40);
    textStyle(NORMAL);
    feedbackTimer--;
  }

  // Score
  if (mode === 'Diagnose') {
    noStroke();
    fill('#333');
    textAlign(RIGHT, TOP);
    textSize(13);
    text('Score: ' + score.correct + '/' + score.total, canvasWidth - 15, 12);
  }

  // Control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);
}

function drawTooltip(idx) {
  let d = domains[idx];
  let tw = min(280, canvasWidth - 20);
  let th = 95;
  let tx = constrain(mouseX + 15, 5, canvasWidth - tw - 5);
  let ty = constrain(mouseY - th - 10, 5, drawHeight - th - 5);

  fill(0, 0, 0, 30);
  noStroke();
  rect(tx + 3, ty + 3, tw, th, 6);

  fill(255, 255, 255, 245);
  stroke('#ccc');
  strokeWeight(1);
  rect(tx, ty, tw, th, 6);

  noStroke();
  let py = ty + 10;

  fill(d.color);
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text(d.name.replace('\n', ' '), tx + 10, py);
  textStyle(NORMAL);
  py += 20;

  fill('#333');
  textSize(11);
  text(d.definition, tx + 10, py, tw - 20);
  py += 22;

  fill('#555');
  textSize(10);
  for (let i = 0; i < min(2, d.decisions.length); i++) {
    text('- ' + d.decisions[i], tx + 10, py, tw - 20);
    py += 15;
  }
}

function mousePressed() {
  if (modeSelect.value() !== 'Diagnose' || !diagnoseQuestion || feedbackTimer > 0) return;
  if (hoveredSegment < 0) return;

  let idx = selectedSegments.indexOf(hoveredSegment);
  if (idx >= 0) {
    selectedSegments.splice(idx, 1);
  } else {
    selectedSegments.push(hoveredSegment);
  }
}

function checkAnswer() {
  if (!diagnoseQuestion) return;
  score.total++;
  let correct = diagnoseQuestion.answers;
  let allCorrect = correct.every(a => selectedSegments.includes(a));
  let noExtras = selectedSegments.every(s => correct.includes(s));

  if (allCorrect && noExtras) {
    score.correct++;
    diagnoseFeedback = 'Correct! ' + diagnoseQuestion.explanation;
  } else {
    diagnoseFeedback = 'Not quite. ' + diagnoseQuestion.explanation;
  }
  feedbackTimer = 240;
}

function doubleClicked() {
  if (modeSelect.value() === 'Diagnose' && selectedSegments.length > 0 && feedbackTimer <= 0) {
    checkAnswer();
  }
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
