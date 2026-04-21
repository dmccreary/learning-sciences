---
title: Baddeley's Working-Memory Components
description: Baddeley's Working-Memory Components
status: scaffold
library: p5.js
bloom_level: TBD
---

# Baddeley's Working-Memory Components

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
**sim-id:** baddeley-working-memory<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a central hub labeled "Central Executive" with three radiating slots — "Phonological Loop" on the left with a small ear icon, "Visuospatial Sketchpad" on the right with a small eye icon, and an "Episodic Buffer" beneath bridging to long-term memory shown as a distant container. Rendered in the project's blue-amber palette on a white background; base image annotation-free with overlay-driven labels.

Modes (standard for this skill):

- **Explore mode:** Hovering each component reveals its storage type, duration, refresh mechanism, and one concrete example (e.g., phonological loop: "holds the sentence you just read for ~2s; refreshed by silent rehearsal").
- **Quiz mode:** A task description appears ("mentally rotate this shape"); the student clicks the subsystem primarily engaged.
- **Edit mode (authors only):** Drag markers to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Analyze): *Given a cognitive task, identify which working-memory component(s) it primarily recruits.*

Responsive via `updateCanvasSize()` as first line of `setup()`; marker anchors preserved.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/baddeley-working-memory/` contains the standard five files.
```

## Related Resources

- [Chapter 4: Cognitive Architecture and Load](../../chapters/04-cognitive-architecture/index.md)
