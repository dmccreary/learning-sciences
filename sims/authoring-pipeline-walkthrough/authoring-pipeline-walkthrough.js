// Authoring Pipeline Walkthrough - Interactive MicroSim
// Animates the flow from author request through Claude Code to published chapter.

let canvasWidth = 600;
let drawHeight = 480;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let playBtn, speedSlider, skillSelect, resetBtn;
let isPlaying = false;
let tokenX = 0;
let tokenY = 0;
let tokenStage = -1; // -1 = not started, 0-4 = lanes
let tokenProgress = 0; // 0 to 1 within a stage
let speed = 1;
let artifacts = [];
let glowPhase = 0;

const lanes = [
  { name: 'Author', color: '#4A90D9', icon: '✍️', desc: 'Types a natural-language request' },
  { name: 'Claude Code', color: '#5BA8C8', icon: '🤖', desc: 'Receives request, selects skill' },
  { name: 'Agent Skill', color: '#6BBF8A', icon: '⚙️', desc: 'Runs skill, generates content' },
  { name: 'Markdown Files', color: '#F5C342', icon: '📄', desc: 'Written to docs/chapters/' },
  { name: 'MkDocs Material', color: '#E8943A', icon: '🌐', desc: 'Builds and serves the site' }
];

const skillArtifacts = {
  'Chapter Content': ['chapter.md', 'index.md', 'references.md'],
  'Glossary': ['glossary.md', 'terms.json'],
  'Quiz': ['quiz.md', 'questions.json'],
  'MicroSim': ['main.html', 'sketch.js', 'index.md']
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

  playBtn = createButton('▶ Play');
  playBtn.parent(document.querySelector('main'));
  playBtn.style('font-size', '14px');
  playBtn.style('padding', '4px 12px');
  playBtn.style('margin', '4px');
  playBtn.mousePressed(togglePlay);

  let speedLabel = createSpan(' Speed: ');
  speedLabel.parent(document.querySelector('main'));
  speedLabel.style('font-size', '13px');

  speedSlider = createSlider(0.5, 3, 1, 0.25);
  speedSlider.parent(document.querySelector('main'));
  speedSlider.style('width', '100px');
  speedSlider.style('margin', '4px');

  let skillLabel = createSpan(' Skill: ');
  skillLabel.parent(document.querySelector('main'));
  skillLabel.style('font-size', '13px');

  skillSelect = createSelect();
  skillSelect.parent(document.querySelector('main'));
  skillSelect.option('Chapter Content');
  skillSelect.option('Glossary');
  skillSelect.option('Quiz');
  skillSelect.option('MicroSim');
  skillSelect.style('font-size', '14px');
  skillSelect.style('padding', '2px 6px');
  skillSelect.style('margin', '4px');

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('font-size', '14px');
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('margin', '4px');
  resetBtn.mousePressed(doReset);

  describe('Animated authoring pipeline showing five lanes: Author, Claude Code, Agent Skill, Markdown Files, and MkDocs Material. A glowing token flows through the lanes.');
}

function togglePlay() {
  isPlaying = !isPlaying;
  playBtn.html(isPlaying ? '⏸ Pause' : '▶ Play');
  if (isPlaying && tokenStage === -1) {
    tokenStage = 0;
    tokenProgress = 0;
    artifacts = [];
  }
}

function doReset() {
  isPlaying = false;
  playBtn.html('▶ Play');
  tokenStage = -1;
  tokenProgress = 0;
  artifacts = [];
}

function getLaneY(i) {
  let topMargin = 50;
  let laneHeight = (drawHeight - topMargin - 20) / 5;
  return topMargin + i * laneHeight;
}

function getLaneHeight() {
  let topMargin = 50;
  return (drawHeight - topMargin - 20) / 5;
}

function draw() {
  speed = speedSlider.value();

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
  text('The Authoring Pipeline in Motion', canvasWidth / 2, 10);

  let laneH = getLaneHeight();
  let labelWidth = 120;
  let contentStart = labelWidth + 10;
  let contentWidth = canvasWidth - contentStart - 20;

  // Draw lanes
  for (let i = 0; i < 5; i++) {
    let ly = getLaneY(i);
    let lane = lanes[i];

    // Lane background
    let c = color(lane.color);
    fill(red(c), green(c), blue(c), 25);
    stroke(lane.color);
    strokeWeight(1);
    rect(contentStart, ly + 2, contentWidth, laneH - 4, 6);

    // Active lane highlight
    if (tokenStage === i) {
      fill(red(c), green(c), blue(c), 50);
      noStroke();
      rect(contentStart, ly + 2, contentWidth, laneH - 4, 6);
    }

    // Label
    noStroke();
    fill(lane.color);
    textAlign(RIGHT, CENTER);
    textSize(13);
    textStyle(BOLD);
    text(lane.name, labelWidth, ly + laneH / 2);
    textStyle(NORMAL);

    // Description
    fill('#666');
    textAlign(LEFT, CENTER);
    textSize(11);
    text(lane.desc, contentStart + 10, ly + laneH / 2);

    // Arrow between lanes
    if (i < 4) {
      let arrowX = contentStart + contentWidth / 2;
      let arrowY = ly + laneH;
      fill('#999');
      noStroke();
      triangle(arrowX - 6, arrowY - 3, arrowX + 6, arrowY - 3, arrowX, arrowY + 5);
    }
  }

  // Draw artifacts
  for (let art of artifacts) {
    let ly = getLaneY(art.lane);
    fill('#fff');
    stroke(lanes[art.lane].color);
    strokeWeight(1.5);
    rect(art.x, ly + laneH / 2 - 12, art.w, 24, 4);

    noStroke();
    fill('#333');
    textAlign(CENTER, CENTER);
    textSize(10);
    text(art.label, art.x + art.w / 2, ly + laneH / 2);
  }

  // Draw skill name in lane 2 when active
  if (tokenStage >= 2) {
    let ly = getLaneY(2);
    noStroke();
    fill(lanes[2].color);
    textAlign(CENTER, CENTER);
    textSize(12);
    textStyle(BOLD);
    text(skillSelect.value() + ' Generator', contentStart + contentWidth / 2, ly + laneH / 2 + 14);
    textStyle(NORMAL);
  }

  // Animate token
  if (isPlaying && tokenStage >= 0 && tokenStage < 5) {
    tokenProgress += 0.008 * speed;

    if (tokenProgress >= 1) {
      // Drop artifacts when leaving lanes 3 and 4
      if (tokenStage === 3) {
        let files = skillArtifacts[skillSelect.value()] || ['output.md'];
        let ly = getLaneY(3);
        let startX = contentStart + 20;
        for (let j = 0; j < files.length; j++) {
          artifacts.push({
            lane: 3,
            label: files[j],
            x: startX + j * 90,
            w: 80
          });
        }
      }
      if (tokenStage === 4) {
        artifacts.push({
          lane: 4,
          label: '✓ Published',
          x: contentStart + contentWidth / 2 - 40,
          w: 80
        });
      }

      tokenStage++;
      tokenProgress = 0;
      if (tokenStage >= 5) {
        isPlaying = false;
        playBtn.html('▶ Play');
      }
    }
  }

  // Draw token
  if (tokenStage >= 0 && tokenStage < 5) {
    let ly = getLaneY(tokenStage);
    let tx = contentStart + tokenProgress * contentWidth;
    let ty = ly + laneH / 2;

    glowPhase += 0.05;
    let glowSize = 18 + sin(glowPhase) * 4;

    // Glow
    noStroke();
    for (let r = glowSize; r > 6; r -= 3) {
      let alpha = map(r, 6, glowSize, 180, 20);
      fill(255, 165, 0, alpha);
      ellipse(tx, ty, r * 2, r * 2);
    }

    // Core
    fill('#FF8C00');
    stroke('#fff');
    strokeWeight(2);
    ellipse(tx, ty, 14, 14);

    // Token label
    noStroke();
    fill('#fff');
    textAlign(CENTER, CENTER);
    textSize(8);
    text('→', tx, ty);
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
