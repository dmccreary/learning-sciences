---
title: The Cognitive Load Budget
description: The Cognitive Load Budget
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Cognitive Load Budget

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
Type: microsim
**sim-id:** cognitive-load-budget<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that visualizes the cognitive-load budget inequality. The canvas displays a horizontal capacity bar labeled "Working Memory Capacity" filled with three stacked regions colored to represent intrinsic (blue), extraneous (red), and germane (green) load. A performance indicator on the right shows one of {learning, on the edge, overloaded}; the state transitions as total load approaches and exceeds capacity.

Controls (using built-in p5.js controls per project convention):

- **Intrinsic-load slider** (0–10) — material difficulty relative to learner prior knowledge.
- **Extraneous-load slider** (0–10) — presentation-driven load.
- **Germane-load slider** (0–10) — schema-construction effort.
- **Capacity slider** (5–15) — the learner's available capacity, illustrating individual differences.
- **Scenario dropdown** — preset configurations: {novice with bad diagram, expert with clean diagram, overloaded learner, well-designed chapter}.
- **Reset button** — returns to default values.

Learning objective (Bloom level: Apply): *Given a lesson description, decompose its cognitive load and predict whether the learner will overflow.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/cognitive-load-budget/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 4: Cognitive Architecture and Load](../../chapters/04-cognitive-architecture/index.md)
