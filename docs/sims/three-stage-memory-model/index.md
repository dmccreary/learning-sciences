---
title: The Three-Stage Memory Model
description: The Three-Stage Memory Model
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Three-Stage Memory Model

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
[Chapter 4: Cognitive Architecture and Load](../../chapters/04-cognitive-architecture/index.md).

```text
Type: interactive-infographic
**sim-id:** three-stage-memory-model<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a left-to-right flow with three labeled containers — a thin blue "Sensory Memory" funnel, a narrow amber "Working Memory" workspace with a small stage in the middle, and a wide deep-blue "Long-Term Memory" library to the right — connected by arrows labeled "attention" (sensory → working) and "encoding" / "retrieval" (working ↔ long-term). A thin dashed arrow from long-term back into working memory shows retrieval. Base image is annotation-free; labels come from overlay markers in `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering each container reveals a tooltip with (a) capacity estimate, (b) duration estimate, (c) example content, and (d) the mechanism that moves information to the next stage.
- **Quiz mode:** A fact about memory appears (e.g., "Holds roughly 4 items for about 20 seconds without rehearsal"); the student clicks the matching container. Incorrect clicks reveal the correct container and a one-sentence explanation.
- **Edit mode (authors only):** Drag markers to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Understand): *Given a memory property, identify which of the three stages it describes.*

Responsive: canvas width adapts via `updateCanvasSize()` as the first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/three-stage-memory-model/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the annotation-free base image.
```

## Related Resources

- [Chapter 4: Cognitive Architecture and Load](../../chapters/04-cognitive-architecture/index.md)
