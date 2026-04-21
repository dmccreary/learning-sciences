// Chunking -- Novice vs. Expert Board Recall
// Chase & Simon (1973) simplified replication

let canvasWidth = 600;
let drawHeight = 470;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let conditionSelect, piecesSlider, showTimeSlider, startBtn, submitBtn, resetBtn;

let boardSize = 8;
let targetPieces = []; // {row, col, type}
let placedPieces = []; // {row, col, type}
let phase = 'ready'; // ready, showing, placing, scored
let showStartTime = 0;
let cellSize;
let selectedType = 0;
let trialResults = { meaningful: [], random: [] };

// Chess-like piece symbols
let pieceTypes = ['K', 'Q', 'R', 'B', 'N', 'P'];
let pieceColors = ['#2c3e50', '#7f8c8d'];

// Meaningful positions (clusters that form recognizable patterns)
let meaningfulPositions = [
  // Kingside castled position with pawn structure
  [[0,4,'K'],[0,7,'R'],[1,5,'P'],[1,6,'P'],[1,7,'P'],[2,5,'N'],[3,4,'P'],[7,4,'K'],[7,0,'R'],[6,0,'P'],[6,1,'P'],[6,2,'P'],[5,2,'N'],[4,3,'P'],[3,3,'B'],[6,5,'B']],
  // Open center game
  [[0,4,'K'],[0,3,'Q'],[0,0,'R'],[0,7,'R'],[1,1,'P'],[1,5,'P'],[1,6,'P'],[2,2,'B'],[2,5,'N'],[3,3,'P'],[7,4,'K'],[7,3,'Q'],[7,0,'R'],[6,1,'P'],[6,6,'P'],[5,4,'N']],
  // Endgame pattern
  [[0,4,'K'],[1,3,'P'],[1,5,'P'],[2,4,'R'],[3,2,'B'],[7,4,'K'],[6,3,'P'],[6,5,'P'],[5,4,'R'],[4,6,'N'],[3,0,'P'],[4,7,'P'],[6,0,'P'],[1,7,'P'],[5,1,'B'],[2,6,'N']]
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

  // Control container positioned over the canvas control region
  let controlBox = createDiv('');
  controlBox.parent(document.querySelector('main'));
  controlBox.style('position', 'relative');
  controlBox.style('margin-top', '-' + controlHeight + 'px');
  controlBox.style('height', controlHeight + 'px');
  controlBox.style('display', 'flex');
  controlBox.style('flex-wrap', 'wrap');
  controlBox.style('align-items', 'center');
  controlBox.style('gap', '6px');
  controlBox.style('padding', '4px 10px');
  controlBox.style('font-family', 'Arial, sans-serif');
  controlBox.style('font-size', '13px');

  // Row 1: Condition, Pieces, Show Time
  let lbl1 = createSpan('Condition:');
  lbl1.parent(controlBox);

  conditionSelect = createSelect();
  conditionSelect.parent(controlBox);
  conditionSelect.option('Meaningful');
  conditionSelect.option('Random');
  conditionSelect.selected('Meaningful');

  let lbl2 = createSpan('Pieces:');
  lbl2.parent(controlBox);

  piecesSlider = createSlider(8, 16, 12, 1);
  piecesSlider.parent(controlBox);
  piecesSlider.style('width', '80px');

  let lbl3 = createSpan('Show Time:');
  lbl3.parent(controlBox);

  showTimeSlider = createSlider(2, 10, 5, 1);
  showTimeSlider.parent(controlBox);
  showTimeSlider.style('width', '80px');

  // Row 2: Buttons
  startBtn = createButton('Start Trial');
  startBtn.parent(controlBox);
  startBtn.mousePressed(startTrial);

  submitBtn = createButton('Submit');
  submitBtn.parent(controlBox);
  submitBtn.mousePressed(scoreTrial);

  resetBtn = createButton('Reset Scores');
  resetBtn.parent(controlBox);
  resetBtn.mousePressed(() => {
    trialResults = { meaningful: [], random: [] };
    phase = 'ready';
    placedPieces = [];
  });

  describe('Board recall task based on Chase and Simon chunking experiment comparing meaningful and random piece arrangements');
}

function startTrial() {
  let numPieces = piecesSlider.value();
  let condition = conditionSelect.value();

  if (condition === 'Meaningful') {
    // Pick a random meaningful position and take first N pieces
    let posIdx = Math.floor(Math.random() * meaningfulPositions.length);
    let pos = meaningfulPositions[posIdx].slice(0, numPieces);
    targetPieces = pos.map(p => ({ row: p[0], col: p[1], type: p[2] }));
  } else {
    // Random positions
    targetPieces = [];
    let used = new Set();
    for (let i = 0; i < numPieces; i++) {
      let r, c, key;
      do {
        r = Math.floor(Math.random() * 8);
        c = Math.floor(Math.random() * 8);
        key = r + ',' + c;
      } while (used.has(key));
      used.add(key);
      targetPieces.push({ row: r, col: c, type: pieceTypes[Math.floor(Math.random() * pieceTypes.length)] });
    }
  }

  placedPieces = [];
  phase = 'showing';
  showStartTime = millis();
}

function scoreTrial() {
  if (phase !== 'placing') return;

  let correct = 0;
  for (let tp of targetPieces) {
    for (let pp of placedPieces) {
      if (pp.row === tp.row && pp.col === tp.col && pp.type === tp.type) {
        correct++;
        break;
      }
    }
  }

  let condition = conditionSelect.value().toLowerCase();
  trialResults[condition].push(correct);
  phase = 'scored';
}

function draw() {
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  // Background for the drawing area
  rect(0, 0, canvasWidth, drawHeight);
  // Background for the control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  noStroke();
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Chunking: Board Recall Task', canvasWidth / 2, 8);

  // Check show timer
  if (phase === 'showing') {
    let elapsed = (millis() - showStartTime) / 1000;
    let showTime = showTimeSlider.value();
    if (elapsed >= showTime) {
      phase = 'placing';
    }

    // Timer display
    fill(200, 50, 50);
    textSize(12);
    textAlign(CENTER, TOP);
    text('Memorize! ' + (showTime - elapsed).toFixed(1) + 's remaining', canvasWidth / 2, 28);
  }

  // Board dimensions
  let boardLeft = 20;
  cellSize = Math.min((canvasWidth * 0.55 - 40) / 8, (drawHeight - 80) / 8);
  let boardTop = 50;

  // Draw board
  drawBoard(boardLeft, boardTop, phase === 'showing' ? targetPieces : placedPieces);

  // Piece palette (for placing mode)
  if (phase === 'placing') {
    let palX = boardLeft + cellSize * 8 + 20;
    let palY = boardTop;

    noStroke();
    fill(60);
    textSize(11);
    textAlign(LEFT, TOP);
    text('Click piece, then', palX, palY);
    text('click board to place:', palX, palY + 14);

    for (let i = 0; i < pieceTypes.length; i++) {
      let py = palY + 36 + i * 35;
      fill(selectedType === i ? '#3498db' : '#ecf0f1');
      stroke(selectedType === i ? '#2980b9' : '#bdc3c7');
      strokeWeight(1);
      rect(palX, py, 30, 28, 4);

      noStroke();
      fill(40);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(pieceTypes[i], palX + 15, py + 14);
    }

    // Undo last
    fill(80);
    textSize(10);
    textAlign(LEFT, TOP);
    text('Placed: ' + placedPieces.length + '/' + targetPieces.length, palX, palY + 260);
  }

  // Phase-specific messages
  if (phase === 'ready') {
    noStroke();
    fill(100);
    textSize(12);
    textAlign(CENTER, CENTER);
    text('Click "Start Trial" to begin', boardLeft + cellSize * 4, boardTop + cellSize * 4);
  }

  if (phase === 'scored') {
    let condition = conditionSelect.value().toLowerCase();
    let results = trialResults[condition];
    let lastScore = results[results.length - 1];

    noStroke();
    fill(30);
    textSize(13);
    textAlign(CENTER, TOP);
    text('Score: ' + lastScore + '/' + targetPieces.length + ' correct', canvasWidth / 2, 28);
  }

  // Results chart
  let chartX = canvasWidth * 0.62;
  let chartY = boardTop + cellSize * 8 + 10;
  let chartAvailH = drawHeight - chartY - 30;

  if (chartAvailH < 60) {
    // Put chart to the right instead
    chartX = boardLeft + cellSize * 8 + 20;
    chartY = boardTop + 250;
    chartAvailH = drawHeight - chartY - 15;
  }

  let chartW = canvasWidth - chartX - 15;
  if (chartW < 80) chartW = 80;
  let chartH = Math.min(chartAvailH, 120);

  if (trialResults.meaningful.length > 0 || trialResults.random.length > 0) {
    drawResultsChart(chartX, chartY, chartW, chartH);
  }

  // Info
  noStroke();
  fill(80);
  textSize(10);
  textAlign(LEFT, BOTTOM);
  text('Pieces: ' + piecesSlider.value() + ' | Show time: ' + showTimeSlider.value() + 's', 10, drawHeight - 4);
}

function drawBoard(bx, by, pieces) {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      let x = bx + c * cellSize;
      let y = by + r * cellSize;
      fill((r + c) % 2 === 0 ? '#f0d9b5' : '#b58863');
      stroke(150);
      strokeWeight(0.5);
      rect(x, y, cellSize, cellSize);
    }
  }

  // Draw pieces
  for (let p of pieces) {
    let x = bx + p.col * cellSize + cellSize / 2;
    let y = by + p.row * cellSize + cellSize / 2;

    fill(p.row < 4 ? '#2c3e50' : '#ecf0f1');
    stroke(p.row < 4 ? '#1a252f' : '#95a5a6');
    strokeWeight(1.5);
    ellipse(x, y, cellSize * 0.7, cellSize * 0.7);

    noStroke();
    fill(p.row < 4 ? '#ecf0f1' : '#2c3e50');
    textSize(cellSize * 0.4);
    textAlign(CENTER, CENTER);
    text(p.type, x, y);
  }

  // Column labels
  noStroke();
  fill(100);
  textSize(9);
  textAlign(CENTER, TOP);
  for (let c = 0; c < 8; c++) {
    text(String.fromCharCode(97 + c), bx + c * cellSize + cellSize / 2, by + 8 * cellSize + 2);
  }
  textAlign(RIGHT, CENTER);
  for (let r = 0; r < 8; r++) {
    text(8 - r, bx - 4, by + r * cellSize + cellSize / 2);
  }
}

function drawResultsChart(cx, cy, cw, ch) {
  // Mini line chart
  fill(255);
  stroke(200);
  strokeWeight(1);
  rect(cx, cy, cw, ch, 4);

  noStroke();
  fill(60);
  textSize(10);
  textAlign(CENTER, BOTTOM);
  text('Score by Trial', cx + cw / 2, cy - 2);

  let maxTrials = Math.max(trialResults.meaningful.length, trialResults.random.length, 1);
  let maxScore = piecesSlider.value();
  let padX = 5, padY = 10;

  // Meaningful line (blue)
  if (trialResults.meaningful.length > 0) {
    stroke(41, 128, 185);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < trialResults.meaningful.length; i++) {
      let x = cx + padX + (i / Math.max(maxTrials - 1, 1)) * (cw - 2 * padX);
      let y = cy + ch - padY - (trialResults.meaningful[i] / maxScore) * (ch - 2 * padY);
      vertex(x, y);
    }
    endShape();
  }

  // Random line (red)
  if (trialResults.random.length > 0) {
    stroke(231, 76, 60);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < trialResults.random.length; i++) {
      let x = cx + padX + (i / Math.max(maxTrials - 1, 1)) * (cw - 2 * padX);
      let y = cy + ch - padY - (trialResults.random[i] / maxScore) * (ch - 2 * padY);
      vertex(x, y);
    }
    endShape();
  }

  // Legend
  noStroke();
  fill(41, 128, 185);
  textSize(9);
  textAlign(LEFT, TOP);
  text('Meaningful', cx + 5, cy + ch + 3);
  fill(231, 76, 60);
  text('Random', cx + 65, cy + ch + 3);
}

function mousePressed() {
  if (phase === 'placing') {
    let boardLeft = 20;
    let boardTop = 50;
    let palX = boardLeft + cellSize * 8 + 20;
    let palY = boardTop;

    // Check palette clicks
    for (let i = 0; i < pieceTypes.length; i++) {
      let py = palY + 36 + i * 35;
      if (mouseX >= palX && mouseX <= palX + 30 && mouseY >= py && mouseY <= py + 28) {
        selectedType = i;
        return;
      }
    }

    // Check board clicks
    if (mouseX >= boardLeft && mouseX < boardLeft + cellSize * 8 &&
        mouseY >= boardTop && mouseY < boardTop + cellSize * 8) {
      let col = Math.floor((mouseX - boardLeft) / cellSize);
      let row = Math.floor((mouseY - boardTop) / cellSize);

      // Remove if already placed
      let existIdx = placedPieces.findIndex(p => p.row === row && p.col === col);
      if (existIdx >= 0) {
        placedPieces.splice(existIdx, 1);
      } else {
        placedPieces.push({ row: row, col: col, type: pieceTypes[selectedType] });
      }
    }
  }
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
