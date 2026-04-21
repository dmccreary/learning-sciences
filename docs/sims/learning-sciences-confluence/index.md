---
title: Parent Disciplines of Learning Sciences
description: A top-down flowchart showing four parent disciplines converging on Learning Sciences, which feeds Intelligent Textbook Design.
---

# Parent Disciplines of Learning Sciences

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Parent Disciplines of Learning Sciences Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This diagram shows how Learning Sciences draws from four parent disciplines. Three research disciplines -- Cognitive Science, Educational Psychology, and Neuroscience in Learning -- sit on the top row. Instructional Design serves as the translation layer between research and practice. All four converge on Learning Sciences, which in turn feeds into Intelligent Textbook Design. Each arrow is labeled with the primary contribution that discipline makes.

## Diagram Details

```mermaid
graph TD
    CS["Cognitive Science"]:::research -->|"memory and attention"| LS["Learning Sciences"]:::convergence
    EP["Educational Psychology"]:::research -->|"motivation and development"| LS
    NL["Neuroscience in Learning"]:::research -->|"mechanism and constraint"| LS
    ID["Instructional Design"]:::translation -->|"translation to practice"| LS
    LS -->|"applied to"| ITD["Intelligent Textbook Design"]:::output

    classDef research fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef translation fill:#6BAED6,stroke:#3182BD,color:#fff
    classDef convergence fill:#2171B5,stroke:#08519C,color:#fff
    classDef output fill:#08306B,stroke:#041733,color:#fff
```

## Related Resources

- [Chapter 1: Foundations of Learning Sciences](../../chapters/01-foundations/index.md)
