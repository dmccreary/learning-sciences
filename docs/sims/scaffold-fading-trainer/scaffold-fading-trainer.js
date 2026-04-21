// Scaffold Fading Trainer
// Six-stage fading progression with cognitive load meter

let canvasWidth = 600;
let drawHeight = 520;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let conceptSelect, prevBtn, nextBtn, resetBtn, selfExplainCheckbox;
let currentStage = 0;

let stageNames = [
  '1. Worked Example',
  '2. Completion (1 gap)',
  '3. Completion (2 gaps)',
  '4. Completion (3 gaps)',
  '5. Guided Practice',
  '6. Independent Practice'
];

let stageDescriptions = [
  'Full solution shown. Study each step and its rationale.',
  'One step is missing. Fill in the blank using the pattern.',
  'Two steps are missing. The structure is still visible.',
  'Three steps are missing. You carry most of the load.',
  'Only the problem and goal are given. Hints available.',
  'Solve independently. No scaffolding remains.'
];

let cognitiveLoad = [0.9, 0.75, 0.55, 0.4, 0.2, 0.05]; // Extraneous load reduction

let concepts = {
  "Bayes' Rule": {
    stages: [
      { problem: 'A test is 95% accurate. Disease prevalence is 1%. You test positive. What is P(disease|positive)?',
        steps: [
          'P(D) = 0.01, P(~D) = 0.99',
          'P(+|D) = 0.95, P(+|~D) = 0.05',
          'P(+) = P(+|D)P(D) + P(+|~D)P(~D) = 0.95(0.01) + 0.05(0.99) = 0.059',
          'P(D|+) = P(+|D)P(D) / P(+) = 0.95(0.01) / 0.059 = 0.161'
        ],
        gaps: [[], [3], [2,3], [1,2,3], [0,1,2,3], [0,1,2,3]],
        hints: ['List the prior probabilities', 'Apply the sensitivity and specificity', 'Use the law of total probability', 'Apply Bayes\' theorem']
      },
      { problem: 'A spam filter is 98% accurate on spam, 3% false positive rate. 20% of emails are spam. An email is flagged. P(spam|flagged)?',
        steps: [
          'P(S) = 0.20, P(~S) = 0.80',
          'P(F|S) = 0.98, P(F|~S) = 0.03',
          'P(F) = P(F|S)P(S) + P(F|~S)P(~S) = 0.98(0.20) + 0.03(0.80) = 0.22',
          'P(S|F) = P(F|S)P(S) / P(F) = 0.98(0.20) / 0.22 = 0.891'
        ],
        gaps: [[], [3], [2,3], [1,2,3], [0,1,2,3], [0,1,2,3]],
        hints: ['Identify the prior probability of spam', 'State the filter accuracy rates', 'Compute total probability of flagging', 'Apply Bayes\' rule']
      }
    ]
  },
  "Conditional Probability": {
    stages: [
      { problem: 'A bag has 3 red and 5 blue marbles. You draw 2 without replacement. P(2nd red | 1st red)?',
        steps: [
          'After drawing 1 red: 2 red, 5 blue remain (7 total)',
          'P(2nd red | 1st red) = 2/7',
          'P(both red) = P(1st red) * P(2nd red|1st red) = 3/8 * 2/7 = 6/56',
          'Simplified: P(both red) = 3/28 = 0.107'
        ],
        gaps: [[], [3], [2,3], [1,2,3], [0,1,2,3], [0,1,2,3]],
        hints: ['Count remaining marbles', 'Compute conditional probability', 'Apply multiplication rule', 'Simplify the fraction']
      },
      { problem: 'A deck of 52 cards. You draw 2 without replacement. P(2nd ace | 1st ace)?',
        steps: [
          'After drawing 1 ace: 3 aces, 48 others remain (51 total)',
          'P(2nd ace | 1st ace) = 3/51 = 1/17',
          'P(both aces) = P(1st ace) * P(2nd ace|1st ace) = 4/52 * 3/51',
          'Simplified: P(both aces) = 12/2652 = 1/221 = 0.0045'
        ],
        gaps: [[], [3], [2,3], [1,2,3], [0,1,2,3], [0,1,2,3]],
        hints: ['Count remaining aces and cards', 'Compute the conditional probability', 'Apply multiplication rule', 'Simplify']
      }
    ]
  }
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
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  let lbl1 = createDiv('Concept: ');
  lbl1.parent(document.querySelector('main'));
  lbl1.style('font-size', '13px');
  lbl1.style('display', 'inline-block');
  lbl1.style('margin-left', '10px');
  lbl1.style('margin-top', '6px');

  conceptSelect = createSelect();
  conceptSelect.parent(document.querySelector('main'));
  conceptSelect.option("Bayes' Rule");
  conceptSelect.option("Conditional Probability");
  conceptSelect.selected("Bayes' Rule");
  conceptSelect.changed(() => { currentStage = 0; });

  prevBtn = createButton('Previous Stage');
  prevBtn.parent(document.querySelector('main'));
  prevBtn.style('margin-left', '15px');
  prevBtn.mousePressed(() => { if (currentStage > 0) currentStage--; });

  nextBtn = createButton('Next Stage');
  nextBtn.parent(document.querySelector('main'));
  nextBtn.style('margin-left', '5px');
  nextBtn.mousePressed(() => { if (currentStage < 5) currentStage++; });

  let br1 = createDiv('');
  br1.parent(document.querySelector('main'));
  br1.style('height', '4px');

  selfExplainCheckbox = createCheckbox('Self-Explain Prompts', false);
  selfExplainCheckbox.parent(document.querySelector('main'));
  selfExplainCheckbox.style('font-size', '13px');
  selfExplainCheckbox.style('display', 'inline-block');
  selfExplainCheckbox.style('margin-left', '10px');

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('margin-left', '15px');
  resetBtn.mousePressed(() => { currentStage = 0; });

  describe('Scaffold fading trainer showing six stages from worked example to independent practice');
}

function draw() {
  background(255);

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Title
  noStroke();
  fill(30);
  textSize(15);
  textAlign(CENTER, TOP);
  text('Scaffold Fading Progression', canvasWidth / 2, 8);

  // Stage indicator bar
  let barY = 35;
  let barH = 30;
  let stageW = (canvasWidth - 40) / 6;
  let colors = ['#2ecc71', '#27ae60', '#f1c40f', '#e67e22', '#e74c3c', '#c0392b'];

  for (let i = 0; i < 6; i++) {
    let sx = 20 + i * stageW;
    fill(i === currentStage ? colors[i] : '#eee');
    stroke(i === currentStage ? colors[i] : '#ccc');
    strokeWeight(i === currentStage ? 2 : 1);
    rect(sx, barY, stageW - 4, barH, 4);

    noStroke();
    fill(i === currentStage ? 255 : 120);
    textSize(9);
    textAlign(CENTER, CENTER);
    text((i + 1), sx + stageW / 2 - 2, barY + barH / 2);
  }

  // Stage name and description
  noStroke();
  fill(30);
  textSize(13);
  textAlign(CENTER, TOP);
  text(stageNames[currentStage], canvasWidth / 2, barY + barH + 10);
  fill(80);
  textSize(11);
  text(stageDescriptions[currentStage], canvasWidth / 2, barY + barH + 28);

  // Cognitive load meter
  let meterX = canvasWidth - 120;
  let meterY = barY + barH + 50;
  let meterW = 100;
  let meterH = 15;

  noStroke();
  fill(100);
  textSize(10);
  textAlign(CENTER, BOTTOM);
  text('Extraneous Load', meterX + meterW / 2, meterY - 2);

  fill(230);
  stroke(180);
  strokeWeight(1);
  rect(meterX, meterY, meterW, meterH, 3);

  let loadVal = cognitiveLoad[currentStage];
  let loadColor = lerpColor(color(46, 204, 113), color(231, 76, 60), loadVal);
  fill(loadColor);
  noStroke();
  rect(meterX + 1, meterY + 1, (meterW - 2) * loadVal, meterH - 2, 2);

  fill(40);
  textSize(9);
  textAlign(CENTER, CENTER);
  text((loadVal * 100).toFixed(0) + '%', meterX + meterW / 2, meterY + meterH / 2);

  // Problem and solution area
  let concept = concepts[conceptSelect.value()];
  let variantIdx = currentStage < 3 ? 0 : Math.min(1, concept.stages.length - 1);
  let variant = concept.stages[variantIdx];

  let probY = barY + barH + 75;
  let probH = 40;

  // Problem
  fill(240, 248, 255);
  stroke(180);
  strokeWeight(1);
  rect(15, probY, canvasWidth - 30, probH, 5);

  noStroke();
  fill(30);
  textSize(11);
  textAlign(LEFT, TOP);
  text('Problem: ' + variant.problem, 25, probY + 8, canvasWidth - 50, probH - 10);

  // Solution steps
  let stepY = probY + probH + 15;
  let stepH = 45;
  let gaps = variant.gaps[currentStage];

  for (let i = 0; i < variant.steps.length; i++) {
    let sy = stepY + i * (stepH + 8);
    let isGap = gaps.includes(i);

    if (isGap) {
      fill(255, 250, 230);
      stroke(230, 180, 80);
    } else {
      fill(245, 255, 245);
      stroke(180, 220, 180);
    }
    strokeWeight(1);
    rect(15, sy, canvasWidth - 30, stepH, 5);

    noStroke();
    fill(120);
    textSize(10);
    textAlign(LEFT, TOP);
    text('Step ' + (i + 1) + ':', 25, sy + 5);

    if (isGap) {
      fill(200, 150, 50);
      textSize(11);
      text('[ Your turn -- fill in this step ]', 80, sy + 5);
      if (currentStage >= 4 && variant.hints[i]) {
        fill(150);
        textSize(9);
        text('Hint: ' + variant.hints[i], 25, sy + 25);
      }
    } else {
      fill(30);
      textSize(11);
      text(variant.steps[i], 80, sy + 5, canvasWidth - 120, stepH - 10);
    }

    // Self-explain prompt
    if (selfExplainCheckbox.checked() && !isGap) {
      fill(100, 100, 180);
      textSize(9);
      textAlign(LEFT, BOTTOM);
      text('Why does this step work?', 25, sy + stepH - 3);
    }
  }

  // Scaffold level indicator text
  noStroke();
  fill(80);
  textSize(10);
  textAlign(LEFT, BOTTOM);
  let scaffoldPct = ((5 - currentStage) / 5 * 100).toFixed(0);
  text('Scaffold level: ' + scaffoldPct + '% | Gaps: ' + gaps.length + '/4 steps', 15, drawHeight - 8);

  textAlign(RIGHT, BOTTOM);
  text('Stage ' + (currentStage + 1) + ' of 6', canvasWidth - 15, drawHeight - 8);
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
