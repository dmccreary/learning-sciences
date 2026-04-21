---
title: The Deploy Pipeline from Source to Live Site
description: A five-stage deployment flowchart from markdown source through MkDocs build, git push, gh-deploy, to GitHub Pages, with three failure-mode callouts.
status: implemented
library: Mermaid
---

# The Deploy Pipeline from Source to Live Site

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Deploy Pipeline Flow Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart LR diagram with five stages from left to right: Markdown Source, MkDocs Build, Git Commit and Push, mkdocs gh-deploy, and GitHub Pages. Three failure-mode callouts (in red) attach to the stages where they originate: F1 (Build Error) and F2 (Broken Link) at the MkDocs Build stage, F3 (Deploy Cache Drift) at the gh-deploy and GitHub Pages stages. A dashed feedback arrow from GitHub Pages back to Markdown Source signals that deployment starts the next iteration.

## Diagram Details

```mermaid
flowchart LR
    S1[Markdown Source\ndocs/ + mkdocs.yml] -->|source files| S2[MkDocs Build\nmkdocs build\nProduces site/ HTML]
    S2 -->|built site| S3[Git Commit + Push\nto main branch]
    S3 -->|triggers deploy| S4[mkdocs gh-deploy\nPushes to gh-pages]
    S4 -->|published| S5[GitHub Pages\nPublic URL served]

    S5 -.->|reader feedback| S1

    F1[F1: Build Error\nMissing plugin, malformed front matter] --- S2
    F2[F2: Broken Link\nRelative path mismatch] --- S2
    F3[F3: Deploy Cache Drift\nStale assets from CDN TTL] --- S4
```

## Related Resources

- [Chapter 15: Capstone and Deployment](../../chapters/15-capstone-deployment/index.md)
