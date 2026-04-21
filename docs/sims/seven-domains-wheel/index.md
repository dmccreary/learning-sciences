---
title: The Seven Domains Wheel
description: The Seven Domains Wheel
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Seven Domains Wheel

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
[Chapter 2: The Seven Domains Framework](../../chapters/02-seven-domains/index.md).

```text
Type: interactive-infographic
**sim-id:** seven-domains-wheel<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a seven-segment pie-wheel showing the seven domains in an order that matches the forward chain (Motivation at 12 o'clock, then clockwise Understanding, Retention, Application, Expertise, Measurement, Learning Conditions at 10 o'clock — returning to Motivation at the top). Each segment a different color in a warm-to-cool palette. Learning Conditions is drawn with a dashed border to signal its substrate role. The base image is annotation-free; domain labels come from overlay markers.

Modes (standard for this skill):

- **Explore mode:** Hovering a segment reveals a tooltip with (1) the one-sentence domain definition, (2) two to three example design decisions the domain drives, and (3) the chapter link.
- **Diagnose mode:** The student reads a short chapter draft excerpt and clicks the domain(s) that the excerpt most directly serves. Multiple correct answers are allowed; correct selections light green, missing domains light amber.
- **Edit mode (authors only):** Drag markers to recalibrate segment positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Analyze — given a piece of instruction, identify which domains it serves well and which it under-serves).

Responsive: canvas width adapts to container via `updateCanvasSize()` as the first line of `setup()`; segment anchors scale with the canvas.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/seven-domains-wheel/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the base wheel image. The text-to-image prompt specifies an annotation-free wheel with dashed-border treatment on the Learning Conditions segment.
```

## Related Resources

- [Chapter 2: The Seven Domains Framework](../../chapters/02-seven-domains/index.md)
