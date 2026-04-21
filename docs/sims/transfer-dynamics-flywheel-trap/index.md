---
title: Transfer Dynamics — Schema Flywheel and Surface-Match Trap
description: Transfer Dynamics — Schema Flywheel and Surface-Match Trap
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Transfer Dynamics — Schema Flywheel and Surface-Match Trap

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
[Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md).

```text
Type: causal-loop-diagram
**sim-id:** transfer-dynamics-flywheel-trap<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing eight variable-nodes and two named loops. Nodes, all written as noun phrases (variables that can go up or down): "variety of practice surfaces", "structural abstraction", "schema strength", "far-transfer capability", "near-transfer success", "surface-feature reliance", "perceived competence", "practice on varied problems".

Edges and polarities:

- variety of practice surfaces → structural abstraction (+) — varied surface features force extraction of deep structure
- structural abstraction → schema strength (+) — abstraction consolidates into schemas
- schema strength → far-transfer capability (+, with delay marker ⧚) — schemas enable performance on structurally similar but superficially different problems
- far-transfer capability → practice on varied problems (+) — successful far transfer reinforces the habit of attempting varied problems
- practice on varied problems → variety of practice surfaces (+) — closes the flywheel
- near-transfer success → surface-feature reliance (+) — repeated success on matched surfaces trains reliance on surface cues
- surface-feature reliance → perceived competence (+) — easy retrieval feels like mastery
- perceived competence → practice on varied problems (−) — feeling competent reduces the motivation to seek harder, structurally different problems
- surface-feature reliance → structural abstraction (−) — the learner stops extracting structure because surface features are doing the work

Loop labels placed at each loop's geometric center:

- **R1 — Schema flywheel (reinforcing, productive).** variety → abstraction → schema → far transfer → more varied practice → more variety. Each trip around the loop builds the capacity for the next structurally novel problem.
- **R2 — Surface-match trap (reinforcing, corrosive).** Near-transfer success → surface-feature reliance → perceived competence → less varied practice → less structural abstraction → and yet near-transfer performance keeps looking fine because the practice problems keep matching surface features. The loop feels like learning and starves transfer.

Visual treatment: R1 nodes in cool blue; R2 nodes in warm red-orange; the node "practice on varied problems" drawn with a dual border to signal that it is the lever that switches between the two loops. Delay marker ⧚ on the schema strength → far-transfer capability edge because schema-based transfer shows up most distinctly at delayed assessment, not immediately. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 in plain English accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md)
