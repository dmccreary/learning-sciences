---
title: The Authoring Pipeline - Prompt to Published Site
description: A flowchart showing the six stages of the authoring pipeline from author prompt through IDE harness, agent skill, markdown files, MkDocs build, to deployed site, with control surfaces labeled.
status: implemented
library: Mermaid
---

# The Authoring Pipeline - Prompt to Published Site

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Authoring Pipeline Architecture Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart LR diagram showing six horizontal stages of the intelligent textbook authoring pipeline, each labeled and colored distinctly on a blue-to-orange palette. The stages are: Author, IDE Harness (Claude Code), Agent Skill, Markdown Files, MkDocs Material Build, and Deployed Site (GitHub Pages). A side panel labels the three control surfaces -- Prompt, Context Window, and Token Budget -- with arrows showing where each lands in the flow. A feedback arrow from the deployed site back to the author completes the preview loop.

## Diagram Details

```mermaid
flowchart LR
    A[Author\nPrompt / NL Request]:::stage1 -->|primary request| B[IDE Harness\nClaude Code]:::stage2
    B -->|invocation| C[Agent Skill\nRuns Steps]:::stage3
    C -->|write| D[Markdown Files\nChapter, Glossary,\nQuiz, References]:::stage4
    D -->|build input| E[MkDocs Material\nBuild]:::stage5
    E -->|deploy| F[Deployed Site\nGitHub Pages]:::stage6
    F -->|preview loop| A

    C <-->|read/write| SI[Shared Inputs\nLearning Graph,\nStyle Guide,\nPrior Chapters]:::shared

    subgraph Controls [Control Surfaces]
        P[Prompt]:::ctrl
        CW[Context Window]:::ctrl
        TB[Token Budget]:::ctrl
    end

    P -->|shapes request| B
    CW -->|limits context| C
    TB -->|constrains output| C

    classDef stage1 fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef stage2 fill:#5BA3E6,stroke:#3575A8,color:#fff
    classDef stage3 fill:#7BB8E8,stroke:#4A8ABF,color:#fff
    classDef stage4 fill:#D4A84B,stroke:#A67F2E,color:#fff
    classDef stage5 fill:#E0943A,stroke:#B06E1E,color:#fff
    classDef stage6 fill:#E87D2A,stroke:#B55D15,color:#fff
    classDef shared fill:#F0E6D2,stroke:#C4A87A,color:#333
    classDef ctrl fill:#F5F5F5,stroke:#999,color:#333
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
