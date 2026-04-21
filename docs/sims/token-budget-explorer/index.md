---
title: Token Budget Explorer
description: Interactive budget calculator showing token costs, context window usage, and prompt cache timing.
status: implemented
library: p5.js
bloom_level: Apply
---

# Token Budget Explorer

<iframe src="main.html" height="650px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Token Budget Explorer Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

An interactive token budget visualizer that makes context-window usage visible. A horizontal bar shows colored segments for each part of the prompt: System Role, Style Guide, Outline, Prior Chapters, Graph Subgraph, and In-Flight Response. A secondary panel shows the prompt-cache timer (300-second TTL) and whether scheduled runs land inside or outside the cache window.

**Controls:**

- **Instruction Depth** (1-10): Scales the Style Guide and Prior Chapters segments.
- **Output Length** (500-15,000 tokens): Sets the In-Flight Response segment size.
- **Context Window** (200K / 400K / 1M): Changes the budget bar scale.
- **Run Cadence** (60s-3600s): Shows whether runs hit or miss the prompt cache.
- **Reset**: Restores default values.

No real API calls are made — this is purely a budget visualizer.

**Learning Objective** (Bloom level: Apply): *Given a target chapter length and a style-guide size, choose a run cadence that keeps the pipeline inside the prompt-cache window and the context-window bound.*

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
