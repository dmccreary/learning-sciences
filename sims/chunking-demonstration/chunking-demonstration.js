// Chunking Demonstration - Interactive MicroSim
// Flash letters, recall them, compare random vs chunked performance

let canvasWidth = 600;
let drawHeight = 450;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let flashSlider, conditionSelect, chunkCheckbox, resetBtn, startBtn;
let state = 'ready'; // ready, showing, recalling, result
let currentLetters = '';
let displayLetters = '';
let isChunked = false;
let userInput;
let showTimer = 0;
let flashDuration = 1000;

let randomResults = [];
let chunkedResults = [];
let trialCount = 0;

const randomSets = [
  'XQNTRPKVLYBF',
  'JMWDHZSRCGXB',
  'PFTHBLKWNQGZ',
  'RVXCQJNMTHWL',
  'BKZFPWDNXGTM'
];

const chunkedSets = [
  { letters: 'FBIIBMCIANASA', display: 'FBI IBM CIA NASA' },
  { letters: 'NABORBIUSAATM', display: 'NBA ORB IUS AAT M' },
  { letters: 'USABORNCPRCNN', display: 'USA BORN CPR CNN' },
  { letters: 'ATABORAAANCAA', display: 'ATA BOR AAA NCA A' },
  { letters: 'HTMLCSSJSONAPI', display: 'HTML CSS JSON API' }
];

// Simpler chunked sets for cleaner experience
const chunkSetsClean = [
  { letters: 'FBIIBMCIANASA', chunks: ['FBI', 'IBM', 'CIA', 'NASA'] },
  { letters: 'USACABORNCPR', chunks: ['USA', 'CA', 'BORN', 'CPR'] },
  { letters: 'HTMLCSSJSONAPI', chunks: ['HTML', 'CSS', 'JSON', 'API'] },
  { letters: 'NABORBNFLMLB', chunks: ['NBA', 'ORB', 'NFL', 'MLB'] },
  { letters: 'ATMSSDPHDDNA', chunks: ['ATM', 'SSD', 'PHD', 'DNA'] }
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

  startBtn = createButton('Flash Letters');
  startBtn.parent(document.querySelector('main'));
  startBtn.style('font-size', '14px');
  startBtn.style('padding', '4px 12px');
  startBtn.style('margin', '4px');
  startBtn.mousePressed(startTrial);

  let flashLabel = createSpan(' Flash (ms): ');
  flashLabel.parent(document.querySelector('main'));
  flashLabel.style('font-size', '13px');

  flashSlider = createSlider(500, 2000, 1000, 100);
  flashSlider.parent(document.querySelector('main'));
  flashSlider.style('width', '100px');
  flashSlider.style('margin', '4px');

  conditionSelect = createSelect();
  conditionSelect.parent(document.querySelector('main'));
  conditionSelect.option('Alternating');
  conditionSelect.option('Random Only');
  conditionSelect.option('Chunked Only');
  conditionSelect.selected('Alternating');
  conditionSelect.style('font-size', '14px');
  conditionSelect.style('padding', '2px 6px');
  conditionSelect.style('margin', '4px');

  chunkCheckbox = createCheckbox('Show chunk boundaries', true);
  chunkCheckbox.parent(document.querySelector('main'));
  chunkCheckbox.style('font-size', '13px');
  chunkCheckbox.style('margin', '4px 8px');

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('font-size', '14px');
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('margin', '4px');
  resetBtn.mousePressed(doReset);

  // Hidden text input for recall
  userInput = createInput('');
  userInput.parent(document.querySelector('main'));
  userInput.style('font-size', '16px');
  userInput.style('padding', '6px 10px');
  userInput.style('margin', '4px');
  userInput.style('width', '250px');
  userInput.attribute('placeholder', 'Type recalled letters here...');
  userInput.hide();

  let submitBtn = createButton('Submit');
  submitBtn.parent(document.querySelector('main'));
  submitBtn.id('submitRecall');
  submitBtn.style('font-size', '14px');
  submitBtn.style('padding', '6px 12px');
  submitBtn.style('margin', '4px');
  submitBtn.mousePressed(submitRecall);
  submitBtn.hide();

  describe('Chunking demonstration that flashes letter strings and tests recall. Compare random letters against familiar acronym chunks.');
}

function startTrial() {
  flashDuration = flashSlider.value();
  let condition = conditionSelect.value();

  if (condition === 'Alternating') {
    isChunked = (trialCount % 2 === 1);
  } else if (condition === 'Random Only') {
    isChunked = false;
  } else {
    isChunked = true;
  }

  if (isChunked) {
    let set = chunkSetsClean[floor(random(chunkSetsClean.length))];
    currentLetters = set.letters;
    if (chunkCheckbox.checked()) {
      displayLetters = set.chunks.join(' ');
    } else {
      displayLetters = set.letters;
    }
  } else {
    currentLetters = randomSets[floor(random(randomSets.length))];
    displayLetters = currentLetters;
  }

  state = 'showing';
  showTimer = millis();
  startBtn.attribute('disabled', '');
}

function submitRecall() {
  let response = userInput.value().toUpperCase().replace(/\s/g, '');
  let correct = currentLetters.toUpperCase();

  // Count matching characters in order
  let matches = 0;
  let ri = 0;
  for (let ci = 0; ci < correct.length && ri < response.length; ci++) {
    if (response[ri] === correct[ci]) {
      matches++;
      ri++;
    }
  }

  let pct = round((matches / correct.length) * 100);

  if (isChunked) {
    chunkedResults.push(pct);
  } else {
    randomResults.push(pct);
  }

  trialCount++;
  state = 'result';
  userInput.hide();
  select('#submitRecall').hide();

  // Auto-advance after showing result
  setTimeout(() => {
    state = 'ready';
    startBtn.removeAttribute('disabled');
  }, 2500);
}

function doReset() {
  randomResults = [];
  chunkedResults = [];
  trialCount = 0;
  state = 'ready';
  userInput.hide();
  userInput.value('');
  select('#submitRecall').hide();
  startBtn.removeAttribute('disabled');
}

function draw() {
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Title
  noStroke();
  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(18);
  text('Chunking Demonstration', canvasWidth / 2, 10);

  let halfW = canvasWidth / 2;

  // Two panels
  stroke('#ddd');
  strokeWeight(1);
  line(halfW, 40, halfW, drawHeight - 80);

  // Panel headers
  noStroke();
  fill('#E8543A');
  textAlign(CENTER, TOP);
  textSize(14);
  textStyle(BOLD);
  text('Random Letters', halfW / 2, 42);
  fill('#4A90D9');
  text('Chunked Letters', halfW + halfW / 2, 42);
  textStyle(NORMAL);

  // Display area
  let displayY = 130;

  if (state === 'showing') {
    let elapsed = millis() - showTimer;
    if (elapsed < flashDuration) {
      // Show letters
      fill(isChunked ? '#4A90D9' : '#E8543A');
      textSize(28);
      textStyle(BOLD);
      textAlign(CENTER, CENTER);
      let panelX = isChunked ? halfW + halfW / 2 : halfW / 2;
      text(displayLetters, panelX, displayY);
      textStyle(NORMAL);

      // Timer bar
      let barW = 200;
      let barH = 8;
      let barX = panelX - barW / 2;
      fill('#eee');
      rect(barX, displayY + 30, barW, barH, 4);
      fill(isChunked ? '#4A90D9' : '#E8543A');
      let progress = 1 - elapsed / flashDuration;
      rect(barX, displayY + 30, barW * progress, barH, 4);
    } else {
      // Time's up, switch to recall
      state = 'recalling';
      userInput.value('');
      userInput.show();
      userInput.elt.focus();
      select('#submitRecall').show();
    }
  }

  if (state === 'recalling') {
    fill('#333');
    textSize(14);
    textAlign(CENTER, CENTER);
    let panelX = isChunked ? halfW + halfW / 2 : halfW / 2;
    text('Type what you recall below!', panelX, displayY);

    fill(isChunked ? '#4A90D9' : '#E8543A');
    textSize(12);
    text(isChunked ? '(Chunked condition)' : '(Random condition)', panelX, displayY + 25);
  }

  if (state === 'result') {
    let lastResult = isChunked ? chunkedResults[chunkedResults.length - 1] : randomResults[randomResults.length - 1];
    let panelX = isChunked ? halfW + halfW / 2 : halfW / 2;

    fill(lastResult >= 70 ? '#2E7D32' : lastResult >= 40 ? '#E65100' : '#C62828');
    textSize(24);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(lastResult + '% correct', panelX, displayY);
    textStyle(NORMAL);

    fill('#555');
    textSize(12);
    text('Original: ' + currentLetters, panelX, displayY + 30);
  }

  if (state === 'ready') {
    fill('#999');
    textSize(14);
    textAlign(CENTER, CENTER);
    text('Press "Flash Letters" to begin a trial', canvasWidth / 2, displayY);
  }

  // Results summary
  let summaryY = drawHeight - 70;
  noStroke();

  // Random stats
  fill('#E8543A');
  textAlign(CENTER, TOP);
  textSize(13);
  textStyle(BOLD);
  text('Random', halfW / 2, summaryY);
  textStyle(NORMAL);
  fill('#333');
  textSize(12);
  if (randomResults.length > 0) {
    let avg = round(randomResults.reduce((a, b) => a + b, 0) / randomResults.length);
    text('Avg: ' + avg + '% (' + randomResults.length + ' trials)', halfW / 2, summaryY + 18);
  } else {
    text('No trials yet', halfW / 2, summaryY + 18);
  }

  // Chunked stats
  fill('#4A90D9');
  textAlign(CENTER, TOP);
  textSize(13);
  textStyle(BOLD);
  text('Chunked', halfW + halfW / 2, summaryY);
  textStyle(NORMAL);
  fill('#333');
  textSize(12);
  if (chunkedResults.length > 0) {
    let avg = round(chunkedResults.reduce((a, b) => a + b, 0) / chunkedResults.length);
    text('Avg: ' + avg + '% (' + chunkedResults.length + ' trials)', halfW + halfW / 2, summaryY + 18);
  } else {
    text('No trials yet', halfW + halfW / 2, summaryY + 18);
  }

  // Bar chart comparison
  if (randomResults.length > 0 || chunkedResults.length > 0) {
    let barY = summaryY + 38;
    let barH = 14;
    let maxBarW = halfW - 40;

    if (randomResults.length > 0) {
      let avg = randomResults.reduce((a, b) => a + b, 0) / randomResults.length;
      fill('#E8543A');
      rect(halfW / 2 - maxBarW / 2, barY, maxBarW * avg / 100, barH, 3);
      fill('#eee');
      rect(halfW / 2 - maxBarW / 2 + maxBarW * avg / 100, barY, maxBarW * (1 - avg / 100), barH, 0, 3, 3, 0);
    }

    if (chunkedResults.length > 0) {
      let avg = chunkedResults.reduce((a, b) => a + b, 0) / chunkedResults.length;
      fill('#4A90D9');
      rect(halfW + halfW / 2 - maxBarW / 2, barY, maxBarW * avg / 100, barH, 3);
      fill('#eee');
      rect(halfW + halfW / 2 - maxBarW / 2 + maxBarW * avg / 100, barY, maxBarW * (1 - avg / 100), barH, 0, 3, 3, 0);
    }
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
