---
title: The Competence Flywheel and the Frustration Brake
description: A causal loop diagram showing two reinforcing loops -- one productive and one corrosive -- that compete for control of learner motivation.
---

# The Competence Flywheel and the Frustration Brake

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Competence Flywheel Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows two reinforcing loops that compete for control of learner motivation. R1 (Competence Flywheel) is the productive loop: perceived competence fuels effort, effort produces skill growth (with delay), and skill growth raises perceived competence. R2 (Frustration Brake) is the corrosive loop: frustration drives avoidance, avoidance widens the skill gap, and a larger gap makes the next task feel harder, which produces more frustration. Perceived competence and task difficulty match are shared nodes that connect the two loops -- they determine which loop dominates.

## Diagram Details

```mermaid
graph LR
    PC["Perceived Competence"]:::shared -->|"+"| EI["Effort Invested"]:::r1
    EI -->|"+ with delay"| SG["Skill Growth"]:::r1
    SG -->|"+"| PC
    TDM["Task Difficulty Match"]:::shared -->|"+"| PC
    TDM -->|"−"| FR["Frustration"]:::r2
    FR -->|"+"| AV["Avoidance"]:::r2
    AV -->|"+"| SKG["Skill Gap"]:::r2
    SKG -->|"−"| TDM
    PC -->|"−"| FR

    R1[" R1: Competence Flywheel -- reinforcing "]:::looplabel
    R2[" R2: Frustration Brake -- reinforcing, corrosive "]:::looplabel

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef r2 fill:#E8795A,stroke:#C0392B,color:#fff
    classDef shared fill:#7B8D8E,stroke:#4A6163,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 3: Motivation and Engagement](../../chapters/03-motivation-engagement/index.md)
