---
title: The Seven Domains as a Coupled System
description: A causal loop diagram showing the seven domains of learning science as interconnected variables with reinforcing and balancing feedback loops.
---

# The Seven Domains as a Coupled System

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Seven Domains Coupling Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows how the seven domains of learning science form a coupled system. The forward chain R1 (Learning Flywheel) traces motivation through understanding, retention, application, and expertise, with expertise feeding back into motivation. The R2 loop (Evidence Flywheel) shows how understanding, retention, and application produce measurement signals that drive instructional design adjustments. Learning Conditions Quality acts as a substrate that lifts both motivation and measurement signal quality. Delay markers appear on the application-to-expertise and expertise-to-motivation edges to reflect the long latency of those transitions.

## Diagram Details

```mermaid
graph LR
    MOT["Motivation"]:::r1 -->|"+"| UND["Understanding"]:::r1
    UND -->|"+"| RET["Retention"]:::r1
    RET -->|"+"| APP["Application"]:::r1
    APP -->|"+ with delay"| EXP["Expertise"]:::r1
    EXP -->|"+ with delay"| MOT

    UND -->|"+"| MSIG["Measurement Signal"]:::r2
    RET -->|"+"| MSIG
    APP -->|"+"| MSIG
    MSIG -->|"+"| IDES["Instructional Design"]:::r2
    IDES -->|"+"| UND

    LCQ["Learning Conditions Quality"]:::substrate -->|"+"| MOT
    LCQ -->|"+"| MSIG

    R1L[" R1: Learning Flywheel -- reinforcing "]:::looplabel
    R2L[" R2: Evidence Flywheel -- reinforcing "]:::looplabel
    B1L[" B1: Conditions Brake -- balancing "]:::looplabel

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef r2 fill:#2D9C6F,stroke:#1E7A55,color:#fff
    classDef substrate fill:#D4A76A,stroke:#A67D3D,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 2: The Seven Domains Framework](../../chapters/02-seven-domains/index.md)
