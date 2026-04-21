---
title: Token Budget Explorer
description: Token Budget Explorer
status: scaffold
library: p5.js
bloom_level: TBD
---

# Token Budget Explorer

!!! warning "Scaffold"
    This MicroSim has been scaffolded from its specification. The interactive
    implementation has not been built yet.

## Learning Objective

TBD

- **Bloom Level:** TBD
- **Bloom Verb:** TBD
- **Library:** p5.js

## Preview

<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md).

```text
Type: microsim
**sim-id:** token-budget-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that makes token budgeting visible. The canvas shows a horizontal budget bar representing the context window (default 1,000,000 tokens), filled from left to right by colored segments: *system role*, *style guide*, *outline*, *prior-chapter summary*, *learning-graph subgraph*, *in-flight response*. A secondary panel shows the prompt-cache timer (a shrinking bar with a 300-second TTL) and a cost-per-run readout.

Controls (using built-in p5.js controls per project convention):

- **Instruction-depth slider** — 1 (minimal) to 10 (full style guide + full prior chapters). Moves the *style guide* and *prior-chapter summary* segments wider or narrower.
- **Output-length slider** — 500 to 15,000 tokens. Moves the *in-flight response* segment.
- **Context-window dropdown** — 200k, 400k, 1M. Redraws the bar scale.
- **Run-cadence slider** — 60s to 3600s. The cache-timer panel shows whether each scheduled run lands inside the 5-minute cache window or outside it; outside-window runs get a warning icon.
- **Reset button** — restore defaults.

A caption reports the total token usage, the remaining budget, the estimated cost per run (at a sample rate), and whether the run is a cache hit or a cache miss. The MicroSim uses no real API calls — it is purely a budget visualizer.

Learning objective (Bloom level: Apply): *Given a target chapter length and a style-guide size, choose a run cadence that keeps the pipeline inside the prompt-cache window and the context-window bound.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; parented to the standard `<main></main>` element so the sketch can be pasted into the p5.js editor.

Implementation: p5.js sketch in `/docs/sims/token-budget-explorer/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
