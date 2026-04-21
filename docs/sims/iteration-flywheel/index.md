---
title: The Iteration Flywheel
description: A causal loop diagram showing how ship cadence, reader feedback, peer review, revision rate, chapter quality, and reader trust form a reinforcing flywheel, with the ship-and-forget brake as the anti-pattern.
status: implemented
library: Mermaid
---

# The Iteration Flywheel

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Iteration Flywheel Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A causal loop diagram with seven variable-nodes and two named loops. **R1 (Iteration flywheel):** Ship cadence produces reader feedback, which seeds revision. Peer review turnaround accelerates revision. Revisions compound into chapter quality, which builds reader trust, enabling more confident shipping. **B1 (Ship-and-forget brake):** Shipping without a feedback gate tempts skipping feedback collection and revision, starving the flywheel. The negative edges from the anti-pattern node are highlighted in red.

## Diagram Details

```mermaid
flowchart LR
    SC[Ship Cadence] -->|+| RFV[Reader Feedback Volume]
    RFV -->|+| RR[Revision Rate]
    PRT[Peer Review Turnaround] -->|+| RR
    RR -->|+ delay| CQ[Chapter Quality]
    CQ -->|+| RT[Reader Trust]
    RT -->|+| SC
    PRT -->|+| SC

    SC -->|+| SAF[Ship-and-Forget Frequency]
    SAF -->|minus| RFV
    SAF -->|minus| RR
```

## Related Resources

- [Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md)
