---
title: Feedback Dynamics — Formative Flywheel vs. Summative Pressure Trap
description: Feedback Dynamics — Formative Flywheel vs. Summative Pressure Trap
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Feedback Dynamics — Formative Flywheel vs. Summative Pressure Trap

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
[Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md).

```text
Type: causal-loop-diagram
**sim-id:** feedback-flywheel-pressure-trap<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing ten variable-nodes and two named reinforcing loops. Nodes, all noun phrases: "formative assessment frequency", "diagnostic signal quality", "instructional adjustment", "learner performance", "metacognitive calibration", "summative stakes", "perceived test pressure", "test-wise behavior", "effort on genuine learning", "signal-to-noise ratio of scores".

Edges and polarities for R1 (formative flywheel, productive):

- formative assessment frequency → diagnostic signal quality (+)
- diagnostic signal quality → instructional adjustment (+)
- instructional adjustment → learner performance (+, with delay marker ⧚)
- learner performance → metacognitive calibration (+)
- metacognitive calibration → formative assessment frequency (+) — calibrated learners seek more formative checkpoints, closing R1

Edges and polarities for R2 (summative pressure trap, corrosive):

- summative stakes → perceived test pressure (+)
- perceived test pressure → test-wise behavior (+) — cramming, answer-pattern hunting, cue-matching
- test-wise behavior → effort on genuine learning (−)
- effort on genuine learning → learner performance (+)
- test-wise behavior → signal-to-noise ratio of scores (−)
- signal-to-noise ratio of scores → diagnostic signal quality (+)
- summative stakes → formative assessment frequency (−) — time-on-test crowds out time-on-feedback

Loop labels at each loop's geometric center:

- **R1 — Formative flywheel (reinforcing, productive).** Frequent formative checks produce sharp diagnostic signals, which drive instructional adjustments, which raise performance, which improves metacognitive calibration, which in turn motivates more formative checks.
- **R2 — Summative pressure trap (reinforcing, corrosive).** High summative stakes raise perceived pressure, which produces test-wise behavior, which crowds out genuine learning *and* degrades the signal quality of the test itself — the test becomes less informative the more it is optimized against. This is Goodhart's Law rendered as a loop.

Visual treatment: R1 nodes in cool blue; R2 nodes in warm red-orange; "diagnostic signal quality" drawn with a dual border to signal that it is the pivot variable — the lever that determines whether the system runs in R1 (signal-preserving) or R2 (signal-eroding). Delay marker ⧚ on the instructional adjustment → learner performance edge because pedagogical changes take time to register in performance. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 and R2 in plain English accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
