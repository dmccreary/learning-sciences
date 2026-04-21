---
title: The Forgetting Curve Simulator
description: Interactive visualization of the Ebbinghaus retention curve R = e^(-t/S) comparing baseline forgetting with spaced review schedules.
---

# The Forgetting Curve Simulator

<iframe src="main.html" height="580px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Forgetting Curve Simulator Fullscreen](./main.html){ .md-button .md-button--primary }
[Edit Using the p5.js Editor](https://editor.p5js.org/){ .md-button }

## About This MicroSim

This MicroSim plots the Ebbinghaus retention curve R = e^(-t/S) over a 60-day time horizon. Two curves are superimposed: a baseline "no review" curve that decays exponentially, and a "with review" curve whose strength parameter S increases at each scheduled review, producing the characteristic sawtooth pattern that rises above the baseline over time.

**Controls:**

- **Initial Strength (S)** -- the memory strength at encoding, from 1 to 10 days
- **Review Schedule** -- choose from None, Daily, SM-2 Expanding (1, 3, 7, 14, 30 days), or Leitner Doubling
- **Strength Gain per Review** -- multiplicative factor (1.5x to 3x) by which S increases at each review
- **Show Area Under Curve** -- shades the integral of retention to visualize total knowledge held
- **Reset** -- restores default values

**Learning Objective (Analyze):** Given a review schedule, predict whether the resulting retention trajectory will beat a no-review baseline at day 30.

## Related Resources

- [Chapter 5: Knowledge Retention](../../chapters/05-knowledge-retention/index.md)
