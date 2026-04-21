---
title: Which Library Should I Use for This Visualization?
description: Which Library Should I Use for This Visualization?
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Which Library Should I Use for This Visualization?

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
[Chapter 11: MicroSims and Interactive Visualizations](../../chapters/11-microsims/index.md).

```text
Type: diagram
**sim-id:** library-decision-tree<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` decision tree. Starting from the root *"What do I need to show?"*, the first split asks whether the data is spatial, temporal, quantitative, relational, categorical-overlap, or bespoke. Subsequent splits route each branch to one of the seven libraries with a one-sentence justification label on each leaf.

Branches:

- *Is the data geographic?* → Yes → **Leaflet** (interactive map with tile rendering).
- *Is the data a graph of nodes and edges the reader should manipulate?* → Yes → **vis-network** (interactive node-link).
- *Is the data a graph the reader only needs to read?* → Yes → **Mermaid** (text-authored diagram).
- *Is the visualization a set-intersection picture?* → Yes → **Venn.js** (specialized Venn/Euler rendering).
- *Is the data a standard 2D chart (bar, line, pie, scatter)?* → Yes → **Chart.js** (lightweight standard charts).
- *Is the data higher-dimensional, hover-detailed, or 3D?* → Yes → **Plotly** (richer interactive charting).
- *Is the visualization bespoke, generative, or custom-interactive?* → Yes → **p5.js** (creative-coding canvas).

Leaves colored by library with the project's blue-amber palette. The tree is rendered top-down so that the root reads first and the leaves are visually grouped by shape.

Implementation: Mermaid `flowchart TD` with labeled edges and `classDef` per library. Embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 11: MicroSims and Interactive Visualizations](../../chapters/11-microsims/index.md)
