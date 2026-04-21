---
title: Interactive Dreyfus Five-Stage Skill Model
description: Interactive Dreyfus Five-Stage Skill Model
status: scaffold
library: p5.js
bloom_level: TBD
---

# Interactive Dreyfus Five-Stage Skill Model

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
[Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md).

```text
Type: interactive-infographic
**sim-id:** dreyfus-skill-model<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: a horizontal five-stage progression from *Novice* to *Expert* rendered as a gradient band, with one icon per stage (abstract shapes — a small cube, a growing tree, a plan diagram, a radar sweep, a flowing ribbon) and a secondary axis running above the band that shows the balance of *rule-following* on the left and *intuitive recognition* on the right. The base image is annotation-free; all stage labels, definitions, and example behaviors are delivered by overlay markers.

Modes (standard for this skill):

- **Explore mode:** Hovering over a stage shows a tooltip containing the stage name, a one-sentence definition, three behavioral markers observable in practice, the rule-vs-intuition balance at that stage, and the preferred form of feedback (e.g., rule-correction at novice, boundary-case discussion at expert).
- **Quiz mode:** A short description of a learner's current performance appears at the top (e.g., "She follows the checklist precisely but is thrown by any case where the checklist's assumptions are violated"); the learner clicks the stage that best fits. Correct answers highlight the stage green; incorrect answers reveal the correct stage and a one-sentence explanation of the marker that would have been diagnostic.
- **Edit mode (authors only):** Drag markers to recalibrate positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Analyze): *Given a description of a learner's performance, place the learner on the Dreyfus skill model and name the transition they are currently approaching.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/dreyfus-skill-model/` will contain `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the stage-progression base image.
```

## Related Resources

- [Chapter 7: Expertise and Mastery](../../chapters/07-expertise-mastery/index.md)
