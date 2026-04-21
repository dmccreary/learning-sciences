---
title: Path Depth for the Mascot Image src
description: A diagram showing how to count URL depth segments to determine the correct relative path for mascot images in MkDocs pages.
status: implemented
library: Mermaid
---

# Path Depth for the Mascot Image src

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Mascot Path Depth Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

A Mermaid flowchart TD diagram showing four representative page locations and the relative path each must use for the mascot image. Page nodes (in blue) connect to a central decision node (in amber) that states the rule: one `../` per URL path segment after the site root. Correct path nodes are shown in green. A failure-mode callout (in red) warns that too few `../` produces a broken image with no build-log warning -- a silent footgun.

## Diagram Details

```mermaid
flowchart TD
    RULE{Count URL depth: one ../ per path segment after site root}

    P1[Top-level page: docs/index.md - Renders at /] --> RULE
    P2[Learning-graph page: docs/learning-graph/mascot-test.md - Renders at /learning-graph/mascot-test/] --> RULE
    P3[Chapter page: docs/chapters/12-mascots/index.md - Renders at /chapters/12-mascots/] --> RULE
    P4[MicroSim page: docs/sims/bloom-poses-gallery/index.md - Renders at /sims/bloom-poses-gallery/] --> RULE

    RULE --> R1[img/mascot/tip.png - Zero ../]
    RULE --> R2[../../img/mascot/tip.png - Two ../]

    P1 -.-> R1
    P2 -.-> R2
    P3 -.-> R2
    P4 -.-> R2
```

## Related Resources

- [Chapter 12: Pedagogical Mascots and Admonitions](../../chapters/12-mascots-admonitions/index.md)
