---
title: Authoring Pipeline Dynamics
description: A causal loop diagram showing the Graph-Quality Flywheel and Token-Pressure Trap that govern authoring pipeline behavior.
status: implemented
library: Mermaid
---

# Authoring Pipeline Dynamics - Graph-Quality Flywheel vs. Token-Pressure Trap

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Authoring Pipeline Dynamics Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A causal loop diagram with ten variable-nodes and two named loops. **R1 (Graph-Quality Flywheel)** shows how learning-graph quality raises artifact quality, which raises iteration rate, which raises graph-refinement rate, which raises graph quality -- a reinforcing productive loop. **B1 (Token-Pressure Trap)** shows how chapter-content size raises token-budget pressure, forcing context-window truncation, creating generation inconsistency and rework cost, which throttles iteration and starves R1. The cross-links from B1 into R1 are highlighted in red.

## Diagram Details

```mermaid
---
config:
  themeVariables:
    fontSize: 16px
  flowchart:
    nodeSpacing: 30
    rankSpacing: 60
    padding: 8
---
graph LR
    GQ["Learning-Graph
    Quality"]:::r1 -->|+| AQ["Generated-Artifact
    Quality"]:::r1
    AQ -->|+| AIR["Author-Iteration
    Rate"]:::r1
    AIR -->|+| GRR["Graph-Refinement
    Rate"]:::r1
    GRR -->|"+ with delay"| GQ
    AQ -->|+| PC["Pipeline
    Confidence"]:::r1

    CCS["Chapter-Content
    Size"]:::b1 -->|+| TBP["Token-Budget
    Pressure"]:::b1
    TBP -->|+| CWT["Context-Window
    Truncation"]:::b1
    CWT -->|+| GI["Generation
    Inconsistency"]:::b1
    GI -->|+| RC["Rework
    Cost"]:::b1

    RC -->|"-"| AIR
    TBP -->|"-"| AIR

    R1n["R1: Graph-Quality Flywheel"]:::label
    B1n["B1: Token-Pressure Trap"]:::label

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef b1 fill:#E87D2A,stroke:#B55D15,color:#fff
    classDef label fill:#f9f9f9,stroke:#ccc,color:#555
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
