---
title: Load Dynamics -- The Extraneous Brake and the Germane Flywheel
description: A causal loop diagram showing how extraneous load crowds out germane processing while schema construction creates a reinforcing flywheel that expands effective working-memory capacity.
---

# Load Dynamics -- The Extraneous Brake and the Germane Flywheel

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Load Dynamics Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows two opposing dynamics in cognitive load theory. B1 (Extraneous Brake) shows how extraneous load crowds out germane-load capacity, weakening schema construction, which keeps effective capacity low and intrinsic load high -- a design-quality failure that compounds. R1 (Germane Flywheel) shows the productive loop: germane-load capacity drives schema construction, schemas enable chunking that expands effective working-memory capacity, lower intrinsic load frees more germane capacity, and the cycle accelerates. Germane-load capacity is the shared pivot node where both loops compete.

## Diagram Details

```mermaid
graph LR
    EL["Extraneous Load"]:::b1 -->|"−"| GLC["Germane-Load Capacity"]:::shared
    GLC -->|"+"| SC["Schema Construction"]:::r1
    SC -->|"+ with delay"| EWM["Effective Working-Memory Capacity"]:::r1
    EWM -->|"−"| ILN["Intrinsic Load of Next Task"]:::r1
    ILN -->|"−"| GLC
    GLC -->|"+"| LP["Learner Performance"]:::r1
    EL -->|"−"| LP

    B1[" B1: Extraneous Brake -- balancing, corrosive "]:::looplabel
    R1[" R1: Germane Flywheel -- reinforcing "]:::looplabel

    classDef b1 fill:#E8795A,stroke:#C0392B,color:#fff
    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef shared fill:#7B8D8E,stroke:#4A6163,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 4: Cognitive Architecture and Load](../../chapters/04-cognitive-architecture/index.md)
