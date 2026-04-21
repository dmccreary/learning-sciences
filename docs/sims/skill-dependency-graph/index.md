---
title: Skill Dependency Graph
description: A flowchart showing all fourteen agent skills as nodes with edges where one skill's output is a required input of another, centered on the learning-graph-generator hub.
status: implemented
library: Mermaid
---

# Skill Dependency Graph

<iframe src="main.html" height="700px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Skill Dependency Graph Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart LR diagram showing all fourteen agent skills as nodes, with edges where one skill's output is a required input of another. The learning-graph-generator sits as a central hub (warm orange) with outgoing edges to book-chapter-generator, glossary-generator, quiz-generator, faq-generator, and reference-generator. Skills are color-coded by category: foundation (blue), authoring (teal), derived (green), engagement (amber), and audit (orange). Edges are labeled with the carrying artifact type.

## Diagram Details

```mermaid
flowchart LR
    CDA[course-description analyzer] -->|course description| LGG[learning-graph generator]
    LGG -->|concept list| BCG[book-chapter generator]
    LGG -->|concept list| GLO[glossary generator]
    LGG -->|concept list| QUI[quiz generator]
    LGG -->|concept list| FAQ[faq generator]
    LGG -->|concept list| REF[reference generator]

    BCG -->|chapter outline| CCG[chapter-content generator]
    BCG -->|chapter outline| REF

    CCG -->|chapter prose| GLO
    CCG -->|chapter prose| FAQ
    CCG -->|chapter prose| QUI
    CCG -->|sim briefs| MSG[microsim generator]
    CCG -->|story briefs| STG[story generator]
    CCG -->|quiz briefs| CCL[concept classifier]

    GLO --> BMG[book-metrics generator]
    QUI --> BMG
    FAQ --> BMG
    MSG --> BMG
    STG --> BMG
    CCL --> BMG
    CCG --> BMG

    GLO --> DRG[diagram-reports generator]
    MSG --> DRG

    BMG -->|metrics| LIN[linkedin-announcement generator]
    DRG -->|report| LIN
```

## Related Resources

- [Chapter 14: AI Agent Skills for Textbook Generation](../../chapters/14-agent-skills/index.md)
