---
title: Analytic vs. Holistic Rubric — Structure and Signal
description: Analytic vs. Holistic Rubric — Structure and Signal
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Analytic vs. Holistic Rubric — Structure and Signal

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
Type: diagram
**sim-id:** rubric-analytic-vs-holistic<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart LR` diagram with two panels. Left panel shows an analytic rubric for a writing assignment with four independent criteria (Thesis, Evidence, Organization, Mechanics) each scored 1–4, feeding four separate score cells that flow into a profile chart. Right panel shows a holistic rubric with four performance-level bands (Emerging, Developing, Proficient, Exceeds) feeding a single score cell. Arrows from each structure point to a "Diagnostic Signal" label: left says "four-dimensional profile, per-criterion remediation possible"; right says "one-dimensional band, remediation requires re-reading the work."

Nodes use the blue palette for analytic (signal-rich) and warm red-orange for holistic (signal-compressed). A footer note reads: "Neither is universally better — choose based on whether you need per-dimension remediation (analytic) or time-efficient end-of-course judgment (holistic)."

Implementation: Mermaid `flowchart LR` with `classDef` for the two panels. Embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
