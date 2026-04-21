---
title: Talk-Moves Decision Tree for Classroom Discourse
description: Talk-Moves Decision Tree for Classroom Discourse
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Talk-Moves Decision Tree for Classroom Discourse

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
[Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md).

```text
Type: decision-tree
**sim-id:** talk-moves-decision-tree<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` decision tree. Root node: *"A student has just contributed to the discussion."* First branch: *"Was the contribution clear to the rest of the class?"* — if No, route to **Revoicing** with an example prompt; if Yes, continue.

Second branch: *"Does the reasoning behind the contribution need to be surfaced?"* — if Yes, route to **Pressing for reasoning**; if No, continue.

Third branch: *"Have other students had the chance to engage with this idea?"* — if No, route to **Asking students to restate others' reasoning** or **Adding on**; if Yes, continue.

Fourth branch: *"Was the question just asked, and have you waited long enough for a thoughtful answer?"* — if No, route to **Wait time**; if Yes, the discourse can move to the next prompt.

Each terminal node carries one sample teacher prompt in the accountable-talk style, and a short note on the cognitive work the move is doing. Colors: root in neutral blue; decision nodes in warm yellow; terminal talk-move nodes in cool blue with the move name in bold.

Implementation: Mermaid `flowchart TD` with `classDef` for decision vs. terminal nodes. Embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
