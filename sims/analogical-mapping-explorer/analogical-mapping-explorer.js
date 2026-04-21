// Analogical Mapping Explorer
// Drag connections between source and target domain elements

let canvasWidth = 600;
let drawHeight = 450;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let domainSelect, showStructureCheckbox, distractorSlider, resetBtn;
let dragging = false;
let dragFrom = null;
let dragMouseX = 0, dragMouseY = 0;
let mappings = []; // {sourceIdx, targetIdx}

// Domain pairs data
let domainPairs = {
  'Solar System / Atom': {
    source: { name: 'Solar System',
      items: [
        { label: 'Sun', type: 'relational', role: 'central body' },
        { label: 'Planet', type: 'relational', role: 'orbiting body' },
        { label: 'Gravity', type: 'relational', role: 'attractive force' },
        { label: 'Orbit', type: 'relational', role: 'circular path' }
      ],
      distractors: [
        { label: 'Yellow color', type: 'surface' },
        { label: 'Hot gas', type: 'surface' },
        { label: 'Rocky surface', type: 'surface' },
        { label: 'Visible light', type: 'surface' },
        { label: 'Vacuum of space', type: 'surface' }
      ]
    },
    target: { name: 'Bohr Atom',
      items: [
        { label: 'Nucleus', type: 'relational', role: 'central body' },
        { label: 'Electron', type: 'relational', role: 'orbiting body' },
        { label: 'Electrostatic force', type: 'relational', role: 'attractive force' },
        { label: 'Shell', type: 'relational', role: 'circular path' }
      ],
      distractors: [
        { label: 'Positive charge', type: 'surface' },
        { label: 'Quantum spin', type: 'surface' },
        { label: 'Wave function', type: 'surface' },
        { label: 'Energy level', type: 'surface' },
        { label: 'Subatomic size', type: 'surface' }
      ]
    },
    correctMappings: [[0,0],[1,1],[2,2],[3,3]]
  },
  'Plumbing / Circuit': {
    source: { name: 'Plumbing System',
      items: [
        { label: 'Pump', type: 'relational', role: 'energy source' },
        { label: 'Water flow', type: 'relational', role: 'flow quantity' },
        { label: 'Pressure', type: 'relational', role: 'driving force' },
        { label: 'Narrow pipe', type: 'relational', role: 'resistance' }
      ],
      distractors: [
        { label: 'Wet', type: 'surface' },
        { label: 'Copper pipes', type: 'surface' },
        { label: 'Faucet handle', type: 'surface' },
        { label: 'Water heater', type: 'surface' },
        { label: 'Drain', type: 'surface' }
      ]
    },
    target: { name: 'Electric Circuit',
      items: [
        { label: 'Battery', type: 'relational', role: 'energy source' },
        { label: 'Current', type: 'relational', role: 'flow quantity' },
        { label: 'Voltage', type: 'relational', role: 'driving force' },
        { label: 'Resistor', type: 'relational', role: 'resistance' }
      ],
      distractors: [
        { label: 'Electrons', type: 'surface' },
        { label: 'Wire color', type: 'surface' },
        { label: 'LED', type: 'surface' },
        { label: 'Circuit board', type: 'surface' },
        { label: 'Solder joints', type: 'surface' }
      ]
    },
    correctMappings: [[0,0],[1,1],[2,2],[3,3]]
  }
};

let currentSourceItems = [];
let currentTargetItems = [];

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}

function getActiveItems() {
  let key = domainSelect.value();
  let pair = domainPairs[key];
  let numDistractors = distractorSlider.value();

  currentSourceItems = pair.source.items.slice();
  currentTargetItems = pair.target.items.slice();

  for (let i = 0; i < numDistractors && i < pair.source.distractors.length; i++) {
    currentSourceItems.push(pair.source.distractors[i]);
    currentTargetItems.push(pair.target.distractors[i]);
  }
}

function setup() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  let lbl1 = createDiv('Domain Pair: ');
  lbl1.parent(document.querySelector('main'));
  lbl1.style('font-size', '13px');
  lbl1.style('display', 'inline-block');
  lbl1.style('margin-left', '10px');
  lbl1.style('margin-top', '6px');

  domainSelect = createSelect();
  domainSelect.parent(document.querySelector('main'));
  domainSelect.option('Solar System / Atom');
  domainSelect.option('Plumbing / Circuit');
  domainSelect.selected('Solar System / Atom');
  domainSelect.style('display', 'inline-block');
  domainSelect.changed(() => { mappings = []; getActiveItems(); });

  showStructureCheckbox = createCheckbox('Show Structure', false);
  showStructureCheckbox.parent(document.querySelector('main'));
  showStructureCheckbox.style('font-size', '13px');
  showStructureCheckbox.style('display', 'inline-block');
  showStructureCheckbox.style('margin-left', '15px');

  let br1 = createDiv('');
  br1.parent(document.querySelector('main'));
  br1.style('height', '4px');

  let lbl2 = createDiv('Surface Distractors: ');
  lbl2.parent(document.querySelector('main'));
  lbl2.style('font-size', '13px');
  lbl2.style('display', 'inline-block');
  lbl2.style('margin-left', '10px');

  distractorSlider = createSlider(0, 5, 0, 1);
  distractorSlider.parent(document.querySelector('main'));
  distractorSlider.style('width', '100px');
  distractorSlider.style('display', 'inline-block');
  distractorSlider.style('vertical-align', 'middle');
  distractorSlider.input(() => { mappings = []; getActiveItems(); });

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '15px');
  resetBtn.mousePressed(() => { mappings = []; });

  getActiveItems();

  describe('Analogical mapping explorer where users drag connections between source and target domain elements');
}

function getItemPositions(items, side) {
  let positions = [];
  let panelW = canvasWidth / 2 - 30;
  let startX = side === 'source' ? 20 : canvasWidth / 2 + 10;
  let startY = 80;
  let spacing = Math.min(45, (drawHeight - 120) / items.length);

  for (let i = 0; i < items.length; i++) {
    let x = side === 'source' ? startX + panelW - 10 : startX + 10;
    let y = startY + i * spacing;
    positions.push({ x: x, y: y, labelX: side === 'source' ? startX + 10 : startX + 25, item: items[i] });
  }
  return positions;
}

function draw() {
  background(255);

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  getActiveItems();
  let pair = domainPairs[domainSelect.value()];

  // Title
  noStroke();
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Analogical Mapping Explorer', canvasWidth / 2, 8);

  // Panel headers
  textSize(13);
  fill(40, 80, 160);
  textAlign(CENTER, TOP);
  text('SOURCE: ' + pair.source.name, canvasWidth / 4, 35);
  fill(160, 40, 40);
  text('TARGET: ' + pair.target.name, canvasWidth * 3 / 4, 35);

  // Divider
  stroke(200);
  strokeWeight(1);
  drawingContext.setLineDash([4, 4]);
  line(canvasWidth / 2, 55, canvasWidth / 2, drawHeight - 50);
  drawingContext.setLineDash([]);

  let srcPos = getItemPositions(currentSourceItems, 'source');
  let tgtPos = getItemPositions(currentTargetItems, 'target');

  // Draw existing mappings
  for (let m of mappings) {
    let sp = srcPos[m.sourceIdx];
    let tp = tgtPos[m.targetIdx];
    let mColor = getMappingColor(m.sourceIdx, m.targetIdx, pair);
    stroke(mColor);
    strokeWeight(2.5);
    line(sp.x, sp.y, tp.x, tp.y);
  }

  // Draw dragging line
  if (dragging && dragFrom !== null) {
    stroke(150);
    strokeWeight(2);
    drawingContext.setLineDash([3, 3]);
    line(srcPos[dragFrom].x, srcPos[dragFrom].y, mouseX, mouseY);
    drawingContext.setLineDash([]);
  }

  // Draw source items
  for (let i = 0; i < srcPos.length; i++) {
    let p = srcPos[i];
    let isDistractor = currentSourceItems[i].type === 'surface';
    fill(isDistractor ? '#ddd' : '#4a90d9');
    stroke(255);
    strokeWeight(2);
    ellipse(p.x, p.y, 16, 16);

    noStroke();
    fill(40);
    textSize(11);
    textAlign(LEFT, CENTER);
    text(currentSourceItems[i].label, p.labelX, p.y);

    if (showStructureCheckbox.checked() && currentSourceItems[i].role) {
      fill(120);
      textSize(9);
      text('(' + currentSourceItems[i].role + ')', p.labelX, p.y + 13);
    }
  }

  // Draw target items
  for (let i = 0; i < tgtPos.length; i++) {
    let p = tgtPos[i];
    let isDistractor = currentTargetItems[i].type === 'surface';
    fill(isDistractor ? '#ddd' : '#d94a4a');
    stroke(255);
    strokeWeight(2);
    ellipse(p.x, p.y, 16, 16);

    noStroke();
    fill(40);
    textSize(11);
    textAlign(LEFT, CENTER);
    text(currentTargetItems[i].label, p.labelX, p.y);

    if (showStructureCheckbox.checked() && currentTargetItems[i].role) {
      fill(120);
      textSize(9);
      text('(' + currentTargetItems[i].role + ')', p.labelX, p.y + 13);
    }
  }

  // Score
  let score = computeScore(pair);
  noStroke();
  fill(40);
  textSize(12);
  textAlign(LEFT, BOTTOM);
  text('Structural matches: ' + score.structural + ' | Surface-only: ' + score.surfaceOnly + ' | Contradictory: ' + score.contradictory, 15, drawHeight - 8);

  textAlign(RIGHT, BOTTOM);
  fill(80);
  text('Distractors: ' + distractorSlider.value(), canvasWidth - 15, drawHeight - 8);
}

function getMappingColor(si, ti, pair) {
  let srcItem = currentSourceItems[si];
  let tgtItem = currentTargetItems[ti];

  // Both relational and matching roles
  if (srcItem.type === 'relational' && tgtItem.type === 'relational' && srcItem.role === tgtItem.role) {
    return color(46, 204, 113); // green - relational match
  }
  // Surface-only match
  if (srcItem.type === 'surface' || tgtItem.type === 'surface') {
    return color(243, 156, 18); // amber - surface
  }
  // Relational but wrong mapping
  return color(231, 76, 60); // red - contradictory
}

function computeScore(pair) {
  let structural = 0, surfaceOnly = 0, contradictory = 0;
  for (let m of mappings) {
    let srcItem = currentSourceItems[m.sourceIdx];
    let tgtItem = currentTargetItems[m.targetIdx];
    if (srcItem.type === 'relational' && tgtItem.type === 'relational' && srcItem.role === tgtItem.role) {
      structural++;
    } else if (srcItem.type === 'surface' || tgtItem.type === 'surface') {
      surfaceOnly++;
    } else {
      contradictory++;
    }
  }
  return { structural, surfaceOnly, contradictory };
}

function mousePressed() {
  let srcPos = getItemPositions(currentSourceItems, 'source');
  for (let i = 0; i < srcPos.length; i++) {
    if (dist(mouseX, mouseY, srcPos[i].x, srcPos[i].y) < 12) {
      dragging = true;
      dragFrom = i;
      return;
    }
  }
}

function mouseReleased() {
  if (!dragging || dragFrom === null) {
    dragging = false;
    dragFrom = null;
    return;
  }

  let tgtPos = getItemPositions(currentTargetItems, 'target');
  for (let i = 0; i < tgtPos.length; i++) {
    if (dist(mouseX, mouseY, tgtPos[i].x, tgtPos[i].y) < 12) {
      // Check if mapping already exists
      let exists = mappings.some(m => m.sourceIdx === dragFrom && m.targetIdx === i);
      if (!exists) {
        // Remove any existing mapping from this source
        mappings = mappings.filter(m => m.sourceIdx !== dragFrom);
        mappings.push({ sourceIdx: dragFrom, targetIdx: i });
      }
      break;
    }
  }

  dragging = false;
  dragFrom = null;
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
