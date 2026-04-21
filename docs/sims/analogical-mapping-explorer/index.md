---
title: Analogical Mapping Explorer
description: Analogical Mapping Explorer
status: scaffold
library: p5.js
bloom_level: TBD
---

# Analogical Mapping Explorer

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
[Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md).

```text
Type: microsim
**sim-id:** analogical-mapping-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that visualizes structure mapping between a source and a target domain. The canvas is divided left-right: the left panel shows a source domain (e.g., the solar system) with labeled entities (sun, planet, gravitational force, orbit); the right panel shows a target domain (e.g., the Bohr atom) with labeled entities (nucleus, electron, electrostatic force, shell). The learner drags connections between elements of the left and right panels. The system scores each mapping as *relational match* (green), *surface match without relational support* (amber), or *contradictory* (red), and computes an overall alignment score using the similarity function above.

Controls (using built-in p5.js controls per project convention):

- **Domain pair dropdown** — choose from: solar system / atom, plumbing / electric circuit, predator-prey / business competition, immune system / cyber defense.
- **Show-structure toggle** — reveal or hide the relational structure on each side; learners who toggle it on finish faster but retain less, demonstrating the scaffold-dependence effect.
- **Surface-distractor slider** — increase the number of surface-only features on each side, forcing the learner to select relations rather than appearance.
- **Score display** — live computation of structural-alignment score and surface-only-match count.
- **Reset button** — clear all mappings.

Learning objective (Bloom level: Analyze): *Given a source and target domain, identify which elements map on structural grounds, which map only on surface features, and which do not map at all.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/analogical-mapping-explorer/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md)
