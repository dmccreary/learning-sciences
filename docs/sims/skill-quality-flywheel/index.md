---
title: The Skill-Quality Flywheel
description: The Skill-Quality Flywheel
status: scaffold
library: Mermaid
bloom_level: TBD
---

# The Skill-Quality Flywheel

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
[Chapter 14: AI Agent Skills for Textbook Generation](../../chapters/14-agent-skills/index.md).

```text
Type: causal-loop-diagram
**sim-id:** skill-quality-flywheel<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` with six variable-nodes and one named reinforcing loop. All nodes are noun phrases naming variables that can go up or down.

Nodes: *skill invocation rate*, *edge cases surfaced*, *skill description precision*, *trigger accuracy*, *author trust in the skill*, *maintenance burden*.

Edges and polarities:

- skill invocation rate → edge cases surfaced (+) — more runs surface more edge cases
- edge cases surfaced → skill description precision (+, with delay ⧚) — each edge case prompts a description tightening
- skill description precision → trigger accuracy (+) — a precise description routes the harness correctly
- trigger accuracy → author trust in the skill (+) — the skill is invoked when it should be, not otherwise
- author trust in the skill → skill invocation rate (+) — trusted skills get used
- skill invocation rate → maintenance burden (+) — more use means more bug reports and feature requests
- maintenance burden → skill description precision (−, if unmanaged) — neglected maintenance lets the description drift

Loop label at the loop's geometric center:

- **R1 — Skill-quality flywheel (reinforcing, productive).** Invocation → edge cases → description precision → trigger accuracy → trust → more invocation. Each trip around makes the next one easier. Maintenance burden is the drag variable that can stall the loop if left unattended.

Visual treatment: R1 nodes in cool blue; the maintenance-burden node in warm orange to signal the drag variable; delay marker ⧚ on the edge-case-to-description-precision edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 14: AI Agent Skills for Textbook Generation](../../chapters/14-agent-skills/index.md)
