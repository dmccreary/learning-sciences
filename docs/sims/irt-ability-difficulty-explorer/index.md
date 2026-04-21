---
title: IRT Ability-vs-Difficulty Explorer
description: Interactive Item Response Theory explorer showing the Rasch 1PL and optional 2PL logistic curves with ability, difficulty, and information displays.
---

# IRT Ability-vs-Difficulty Explorer

<iframe src="main.html" height="580px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the IRT Explorer Fullscreen](./main.html){ .md-button .md-button--primary }
[Edit Using the p5.js Editor](https://editor.p5js.org/){ .md-button }

## About This MicroSim

This MicroSim plots the Item Response Theory logistic curve. The x-axis shows learner ability (theta, -4 to +4) and the y-axis shows probability of a correct response (0 to 1). A vertical line marks item difficulty, a horizontal line marks probability at the current ability, and their intersection is highlighted.

**Controls:**

- **Ability (theta)** -- learner ability from -4 to +4
- **Difficulty (b)** -- item difficulty from -4 to +4
- **Show 2PL** -- adds a discrimination parameter (a) that controls the curve's steepness
- **Show Information Curve** -- overlays the item information function, which peaks where theta = b
- **Reset** -- restores defaults

The caption labels three qualitative zones: "too easy" (P > 0.85), "at the edge of ability" (0.5 to 0.85), and "too hard" (P < 0.35).

**Learning Objective (Understand):** Using the IRT explorer, explain why an item calibrated near the learner's ability yields the most information per unit of testing time.

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
