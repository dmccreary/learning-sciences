---
title: The Graphic Novel Production Pipeline
description: The Graphic Novel Production Pipeline
status: scaffold
library: Mermaid
bloom_level: TBD
---

# The Graphic Novel Production Pipeline

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** Mermaid

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Graphic Novels and Short-Form Stories](../../chapters/13-graphic-novels/index.md).

```text
Type: diagram
**sim-id:** graphic-novel-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram showing the five-step graphic-novel production pipeline. Each step is a rounded-rectangle node; each inter-step arrow is labeled with the artifact that carries forward; each step has a side-note showing the audit question that must pass before the next step begins.

Nodes (top-down):

1. Historical Figure Selection — produces the figure brief (name, concept tie, documented-record inventory, representation rationale).
2. Script and Panel Plan — produces the twelve-panel storyboard with arc-stage tags, dialogue drafts, and caption text.
3. Image Prompt Engineering — produces the twelve panel-prompt files with shared character-design block and per-panel composition specs.
4. Image Generation and Text Overlay — produces the twelve rendered panel images with speech bubbles and captions overlaid in HTML, not baked into the image.
5. Historical Accuracy Check and Assembly — produces the fact-checked chapter with dramatic-license disclosures and the compiled `index.md`.

Edges labeled with artifacts: "figure brief" between 1 and 2, "storyboard" between 2 and 3, "panel prompts" between 3 and 4, "rendered panels" between 4 and 5, and an audit feedback edge from 5 back to 2 (revise the script when a fact-check flag cannot be resolved by reframing the caption).

Visual treatment: nodes in cool blue; the audit feedback arrow in warm orange to signal that the fact-check gate is a loop, not a dead end. Each node annotated with its audit gate in a smaller secondary font.

Implementation: Mermaid `flowchart TD` with `classDef` for node styling and `linkStyle` for the audit feedback arrow coloring.
```

## Related Resources

- [Chapter 13: Graphic Novels and Short-Form Stories](../../chapters/13-graphic-novels/index.md)
