---
title: The Zone of Proximal Development as Three Concentric Zones
description: The Zone of Proximal Development as Three Concentric Zones
status: scaffold
library: p5.js
bloom_level: TBD
---

# The Zone of Proximal Development as Three Concentric Zones

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
[Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md).

```text
Type: interactive-infographic
**sim-id:** zpd-three-zones<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: three concentric circles, with the innermost labeled *"What the learner can do independently,"* the middle ring labeled *"Zone of Proximal Development — with support,"* and the outer ring labeled *"Currently out of reach."* Small illustrated figures show an adult or peer standing in the middle ring, offering a scaffold (depicted as a ladder or hand) that reaches into the outer edge of the ZPD. A slider control, exposed in the overlay, lets the viewer fade the scaffold from "full support" to "no support," and the boundary between the inner circle and the ZPD expands outward as the scaffold fades — visualizing the core claim that today's supported task becomes tomorrow's independent task.

Modes (standard for this skill):

- **Explore mode:** Hovering over any zone shows a tooltip with the zone's definition, a classroom example, and the design implication for intelligent textbooks (e.g., "ZPD zone: worked examples with fading prompts; MicroSims with graduated hint levels").
- **Quiz mode:** A learning task is described; the learner clicks the zone that best matches where the task sits for a hypothetical student described in the prompt.
- **Edit mode (authors only):** Drag markers to recalibrate positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Apply): *Given a description of a learner and a task, identify whether the task sits inside the learner's independent zone, ZPD, or out-of-reach region, and name the scaffold that would move it into the ZPD.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/zpd-three-zones/` will contain `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the zone base image.
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
