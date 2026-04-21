---
title: Control Complexity Dynamics — The Scaffolded-Exploration Flywheel and the Cognitive-Overload Trap
description: Control Complexity Dynamics — The Scaffolded-Exploration Flywheel and the Cognitive-Overload Trap
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Control Complexity Dynamics — The Scaffolded-Exploration Flywheel and the Cognitive-Overload Trap

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
[Chapter 11: MicroSims and Interactive Visualizations](../../chapters/11-microsims/index.md).

```text
Type: causal-loop-diagram
**sim-id:** microsim-control-complexity-loops<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing eight variable-nodes and two named loops. All nodes are noun phrases naming variables that can go up or down.

Nodes: *number of controls*, *extraneous cognitive load*, *available germane capacity*, *observation quality*, *pattern recognition*, *schema construction*, *learner confidence*, *exploration depth*.

Edges and polarities:

- number of controls → extraneous cognitive load (+) — each control the reader must hold costs capacity
- extraneous cognitive load → available germane capacity (−) — load is a zero-sum budget
- available germane capacity → observation quality (+) — germane capacity is what lets the reader notice change
- observation quality → pattern recognition (+) — clean observations feed pattern-finding
- pattern recognition → schema construction (+) — recognized patterns consolidate into schemas
- schema construction → learner confidence (+, with delay marker ⧚) — durable schemas feed confidence
- learner confidence → exploration depth (+) — a confident reader runs more scenarios
- exploration depth → pattern recognition (+) — more scenarios surface more patterns
- number of controls → exploration depth (−) — too many controls make the reader freeze; they stop exploring

Loop labels placed at each loop's geometric center:

- **R1 — Scaffolded-exploration flywheel (reinforcing, productive).** Germane capacity → observation quality → pattern recognition → schema construction → confidence → exploration depth → more pattern recognition. When control count is kept tight, this loop spins.
- **B1 — Cognitive-overload trap (balancing, corrosive).** Number of controls → extraneous load → crowded germane capacity → poor observation → stalled pattern recognition → no schema → no confidence → shallow exploration. When control count creeps past the budget, this loop takes over.

Visual treatment: R1 nodes in cool blue; B1 nodes in warm red-orange; the shared node *available germane capacity* drawn in a neutral tone with dual borders to signal that it belongs to both loops. Delay marker ⧚ on the schema-construction → learner-confidence edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 in plain English accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 11: MicroSims and Interactive Visualizations](../../chapters/11-microsims/index.md)
