// Cognitive Load Budget - Interactive MicroSim
// Stacked bar showing intrinsic/extraneous/germane load with capacity slider

let canvasWidth = 600;
let drawHeight = 420;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let intrinsicSlider, extraneousSlider, germaneSlider, capacitySlider;
let scenarioSelect, resetBtn;

const scenarios = {
  'Custom': { intrinsic: 4, extraneous: 3, germane: 3, capacity: 10 },
  'Novice + bad diagram': { intrinsic: 8, extraneous: 7, germane: 2, capacity: 10 },
  'Expert + clean design': { intrinsic: 2, extraneous: 1, germane: 4, capacity: 12 },
  'Overloaded learner': { intrinsic: 6, extraneous: 5, germane: 4, capacity: 8 },
  'Well-designed chapter': { intrinsic: 5, extraneous: 2, germane: 5, capacity: 12 }
};

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

  // Row 1 controls
  let r1 = createDiv('');
  r1.parent(document.querySelector('main'));
  r1.style('margin', '4px 8px');

  let iLabel = createSpan('Intrinsic: ');
  iLabel.parent(r1);
  iLabel.style('font-size', '12px');
  intrinsicSlider = createSlider(0, 10, 4, 1);
  intrinsicSlider.parent(r1);
  intrinsicSlider.style('width', '80px');

  let eLabel = createSpan(' Extraneous: ');
  eLabel.parent(r1);
  eLabel.style('font-size', '12px');
  extraneousSlider = createSlider(0, 10, 3, 1);
  extraneousSlider.parent(r1);
  extraneousSlider.style('width', '80px');

  let gLabel = createSpan(' Germane: ');
  gLabel.parent(r1);
  gLabel.style('font-size', '12px');
  germaneSlider = createSlider(0, 10, 3, 1);
  germaneSlider.parent(r1);
  germaneSlider.style('width', '80px');

  // Row 2 controls
  let r2 = createDiv('');
  r2.parent(document.querySelector('main'));
  r2.style('margin', '4px 8px');

  let cLabel = createSpan('Capacity: ');
  cLabel.parent(r2);
  cLabel.style('font-size', '12px');
  capacitySlider = createSlider(5, 15, 10, 1);
  capacitySlider.parent(r2);
  capacitySlider.style('width', '100px');

  let sLabel = createSpan(' Scenario: ');
  sLabel.parent(r2);
  sLabel.style('font-size', '12px');
  scenarioSelect = createSelect();
  scenarioSelect.parent(r2);
  for (let s in scenarios) {
    scenarioSelect.option(s);
  }
  scenarioSelect.selected('Custom');
  scenarioSelect.style('font-size', '13px');
  scenarioSelect.style('padding', '2px 6px');
  scenarioSelect.changed(applyScenario);

  resetBtn = createButton('Reset');
  resetBtn.parent(r2);
  resetBtn.style('font-size', '13px');
  resetBtn.style('padding', '3px 10px');
  resetBtn.style('margin-left', '8px');
  resetBtn.mousePressed(() => {
    scenarioSelect.selected('Custom');
    applyScenario();
  });

  describe('Cognitive load budget visualization showing intrinsic, extraneous, and germane load as stacked colored bars against a capacity limit.');
}

function applyScenario() {
  let s = scenarios[scenarioSelect.value()];
  if (s) {
    intrinsicSlider.value(s.intrinsic);
    extraneousSlider.value(s.extraneous);
    germaneSlider.value(s.germane);
    capacitySlider.value(s.capacity);
  }
}

function draw() {
  let intrinsic = intrinsicSlider.value();
  let extraneous = extraneousSlider.value();
  let germane = germaneSlider.value();
  let capacity = capacitySlider.value();
  let total = intrinsic + extraneous + germane;

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
  text('The Cognitive Load Budget', canvasWidth / 2, 10);

  // Subtitle with formula
  fill('#555');
  textSize(12);
  text('Intrinsic + Extraneous + Germane  ≤  Working Memory Capacity', canvasWidth / 2, 35);

  // Main bar area
  let barLeft = 80;
  let barRight = canvasWidth - 160;
  let barW = barRight - barLeft;
  let barY = 100;
  let barH = 60;
  let maxVal = 15; // max capacity value

  // Background capacity bar
  let capW = barW * (capacity / maxVal);
  fill('#E8E8E8');
  stroke('#999');
  strokeWeight(1);
  rect(barLeft, barY, capW, barH, 4);

  // Capacity label
  noStroke();
  fill('#666');
  textAlign(LEFT, CENTER);
  textSize(11);
  text('Capacity: ' + capacity, barLeft + capW + 8, barY + barH / 2);

  // Stacked load bars
  let scale = barW / maxVal;
  let iW = intrinsic * scale;
  let eW = extraneous * scale;
  let gW = germane * scale;
  let stackX = barLeft;

  // Intrinsic (blue)
  fill('#4A90D9');
  noStroke();
  rect(stackX, barY + 4, iW, barH - 8, 3, 0, 0, 3);
  stackX += iW;

  // Extraneous (red)
  fill('#E8543A');
  rect(stackX, barY + 4, eW, barH - 8);
  stackX += eW;

  // Germane (green)
  fill('#7ED321');
  rect(stackX, barY + 4, gW, barH - 8, 0, 3, 3, 0);

  // Overflow indicator
  let totalW = (intrinsic + extraneous + germane) * scale;
  if (total > capacity) {
    stroke('#C62828');
    strokeWeight(3);
    noFill();
    let overflowStart = barLeft + capW;
    let overflowEnd = barLeft + totalW;
    // Draw hatching over overflow area
    for (let x = overflowStart; x < overflowEnd; x += 8) {
      line(x, barY + 4, x + 4, barY + barH - 4);
    }
  }

  // Capacity line
  stroke('#333');
  strokeWeight(2);
  drawingContext.setLineDash([4, 4]);
  line(barLeft + capW, barY - 10, barLeft + capW, barY + barH + 10);
  drawingContext.setLineDash([]);

  // Legend
  let legendY = barY + barH + 30;
  let legendX = barLeft;

  noStroke();
  fill('#4A90D9');
  rect(legendX, legendY, 16, 16, 3);
  fill('#333');
  textAlign(LEFT, CENTER);
  textSize(12);
  text('Intrinsic (' + intrinsic + ')', legendX + 22, legendY + 8);

  legendX += 130;
  fill('#E8543A');
  rect(legendX, legendY, 16, 16, 3);
  fill('#333');
  text('Extraneous (' + extraneous + ')', legendX + 22, legendY + 8);

  legendX += 150;
  fill('#7ED321');
  rect(legendX, legendY, 16, 16, 3);
  fill('#333');
  text('Germane (' + germane + ')', legendX + 22, legendY + 8);

  // Status indicator
  let statusY = legendY + 45;
  let statusText, statusColor, statusIcon;
  let ratio = total / capacity;

  if (ratio <= 0.75) {
    statusText = 'Learning';
    statusColor = '#2E7D32';
    statusIcon = 'Room to learn — germane load has space to build schemas.';
  } else if (ratio <= 1.0) {
    statusText = 'On the Edge';
    statusColor = '#E65100';
    statusIcon = 'Total load is near capacity. Any increase risks overload.';
  } else {
    statusText = 'Overloaded!';
    statusColor = '#C62828';
    statusIcon = 'Total load exceeds capacity. Learning breaks down.';
  }

  // Status box
  fill(statusColor);
  noStroke();
  rect(barLeft, statusY, 180, 40, 6);
  fill('#fff');
  textAlign(CENTER, CENTER);
  textSize(16);
  textStyle(BOLD);
  text(statusText, barLeft + 90, statusY + 13);
  textStyle(NORMAL);
  textSize(10);
  text('Total: ' + total + ' / ' + capacity, barLeft + 90, statusY + 30);

  // Description
  fill('#555');
  textAlign(LEFT, TOP);
  textSize(11);
  text(statusIcon, barLeft + 195, statusY + 5, canvasWidth - barLeft - 220);

  // Meter visualization
  let meterY = statusY + 60;
  let meterW = barW;
  let meterH = 20;

  // Background
  fill('#eee');
  rect(barLeft, meterY, meterW, meterH, 10);

  // Fill gradient from green to red
  let fillW = constrain(total / maxVal, 0, 1) * meterW;
  if (ratio <= 0.75) fill('#4CAF50');
  else if (ratio <= 1.0) fill('#FFC107');
  else fill('#F44336');
  rect(barLeft, meterY, fillW, meterH, 10);

  // Capacity marker on meter
  stroke('#333');
  strokeWeight(2);
  let capMark = barLeft + (capacity / maxVal) * meterW;
  line(capMark, meterY - 5, capMark, meterY + meterH + 5);
  noStroke();
  fill('#333');
  textAlign(CENTER, TOP);
  textSize(9);
  text('capacity', capMark, meterY + meterH + 7);

  // Design insights
  let insightY = meterY + 45;
  fill('#1a3a6c');
  textAlign(LEFT, TOP);
  textSize(12);
  textStyle(BOLD);
  text('Design Insight:', barLeft, insightY);
  textStyle(NORMAL);

  fill('#444');
  textSize(11);
  if (extraneous > 4) {
    text('High extraneous load — reduce split attention, remove decorative elements, simplify navigation.', barLeft, insightY + 18, barW);
  } else if (intrinsic > 6 && germane < 3) {
    text('High intrinsic load with low germane — add scaffolding (worked examples, chunking) to free resources for schema building.', barLeft, insightY + 18, barW);
  } else if (total <= capacity && germane >= 4) {
    text('Good balance — sufficient germane load for schema construction within capacity limits.', barLeft, insightY + 18, barW);
  } else if (total > capacity) {
    text('Overloaded — reduce extraneous load first, then consider pre-training to lower intrinsic load for novices.', barLeft, insightY + 18, barW);
  } else {
    text('Adjust the sliders to explore how different load distributions affect learning outcomes.', barLeft, insightY + 18, barW);
  }

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
