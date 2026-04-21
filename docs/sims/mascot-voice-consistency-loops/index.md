---
title: Voice-Consistency Dynamics — Flywheel and Drift Trap
description: Voice-Consistency Dynamics — Flywheel and Drift Trap
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Voice-Consistency Dynamics — Flywheel and Drift Trap

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
[Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md).

```text
Type: causal-loop-diagram
**sim-id:** mascot-voice-consistency-loops<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing eight variable-nodes and two named loops. All nodes are noun phrases naming variables that can go up or down.

Nodes: *voice-guide enforcement*, *voice consistency*, *orienting cognitive load*, *available germane capacity*, *mascot-signal predictability*, *reader identification with mascot*, *re-engagement on hard pages*, *voice drift*.

Edges and polarities:

- voice-guide enforcement → voice consistency (+) — the guide is what holds the line
- voice consistency → orienting cognitive load (−) — a predictable voice costs less to parse
- orienting cognitive load → available germane capacity (−) — load is a zero-sum budget
- available germane capacity → mascot-signal predictability (+) — freed capacity is what notices the signal
- mascot-signal predictability → reader identification with mascot (+) — predictable signals build relatedness
- reader identification with mascot → re-engagement on hard pages (+, with delay ⧚) — identified readers come back
- re-engagement on hard pages → voice-guide enforcement (+) — successful outcomes reinforce the practice of enforcing the guide
- voice drift → voice consistency (−) — drift erodes the consistency directly
- voice drift → orienting cognitive load (+) — inconsistent voice costs orienting attention
- voice-guide enforcement → voice drift (−) — enforcement is the brake on drift

Loop labels placed at each loop's geometric center:

- **R1 — Voice-consistency flywheel (reinforcing, productive).** enforcement → consistency → lower orienting load → more germane capacity → clearer signal → stronger identification → re-engagement → more enforcement.
- **B1 — Voice-drift trap (reinforcing, corrosive).** drift → inconsistency → higher orienting load → crowded germane capacity → muddled signals → weaker identification → disengagement on hard pages → less enforcement → more drift. Structurally a reinforcing loop running in the bad direction.

Visual treatment: R1 nodes in cool blue; B1 nodes in warm red-orange; the shared variable *voice consistency* drawn in a neutral tone with dual borders to signal it belongs to both loops. Delay marker ⧚ on the identification → re-engagement edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 in plain English accompanies the diagram in the prose that follows.
```

## Related Resources

- [Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md)
