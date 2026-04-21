---
title: UDL Three Principles with Checkable Representation Examples
description: UDL Three Principles with Checkable Representation Examples
status: scaffold
library: p5.js
bloom_level: TBD
---

# UDL Three Principles with Checkable Representation Examples

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
[Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md).

```text
Type: interactive-infographic
**sim-id:** udl-three-principles<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: three pillars side by side, labeled *Engagement (Why)*, *Representation (What)*, and *Action & Expression (How)*, each rendered in a distinct color from the warm blue-to-orange palette. Each pillar contains three sub-sections representing the Provide Options / Build / Internalize levels of UDL Guidelines 3.0. The base image is annotation-free.

Modes:

- **Explore mode:** Hovering over any pillar section shows the UDL checkpoint name, a plain-English description, and two intelligent-textbook examples (e.g., Representation → Offer Alternatives for Auditory Information → "transcript provided for every narrated MicroSim; captions on every embedded video").
- **Quiz mode:** An intelligent-textbook feature is described (e.g., "We added a keyboard-only navigation path through every MicroSim control"); the learner clicks the pillar and section that the feature most directly serves.
- **Edit mode (authors only):** drag markers to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Apply): *Given an intelligent-textbook feature, identify which UDL principle and checkpoint it most directly serves.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/udl-three-principles/` will contain `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the pillar base image.
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
