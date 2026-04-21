---
title: Expertise Dynamics -- Practice Flywheel and Automaticity Plateau
description: A causal loop diagram showing how deliberate practice builds expertise through a reinforcing flywheel, while perceived effortlessness creates a corrosive automaticity plateau.
---

# Expertise Dynamics -- Practice Flywheel and Automaticity Plateau

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Expertise Dynamics Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows two reinforcing loops in skill acquisition. R1 (Practice Flywheel) is the productive loop: deliberate practice builds the pattern library, which automatizes routine sub-tasks (with delay), which frees working memory for refinement, which makes edge-of-ability challenges tractable, which drives more deliberate practice. R2 (Automaticity Plateau) is the corrosive loop: automaticity produces perceived effortlessness, which reduces willingness to seek harder problems and suppresses informative feedback -- the classic intermediate plateau where many learners stop improving. Edge-of-ability challenge is the pivot variable that determines which loop dominates.

## Diagram Details

```mermaid
graph LR
    DPV["Deliberate Practice Volume"]:::r1 -->|"+"| PLS["Pattern Library Size"]:::r1
    FQ["Feedback Quality"]:::r1 -->|"+"| PLS
    PLS -->|"+ with delay"| ART["Automaticity of Routine Sub-tasks"]:::shared
    ART -->|"+"| WMF["Working Memory Freed for Refinement"]:::r1
    WMF -->|"+"| EAC["Edge-of-Ability Challenge"]:::pivot
    EAC -->|"+"| DPV

    ART -->|"+"| PE["Perceived Effortlessness"]:::r2
    PE -->|"−"| WSH["Willingness to Seek Harder Problems"]:::r2
    WSH -->|"+"| EAC
    PE -->|"−"| FQ

    R1[" R1: Practice Flywheel -- reinforcing, productive "]:::looplabel
    R2[" R2: Automaticity Plateau -- reinforcing, corrosive "]:::looplabel

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef r2 fill:#E8795A,stroke:#C0392B,color:#fff
    classDef shared fill:#7B8D8E,stroke:#4A6163,color:#fff
    classDef pivot fill:#5B7FAF,stroke:#3A5F8F,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md)
