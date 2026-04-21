---
title: Three Nested Layers of a Learning Environment
description: Three Nested Layers of a Learning Environment
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Three Nested Layers of a Learning Environment

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
[Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md).

```text
Type: diagram
**sim-id:** learning-environment-nested-layers<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid diagram rendered as a set of three concentric rectangles (or as a `flowchart TD` with containment styling via `subgraph` blocks). The innermost rectangle is labeled *Physical / Digital* and contains example design-lever nodes: *seating*, *lighting*, *screen readability*, *keyboard navigation*, *MicroSim responsiveness*. The middle rectangle is labeled *Social* and contains *talk-move repertoire*, *turn-taking norms*, *error-response scripts*, *forum moderation*. The outermost rectangle is labeled *Institutional* and contains *grading policy*, *accessibility mandate*, *privacy regulation*, *curricular scope*. Arrows between the layers show *upward* influence (physical choices shape the social layer; social norms are constrained by institutional rules) and *downward* influence (institutional mandates cascade into social norms and physical features).

Each layer is colored distinctly on a warm blue-to-orange palette — innermost in cool blue, middle in a mid-tone teal, outermost in warm orange — so the containment is immediately visible. A caption underneath reads: *"Small changes in one layer cascade through the others. When a learner underperforms, the explanation usually lives at a layer outside the learner's control."*

Implementation: Mermaid `flowchart TD` with nested `subgraph` blocks and `classDef` for the per-layer coloring. Embedded directly in the chapter markdown via the `pymdownx.superfences` mermaid fence already configured in `mkdocs.yml`.
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
