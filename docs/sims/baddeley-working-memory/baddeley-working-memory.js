// Baddeley's Working Memory Model - Interactive MicroSim
// Central Executive hub with Phonological Loop, Visuospatial Sketchpad, Episodic Buffer

let canvasWidth = 600;
let drawHeight = 480;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect, resetBtn;
let hoveredComponent = '';
let quizQuestion = null;
let quizFeedback = '';
let feedbackTimer = 0;
let score = { correct: 0, total: 0 };

const components = {
  central: {
    name: 'Central Executive',
    storage: 'No storage — attentional control system',
    duration: 'N/A (directs attention in real time)',
    refresh: 'Switches focus between subsystems; inhibits distractions',
    example: 'Deciding whether to rehearse a phone number or look at a map while navigating',
    color: '#4A90D9'
  },
  phonological: {
    name: 'Phonological Loop',
    storage: 'Verbal and acoustic information (~2 seconds worth)',
    duration: '~2 seconds without rehearsal',
    refresh: 'Subvocal rehearsal (silently repeating to yourself)',
    example: 'Holding a sentence you just read long enough to understand it',
    color: '#E8543A'
  },
  visuospatial: {
    name: 'Visuospatial Sketchpad',
    storage: 'Visual images and spatial layouts (~3-4 objects)',
    duration: '~3-4 seconds without refreshing',
    refresh: 'Mental visualization and spatial scanning',
    example: 'Picturing the layout of your classroom while planning where to sit',
    color: '#7ED321'
  },
  episodic: {
    name: 'Episodic Buffer',
    storage: 'Integrated episodes binding information across subsystems (~4 chunks)',
    duration: 'Minutes (bridges to long-term memory)',
    refresh: 'Links current experience with long-term memory traces',
    example: 'Combining the words you hear with the diagram you see into a coherent lesson',
    color: '#F5A623'
  },
  ltm: {
    name: 'Long-Term Memory',
    storage: 'Essentially unlimited capacity for schemas and episodes',
    duration: 'Years to a lifetime',
    refresh: 'Consolidated through retrieval practice and sleep',
    example: 'Your accumulated knowledge of how to read, your childhood memories',
    color: '#9B9B9B'
  }
};

const quizBank = [
  { text: 'Mentally rotate a 3D shape to see if it matches another', answer: 'visuospatial' },
  { text: 'Silently repeat a phone number someone just told you', answer: 'phonological' },
  { text: 'Decide whether to focus on the lecture or the slide text', answer: 'central' },
  { text: 'Connect what the teacher says with a diagram on the board', answer: 'episodic' },
  { text: 'Navigate a familiar route by visualizing the turns', answer: 'visuospatial' },
  { text: 'Remember the exact wording of a question just asked', answer: 'phonological' },
  { text: 'Switch attention from reading to answering a question', answer: 'central' },
  { text: 'Combine a smell, a sound, and a visual scene into one memory', answer: 'episodic' },
  { text: 'Rehearse a list of vocabulary words by saying them under your breath', answer: 'phonological' },
  { text: 'Imagine how furniture would look rearranged in a room', answer: 'visuospatial' }
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

  describe('Baddeley working memory model with Central Executive hub, Phonological Loop, Visuospatial Sketchpad, Episodic Buffer, and Long-Term Memory.');
}

function onModeChange() {
  quizFeedback = '';
  feedbackTimer = 0;
  score = { correct: 0, total: 0 };
  if (modeSelect.value() === 'Quiz') pickNewQuestion();
}

function onReset() {
  score = { correct: 0, total: 0 };
  quizFeedback = '';
  feedbackTimer = 0;
  if (modeSelect.value() === 'Quiz') pickNewQuestion();
}

function pickNewQuestion() {
  quizQuestion = quizBank[floor(random(quizBank.length))];
  quizFeedback = '';
  feedbackTimer = 0;
}

function getComponentPositions() {
  let cx = canvasWidth / 2;
  let cy = drawHeight / 2 - 10;
  let boxW = min(140, canvasWidth * 0.2);
  let boxH = 65;
  let spread = min(180, canvasWidth * 0.28);

  return {
    central: { x: cx - boxW / 2, y: cy - boxH / 2, w: boxW + 20, h: boxH + 10 },
    phonological: { x: cx - spread - boxW / 2 - 20, y: cy - boxH / 2, w: boxW, h: boxH },
    visuospatial: { x: cx + spread - boxW / 2 + 20, y: cy - boxH / 2, w: boxW, h: boxH },
    episodic: { x: cx - boxW / 2, y: cy + spread * 0.7, w: boxW + 20, h: boxH },
    ltm: { x: cx - boxW / 2 - 10, y: cy + spread * 0.7 + boxH + 40, w: boxW + 40, h: boxH - 10 }
  };
}

function draw() {
  let mode = modeSelect.value();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Title
  noStroke();
  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(18);
  text("Baddeley's Working Memory Model", canvasWidth / 2, 10);

  if (mode === 'Quiz' && quizQuestion) {
    fill('#333');
    textSize(12);
    textAlign(CENTER, TOP);
    text('Click the component: "' + quizQuestion.text + '"', canvasWidth / 2, 34, canvasWidth - 40);
  } else {
    fill('#666');
    textSize(12);
    text('Hover over a component to learn more', canvasWidth / 2, 34);
  }

  let pos = getComponentPositions();

  // Detect hover
  hoveredComponent = '';
  for (let key in pos) {
    let p = pos[key];
    if (mouseX >= p.x && mouseX <= p.x + p.w && mouseY >= p.y && mouseY <= p.y + p.h) {
      hoveredComponent = key;
    }
  }

  // Draw connecting arrows
  let cx = canvasWidth / 2;
  let cy = drawHeight / 2 - 10;

  // Central to Phonological
  stroke('#999');
  strokeWeight(2);
  let pEnd = pos.phonological.x + pos.phonological.w;
  let cStart = pos.central.x;
  drawArrow(cStart, cy, pEnd + 5, cy);
  drawArrow(pEnd + 5, cy - 8, cStart, cy - 8);

  // Central to Visuospatial
  let vStart = pos.visuospatial.x;
  let cEnd = pos.central.x + pos.central.w;
  drawArrow(cEnd, cy, vStart - 5, cy);
  drawArrow(vStart - 5, cy - 8, cEnd, cy - 8);

  // Central to Episodic Buffer
  let eTop = pos.episodic.y;
  let cBot = pos.central.y + pos.central.h;
  drawArrow(cx - 8, cBot, cx - 8, eTop - 5);
  drawArrow(cx + 8, eTop - 5, cx + 8, cBot);

  // Episodic Buffer to LTM
  let eBot = pos.episodic.y + pos.episodic.h;
  let ltmTop = pos.ltm.y;
  stroke('#999');
  drawingContext.setLineDash([5, 5]);
  drawArrow(cx - 8, eBot, cx - 8, ltmTop - 5);
  drawArrow(cx + 8, ltmTop - 5, cx + 8, eBot);
  drawingContext.setLineDash([]);

  // Arrow labels
  noStroke();
  fill('#777');
  textSize(9);
  textAlign(CENTER, CENTER);
  text('encoding', cx + 25, (eBot + ltmTop) / 2);
  text('retrieval', cx - 25, (eBot + ltmTop) / 2);

  // Draw components
  for (let key in components) {
    let p = pos[key];
    let comp = components[key];
    let isHovered = (hoveredComponent === key);
    let isCorrect = (feedbackTimer > 0 && quizQuestion && quizQuestion.answer === key && hoveredComponent === key);
    let isAnswer = (feedbackTimer > 0 && quizQuestion && quizQuestion.answer === key);

    if (isAnswer && quizFeedback.startsWith('Correct')) {
      fill('#4CAF50');
    } else if (isAnswer && !quizFeedback.startsWith('Correct')) {
      fill('#4CAF50'); // show correct answer
    } else if (isHovered) {
      let c = color(comp.color);
      fill(red(c), green(c), blue(c), 220);
    } else {
      fill(comp.color);
    }

    stroke('#fff');
    strokeWeight(2);
    if (key === 'central') {
      rect(p.x, p.y, p.w, p.h, 30); // rounded for hub
    } else if (key === 'ltm') {
      rect(p.x, p.y, p.w, p.h, 4);
    } else {
      rect(p.x, p.y, p.w, p.h, 8);
    }

    // Icon
    noStroke();
    fill('#fff');
    textAlign(CENTER, CENTER);
    textSize(16);
    if (key === 'phonological') text('👂', p.x + p.w / 2, p.y + 15);
    if (key === 'visuospatial') text('👁', p.x + p.w / 2, p.y + 15);
    if (key === 'episodic') text('🔗', p.x + p.w / 2, p.y + 15);
    if (key === 'central') text('🧠', p.x + p.w / 2, p.y + 15);
    if (key === 'ltm') text('📚', p.x + p.w / 2, p.y + 12);

    // Label
    fill('#fff');
    textSize(11);
    textStyle(BOLD);
    let labelY = (key === 'ltm') ? p.y + 35 : p.y + 40;
    text(comp.name, p.x + p.w / 2, labelY);
    textStyle(NORMAL);
  }

  // Tooltip for Explore
  if (mode === 'Explore' && hoveredComponent && components[hoveredComponent]) {
    drawTooltip(hoveredComponent);
  }

  // Quiz feedback
  if (mode === 'Quiz' && feedbackTimer > 0) {
    noStroke();
    fill(quizFeedback.startsWith('Correct') ? '#2E7D32' : '#C62828');
    textAlign(CENTER, BOTTOM);
    textSize(12);
    textStyle(BOLD);
    text(quizFeedback, canvasWidth / 2, drawHeight - 10, canvasWidth - 40);
    textStyle(NORMAL);
    feedbackTimer--;
    if (feedbackTimer <= 0) pickNewQuestion();
  }

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
}

function drawArrow(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  let angle = atan2(y2 - y1, x2 - x1);
  let arrowSize = 6;
  fill('#999');
  noStroke();
  triangle(
    x2, y2,
    x2 - arrowSize * cos(angle - 0.4), y2 - arrowSize * sin(angle - 0.4),
    x2 - arrowSize * cos(angle + 0.4), y2 - arrowSize * sin(angle + 0.4)
  );
  stroke('#999');
  strokeWeight(2);
}

function drawTooltip(key) {
  let comp = components[key];
  let tw = min(300, canvasWidth - 20);
  let th = 115;
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
  let py = ty + 8;

  fill(components[key].color);
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text(comp.name, tx + 10, py);
  textStyle(NORMAL);
  py += 18;

  fill('#333');
  textSize(10);
  text('Storage: ' + comp.storage, tx + 10, py, tw - 20);
  py += 20;
  text('Duration: ' + comp.duration, tx + 10, py, tw - 20);
  py += 16;
  text('Refresh: ' + comp.refresh, tx + 10, py, tw - 20);
  py += 20;

  fill('#1a3a6c');
  textSize(10);
  textStyle(ITALIC);
  text('Ex: ' + comp.example, tx + 10, py, tw - 20);
  textStyle(NORMAL);
}

function mousePressed() {
  if (modeSelect.value() !== 'Quiz' || !quizQuestion || feedbackTimer > 0) return;
  if (!hoveredComponent || hoveredComponent === 'ltm') return;

  score.total++;
  if (hoveredComponent === quizQuestion.answer) {
    score.correct++;
    quizFeedback = 'Correct! That task primarily uses the ' + components[quizQuestion.answer].name + '.';
  } else {
    quizFeedback = 'Not quite. The correct answer is ' + components[quizQuestion.answer].name + '.';
  }
  feedbackTimer = 180;
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
