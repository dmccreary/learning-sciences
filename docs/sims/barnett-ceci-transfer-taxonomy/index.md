---
title: The Barnett and Ceci Transfer Taxonomy
description: The Barnett and Ceci Transfer Taxonomy
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Barnett and Ceci Transfer Taxonomy

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
[Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md).

```text
Type: interactive-infographic
**sim-id:** barnett-ceci-transfer-taxonomy<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic built with the `interactive-infographic-overlay` skill. Base image: a hexagonal radar diagram with six labeled axes, one per Barnett and Ceci dimension — *knowledge domain*, *physical context*, *temporal context*, *functional context*, *social context*, and *modality* — each axis extending from "near" at the center to "far" at the outer edge. The base image is annotation-free; dimension labels, definitions, and worked examples are delivered by the overlay layer.

Modes (standard for this skill):

- **Explore mode:** Hovering over any axis shows a tooltip containing the dimension name, a one-sentence definition, two example training-to-transfer pairs (one that is close on that axis, one that is distant), and a note on how designers typically underestimate distance on that axis.
- **Quiz mode:** A short training-to-transfer pair is described ("trained on paper algebra, tested orally on a word problem a month later"); the student clicks each axis and rates near/far. The system scores how many dimensions the student classified correctly.
- **Edit mode (authors only):** Drag axis-label anchors to recalibrate marker positions; export updated `data.json`.

Learning objective (Bloom level: Analyze): *Given a training context and a transfer task, identify which Barnett and Ceci dimensions of distance the transfer crosses and rate each as near or far.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/barnett-ceci-transfer-taxonomy/` contains the standard five files (`image-prompt.md`, `data.json`, `main.html`, `index.md`, and the base image).
```

## Related Resources

- [Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md)
