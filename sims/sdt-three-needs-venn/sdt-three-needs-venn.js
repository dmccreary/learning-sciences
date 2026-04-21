// SDT Three Needs Venn - Interactive MicroSim
// Three-circle Venn diagram for Autonomy, Competence, Relatedness

let canvasWidth = 600;
let drawHeight = 520;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;

let modeSelect, resetBtn;
let hoveredRegion = '';

const needs = {
  autonomy: {
    name: 'Autonomy',
    color: '#4A90D9',
    feeling: 'Learners feel ownership and agency over their learning path.',
    designs: ['Offer choices in assignment topics or formats', 'Let learners set their own pace through chapters']
  },
  competence: {
    name: 'Competence',
    color: '#7ED321',
    feeling: 'Learners feel capable and effective as their skills grow.',
    designs: ['Provide clear progress indicators and mastery badges', 'Scaffold difficulty so early wins build confidence']
  },
  relatedness: {
    name: 'Relatedness',
    color: '#F5A623',
    feeling: 'Learners feel connected to peers, instructors, and the learning community.',
    designs: ['Include collaborative exercises and peer review', 'Use Bloom the mascot to create a warm, human tone']
  },
  'autonomy+competence': {
    name: 'Autonomy + Competence',
    feeling: 'Learners choose challenging goals and feel skilled enough to pursue them.',
    designs: ['Let learners pick difficulty level in MicroSims', 'Provide optional stretch exercises with feedback']
  },
  'autonomy+relatedness': {
    name: 'Autonomy + Relatedness',
    feeling: 'Learners feel free to explore while supported by a community.',
    designs: ['Create study groups that let members choose focus areas', 'Enable optional peer mentoring']
  },
  'competence+relatedness': {
    name: 'Competence + Relatedness',
    feeling: 'Learners grow together and celebrate shared mastery.',
    designs: ['Use team-based problem-solving with shared rubrics', 'Publish a class leaderboard of concepts mastered']
  },
  center: {
    name: 'Intrinsic Motivation',
    feeling: 'All three needs met: learners are deeply, sustainably motivated.',
    designs: ['Design the full course to honor choice, growth, and belonging', 'This is the target state for every intelligent textbook chapter']
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
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textFont('Arial');

  modeSelect = createSelect();
  modeSelect.parent(document.querySelector('main'));
  modeSelect.option('Explore');
  modeSelect.selected('Explore');
  modeSelect.style('font-size', '14px');
  modeSelect.style('padding', '4px 8px');
  modeSelect.style('margin', '4px');

  resetBtn = createButton('Reset');
  resetBtn.parent(document.querySelector('main'));
  resetBtn.style('font-size', '14px');
  resetBtn.style('padding', '4px 12px');
  resetBtn.style('margin', '4px');

  describe('Three overlapping circles in a Venn diagram representing Autonomy, Competence, and Relatedness from Self-Determination Theory. Hover regions to explore.');
}

function getCirclePositions() {
  let cx = canvasWidth / 2;
  let cy = drawHeight / 2 + 15;
  let r = min(canvasWidth, drawHeight) * 0.22;
  let spread = r * 0.7;

  return {
    autonomy: { x: cx, y: cy - spread, r: r },
    competence: { x: cx - spread * cos(PI / 6), y: cy + spread * sin(PI / 6), r: r },
    relatedness: { x: cx + spread * cos(PI / 6), y: cy + spread * sin(PI / 6), r: r }
  };
}

function identifyRegion(mx, my) {
  let pos = getCirclePositions();
  let inA = dist(mx, my, pos.autonomy.x, pos.autonomy.y) < pos.autonomy.r;
  let inC = dist(mx, my, pos.competence.x, pos.competence.y) < pos.competence.r;
  let inR = dist(mx, my, pos.relatedness.x, pos.relatedness.y) < pos.relatedness.r;

  if (inA && inC && inR) return 'center';
  if (inA && inC) return 'autonomy+competence';
  if (inA && inR) return 'autonomy+relatedness';
  if (inC && inR) return 'competence+relatedness';
  if (inA) return 'autonomy';
  if (inC) return 'competence';
  if (inR) return 'relatedness';
  return '';
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
  text('Self-Determination Theory: Three Basic Needs', canvasWidth / 2, 10);

  fill('#666');
  textSize(12);
  text('Hover over any region to learn more', canvasWidth / 2, 34);

  let pos = getCirclePositions();
  hoveredRegion = identifyRegion(mouseX, mouseY);

  // Draw circles with transparency
  drawingContext.globalCompositeOperation = 'multiply';

  // Autonomy circle
  noStroke();
  let aAlpha = (hoveredRegion === 'autonomy' || hoveredRegion.includes('autonomy') || hoveredRegion === 'center') ? 120 : 80;
  fill(74, 144, 217, aAlpha);
  ellipse(pos.autonomy.x, pos.autonomy.y, pos.autonomy.r * 2);

  // Competence circle
  let cAlpha = (hoveredRegion === 'competence' || hoveredRegion.includes('competence') || hoveredRegion === 'center') ? 120 : 80;
  fill(126, 211, 33, cAlpha);
  ellipse(pos.competence.x, pos.competence.y, pos.competence.r * 2);

  // Relatedness circle
  let rAlpha = (hoveredRegion === 'relatedness' || hoveredRegion.includes('relatedness') || hoveredRegion === 'center') ? 120 : 80;
  fill(245, 166, 35, rAlpha);
  ellipse(pos.relatedness.x, pos.relatedness.y, pos.relatedness.r * 2);

  drawingContext.globalCompositeOperation = 'source-over';

  // Circle outlines
  noFill();
  stroke('#4A90D9');
  strokeWeight(2);
  ellipse(pos.autonomy.x, pos.autonomy.y, pos.autonomy.r * 2);
  stroke('#7ED321');
  ellipse(pos.competence.x, pos.competence.y, pos.competence.r * 2);
  stroke('#F5A623');
  ellipse(pos.relatedness.x, pos.relatedness.y, pos.relatedness.r * 2);

  // Labels on circles
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  textStyle(BOLD);

  fill('#2060A0');
  text('Autonomy', pos.autonomy.x, pos.autonomy.y - pos.autonomy.r * 0.55);

  fill('#4A8C10');
  text('Competence', pos.competence.x - pos.competence.r * 0.3, pos.competence.y + pos.competence.r * 0.55);

  fill('#C07800');
  text('Relatedness', pos.relatedness.x + pos.relatedness.r * 0.3, pos.relatedness.y + pos.relatedness.r * 0.55);

  // Center label
  fill('#333');
  textSize(10);
  textStyle(BOLD);
  let centerX = canvasWidth / 2;
  let centerY = (pos.autonomy.y + pos.competence.y + pos.relatedness.y) / 3;
  text('Intrinsic\nMotivation', centerX, centerY);
  textStyle(NORMAL);

  // Tooltip
  if (hoveredRegion && needs[hoveredRegion]) {
    drawTooltip(hoveredRegion);
  }

  // Control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);
}

function drawTooltip(regionKey) {
  let info = needs[regionKey];
  let tw = min(290, canvasWidth - 20);
  let th = 105;
  let tx = constrain(mouseX + 15, 5, canvasWidth - tw - 5);
  let ty = constrain(mouseY - th - 10, 5, drawHeight - th - 5);

  fill(0, 0, 0, 30);
  noStroke();
  rect(tx + 3, ty + 3, tw, th, 6);

  fill(255, 255, 255, 245);
  stroke('#ccc');
  strokeWeight(1);
  rect(tx, ty, tw, th, 6);

  noStroke();
  let py = ty + 10;

  fill('#1a3a6c');
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text(info.name, tx + 10, py);
  textStyle(NORMAL);
  py += 20;

  fill('#333');
  textSize(11);
  text(info.feeling, tx + 10, py, tw - 20);
  py += 30;

  fill('#555');
  textSize(10);
  text('Design decisions:', tx + 10, py);
  py += 14;
  for (let d of info.designs) {
    text('- ' + d, tx + 10, py, tw - 20);
    py += 16;
  }
}

function windowResized() {
  updateCanvasSize();
  canvasHeight = drawHeight + controlHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
