// Capstone Rubric Board
// Interactive rubric with criteria rows and score columns
// Explore mode: hover for details; Self-audit mode: click to evaluate

let canvasWidth = 600;
let drawHeight = 620;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect;
let mode = 'explore';
let hoveredItem = -1;

// Self-audit scores: 0 = unset, 1 = fail, 2 = partial, 3 = pass
let scores = [];

const categories = [
  { name: 'Structure', color: '#3B82F6', items: [
    { short: 'Learning Graph', full: 'A learning graph with ~200 concepts, dependency edges, and taxonomy tags exists and is valid.', tool: 'learning-graph-generator', pass: 'Graph has 180+ nodes with no orphans.', fail: 'Fewer than 100 nodes or broken edges.' },
    { short: 'Chapter Outlines', full: 'Every chapter has an outline derived from the learning graph with correct prerequisite ordering.', tool: 'book-chapter-generator', pass: 'All 15 outlines present and ordered.', fail: 'Chapters reference concepts not in the graph.' },
    { short: 'Glossary', full: 'Glossary covers every concept with precise, non-circular definitions.', tool: 'glossary-generator', pass: 'All terms defined, no circularity.', fail: 'Missing terms or self-referential definitions.' },
    { short: 'Nav & TOC', full: 'mkdocs.yml navigation matches chapter order; no broken links.', tool: 'Manual check', pass: 'All links resolve, nav matches graph order.', fail: 'Missing chapters or 404 links.' }
  ]},
  { name: 'Seven Domains', color: '#F59E0B', items: [
    { short: 'Motivation', full: 'At least one chapter explicitly covers motivation theory (SDT, expectancy-value).', tool: null, pass: 'Chapter 1 covers SDT and growth mindset.', fail: 'No chapter addresses motivation.' },
    { short: 'Understanding', full: 'Cognitive load theory and dual coding are taught with examples.', tool: null, pass: 'Chapter 3 includes CLD and worked examples.', fail: 'Cognitive load mentioned but not explained.' },
    { short: 'Retention', full: 'Spaced practice and retrieval practice are covered and demonstrated.', tool: null, pass: 'Chapter 4 has retrieval prompts built in.', fail: 'Testing effect mentioned without exercises.' },
    { short: 'Application', full: 'Transfer and problem-solving are taught with MicroSims.', tool: null, pass: 'MicroSims demonstrate near and far transfer.', fail: 'No interactive application exercises.' }
  ]},
  { name: 'Engagement', color: '#10B981', items: [
    { short: 'MicroSims', full: 'At least 2 MicroSims per chapter, each with working controls and accessibility labels.', tool: 'microsim-utils', pass: '30+ sims, all with describe() calls.', fail: 'Chapters with zero sims or broken iframes.' },
    { short: 'Mascot', full: 'Bloom appears 3-6 times per chapter with correct pose-to-context matching.', tool: 'Manual check', pass: 'Every chapter has welcome + celebration.', fail: 'Back-to-back admonitions or wrong poses.' },
    { short: 'Stories', full: 'At least 5 graphic novel stories following the 12-panel arc.', tool: 'story-generator', pass: '5+ stories with all 12 panels.', fail: 'Fewer than 3 stories or incomplete arcs.' },
    { short: 'Quizzes', full: 'Quiz bank covers all Bloom levels with 10+ items per chapter.', tool: 'quiz-generator', pass: '150+ items across 6 Bloom levels.', fail: 'Only Remember/Understand items.' }
  ]},
  { name: 'Measurement', color: '#8B5CF6', items: [
    { short: 'Bloom Coverage', full: 'Quiz items span all six Bloom levels, not just lower ones.', tool: 'quiz-generator', pass: 'At least 10% of items at Analyze or above.', fail: '90%+ items at Remember/Understand.' },
    { short: 'Metrics Page', full: 'A book-metrics report exists showing word counts, sim counts, quiz counts.', tool: 'book-metrics-generator', pass: 'Metrics page auto-generated and current.', fail: 'No metrics page or stale data.' },
    { short: 'Quality Dashboard', full: 'Synthetic quality dashboard demonstrates what real analytics could look like.', tool: 'aggregate-quality-dashboard', pass: 'Dashboard with 4 panels and disclaimer.', fail: 'No dashboard or missing disclaimer.' },
    { short: 'Retrieval Prompts', full: 'Every chapter includes at least one retrieval prompt (not re-reading).', tool: 'Manual check', pass: 'All chapters have "close the book" prompts.', fail: 'Chapters with no retrieval exercises.' }
  ]},
  { name: 'Systems & Evidence', color: '#EC4899', items: [
    { short: 'Causal Loops', full: 'Chapters with interacting variables include CLD diagrams with polarities.', tool: 'Manual check', pass: 'CLDs present with R/B labels and walkthroughs.', fail: 'No CLDs where variables interact.' },
    { short: 'Critical Thinking', full: 'Each chapter has at least one prompt asking readers to evaluate or critique a claim.', tool: 'Manual check', pass: 'Evaluate-level prompts in every chapter.', fail: 'Only recall prompts.' },
    { short: 'References', full: 'Each chapter has 10 curated references with relevance descriptions.', tool: 'reference-generator', pass: 'All 15 chapters have references.md files.', fail: 'Missing references or broken links.' },
    { short: 'Writing Style', full: 'Body text follows the style guide: no "obviously", no hype, active voice.', tool: 'Manual check', pass: 'Clean read-aloud with no style violations.', fail: 'Multiple style guide violations per chapter.' }
  ]}
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  // Initialize scores
  let total = 0;
  for (let cat of categories) total += cat.items.length;
  scores = new Array(total).fill(0);

  modeSelect = createSelect();
  modeSelect.parent(document.querySelector('main'));
  modeSelect.option('Explore Mode', 'explore');
  modeSelect.option('Self-Audit Mode', 'audit');
  modeSelect.changed(() => {
    mode = modeSelect.value();
  });
  modeSelect.style('margin', '8px');
  modeSelect.style('padding', '6px 12px');
  modeSelect.style('font-size', '14px');
  modeSelect.style('border-radius', '4px');
  modeSelect.style('border', '1px solid #ccc');

  describe('Interactive capstone rubric board with 20 criteria across 5 categories. Hover to explore or switch to self-audit mode to evaluate your chapter draft.', LABEL);
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
  text('Capstone Rubric Board', canvasWidth / 2, 6);
  textStyle(NORMAL);
  textSize(10);
  fill('#666');
  text('20 criteria across 5 categories', canvasWidth / 2, 24);

  detectHover();
  drawRubricGrid();

  if (mode === 'explore') {
    drawExploreTooltip();
  } else {
    drawAuditSummary();
  }
}

function drawRubricGrid() {
  let margin = 10;
  let topY = 40;
  let cols = 4;
  let gap = 5;
  let catGap = 4;
  let catLabelW = 85;
  let cellW = (canvasWidth - 2 * margin - catLabelW - (cols - 1) * gap) / cols;
  let catH = 24;
  let rowH = catH;

  let itemIdx = 0;
  let y = topY;

  for (let ci = 0; ci < categories.length; ci++) {
    let cat = categories[ci];
    let catColor = color(cat.color);

    // Category label
    fill(catColor);
    noStroke();
    textSize(10);
    textAlign(RIGHT, CENTER);
    textStyle(BOLD);
    text(cat.name, margin + catLabelW - 5, y + (cat.items.length * (rowH + gap)) / 2 - gap / 2);
    textStyle(NORMAL);

    // Category color bar
    fill(red(catColor), green(catColor), blue(catColor), 60);
    noStroke();
    rect(margin + catLabelW - 2, y - 2, canvasWidth - 2 * margin - catLabelW + 4, cat.items.length * (rowH + gap) - gap + 4, 4);

    for (let ii = 0; ii < cat.items.length; ii++) {
      let item = cat.items[ii];
      let isHovered = (hoveredItem === itemIdx);

      let cx = margin + catLabelW;
      let cy = y;

      // Cell
      let cellFullW = canvasWidth - 2 * margin - catLabelW;

      if (mode === 'audit') {
        // Show score state
        let sc = scores[itemIdx];
        let bgColor;
        if (sc === 3) bgColor = color(16, 185, 129, 60); // pass green
        else if (sc === 2) bgColor = color(245, 158, 11, 60); // partial amber
        else if (sc === 1) bgColor = color(239, 68, 68, 60); // fail red
        else bgColor = color(255);

        fill(bgColor);
        stroke(isHovered ? 50 : color(red(catColor), green(catColor), blue(catColor), 80));
        strokeWeight(isHovered ? 2 : 1);
        rect(cx, cy, cellFullW, rowH, 3);

        // Score label
        let scoreLabel = ['--', 'Fail', 'Partial', 'Pass'][sc];
        fill(sc === 0 ? '#aaa' : '#333');
        noStroke();
        textSize(9);
        textAlign(RIGHT, CENTER);
        text(scoreLabel, cx + cellFullW - 8, cy + rowH / 2);
      } else {
        fill(isHovered ? color(red(catColor), green(catColor), blue(catColor), 40) : 255);
        stroke(isHovered ? catColor : color(red(catColor), green(catColor), blue(catColor), 80));
        strokeWeight(isHovered ? 2 : 1);
        rect(cx, cy, cellFullW, rowH, 3);
      }

      // Item label
      fill('#333');
      noStroke();
      textSize(10);
      textAlign(LEFT, CENTER);
      text(item.short, cx + 8, cy + rowH / 2);

      // Tool tag
      if (item.tool) {
        fill('#999');
        textSize(8);
        textAlign(LEFT, CENTER);
        text(item.tool, cx + 150, cy + rowH / 2);
      }

      itemIdx++;
      y += rowH + gap;
    }
    y += catGap;
  }
}

function drawExploreTooltip() {
  if (hoveredItem < 0) {
    fill('#888');
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    text('Hover over a rubric item to see the full criterion', canvasWidth / 2, drawHeight - 15);
    return;
  }

  let item = getItemByIndex(hoveredItem);
  if (!item) return;

  let tipY = drawHeight - 90;
  let tipW = canvasWidth - 20;

  fill(255);
  stroke('#3B82F6');
  strokeWeight(2);
  rect(10, tipY, tipW, 80, 8);

  let tx = 18;
  fill('#333');
  noStroke();
  textSize(11);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text(item.short, tx, tipY + 6);
  textStyle(NORMAL);

  fill('#555');
  textSize(10);
  text(item.full, tx, tipY + 22, tipW - 16);

  fill('#16A34A');
  textSize(9);
  text('Pass: ' + item.pass, tx, tipY + 50, tipW / 2 - 20);

  fill('#DC2626');
  text('Fail: ' + item.fail, tx + tipW / 2, tipY + 50, tipW / 2 - 20);
}

function drawAuditSummary() {
  let passCount = scores.filter(s => s === 3).length;
  let partialCount = scores.filter(s => s === 2).length;
  let failCount = scores.filter(s => s === 1).length;
  let unsetCount = scores.filter(s => s === 0).length;

  let barY = drawHeight - 40;
  fill('#333');
  noStroke();
  textSize(11);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  let summary = 'Pass: ' + passCount + '  |  Partial: ' + partialCount + '  |  Fail: ' + failCount + '  |  Unscored: ' + unsetCount;
  text(summary, canvasWidth / 2, barY);
  textStyle(NORMAL);

  fill('#888');
  textSize(9);
  text('Click items to cycle: -- > Fail > Partial > Pass > --', canvasWidth / 2, barY + 18);
}

function getItemByIndex(idx) {
  let i = 0;
  for (let cat of categories) {
    for (let item of cat.items) {
      if (i === idx) return item;
      i++;
    }
  }
  return null;
}

function detectHover() {
  hoveredItem = -1;
  let margin = 10;
  let topY = 40;
  let gap = 5;
  let catGap = 4;
  let catLabelW = 85;
  let rowH = 24;
  let cellFullW = canvasWidth - 2 * margin - catLabelW;
  let cx = margin + catLabelW;

  let itemIdx = 0;
  let y = topY;

  for (let ci = 0; ci < categories.length; ci++) {
    let cat = categories[ci];
    for (let ii = 0; ii < cat.items.length; ii++) {
      if (mouseX >= cx && mouseX <= cx + cellFullW && mouseY >= y && mouseY <= y + rowH) {
        hoveredItem = itemIdx;
        return;
      }
      itemIdx++;
      y += rowH + gap;
    }
    y += catGap;
  }
}

function mousePressed() {
  if (mode !== 'audit') return;
  if (hoveredItem < 0) return;

  // Cycle: 0 -> 1 -> 2 -> 3 -> 0
  scores[hoveredItem] = (scores[hoveredItem] + 1) % 4;
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
