---
title: MicroSims and Interactive Visualizations
description: Defines the MicroSim as the interactive heart of an intelligent textbook, grounds its design principles in cognitive load theory and Mayer's multimedia learning principles, introduces the seven libraries the project uses (p5.js, Chart.js, Plotly, Mermaid, vis-network, Leaflet, Venn.js), treats the diagram-overlay pattern and interactive infographics, and covers the production concerns — iframe embedding, control-complexity budgets, and screen-capture automation — that make MicroSims deployable at scale.
generated_by: claude skill chapter-content-generator
date: 2026-04-19 12:55:00
version: 0.07
---

# MicroSims and Interactive Visualizations

!!! mascot-welcome "Welcome — An Interactive Simulation Is Worth Ten Thousand Words"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    A picture is worth a thousand words, and the old saying has been load-bearing in textbooks for a century. An *interactive simulation* the reader can perturb, rewind, and explore is worth an order of magnitude more — because the reader is no longer guessing what would happen if a variable changed; they are watching it change. In this chapter we will treat that jump carefully. The power is real; the footguns are also real, and most of them live in the gap between "interactive" and "instructive." Let's build a mental model.

## Summary

MicroSims are the interactive heart of an intelligent textbook. We cover the MicroSim concept, design principles, control-complexity management, iframe embedding, screen-capture automation, and the libraries readers will choose among (p5.js, Chart.js, Plotly, Mermaid, vis-network, Leaflet, Venn.js). We close with interactive infographics and the diagram overlay pattern — the go-to choice when a concept has spatial structure worth pointing at.

## Concepts Covered

This chapter covers the following 14 concepts from the learning graph:

1. MicroSim
2. MicroSim Design Principles
3. p5.js Library
4. Chart.js Library
5. Plotly Library
6. Mermaid Diagram
7. vis-network Library
8. Leaflet Map Library
9. Venn.js Library
10. Interactive Infographic
11. MicroSim Control Complexity
12. Iframe Embedding
13. Screen Capture Automation
14. Diagram Overlay Pattern

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Learning Sciences](../01-foundations/index.md)
- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../10-textbook-architecture/index.md)

---

## What a MicroSim Is — and What It Is Not

A ***MicroSim*** is a small, single-concept interactive simulation embedded inline inside a chapter, scoped tightly enough that a reader can understand its purpose within ten seconds of seeing it and extract its insight within two minutes of using it. The word *small* is doing real work in that definition. A MicroSim is not a course; it is not a virtual laboratory; it is not a multi-page simulator with tabbed views and a settings panel. It is a tight interactive artifact — usually a single canvas or chart with a few controls — that makes one idea observable in motion.

By the end of this chapter you will be able to:

- Define a MicroSim and distinguish it from an interactive lab, a tutorial, and a static diagram.
- State Mayer's multimedia-learning principles as operational design rules for MicroSims.
- Apply a control-complexity budget to a simulation and predict whether it will overflow a novice's working memory.
- Choose the right library from a set of seven candidates for a given visualization need.
- Explain the diagram-overlay pattern and state when it beats a redrawn interactive figure.
- Describe the iframe-embedding convention this book uses and name the class of errors that iframe-height calibration prevents.
- Sketch the role of screen-capture automation in a MicroSim production pipeline and name one failure mode it removes.

The distinction between a MicroSim and its neighbors is worth stating plainly before we move on. A static diagram shows the reader a frozen state; a MicroSim lets them perturb the state. An interactive lab (in the sense that PhET or simulation-based courseware uses the word) is a substantially larger artifact with many concepts bundled inside it; a MicroSim pulls one concept out. A worked example is a scripted walkthrough of a solution; a MicroSim is an exploration whose path the reader chooses. The point of the tight scope is not minimalism for its own sake — it is that every additional dimension of interactivity adds cognitive load the reader has to pay out of the same fixed budget that Chapter 4 introduced. One concept, one canvas, two to four controls is the design center.

## MicroSim Design Principles, Grounded in Evidence

The ***MicroSim design principles*** are the small set of rules we apply before any code gets written. Four of them matter enough to name.

**One concept per sim.** A MicroSim that teaches two concepts at once teaches neither; the reader cannot tell which interaction is illustrating which idea. If a chapter has two concepts worth interactive treatment, two MicroSims will serve the reader better than one composite. The discipline is the same one that keeps Unix utilities small: do one thing and do it well.

**Controls match the audience.** A MicroSim for a graduate course can assume familiarity with sliders, dropdowns, and numeric inputs; a MicroSim for a middle-school audience may need big buttons and a tutorial first click. The question is not "what control is most elegant?" but "what control will the reader recognize and use without reading a manual?"

**Responsive to container width.** Every MicroSim the project ships scales to the width of its container on both desktop and mobile viewports. The p5.js convention the project uses — `updateCanvasSize()` as the first line of `setup()` — exists because responsive sizing is not a nice-to-have; it is the rule that keeps the sim usable on the device the reader actually has.

**Accessibility by default.** Keyboard navigation for every control; color choices that survive a red-green colorblind simulation; alt text on every embedded image; a description of what the sim does in prose near the embed. A MicroSim that works only for sighted keyboard-optional readers is a sim that has excluded part of its audience.

These four principles sit on top of a richer substrate — Richard Mayer's *multimedia learning principles*, which Chapter 4 introduced as general instructional-design findings. The principles translate almost directly into MicroSim design rules, with only light rewording. The table below is the working checklist we apply before shipping.

| Mayer principle | Original rule | MicroSim design rule |
|---|---|---|
| Coherence | Exclude extraneous words, pictures, and sounds that do not support the learning goal | Remove decorative graphics, background music, and atmospheric animation; every element on the canvas earns its pixels |
| Signaling | Highlight the essential material explicitly | Use color, arrows, and labels to direct the eye to the region that changes when the reader moves a control |
| Redundancy | Do not present the same verbal information simultaneously as printed text and narration | If the sim narrates a value, do not also draw the value as a large text overlay on the canvas |
| Spatial contiguity | Place related words and pictures near each other | Labels live on the parts they name, not in a legend off to the side |
| Temporal contiguity | Present related words and pictures simultaneously, not sequentially | Numeric readouts update in the same frame as the visual changes they describe |
| Segmenting | Break continuous material into learner-paced segments | Offer step-through controls on dense sims; never autoplay past a decision point |
| Pre-training | Teach the names of key components before running the simulation | Label the parts in the chapter prose before the sim appears, not only in tooltips |
| Modality | Present words as narration rather than on-screen text when paired with graphics | When narration is added, prefer spoken audio over captions; when narration is absent, keep on-canvas text terse |

A careful reader will already be asking the right critical-thinking question: *under what conditions would you break one of these rules?* The principles are not axioms; they are empirical generalizations with effect-size estimates whose magnitude varies across populations and content types. The coherence, signaling, and contiguity principles have the strongest replication records and should be treated as near-certain defaults. The modality and personalization principles have weaker records, and the redundancy principle is known to reverse for very-low-prior-knowledge learners who benefit from both modalities until they can drop one. Breaking a principle is reasonable when the evidence for the reversal in your specific audience is stronger than the evidence for the rule — and when you can name that evidence out loud. Breaking it because it felt right is the failure mode.

!!! mascot-thinking "Principles Are Defaults, Not Axioms"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    When you catch yourself wanting to break a multimedia principle, the right move is not to suppress the instinct — it is to name the evidence that justifies the break. If the answer is *"it feels more elegant"*, trust the principle. If the answer is *"my audience is early-stage novices and the redundancy effect reverses in that population"*, break the rule and document the call. That second sentence is the habit worth building.

## MicroSim Control Complexity

***MicroSim control complexity*** is the sum of interactive dimensions — sliders, buttons, checkboxes, dropdowns, numeric inputs — the reader must hold in mind to use the simulation effectively. It is the budget line that silently bankrupts otherwise-excellent sims.

The constraint is not aesthetic; it is architectural. A reader using a MicroSim is running three processes in working memory at once. They are holding the *purpose* of the sim (what am I trying to observe?); they are tracking the *state* of the sim (what do the controls currently show?); and they are doing the *comparison* the learning objective demands (how does the output change when I move this control?). Each control adds to the second pool. On the four-item Cowan capacity floor we introduced in Chapter 4, a sim with six sliders has already spent more than the budget before the reader does any conceptual work. The germane processing — the noticing and pattern-finding that is supposed to produce learning — has nothing left to spend.

The working-rule the project uses is: *under seven controls, with four as the target and three as the ideal*. A sim that wants eight controls is usually two sims in disguise, or one sim with presets that collapse several related dimensions into a scenario dropdown. Presets are the main move for recovering from control bloat: instead of asking the reader to discover the interesting corners of a six-dimensional parameter space by hand, a scenario dropdown lets the author pre-author the corners and hand the reader a flyover. The reader still gets exploration; the exploration is pre-tuned.

The dynamics of control complexity have the shape of a loop, and naming the loop makes the failure mode easier to see before it happens.

#### Diagram: Control Complexity Dynamics — The Scaffolded-Exploration Flywheel and the Cognitive-Overload Trap

<details markdown="1">
<summary>Causal loop diagram showing how control count drives cognitive-load dynamics in MicroSims, with one reinforcing loop (R1) and one balancing-but-corrosive loop (B1)</summary>
Type: causal-loop-diagram
**sim-id:** microsim-control-complexity-loops<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing eight variable-nodes and two named loops. All nodes are noun phrases naming variables that can go up or down.

Nodes: *number of controls*, *extraneous cognitive load*, *available germane capacity*, *observation quality*, *pattern recognition*, *schema construction*, *learner confidence*, *exploration depth*.

Edges and polarities:

- number of controls → extraneous cognitive load (+) — each control the reader must hold costs capacity
- extraneous cognitive load → available germane capacity (−) — load is a zero-sum budget
- available germane capacity → observation quality (+) — germane capacity is what lets the reader notice change
- observation quality → pattern recognition (+) — clean observations feed pattern-finding
- pattern recognition → schema construction (+) — recognized patterns consolidate into schemas
- schema construction → learner confidence (+, with delay marker ⧚) — durable schemas feed confidence
- learner confidence → exploration depth (+) — a confident reader runs more scenarios
- exploration depth → pattern recognition (+) — more scenarios surface more patterns
- number of controls → exploration depth (−) — too many controls make the reader freeze; they stop exploring

Loop labels placed at each loop's geometric center:

- **R1 — Scaffolded-exploration flywheel (reinforcing, productive).** Germane capacity → observation quality → pattern recognition → schema construction → confidence → exploration depth → more pattern recognition. When control count is kept tight, this loop spins.
- **B1 — Cognitive-overload trap (balancing, corrosive).** Number of controls → extraneous load → crowded germane capacity → poor observation → stalled pattern recognition → no schema → no confidence → shallow exploration. When control count creeps past the budget, this loop takes over.

Visual treatment: R1 nodes in cool blue; B1 nodes in warm red-orange; the shared node *available germane capacity* drawn in a neutral tone with dual borders to signal that it belongs to both loops. Delay marker ⧚ on the schema-construction → learner-confidence edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 in plain English accompanies the diagram in the prose that follows.
</details>

Read loop **R1** in plain English. A MicroSim with a tight control set leaves most of the reader's working memory free for germane processing. Germane capacity is what notices that *when I nudge the intrinsic-load slider up, the overflow indicator turns red*. Clean observations feed pattern recognition; recognized patterns consolidate into schemas; schemas produce the confidence that makes the reader willing to try a second and third scenario. Each trip around the loop deepens exploration. Now read **B1**. A MicroSim that grew to nine controls — because each new feature seemed reasonable on its own — presents a reader whose extraneous-load budget is already spent on remembering what the controls do. Available germane capacity collapses. The reader moves a slider, cannot quite tell what changed, loses confidence, and stops exploring. The sim still works; it simply does not teach.

The design move that makes B1 impossible rather than merely avoided is structural: the MicroSim skill imposes a control-count cap that the author has to argue past in writing, not tune up by accident. That is the footgun shape worth naming. A free-form widget toolkit is *silent* (no warning appears when the sixth slider is added), *easy to trigger* (each new slider feels like an improvement), and produces *delayed damage* (the sim works in testing because the author already knows what each control does, and it collapses only when a cold reader encounters it). The structural fix is a budget the authoring pipeline enforces, not a guideline the author remembers. We will return to this footgun when we discuss the `microsim-generator` skill in Chapter 14.

## Choosing a Library: The Seven-Way Decision

The project uses seven libraries, and the choice among them is not a matter of taste. Each library has a shape, and picking the wrong shape produces a sim that fights its medium. Before the comparison table, here are the seven in their own terms.

The ***p5.js library*** is a creative-coding framework, descended from Processing, that treats the canvas as a programmable drawing surface with a tight `setup()`/`draw()` loop. It is the right choice for generative visuals, custom interactive behaviors, and any sim whose visual representation is not a standard chart type. Almost every bespoke MicroSim in this book is built with p5.js, because the library's surface is small enough that a reader with moderate JavaScript fluency can modify a sim they find in the book.

The ***Chart.js library*** is a lightweight standard-chart library — bar charts, line charts, pie charts, scatter plots, radar charts — with sensible defaults, clean animations, and a small API. It is the right choice when the visualization *is* a standard chart. A reader learning about the forgetting curve does not need a custom p5.js animation; they need a line chart with a tunable decay constant.

The ***Plotly library*** is a richer interactive-charting library that goes where Chart.js stops — 3D surfaces, contour plots, hover-tooltip detail on every point, zoomable axes, and subplot grids. Plotly is the right choice when the reader needs to hover, zoom, or rotate to extract the insight, or when the visualization is genuinely three-dimensional (a loss surface, a response curve, a cost landscape). Plotly's bundle is larger than Chart.js's; the cost is worth it when the interaction justifies it.

A ***Mermaid diagram*** is a text-to-diagram rendering produced from a small domain-specific language embedded directly in Markdown. Mermaid renders flowcharts, sequence diagrams, class diagrams, state machines, entity-relationship diagrams, Gantt charts, and causal loop diagrams from declarative text. It is the right choice for any diagram whose structure is fixed at authoring time — every non-interactive architecture or flow diagram in this book is a Mermaid diagram, because authoring the diagram in text keeps it versionable, diff-able, and regeneratable.

The ***vis-network library*** is a JavaScript library for rendering and interacting with node-link graphs — the project's learning-graph viewer is built on it. It is the right choice when the reader needs to *interact with a graph* — drag nodes, expand neighborhoods, filter by metadata, or navigate from concept to concept. Mermaid renders graphs; vis-network lets the reader manipulate them.

The ***Leaflet map library*** is an interactive-map library with tile-based rendering, marker overlays, and pan/zoom controls. It is the right choice whenever the data has a geographic component — the distribution of a field's foundational studies across universities, the historical spread of an instructional movement, the placement of a school district whose analytics crossed the Level 3 line. Leaflet is small, well-documented, and plugin-rich.

The ***Venn.js library*** is a specialized library for drawing Venn and Euler diagrams from set-intersection data. It is the right choice when the concept being taught is literally about overlapping sets — the capabilities of two AI models, the shared methods of three research disciplines, the intersection of three taxonomies. Most textbook authors reach for it once per book and then retire it, which is correct usage.

#### Diagram: Which Library Should I Use for This Visualization?

<details markdown="1">
<summary>Decision tree routing a visualization need to one of the seven libraries based on the shape of the data and the interaction needed</summary>
Type: diagram
**sim-id:** library-decision-tree<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` decision tree. Starting from the root *"What do I need to show?"*, the first split asks whether the data is spatial, temporal, quantitative, relational, categorical-overlap, or bespoke. Subsequent splits route each branch to one of the seven libraries with a one-sentence justification label on each leaf.

Branches:

- *Is the data geographic?* → Yes → **Leaflet** (interactive map with tile rendering).
- *Is the data a graph of nodes and edges the reader should manipulate?* → Yes → **vis-network** (interactive node-link).
- *Is the data a graph the reader only needs to read?* → Yes → **Mermaid** (text-authored diagram).
- *Is the visualization a set-intersection picture?* → Yes → **Venn.js** (specialized Venn/Euler rendering).
- *Is the data a standard 2D chart (bar, line, pie, scatter)?* → Yes → **Chart.js** (lightweight standard charts).
- *Is the data higher-dimensional, hover-detailed, or 3D?* → Yes → **Plotly** (richer interactive charting).
- *Is the visualization bespoke, generative, or custom-interactive?* → Yes → **p5.js** (creative-coding canvas).

Leaves colored by library with the project's blue-amber palette. The tree is rendered top-down so that the root reads first and the leaves are visually grouped by shape.

Implementation: Mermaid `flowchart TD` with labeled edges and `classDef` per library. Embedded directly in the chapter markdown.
</details>

The table below stacks the seven libraries along the dimensions that matter when the decision is not obvious from the data shape alone — strengths, limitations, typical use, and availability.

| Library | Primary strength | Main limitation | Typical MicroSim use case | Delivery |
|---|---|---|---|---|
| p5.js | Generative, custom-interactive, tight creative-coding loop | Not a chart library; every visualization is hand-coded | Bespoke cognitive-architecture sims, algorithm visualizers, any custom canvas | CDN or npm |
| Chart.js | Standard chart types with clean defaults and small API | Not designed for 3D or deep hover interactions | Forgetting curves, dose-response curves, quiz-score distributions | CDN or npm |
| Plotly | Rich interactivity, 3D surfaces, hover tooltips, zoomable axes | Larger bundle; steeper API surface | Cognitive-load surfaces, response landscapes, multi-dimensional exploration | CDN or npm |
| Mermaid | Diagrams from text, versionable, Markdown-native | Layout is automatic; fine control is limited | Flowcharts, causal loop diagrams, architecture diagrams, sequence diagrams | Built into MkDocs Material via pymdownx.superfences |
| vis-network | Interactive node-link graphs at scale | Overkill for static diagrams | Learning-graph viewer, concept-dependency exploration | CDN or npm |
| Leaflet | Interactive maps with tile rendering | Geographic-only; not a general-purpose visualization tool | Historical-spread maps, field-study geography | CDN or npm |
| Venn.js | Specialized Venn/Euler diagrams from set data | Only draws one kind of diagram | Overlaps of disciplines, capabilities, taxonomies | CDN or npm |

!!! mascot-tip "Default to the Smallest Library That Fits"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom the elephant giving a tip">
    When two libraries could reasonably render the same visualization, pick the smaller one. A bar chart in Chart.js is a 40-kilobyte dependency; the same chart reaching for Plotly pulls in ten times that. The reader pays for the bundle on every page load, and the extra capability goes unused. Smallest-library-that-fits is a habit that compounds across a book.

## Interactive Infographics and the Diagram Overlay Pattern

The sharpest tool in the MicroSim toolbox is often the one that involves the least new code. An ***interactive infographic*** is a static scientific illustration paired with an overlay of markers that reveal labels, definitions, or quiz prompts on hover or click. The base image is authored once — ideally as a clean, annotation-free illustration produced by a text-to-image model from a detailed prompt — and the interactivity lives in a small data file plus a shared JavaScript layer that reads the data at runtime.

The ***diagram overlay pattern*** is the structural name for this approach, and the project implements it through the `interactive-infographic-overlay` skill. Every overlay sim in the book — the Bloom's Taxonomy pyramid, the three-stage memory model, Baddeley's working memory components, the intelligent-textbook component architecture — is built with this skill, and they all share the same three files:

- `image-prompt.md` — a self-contained prompt for regenerating the base image when it needs updating; specifies that the image must be annotation-free so that overlay labels do not collide with baked-in text.
- `data.json` — the overlay configuration: marker positions as percentages of canvas width and height (so the overlay survives image resizes), label text, tooltip content, and — when quiz mode is enabled — the correct-answer mapping.
- `main.html` — a thin wrapper that imports the shared `diagram.js` library, points it at the base image and the data file, and exposes three modes.

The three modes are the heart of the pattern.

**Explore mode** is the default. Hovering a marker reveals its label and a short definition. The reader wanders the image, activating labels on their own schedule — which is a segmenting move in Mayer's sense, and a pre-training move in the sense that a reader can self-pace the vocabulary before they encounter it in prose.

**Quiz mode** flips the polarity. A prompt appears at the top ("click the component that holds the book's structural spine"); the reader clicks a marker; correct clicks highlight the marker green; incorrect clicks reveal the correct marker and a one-sentence explanation. Quiz mode converts a passive picture into a low-stakes retrieval opportunity — which, per Chapter 5's treatment of the testing effect, is one of the few interventions whose pedagogical benefit is both cheap and well-replicated.

**Edit mode** is for authors. It lets the author drag markers to new positions on the base image and export the updated `data.json`. The mode exists because calibrating marker positions by hand in a JSON file is tedious and error-prone; edit mode turns calibration into a direct-manipulation task.

The structural advantage of this pattern over a redrawn interactive figure is large. A p5.js sim that drew the three-stage memory model from scratch would need to encode the shapes, the arrows, the color gradient, the typography, and the layout algorithm in JavaScript — hundreds of lines of code that must be maintained as the image evolves. The overlay pattern pushes all of that into the image asset, and the code becomes a tiny runtime that reads coordinates from a data file. A contributor who wants to swap the base image for a better one changes a single file; a contributor who wants to add a new marker changes a single JSON entry; a contributor who wants to add quiz mode to an existing overlay changes no code at all.

The pattern is not the right choice for every case. When the *spatial structure itself* is the thing the reader needs to manipulate (a graph whose nodes can be dragged, a model whose parts can be reassembled), overlay cannot carry the load and a bespoke p5.js sim is warranted. But when the reader's job is to *learn the parts of a fixed structure* — the anatomy of a rubric, the stages of a memory model, the components of an architecture, the regions of a brain, the phases of a retrieval-practice study — the overlay wins on every metric: authoring cost, maintenance cost, regeneration cost, and pedagogical fit.

## Iframe Embedding

A MicroSim is a self-contained artifact; a chapter is a Markdown document that becomes a page. The mechanism that joins them is an ***iframe embedding*** — an HTML `<iframe>` element that loads the sim's `main.html` from its own directory and renders it inside the chapter at a declared width and height.

The project convention is that every MicroSim lives at `docs/sims/<sim-id>/main.html`, with its own `script.js`, `local.css`, `index.md` description page, and (for overlay sims) a `data.json` and a base image. Chapters embed the sim with an iframe whose `src` is the sim's `main.html` and whose `height` attribute is calibrated to the sim's actual content height. The separation buys four properties worth naming.

**Isolation.** The sim's JavaScript cannot accidentally collide with the chapter's JavaScript or the MkDocs Material theme's own scripts. A p5.js sketch declares its own globals, its own event listeners, and its own canvas, all inside the iframe's own document. If two sims on the same chapter both use a variable called `speed`, nothing breaks — each lives in its own window context.

**Independent testing.** The sim can be opened standalone at its own URL — `http://127.0.0.1:8000/learning-sciences/sims/<sim-id>/main.html` during development, or the equivalent GitHub Pages path in production — and tested without loading the surrounding chapter. The author iterates on the sim in its own tab; the chapter picks up the iteration on the next build.

**Copy-paste portability.** The project's convention is that `main.html` uses the p5.js-editor standard `<main></main>` tag (no `id` attribute) and that the sketch parents its canvas with `canvas.parent(document.querySelector('main'))`. This means a reader who wants to paste the sim's JavaScript into the p5.js online editor can do so unchanged — which turns the textbook into a launchpad for the reader's own modifications, which is a learning move in its own right.

**Deployment granularity.** Rebuilding a chapter does not require rebuilding the sim; rebuilding a sim does not require rebuilding the chapter. The site's deployed structure mirrors the source structure, and a change to a single sim ships as a change to the files under its own directory.

The footgun the iframe embedding produces, and the one that deserves an explicit callout, is iframe height calibration. An iframe has no native intrinsic-height behavior; the browser renders it at whatever height the embedding markup declares, and any sim content that overflows that height is silently clipped. A sim whose controls sit at the bottom of the canvas and whose iframe height is set ten pixels too short ships a version in which the reader cannot see the reset button — and nothing warns the author, because the sim works fine when opened standalone. This is the classic footgun shape: *silent* (no error), *easy to trigger* (any iframe height mismatch produces it), and *delayed* (the damage appears only when a cold reader who does not know the controls exist fails to find them).

!!! mascot-warning "Iframe Height Is Not a Cosmetic Detail"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom the elephant flagging a warning">
    If I had to pick one failure mode that has quietly shipped in more intelligent textbooks than any other, it would be a MicroSim whose last row of controls was clipped by a too-short iframe. The author tested the sim standalone; the chapter-embedded version lost the reset button; no error was logged; no reader complained, because readers do not complain about what they cannot see. The structural fix is to automate iframe height testing — and this project does exactly that, via the `microsim-iframe-tester` skill, which uses Playwright to load each sim, measure its actual content height, and compare against the iframe height declared in the chapter. Run the tester whenever you add or modify a sim. The three-line commit that changes `height="520"` to `height="620"` is one of the most quietly valuable commits in the history of the repository.

## Screen Capture Automation

Every MicroSim needs a thumbnail — a static image that appears in the `index.md` description page, in the sims-index table of contents, in LinkedIn announcements about the chapter, and in any PDF export of the book that cannot render interactive canvases. Generating these thumbnails by hand — taking a screenshot, cropping it, saving it with the right filename in the right directory — is a task that scales poorly with the sim count and fails silently when a sim's visual state drifts.

***Screen capture automation*** is the practice of producing these thumbnails programmatically from the running sim. The production pipeline uses a headless-browser automation tool (Playwright, in the current configuration) that loads each sim's `main.html` at a standard viewport size, waits for the sim to finish its initial render, takes a PNG screenshot, crops it to the sim's content region, and saves it to a conventional path alongside the sim's other files. The script is idempotent — running it twice produces the same result — and it is fast enough to re-run across the entire sim directory on every significant build.

Three production concerns motivate the automation. First, *drift*. A sim whose visual default changes (a new color palette, a repositioned control, a renamed label) needs its thumbnail regenerated. A hand-captured thumbnail drifts from the sim silently; an automated capture stays current by definition. Second, *consistency*. Every automated thumbnail is taken at the same viewport size, with the same background, after the same initial-render delay; hand-captured thumbnails vary in all three dimensions. Third, *cover images for announcements*. LinkedIn posts and external references benefit from a clean cover image sized to platform conventions; the automation produces both the small thumbnail and the larger cover image from the same run.

The automation is not free of its own failure modes. A sim whose initial render depends on a network request, a slow-loading font, or a user interaction produces a screenshot of a mid-render state — which looks broken even though the sim is fine. The remediation is to add a stable "ready" signal to each sim (a data attribute the script can wait for) and to have the capture step poll for it before snapping. The structural move is the same one that shows up everywhere in production automation: *replace implicit timing with explicit signals*.

## A Minimal p5.js MicroSim, Annotated

Before showing code, we name what the code does, in the order Chapter 4's pre-training principle asks for. The sim below is a fifteen-line p5.js sketch that draws a filled circle whose radius is controlled by a single slider. It demonstrates three conventions the project uses for every p5.js sim. First, `updateCanvasSize()` runs as the first line of `setup()` so the canvas picks up the actual container width at construction. Second, the canvas is parented to the page's `<main>` element — with no `id` attribute — so that the JavaScript is copy-paste-portable to the p5.js online editor. Third, the sim uses p5.js's built-in `createSlider()` control rather than a hand-drawn slider, per the project's convention that controls should use built-in widgets.

The sketch parameterizes one thing — the radius — to keep control complexity at the absolute floor. Under the scaffolded-exploration rubric from the causal-loop diagram earlier in this chapter, a single-control sim leaves essentially all of working memory free for germane processing. That is the design center; bigger sims should argue their way up from here, not down from a larger starting point.

```javascript
// main.js — minimal p5.js MicroSim skeleton
let radiusSlider;
let canvasWidth, canvasHeight = 320;

function updateCanvasSize() {
  const main = document.querySelector('main');
  canvasWidth = main ? main.offsetWidth : 600;
}

function setup() {
  updateCanvasSize();                               // must be first
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));    // no id="main"
  radiusSlider = createSlider(10, 140, 60, 1);      // min, max, start, step
  radiusSlider.position(10, canvasHeight - 30);
}

function draw() {
  background(245);
  fill(70, 130, 200);
  circle(canvasWidth / 2, canvasHeight / 2, radiusSlider.value() * 2);
}
```

Three features of this code are load-bearing beyond their line count. `updateCanvasSize()` is called *before* `createCanvas()` so the canvas is created at the correct width; calling it afterward is the silent-failure shape in which the canvas renders at the default 100-pixel width and the reader cannot tell whether the sim is broken or simply small. The `canvas.parent()` call with `document.querySelector('main')` targets the p5.js-editor-standard `<main>` element; the HTML file must use a bare `<main></main>` with no `id` attribute, because adding `id="main"` would break the copy-paste portability the convention is trying to preserve. The slider uses `createSlider(min, max, start, step)` — the built-in p5.js widget — rather than a hand-drawn slider or a third-party component, which keeps the control behavior consistent with every other sim in the book.

A real MicroSim adds a learning objective, a prose description, and — usually — one or two more controls. The skeleton is the starting floor, not the target.

## A MicroSim Evaluation Rubric

Before shipping, every sim the project produces runs through a four-dimension rubric. The rubric is not a gate; it is a checklist that catches the failure modes that cause sims to teach less than they could.

| Dimension | Question | What a failing sim looks like |
|---|---|---|
| Cognitive load | Is the control count under seven? Does each control have a clear, labeled purpose? | Nine sliders, three checkboxes, and a hidden-until-hovered reset. The reader spends their entire working memory on the interface. |
| Learning-objective clarity | Can the author state the Bloom-leveled learning objective in one sentence? | "Students will explore cognitive load." What does explore mean? At what level? The sim has no target. |
| Accessibility | Does every control have a keyboard path? Does every color pass a colorblind-simulation check? Is there alt text and a prose description? | Drag-only interactions, red-green color coding, and a mystery canvas with no surrounding text. |
| Responsiveness | Does the sim render correctly on a 320-pixel-wide mobile viewport and a 1920-pixel-wide desktop? | Fixed 800-pixel canvas that horizontally scrolls on phones and floats in a sea of whitespace on desktop. |

## A Critical-Thinking Prompt

The principles collected in this chapter are the working defaults. Name a case from your own teaching practice in which you would deliberately break one of them. Be specific: *which* principle, *what evidence* in your audience would justify breaking it, and *what measurement* would tell you whether the break helped. Resist the urge to answer with a general preference ("I think the redundancy effect is overstated"); prefer an answer grounded in a named population, a named learning objective, and a named outcome measure.

And one more: the decision tree for library selection routes every visualization to exactly one library. But the routes are not hard walls — a bar-chart-of-counts could be drawn in p5.js if the author wanted a custom visual treatment, and a causal loop diagram could be drawn interactively in vis-network rather than statically in Mermaid. *What conditions would justify the less-obvious route?* Name one case where a custom p5.js bar chart beats the default Chart.js bar chart, and one case where it does not. The exercise sharpens the taste you will need when the tree does not have the right branch.

## Retrieval Check

Close the tab and try these from memory. Stumbling is diagnostic — it tells you which section to revisit.

1. **Define** a MicroSim and give two properties that distinguish it from an interactive laboratory. (Level: Remember.)
2. **State** the control-complexity budget this project uses, and explain which working-memory finding motivates it. (Level: Remember / Understand.)
3. **Given** a visualization need — "show how three research disciplines overlap in their use of a specific method" — choose the appropriate library from the seven, and justify the choice in one sentence. (Level: Apply.)
4. **Explain** why the diagram-overlay pattern usually beats a redrawn interactive figure when the reader's job is to learn the parts of a fixed structure. Name two structural advantages. (Level: Understand.)
5. **Describe** the iframe-height-clipping footgun. Name all three footgun properties as they apply, and state the structural fix the project uses. (Level: Analyze.)
6. **Critique** this design: "a MicroSim with eight sliders, three dropdowns, two checkboxes, and an autoplay that starts on page load." Name at least three principles it violates and propose a redesign that preserves the intended pedagogical function. (Level: Evaluate.)
7. **Apply** the scaffolded-exploration flywheel to a MicroSim you have used or built recently. Trace one trip around R1 in plain English, and name one change to the sim that would spin R1 faster. (Level: Apply / Analyze.)

!!! mascot-encourage "If the Library Landscape Feels Wide"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Bloom the elephant offering encouragement">
    Seven libraries is a lot to meet in one chapter, and nobody becomes fluent in all seven in a single pass. The decision tree earlier in the chapter is the piece to keep open while you are authoring your first sims; fluency with the libraries' own APIs follows from building one sim at a time, not from memorizing seven API surfaces in the abstract. Come back to the tree. It will shorten with use.

## Bridge to Chapter 12

We now have the interactive heart of the book — the MicroSim as a design category, the principles that keep it educational rather than merely interactive, the seven libraries we choose among, the overlay pattern that covers most fixed-structure cases, and the production concerns (iframes, control budgets, screen capture) that make sims ship-able at scale. What we do not yet have is the *voice* that speaks around the sims, introducing them, framing their purpose, normalizing the struggle when a reader gets stuck, and celebrating what they learned. That voice is Bloom — and Chapter 12 is the whole chapter on getting the mascot and admonition system right. We will look at Bloom's character design, the admonition types, the placement rules the style guide encodes, and the cross-cutting infrastructure that keeps the voice consistent across every chapter of the book.

!!! mascot-celebration "The Interactive Heart Is Yours"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom the elephant celebrating with trunk raised">
    You now have the mental model for how MicroSims teach — tight scope, evidence-based design rules, a working control-complexity budget, a seven-library toolkit with a decision tree that routes visualizations to the right medium, an overlay pattern that covers most fixed-structure cases, and the production conventions that keep sims deployable. Hold onto three headlines: *one concept per sim*, *under seven controls with four as the target*, and *iframe heights are not a cosmetic detail*. Next up: the mascot and admonition system — the voice that walks alongside every sim and every chapter, and the cross-cutting infrastructure that keeps that voice consistent. See you in Chapter 12.
