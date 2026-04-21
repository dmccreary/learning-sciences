---
title: The Flow Channel — Challenge vs. Skill
description: The Flow Channel — Challenge vs. Skill
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Flow Channel — Challenge vs. Skill

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
[Chapter 3: Motivation and Engagement](../../chapters/03-motivation-engagement/index.md).

```text
Type: microsim
**sim-id:** flow-channel-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that lets a learner manipulate perceived challenge and perceived skill and observe which region of the flow diagram they land in. The canvas shows a two-dimensional plot with "skill" on the x-axis and "challenge" on the y-axis; the diagonal band between them is shaded as the flow channel, the region above the diagonal is labeled "anxiety," and the region below is labeled "boredom." A marker labeled "learner" moves as the sliders change; the label updates to one of {flow, mild anxiety, panic, mild boredom, apathy} depending on the quadrant.

Controls (using built-in p5.js controls per project convention):

- **Challenge slider** (0–100) — task difficulty as the learner perceives it.
- **Skill slider** (0–100) — current ability as the learner perceives it.
- **Show-trajectory checkbox** — when on, a fading trail shows how the marker has moved; useful for simulating a learner whose skill grows during a session.
- **Reset button** — returns both sliders to 50.

Learning objective (Bloom level: Apply): *Given a learner profile, adjust task challenge so that the learner lands in the flow channel rather than anxiety or boredom.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; sketch parented to the standard `<main></main>` element so it can be copy-pasted into the p5.js editor.

Implementation: p5.js sketch in `/docs/sims/flow-channel-explorer/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
```

## Related Resources

- [Chapter 3: Motivation and Engagement](../../chapters/03-motivation-engagement/index.md)
