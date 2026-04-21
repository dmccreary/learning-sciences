// Interactive Dreyfus Five-Stage Skill Model
// Horizontal progression with explore and quiz modes

let canvasWidth = 600;
let drawHeight = 500;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect, resetBtn;
let hoveredStage = -1;
let quizIdx = 0;
let quizFeedback = '';
let quizCorrect = 0;
let quizTotal = 0;

let stages = [
  { name: 'Novice',
    color: '#e74c3c',
    def: 'Follows explicit rules without contextual judgment.',
    markers: [
      'Needs step-by-step instructions',
      'Cannot prioritize among rules',
      'Asks "what do I do next?" frequently'
    ],
    ruleVsIntuition: 95,
    feedback: 'Rule correction: "Step 3 says to check X before Y."' },
  { name: 'Advanced Beginner',
    color: '#e67e22',
    def: 'Recognizes recurring situations from experience but still rule-bound.',
    markers: [
      'Notices patterns across similar tasks',
      'Begins to use "rules of thumb"',
      'Still struggles with exceptions'
    ],
    ruleVsIntuition: 75,
    feedback: 'Situational guidance: "In cases like this, most people find that..."' },
  { name: 'Competent',
    color: '#f1c40f',
    def: 'Plans deliberately, sets goals, and copes with complexity.',
    markers: [
      'Creates own checklists and procedures',
      'Feels emotional investment in outcomes',
      'Can handle most standard situations'
    ],
    ruleVsIntuition: 50,
    feedback: 'Goal-setting support: "What is your plan for handling the edge cases?"' },
  { name: 'Proficient',
    color: '#2ecc71',
    def: 'Sees the big picture intuitively but still thinks analytically about actions.',
    markers: [
      'Recognizes when something "feels off"',
      'Sees situations holistically',
      'Analyzes options only when intuition flags a problem'
    ],
    ruleVsIntuition: 25,
    feedback: 'Case discussion: "What would change if this constraint were removed?"' },
  { name: 'Expert',
    color: '#3498db',
    def: 'Acts from deep intuitive understanding; deliberation is rare and reserved for novel situations.',
    markers: [
      'Responds fluidly without conscious rule-following',
      'Sees what to do without weighing alternatives',
      'Reflects only when surprised by an outcome'
    ],
    ruleVsIntuition: 5,
    feedback: 'Boundary-case discussion: "Here is an anomaly — walk me through your read of it."' }
];

let quizScenarios = [
  { description: 'She follows the checklist precisely but is thrown by any case where the checklist assumptions are violated.',
    answer: 0, explanation: 'Rigid rule-following with no adaptation to context is the hallmark of a Novice.' },
  { description: 'He recognizes common patterns from past projects and applies rules of thumb, but unusual cases still trip him up.',
    answer: 1, explanation: 'Pattern recognition from experience with remaining rule-dependence marks the Advanced Beginner.' },
  { description: 'She has developed her own workflow, feels stressed when her plan fails, and can handle most standard cases.',
    answer: 2, explanation: 'Deliberate planning with emotional investment in outcomes characterizes Competence.' },
  { description: 'He instantly senses when a patient presentation is atypical, then methodically works through the differential.',
    answer: 3, explanation: 'Intuitive recognition of situations with analytical decision-making is Proficiency.' },
  { description: 'She responds to the emergency without conscious deliberation, adapting fluidly. Only afterward does she reflect on what she did.',
    answer: 4, explanation: 'Fluid, intuitive response with reflection only on novel outcomes is the Expert stage.' }
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
  modeSelect.changed(() => {
    quizIdx = 0; quizFeedback = ''; quizCorrect = 0; quizTotal = 0;
  });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '15px');
  resetBtn.mousePressed(() => {
    quizIdx = 0; quizFeedback = ''; quizCorrect = 0; quizTotal = 0;
  });

  describe('Dreyfus five-stage skill model from Novice to Expert with behavioral markers and quiz mode');
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
  text('Dreyfus Five-Stage Skill Model', canvasWidth / 2, 8);

  // Rule vs Intuition axis
  let axisY = 35;
  let axisW = canvasWidth - 80;
  let axisX = 40;

  fill(100);
  textSize(10);
  textAlign(LEFT, CENTER);
  text('Rule-following', axisX, axisY);
  textAlign(RIGHT, CENTER);
  text('Intuition', axisX + axisW, axisY);

  // Gradient bar
  for (let x = 0; x < axisW; x++) {
    let t = x / axisW;
    let c = lerpColor(color('#e74c3c'), color('#3498db'), t);
    stroke(c);
    line(axisX + x, axisY + 10, axisX + x, axisY + 18);
  }

  // Stage boxes
  let bandY = 70;
  let bandH = 80;
  let stageW = (canvasWidth - 50) / 5;
  let gap = 2;
  hoveredStage = -1;

  for (let i = 0; i < 5; i++) {
    let sx = 25 + i * stageW;
    let isHovered = mouseX >= sx && mouseX <= sx + stageW - gap && mouseY >= bandY && mouseY <= bandY + bandH;
    if (isHovered) hoveredStage = i;

    // Gradient fill
    fill(stages[i].color + (isHovered ? 'FF' : 'CC'));
    stroke(isHovered ? 40 : 180);
    strokeWeight(isHovered ? 2 : 1);
    rect(sx, bandY, stageW - gap, bandH, 6);

    // Stage name
    noStroke();
    fill(255);
    textSize(12);
    textAlign(CENTER, TOP);
    text(stages[i].name, sx + stageW / 2 - 1, bandY + 8);

    // Rule/intuition indicator
    let rvi = stages[i].ruleVsIntuition;
    let indicatorW = stageW - 20;
    let indicatorX = sx + 10;
    let indicatorY = bandY + 55;

    fill(255, 255, 255, 80);
    noStroke();
    rect(indicatorX, indicatorY, indicatorW, 8, 3);
    fill(255);
    rect(indicatorX, indicatorY, indicatorW * rvi / 100, 8, 3);

    fill(255, 255, 255, 200);
    textSize(8);
    textAlign(CENTER, TOP);
    text(rvi + '% rules', sx + stageW / 2 - 1, indicatorY + 10);
  }

  let mode = modeSelect.value();
  if (mode === 'Explore') {
    drawExploreMode(bandY, bandH);
  } else {
    drawQuizMode(bandY, bandH);
  }
}

function drawExploreMode(bandY, bandH) {
  let detailY = bandY + bandH + 20;

  if (hoveredStage >= 0) {
    let s = stages[hoveredStage];

    fill(255, 255, 250);
    stroke(200);
    strokeWeight(1);
    rect(15, detailY, canvasWidth - 30, drawHeight - detailY - 15, 6);

    noStroke();
    fill(s.color);
    textSize(14);
    textAlign(LEFT, TOP);
    text(s.name, 30, detailY + 10);

    fill(40);
    textSize(11);
    text(s.def, 30, detailY + 30, canvasWidth - 60, 30);

    fill(60);
    textSize(11);
    text('Behavioral markers:', 30, detailY + 60);
    for (let i = 0; i < s.markers.length; i++) {
      text('  - ' + s.markers[i], 30, detailY + 78 + i * 18);
    }

    fill(40, 100, 40);
    textSize(11);
    text('Preferred feedback: ' + s.feedback, 30, detailY + 140, canvasWidth - 60, 40);
  } else {
    noStroke();
    fill(100);
    textSize(11);
    textAlign(CENTER, TOP);
    text('Hover over a stage to see its definition, behavioral markers, and preferred feedback.', canvasWidth / 2, detailY + 20);
  }
}

function drawQuizMode(bandY, bandH) {
  let detailY = bandY + bandH + 20;

  if (quizIdx >= quizScenarios.length) {
    noStroke();
    fill(30);
    textSize(14);
    textAlign(CENTER, CENTER);
    text('Quiz complete! Score: ' + quizCorrect + '/' + quizTotal, canvasWidth / 2, detailY + 30);
    text('Click Reset to try again.', canvasWidth / 2, detailY + 55);
    return;
  }

  let q = quizScenarios[quizIdx];

  // Scenario
  fill(255, 255, 240);
  stroke(200);
  strokeWeight(1);
  rect(15, detailY, canvasWidth - 30, 60, 5);

  noStroke();
  fill(30);
  textSize(11);
  textAlign(LEFT, TOP);
  text('Scenario: ' + q.description, 25, detailY + 8, canvasWidth - 50, 50);

  noStroke();
  fill(80);
  textSize(11);
  textAlign(CENTER, TOP);
  text('Click the stage above that best matches this learner.', canvasWidth / 2, detailY + 70);

  // Score
  textAlign(RIGHT, TOP);
  fill(80);
  textSize(10);
  text('Score: ' + quizCorrect + '/' + quizTotal + ' | Q' + (quizIdx + 1) + '/' + quizScenarios.length, canvasWidth - 15, detailY + 70);

  // Feedback
  if (quizFeedback) {
    let isCorrect = quizFeedback.startsWith('Correct');
    fill(isCorrect ? color(40, 150, 40) : color(200, 40, 40));
    textSize(12);
    textAlign(CENTER, TOP);
    text(quizFeedback, canvasWidth / 2, detailY + 95, canvasWidth - 60, 80);
  }
}

function mousePressed() {
  if (modeSelect.value() !== 'Quiz') return;
  if (quizIdx >= quizScenarios.length) return;
  if (quizFeedback) return; // Wait for timeout

  // Check if clicking on a stage
  let bandY = 70;
  let bandH = 80;
  let stageW = (canvasWidth - 50) / 5;

  for (let i = 0; i < 5; i++) {
    let sx = 25 + i * stageW;
    if (mouseX >= sx && mouseX <= sx + stageW && mouseY >= bandY && mouseY <= bandY + bandH) {
      let q = quizScenarios[quizIdx];
      quizTotal++;
      if (i === q.answer) {
        quizCorrect++;
        quizFeedback = 'Correct! ' + stages[i].name + '. ' + q.explanation;
      } else {
        quizFeedback = 'Not quite. The answer is ' + stages[q.answer].name + '. ' + q.explanation;
      }
      setTimeout(() => {
        quizIdx++;
        quizFeedback = '';
      }, 3000);
      return;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
