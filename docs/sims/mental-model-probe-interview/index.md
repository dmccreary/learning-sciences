---
title: Mental-Model Probe Interview Flow
description: A decision-tree flowchart showing how an instructor or LLM tutor can diagnose a learner's mental model through prediction, mechanism, counterfactual, and boundary probes.
---

# Mental-Model Probe Interview Flow

<iframe src="main.html" height="700px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Mental-Model Probe Interview Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This flowchart shows a branching interview protocol for diagnosing a learner's mental model. It starts with a prediction prompt, then branches based on the learner's answer -- correct, incorrect, or hedged -- into follow-up probes (mechanism, counterfactual, or boundary). Each branch leads to a diagnostic label (runnable correct model, verbal rule without model, stable misconception, fragile partial model, or no model) and a recommended next instructional move. Blue nodes are prompts, yellow diamonds are decisions, orange nodes are diagnostic labels, and green nodes are recommended actions.

## Diagram Details

```mermaid
graph TD
    START["Prediction Prompt: What will happen if...?"]:::prompt --> CORRECT{"Correct Prediction?"}:::decision
    CORRECT -->|"Yes"| MECH["Mechanism Probe: Why does that happen?"]:::prompt
    CORRECT -->|"No"| COUNTER["Counterfactual Probe: What would change if...?"]:::prompt
    CORRECT -->|"Hedged / Uncertain"| BOUND["Boundary Probe: When would this not apply?"]:::prompt

    MECH --> RUNNABLE["Runnable Correct Model"]:::diagnosis
    MECH --> VERBAL["Verbal Rule Without Model"]:::diagnosis

    COUNTER --> STABLE["Stable Misconception"]:::diagnosis
    COUNTER --> FRAGILE["Fragile Partial Model"]:::diagnosis

    BOUND --> FRAGILE2["Fragile Partial Model"]:::diagnosis
    BOUND --> NOMODEL["No Model"]:::diagnosis

    RUNNABLE --> MOVE1["Next: More retrieval practice"]:::move
    VERBAL --> MOVE2["Next: Worked example"]:::move
    STABLE --> MOVE3["Next: Dissonance-producing counterexample"]:::move
    FRAGILE --> MOVE4["Next: Direct conceptual-change intervention"]:::move
    FRAGILE2 --> MOVE4B["Next: Direct conceptual-change intervention"]:::move
    NOMODEL --> MOVE5["Next: Foundational re-teaching with worked example"]:::move

    classDef prompt fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef decision fill:#F0C75E,stroke:#D4A017,color:#333
    classDef diagnosis fill:#E8795A,stroke:#C0392B,color:#fff
    classDef move fill:#2D9C6F,stroke:#1E7A55,color:#fff
```

## Related Resources

- [Chapter 6: Application and Transfer](../../chapters/06-application-transfer/index.md)
