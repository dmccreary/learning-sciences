---
title: The Twelve-Panel Story Arc Map
description: The Twelve-Panel Story Arc Map
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Twelve-Panel Story Arc Map

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** p5.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Graphic Novels and Short-Form Stories](../../chapters/13-graphic-novels/index.md).

```text
Type: interactive-infographic
**sim-id:** twelve-panel-arc-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a four-by-three grid (four columns, three rows) of panel placeholders on a cream background, each placeholder a lightly sketched comic-panel rectangle with panel number in the upper-left corner. The top row (panels 1–4) is tinted setup-blue; the middle row (panels 5–8, shifted slightly for rising-action pacing) is tinted rising-action amber; panels 9–10 are tinted climax-red; panels 11–12 are tinted resolution-green. The base image is annotation-free — all labels are delivered by overlay markers positioned via `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering any panel reveals a tooltip with (a) the panel number, (b) the arc stage, (c) the job the panel does, (d) a one-sentence example of that job drawn from a canonical story such as Ada Lovelace's Note G.
- **Quiz mode:** A panel job description appears (for example, *"The moment the conceptual turn crystallizes — the insight"*) and the reader clicks the panel position it belongs in. Correct answers highlight green; incorrect answers reveal the correct panel and a one-sentence explanation.
- **Edit mode (authors only):** Drag markers to recalibrate positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Apply): *Given a beat description from a historical-figure story, identify the panel number where it belongs in the twelve-panel arc.*

Responsive: canvas width adapts to container via `updateCanvasSize()` as the first line of `setup()`; marker anchor ratios preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/twelve-panel-arc-map/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the annotation-free base image.
```

## Related Resources

- [Chapter 13: Graphic Novels and Short-Form Stories](../../chapters/13-graphic-novels/index.md)
