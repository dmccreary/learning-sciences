---
title: Intelligent Textbook Component Architecture (Level 2)
description: Intelligent Textbook Component Architecture (Level 2)
status: scaffold
library: p5.js
bloom_level: TBD
---

# Intelligent Textbook Component Architecture (Level 2)

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
[Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md).

```text
Type: interactive-infographic
**sim-id:** intelligent-textbook-architecture<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: a labeled architecture illustration with the *Learning Graph* rendered as a large central node (a small concept-node cluster with arrows between concepts suggests its DAG nature). Radiating outward from the graph are the generated artifacts: *Chapter Outlines*, *Chapter Content*, *Glossary*, *FAQ*, *Quiz Bank*, *Reference List*, *MicroSims*, *Stories*. Beneath these is a packaging layer labeled *Site Build*, which decomposes into *Table of Contents*, *Site Navigation*, *Search Index*, and *Print-Friendly Output*. A vertical stripe down one side is labeled *Mascot Voice Layer* to indicate the cross-cutting concern. A second vertical stripe, clearly separated, is labeled *Authoring Pipeline* with sub-nodes *Harness*, *Skills*, *Prompts*. The base image is annotation-free; all labels are delivered by overlay markers defined in `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering over any component shows a tooltip with the component's one-sentence definition, the concept or artifact it owns, and a pointer to the chapter where it is treated in detail.
- **Quiz mode:** A design decision is posed (e.g., "You need to add a new concept that every Chapter 6 quiz item depends on"); the learner clicks the component that owns the change. Correct answers highlight the component green; incorrect answers reveal the correct component and a one-sentence explanation of the ownership rule.
- **Edit mode (authors only):** Drag markers to recalibrate their positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Understand / Apply): *Given a proposed change to an intelligent textbook, identify the component whose ownership the change respects, and explain which other components the change cascades into.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/intelligent-textbook-architecture/` will contain `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the architecture base image.
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
