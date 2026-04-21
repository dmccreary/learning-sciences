// Bloom Poses Gallery
// Grid of 7 Bloom mascot poses with descriptions of when to use each
// Explore mode: hover for details; Quiz mode: match scenario to pose

let canvasWidth = 600;
let drawHeight = 560;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect;
let mode = 'explore';
let hoveredPose = -1;

// Quiz state
let quizIndex = 0;
let quizFeedback = '';
let quizFeedbackColor;
let quizCorrectCount = 0;
let quizTotal = 0;

const poses = [
  {
    name: 'Neutral',
    admonition: 'mascot-neutral',
    color: '#64748B', // slate gray
    emoji: '\u{1F418}', // elephant
    moment: 'General note or sidebar where Bloom adds context without strong emotion.',
    reason: 'A calm default reduces extraneous cognitive load — the reader focuses on content, not tone.'
  },
  {
    name: 'Welcome',
    admonition: 'mascot-welcome',
    color: '#3B82F6', // primary blue
    emoji: '\u{1F44B}', // wave
    moment: 'Chapter opening — exactly once per chapter to introduce the central question.',
    reason: 'A warm greeting activates the social presence effect, signaling that learning is collaborative.'
  },
  {
    name: 'Thinking',
    admonition: 'mascot-thinking',
    color: '#92400E', // warm brown
    emoji: '\u{1F914}', // thinking face
    moment: 'Key concept introduction where the reader should pause and build a mental model.',
    reason: 'The "pause and think" cue triggers generative processing — the reader constructs meaning, not just reads.'
  },
  {
    name: 'Tip',
    admonition: 'mascot-tip',
    color: '#0D9488', // teal
    emoji: '\u{1F4A1}', // light bulb
    moment: 'Practical advice that helps the reader apply a concept or avoid unnecessary effort.',
    reason: 'Tips reduce germane load by giving the reader a proven shortcut or heuristic.'
  },
  {
    name: 'Warning',
    admonition: 'mascot-warning',
    color: '#DC2626', // red
    emoji: '\u{26A0}\uFE0F', // warning
    moment: 'Common misconception or mistake that could derail understanding.',
    reason: 'Explicitly naming the trap activates error-based learning — readers encode the contrast between right and wrong.'
  },
  {
    name: 'Encouraging',
    admonition: 'mascot-encourage',
    color: '#EA580C', // accent orange
    emoji: '\u{1F4AA}', // flexed biceps
    moment: 'Difficult content where the reader may feel frustrated or want to give up.',
    reason: 'Normalizing struggle is a motivation intervention from SDT — it reframes effort as a sign of learning, not failure.'
  },
  {
    name: 'Celebration',
    admonition: 'mascot-celebration',
    color: '#7C3AED', // deep purple
    emoji: '\u{1F389}', // party popper
    moment: 'Section or chapter completion — exactly once per chapter at the end.',
    reason: 'Marking completion satisfies the need for competence (SDT) and reinforces the reader\'s progress.'
  }
];

const quizQuestions = [
  {
    text: 'The reader has just encountered a claim that contradicts their intuition and may feel defensive.',
    answer: 4, // Warning
    explanation: 'Warning pose — name the misconception explicitly so the reader can process the contrast.'
  },
  {
    text: 'A new chapter begins, and the reader needs to know what question this chapter will answer.',
    answer: 1, // Welcome
    explanation: 'Welcome pose — used exactly once at the start of each chapter to set the stage.'
  },
  {
    text: 'The reader just finished all exercises in a challenging chapter on cognitive load theory.',
    answer: 6, // Celebration
    explanation: 'Celebration pose — marks completion and satisfies the need for competence.'
  },
  {
    text: 'The next section introduces a formula that most students find intimidating at first.',
    answer: 5, // Encouraging
    explanation: 'Encouraging pose — normalizing struggle reframes effort as desirable difficulty.'
  },
  {
    text: 'A key term is introduced and the reader should stop to build a mental model before moving on.',
    answer: 2, // Thinking
    explanation: 'Thinking pose — the pause-and-think cue triggers generative processing.'
  },
  {
    text: 'There is a shortcut for configuring MkDocs that will save the reader 20 minutes of trial and error.',
    answer: 3, // Tip
    explanation: 'Tip pose — practical advice that reduces unnecessary cognitive load.'
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

  describe('Gallery of seven Bloom the Elephant mascot poses showing when and why to use each admonition type in an intelligent textbook.', LABEL);
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
  textSize(16);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text('The Seven Bloom Poses', canvasWidth / 2, 10);
  textStyle(NORMAL);
  textSize(11);
  fill('#666');
  text('When to use each mascot admonition', canvasWidth / 2, 30);

  detectHover();
  drawGrid();

  if (mode === 'explore') {
    drawTooltip();
  } else {
    drawQuiz();
  }
}

function drawGrid() {
  let cols = 4;
  let margin = 12;
  let gap = 8;
  let topY = 48;
  let gridH = mode === 'explore' ? drawHeight - topY - 105 : drawHeight - topY - 155;
  let cellW = (canvasWidth - 2 * margin - (cols - 1) * gap) / cols;
  let rows = 2;
  let cellH = (gridH - gap) / rows;

  for (let i = 0; i < 7; i++) {
    let col = i % cols;
    let row = Math.floor(i / cols);
    let cx = margin + col * (cellW + gap);
    let cy = topY + row * (cellH + gap);
    let p = poses[i];
    let isHovered = (hoveredPose === i);

    // Cell background
    let c = color(p.color);
    if (isHovered) {
      fill(red(c), green(c), blue(c), 40);
      stroke(c);
      strokeWeight(3);
    } else {
      fill(255);
      stroke(red(c), green(c), blue(c), 120);
      strokeWeight(2);
    }
    rect(cx, cy, cellW, cellH, 8);

    // Color band at top
    fill(c);
    noStroke();
    rect(cx, cy, cellW, 6, 8, 8, 0, 0);

    // Emoji placeholder for pose
    textSize(36);
    textAlign(CENTER, CENTER);
    text(p.emoji, cx + cellW / 2, cy + cellH * 0.38);

    // Pose name
    fill('#333');
    textSize(12);
    textStyle(BOLD);
    text(p.name, cx + cellW / 2, cy + cellH * 0.70);
    textStyle(NORMAL);

    // Admonition type
    fill(c);
    textSize(9);
    text(p.admonition, cx + cellW / 2, cy + cellH * 0.85);
  }
}

function drawTooltip() {
  if (hoveredPose < 0) {
    fill('#888');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('Hover over a pose to see when and why to use it', canvasWidth / 2, drawHeight - 20);
    return;
  }

  let p = poses[hoveredPose];
  let tipY = drawHeight - 100;
  let tipW = canvasWidth - 24;

  fill(255);
  stroke(color(p.color));
  strokeWeight(2);
  rect(12, tipY, tipW, 90, 8);

  let tx = 22;
  fill(color(p.color));
  noStroke();
  textSize(13);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text(p.name + ' — ' + p.admonition, tx, tipY + 8);
  textStyle(NORMAL);

  fill('#444');
  textSize(11);
  textStyle(BOLD);
  text('When: ', tx, tipY + 28);
  textStyle(NORMAL);
  text(p.moment, tx + textWidth('When: '), tipY + 28, tipW - textWidth('When: ') - 20);

  fill('#666');
  textSize(10);
  textStyle(BOLD);
  text('Why: ', tx, tipY + 58);
  textStyle(NORMAL);
  text(p.reason, tx + textWidth('Why: '), tipY + 58, tipW - textWidth('Why: ') - 20);
}

function drawQuiz() {
  if (quizIndex < quizQuestions.length) {
    let q = quizQuestions[quizIndex];
    let qY = drawHeight - 145;

    fill(255);
    stroke('#3B82F6');
    strokeWeight(2);
    rect(12, qY, canvasWidth - 24, 40, 8);

    fill('#333');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text(q.text, canvasWidth / 2, qY + 20, canvasWidth - 50);

    fill('#888');
    textSize(10);
    text('Click the pose that best fits this scenario', canvasWidth / 2, qY + 50);

    if (quizFeedback) {
      fill(255);
      stroke(quizFeedbackColor);
      strokeWeight(2);
      rect(12, qY + 60, canvasWidth - 24, 35, 8);
      fill(quizFeedbackColor);
      noStroke();
      textSize(10);
      text(quizFeedback, canvasWidth / 2, qY + 77, canvasWidth - 50);
    }

    fill('#666');
    textSize(10);
    text('Q' + (quizIndex + 1) + '/' + quizQuestions.length, canvasWidth / 2, qY + 105);
  } else {
    let qY = drawHeight - 130;
    fill('#333');
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Quiz Complete!', canvasWidth / 2, qY);
    textStyle(NORMAL);
    textSize(13);
    text(quizCorrectCount + ' / ' + quizTotal + ' correct', canvasWidth / 2, qY + 22);
  }
}

function detectHover() {
  hoveredPose = -1;
  let cols = 4;
  let margin = 12;
  let gap = 8;
  let topY = 48;
  let gridH = mode === 'explore' ? drawHeight - topY - 105 : drawHeight - topY - 155;
  let cellW = (canvasWidth - 2 * margin - (cols - 1) * gap) / cols;
  let rows = 2;
  let cellH = (gridH - gap) / rows;

  for (let i = 0; i < 7; i++) {
    let col = i % cols;
    let row = Math.floor(i / cols);
    let cx = margin + col * (cellW + gap);
    let cy = topY + row * (cellH + gap);

    if (mouseX >= cx && mouseX <= cx + cellW && mouseY >= cy && mouseY <= cy + cellH) {
      hoveredPose = i;
      break;
    }
  }
}

function mousePressed() {
  if (mode !== 'quiz' || quizIndex >= quizQuestions.length) return;
  if (hoveredPose < 0) return;

  let q = quizQuestions[quizIndex];
  quizTotal++;
  if (hoveredPose === q.answer) {
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
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    canvasHeight = drawHeight + controlHeight;
  }
}
