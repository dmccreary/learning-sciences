---
title: Retrieval Strength vs. Storage Strength
description: Retrieval Strength vs. Storage Strength
status: scaffold
library: p5.js
bloom_level: TBD
---

# Retrieval Strength vs. Storage Strength

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
[Chapter 5: Knowledge Retention](../../chapters/05-knowledge-retention/index.md).

```text
Type: interactive-infographic
**sim-id:** retrieval-vs-storage-strength<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic built with the `interactive-infographic-overlay` skill. Base image: a 2D plot with "Retrieval Strength" on the x-axis (low to high) and "Storage Strength" on the y-axis (low to high), divided into four labeled quadrants — "fleeting" (high RS, low SS), "durable but dormant" (low RS, high SS), "unlearned" (low RS, low SS), and "well-learned" (high RS, high SS). The base image is annotation-free; item dots are placed by the overlay layer.

Modes (standard for this skill):

- **Explore mode:** Hovering each pre-placed dot (a looked-up phone number, a childhood address, a word studied last week, an overlearned multiplication fact, a novel technical term seen once) reveals its RS and SS rationale and the instructional move appropriate to that quadrant.
- **Quiz mode:** A short scenario is described ("you crammed this for a test yesterday and aced it; the retest is in a month"); the student clicks the matching quadrant.
- **Edit mode (authors only):** Drag dots to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Analyze): *Given a description of a learner's relationship to a piece of material, classify its retrieval and storage strengths and propose the appropriate next instructional move.*

Responsive via `updateCanvasSize()` as first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/retrieval-vs-storage-strength/` contains the standard five files.
```

## Related Resources

- [Chapter 5: Knowledge Retention](../../chapters/05-knowledge-retention/index.md)
