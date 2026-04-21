---
title: ARCS as a Four-Pillar Design Audit
description: ARCS as a Four-Pillar Design Audit
status: scaffold
library: p5.js
bloom_level: TBD
---

# ARCS as a Four-Pillar Design Audit

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
[Chapter 3: Motivation and Engagement](../../chapters/03-motivation-engagement/index.md).

```text
Type: interactive-infographic
**sim-id:** arcs-four-pillars<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: four vertical pillars of equal height labeled Attention, Relevance, Confidence, and Satisfaction, supporting a horizontal beam labeled "Motivated Learning." Each pillar rendered in a distinct color from the project's blue-green-warm palette on a white background. The base image is annotation-free; pillar labels come from overlay markers in `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering any pillar reveals a tooltip with (a) the pillar's name, (b) two audit questions the author should ask of their own chapter, and (c) one concrete design move that strengthens the pillar.
- **Audit mode:** The student reads a sample chapter excerpt and rates each pillar on a 1–5 scale by clicking the pillar at the appropriate height. The beam visibly tilts if any pillar is under-rated, illustrating that the weakest pillar limits the whole.
- **Edit mode (authors only):** Drag markers to recalibrate pillar positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Evaluate): *Given a chapter excerpt, audit it against all four ARCS pillars and identify the weakest.*

Responsive: canvas width adapts to container via `updateCanvasSize()` as the first line of `setup()`; pillar anchors scale proportionally.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/arcs-four-pillars/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the annotation-free base image.
```

## Related Resources

- [Chapter 3: Motivation and Engagement](../../chapters/03-motivation-engagement/index.md)
