---
title: Chunking Demonstration
description: Chunking Demonstration
status: scaffold
library: p5.js
bloom_level: TBD
---

# Chunking Demonstration

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
[Chapter 4: Cognitive Architecture and Load](../../chapters/04-cognitive-architecture/index.md).

```text
Type: microsim
**sim-id:** chunking-demonstration<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that demonstrates the chunking effect on effective working-memory span. The canvas shows a two-panel layout. In each trial, a string of 12 letters is flashed for a fixed duration (configurable 500–2000 ms) and then hidden; the learner types what they recall. The left panel draws strings from a random-letter source (`XQNTRPKVLYBF`); the right panel draws from a chunked source where letters form familiar acronyms (`FBIIBMCIANASA` shown as `FBI IBM CIA NASA`). A running tally shows the proportion correct in each condition.

Controls (using built-in p5.js controls per project convention):

- **Flash-duration slider** (500–2000 ms) — how long the string is visible.
- **Condition dropdown** — {random only, chunked only, alternating, random pairs}.
- **Show-chunk-boundaries checkbox** — when on, the chunked condition inserts visible spaces; when off, the learner must find the chunks.
- **Reset button** — clears the tally.

Learning objective (Bloom level: Apply): *Demonstrate that perceived working-memory capacity depends on the chunk structure of the material, not on the raw number of elements.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/chunking-demonstration/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 4: Cognitive Architecture and Load](../../chapters/04-cognitive-architecture/index.md)
