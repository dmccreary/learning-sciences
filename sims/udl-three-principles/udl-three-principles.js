// UDL Three Principles Interactive Display
// Three pillars: Engagement, Representation, Action & Expression
// With checkable examples and Explore/Quiz modes

let canvasWidth = 600;
let drawHeight = 550;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect;
let mode = 'explore';
let hoveredPillar = -1;
let hoveredLevel = -1;

// Quiz state
let quizIndex = 0;
let quizFeedback = '';
let quizFeedbackColor;
let quizCorrectCount = 0;
let quizTotal = 0;

const pillars = [
  {
    name: 'Engagement',
    subtitle: 'The Why',
    color: '#3B82F6',
    levels: [
      {
        name: 'Provide Options for Recruiting Interest',
        description: 'Offer choices and reduce threats to sustain motivation.',
        examples: [
          'MicroSims with multiple starting difficulty levels',
          'Choice of which chapter exercise to complete first'
        ]
      },
      {
        name: 'Build Sustained Effort & Persistence',
        description: 'Vary demands and resources to keep learners engaged over time.',
        examples: [
          'Progress bars showing chapter completion',
          'Spaced retrieval prompts that revisit earlier concepts'
        ]
      },
      {
        name: 'Internalize Self-Regulation',
        description: 'Help learners monitor their own motivation and set personal goals.',
        examples: [
          'Reflection prompts after each quiz attempt',
          'Learner-controlled pacing through adaptive difficulty'
        ]
      }
    ]
  },
  {
    name: 'Representation',
    subtitle: 'The What',
    color: '#F59E0B',
    levels: [
      {
        name: 'Provide Options for Perception',
        description: 'Offer alternatives for auditory and visual information.',
        examples: [
          'Transcripts for every narrated MicroSim',
          'Captions on every embedded video'
        ]
      },
      {
        name: 'Build Language & Symbols Understanding',
        description: 'Clarify vocabulary, notation, and structure.',
        examples: [
          'Glossary terms linked inline on first use',
          'Key terms italicized and glossed in the same sentence'
        ]
      },
      {
        name: 'Internalize Comprehension',
        description: 'Help learners build mental models and transfer knowledge.',
        examples: [
          'Causal loop diagrams showing variable relationships',
          'Concept maps in the learning graph viewer'
        ]
      }
    ]
  },
  {
    name: 'Action & Expression',
    subtitle: 'The How',
    color: '#EF4444',
    levels: [
      {
        name: 'Provide Options for Physical Action',
        description: 'Ensure all controls are accessible via multiple input methods.',
        examples: [
          'Keyboard-only navigation for every MicroSim',
          'Touch-friendly slider controls with large hit areas'
        ]
      },
      {
        name: 'Build Expression & Communication',
        description: 'Offer multiple media for demonstrating knowledge.',
        examples: [
          'Written reflection prompts alongside quiz questions',
          'Option to sketch answers or type them'
        ]
      },
      {
        name: 'Internalize Executive Functions',
        description: 'Support planning, strategy development, and self-monitoring.',
        examples: [
          'Chapter checklists showing remaining exercises',
          'Rubric boards for self-evaluation before submission'
        ]
      }
    ]
  }
];

const quizQuestions = [
  {
    text: 'We added a keyboard-only navigation path through every MicroSim control.',
    pillar: 2, level: 0,
    explanation: 'This serves Action & Expression > Provide Options for Physical Action — ensuring accessible input methods.'
  },
  {
    text: 'Each glossary term is linked inline the first time it appears in a chapter.',
    pillar: 1, level: 1,
    explanation: 'This serves Representation > Build Language & Symbols — clarifying vocabulary in context.'
  },
  {
    text: 'Students can choose which of three exercises to complete first in each chapter.',
    pillar: 0, level: 0,
    explanation: 'This serves Engagement > Provide Options for Recruiting Interest — offering learner choice.'
  },
  {
    text: 'A progress bar at the top of each chapter shows how many sections the reader has completed.',
    pillar: 0, level: 1,
    explanation: 'This serves Engagement > Build Sustained Effort & Persistence — visual progress feedback.'
  },
  {
    text: 'Every narrated MicroSim walkthrough includes a text transcript below the video.',
    pillar: 1, level: 0,
    explanation: 'This serves Representation > Provide Options for Perception — alternatives for auditory info.'
  },
  {
    text: 'The capstone rubric board lets students self-evaluate their chapter draft before submitting.',
    pillar: 2, level: 2,
    explanation: 'This serves Action & Expression > Internalize Executive Functions — supporting self-monitoring.'
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  modeSelect = createSelect();
  modeSelect.parent(document.querySelector('main'));
  modeSelect.option('Explore Mode', 'explore');
  modeSelect.option('Quiz Mode', 'quiz');
  modeSelect.changed(() => {
    mode = modeSelect.value();
    quizIndex = 0;
    quizFeedback = '';
    quizCorrectCount = 0;
    quizTotal = 0;
  });
  modeSelect.style('margin', '8px');
  modeSelect.style('padding', '6px 12px');
  modeSelect.style('font-size', '14px');
  modeSelect.style('border-radius', '4px');
  modeSelect.style('border', '1px solid #ccc');

  describe('Interactive display of Universal Design for Learning three principles: Engagement, Representation, and Action & Expression, each with three levels of guidelines.', LABEL);
}

function draw() {
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('#1a3a6c');
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text('Universal Design for Learning (UDL)', canvasWidth / 2, 10);
  textStyle(NORMAL);
  textSize(12);
  fill('#666');
  text('Three Principles with Checkable Examples', canvasWidth / 2, 32);

  if (mode === 'explore') {
    detectHover();
    drawPillars();
    drawTooltip();
  } else {
    drawPillars();
    drawQuiz();
  }
}

function drawPillars() {
  let margin = 15;
  let gap = 10;
  let pillarW = (canvasWidth - 2 * margin - 2 * gap) / 3;
  let topY = 55;
  let pillarH = mode === 'explore' ? drawHeight - topY - 20 : drawHeight - topY - 120;
  let levelH = (pillarH - 50) / 3;

  for (let i = 0; i < 3; i++) {
    let p = pillars[i];
    let px = margin + i * (pillarW + gap);
    let c = color(p.color);

    // Pillar background
    let isHoveredPillar = (mode === 'explore' && hoveredPillar === i);
    fill(red(c), green(c), blue(c), isHoveredPillar ? 30 : 15);
    stroke(c);
    strokeWeight(2);
    rect(px, topY, pillarW, pillarH, 8);

    // Header
    fill(c);
    noStroke();
    textSize(14);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text(p.name, px + pillarW / 2, topY + 8);
    textStyle(NORMAL);
    textSize(11);
    fill('#666');
    text(p.subtitle, px + pillarW / 2, topY + 26);

    // Levels
    for (let j = 0; j < 3; j++) {
      let ly = topY + 45 + j * levelH;
      let isHoveredLevel = (mode === 'explore' && hoveredPillar === i && hoveredLevel === j);

      fill(red(c), green(c), blue(c), isHoveredLevel ? 50 : 20);
      stroke(red(c), green(c), blue(c), 80);
      strokeWeight(1);
      rect(px + 5, ly, pillarW - 10, levelH - 5, 4);

      fill('#333');
      noStroke();
      textSize(10);
      textAlign(CENTER, TOP);
      textStyle(BOLD);
      let levelLabel = ['Provide Options', 'Build', 'Internalize'][j];
      text(levelLabel, px + pillarW / 2, ly + 6);
      textStyle(NORMAL);

      textSize(9);
      fill('#555');
      let shortName = p.levels[j].name.replace('Provide Options for ', '').replace('Build ', '').replace('Internalize ', '');
      text(shortName, px + pillarW / 2, ly + 20, pillarW - 20);
    }
  }
}

function drawTooltip() {
  if (hoveredPillar < 0 || hoveredLevel < 0) {
    fill('#888');
    noStroke();
    textSize(12);
    textAlign(CENTER, CENTER);
    text('Hover over a section to see details and examples', canvasWidth / 2, drawHeight - 12);
    return;
  }

  let p = pillars[hoveredPillar];
  let l = p.levels[hoveredLevel];

  // Tooltip at bottom
  let tY = drawHeight - 12;
  fill('#555');
  noStroke();
  textSize(11);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(l.name, canvasWidth / 2, tY - 40);
  textStyle(NORMAL);
  text(l.description, canvasWidth / 2, tY - 24);
  textSize(10);
  fill('#777');
  text('Examples: ' + l.examples.join(' | '), canvasWidth / 2, tY - 6, canvasWidth - 40);
}

function drawQuiz() {
  if (quizIndex < quizQuestions.length) {
    let q = quizQuestions[quizIndex];
    let boxY = drawHeight - 110;
    fill(255);
    stroke('#3B82F6');
    strokeWeight(2);
    rect(15, boxY, canvasWidth - 30, 45, 8);

    fill('#333');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text(q.text, canvasWidth / 2, boxY + 22, canvasWidth - 50);

    fill('#888');
    textSize(10);
    text('Click the pillar section this feature serves', canvasWidth / 2, boxY + 55);

    if (quizFeedback) {
      fill(255);
      stroke(quizFeedbackColor);
      strokeWeight(2);
      rect(15, boxY + 65, canvasWidth - 30, 35, 8);
      fill(quizFeedbackColor);
      noStroke();
      textSize(10);
      text(quizFeedback, canvasWidth / 2, boxY + 82, canvasWidth - 50);
    }
  } else {
    let boxY = drawHeight - 100;
    fill('#333');
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Quiz Complete!', canvasWidth / 2, boxY + 10);
    textStyle(NORMAL);
    textSize(14);
    text(quizCorrectCount + ' / ' + quizTotal + ' correct', canvasWidth / 2, boxY + 35);
  }
}

function detectHover() {
  hoveredPillar = -1;
  hoveredLevel = -1;
  let margin = 15;
  let gap = 10;
  let pillarW = (canvasWidth - 2 * margin - 2 * gap) / 3;
  let topY = 55;
  let pillarH = drawHeight - topY - 20;
  let levelH = (pillarH - 50) / 3;

  for (let i = 0; i < 3; i++) {
    let px = margin + i * (pillarW + gap);
    if (mouseX >= px && mouseX <= px + pillarW && mouseY >= topY && mouseY <= topY + pillarH) {
      hoveredPillar = i;
      for (let j = 0; j < 3; j++) {
        let ly = topY + 45 + j * levelH;
        if (mouseY >= ly && mouseY <= ly + levelH - 5) {
          hoveredLevel = j;
          break;
        }
      }
      break;
    }
  }
}

function mousePressed() {
  if (mode !== 'quiz' || quizIndex >= quizQuestions.length) return;

  let margin = 15;
  let gap = 10;
  let pillarW = (canvasWidth - 2 * margin - 2 * gap) / 3;
  let topY = 55;
  let pillarH = drawHeight - topY - 120;
  let levelH = (pillarH - 50) / 3;

  for (let i = 0; i < 3; i++) {
    let px = margin + i * (pillarW + gap);
    for (let j = 0; j < 3; j++) {
      let ly = topY + 45 + j * levelH;
      if (mouseX >= px + 5 && mouseX <= px + pillarW - 5 &&
          mouseY >= ly && mouseY <= ly + levelH - 5) {
        let q = quizQuestions[quizIndex];
        quizTotal++;
        if (i === q.pillar && j === q.level) {
          quizCorrectCount++;
          quizFeedback = 'Correct! ' + q.explanation;
          quizFeedbackColor = '#16A34A';
        } else {
          quizFeedback = 'Not quite. ' + q.explanation;
          quizFeedbackColor = '#DC2626';
        }
        setTimeout(() => {
          quizIndex++;
          quizFeedback = '';
        }, 2500);
        return;
      }
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    canvasHeight = drawHeight + controlHeight;
  }
}
