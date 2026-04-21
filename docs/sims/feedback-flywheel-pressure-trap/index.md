---
title: Feedback Dynamics -- Formative Flywheel vs. Summative Pressure Trap
description: A causal loop diagram showing how frequent formative assessment creates a productive flywheel, while high summative stakes create a corrosive pressure trap that degrades both learning and signal quality.
---

# Feedback Dynamics -- Formative Flywheel vs. Summative Pressure Trap

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Feedback Dynamics Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows two reinforcing loops in assessment design. R1 (Formative Flywheel) is the productive loop: frequent formative checks produce sharp diagnostic signals, which drive instructional adjustments, which raise learner performance (with delay), which improves metacognitive calibration, which motivates more formative checks. R2 (Summative Pressure Trap) is the corrosive loop: high summative stakes raise perceived pressure, which produces test-wise behavior (cramming, cue-matching), which crowds out genuine learning and degrades the signal-to-noise ratio of scores -- this is Goodhart's Law rendered as a loop. Diagnostic signal quality is the shared pivot variable.

## Diagram Details

```mermaid
graph LR
    FAF["Formative Assessment Frequency"]:::r1 -->|"+"| DSQ["Diagnostic Signal Quality"]:::shared
    DSQ -->|"+"| IA["Instructional Adjustment"]:::r1
    IA -->|"+ with delay"| LP["Learner Performance"]:::r1
    LP -->|"+"| MC["Metacognitive Calibration"]:::r1
    MC -->|"+"| FAF

    SS["Summative Stakes"]:::r2 -->|"+"| PTP["Perceived Test Pressure"]:::r2
    PTP -->|"+"| TWB["Test-Wise Behavior"]:::r2
    TWB -->|"−"| EGL["Effort on Genuine Learning"]:::r2
    EGL -->|"+"| LP
    TWB -->|"−"| SNR["Signal-to-Noise Ratio of Scores"]:::r2
    SNR -->|"+"| DSQ
    SS -->|"−"| FAF

    R1[" R1: Formative Flywheel -- reinforcing, productive "]:::looplabel
    R2[" R2: Summative Pressure Trap -- reinforcing, corrosive "]:::looplabel

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef r2 fill:#E8795A,stroke:#C0392B,color:#fff
    classDef shared fill:#7B8D8E,stroke:#4A6163,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
