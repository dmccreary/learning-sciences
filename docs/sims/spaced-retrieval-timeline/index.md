---
title: Spaced Retrieval Schedule Timeline
description: A timeline showing a flashcard's expanding review schedule across 60 days using the SM-2 algorithm, with a Leitner box comparison.
---

# Spaced Retrieval Schedule Timeline

<iframe src="main.html" height="700px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Spaced Retrieval Timeline Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This diagram shows a single flashcard's review schedule across a 60-day window using the SM-2 expanding interval pattern. Initial encoding at day 0, then reviews at days 1, 3, 7, 14, 30, and 60. Each interval is annotated with its ratio to the previous interval, showing how the ratio approaches a constant as the schedule matures. A failed review resets the card to a 1-day interval (shown as a dashed track). A Leitner box comparison shows the alternative promotion-based schedule for reference.

## Diagram Details

```mermaid
graph LR
    D0["Day 0: Encode"]:::encode -->|"1 day"| D1["Day 1: Review 1"]:::success
    D1 -->|"2 days -- 2x"| D3["Day 3: Review 2"]:::success
    D3 -->|"4 days -- 2x"| D7["Day 7: Review 3"]:::success
    D7 -->|"7 days -- 2x"| D14["Day 14: Review 4"]:::success
    D14 -->|"16 days -- 2.1x"| D30["Day 30: Review 5"]:::success
    D30 -->|"30 days -- 2x"| D60["Day 60: Review 6"]:::success

    D1 -.->|"fail: reset to 1-day"| RESET["Day 2: Re-review"]:::fail

    subgraph Leitner["Leitner Box Comparison"]
        L1["Box 1: every 1 day"]:::leitner
        L2["Box 2: every 2 days"]:::leitner
        L3["Box 3: every 4 days"]:::leitner
        L4["Box 4: every 8 days"]:::leitner
        L5["Box 5: every 16 days"]:::leitner
        L1 -->|"promote on success"| L2
        L2 -->|"promote on success"| L3
        L3 -->|"promote on success"| L4
        L4 -->|"promote on success"| L5
    end

    classDef encode fill:#08519C,stroke:#041733,color:#fff
    classDef success fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef fail fill:#E8795A,stroke:#C0392B,color:#fff,stroke-dasharray: 5 5
    classDef leitner fill:#6BAED6,stroke:#3182BD,color:#fff
```

## Related Resources

- [Chapter 5: Knowledge Retention](../../chapters/05-knowledge-retention/index.md)
