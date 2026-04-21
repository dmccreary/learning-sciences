---
title: Aggregate Quality-Metrics Dashboard
description: Chart.js dashboard with four panels showing synthetic quality metrics across chapters.
status: implemented
library: Chart.js
bloom_level: Analyze
---

# Aggregate Quality-Metrics Dashboard

<iframe src="main.html" height="850px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Quality Dashboard Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A four-panel Chart.js dashboard populated with synthetic data (clearly labeled on every chart). All data is simulated — no real student data is used or displayed.

**Panel 1 — Chapter Completion Funnel:** Horizontal bars showing completion rate per chapter with a 70% course target line.

**Panel 2 — Quiz Item Difficulty Scatter:** IRT difficulty parameter (b) plotted against observed percent-correct. Items far from the IRT reference curve are candidates for recalibration.

**Panel 3 — MicroSim Engagement Heatmap:** A grid of chapters by MicroSims showing engagement rate on a 0-1 color ramp.

**Panel 4 — Bloom-Level Distribution:** Stacked bars per chapter showing quiz item counts at each of the six Bloom taxonomy levels.

Every panel carries a footer noting the sample size, date range, and synthetic-data disclaimer. Drill-down stops at the item level — never to a named learner.

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
