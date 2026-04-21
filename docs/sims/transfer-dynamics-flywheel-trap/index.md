---
title: Transfer Dynamics -- Schema Flywheel and Surface-Match Trap
description: A causal loop diagram showing how varied practice builds schema strength for far transfer, while surface-feature reliance creates a corrosive trap that starves transfer.
---

# Transfer Dynamics -- Schema Flywheel and Surface-Match Trap

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Transfer Dynamics Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows two reinforcing loops that compete for control of transfer capability. R1 (Schema Flywheel) is the productive loop: varied practice surfaces force structural abstraction, which builds schema strength, which enables far-transfer capability (with delay), which motivates more varied practice. R2 (Surface-Match Trap) is the corrosive loop: near-transfer success trains surface-feature reliance, which produces perceived competence that reduces the motivation to seek harder problems, and simultaneously suppresses structural abstraction. Practice on varied problems is the shared pivot node -- the lever that determines which loop dominates.

## Diagram Details

```mermaid
graph LR
    VPS["Variety of Practice Surfaces"]:::r1 -->|"+"| SA["Structural Abstraction"]:::r1
    SA -->|"+"| SST["Schema Strength"]:::r1
    SST -->|"+ with delay"| FTC["Far-Transfer Capability"]:::r1
    FTC -->|"+"| PVP["Practice on Varied Problems"]:::shared
    PVP -->|"+"| VPS

    NTS["Near-Transfer Success"]:::r2 -->|"+"| SFR["Surface-Feature Reliance"]:::r2
    SFR -->|"+"| PCO["Perceived Competence"]:::r2
    PCO -->|"−"| PVP
    SFR -->|"−"| SA

    R1[" R1: Schema Flywheel -- reinforcing, productive "]:::looplabel
    R2[" R2: Surface-Match Trap -- reinforcing, corrosive "]:::looplabel

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef r2 fill:#E8795A,stroke:#C0392B,color:#fff
    classDef shared fill:#7B8D8E,stroke:#4A6163,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md)
