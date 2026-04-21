---
title: Psychological Safety Dynamics — Two Opposed Loops
description: Psychological Safety Dynamics — Two Opposed Loops
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Psychological Safety Dynamics — Two Opposed Loops

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
Type: causal-loop-diagram
**sim-id:** psychological-safety-dynamics<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing ten variable-nodes and two named reinforcing loops. All nodes are noun phrases naming variables that can go up or down.

Nodes for R1 (safety flywheel, productive): "perceived psychological safety", "willingness to speak up", "error exposure in discourse", "group error-correction opportunity", "learning outcome quality".

Nodes for R2 (stereotype-threat trap, corrosive): "group-membership salience", "threat concern", "working-memory load", "performance on task", "confirmation of stereotype belief".

Edges and polarities for R1:

- perceived psychological safety → willingness to speak up (+)
- willingness to speak up → error exposure in discourse (+)
- error exposure in discourse → group error-correction opportunity (+)
- group error-correction opportunity → learning outcome quality (+, with delay marker ⧚)
- learning outcome quality → perceived psychological safety (+) — visible learning reinforces the belief that speaking up pays off, closing R1

Edges and polarities for R2:

- group-membership salience → threat concern (+)
- threat concern → working-memory load (+)
- working-memory load → performance on task (−)
- performance on task → confirmation of stereotype belief (−) — lower performance *raises* confirmation
- confirmation of stereotype belief → threat concern (+), closing R2 with an additional cross-link
- confirmation of stereotype belief → perceived psychological safety (−) — cross-loop link showing how the trap corrodes safety

Loop labels at each loop's geometric center:

- **R1 — Safety flywheel (reinforcing, productive).** Safety → speaking → error exposure → correction opportunity → learning → more safety.
- **R2 — Threat-load-underperformance trap (reinforcing, corrosive).** Salience → threat → cognitive-load burden → underperformance → confirmation → more threat.

Visual treatment: R1 nodes in cool blue; R2 nodes in warm red-orange; the cross-link from R2 back into R1 (confirmation of stereotype belief → perceived psychological safety, negative) rendered in a distinct warning color to highlight how the corrosive loop can starve the productive one. Delay marker ⧚ on the group error-correction opportunity → learning outcome quality edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A two-paragraph walkthrough of R1 and R2 in plain English accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
