---
title: Transportation Dynamics — Identification Flywheel and Accuracy-Erosion Trap
description: Transportation Dynamics — Identification Flywheel and Accuracy-Erosion Trap
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Transportation Dynamics — Identification Flywheel and Accuracy-Erosion Trap

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
Type: causal-loop-diagram
**sim-id:** transportation-dynamics-loops<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing nine variable-nodes and two named loops. All nodes are noun phrases naming variables that can go up or down.

Nodes: *vividness of panels*, *identification with figure*, *narrative transportation*, *reduced counterarguing*, *retention of embedded concept*, *re-engagement with chapter*, *historical accuracy check rigor*, *fidelity of embedded claims*, *risk of laundered inaccuracy*.

Edges and polarities:

- vividness of panels → narrative transportation (+)
- identification with figure → narrative transportation (+)
- narrative transportation → reduced counterarguing (+)
- reduced counterarguing → retention of embedded concept (+) — when claims are true
- reduced counterarguing → risk of laundered inaccuracy (+) — when claims are false
- retention of embedded concept → re-engagement with chapter (+, with delay ⧚)
- re-engagement with chapter → identification with figure (+) — returning readers identify more deeply on re-read
- historical accuracy check rigor → fidelity of embedded claims (+)
- fidelity of embedded claims → risk of laundered inaccuracy (−) — accuracy brakes the trap
- historical accuracy check rigor → narrative transportation (slight −) — extra disclosure text can dampen immersion marginally

Loop labels placed at each loop's geometric center:

- **R1 — Identification flywheel (reinforcing, productive).** vividness and identification → transportation → reduced counterarguing → retention → re-engagement → deeper identification. The loop that makes graphic novels worth the effort.
- **B1 — Accuracy-erosion trap (reinforcing, corrosive).** transportation → reduced counterarguing → laundered inaccuracy → false beliefs retained. Structurally a reinforcing loop running in the bad direction. Historical accuracy check rigor is the brake.

Visual treatment: R1 nodes in cool blue; B1 nodes in warm red-orange; the shared node *reduced counterarguing* drawn in a neutral tone with dual borders to signal it belongs to both loops. Delay marker ⧚ on the retention → re-engagement edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 in plain English accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 13: Graphic Novels and Short-Form Stories](../../chapters/13-graphic-novels/index.md)
