---
title: DAG Topological Ordering and Transitive Reduction
description: Side-by-side comparison of a full learning graph and its transitive reduction, showing how redundant edges are removed while preserving reachability.
status: implemented
library: Mermaid
---

# A Small Learning Graph, Its Topological Ordering, and Its Transitive Reduction

<iframe src="main.html" height="700px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the DAG Topological Reduction Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart TD diagram with two side-by-side panels sharing the same eight-concept graph: Working Memory, Chunking, Schema, Retrieval Practice, Spacing Effect, Desirable Difficulty, Deliberate Practice, and Transfer. The left panel shows the full graph with all ten edges. The right panel shows the transitive reduction where the redundant edge from Desirable Difficulty to Retrieval Practice is dashed -- it is already implied by the path through Spacing Effect. Numbers show one valid topological ordering.

## Diagram Details

```mermaid
flowchart TD
    subgraph Full ["Full Graph - All Edges Shown"]
        direction TD
        WM1[1. Working Memory]
        CH1[2. Chunking] --> WM1
        SC1[3. Schema] --> CH1
        RP1[4. Retrieval Practice] --> WM1
        SE1[5. Spacing Effect] --> RP1
        DD1[6. Desirable Difficulty] --> SE1
        DD1 --> RP1
        DP1[7. Deliberate Practice] --> DD1
        DP1 --> SC1
        TR1[8. Transfer] --> SC1
        TR1 --> DP1
    end

    subgraph Reduced ["Transitive Reduction"]
        direction TD
        WM2[1. Working Memory]
        CH2[2. Chunking] --> WM2
        SC2[3. Schema] --> CH2
        RP2[4. Retrieval Practice] --> WM2
        SE2[5. Spacing Effect] --> RP2
        DD2[6. Desirable Difficulty] --> SE2
        DD2 -.->|redundant| RP2
        DP2[7. Deliberate Practice] --> DD2
        DP2 --> SC2
        TR2[8. Transfer] --> SC2
        TR2 --> DP2
    end
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
