// Three-Stage Memory Model - Interactive MicroSim
// Sensory -> Working -> Long-Term memory flow with explore and quiz modes

let canvasWidth = 600;
let drawHeight = 460;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect, resetBtn, sendBtn;
let hoveredStage = '';
let quizQuestion = null;
let quizFeedback = '';
let feedbackTimer = 0;
let score = { correct: 0, total: 0 };

// Animation
let particles = [];
let animPhase = 0;

const stages = {
  sensory: {
    name: 'Sensory Memory',
    capacity: 'Very large (all sensory input)',
    duration: '0.25-3 seconds',
    example: 'The brief afterimage when you glance at a bright light; the echo of a word just spoken',
    mechanism: 'Attention acts as a filter: only attended items pass to working memory',
    color: '#5BA8C8'
  },
  working: {
    name: 'Working Memory',
    capacity: '~4 items (chunks)',
    duration: '15-30 seconds without rehearsal',
    example: 'Holding a phone number in mind while you walk to write it down',
    mechanism: 'Encoding through elaboration, organization, and retrieval practice moves items to long-term memory',
    color: '#F5A623'
  },
  longterm: {
    name: 'Long-Term Memory',
    capacity: 'Essentially unlimited',
    duration: 'Years to a lifetime',
    example: 'Your knowledge of how to ride a bicycle; the capital of France; your tenth birthday',
    mechanism: 'Retrieval cues and practice strengthen memory traces; forgetting follows a predictable curve',
    color: '#4A90D9'
  }
};

const quizBank = [
  { text: 'Holds roughly 4 items for about 20 seconds without rehearsal', answer: 'working' },
  { text: 'Stores everything your senses detect for a fraction of a second', answer: 'sensory' },
  { text: 'Has essentially unlimited capacity and can last a lifetime', answer: 'longterm' },
  { text: 'Information enters through attention filtering', answer: 'sensory' },
  { text: 'Strengthened by retrieval practice and spaced repetition', answer: 'longterm' },
  { text: 'The brief echo you hear after someone stops speaking', answer: 'sensory' },
  { text: 'Where you hold a sentence in mind while comprehending it', answer: 'working' },
  { text: 'Your accumulated vocabulary knowledge', answer: 'longterm' },
  { text: 'Capacity is limited to about 4 chunks', answer: 'working' },
  { text: 'Duration is measured in fractions of a second', answer: 'sensory' },
  { text: 'Information moves here through encoding and elaboration', answer: 'longterm' },
  { text: 'The bottleneck where active processing happens', answer: 'working' }
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

  sendBtn = createButton('Send Info');
  sendBtn.parent(document.querySelector('main'));
  sendBtn.style('font-size', '14px');
  sendBtn.style('padding', '4px 12px');
  sendBtn.style('margin', '4px');
  sendBtn.mousePressed(sendParticle);

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('font-size', '14px');
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('margin', '4px');
  resetBtn.mousePressed(onReset);

  describe('Three-stage memory model showing Sensory Memory, Working Memory, and Long-Term Memory connected by arrows. Hover stages to explore or take a quiz.');
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
  particles = [];
  if (modeSelect.value() === 'Quiz') pickNewQuestion();
}

function pickNewQuestion() {
  quizQuestion = quizBank[floor(random(quizBank.length))];
  quizFeedback = '';
  feedbackTimer = 0;
}

function sendParticle() {
  let pos = getStagePositions();
  particles.push({
    x: pos.sensory.x + pos.sensory.w / 2,
    y: pos.sensory.y + pos.sensory.h / 2,
    targetStage: 1, // heading to working
    progress: 0,
    speed: 0.015,
    alive: true
  });
}

function getStagePositions() {
  let margin = 30;
  let gap = 50;
  let stageW = (canvasWidth - margin * 2 - gap * 2) / 3;
  let stageH = 100;
  let stageY = 160;

  // Sensory is narrow/tall (funnel), Working is medium, LTM is wide
  let sW = stageW * 0.7;
  let wW = stageW * 0.9;
  let lW = stageW * 1.4;

  let totalW = sW + wW + lW + gap * 2;
  let startX = (canvasWidth - totalW) / 2;

  return {
    sensory: { x: startX, y: stageY, w: sW, h: stageH + 20 },
    working: { x: startX + sW + gap, y: stageY + 10, w: wW, h: stageH },
    longterm: { x: startX + sW + wW + gap * 2, y: stageY - 10, w: lW, h: stageH + 20 }
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
  text('The Three-Stage Memory Model', canvasWidth / 2, 10);

  if (mode === 'Quiz' && quizQuestion) {
    fill('#333');
    textSize(12);
    textAlign(CENTER, TOP);
    text('Click the stage: "' + quizQuestion.text + '"', canvasWidth / 2, 34, canvasWidth - 40);
  } else {
    fill('#666');
    textSize(12);
    text('Hover over a stage to learn more. Press "Send Info" to animate.', canvasWidth / 2, 34);
  }

  let pos = getStagePositions();

  // Detect hover
  hoveredStage = '';
  for (let key in pos) {
    let p = pos[key];
    if (mouseX >= p.x && mouseX <= p.x + p.w && mouseY >= p.y && mouseY <= p.y + p.h) {
      hoveredStage = key;
    }
  }

  // Draw arrows between stages
  let arrowY = pos.working.y + pos.working.h / 2;

  // Sensory -> Working (attention arrow)
  stroke('#999');
  strokeWeight(2);
  let a1Start = pos.sensory.x + pos.sensory.w;
  let a1End = pos.working.x;
  drawArrowLine(a1Start + 5, arrowY - 5, a1End - 5, arrowY - 5);

  noStroke();
  fill('#777');
  textAlign(CENTER, BOTTOM);
  textSize(10);
  textStyle(ITALIC);
  text('attention', (a1Start + a1End) / 2, arrowY - 12);
  textStyle(NORMAL);

  // Working -> LTM (encoding arrow)
  stroke('#999');
  strokeWeight(2);
  let a2Start = pos.working.x + pos.working.w;
  let a2End = pos.longterm.x;
  drawArrowLine(a2Start + 5, arrowY - 5, a2End - 5, arrowY - 5);

  noStroke();
  fill('#777');
  textAlign(CENTER, BOTTOM);
  textSize(10);
  textStyle(ITALIC);
  text('encoding', (a2Start + a2End) / 2, arrowY - 12);
  textStyle(NORMAL);

  // LTM -> Working (retrieval arrow, dashed)
  stroke('#999');
  strokeWeight(2);
  drawingContext.setLineDash([4, 4]);
  drawArrowLine(a2End - 5, arrowY + 12, a2Start + 5, arrowY + 12);
  drawingContext.setLineDash([]);

  noStroke();
  fill('#777');
  textAlign(CENTER, TOP);
  textSize(10);
  textStyle(ITALIC);
  text('retrieval', (a2Start + a2End) / 2, arrowY + 18);
  textStyle(NORMAL);

  // Draw stages
  for (let key in stages) {
    let p = pos[key];
    let s = stages[key];
    let isHovered = (hoveredStage === key);
    let isCorrectAnswer = (feedbackTimer > 0 && quizQuestion && quizQuestion.answer === key);

    if (isCorrectAnswer && quizFeedback.startsWith('Correct')) {
      fill('#4CAF50');
    } else if (isCorrectAnswer) {
      fill('#4CAF50');
    } else if (isHovered) {
      let c = color(s.color);
      fill(red(c), green(c), blue(c), 220);
    } else {
      fill(s.color);
    }

    stroke('#fff');
    strokeWeight(2);

    if (key === 'sensory') {
      // Funnel shape
      beginShape();
      vertex(p.x + 10, p.y);
      vertex(p.x + p.w - 10, p.y);
      vertex(p.x + p.w, p.y + p.h);
      vertex(p.x, p.y + p.h);
      endShape(CLOSE);
    } else if (key === 'longterm') {
      // Wide rounded
      rect(p.x, p.y, p.w, p.h, 8);
      // Bookshelf lines inside
      stroke(255, 255, 255, 50);
      strokeWeight(1);
      for (let ly = p.y + 25; ly < p.y + p.h - 10; ly += 20) {
        line(p.x + 10, ly, p.x + p.w - 10, ly);
      }
    } else {
      rect(p.x, p.y, p.w, p.h, 8);
    }

    // Stage label
    noStroke();
    fill('#fff');
    textAlign(CENTER, CENTER);
    textSize(13);
    textStyle(BOLD);
    text(s.name, p.x + p.w / 2, p.y + p.h / 2 - 10);
    textStyle(NORMAL);
    textSize(10);
    text(s.capacity, p.x + p.w / 2, p.y + p.h / 2 + 8);
    text(s.duration, p.x + p.w / 2, p.y + p.h / 2 + 22);
  }

  // Duration comparison bar
  let barY = pos.sensory.y + pos.sensory.h + 40;
  noStroke();
  fill('#1a3a6c');
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text('Duration Comparison', pos.sensory.x, barY);
  textStyle(NORMAL);

  barY += 22;
  let barMaxW = canvasWidth - pos.sensory.x * 2;
  let durations = [
    { name: 'Sensory', val: 3, maxVal: 100, color: '#5BA8C8', label: '0.25-3 sec' },
    { name: 'Working', val: 30, maxVal: 100, color: '#F5A623', label: '15-30 sec' },
    { name: 'Long-Term', val: 100, maxVal: 100, color: '#4A90D9', label: 'Years to lifetime' }
  ];

  for (let i = 0; i < durations.length; i++) {
    let d = durations[i];
    let by = barY + i * 22;
    let bw = barMaxW * 0.6 * (d.val / d.maxVal);

    fill(d.color);
    rect(pos.sensory.x + 80, by, bw, 16, 3);

    fill('#333');
    textAlign(RIGHT, CENTER);
    textSize(10);
    text(d.name, pos.sensory.x + 75, by + 8);

    fill('#555');
    textAlign(LEFT, CENTER);
    text(d.label, pos.sensory.x + 85 + bw, by + 8);
  }

  // Animate particles
  animPhase += 0.02;
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.progress += p.speed;

    let startPos, endPos;
    if (p.targetStage === 1) {
      startPos = { x: pos.sensory.x + pos.sensory.w / 2, y: pos.sensory.y + pos.sensory.h / 2 };
      endPos = { x: pos.working.x + pos.working.w / 2, y: pos.working.y + pos.working.h / 2 };
    } else {
      startPos = { x: pos.working.x + pos.working.w / 2, y: pos.working.y + pos.working.h / 2 };
      endPos = { x: pos.longterm.x + pos.longterm.w / 2, y: pos.longterm.y + pos.longterm.h / 2 };
    }

    p.x = lerp(startPos.x, endPos.x, p.progress);
    p.y = lerp(startPos.y, endPos.y, p.progress);

    // Draw particle with glow
    noStroke();
    for (let r = 14; r > 4; r -= 3) {
      fill(255, 165, 0, map(r, 4, 14, 180, 30));
      ellipse(p.x, p.y, r * 2, r * 2);
    }
    fill('#FF8C00');
    ellipse(p.x, p.y, 10, 10);

    if (p.progress >= 1) {
      if (p.targetStage === 1) {
        p.targetStage = 2;
        p.progress = 0;
        p.speed = 0.01; // slower for encoding
      } else {
        particles.splice(i, 1);
      }
    }
  }

  // Tooltip
  if (mode === 'Explore' && hoveredStage && stages[hoveredStage]) {
    drawTooltip(hoveredStage);
  }

  // Quiz feedback
  if (mode === 'Quiz' && feedbackTimer > 0) {
    noStroke();
    fill(quizFeedback.startsWith('Correct') ? '#2E7D32' : '#C62828');
    textAlign(CENTER, BOTTOM);
    textSize(12);
    textStyle(BOLD);
    text(quizFeedback, canvasWidth / 2, drawHeight - 8, canvasWidth - 40);
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

function drawArrowLine(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  let angle = atan2(y2 - y1, x2 - x1);
  let arrowSize = 7;
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
  let s = stages[key];
  let tw = min(300, canvasWidth - 20);
  let th = 110;
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

  fill(s.color);
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text(s.name, tx + 10, py);
  textStyle(NORMAL);
  py += 18;

  fill('#333');
  textSize(10);
  text('Capacity: ' + s.capacity, tx + 10, py);
  py += 14;
  text('Duration: ' + s.duration, tx + 10, py);
  py += 14;

  fill('#555');
  text('Example: ' + s.example, tx + 10, py, tw - 20);
  py += 26;

  fill('#1a3a6c');
  textSize(10);
  text('Next stage: ' + s.mechanism, tx + 10, py, tw - 20);
}

function mousePressed() {
  if (modeSelect.value() !== 'Quiz' || !quizQuestion || feedbackTimer > 0) return;
  if (!hoveredStage) return;

  score.total++;
  if (hoveredStage === quizQuestion.answer) {
    score.correct++;
    quizFeedback = 'Correct! That describes ' + stages[quizQuestion.answer].name + '.';
  } else {
    quizFeedback = 'Not quite. The answer is ' + stages[quizQuestion.answer].name + '.';
  }
  feedbackTimer = 180;
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
