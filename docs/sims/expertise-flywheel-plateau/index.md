---
title: Expertise Dynamics — Practice Flywheel and Automaticity Plateau
description: Expertise Dynamics — Practice Flywheel and Automaticity Plateau
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Expertise Dynamics — Practice Flywheel and Automaticity Plateau

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
[Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md).

```text
Type: causal-loop-diagram
**sim-id:** expertise-flywheel-plateau<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing eight variable-nodes and two named reinforcing loops. Nodes, all written as noun phrases (variables that can go up or down): "deliberate practice volume", "feedback quality", "pattern library size", "automaticity of routine sub-tasks", "working memory freed for refinement", "edge-of-ability challenge", "perceived effortlessness", "willingness to seek harder problems".

Edges and polarities:

- deliberate practice volume → pattern library size (+) — each deliberate-practice session adds or strengthens patterns
- feedback quality → pattern library size (+) — informative feedback shapes correct patterns; poor feedback shapes noise
- pattern library size → automaticity of routine sub-tasks (+, with delay marker ⧚) — routines automatize over repeated correct practice
- automaticity of routine sub-tasks → working memory freed for refinement (+) — automatized sub-tasks stop consuming working-memory slots
- working memory freed for refinement → edge-of-ability challenge (+) — freed capacity makes harder sub-tasks tractable
- edge-of-ability challenge → deliberate practice volume (+) — harder challenge re-opens the deliberate-practice loop at a new level, closing R1
- automaticity of routine sub-tasks → perceived effortlessness (+) — fluid performance feels easy
- perceived effortlessness → willingness to seek harder problems (−) — ease reduces perceived need for harder work
- willingness to seek harder problems → edge-of-ability challenge (+) — without willingness, the challenge variable drops
- perceived effortlessness → feedback quality (−) — easy performance rarely triggers informative feedback, because there's nothing to correct

Loop labels placed at each loop's geometric center:

- **R1 — Practice flywheel (reinforcing, productive).** deliberate practice → pattern library → automaticity → freed working memory → edge-of-ability challenge → more deliberate practice. Each trip around the loop builds the capacity for the next, harder, trip.
- **R2 — Automaticity plateau (reinforcing, corrosive).** automaticity → perceived effortlessness → less willingness to seek harder problems → less challenge → less deliberate practice → library stops growing, yet automaticity of existing routines keeps the performance feeling fluid. The loop feels like mastery and starves further growth. This is the classic *intermediate plateau* in skill acquisition — the point at which many learners stop improving and stay where they are.

Visual treatment: R1 nodes in cool blue; R2 nodes in warm red-orange; the node "edge-of-ability challenge" drawn with a dual border to signal that it is the pivot variable — the lever that determines whether the system runs in R1 or R2. Delay marker ⧚ on the pattern library → automaticity edge because automatization is a slow consequence of repeated correct practice. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 in plain English accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md)
