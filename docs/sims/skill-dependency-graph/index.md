---
title: Skill Dependency Graph
description: Skill Dependency Graph
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Skill Dependency Graph

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
**sim-id:** skill-dependency-graph<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart LR` diagram showing all fourteen skills as nodes, with edges where one skill's output is a required input of another. The *learning-graph-generator* node sits as a central hub with outgoing edges to *book-chapter-generator*, *glossary-generator*, *quiz-generator*, *faq-generator*, and *reference-generator*. The *course-description-analyzer* has a single outgoing edge to *learning-graph-generator*. The *book-chapter-generator* has outgoing edges to *chapter-content-generator* and *reference-generator*. The *chapter-content-generator* has outgoing edges to *glossary-generator*, *faq-generator*, *quiz-generator*, *microsim-generator*, *story-generator*, and *concept-classifier* (each via chapter-level sim/story briefs). All thirteen other skills have outgoing edges to *book-metrics-generator* and *diagram-reports-generator*, which then both feed *linkedin-announcement-generator*.

Visual treatment: `learning-graph-generator` is drawn as a larger, highlighted hub node in warm orange; foundation skills in cool blue; authoring skills in teal; derived skills in soft green; engagement skills in amber; audit skills in warm orange. `classDef` per category. Edges labeled with the carrying artifact type (e.g., "chapter outline", "concept list", "chapter prose").

Implementation: Mermaid `flowchart LR` with `classDef` styling per skill category. Embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 14: AI Agent Skills for Textbook Generation](../../chapters/14-agent-skills/index.md)
