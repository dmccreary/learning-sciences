// Flow Channel Explorer - Interactive MicroSim
// Challenge vs Skill plot with flow/anxiety/boredom zones

let canvasWidth = 600;
let drawHeight = 480;
let controlHeight = 70;
let canvasHeight = drawHeight + controlHeight;

let challengeSlider, skillSlider, trajectoryCheckbox, resetBtn;
let trajectory = [];
let showTrajectory = false;

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

  let challengeLabel = createSpan('Challenge: ');
  challengeLabel.parent(document.querySelector('main'));
  challengeLabel.style('font-size', '13px');
  challengeLabel.style('margin-left', '8px');

  challengeSlider = createSlider(0, 100, 50, 1);
  challengeSlider.parent(document.querySelector('main'));
  challengeSlider.style('width', '120px');
  challengeSlider.style('margin', '4px');

  let skillLabel = createSpan(' Skill: ');
  skillLabel.parent(document.querySelector('main'));
  skillLabel.style('font-size', '13px');

  skillSlider = createSlider(0, 100, 50, 1);
  skillSlider.parent(document.querySelector('main'));
  skillSlider.style('width', '120px');
  skillSlider.style('margin', '4px');

  trajectoryCheckbox = createCheckbox('Show trajectory', false);
  trajectoryCheckbox.parent(document.querySelector('main'));
  trajectoryCheckbox.style('font-size', '13px');
  trajectoryCheckbox.style('margin', '4px 8px');
  trajectoryCheckbox.changed(() => {
    showTrajectory = trajectoryCheckbox.checked();
    if (!showTrajectory) trajectory = [];
  });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('font-size', '14px');
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('margin', '4px');
  resetBtn.mousePressed(() => {
    challengeSlider.value(50);
    skillSlider.value(50);
    trajectory = [];
  });

  describe('Flow channel diagram showing challenge on the y-axis and skill on the x-axis. A diagonal band represents the flow zone, with anxiety above and boredom below.');
}

function getPlotBounds() {
  let margin = 60;
  let right = canvasWidth - 30;
  let top = 50;
  let bottom = drawHeight - 30;
  return { left: margin, right: right, top: top, bottom: bottom };
}

function getZone(challenge, skill) {
  let diff = challenge - skill;
  if (abs(diff) <= 15) return { name: 'Flow', color: '#4CAF50' };
  if (diff > 15 && diff <= 35) return { name: 'Mild Anxiety', color: '#FFC107' };
  if (diff > 35) return { name: 'Panic', color: '#F44336' };
  if (diff < -15 && diff >= -35) return { name: 'Mild Boredom', color: '#90CAF9' };
  return { name: 'Apathy', color: '#78909C' };
}

function draw() {
  let challenge = challengeSlider.value();
  let skill = skillSlider.value();

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
  text('The Flow Channel', canvasWidth / 2, 10);

  let b = getPlotBounds();
  let plotW = b.right - b.left;
  let plotH = b.bottom - b.top;

  // Draw zone backgrounds
  noStroke();

  // Anxiety zone (above diagonal)
  fill(255, 193, 7, 40);
  beginShape();
  vertex(b.left, b.top);
  vertex(b.right, b.top);
  vertex(b.right, b.top + plotH * 0.35);
  vertex(b.left, b.bottom - plotH * 0.15);
  endShape(CLOSE);

  // Panic zone (far above)
  fill(244, 67, 54, 30);
  beginShape();
  vertex(b.left, b.top);
  vertex(b.right, b.top);
  vertex(b.right, b.top + plotH * 0.15);
  vertex(b.left, b.bottom - plotH * 0.35);
  endShape(CLOSE);

  // Flow channel (diagonal band)
  fill(76, 175, 80, 50);
  beginShape();
  vertex(b.left, b.bottom - plotH * 0.15);
  vertex(b.right, b.top + plotH * 0.35);
  vertex(b.right, b.top + plotH * 0.65);
  vertex(b.left, b.bottom + plotH * 0.15);
  endShape(CLOSE);

  // Boredom zone (below diagonal)
  fill(144, 202, 249, 40);
  beginShape();
  vertex(b.left, b.bottom + plotH * 0.15);
  vertex(b.right, b.top + plotH * 0.65);
  vertex(b.right, b.bottom);
  vertex(b.left, b.bottom);
  endShape(CLOSE);

  // Apathy zone (far below)
  fill(120, 144, 156, 30);
  beginShape();
  vertex(b.left, b.bottom);
  vertex(b.right, b.top + plotH * 0.85);
  vertex(b.right, b.bottom);
  endShape(CLOSE);

  // Zone labels
  noStroke();
  fill(244, 67, 54, 150);
  textAlign(CENTER, CENTER);
  textSize(14);
  textStyle(BOLD);
  text('PANIC', b.left + plotW * 0.25, b.top + plotH * 0.12);

  fill(255, 193, 7, 180);
  text('ANXIETY', b.left + plotW * 0.2, b.top + plotH * 0.3);

  fill(76, 175, 80, 180);
  textSize(16);
  // Rotate flow label along diagonal
  push();
  translate(b.left + plotW * 0.5, b.top + plotH * 0.5);
  rotate(-atan2(plotH, plotW));
  text('FLOW', 0, 0);
  pop();

  fill(100, 181, 246, 180);
  textSize(14);
  text('BOREDOM', b.left + plotW * 0.75, b.top + plotH * 0.75);

  fill(120, 144, 156, 150);
  text('APATHY', b.left + plotW * 0.85, b.top + plotH * 0.9);
  textStyle(NORMAL);

  // Axes
  stroke('#333');
  strokeWeight(2);
  line(b.left, b.bottom, b.right, b.bottom); // x-axis
  line(b.left, b.bottom, b.left, b.top); // y-axis

  // Axis labels
  noStroke();
  fill('#333');
  textAlign(CENTER, TOP);
  textSize(13);
  textStyle(BOLD);
  text('Skill Level', b.left + plotW / 2, b.bottom + 5);

  push();
  translate(b.left - 40, b.top + plotH / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, CENTER);
  text('Challenge Level', 0, 0);
  pop();
  textStyle(NORMAL);

  // Axis ticks
  textSize(10);
  fill('#666');
  textAlign(CENTER, TOP);
  for (let v = 0; v <= 100; v += 25) {
    let x = map(v, 0, 100, b.left, b.right);
    stroke('#ccc');
    strokeWeight(1);
    line(x, b.bottom, x, b.bottom + 4);
    noStroke();
    text(v, x, b.bottom + 6);
  }
  textAlign(RIGHT, CENTER);
  for (let v = 0; v <= 100; v += 25) {
    let y = map(v, 0, 100, b.bottom, b.top);
    stroke('#ccc');
    strokeWeight(1);
    line(b.left - 4, y, b.left, y);
    noStroke();
    text(v, b.left - 6, y);
  }

  // Trajectory
  if (showTrajectory) {
    let px = map(skill, 0, 100, b.left, b.right);
    let py = map(challenge, 0, 100, b.bottom, b.top);
    if (trajectory.length === 0 || dist(px, py, trajectory[trajectory.length - 1].x, trajectory[trajectory.length - 1].y) > 2) {
      trajectory.push({ x: px, y: py });
      if (trajectory.length > 200) trajectory.shift();
    }

    noFill();
    for (let i = 1; i < trajectory.length; i++) {
      let alpha = map(i, 0, trajectory.length, 30, 200);
      stroke(255, 140, 0, alpha);
      strokeWeight(2);
      line(trajectory[i - 1].x, trajectory[i - 1].y, trajectory[i].x, trajectory[i].y);
    }
  }

  // Learner marker
  let mx = map(skill, 0, 100, b.left, b.right);
  let my = map(challenge, 0, 100, b.bottom, b.top);
  let zone = getZone(challenge, skill);

  // Glow
  noStroke();
  for (let r = 24; r > 8; r -= 4) {
    let c = color(zone.color);
    fill(red(c), green(c), blue(c), map(r, 8, 24, 150, 20));
    ellipse(mx, my, r * 2, r * 2);
  }

  // Marker
  fill(zone.color);
  stroke('#fff');
  strokeWeight(2);
  ellipse(mx, my, 18, 18);

  // Zone label next to marker
  noStroke();
  fill('#333');
  textAlign(LEFT, CENTER);
  textSize(14);
  textStyle(BOLD);
  let labelX = mx + 16;
  if (labelX + 100 > b.right) labelX = mx - 100;
  text(zone.name, labelX, my);
  textStyle(NORMAL);

  // Current values display
  fill('#555');
  textAlign(RIGHT, TOP);
  textSize(12);
  text('Challenge: ' + challenge + '  |  Skill: ' + skill, canvasWidth - 15, 12);

  // Control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
