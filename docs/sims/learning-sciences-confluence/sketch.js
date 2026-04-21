// Parent Disciplines of Learning Sciences - Interactive Flowchart
// Click each box to learn about it. Visit all boxes to see a celebration!

let canvasWidth = 400;
let drawHeight = 580;
let nodes = [];
let arrows = [];
let selectedNode = null;
let visitedNodes = new Set();
let celebrating = false;
let celebrationStart = 0;
let confetti = [];

// Node descriptions
const descriptions = {
  CS: {
    title: "Cognitive Science",
    desc: "Cognitive Science studies how the mind processes information — including perception, memory, attention, and problem-solving. It provides Learning Sciences with models of how learners encode, store, and retrieve knowledge, and why some instructional strategies work better than others."
  },
  EP: {
    title: "Educational Psychology",
    desc: "Educational Psychology investigates how people learn in educational settings. It contributes theories of motivation (intrinsic vs. extrinsic), developmental stages, self-regulation, and the social dynamics of classrooms — all essential for designing effective learning experiences."
  },
  NL: {
    title: "Neuroscience in Learning",
    desc: "Neuroscience in Learning explores the biological basis of learning — how neural pathways strengthen through practice, how sleep consolidates memory, and what happens in the brain during moments of insight. It grounds instructional choices in biological mechanism and constraint."
  },
  ID: {
    title: "Instructional Design",
    desc: "Instructional Design is the translation layer between research and practice. It provides frameworks (like ADDIE, backward design, and Universal Design for Learning) for turning cognitive and psychological findings into concrete curricula, lessons, and assessments."
  },
  LS: {
    title: "Learning Sciences",
    desc: "Learning Sciences is the convergence field where cognitive science, educational psychology, neuroscience, and instructional design meet. It is an interdisciplinary field focused on understanding and improving how people learn — in classrooms, online, at work, and in everyday life."
  },
  ITD: {
    title: "Intelligent Textbook Design",
    desc: "Intelligent Textbook Design applies Learning Sciences research to create adaptive, interactive textbooks. These books use MicroSims, spaced retrieval prompts, mastery tracking, and AI-driven personalization to move beyond static text toward active learning experiences."
  }
};

function updateCanvasSize() {
  canvasWidth = select('main').elt.getBoundingClientRect().width;
  if (canvasWidth < 300) canvasWidth = 300;
}

function setup() {
  updateCanvasSize();
  let canvas = createCanvas(canvasWidth, drawHeight);
  canvas.parent(document.querySelector('main'));
  textAlign(CENTER, CENTER);
  buildGraph();
}

function buildGraph() {
  nodes = [];
  arrows = [];

  let cx = canvasWidth / 2;
  let nodeW = 160;
  let nodeH = 44;
  let topY = 50;
  let midY = 180;
  let botY = 310;

  // Adjust spacing based on canvas width
  let spacing = min(canvasWidth / 4, 180);
  let leftX = cx - spacing;
  let rightX = cx + spacing;

  // Top row: 3 research disciplines
  nodes.push(makeNode("CS", "Cognitive Science", leftX - spacing / 2, topY, nodeW, nodeH, "research"));
  nodes.push(makeNode("EP", "Educational Psychology", cx, topY, nodeW, nodeH, "research"));
  nodes.push(makeNode("NL", "Neuroscience\nin Learning", rightX + spacing / 2, topY, nodeW, nodeH, "research"));

  // Middle row: Instructional Design + Learning Sciences
  nodes.push(makeNode("ID", "Instructional\nDesign", cx - spacing * 0.7, midY, nodeW, nodeH, "translation"));
  nodes.push(makeNode("LS", "Learning\nSciences", cx + spacing * 0.3, midY, nodeW, nodeH, "convergence"));

  // Bottom row: output
  nodes.push(makeNode("ITD", "Intelligent Textbook\nDesign", cx, botY, nodeW, nodeH, "output"));

  // Arrows: from → to, with labels
  arrows.push({ from: "CS", to: "LS", label: "memory &\nattention" });
  arrows.push({ from: "EP", to: "LS", label: "motivation &\ndevelopment" });
  arrows.push({ from: "NL", to: "LS", label: "mechanism &\nconstraint" });
  arrows.push({ from: "ID", to: "LS", label: "translation\nto practice" });
  arrows.push({ from: "LS", to: "ITD", label: "applied to" });
}

function makeNode(id, label, x, y, w, h, type) {
  return { id, label, x, y, w, h, type };
}

function getNodeById(id) {
  return nodes.find(n => n.id === id);
}

function getNodeColor(type, hover, visited) {
  let colors = {
    research:    { base: [74, 144, 217],  hover: [94, 164, 237] },
    translation: { base: [107, 174, 214], hover: [127, 194, 234] },
    convergence: { base: [33, 113, 181],  hover: [53, 133, 201] },
    output:      { base: [8, 48, 107],    hover: [28, 68, 127] }
  };
  let c = colors[type] || colors.research;
  let rgb = hover ? c.hover : c.base;
  if (visited && !hover) {
    // Slightly brighter to indicate visited
    rgb = rgb.map(v => min(255, v + 30));
  }
  return rgb;
}

function draw() {
  background(255);

  // Title
  fill(51);
  noStroke();
  textSize(18);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Parent Disciplines of Learning Sciences", canvasWidth / 2, 16);

  // Draw arrows first (behind nodes)
  drawArrows();

  // Draw nodes
  let hoverNode = null;
  for (let n of nodes) {
    let isHover = isMouseOver(n);
    if (isHover) hoverNode = n;
    let isVisited = visitedNodes.has(n.id);
    let isSelected = selectedNode && selectedNode.id === n.id;
    drawNode(n, isHover, isVisited, isSelected);
  }

  // Cursor
  if (hoverNode) cursor(HAND);
  else cursor(ARROW);

  // Progress bar
  drawProgress();

  // Info panel
  drawInfoPanel();

  // Celebration
  if (celebrating) {
    drawCelebration();
  }
}

function drawNode(n, hover, visited, selected) {
  let rgb = getNodeColor(n.type, hover, visited);

  // Shadow for selected
  if (selected) {
    noStroke();
    fill(0, 0, 0, 40);
    rect(n.x - n.w / 2 + 3, n.y - n.h / 2 + 3, n.w, n.h, 8);
  }

  // Node body
  if (selected) {
    stroke(255, 200, 0);
    strokeWeight(3);
  } else if (visited) {
    stroke(100, 200, 100);
    strokeWeight(2);
  } else {
    stroke(rgb[0] - 40, rgb[1] - 40, rgb[2] - 40);
    strokeWeight(1);
  }
  fill(rgb[0], rgb[1], rgb[2]);
  rect(n.x - n.w / 2, n.y - n.h / 2, n.w, n.h, 8);

  // Visited checkmark
  if (visited) {
    fill(100, 220, 100);
    noStroke();
    ellipse(n.x + n.w / 2 - 8, n.y - n.h / 2 + 8, 16, 16);
    fill(255);
    textSize(11);
    textStyle(BOLD);
    text("✓", n.x + n.w / 2 - 8, n.y - n.h / 2 + 7);
  }

  // Label
  fill(255);
  noStroke();
  textSize(12);
  textStyle(BOLD);
  text(n.label, n.x, n.y);
}

function drawArrows() {
  for (let a of arrows) {
    let fromN = getNodeById(a.from);
    let toN = getNodeById(a.to);
    if (!fromN || !toN) continue;

    // Calculate arrow start/end at node edges
    let x1 = fromN.x;
    let y1 = fromN.y + fromN.h / 2;
    let x2 = toN.x;
    let y2 = toN.y - toN.h / 2;

    // Draw line
    stroke(120);
    strokeWeight(1.5);
    line(x1, y1, x2, y2);

    // Arrowhead
    let angle = atan2(y2 - y1, x2 - x1);
    let aSize = 8;
    fill(120);
    noStroke();
    triangle(
      x2, y2,
      x2 - aSize * cos(angle - PI / 6), y2 - aSize * sin(angle - PI / 6),
      x2 - aSize * cos(angle + PI / 6), y2 - aSize * sin(angle + PI / 6)
    );

    // Label on arrow
    let mx = (x1 + x2) / 2;
    let my = (y1 + y2) / 2;
    noStroke();
    fill(255, 255, 255, 200);
    let labelW = textWidth(a.label.replace('\n', '  ')) + 12;
    rect(mx - labelW / 2, my - 14, labelW, 28, 4);
    fill(80);
    textSize(10);
    textStyle(NORMAL);
    text(a.label, mx, my);
  }
}

function drawProgress() {
  let total = nodes.length;
  let visited = visitedNodes.size;
  let y = 345;

  // Progress text
  fill(80);
  noStroke();
  textSize(13);
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
  text(`Explored: ${visited} / ${total}`, canvasWidth / 2, y);

  // Progress bar
  let barW = min(canvasWidth - 60, 300);
  let barH = 10;
  let barX = (canvasWidth - barW) / 2;
  let barY = y + 14;

  fill(220);
  noStroke();
  rect(barX, barY, barW, barH, 5);

  let pct = visited / total;
  if (pct > 0) {
    fill(100, 200, 100);
    rect(barX, barY, barW * pct, barH, 5);
  }
}

function drawInfoPanel() {
  let panelY = 380;
  let panelH = 190;
  let panelMargin = 20;
  let panelW = canvasWidth - panelMargin * 2;

  // Panel background
  fill(245, 247, 250);
  stroke(200);
  strokeWeight(1);
  rect(panelMargin, panelY, panelW, panelH, 8);

  if (selectedNode) {
    let info = descriptions[selectedNode.id];
    // Title
    fill(33, 113, 181);
    noStroke();
    textSize(16);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text(info.title, panelMargin + 14, panelY + 12);

    // Divider
    stroke(200);
    strokeWeight(1);
    line(panelMargin + 14, panelY + 34, panelMargin + panelW - 14, panelY + 34);

    // Description - word wrap
    fill(60);
    noStroke();
    textSize(12);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    textLeading(18);
    text(info.desc, panelMargin + 14, panelY + 42, panelW - 28, panelH - 56);
  } else {
    // Placeholder
    fill(150);
    noStroke();
    textSize(14);
    textStyle(ITALIC);
    textAlign(CENTER, CENTER);
    text("Click any box above to learn about it.", canvasWidth / 2, panelY + panelH / 2);
  }
}

function drawCelebration() {
  let elapsed = millis() - celebrationStart;

  // Generate confetti on first frame
  if (confetti.length === 0) {
    for (let i = 0; i < 80; i++) {
      confetti.push({
        x: random(canvasWidth),
        y: random(-drawHeight, 0),
        vx: random(-2, 2),
        vy: random(2, 5),
        size: random(4, 10),
        color: [
          [255, 107, 107], [78, 205, 196], [255, 230, 109],
          [162, 155, 254], [0, 210, 211], [255, 154, 162]
        ][floor(random(6))],
        rot: random(TWO_PI),
        rotSpeed: random(-0.1, 0.1)
      });
    }
  }

  // Draw confetti
  for (let c of confetti) {
    c.x += c.vx;
    c.y += c.vy;
    c.rot += c.rotSpeed;

    push();
    translate(c.x, c.y);
    rotate(c.rot);
    fill(c.color[0], c.color[1], c.color[2], map(elapsed, 3000, 5000, 255, 0, true));
    noStroke();
    rect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6, 1);
    pop();
  }

  // Celebration text
  let alpha = elapsed < 3000 ? 255 : map(elapsed, 3000, 5000, 255, 0, true);
  fill(33, 113, 181, alpha);
  noStroke();
  textSize(22);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("🎉  All disciplines explored!  🎉", canvasWidth / 2, 340);

  if (elapsed > 5000) {
    celebrating = false;
    confetti = [];
  }
}

function isMouseOver(n) {
  return mouseX >= n.x - n.w / 2 && mouseX <= n.x + n.w / 2 &&
         mouseY >= n.y - n.h / 2 && mouseY <= n.y + n.h / 2;
}

function mousePressed() {
  for (let n of nodes) {
    if (isMouseOver(n)) {
      selectedNode = n;
      let wasComplete = visitedNodes.size === nodes.length;
      visitedNodes.add(n.id);
      if (!wasComplete && visitedNodes.size === nodes.length) {
        celebrating = true;
        celebrationStart = millis();
        confetti = [];
      }
      return;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, drawHeight);
  buildGraph();
}
