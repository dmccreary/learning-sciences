// IRT Ability-vs-Difficulty Explorer
// Rasch 1PL and optional 2PL item response curves

let canvasWidth = 600;
let drawHeight = 440;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let plotLeft = 70;
let plotRight = 30;
let plotTop = 45;
let plotBottom = 70;

let abilitySlider, difficultySlider, discrimSlider;
let show2PLCheckbox, showInfoCheckbox, resetBtn;

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

  // Row 1
  let lbl1 = createDiv('Ability (theta): ');
  lbl1.parent(document.querySelector('main'));
  lbl1.style('font-size', '13px');
  lbl1.style('display', 'inline-block');
  lbl1.style('margin-left', '10px');
  lbl1.style('margin-top', '6px');

  abilitySlider = createSlider(-4, 4, 0, 0.1);
  abilitySlider.parent(document.querySelector('main'));
  abilitySlider.style('width', '120px');
  abilitySlider.style('display', 'inline-block');
  abilitySlider.style('vertical-align', 'middle');

  let lbl2 = createDiv('Difficulty (b): ');
  lbl2.parent(document.querySelector('main'));
  lbl2.style('font-size', '13px');
  lbl2.style('display', 'inline-block');
  lbl2.style('margin-left', '15px');

  difficultySlider = createSlider(-4, 4, 0, 0.1);
  difficultySlider.parent(document.querySelector('main'));
  difficultySlider.style('width', '120px');
  difficultySlider.style('display', 'inline-block');
  difficultySlider.style('vertical-align', 'middle');

  let br1 = createDiv('');
  br1.parent(document.querySelector('main'));
  br1.style('height', '4px');

  show2PLCheckbox = createCheckbox('Show 2PL (add discrimination)', false);
  show2PLCheckbox.parent(document.querySelector('main'));
  show2PLCheckbox.style('font-size', '13px');
  show2PLCheckbox.style('display', 'inline-block');
  show2PLCheckbox.style('margin-left', '10px');

  let lbl3 = createDiv(' a = ');
  lbl3.parent(document.querySelector('main'));
  lbl3.style('font-size', '13px');
  lbl3.style('display', 'inline-block');
  lbl3.style('margin-left', '10px');

  discrimSlider = createSlider(0.2, 2.5, 1.0, 0.1);
  discrimSlider.parent(document.querySelector('main'));
  discrimSlider.style('width', '100px');
  discrimSlider.style('display', 'inline-block');
  discrimSlider.style('vertical-align', 'middle');

  showInfoCheckbox = createCheckbox('Show Information Curve', false);
  showInfoCheckbox.parent(document.querySelector('main'));
  showInfoCheckbox.style('font-size', '13px');
  showInfoCheckbox.style('display', 'inline-block');
  showInfoCheckbox.style('margin-left', '15px');

  let br2 = createDiv('');
  br2.parent(document.querySelector('main'));
  br2.style('height', '4px');

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '10px');
  resetBtn.mousePressed(() => {
    abilitySlider.value(0);
    difficultySlider.value(0);
    discrimSlider.value(1.0);
    show2PLCheckbox.checked(false);
    showInfoCheckbox.checked(false);
  });

  describe('Item Response Theory explorer showing probability of correct response as a function of ability and item difficulty');
}

function ircProb(theta, b, a) {
  return 1 / (1 + Math.exp(-a * (theta - b)));
}

function ircInfo(theta, b, a) {
  let p = ircProb(theta, b, a);
  return a * a * p * (1 - p);
}

function draw() {
  background(255);

  let theta = abilitySlider.value();
  let b = difficultySlider.value();
  let aParam = show2PLCheckbox.checked() ? discrimSlider.value() : 1.0;
  let showInfo = showInfoCheckbox.checked();

  let pw = canvasWidth - plotLeft - plotRight;
  let ph = drawHeight - plotTop - plotBottom;

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Plot background
  fill(255);
  noStroke();
  rect(plotLeft, plotTop, pw, ph);

  // Qualitative zone shading
  // Too easy: P > 0.85 (theta - b > ~1.7 for Rasch)
  // At edge: 0.5 <= P <= 0.85
  // Too hard: P < 0.35
  fill(200, 240, 200, 60); // easy zone
  noStroke();
  rect(plotLeft, plotTop, pw, ph * 0.15);

  fill(240, 240, 200, 60); // edge zone
  rect(plotLeft, plotTop + ph * 0.15, pw, ph * 0.35);

  fill(240, 210, 210, 60); // hard zone
  rect(plotLeft, plotTop + ph * 0.65, pw, ph * 0.35);

  // Zone labels
  noStroke();
  fill(100);
  textSize(9);
  textAlign(RIGHT, CENTER);
  text('Too easy (P>0.85)', plotLeft + pw - 5, plotTop + ph * 0.08);
  text('Edge of ability', plotLeft + pw - 5, plotTop + ph * 0.35);
  text('Too hard (P<0.35)', plotLeft + pw - 5, plotTop + ph * 0.82);

  // Grid
  stroke(230);
  strokeWeight(0.5);
  for (let i = 0; i <= 8; i++) {
    let x = plotLeft + (i / 8) * pw;
    line(x, plotTop, x, plotTop + ph);
  }
  for (let i = 0; i <= 10; i++) {
    let y = plotTop + (i / 10) * ph;
    line(plotLeft, y, plotLeft + pw, y);
  }

  // Axes
  stroke(80);
  strokeWeight(1.5);
  line(plotLeft, plotTop, plotLeft, plotTop + ph);
  line(plotLeft, plotTop + ph, plotLeft + pw, plotTop + ph);

  function toX(t) { return plotLeft + ((t + 4) / 8) * pw; }
  function toY(p) { return plotTop + ph - p * ph; }

  // Draw ICC curve
  noFill();
  stroke(41, 128, 185);
  strokeWeight(2.5);
  beginShape();
  for (let t = -4; t <= 4; t += 0.05) {
    let p = ircProb(t, b, aParam);
    vertex(toX(t), toY(p));
  }
  endShape();

  // Information curve
  if (showInfo) {
    let maxInfo = aParam * aParam * 0.25; // max info at p=0.5
    noFill();
    stroke(46, 204, 113);
    strokeWeight(2);
    beginShape();
    for (let t = -4; t <= 4; t += 0.05) {
      let info = ircInfo(t, b, aParam);
      let y = plotTop + ph - (info / maxInfo) * ph * 0.5; // scale to half height
      vertex(toX(t), y);
    }
    endShape();
  }

  // Difficulty vertical line
  stroke(231, 76, 60, 180);
  strokeWeight(1.5);
  drawingContext.setLineDash([4, 4]);
  line(toX(b), plotTop, toX(b), plotTop + ph);
  drawingContext.setLineDash([]);

  // Ability marker and probability
  let pAtTheta = ircProb(theta, b, aParam);

  // Horizontal probability line
  stroke(120, 120, 120, 150);
  strokeWeight(1);
  drawingContext.setLineDash([3, 3]);
  line(plotLeft, toY(pAtTheta), toX(theta), toY(pAtTheta));
  // Vertical from ability to curve
  line(toX(theta), toY(pAtTheta), toX(theta), plotTop + ph);
  drawingContext.setLineDash([]);

  // Intersection dot
  fill(41, 128, 185);
  noStroke();
  ellipse(toX(theta), toY(pAtTheta), 12, 12);

  // Axis labels
  noStroke();
  fill(60);
  textSize(11);
  textAlign(CENTER, TOP);
  for (let t = -4; t <= 4; t += 1) {
    text(t, toX(t), plotTop + ph + 5);
  }
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= 10; i += 2) {
    let p = i / 10;
    text(p.toFixed(1), plotLeft - 8, toY(p));
  }

  // Axis titles
  textSize(13);
  textAlign(CENTER, TOP);
  fill(40);
  text('Ability (theta)', plotLeft + pw / 2, plotTop + ph + 22);

  push();
  translate(18, plotTop + ph / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  text('P(correct)', 0, 0);
  pop();

  // Title
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  let titleText = show2PLCheckbox.checked() ? 'IRT 2PL: P = 1/(1 + e^(-a(theta-b)))' : 'IRT Rasch Model: P = 1/(1 + e^(-(theta-b)))';
  text(titleText, canvasWidth / 2, 8);

  // Labels on the plot
  noStroke();
  fill(231, 76, 60);
  textSize(10);
  textAlign(CENTER, BOTTOM);
  text('b=' + b.toFixed(1), toX(b), plotTop - 2);

  fill(41, 128, 185);
  textAlign(CENTER, TOP);
  text('theta=' + theta.toFixed(1), toX(theta), plotTop + ph + 5);

  // Legend
  let legendX = plotLeft + 10;
  let legendY = plotTop + 10;
  fill(255, 255, 255, 220);
  stroke(200);
  strokeWeight(1);
  rect(legendX, legendY, showInfo ? 160 : 130, showInfo ? 52 : 35, 4);
  noStroke();

  stroke(41, 128, 185);
  strokeWeight(2.5);
  line(legendX + 8, legendY + 14, legendX + 28, legendY + 14);
  noStroke();
  fill(60);
  textSize(10);
  textAlign(LEFT, CENTER);
  text('ICC (Item Characteristic)', legendX + 33, legendY + 14);

  if (showInfo) {
    stroke(46, 204, 113);
    strokeWeight(2);
    line(legendX + 8, legendY + 34, legendX + 28, legendY + 34);
    noStroke();
    fill(60);
    text('Information Curve', legendX + 33, legendY + 34);
  }

  // Caption below
  let capY = plotTop + ph + 40;
  noStroke();
  fill(40);
  textSize(12);
  textAlign(CENTER, TOP);
  text('P(theta, b) = ' + pAtTheta.toFixed(3), canvasWidth / 2, capY);

  // Qualitative zone label
  let zone;
  if (pAtTheta > 0.85) zone = 'Too easy for this learner';
  else if (pAtTheta >= 0.5) zone = 'At the edge of ability (optimal for measurement)';
  else if (pAtTheta >= 0.35) zone = 'Challenging but reachable';
  else zone = 'Too hard for this learner';

  fill(80);
  textSize(11);
  text(zone, canvasWidth / 2, capY + 18);

  if (show2PLCheckbox.checked()) {
    fill(100);
    textSize(10);
    text('Discrimination a = ' + aParam.toFixed(1), canvasWidth / 2, capY + 35);
  }
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
