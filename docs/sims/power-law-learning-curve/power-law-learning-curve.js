// Power-Law Learning Curve
// Plots T = a * N^(-b) with raw vs deliberate practice curves

let canvasWidth = 600;
let drawHeight = 420;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let plotLeft = 70;
let plotRight = 30;
let plotTop = 45;
let plotBottom = 55;

let rawExpSlider, delibExpSlider, hoursSlider, logToggle, resetBtn;

let defaultRaw = 0.2;
let defaultDelib = 0.4;
let defaultHours = 100;
let a = 100; // initial time per trial

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

  let lbl1 = createDiv('Raw Exponent (b): ');
  lbl1.parent(document.querySelector('main'));
  lbl1.style('font-size', '13px');
  lbl1.style('display', 'inline-block');
  lbl1.style('margin-left', '10px');
  lbl1.style('margin-top', '6px');

  rawExpSlider = createSlider(0.1, 0.6, defaultRaw, 0.05);
  rawExpSlider.parent(document.querySelector('main'));
  rawExpSlider.style('width', '100px');
  rawExpSlider.style('display', 'inline-block');
  rawExpSlider.style('vertical-align', 'middle');

  let lbl2 = createDiv('Deliberate Exponent (b): ');
  lbl2.parent(document.querySelector('main'));
  lbl2.style('font-size', '13px');
  lbl2.style('display', 'inline-block');
  lbl2.style('margin-left', '15px');

  delibExpSlider = createSlider(0.1, 0.6, defaultDelib, 0.05);
  delibExpSlider.parent(document.querySelector('main'));
  delibExpSlider.style('width', '100px');
  delibExpSlider.style('display', 'inline-block');
  delibExpSlider.style('vertical-align', 'middle');

  let br1 = createDiv('');
  br1.parent(document.querySelector('main'));
  br1.style('height', '4px');

  let lbl3 = createDiv('Practice Hours: ');
  lbl3.parent(document.querySelector('main'));
  lbl3.style('font-size', '13px');
  lbl3.style('display', 'inline-block');
  lbl3.style('margin-left', '10px');

  hoursSlider = createSlider(1, 10000, defaultHours, 1);
  hoursSlider.parent(document.querySelector('main'));
  hoursSlider.style('width', '180px');
  hoursSlider.style('display', 'inline-block');
  hoursSlider.style('vertical-align', 'middle');

  logToggle = createCheckbox('Log-Log Axes', false);
  logToggle.parent(document.querySelector('main'));
  logToggle.style('font-size', '13px');
  logToggle.style('display', 'inline-block');
  logToggle.style('margin-left', '15px');

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '15px');
  resetBtn.mousePressed(() => {
    rawExpSlider.value(defaultRaw);
    delibExpSlider.value(defaultDelib);
    hoursSlider.value(defaultHours);
    logToggle.checked(false);
  });

  describe('Power law learning curve comparing raw practice and deliberate practice improvement rates');
}

function draw() {
  background(255);

  let bRaw = rawExpSlider.value();
  let bDelib = delibExpSlider.value();
  let markerN = hoursSlider.value();
  let isLog = logToggle.checked();

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

  let maxN = 10000;
  let minN = 1;

  // Axis ranges
  let TmaxRaw = a * Math.pow(minN, -bRaw);
  let TminRaw = a * Math.pow(maxN, -bRaw);
  let TmaxDelib = a * Math.pow(minN, -bDelib);
  let Tmax = Math.max(TmaxRaw, TmaxDelib);
  let Tmin = Math.min(a * Math.pow(maxN, -bRaw), a * Math.pow(maxN, -bDelib));

  function toX(n) {
    if (isLog) {
      return plotLeft + (Math.log10(n) - Math.log10(minN)) / (Math.log10(maxN) - Math.log10(minN)) * pw;
    }
    return plotLeft + ((n - minN) / (maxN - minN)) * pw;
  }

  function toY(t) {
    if (isLog) {
      let logMax = Math.log10(Tmax);
      let logMin = Math.log10(Math.max(Tmin, 0.001));
      return plotTop + ph - ((Math.log10(Math.max(t, 0.001)) - logMin) / (logMax - logMin)) * ph;
    }
    return plotTop + ph - ((t - Tmin) / (Tmax - Tmin)) * ph;
  }

  // Grid
  stroke(235);
  strokeWeight(0.5);
  if (isLog) {
    // Log grid lines
    for (let exp = 0; exp <= 4; exp++) {
      let x = toX(Math.pow(10, exp));
      if (x >= plotLeft && x <= plotLeft + pw) {
        line(x, plotTop, x, plotTop + ph);
      }
    }
    let logMin = Math.log10(Math.max(Tmin, 0.001));
    let logMax = Math.log10(Tmax);
    for (let exp = Math.floor(logMin); exp <= Math.ceil(logMax); exp++) {
      let y = toY(Math.pow(10, exp));
      if (y >= plotTop && y <= plotTop + ph) {
        line(plotLeft, y, plotLeft + pw, y);
      }
    }
  } else {
    for (let i = 0; i <= 5; i++) {
      let x = plotLeft + (i / 5) * pw;
      line(x, plotTop, x, plotTop + ph);
      let y = plotTop + (i / 5) * ph;
      line(plotLeft, y, plotLeft + pw, y);
    }
  }

  // Axes
  stroke(80);
  strokeWeight(1.5);
  line(plotLeft, plotTop, plotLeft, plotTop + ph);
  line(plotLeft, plotTop + ph, plotLeft + pw, plotTop + ph);

  // Draw curves
  function drawCurve(b, col) {
    stroke(col);
    strokeWeight(2.5);
    noFill();
    beginShape();
    let steps = 200;
    for (let i = 0; i <= steps; i++) {
      let n;
      if (isLog) {
        n = Math.pow(10, Math.log10(minN) + (i / steps) * (Math.log10(maxN) - Math.log10(minN)));
      } else {
        n = minN + (i / steps) * (maxN - minN);
      }
      let t = a * Math.pow(n, -b);
      let x = toX(n);
      let y = toY(t);
      if (y >= plotTop && y <= plotTop + ph) {
        vertex(x, y);
      }
    }
    endShape();
  }

  drawCurve(bRaw, color(220, 60, 60));
  drawCurve(bDelib, color(60, 80, 220));

  // Marker line
  let mx = toX(markerN);
  if (mx >= plotLeft && mx <= plotLeft + pw) {
    stroke(100, 100, 100, 150);
    strokeWeight(1.5);
    drawingContext.setLineDash([5, 5]);
    line(mx, plotTop, mx, plotTop + ph);
    drawingContext.setLineDash([]);

    // Intersection dots
    let tRaw = a * Math.pow(markerN, -bRaw);
    let tDelib = a * Math.pow(markerN, -bDelib);

    let yRaw = toY(tRaw);
    let yDelib = toY(tDelib);

    noStroke();
    fill(220, 60, 60);
    if (yRaw >= plotTop && yRaw <= plotTop + ph) ellipse(mx, yRaw, 8, 8);
    fill(60, 80, 220);
    if (yDelib >= plotTop && yDelib <= plotTop + ph) ellipse(mx, yDelib, 8, 8);
  }

  // Axis labels
  noStroke();
  fill(60);
  textSize(12);
  textAlign(CENTER, TOP);
  if (isLog) {
    for (let exp = 0; exp <= 4; exp++) {
      let x = toX(Math.pow(10, exp));
      if (x >= plotLeft && x <= plotLeft + pw) {
        text('10^' + exp, x, plotTop + ph + 5);
      }
    }
  } else {
    for (let i = 0; i <= 5; i++) {
      let n = minN + (i / 5) * (maxN - minN);
      text(Math.round(n).toLocaleString(), plotLeft + (i / 5) * pw, plotTop + ph + 5);
    }
  }

  textSize(13);
  text('Practice Trials (N)', plotLeft + pw / 2, plotTop + ph + 25);

  push();
  translate(18, plotTop + ph / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  text('Time per Trial (T)', 0, 0);
  pop();

  // Title
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Power-Law Learning Curve: T = a * N^(-b)', canvasWidth / 2, 8);

  // Legend
  let legendX = plotLeft + pw - 195;
  let legendY = plotTop + 10;
  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(legendX, legendY, 185, 52, 4);
  noStroke();

  stroke(220, 60, 60);
  strokeWeight(2.5);
  line(legendX + 10, legendY + 16, legendX + 35, legendY + 16);
  noStroke();
  fill(60);
  textSize(11);
  textAlign(LEFT, CENTER);
  text('Raw Practice (b=' + bRaw.toFixed(2) + ')', legendX + 40, legendY + 16);

  stroke(60, 80, 220);
  strokeWeight(2.5);
  line(legendX + 10, legendY + 36, legendX + 35, legendY + 36);
  noStroke();
  fill(60);
  text('Deliberate (b=' + bDelib.toFixed(2) + ')', legendX + 40, legendY + 36);

  // Info text
  let tRaw = a * Math.pow(markerN, -bRaw);
  let tDelib = a * Math.pow(markerN, -bDelib);
  let ratio = tRaw / tDelib;

  noStroke();
  fill(60);
  textSize(11);
  textAlign(LEFT, BOTTOM);
  text('At N=' + markerN.toLocaleString() + ': Raw=' + tRaw.toFixed(2) + ' | Deliberate=' + tDelib.toFixed(2) + ' | Ratio: ' + ratio.toFixed(1) + 'x', plotLeft, drawHeight - 4);
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
