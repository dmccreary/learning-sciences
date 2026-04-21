---
title: A Small Learning Graph, Its Topological Ordering, and Its Transitive Reduction
description: A Small Learning Graph, Its Topological Ordering, and Its Transitive Reduction
status: scaffold
library: Mermaid
bloom_level: TBD
---

# A Small Learning Graph, Its Topological Ordering, and Its Transitive Reduction

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
[Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md).

```text
Type: diagram
**sim-id:** dag-topological-reduction<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram composed of two side-by-side panels sharing the same eight-concept graph. Nodes: *Working Memory*, *Chunking*, *Schema*, *Retrieval Practice*, *Spacing Effect*, *Desirable Difficulty*, *Deliberate Practice*, *Transfer*. Edges (from dependent to prerequisite, per project convention): *Chunking → Working Memory*; *Schema → Chunking*; *Retrieval Practice → Working Memory*; *Spacing Effect → Retrieval Practice*; *Desirable Difficulty → Spacing Effect*; *Desirable Difficulty → Retrieval Practice*; *Deliberate Practice → Desirable Difficulty*; *Deliberate Practice → Schema*; *Transfer → Schema*; *Transfer → Deliberate Practice*.

Left panel: the full graph with every edge shown. A numbered list along the left margin shows one valid topological ordering — *Working Memory (1), Chunking (2), Schema (3), Retrieval Practice (4), Spacing Effect (5), Desirable Difficulty (6), Deliberate Practice (7), Transfer (8)* — with the note "one of several valid orderings."

Right panel: the same graph with transitively redundant edges de-emphasized (rendered as dashed gray lines). The candidate for reduction is the *Desirable Difficulty → Retrieval Practice* edge, which is already implied by *Desirable Difficulty → Spacing Effect → Retrieval Practice*. A caption explains that the transitive reduction preserves reachability with fewer edges and is what the graph viewer renders by default.

Implementation: Mermaid `flowchart TD` with two `subgraph` blocks and `classDef` styling for the dashed reduced edges. Embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../../chapters/10-textbook-architecture/index.md)
