---
title: The Seven Bloom Poses and When to Use Each
description: The Seven Bloom Poses and When to Use Each
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Seven Bloom Poses and When to Use Each

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
[Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md).

```text
Type: interactive-infographic
**sim-id:** bloom-poses-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a three-by-three grid of cream-backgrounded cells (the last two cells empty) showing the seven Bloom poses — neutral, welcome, thinking, tip, warning, encouraging, celebration — in a consistent drawing style with transparent per-cell backgrounds. Each cell has a labeled border in the admonition color corresponding to the pose (primary blue for welcome, warm brown for thinking, teal for tip, red for warning, deep purple for celebration, accent orange for encourage, slate gray for neutral). The base image is annotation-free; pose names, use-cases, and admonition-type pairings come from overlay markers positioned via `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering any pose reveals a tooltip with (a) the pose name, (b) the admonition type it pairs with, (c) one concrete learning moment where it fits best, and (d) the reason — in SDT or cognitive-load terms — that it's the right pose for that moment.
- **Quiz mode:** A short scenario appears (for example, *"The reader has just encountered a claim that contradicts their intuition and may feel defensive"*) and the reader clicks the pose that best fits. Correct answers highlight green; incorrect answers reveal the correct pose and a one-sentence explanation.
- **Edit mode (authors only):** Drag markers to recalibrate positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Apply): *Given a learning moment in a chapter, select the mascot pose whose pedagogical function fits best.*

Responsive: canvas width adapts to container via `updateCanvasSize()` as the first line of `setup()`; marker anchor ratios preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/bloom-poses-gallery/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the annotation-free base image.
```

## Related Resources

- [Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md)
