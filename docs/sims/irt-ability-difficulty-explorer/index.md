---
title: IRT Ability-vs-Difficulty Explorer
description: IRT Ability-vs-Difficulty Explorer
status: scaffold
library: p5.js
bloom_level: TBD
---

# IRT Ability-vs-Difficulty Explorer

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
[Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md).

```text
Type: microsim
**sim-id:** irt-ability-difficulty-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that plots the Rasch one-parameter logistic curve. The canvas shows a logistic curve with ability \(\theta\) on the x-axis (range −4 to +4) and probability of a correct response on the y-axis (range 0 to 1). A vertical line marks the current item difficulty \(b\); a horizontal line marks the probability at the current learner ability \(\theta\); their intersection is highlighted as a filled dot.

Controls (using built-in p5.js controls per project convention):

- **Ability slider (θ)** — −4 to +4, default 0.
- **Difficulty slider (b)** — −4 to +4, default 0.
- **Show two-parameter toggle** — adds a discrimination slider \(a\) (0.2 to 2.5, default 1.0) and switches to the 2PL form.
- **Show information curve checkbox** — overlays the item-information curve (which peaks at \(\theta = b\) for Rasch), making the adaptive-testing principle visible.
- **Reset button** — restores defaults.

A caption below the canvas reports the current \(P(\theta, b)\) value and labels three qualitative zones: *"too easy for this learner"* (\(P > 0.85\)), *"at the edge of ability"* (\(0.5 \le P \le 0.85\)), and *"too hard"* (\(P < 0.35\)). No student data is used; the sim is purely a model visualizer.

Learning objective (Bloom level: Understand): *Using the IRT explorer, explain why an item calibrated near the learner's ability yields the most information per unit of testing time.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/irt-ability-difficulty-explorer/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
