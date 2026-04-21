---
title: Chunking — Novice vs. Expert Board Recall
description: Chunking — Novice vs. Expert Board Recall
status: scaffold
library: p5.js
bloom_level: TBD
---

# Chunking — Novice vs. Expert Board Recall

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
[Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md).

```text
Type: microsim
**sim-id:** chunking-board-recall<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that lets the learner re-run a simplified version of Chase and Simon (1973) on themselves. The canvas shows an 8x8 grid; at trial start, a configuration of pieces is displayed for five seconds, then hidden, and the learner attempts to place the pieces from memory on an empty grid. The system scores correct placements per trial and plots the learner's running recall curve under two conditions.

Controls (using built-in p5.js controls per project convention):

- **Condition dropdown** — *Meaningful position* (drawn from an authored bank of plausible mid-game configurations) or *Random position* (same piece set, positions shuffled uniformly at random).
- **Pieces-on-board slider** — 8 to 24, so the learner can feel the point at which the meaningful-vs-random gap opens up (typically around 12–16 pieces).
- **Show-time slider** — 2 to 10 seconds, defaulting to 5.
- **Start trial button** — reveals the position for the show-time duration.
- **Submit button** — scores the attempt.
- **Reset button** — clears the running curve.

After each trial, the MicroSim plots a small line graph of score-by-trial with a separate line per condition, making the meaningful-vs-random gap visible over roughly ten trials. A short explanatory caption names the finding — *"Expertise recalls structure, not pieces"* — and links back to the novice/expert table in the chapter.

Learning objective (Bloom level: Analyze): *Given personal performance on meaningful and random configurations, explain why the gap between conditions diagnoses chunking capacity rather than raw memory capacity.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/chunking-board-recall/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill. The piece-set can be re-themed (chess, checkers, abstract shapes) without changing the underlying experiment structure, making the sim reusable across chapters.
```

## Related Resources

- [Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md)
