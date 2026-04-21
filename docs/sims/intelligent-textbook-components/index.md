---
title: Components of an Intelligent Textbook
description: A flowchart showing the Learning Graph as the structural spine of an intelligent textbook, with arrows to each generated artifact.
---

# Components of an Intelligent Textbook

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Components of an Intelligent Textbook Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This diagram shows how the Learning Graph sits at the center of an intelligent textbook as its structural spine. From the graph, all other artifacts are generated: Chapters, Glossary, Quiz Bank, MicroSims, FAQ, References, and Stories. Mascot Admonitions appear as a cross-cutting voice layer that weaves across all chapters rather than hanging off a single node. Each edge is labeled with the dependency type that connects the artifact to its source.

## Diagram Details

```mermaid
graph TD
    LG["Learning Graph -- concepts and dependencies as a DAG"]:::spine
    LG -->|"generates"| CH["Chapters"]:::artifact
    LG -->|"one entry per concept"| GL["Glossary"]:::artifact
    LG -->|"tagged by concept and Bloom level"| QB["Quiz Bank"]:::artifact
    LG -->|"embedded per concept cluster"| MS["MicroSims"]:::artifact
    CH -->|"derived from chapter content"| FAQ["FAQ"]:::artifact
    CH -->|"curated per chapter"| REF["References"]:::artifact
    CH -->|"attached where applicable"| ST["Stories -- graphic novels"]:::artifact
    MA["Mascot Admonitions -- cross-cutting voice layer"]:::crosscut -.->|"woven across all chapters"| CH

    classDef spine fill:#08519C,stroke:#041733,color:#fff
    classDef artifact fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef crosscut fill:#6BAED6,stroke:#3182BD,color:#fff,stroke-dasharray: 5 5
```

## Related Resources

- [Chapter 1: Foundations of Learning Sciences](../../chapters/01-foundations/index.md)
