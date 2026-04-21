// Bloom's Taxonomy Pyramid - Interactive MicroSim
// Explore: hover tiers for tooltips. Quiz: identify Bloom level of objectives.

let canvasWidth = 600;
let drawHeight = 500;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let modeSelect;
let resetBtn;
let hoveredTier = -1;
let selectedTier = -1;
let quizQuestion = null;
let quizFeedback = '';
let feedbackColor;
let feedbackTimer = 0;
let score = { correct: 0, total: 0 };

const tiers = [
  {
    name: 'Remember',
    color: '#4A90D9',
    definition: 'Retrieve relevant knowledge from long-term memory.',
    verbs: ['define', 'list', 'recall'],
    objective: 'List the six levels of Bloom\'s Taxonomy in order.'
  },
  {
    name: 'Understand',
    color: '#5BA8C8',
    definition: 'Construct meaning from instructional messages.',
    verbs: ['explain', 'summarize', 'classify'],
    objective: 'Explain why retrieval practice strengthens memory more than re-reading.'
  },
  {
    name: 'Apply',
    color: '#6BBF8A',
    definition: 'Carry out or use a procedure in a given situation.',
    verbs: ['implement', 'solve', 'demonstrate'],
    objective: 'Given a learning objective, identify which Bloom level it targets.'
  },
  {
    name: 'Analyze',
    color: '#F5C342',
    definition: 'Break material into parts and determine how parts relate.',
    verbs: ['compare', 'differentiate', 'organize'],
    objective: 'Compare two lesson plans and identify which addresses higher-order thinking.'
  },
  {
    name: 'Evaluate',
    color: '#E8943A',
    definition: 'Make judgments based on criteria and standards.',
    verbs: ['critique', 'justify', 'assess'],
    objective: 'Assess whether a quiz question measures understanding or mere recall.'
  },
  {
    name: 'Create',
    color: '#D94F4F',
    definition: 'Put elements together to form a novel, coherent whole.',
    verbs: ['design', 'construct', 'produce'],
    objective: 'Design a rubric that assesses all six levels of Bloom\'s Taxonomy.'
  }
];

const quizBank = [
  { text: 'List the three types of cognitive load.', answer: 0 },
  { text: 'Explain how spaced practice differs from massed practice.', answer: 1 },
  { text: 'Use the spacing formula to schedule review sessions for a vocabulary list.', answer: 2 },
  { text: 'Compare the effectiveness of highlighting versus retrieval practice.', answer: 3 },
  { text: 'Judge whether a textbook chapter adequately supports deep learning.', answer: 4 },
  { text: 'Design an intelligent textbook chapter that applies all seven domains.', answer: 5 },
  { text: 'Recall the definition of intrinsic motivation.', answer: 0 },
  { text: 'Summarize the key findings of the testing effect research.', answer: 1 },
  { text: 'Solve a worked example using cognitive load theory principles.', answer: 2 },
  { text: 'Differentiate between intrinsic and extraneous cognitive load in a lesson.', answer: 3 },
  { text: 'Critique a peer\'s lesson plan for alignment with learning objectives.', answer: 4 },
  { text: 'Construct a concept map connecting motivation theories to instructional strategies.', answer: 5 }
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

  // Controls
  modeSelect = createSelect();
  modeSelect.parent(document.querySelector('main'));
  modeSelect.option('Explore');
  modeSelect.option('Quiz');
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

  describe('Interactive Bloom\'s Taxonomy pyramid with six colored tiers. Hover to explore or switch to quiz mode to test your knowledge.');
}

function onModeChange() {
  quizQuestion = null;
  quizFeedback = '';
  feedbackTimer = 0;
  selectedTier = -1;
  if (modeSelect.value() === 'Quiz') {
    pickNewQuestion();
  }
}

function onReset() {
  score = { correct: 0, total: 0 };
  quizFeedback = '';
  feedbackTimer = 0;
  selectedTier = -1;
  if (modeSelect.value() === 'Quiz') {
    pickNewQuestion();
  }
}

function pickNewQuestion() {
  quizQuestion = quizBank[floor(random(quizBank.length))];
  quizFeedback = '';
  feedbackTimer = 0;
  selectedTier = -1;
}

function getTierGeometry(i) {
  let pyramidTop = 80;
  let pyramidBottom = drawHeight - 40;
  let pyramidHeight = pyramidBottom - pyramidTop;
  let tierHeight = pyramidHeight / 6;

  let idx = 5 - i; // invert so tier 0 (Remember) is at bottom
  let y = pyramidTop + idx * tierHeight;
  let topWidthRatio = (idx) / 6;
  let bottomWidthRatio = (idx + 1) / 6;
  let maxWidth = canvasWidth * 0.7;

  let topW = maxWidth * (0.15 + 0.85 * topWidthRatio);
  let bottomW = maxWidth * (0.15 + 0.85 * bottomWidthRatio);
  let cx = canvasWidth / 2;

  return { y, tierHeight, topW, bottomW, cx };
}

function draw() {
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
  text("Bloom's Taxonomy", canvasWidth / 2, 12);

  let mode = modeSelect.value();

  if (mode === 'Quiz' && quizQuestion) {
    fill('#333');
    textSize(13);
    textAlign(CENTER, TOP);
    let wrapped = quizQuestion.text;
    text('Click the tier: "' + wrapped + '"', canvasWidth / 2, 38, canvasWidth - 40);
  }

  if (mode === 'Explore') {
    fill('#666');
    textSize(12);
    textAlign(CENTER, TOP);
    text('Hover over a tier to learn more', canvasWidth / 2, 40);
  }

  // Detect hover
  hoveredTier = -1;
  for (let i = 0; i < 6; i++) {
    let g = getTierGeometry(i);
    if (mouseY >= g.y && mouseY < g.y + g.tierHeight &&
        mouseX >= 0 && mouseX <= canvasWidth) {
      // Check if within trapezoid
      let ratio = (mouseY - g.y) / g.tierHeight;
      let w = lerp(g.topW, g.bottomW, ratio);
      if (mouseX >= g.cx - w / 2 && mouseX <= g.cx + w / 2) {
        hoveredTier = i;
      }
    }
  }

  // Draw pyramid tiers
  for (let i = 0; i < 6; i++) {
    let g = getTierGeometry(i);
    let tier = tiers[i];
    let isHovered = (hoveredTier === i);
    let isCorrect = (mode === 'Quiz' && selectedTier === i && quizQuestion && quizQuestion.answer === i);
    let isWrong = (mode === 'Quiz' && selectedTier === i && quizQuestion && quizQuestion.answer !== i);
    let isAnswer = (mode === 'Quiz' && feedbackTimer > 0 && quizQuestion && quizQuestion.answer === i && selectedTier !== i);

    if (isCorrect) {
      fill('#4CAF50');
    } else if (isWrong) {
      fill('#EF5350');
    } else if (isAnswer) {
      fill('#4CAF50');
    } else if (isHovered) {
      let c = color(tier.color);
      fill(red(c), green(c), blue(c), 220);
    } else {
      fill(tier.color);
    }

    stroke('#fff');
    strokeWeight(2);
    beginShape();
    vertex(g.cx - g.topW / 2, g.y);
    vertex(g.cx + g.topW / 2, g.y);
    vertex(g.cx + g.bottomW / 2, g.y + g.tierHeight);
    vertex(g.cx - g.bottomW / 2, g.y + g.tierHeight);
    endShape(CLOSE);

    // Tier label
    noStroke();
    fill('#fff');
    textAlign(CENTER, CENTER);
    textSize(15);
    textStyle(BOLD);
    text(tier.name, g.cx, g.y + g.tierHeight / 2);
    textStyle(NORMAL);
  }

  // Tooltip for Explore mode
  if (mode === 'Explore' && hoveredTier >= 0) {
    drawTooltip(hoveredTier);
  }

  // Quiz feedback
  if (mode === 'Quiz' && feedbackTimer > 0) {
    noStroke();
    fill(feedbackColor);
    textAlign(CENTER, TOP);
    textSize(14);
    textStyle(BOLD);
    text(quizFeedback, canvasWidth / 2, drawHeight - 35, canvasWidth - 40);
    textStyle(NORMAL);
    feedbackTimer--;
    if (feedbackTimer <= 0) {
      pickNewQuestion();
    }
  }

  // Score in quiz mode
  if (mode === 'Quiz') {
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

  fill('#555');
  textAlign(LEFT, CENTER);
  textSize(12);
  text('Mode:', 10, drawHeight + controlHeight / 2);
}

function drawTooltip(tierIdx) {
  let tier = tiers[tierIdx];
  let g = getTierGeometry(tierIdx);

  let tw = min(280, canvasWidth - 20);
  let th = 90;
  let tx = constrain(mouseX + 15, 5, canvasWidth - tw - 5);
  let ty = constrain(g.y - 10, 5, drawHeight - th - 5);

  // Shadow
  fill(0, 0, 0, 30);
  noStroke();
  rect(tx + 3, ty + 3, tw, th, 6);

  // Background
  fill(255, 255, 255, 245);
  stroke('#ccc');
  strokeWeight(1);
  rect(tx, ty, tw, th, 6);

  noStroke();
  let py = ty + 10;

  fill(tier.color);
  textAlign(LEFT, TOP);
  textSize(14);
  textStyle(BOLD);
  text(tier.name, tx + 10, py);
  textStyle(NORMAL);
  py += 20;

  fill('#333');
  textSize(11);
  text(tier.definition, tx + 10, py, tw - 20);
  py += 22;

  fill('#555');
  text('Verbs: ' + tier.verbs.join(', '), tx + 10, py);
  py += 16;

  fill('#1a3a6c');
  textSize(10);
  text('Ex: ' + tier.objective, tx + 10, py, tw - 20);
}

function mousePressed() {
  if (modeSelect.value() !== 'Quiz' || !quizQuestion || feedbackTimer > 0) return;
  if (hoveredTier < 0) return;

  selectedTier = hoveredTier;
  score.total++;

  if (hoveredTier === quizQuestion.answer) {
    score.correct++;
    quizFeedback = 'Correct! That objective targets the ' + tiers[quizQuestion.answer].name + ' level.';
    feedbackColor = '#2E7D32';
  } else {
    quizFeedback = 'Not quite. The correct level is ' + tiers[quizQuestion.answer].name + '. ' + tiers[quizQuestion.answer].definition;
    feedbackColor = '#C62828';
  }
  feedbackTimer = 180; // 3 seconds at 60fps
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
