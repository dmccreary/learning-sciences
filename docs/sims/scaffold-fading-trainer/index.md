---
title: Scaffold Fading Progression
description: Scaffold Fading Progression
status: scaffold
library: p5.js
bloom_level: TBD
---

# Scaffold Fading Progression

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
[Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md).

```text
Type: microsim
**sim-id:** scaffold-fading-trainer<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that implements the six-stage fading progression from the table above for a chosen concept (default: Bayes' rule). The canvas shows a problem statement on the left and a solution workspace on the right. The top of the canvas shows a stage indicator (1 through 6) with the current scaffold level highlighted, and a mini cognitive-load meter that reflects the extraneous-load reduction at each stage.

Controls (using built-in p5.js controls per project convention):

- **Stage stepper buttons** — previous / next to move through the six stages on the same structural problem.
- **Concept dropdown** — Bayes' rule, *t*-test selection, conditional probability, analogical mapping. Each concept has an authored sequence of six problems with matched structure and varied surface.
- **Self-explain prompt toggle** — turns on or off the "explain why this step works" prompt after each step; data is logged so the learner can compare their own performance with and without self-explanation.
- **Surface-variety slider** — 1 to 5; higher values swap more surface features between stages, exposing the underlying structure more aggressively.
- **Reset button** — restart the sequence.

Learning objective (Bloom level: Apply): *Given a target concept and a learner profile, choose the appropriate stage in the fading progression and justify the choice in cognitive-load terms.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/scaffold-fading-trainer/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md)
