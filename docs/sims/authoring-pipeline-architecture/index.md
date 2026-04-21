---
title: The Authoring Pipeline — Prompt to Published Site
description: The Authoring Pipeline — Prompt to Published Site
status: scaffold
library: Mermaid
bloom_level: TBD
---

# The Authoring Pipeline — Prompt to Published Site

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
[Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md).

```text
Type: diagram
**sim-id:** authoring-pipeline-architecture<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart LR` diagram showing six horizontal stages, each labeled and colored distinctly on a blue-to-orange palette.

1. *Author* — prompt or natural-language request.
2. *IDE Harness (Claude Code)* — receives request, reads `SKILL.md` files, selects a matching skill.
3. *Agent Skill* — runs its Steps; reads shared inputs (learning graph, style guide, prior chapters); writes Markdown.
4. *Markdown Files* — the chapter, glossary entry, quiz file, reference list.
5. *MkDocs Material Build* — converts Markdown to HTML, builds the search index, renders navigation, applies the print stylesheet.
6. *Deployed Site* — GitHub Pages URL served from the `gh-pages` branch.

Secondary arrows show:

- *Author → Harness* (primary request)
- *Harness → Skill* (invocation)
- *Skill ↔ Shared Inputs* (learning graph, style guide)
- *Skill → Markdown* (write)
- *Markdown → Build → Site* (deployment)
- *Site → Author* (preview loop at `http://127.0.0.1:8000/learning-sciences/` during development; deployed URL in production)

A side panel labels the three control surfaces we have discussed — *Prompt*, *Context Window*, *Token Budget* — and draws arrows from them into the Harness and Skill stages to indicate where each control lands in the flow.

Implementation: Mermaid `flowchart LR` with `classDef` for the stage colors and a `subgraph` for the control-surface side panel. Embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
