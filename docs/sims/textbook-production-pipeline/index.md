---
title: The Textbook Production Pipeline
description: The Textbook Production Pipeline
status: scaffold
library: Mermaid
bloom_level: TBD
---

# The Textbook Production Pipeline

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** Mermaid

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: AI Agent Skills for Textbook Generation](../../chapters/14-agent-skills/index.md).

```text
Type: diagram
**sim-id:** textbook-production-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram arranged in five horizontal bands from top (structural skills) to bottom (publication skills). Nodes are labeled with the skill name and produce a named artifact.

Band 1 (structural foundation): *course-description-analyzer* → course description (validated). *learning-graph-generator* → learning graph (200 concepts, DAG). *book-chapter-generator* → chapter outlines (one per chapter).

Band 2 (content authoring): *chapter-content-generator* → chapter prose (`docs/chapters/NN-name/index.md`). *reference-generator* → per-chapter references (`references.md`).

Band 3 (derived artifacts): *glossary-generator* → glossary entries. *faq-generator* → FAQ section. *quiz-generator* → quiz bank.

Band 4 (engagement artifacts): *microsim-generator* → `/docs/sims/sim-id/` directories. *story-generator* → 12-panel graphic novel chapters. *concept-classifier* → interactive classification quizzes.

Band 5 (audit and publication): *book-metrics-generator* → `book-metrics.md` and `chapter-metrics.md`. *diagram-reports-generator* → diagram inventory. *linkedin-announcement-generator* → publishing post for milestones.

Edges labeled with the carrying artifact. Band 1 feeds Band 2 (outlines drive content). Band 2 feeds Band 3 (chapters + graph drive glossary, FAQ, quiz). Band 2 feeds Band 4 (chapters specify sims and stories the engagement skills then build). Bands 2, 3, and 4 all feed Band 5 (everything feeds the audit). A feedback arrow from Band 5 back to Band 1 is drawn in orange to signal that audit findings can trigger a re-run of any earlier stage.

Visual treatment: band 1 cool blue, band 2 teal, band 3 soft green, band 4 amber, band 5 warm orange. `classDef` styling per band. The feedback arrow is a dashed orange line labeled "audit regen."

Implementation: Mermaid `flowchart TD` embedded directly in the chapter markdown via the configured `pymdownx.superfences` mermaid fence.
```

## Related Resources

- [Chapter 14: AI Agent Skills for Textbook Generation](../../chapters/14-agent-skills/index.md)
