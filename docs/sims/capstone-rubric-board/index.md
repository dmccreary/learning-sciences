---
title: The Interactive Capstone Rubric
description: The Interactive Capstone Rubric
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Interactive Capstone Rubric

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
[Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md).

```text
Type: interactive-infographic
**sim-id:** capstone-rubric-board<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: a 5 x 4 grid representing the twenty rubric items, grouped into five color bands for Structure, Seven-Domain coverage, Engagement artifacts, Measurement, and Systems thinking and evidence. Each cell contains the rubric item's short name. The bottom of the image holds two larger "Shippability" cells in a distinct color.

Modes (standard for this skill):

- **Explore mode:** Hovering a cell shows the rubric item's full text, the tool or skill that checks it automatically (if any), and a one-sentence example of what passing and failing look like.
- **Self-audit mode:** The author clicks each cell to mark it pass, partial, or fail for their current draft; the board colors update and a summary bar reports the count of each.
- **Edit mode (authors only):** Drag cells to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Evaluate): *Given a chapter draft, judge its readiness to ship by applying the 20-item rubric and identifying the two or three items most likely to fail.*

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/capstone-rubric-board/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the grid base image. Canvas width is responsive via `updateCanvasSize()` as the first line of `setup()`.
```

## Related Resources

- [Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md)
