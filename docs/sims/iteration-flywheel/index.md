---
title: The Iteration Flywheel
description: The Iteration Flywheel
status: scaffold
library: Mermaid
bloom_level: TBD
---

# The Iteration Flywheel

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
[Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md).

```text
Type: causal-loop-diagram
**sim-id:** iteration-flywheel<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing seven variable-nodes and one reinforcing loop plus one balancing anti-pattern. All nodes are noun phrases naming variables that can go up or down.

Nodes: *ship cadence*, *reader feedback volume*, *peer review turnaround*, *revision rate*, *chapter quality*, *reader trust*, *ship-and-forget frequency*.

Edges and polarities for **R1 — Iteration flywheel (reinforcing):**

- ship cadence → reader feedback volume (+) — shipping produces readers, readers produce feedback
- peer review turnaround → revision rate (+) — faster reviews mean faster revisions
- reader feedback volume → revision rate (+) — feedback seeds revision
- revision rate → chapter quality (+, with delay ⧚) — revisions compound into quality
- chapter quality → reader trust (+) — good chapters build trust
- reader trust → ship cadence (+) — trusted authors ship more confidently
- peer review turnaround → ship cadence (+) — fast reviews enable faster releases

Edges for **B1 — Ship-and-forget brake (balancing anti-pattern):**

- ship cadence → ship-and-forget frequency (+) — shipping without a feedback gate tempts "ship and move on"
- ship-and-forget frequency → reader feedback volume (−) — no feedback mechanism, no feedback
- ship-and-forget frequency → revision rate (−) — revisions never happen if feedback isn't collected

Loop labels at each loop's geometric center:

- **R1 — Iteration flywheel (reinforcing, productive).** Ship → feedback → revise → quality → trust → more ship. Peer review accelerates the inner portion of the loop.
- **B1 — Ship-and-forget brake (balancing, corrosive).** Shipping without a feedback gate starves the flywheel.

Visual treatment: R1 nodes in cool blue; the B1 anti-pattern in warm orange; delay marker ⧚ on the revision-rate-to-chapter-quality edge; every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping.
```

## Related Resources

- [Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md)
