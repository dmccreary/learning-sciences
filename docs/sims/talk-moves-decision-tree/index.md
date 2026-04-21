---
title: Talk-Moves Decision Tree for Classroom Discourse
description: A decision tree showing how an instructor can choose the right accountable-talk move based on the current state of classroom discussion.
---

# Talk-Moves Decision Tree for Classroom Discourse

<iframe src="main.html" height="800px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Talk-Moves Decision Tree Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This decision tree helps instructors choose the right talk move after a student contribution. It branches through four questions: Was the contribution clear? Does the reasoning need to be surfaced? Have other students engaged? Have you waited long enough? Each branch leads to a specific accountable-talk move -- Revoicing, Pressing for Reasoning, Restating/Adding On, or Wait Time -- with a sample teacher prompt and a note on the cognitive work the move is doing. Yellow diamonds are decision points, blue nodes are talk moves, and gray nodes explain the purpose.

## Diagram Details

```mermaid
graph TD
    ROOT["A student has just contributed to the discussion"]:::root --> Q1{"Was the contribution clear to the rest of the class?"}:::decision
    Q1 -->|"No"| REVOICE["Revoicing: So you are saying that...?"]:::move
    REVOICE --> NOTE1["Ensures the idea is public and accurately represented"]:::note
    Q1 -->|"Yes"| Q2{"Does the reasoning behind the contribution need to be surfaced?"}:::decision

    Q2 -->|"Yes"| PRESS["Pressing for Reasoning: Why do you think that? What is your evidence?"]:::move
    PRESS --> NOTE2["Makes the thinking visible, not just the answer"]:::note
    Q2 -->|"No"| Q3{"Have other students had the chance to engage with this idea?"}:::decision

    Q3 -->|"No"| RESTATE["Restate or Add On: Can someone put that in their own words? Who can add to this?"]:::move
    RESTATE --> NOTE3["Distributes cognitive work across the group"]:::note
    Q3 -->|"Yes"| Q4{"Have you waited long enough for a thoughtful answer?"}:::decision

    Q4 -->|"No"| WAIT["Wait Time: Pause 3-5 seconds before calling on anyone"]:::move
    WAIT --> NOTE4["Gives all students time to formulate a response"]:::note
    Q4 -->|"Yes"| NEXT["Move to the next discussion prompt"]:::root

    classDef root fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef decision fill:#F0C75E,stroke:#D4A017,color:#333
    classDef move fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef note fill:#E8E8E8,stroke:#999,color:#333,font-size:12px
```

## Related Resources

- [Chapter 9: Learning Conditions and Environment](../../chapters/09-learning-conditions/index.md)
