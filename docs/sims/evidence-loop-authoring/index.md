---
title: The Evidence Loop That Disciplines AI-Generated Content
description: A causal loop diagram showing how evidence feedback creates a reinforcing flywheel that counteracts the quality-diluting effect of high-volume AI authoring.
---

# The Evidence Loop That Disciplines AI-Generated Content

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Evidence Loop Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows two opposing dynamics in AI-assisted textbook authoring. The balancing loop B1 (Authoring Gap) shows how more capable AI produces more content volume, which without a filter dilutes quality. The reinforcing loop R1 (Evidence Flywheel) shows how learner outcomes produce evidence feedback that drives instructional design adjustments, which in turn lift content quality. The delay marker on the outcomes-to-evidence edge reflects the weeks-to-months needed for outcome data to accumulate.

## Diagram Details

```mermaid
graph LR
    AI["AI Authoring Capability"]:::gap -->|"+"| VOL["Content Volume"]:::gap
    VOL -->|"−"| CQ["Content Quality"]:::flywheel
    EF["Evidence Feedback"]:::flywheel -->|"+"| IDA["Instructional Design Adjustment"]:::flywheel
    IDA -->|"+"| CQ
    CQ -->|"+"| LO["Learner Outcomes"]:::flywheel
    LO -->|"+ with delay"| EF

    B1[" B1: Authoring Gap -- balancing "]:::looplabel
    R1[" R1: Evidence Flywheel -- reinforcing "]:::looplabel

    classDef gap fill:#E8795A,stroke:#C0392B,color:#fff
    classDef flywheel fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 1: Foundations of Learning Sciences](../../chapters/01-foundations/index.md)
