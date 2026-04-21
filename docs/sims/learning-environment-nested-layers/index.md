---
title: Three Nested Layers of a Learning Environment
description: A nested subgraph diagram showing the physical/digital, social, and institutional layers of a learning environment with bidirectional influence arrows.
---

# Three Nested Layers of a Learning Environment

<iframe src="main.html" height="700px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Nested Layers Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This diagram uses nested subgraphs to show the three concentric layers of a learning environment. The innermost layer (Physical/Digital) contains design levers like seating, lighting, screen readability, and MicroSim responsiveness. The middle layer (Social) contains talk-move repertoire, turn-taking norms, error-response scripts, and forum moderation. The outermost layer (Institutional) contains grading policy, accessibility mandates, privacy regulation, and curricular scope. Arrows between layers show both upward influence (physical choices shape the social layer) and downward influence (institutional mandates cascade into social norms and physical features).

## Diagram Details

```mermaid
graph TD
    subgraph INST["Institutional Layer"]
        GP["Grading Policy"]:::institutional
        AM["Accessibility Mandate"]:::institutional
        PR["Privacy Regulation"]:::institutional
        CS["Curricular Scope"]:::institutional

        subgraph SOC["Social Layer"]
            TM["Talk-Move Repertoire"]:::social
            TT["Turn-Taking Norms"]:::social
            ER["Error-Response Scripts"]:::social
            FM["Forum Moderation"]:::social

            subgraph PHYS["Physical / Digital Layer"]
                SE["Seating"]:::physical
                LI["Lighting"]:::physical
                SR["Screen Readability"]:::physical
                KN["Keyboard Navigation"]:::physical
                MR["MicroSim Responsiveness"]:::physical
            end
        end
    end

    PHYS -.->|"shapes"| SOC
    SOC -.->|"constrained by"| INST
    INST -.->|"cascades into"| SOC
    SOC -.->|"cascades into"| PHYS

    classDef physical fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef social fill:#3A9B8F,stroke:#2A7B6F,color:#fff
    classDef institutional fill:#D4A76A,stroke:#A67D3D,color:#fff
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
