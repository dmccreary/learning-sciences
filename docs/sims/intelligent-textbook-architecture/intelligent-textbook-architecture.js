// Intelligent Textbook Component Architecture (Level 2)
// Layered architecture diagram: Learning Graph -> Artifacts -> Site Build
// With Explore and Quiz modes

let canvasWidth = 600;
let drawHeight = 550;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect;
let mode = 'explore';
let hoveredComponent = -1;

// Quiz state
let quizIndex = 0;
let quizFeedback = '';
let quizFeedbackColor;
let quizCorrectCount = 0;
let quizTotal = 0;

const components = [
  // Central node
  {
    id: 'learning-graph', name: 'Learning Graph', layer: 'core',
    x: 0.5, y: 0.18, w: 0.22, h: 0.09, color: '#3B82F6',
    definition: 'A directed acyclic graph (DAG) of ~200 concepts with prerequisite edges.',
    owns: 'Concept nodes, dependency edges, foundation/core/advanced taxonomy',
    chapter: 'Chapter 10'
  },
  // Artifact layer
  {
    id: 'chapter-outlines', name: 'Chapter Outlines', layer: 'artifact',
    x: 0.08, y: 0.34, w: 0.17, h: 0.07, color: '#F59E0B',
    definition: 'Ordered lists of concepts each chapter must cover, derived from the learning graph.',
    owns: 'Concept sequencing, prerequisite ordering per chapter',
    chapter: 'Chapter 10'
  },
  {
    id: 'chapter-content', name: 'Chapter Content', layer: 'artifact',
    x: 0.27, y: 0.34, w: 0.17, h: 0.07, color: '#F59E0B',
    definition: 'The prose, examples, and exercises that teach each concept.',
    owns: 'Body text, worked examples, retrieval prompts',
    chapter: 'Chapters 10-11'
  },
  {
    id: 'glossary', name: 'Glossary', layer: 'artifact',
    x: 0.46, y: 0.34, w: 0.12, h: 0.07, color: '#F59E0B',
    definition: 'Term definitions auto-generated from the concept list.',
    owns: 'Term entries, plain-English glosses',
    chapter: 'Chapter 10'
  },
  {
    id: 'faq', name: 'FAQ', layer: 'artifact',
    x: 0.60, y: 0.34, w: 0.10, h: 0.07, color: '#F59E0B',
    definition: 'Frequently asked questions generated from concepts and common misconceptions.',
    owns: 'Question-answer pairs per chapter',
    chapter: 'Chapter 10'
  },
  {
    id: 'quiz-bank', name: 'Quiz Bank', layer: 'artifact',
    x: 0.72, y: 0.34, w: 0.12, h: 0.07, color: '#F59E0B',
    definition: 'Multiple-choice items tagged by concept and Bloom level.',
    owns: 'Items, distractors, Bloom-level tags',
    chapter: 'Chapter 8'
  },
  {
    id: 'references', name: 'References', layer: 'artifact',
    x: 0.08, y: 0.44, w: 0.14, h: 0.07, color: '#F59E0B',
    definition: 'Curated reference lists linking each chapter to primary sources.',
    owns: 'Citation entries, relevance descriptions',
    chapter: 'Chapter 10'
  },
  {
    id: 'microsims', name: 'MicroSims', layer: 'artifact',
    x: 0.24, y: 0.44, w: 0.14, h: 0.07, color: '#F59E0B',
    definition: 'Interactive p5.js/Chart.js simulations that make abstract concepts tangible.',
    owns: 'JS sketches, HTML pages, index.md files',
    chapter: 'Chapter 11'
  },
  {
    id: 'stories', name: 'Stories', layer: 'artifact',
    x: 0.40, y: 0.44, w: 0.12, h: 0.07, color: '#F59E0B',
    definition: '12-panel graphic novels about historical figures in the field.',
    owns: 'Panel scripts, image prompts, story arcs',
    chapter: 'Chapter 13'
  },
  // Site Build layer
  {
    id: 'toc', name: 'Table of Contents', layer: 'build',
    x: 0.08, y: 0.60, w: 0.18, h: 0.07, color: '#10B981',
    definition: 'The ordered chapter list rendered as the site\'s left navigation.',
    owns: 'mkdocs.yml nav section',
    chapter: 'Chapter 15'
  },
  {
    id: 'site-nav', name: 'Site Navigation', layer: 'build',
    x: 0.28, y: 0.60, w: 0.18, h: 0.07, color: '#10B981',
    definition: 'Side navigation, breadcrumbs, and cross-references.',
    owns: 'MkDocs Material navigation config',
    chapter: 'Chapter 15'
  },
  {
    id: 'search', name: 'Search Index', layer: 'build',
    x: 0.48, y: 0.60, w: 0.16, h: 0.07, color: '#10B981',
    definition: 'The full-text search index built at deploy time.',
    owns: 'search_index.json',
    chapter: 'Chapter 15'
  },
  {
    id: 'print', name: 'Print Output', layer: 'build',
    x: 0.66, y: 0.60, w: 0.16, h: 0.07, color: '#10B981',
    definition: 'Print-friendly PDF/HTML output for offline reading.',
    owns: 'Print CSS, page breaks',
    chapter: 'Chapter 15'
  },
  // Cross-cutting: Mascot Voice
  {
    id: 'mascot', name: 'Mascot Voice Layer', layer: 'cross-cutting',
    x: 0.86, y: 0.18, w: 0.12, h: 0.32, color: '#8B5CF6',
    definition: 'Bloom the Elephant\'s voice and visual presence across all chapters.',
    owns: 'Admonition CSS, 7 pose images, placement rules',
    chapter: 'Chapter 12'
  },
  // Cross-cutting: Authoring Pipeline
  {
    id: 'pipeline', name: 'Authoring Pipeline', layer: 'cross-cutting',
    x: 0.08, y: 0.74, w: 0.84, h: 0.07, color: '#EC4899',
    definition: 'The Claude Code harness, skills, and prompts that generate all artifacts.',
    owns: 'Harness config, skill definitions, prompt templates',
    chapter: 'Chapter 10'
  }
];

const quizQuestions = [
  {
    text: 'You need to add a new concept that every Chapter 6 quiz item depends on.',
    answer: 'learning-graph',
    explanation: 'The Learning Graph owns concept nodes and dependency edges — add the concept there first, then regenerate downstream artifacts.'
  },
  {
    text: 'A student reports that the glossary definition for "retrieval practice" is confusing.',
    answer: 'glossary',
    explanation: 'The Glossary owns term definitions — edit it there and the fix propagates to inline links.'
  },
  {
    text: 'You want to add a new interactive simulation showing cognitive load in action.',
    answer: 'microsims',
    explanation: 'MicroSims owns all interactive simulations — create a new sim directory with main.html and index.md.'
  },
  {
    text: 'The left sidebar navigation is missing Chapter 14.',
    answer: 'toc',
    explanation: 'The Table of Contents owns the mkdocs.yml nav section — add the chapter entry there.'
  },
  {
    text: 'You want Bloom the Elephant to use a new "confused" pose in Chapter 7.',
    answer: 'mascot',
    explanation: 'The Mascot Voice Layer owns all pose images and admonition types — add the new pose there.'
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

  describe('Layered architecture diagram of an intelligent textbook showing Learning Graph, generated artifacts, site build layer, and cross-cutting concerns.', LABEL);
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
  textSize(16);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text('Intelligent Textbook Architecture', canvasWidth / 2, 8);
  textStyle(NORMAL);

  detectHover();
  drawLayerLabels();
  drawConnections();
  drawComponents();

  if (mode === 'explore') {
    drawExploreTooltip();
  } else {
    drawQuiz();
  }
}

function drawLayerLabels() {
  fill('#999');
  noStroke();
  textSize(9);
  textAlign(LEFT, TOP);
  textStyle(ITALIC);
  text('CORE', 8, drawHeight * 0.15);
  text('ARTIFACTS', 8, drawHeight * 0.31);
  text('SITE BUILD', 8, drawHeight * 0.57);
  text('AUTHORING PIPELINE', 8, drawHeight * 0.72);
  textStyle(NORMAL);
}

function drawConnections() {
  stroke('#ccc');
  strokeWeight(1);
  // Lines from learning graph down to artifacts
  let lgx = canvasWidth * 0.5;
  let lgy = drawHeight * (0.18 + 0.045);

  for (let i = 1; i <= 8; i++) {
    let c = components[i];
    let cx = canvasWidth * (c.x + c.w / 2);
    let cy = drawHeight * c.y;
    line(lgx, lgy, cx, cy);
  }

  // Lines from artifacts to build
  for (let i = 1; i <= 8; i++) {
    let c = components[i];
    let cx = canvasWidth * (c.x + c.w / 2);
    let cy = drawHeight * (c.y + c.h);
    for (let j = 9; j <= 12; j++) {
      let b = components[j];
      let bx = canvasWidth * (b.x + b.w / 2);
      let by = drawHeight * b.y;
      if (abs(cx - bx) < canvasWidth * 0.25) {
        stroke('#ddd');
        line(cx, cy, bx, by);
      }
    }
  }
}

function drawComponents() {
  for (let i = 0; i < components.length; i++) {
    let c = components[i];
    let cx = canvasWidth * c.x;
    let cy = drawHeight * c.y;
    let cw = canvasWidth * c.w;
    let ch = drawHeight * c.h;

    let col = color(c.color);
    let isHovered = (hoveredComponent === i);

    if (isHovered) {
      fill(red(col), green(col), blue(col), 230);
      stroke(50);
      strokeWeight(2);
    } else {
      fill(red(col), green(col), blue(col), 180);
      stroke(red(col), green(col), blue(col));
      strokeWeight(1);
    }
    rect(cx, cy, cw, ch, 5);

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(c.layer === 'cross-cutting' && c.id === 'mascot' ? 10 : 10);
    textStyle(BOLD);
    if (c.id === 'mascot') {
      // Vertical text for tall box
      push();
      translate(cx + cw / 2, cy + ch / 2);
      rotate(-HALF_PI);
      text(c.name, 0, 0);
      pop();
    } else {
      text(c.name, cx + cw / 2, cy + ch / 2);
    }
    textStyle(NORMAL);
  }
}

function drawExploreTooltip() {
  if (hoveredComponent < 0) {
    fill('#888');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('Hover over a component to see what it owns', canvasWidth / 2, drawHeight * 0.88);
    return;
  }

  let c = components[hoveredComponent];
  let tipY = drawHeight * 0.83;
  let tipW = canvasWidth - 30;

  fill(255);
  stroke(color(c.color));
  strokeWeight(2);
  rect(15, tipY, tipW, drawHeight * 0.14, 8);

  let tx = 25;
  fill(color(c.color));
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text(c.name + ' (' + c.chapter + ')', tx, tipY + 6);
  textStyle(NORMAL);

  fill('#444');
  textSize(10);
  text(c.definition, tx, tipY + 22, tipW - 20);

  fill('#666');
  textSize(9);
  text('Owns: ' + c.owns, tx, tipY + 46, tipW - 20);
}

function drawQuiz() {
  if (quizIndex < quizQuestions.length) {
    let q = quizQuestions[quizIndex];
    let tipY = drawHeight * 0.82;
    let tipW = canvasWidth - 30;

    fill(255);
    stroke('#3B82F6');
    strokeWeight(2);
    rect(15, tipY, tipW, 40, 8);

    fill('#333');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text(q.text, canvasWidth / 2, tipY + 20, tipW - 20);

    fill('#888');
    textSize(10);
    text('Click the component that owns this change', canvasWidth / 2, tipY + 48);

    if (quizFeedback) {
      fill(255);
      stroke(quizFeedbackColor);
      strokeWeight(2);
      rect(15, tipY + 55, tipW, 30, 8);
      fill(quizFeedbackColor);
      noStroke();
      textSize(9);
      text(quizFeedback, canvasWidth / 2, tipY + 70, tipW - 20);
    }
  } else {
    fill('#333');
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text('Quiz Complete! ' + quizCorrectCount + '/' + quizTotal + ' correct', canvasWidth / 2, drawHeight * 0.88);
    textStyle(NORMAL);
  }
}

function detectHover() {
  hoveredComponent = -1;
  for (let i = 0; i < components.length; i++) {
    let c = components[i];
    let cx = canvasWidth * c.x;
    let cy = drawHeight * c.y;
    let cw = canvasWidth * c.w;
    let ch = drawHeight * c.h;
    if (mouseX >= cx && mouseX <= cx + cw && mouseY >= cy && mouseY <= cy + ch) {
      hoveredComponent = i;
      break;
    }
  }
}

function mousePressed() {
  if (mode !== 'quiz' || quizIndex >= quizQuestions.length) return;
  if (hoveredComponent < 0) return;

  let q = quizQuestions[quizIndex];
  quizTotal++;
  if (components[hoveredComponent].id === q.answer) {
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
