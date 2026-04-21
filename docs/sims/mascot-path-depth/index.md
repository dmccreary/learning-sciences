---
title: Path Depth for the Mascot Image `src`
description: Path Depth for the Mascot Image `src`
status: scaffold
library: Mermaid
bloom_level: TBD
---

# Path Depth for the Mascot Image `src`

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
Type: diagram
**sim-id:** mascot-path-depth<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram showing three representative rendered URLs and the path each must use for the mascot image. Each node lists a page location and its required `src` prefix.

Nodes:

- Top-level page (`docs/index.md` → `/`) uses `img/mascot/tip.png` (zero `../`).
- Learning-graph page (`docs/learning-graph/mascot-test.md` → `/learning-graph/mascot-test/`) uses `../../img/mascot/tip.png` (two `../`, one to leave the page slug directory and one to leave the section directory).
- Chapter page (`docs/chapters/12-mascots-admonitions/index.md` → `/chapters/12-mascots-admonitions/`) uses `../../img/mascot/tip.png` (two `../`).
- MicroSim index page (`docs/sims/bloom-poses-gallery/index.md` → `/sims/bloom-poses-gallery/`) uses `../../img/mascot/tip.png` (two `../`).

Edges connect each page location to a "count the rendered URL depth" decision node labeled "one `../` per URL path segment after the site root".

Visual treatment: page nodes in light blue; decision node in amber; the correct-path nodes in green. A small inset box shows the failure mode: too few `../` produces a broken image with no build-log warning.

Implementation: Mermaid `flowchart TD` with `classDef` for node styling; embedded directly in the chapter markdown.
```

## Related Resources

- [Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md)
