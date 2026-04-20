# Learning Sciences for Intelligent Textbook Design

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/learning-sciences/)
[![GitHub](https://img.shields.io/badge/GitHub-dmccreary%2Flearning--sciences-blue?logo=github)](https://github.com/dmccreary/learning-sciences)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

The rendered textbook lives at **[dmccreary.github.io/learning-sciences](https://dmccreary.github.io/learning-sciences/)**.

## Overview

This is an interactive, AI-assisted intelligent textbook on the emerging field of **Learning Sciences**, organized around the **Seven Domains** framework — Learner Motivation and Engagement, Understanding New Knowledge, Knowledge Retention, Knowledge Application, Building Expertise and Mastery, Measuring Learning and Optimizing Feedback, and Creating and Improving Learning Conditions.

The book is unusual in two ways. First, it is reflexive: it teaches readers how to build intelligent textbooks using the same toolchain that produced this one — Claude Code, Agent Skills, MkDocs Material, MicroSims, pedagogical mascots, and short-form graphic novels. The production pipeline is part of the curriculum. Second, it explicitly names its scope: the book teaches **Level 2** on the five-level classification of intelligent textbooks (interactive, no stored student data) and marks the Level 2 → Level 3 transition as a regulatory inflection point (FERPA, COPPA, GDPR, CCPA/CPRA) where separate governance expertise becomes required.

The target audience is graduate students, instructional designers, curriculum developers, educational technologists, and professional developers interested in authoring AI-augmented learning experiences.

## What's Inside

- **15 chapters** — seven research chapters (one per domain) plus eight production chapters covering architecture, MicroSims, mascots, graphic novels, agent skills, and a capstone.
- **Bloom the Elephant** — the pedagogical mascot that appears throughout the book in seven consistent poses, delivering welcome, thinking, tip, warning, encouragement, and celebration admonitions.
- **Interactive MicroSims** — p5.js, Chart.js, Plotly, Mermaid, vis-network, and Leaflet simulations embedded inline, each tied to a specific learning objective.
- **Interactive learning graph viewer** — a vis-network exploration of the course's concept dependency graph with search, filtering, and categorical legends.
- **Causal loop diagrams** — systems-thinking treatment of how motivation, cognitive load, retrieval, and measurement interlock.
- **Retrieval prompts and critical-thinking exercises** in every chapter.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dmccreary/learning-sciences.git
cd learning-sciences
```

### Install Dependencies

```bash
pip install mkdocs mkdocs-material
pip install "mkdocs-material[imaging]"   # for social cards
pip install mkdocs-glightbox
```

### Serve Locally

```bash
mkdocs serve
```

Open `http://127.0.0.1:8000/learning-sciences/` in your browser. Edits to files under `docs/` trigger a live rebuild.

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes to the `gh-pages` branch. The workflow in this project also supports "commit, push, deploy" (CPD) as a single rhythm — commit source, push to `main`, then `gh-deploy` for the published site.

### Using the Book

- **Side navigation** on the left lists chapters; search is in the top bar.
- **Graph viewer** is under *Learning Graph* in the nav — click a concept to see its neighborhood.
- **MicroSims** render inline; each also has a standalone full-screen URL at `/sims/<sim-id>/main.html`.
- Mascot admonitions (the colored boxes with Bloom the elephant) mark moments to pause, retrieve, or reconsider.

## Repository Structure

```
learning-sciences/
├── docs/
│   ├── chapters/                  # 15 chapters, one directory each
│   │   ├── 01-foundations/
│   │   ├── 02-seven-domains/
│   │   └── ...
│   ├── learning-graph/            # Concept dependency graph (CSV + JSON)
│   ├── sims/                      # MicroSims
│   │   └── graph-viewer/          # Interactive vis-network viewer
│   ├── img/
│   │   └── mascot/                # Bloom the Elephant — seven pose images
│   ├── css/                       # Custom styling (mascot admonitions, etc.)
│   ├── course-description.md      # Detailed course description
│   ├── references.md
│   └── license.md
├── plugins/
│   └── social_override.py         # mkdocs hook for per-page og:image
├── logs/                          # Generation logs, session notes
├── mkdocs.yml                     # Site configuration
├── CLAUDE.md                      # Project-specific authoring rules
└── README.md                      # This file
```

## Authoring Pipeline

Content in this project is generated using **Claude Agent Skills** (see [claude-skills](https://github.com/dmccreary/claude-skills)). The typical pipeline for a new chapter or artifact is:

1. `course-description-analyzer` — score the course description for completeness
2. `learning-graph-generator` — produce the 200+ concept dependency graph
3. `book-chapter-generator` — design chapter structure from the graph
4. `chapter-content-generator` — write chapter prose with scaffolding, mascot admonitions, and MicroSim specs
5. Per-artifact skills — `glossary-generator`, `quiz-generator`, `microsim-generator`, `story-generator`, `reference-generator`, `book-metrics-generator`

Chapter 14 of the book is a tour of these skills.

## Reporting Issues

Found a typo, broken link, rendering bug, or have a suggestion? Please open an issue:

**[github.com/dmccreary/learning-sciences/issues](https://github.com/dmccreary/learning-sciences/issues)**

When reporting a bug, include:

- The page URL (from the live site or local server)
- What you expected vs. what you saw
- A screenshot if relevant (especially for MicroSim or layout issues)
- Browser and OS (for interactive sims)

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You are free to **share** and **adapt** the material under these conditions:

- **Attribution** — credit the original with a link back.
- **NonCommercial** — no commercial use without permission.
- **ShareAlike** — redistribute derivatives under the same license.

See [docs/license.md](docs/license.md) for the full text.

## Acknowledgements

- The **Seven Domains** organizing framework is drawn from [Olorunfemi (Odunayo) Omotayo's synthesis of the learning sciences](https://www.linkedin.com/posts/olorunfemi-omotayo-759a54142_learning-teachersacademyafrica-learningsciences-share-7450725094554767360-A_nu).
- [**MkDocs**](https://www.mkdocs.org/) and [**Material for MkDocs**](https://squidfunk.github.io/mkdocs-material/) — the documentation stack.
- [**p5.js**](https://p5js.org/) — creative-coding library powering most MicroSims.
- [**vis-network**](https://visjs.org/) — the graph-viewer.
- [**Mermaid**](https://mermaid.js.org/) — causal loop and architecture diagrams.
- [**Claude Code**](https://claude.ai/code) and the [**Anthropic Claude model family**](https://www.anthropic.com/) — AI-assisted content generation.
- [**GitHub Pages**](https://pages.github.com/) — hosting.

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

Questions, collaboration ideas, or feedback? Open an issue or reach out on LinkedIn.
