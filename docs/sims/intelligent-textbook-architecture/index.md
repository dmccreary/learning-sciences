---
title: Intelligent Textbook Architecture
description: Layered architecture diagram showing the components of an intelligent textbook from learning graph to deployment.
status: implemented
library: p5.js
bloom_level: Apply
---

# Intelligent Textbook Architecture

<iframe src="main.html" height="670px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Architecture Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A layered architecture diagram showing how an intelligent textbook is built. The **Learning Graph** (a DAG of concepts) sits at the core. From it radiate generated artifacts: Chapter Outlines, Chapter Content, Glossary, FAQ, Quiz Bank, References, MicroSims, and Stories. Below these is the **Site Build** layer (Table of Contents, Navigation, Search Index, Print Output). Cross-cutting concerns include the **Mascot Voice Layer** and the **Authoring Pipeline** (Harness, Skills, Prompts).

**Explore Mode:** Hover over any component to see what it owns, its definition, and which chapter covers it.

**Quiz Mode:** A design decision is described. Click the component that owns the change.

**Learning Objective** (Bloom level: Apply): *Given a proposed change to an intelligent textbook, identify the component whose ownership the change respects.*

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
