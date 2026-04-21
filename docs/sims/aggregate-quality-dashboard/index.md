---
title: Aggregate Quality-Metrics Dashboard (Synthetic)
description: Aggregate Quality-Metrics Dashboard (Synthetic)
status: scaffold
library: Chart.js or Plotly
bloom_level: TBD
---

# Aggregate Quality-Metrics Dashboard (Synthetic)

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** Chart.js or Plotly

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md).

```text
Type: dashboard-spec
**sim-id:** aggregate-quality-dashboard<br/>
**Library:** Chart.js or Plotly<br/>
**Status:** Specified

A static or lightly interactive dashboard page rendered with Chart.js or Plotly, populated from a synthetic dataset checked into the repository and clearly labeled *"SYNTHETIC — NO STUDENT DATA"* on every chart. The dashboard displays four panels:

1. **Chapter completion funnel** — horizontal bars showing completion rate per chapter, with the course target line overlaid.
2. **Quiz item-difficulty scatter** — scatter plot of estimated item difficulty (IRT \(b\)) against observed percent-correct, one dot per item, with the diagonal reference line; dots that fall far from the diagonal are candidates for recalibration.
3. **MicroSim engagement heatmap** — grid of chapters × MicroSims showing engagement rate on a 0–1 color ramp.
4. **Bloom-level distribution** — stacked bar per chapter showing the count of quiz items at each of the six Bloom levels, so the author can see whether a chapter is over-indexed on Remember/Understand.

Every panel carries a footer noting the sample size, the date range, and the synthetic-data disclaimer. No panel exposes a per-student row. Drill-down paths go from course → chapter → item, and stop at the item level — never to a named learner.

Implementation: generated synthetic-data JSON file, Chart.js or Plotly rendering. Located at `/docs/sims/aggregate-quality-dashboard/` with `main.html`, `data.json` (synthetic), `script.js`, and `index.md`.
```

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
