---
title: The Deploy Pipeline from Source to Live Site
description: The Deploy Pipeline from Source to Live Site
status: scaffold
library: Mermaid
bloom_level: TBD
---

# The Deploy Pipeline from Source to Live Site

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
[Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md).

```text
Type: diagram
**sim-id:** deploy-pipeline-flow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart LR` diagram with five stages from left to right, each a named node with an inline status color, and three failure-mode callouts drawn as side nodes attached to the stage where they most often originate.

Main path (left to right):

1. **Markdown source** (`docs/`, `mkdocs.yml`) — author's working tree.
2. **MkDocs build** (`mkdocs build`) — produces `site/` HTML.
3. **Git commit and push** to `main` — triggers the publishing workflow.
4. **`mkdocs gh-deploy`** — rebuilds and pushes built output to the `gh-pages` branch.
5. **GitHub Pages** — serves the `gh-pages` branch at the project's public URL.

Failure callouts (drawn as red-bordered side nodes):

- **F1 — Build error** attached to stage 2. Missing plugin, malformed front matter, unresolved reference. Caught by the `mkdocs build` console output.
- **F2 — Broken link** attached to stage 2. Relative path mismatch, chapter renamed without link update. Caught by the link-check plugin if configured; otherwise silent.
- **F3 — Deploy cache drift** attached to stages 4 and 5. Browser serves a stale asset because the CDN TTL hasn't expired or a hashed filename wasn't bumped. Caught by a hard refresh and a second check in a private window.

A dashed feedback arrow runs from stage 5 back to stage 1 labeled "reader feedback" to signal that deployment is not the end — it is the start of the next iteration.

Visual treatment: main path in cool blue; failure callouts in warm red with a red border; feedback arrow in dashed orange. Nodes labeled with both the command and the artifact produced. Every edge labeled with the carrying artifact.

Implementation: Mermaid `flowchart LR` with `classDef` per stage category. Embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md)
