---
title: The Power-Law Learning Curve
description: The Power-Law Learning Curve
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Power-Law Learning Curve

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
**sim-id:** power-law-learning-curve<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that plots the power-law equation \(T = a N^{-b}\) on a configurable canvas. Two curves are shown simultaneously: a *raw-practice* curve with a small exponent (say \(b = 0.2\)) and a *deliberate-practice* curve with a larger exponent (say \(b = 0.4\)). A vertical line marks a chosen number of practice hours; the canvas reports the ratio of time-per-trial under the two curves at that point, making the compounded advantage of higher-quality practice visible.

Controls (using built-in p5.js controls per project convention):

- **Exponent-raw slider** — 0.1 to 0.6, default 0.2.
- **Exponent-deliberate slider** — 0.1 to 0.6, default 0.4.
- **Hours marker slider** — 1 to 10000; moves the vertical line across the log-scaled x-axis.
- **Log-log toggle** — switches between linear and log-log axes; on log-log, both curves become straight lines with slopes \(-b\), visually confirming the power-law form.
- **Reset button** — restores defaults.

Learning objective (Bloom level: Understand): *Using the power-law curve, explain why the rate of improvement per additional hour depends more on the exponent than on the total hour count.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/power-law-learning-curve/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md)
