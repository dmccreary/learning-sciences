---
title: Self-Determination Theory — Three Needs as a Venn Overlay
description: Self-Determination Theory — Three Needs as a Venn Overlay
status: scaffold
library: p5.js
bloom_level: TBD
---

# Self-Determination Theory — Three Needs as a Venn Overlay

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
**sim-id:** sdt-three-needs-venn<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: three overlapping circles in a classic Venn layout labeled Autonomy, Competence, and Relatedness, rendered in a soft blue-green-warm-tan palette on a white background. The three pairwise overlaps and the central three-way overlap are visible. The base image is annotation-free — all labels come from overlay markers positioned via `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering any of the seven regions (three circles, three pairwise overlaps, one central region) reveals a tooltip with (a) the region's name, (b) what learners who experience it report feeling, and (c) two concrete textbook design decisions that serve that region.
- **Audit mode:** The student is shown a short excerpt from a real chapter and clicks the region(s) the excerpt supports. Partial credit is awarded; missing regions light amber.
- **Edit mode (authors only):** Drag markers to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Analyze): *Given a chapter excerpt, identify which of the three SDT needs it supports and which it neglects.*

Responsive: canvas width adapts to container via `updateCanvasSize()` as the first line of `setup()`; marker anchor ratios preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/sdt-three-needs-venn/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the annotation-free Venn base image.
```

## Related Resources

- [Chapter 3: Motivation and Engagement](../../chapters/03-motivation-engagement/index.md)
