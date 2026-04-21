---
title: The Mascot Design Pipeline
description: A six-step pipeline diagram showing how to design a pedagogical mascot from persona one-pager through consistency audit, with artifact labels and an audit feedback loop.
status: implemented
library: Mermaid
---

# The Mascot Design Pipeline

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Mascot Design Pipeline Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart TD diagram showing the six-step mascot design procedure as a pipeline. Each step is a node annotated with its audit gate question. Inter-step arrows are labeled with the artifact that carries forward: character sheet, seven poses, voice guide, admonition types, and stylesheet. An audit feedback arrow from the Consistency Audit back to the Voice Guide step (in orange) shows that the pipeline is a loop, not a dead end -- drift detected in the audit triggers voice guide strengthening.

## Diagram Details

```mermaid
flowchart TD
    S1[1. Persona One-Pager\nAudit: Does the character feel distinct and teachable?]
    S2[2. Visual Identity\nAudit: Are all seven poses visually consistent?]
    S3[3. Voice Guide\nAudit: Can two readers identify the voice blindly?]
    S4[4. Admonition Library\nAudit: Does every type map to exactly one pose?]
    S5[5. CSS Implementation\nAudit: Do all admonitions render at every path depth?]
    S6[6. Consistency Audit\nAudit: Zero drift detected across all chapters?]

    S1 -->|character sheet| S2
    S2 -->|seven poses| S3
    S3 -->|voice guide| S4
    S4 -->|admonition types| S5
    S5 -->|stylesheet| S6
    S6 -->|drift feedback| S3
```

## Related Resources

- [Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md)
