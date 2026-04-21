---
title: Zimmerman's Self-Regulated Learning Cycle
description: Zimmerman's Self-Regulated Learning Cycle
status: scaffold
library: p5.js
bloom_level: TBD
---

# Zimmerman's Self-Regulated Learning Cycle

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
[Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md).

```text
Type: interactive-infographic
**sim-id:** zimmerman-srl-cycle<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: a three-sector circular cycle with arrows showing clockwise flow from *Forethought* (top) to *Performance* (lower right) to *Self-Reflection* (lower left) and back to Forethought. Each sector is a different color on a warm blue-to-orange gradient. The base image is annotation-free; all phase labels, sub-processes, and example prompts are delivered by overlay markers.

Modes (standard for this skill):

- **Explore mode:** Hovering over a sector shows a tooltip containing the phase name, one-sentence definition, the three classic sub-processes (e.g., Forethought: goal-setting, strategic planning, self-efficacy activation), and a sample metacognitive prompt the learner can run on themselves at that phase.
- **Quiz mode:** A short description of a learner's behavior appears at the top (e.g., "Before starting the problem set, she wrote down what strategy she would try first and predicted how long it would take"); the learner clicks the SRL phase the behavior illustrates. Correct answers highlight the sector green; incorrect answers reveal the correct phase and a one-sentence explanation of the sub-process at play.
- **Edit mode (authors only):** Drag markers to recalibrate positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Analyze): *Given a description of a learner's behavior, identify which SRL phase it illustrates and name the sub-process at play.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/zimmerman-srl-cycle/` will contain `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the cycle base image.
```

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
