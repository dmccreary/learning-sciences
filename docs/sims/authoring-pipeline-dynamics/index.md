---
title: Authoring Pipeline Dynamics — Graph-Quality Flywheel vs. Token-Pressure Trap
description: Authoring Pipeline Dynamics — Graph-Quality Flywheel vs. Token-Pressure Trap
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Authoring Pipeline Dynamics — Graph-Quality Flywheel vs. Token-Pressure Trap

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
[Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md).

```text
Type: causal-loop-diagram
**sim-id:** authoring-pipeline-dynamics<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing ten variable-nodes and two named loops. All nodes are noun phrases naming variables that can go up or down.

Nodes for R1 (graph-quality flywheel, productive): *learning-graph quality*, *generated-artifact quality*, *author-iteration rate*, *graph-refinement rate*, *pipeline confidence*.

Nodes for B1 (token-pressure trap, balancing-but-corrosive): *chapter-content size*, *token-budget pressure*, *context-window truncation*, *generation inconsistency*, *rework cost*.

Edges and polarities for R1:

- learning-graph quality → generated-artifact quality (+) — a clearer graph produces clearer artifacts
- generated-artifact quality → author-iteration rate (+) — an author who trusts the artifacts iterates more
- author-iteration rate → graph-refinement rate (+) — each iteration surfaces a graph improvement
- graph-refinement rate → learning-graph quality (+, with delay marker ⧚) — refinements accumulate
- generated-artifact quality → pipeline confidence (+) — visible quality reinforces the author's willingness to trust the pipeline

Edges and polarities for B1:

- chapter-content size → token-budget pressure (+) — longer chapters cost more tokens per run
- token-budget pressure → context-window truncation (+) — pressure forces the pipeline to drop prior-chapter context
- context-window truncation → generation inconsistency (+) — dropped context produces style, voice, and schema drift
- generation inconsistency → rework cost (+) — drift is caught on review and fixed by hand
- rework cost → author-iteration rate (−) — time spent on rework is time not spent on refinement, starving R1
- token-budget pressure → author-iteration rate (−) — expensive runs are run less often

Loop labels at each loop's geometric center:

- **R1 — Graph-quality flywheel (reinforcing, productive).** Graph quality raises artifact quality, which raises iteration rate, which raises graph-refinement rate, which raises graph quality.
- **B1 — Token-pressure trap (balancing, corrosive).** Chapter size raises token pressure, which forces truncation, which creates inconsistency, which creates rework, which throttles iteration — starving R1.

The cross-link *rework cost → author-iteration rate (−)* is rendered in a distinct warning color to show how B1 leaks into R1. Delay marker ⧚ on the graph-refinement-rate → learning-graph-quality edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A two-paragraph walkthrough accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
