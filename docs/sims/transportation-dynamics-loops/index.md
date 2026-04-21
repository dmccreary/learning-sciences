---
title: Transportation Dynamics
description: A causal loop diagram showing the Identification Flywheel and Accuracy-Erosion Trap that govern graphic novel effectiveness.
status: implemented
library: Mermaid
---

# Transportation Dynamics - Identification Flywheel and Accuracy-Erosion Trap

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Transportation Dynamics Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A causal loop diagram with nine variable-nodes and two named loops. **R1 (Identification flywheel):** Vivid panels and reader identification drive narrative transportation, which reduces counterarguing and improves retention. Re-engagement deepens identification, spinning the productive loop. **B1 (Accuracy-erosion trap):** Transportation also reduces counterarguing against false claims, laundering inaccuracy into retained false beliefs. Historical accuracy check rigor is the brake that keeps fidelity high and risk low. The shared node "Reduced Counterarguing" belongs to both loops.

## Diagram Details

```mermaid
flowchart LR
    VP[Vividness of Panels] -->|+| NT[Narrative Transportation]
    IF[Identification with Figure] -->|+| NT
    NT -->|+| RC[Reduced Counterarguing]
    RC -->|+| RET[Retention of Embedded Concept]
    RC -->|+| RLA[Risk of Laundered Inaccuracy]
    RET -->|+ delay| REG[Re-engagement with Chapter]
    REG -->|+| IF

    HAR[Historical Accuracy Check Rigor] -->|+| FEC[Fidelity of Embedded Claims]
    FEC -->|minus| RLA
    HAR -->|slight minus| NT
```

## Related Resources

- [Chapter 13: Graphic Novels and Short-Form Stories](../../chapters/13-graphic-novels/index.md)
