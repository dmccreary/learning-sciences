// Twelve-Panel Story Arc Map
// 4x3 grid showing story arc structure with Explore and Quiz modes

let canvasWidth = 600;
let drawHeight = 520;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect;
let mode = 'explore';
let hoveredPanel = -1;

// Quiz state
let quizIndex = 0;
let quizFeedback = '';
let quizFeedbackColor;
let quizCorrectCount = 0;
let quizTotal = 0;

const panels = [
  // Row 1: Setup (blue) — panels 1-4
  {
    num: 1, stage: 'Setup', stageColor: '#3B82F6',
    job: 'The Hook',
    description: 'Open with a vivid moment that makes the reader curious.',
    example: 'Ada Lovelace, age 12, sketches a flying machine and writes to her mother: "I want to understand how birds really work."'
  },
  {
    num: 2, stage: 'Setup', stageColor: '#3B82F6',
    job: 'The World',
    description: 'Establish the historical setting and the protagonist\'s daily reality.',
    example: '1830s London — a world of steam engines, where women are barred from university lectures on mathematics.'
  },
  {
    num: 3, stage: 'Setup', stageColor: '#3B82F6',
    job: 'The Want',
    description: 'Show what the protagonist desires or the question that drives them.',
    example: 'Ada meets Charles Babbage and sees the Difference Engine — she wants to understand what it could become.'
  },
  {
    num: 4, stage: 'Setup', stageColor: '#3B82F6',
    job: 'The Obstacle',
    description: 'Introduce the first barrier to the protagonist\'s goal.',
    example: 'Babbage\'s machine is purely mechanical — it can compute, but nobody has imagined it could do more.'
  },
  // Row 2: Rising Action (amber) — panels 5-8
  {
    num: 5, stage: 'Rising Action', stageColor: '#F59E0B',
    job: 'First Attempt',
    description: 'The protagonist tries an approach and learns something new.',
    example: 'Ada studies Menabrea\'s paper on the Analytical Engine and begins translating it — but she sees gaps.'
  },
  {
    num: 6, stage: 'Rising Action', stageColor: '#F59E0B',
    job: 'Deepening',
    description: 'The stakes rise as the protagonist discovers unexpected complexity.',
    example: 'Ada realizes the engine could manipulate symbols, not just numbers — but she needs to prove it.'
  },
  {
    num: 7, stage: 'Rising Action', stageColor: '#F59E0B',
    job: 'The Ally or Mentor',
    description: 'Someone or something provides a key resource, tool, or insight.',
    example: 'Babbage encourages her to write her own notes — her ideas are worth more than a translation.'
  },
  {
    num: 8, stage: 'Rising Action', stageColor: '#F59E0B',
    job: 'The Crisis',
    description: 'The protagonist faces the hardest challenge before the breakthrough.',
    example: 'Ada struggles with the Bernoulli number algorithm — the logic is intricate and she works through multiple drafts.'
  },
  // Row 3: Climax (red) + Resolution (green) — panels 9-12
  {
    num: 9, stage: 'Climax', stageColor: '#EF4444',
    job: 'The Insight',
    description: 'The conceptual turn crystallizes — the protagonist sees the answer.',
    example: 'Ada writes Note G — the first published algorithm, proving the engine can generate Bernoulli numbers.'
  },
  {
    num: 10, stage: 'Climax', stageColor: '#EF4444',
    job: 'The Proof',
    description: 'The protagonist demonstrates the insight works.',
    example: 'She publishes her Notes — three times longer than Menabrea\'s paper — including the vision that the engine could compose music.'
  },
  {
    num: 11, stage: 'Resolution', stageColor: '#10B981',
    job: 'The Legacy',
    description: 'Show the impact of the protagonist\'s contribution on the field.',
    example: 'A century later, Alan Turing reads her notes. The programming language Ada is named in her honor.'
  },
  {
    num: 12, stage: 'Resolution', stageColor: '#10B981',
    job: 'The Bridge',
    description: 'Connect the story to the reader\'s own learning journey.',
    example: 'Ada\'s insight — that a machine could manipulate symbols — is the foundation of every program you will write.'
  }
];

const quizQuestions = [
  {
    text: 'The moment the conceptual turn crystallizes — the insight.',
    answer: 8, // Panel 9
    explanation: 'Panel 9 (Climax: The Insight) — this is where the breakthrough happens.'
  },
  {
    text: 'Establishing the historical setting and the protagonist\'s daily reality.',
    answer: 1, // Panel 2
    explanation: 'Panel 2 (Setup: The World) — we need to see the context before the journey begins.'
  },
  {
    text: 'Connecting the story back to the reader\'s own experience.',
    answer: 11, // Panel 12
    explanation: 'Panel 12 (Resolution: The Bridge) — the final panel turns the story into a lesson.'
  },
  {
    text: 'The protagonist faces the hardest challenge right before the breakthrough.',
    answer: 7, // Panel 8
    explanation: 'Panel 8 (Rising Action: The Crisis) — maximum tension just before the climax.'
  },
  {
    text: 'A mentor or ally provides a key resource or encouragement.',
    answer: 6, // Panel 7
    explanation: 'Panel 7 (Rising Action: The Ally or Mentor) — external support enables the next leap.'
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

  describe('Twelve-panel story arc map showing the structure of a graphic novel narrative: setup, rising action, climax, and resolution.', LABEL);
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
  text('The Twelve-Panel Story Arc Map', canvasWidth / 2, 8);
  textStyle(NORMAL);

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
  let rows = 3;
  let margin = 12;
  let gap = 6;
  let topY = 32;
  let gridH = mode === 'explore' ? drawHeight - topY - 120 : drawHeight - topY - 160;
  let cellW = (canvasWidth - 2 * margin - (cols - 1) * gap) / cols;
  let cellH = (gridH - (rows - 1) * gap) / rows;

  for (let i = 0; i < 12; i++) {
    let col = i % cols;
    let row = Math.floor(i / cols);
    let cx = margin + col * (cellW + gap);
    let cy = topY + row * (cellH + gap);
    let p = panels[i];
    let isHovered = (hoveredPanel === i);

    let c = color(p.stageColor);

    // Cell background
    if (isHovered) {
      fill(red(c), green(c), blue(c), 50);
      stroke(c);
      strokeWeight(3);
    } else {
      fill(red(c), green(c), blue(c), 20);
      stroke(red(c), green(c), blue(c), 100);
      strokeWeight(1);
    }
    rect(cx, cy, cellW, cellH, 6);

    // Panel number
    fill(c);
    noStroke();
    textSize(11);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    text(p.num, cx + 5, cy + 4);

    // Stage label
    textSize(8);
    textAlign(RIGHT, TOP);
    fill(red(c), green(c), blue(c), 180);
    text(p.stage, cx + cellW - 5, cy + 4);

    // Job
    fill('#333');
    textSize(10);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(p.job, cx + cellW / 2, cy + cellH / 2);
  }
}

function drawTooltip() {
  if (hoveredPanel < 0) {
    fill('#888');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('Hover over a panel to see its role in the story arc', canvasWidth / 2, drawHeight - 20);
    return;
  }

  let p = panels[hoveredPanel];
  let tipY = drawHeight - 115;
  let tipW = canvasWidth - 24;

  fill(255);
  stroke(color(p.stageColor));
  strokeWeight(2);
  rect(12, tipY, tipW, 105, 8);

  let tx = 22;
  fill(color(p.stageColor));
  noStroke();
  textSize(13);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text('Panel ' + p.num + ': ' + p.job + ' (' + p.stage + ')', tx, tipY + 6);
  textStyle(NORMAL);

  fill('#444');
  textSize(11);
  text(p.description, tx, tipY + 24, tipW - 20);

  fill('#666');
  textSize(10);
  textStyle(ITALIC);
  text('Example: ' + p.example, tx, tipY + 45, tipW - 20);
  textStyle(NORMAL);
}

function drawQuiz() {
  if (quizIndex < quizQuestions.length) {
    let q = quizQuestions[quizIndex];
    let qY = drawHeight - 155;

    fill(255);
    stroke('#3B82F6');
    strokeWeight(2);
    rect(12, qY, canvasWidth - 24, 36, 8);

    fill('#333');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text(q.text, canvasWidth / 2, qY + 18, canvasWidth - 50);

    fill('#888');
    textSize(10);
    text('Click the panel this beat belongs in', canvasWidth / 2, qY + 46);

    if (quizFeedback) {
      fill(255);
      stroke(quizFeedbackColor);
      strokeWeight(2);
      rect(12, qY + 55, canvasWidth - 24, 35, 8);
      fill(quizFeedbackColor);
      noStroke();
      textSize(10);
      text(quizFeedback, canvasWidth / 2, qY + 72, canvasWidth - 50);
    }

    fill('#666');
    textSize(10);
    text('Q' + (quizIndex + 1) + '/' + quizQuestions.length, canvasWidth / 2, qY + 100);
  } else {
    let qY = drawHeight - 140;
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
  hoveredPanel = -1;
  let cols = 4;
  let rows = 3;
  let margin = 12;
  let gap = 6;
  let topY = 32;
  let gridH = mode === 'explore' ? drawHeight - topY - 120 : drawHeight - topY - 160;
  let cellW = (canvasWidth - 2 * margin - (cols - 1) * gap) / cols;
  let cellH = (gridH - (rows - 1) * gap) / rows;

  for (let i = 0; i < 12; i++) {
    let col = i % cols;
    let row = Math.floor(i / cols);
    let cx = margin + col * (cellW + gap);
    let cy = topY + row * (cellH + gap);

    if (mouseX >= cx && mouseX <= cx + cellW && mouseY >= cy && mouseY <= cy + cellH) {
      hoveredPanel = i;
      break;
    }
  }
}

function mousePressed() {
  if (mode !== 'quiz' || quizIndex >= quizQuestions.length) return;
  if (hoveredPanel < 0) return;

  let q = quizQuestions[quizIndex];
  quizTotal++;
  if (hoveredPanel === q.answer) {
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
