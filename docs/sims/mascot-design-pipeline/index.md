---
title: The Mascot Design Pipeline
description: The Mascot Design Pipeline
status: scaffold
library: Mermaid
bloom_level: TBD
---

# The Mascot Design Pipeline

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
[Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md).

```text
Type: diagram
**sim-id:** mascot-design-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram showing the six-step procedure as a pipeline. Each step is a rounded-rectangle node; each inter-step arrow is labeled with the artifact that carries forward; each step has a side-note showing the audit question that must pass before the next step begins.

Nodes (top-down):

1. Persona One-Pager — produces the character sheet.
2. Visual Identity — produces the seven pose images.
3. Voice Guide — produces the prohibited-word list and on-voice examples.
4. Admonition Library — produces the type-to-class-to-pose mapping.
5. CSS Implementation — produces the stylesheet.
6. Consistency Audit — produces the review checklist.

Edges labeled with artifacts: "character sheet" between 1 and 2, "seven poses" between 2 and 3, "voice guide" between 3 and 4, "admonition types" between 4 and 5, "stylesheet" between 5 and 6, and an audit feedback edge from 6 back to 3 (strengthen the voice guide when drift is detected).

Visual treatment: nodes in cool blue; audit feedback arrow in warm orange to signal that the audit is a loop, not a dead end. Each node annotated with its audit gate in a smaller secondary font.

Implementation: Mermaid `flowchart TD` with `classDef` for node styling and `linkStyle` for the audit feedback arrow coloring.
```

## Related Resources

- [Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md)
