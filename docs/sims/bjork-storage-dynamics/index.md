---
title: Bjork's Storage Dynamics -- Flywheel and Ease Trap
description: A causal loop diagram illustrating Bjork's theory of storage and retrieval strength, showing the productive storage flywheel and the corrosive ease trap.
---

# Bjork's Storage Dynamics -- Flywheel and Ease Trap

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Bjork Storage Dynamics Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram illustrates two key dynamics from Bjork's theory of desirable difficulties. R1 (Storage Flywheel) is the productive loop: effortful retrieval produces large storage gains, which accumulate as storage strength, which translates into durable memory, which -- after a delay on the next spaced review -- requires real effort to retrieve, feeding the flywheel again. R2 (Ease Trap) is the corrosive loop: high retrieval strength produces perceived fluency, which reduces restudy frequency and lowers retrieval effort, which in turn yields small storage gains. The ease trap feels like learning but starves durability. Retrieval effort at study is the shared pivot node -- the lever that determines which loop dominates.

## Diagram Details

```mermaid
graph LR
    RE["Retrieval Effort at Study"]:::shared -->|"+"| SGE["Storage Gain per Study Event"]:::r1
    SGE -->|"+"| SS["Storage Strength"]:::r1
    SS -->|"+ with delay"| DM["Durability of Memory"]:::r1
    DM -->|"+"| RE

    RS["Retrieval Strength at Next Study"]:::r2 -->|"+"| PF["Perceived Fluency"]:::r2
    PF -->|"−"| RSF["Restudy Frequency"]:::r2
    PF -->|"−"| RE
    RS -->|"−"| SGE

    R1[" R1: Storage Flywheel -- reinforcing, productive "]:::looplabel
    R2[" R2: Ease Trap -- reinforcing, corrosive "]:::looplabel

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef r2 fill:#E8795A,stroke:#C0392B,color:#fff
    classDef shared fill:#7B8D8E,stroke:#4A6163,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 5: Knowledge Retention](../../chapters/05-knowledge-retention/index.md)
