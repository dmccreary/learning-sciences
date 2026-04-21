---
title: The Graphic Novel Production Pipeline
description: A five-step pipeline diagram showing how to produce a graphic novel chapter from historical figure selection through accuracy check and assembly.
status: implemented
library: Mermaid
---

# The Graphic Novel Production Pipeline

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Graphic Novel Pipeline Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart TD diagram showing the five-step graphic-novel production pipeline. Each step is a node annotated with its audit gate question. Inter-step arrows are labeled with the artifact that carries forward: figure brief, storyboard, panel prompts, and rendered panels. An audit feedback arrow from the Historical Accuracy Check back to the Script and Panel Plan step (in orange) signals that fact-check flags may require script revision.

## Diagram Details

```mermaid
flowchart TD
    S1[1. Historical Figure Selection\nAudit: Documented record sufficient for 12 panels?]
    S2[2. Script and Panel Plan\nAudit: Arc stages tagged, dialogue age-appropriate?]
    S3[3. Image Prompt Engineering\nAudit: Character design block shared across all 12 prompts?]
    S4[4. Image Generation and Text Overlay\nAudit: Speech bubbles in HTML, not baked into images?]
    S5[5. Historical Accuracy Check and Assembly\nAudit: All claims fact-checked, dramatic license disclosed?]

    S1 -->|figure brief| S2
    S2 -->|storyboard| S3
    S3 -->|panel prompts| S4
    S4 -->|rendered panels| S5
    S5 -->|fact-check feedback| S2
```

## Related Resources

- [Chapter 13: Graphic Novels and Short-Form Stories](../../chapters/13-graphic-novels/index.md)
