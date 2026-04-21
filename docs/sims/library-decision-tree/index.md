---
title: Which Library Should I Use for This Visualization?
description: A decision tree that routes visualization needs to the correct JavaScript library based on data type and interaction requirements.
status: implemented
library: Mermaid
---

# Which Library Should I Use for This Visualization?

<iframe src="main.html" height="700px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Library Decision Tree Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart TD decision tree starting from the root question "What do I need to show?" with seven branches, each routing to one of the project's visualization libraries: Leaflet for geographic data, vis-network for interactive node-link graphs, Mermaid for read-only diagrams, Venn.js for set intersections, Chart.js for standard 2D charts, Plotly for higher-dimensional or 3D data, and p5.js for bespoke or generative visualizations. Each leaf is colored by library.

## Diagram Details

```mermaid
flowchart TD
    ROOT{What do I need to show?}

    ROOT -->|Geographic data?| Q1{Is the data geographic?}
    Q1 -->|Yes| LEAFLET[Leaflet - Interactive map with tile rendering]

    ROOT -->|Interactive graph?| Q2{Should readers manipulate nodes and edges?}
    Q2 -->|Yes| VISNET[vis-network - Interactive node-link diagram]

    ROOT -->|Read-only graph?| Q3{Read-only diagram?}
    Q3 -->|Yes| MERMAID[Mermaid - Text-authored diagram]

    ROOT -->|Set overlap?| Q4{Set intersection picture?}
    Q4 -->|Yes| VENN[Venn.js - Venn and Euler diagrams]

    ROOT -->|Standard chart?| Q5{Standard 2D chart: bar, line, pie?}
    Q5 -->|Yes| CHARTJS[Chart.js - Lightweight standard charts]

    ROOT -->|Rich or 3D?| Q6{Higher-dimensional, hover-detail, or 3D?}
    Q6 -->|Yes| PLOTLY[Plotly - Richer interactive charting]

    ROOT -->|Bespoke?| Q7{Bespoke, generative, or custom-interactive?}
    Q7 -->|Yes| P5[p5.js - Creative-coding canvas]
```

## Related Resources

- [Chapter 11: MicroSims and Interactive Visualizations](../../chapters/11-microsims/index.md)
