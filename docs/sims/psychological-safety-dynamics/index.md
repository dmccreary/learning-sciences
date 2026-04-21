---
title: Psychological Safety Dynamics -- Two Opposed Loops
description: A causal loop diagram showing how perceived psychological safety creates a productive flywheel for learning, while stereotype threat creates a corrosive trap that corrodes safety.
---

# Psychological Safety Dynamics -- Two Opposed Loops

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Psychological Safety Dynamics Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This causal loop diagram shows two opposing reinforcing loops. R1 (Safety Flywheel) is the productive loop: perceived psychological safety increases willingness to speak up, which exposes errors in discourse, which creates group error-correction opportunities, which raises learning outcome quality (with delay), which reinforces the belief that speaking up pays off. R2 (Threat-Load-Underperformance Trap) is the corrosive loop: group-membership salience raises threat concern, which loads working memory, which lowers performance, which confirms stereotype beliefs, which raises more threat concern. The cross-link from confirmation of stereotype belief to perceived psychological safety (negative) shows how the corrosive loop starves the productive one.

## Diagram Details

```mermaid
graph LR
    PPS["Perceived Psychological Safety"]:::r1 -->|"+"| WSU["Willingness to Speak Up"]:::r1
    WSU -->|"+"| EED["Error Exposure in Discourse"]:::r1
    EED -->|"+"| GEC["Group Error-Correction Opportunity"]:::r1
    GEC -->|"+ with delay"| LOQ["Learning Outcome Quality"]:::r1
    LOQ -->|"+"| PPS

    GMS["Group-Membership Salience"]:::r2 -->|"+"| TC["Threat Concern"]:::r2
    TC -->|"+"| WML["Working-Memory Load"]:::r2
    WML -->|"−"| POT["Performance on Task"]:::r2
    POT -->|"−"| CSB["Confirmation of Stereotype Belief"]:::r2
    CSB -->|"+"| TC
    CSB -->|"−"| PPS

    R1[" R1: Safety Flywheel -- reinforcing, productive "]:::looplabel
    R2[" R2: Threat-Load-Underperformance Trap -- reinforcing, corrosive "]:::looplabel

    classDef r1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef r2 fill:#E8795A,stroke:#C0392B,color:#fff
    classDef looplabel fill:none,stroke:none,color:#555,font-size:12px
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
