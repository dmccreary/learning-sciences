---
title: Leitner Box Simulator
description: Interactive visualization of the five-box Leitner spaced repetition system showing cards promoted and demoted across review intervals.
---

# Leitner Box Simulator

<iframe src="main.html" height="560px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Leitner Box Simulator Fullscreen](./main.html){ .md-button .md-button--primary }
[Edit Using the p5.js Editor](https://editor.p5js.org/){ .md-button }

## About This MicroSim

This MicroSim visualizes a five-box Leitner system over many simulated review sessions. Cards start in Box 1 and are promoted to higher boxes when answered correctly, or demoted to Box 1 when answered incorrectly. Each box has a longer review interval (1, 2, 4, 8, 16 days), so well-learned cards are reviewed less often.

**Controls:**

- **Deck Size** -- number of cards in the system (20 to 200)
- **Retention %** -- baseline probability of answering correctly per review
- **Speed** -- simulation days per second (1 to 20)
- **Play / Pause / Reset** -- control the simulation
- **Show Histogram** -- toggles a stacked area chart of card distribution over time

**Learning Objective (Apply):** Given a Leitner configuration, predict the steady-state distribution of cards across boxes.

## Related Resources

- [Chapter 5: Knowledge Retention](../../chapters/05-knowledge-retention/index.md)
