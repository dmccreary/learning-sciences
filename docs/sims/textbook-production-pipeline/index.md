---
title: The Textbook Production Pipeline
description: A five-band flowchart showing how fourteen agent skills are organized from structural foundation through content authoring, derived artifacts, engagement artifacts, to audit and publication.
status: implemented
library: Mermaid
---

# The Textbook Production Pipeline

<iframe src="main.html" height="800px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Textbook Production Pipeline Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart TD diagram arranged in five horizontal bands from top (structural skills) to bottom (publication skills). Band 1 (blue): course-description-analyzer, learning-graph-generator, book-chapter-generator. Band 2 (teal): chapter-content-generator, reference-generator. Band 3 (green): glossary-generator, faq-generator, quiz-generator. Band 4 (amber): microsim-generator, story-generator, concept-classifier. Band 5 (orange): book-metrics-generator, diagram-reports-generator, linkedin-announcement-generator. A dashed feedback arrow from Band 5 back to Band 1 signals that audit findings can trigger a re-run of any earlier stage.

## Diagram Details

```mermaid
flowchart TD
    subgraph Band1 ["Band 1: Structural Foundation"]
        CDA[course-description analyzer]
        LGG[learning-graph generator]
        BCG[book-chapter generator]
        CDA -->|validated description| LGG
        LGG -->|concept DAG| BCG
    end

    subgraph Band2 ["Band 2: Content Authoring"]
        CCG[chapter-content generator]
        REF[reference generator]
    end

    subgraph Band3 ["Band 3: Derived Artifacts"]
        GLO[glossary generator]
        FAQ[faq generator]
        QUI[quiz generator]
    end

    subgraph Band4 ["Band 4: Engagement Artifacts"]
        MSG[microsim generator]
        STG[story generator]
        CCL[concept classifier]
    end

    subgraph Band5 ["Band 5: Audit and Publication"]
        BMG[book-metrics generator]
        DRG[diagram-reports generator]
        LIN[linkedin-announcement generator]
    end

    BCG -->|chapter outlines| CCG
    BCG -->|chapter outlines| REF
    CCG -->|chapter prose| GLO
    CCG -->|chapter prose| FAQ
    CCG -->|chapter prose| QUI
    CCG -->|sim briefs| MSG
    CCG -->|story briefs| STG
    CCG -->|quiz briefs| CCL
    GLO --> BMG
    FAQ --> BMG
    QUI --> BMG
    MSG --> BMG
    BMG -->|metrics| LIN
    DRG -->|report| LIN

    Band5 -.->|audit regen| Band1
```

## Related Resources

- [Chapter 14: AI Agent Skills for Textbook Generation](../../chapters/14-agent-skills/index.md)
