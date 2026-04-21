---
title: Analytic vs. Holistic Rubric -- Structure and Signal
description: A side-by-side comparison diagram showing how analytic rubrics produce a four-dimensional diagnostic profile while holistic rubrics produce a single score band.
---

# Analytic vs. Holistic Rubric -- Structure and Signal

<iframe src="main.html" height="600px" width="100%" scrolling="no" style="border: 1px solid #ddd;"></iframe>

[Run the Rubric Comparison Diagram Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This diagram compares two rubric structures side by side. The left panel shows an analytic rubric for a writing assignment with four independent criteria (Thesis, Evidence, Organization, Mechanics), each scored 1-4, feeding a four-dimensional profile chart that enables per-criterion remediation. The right panel shows a holistic rubric with four performance-level bands (Emerging, Developing, Proficient, Exceeds) feeding a single score. Neither is universally better -- the choice depends on whether you need per-dimension remediation (analytic) or time-efficient end-of-course judgment (holistic).

## Diagram Details

```mermaid
graph LR
    subgraph Analytic["Analytic Rubric"]
        T["Thesis -- scored 1-4"]:::analytic
        E["Evidence -- scored 1-4"]:::analytic
        O["Organization -- scored 1-4"]:::analytic
        M["Mechanics -- scored 1-4"]:::analytic
        T --> PROFILE["Four-Dimensional Profile"]:::analytic
        E --> PROFILE
        O --> PROFILE
        M --> PROFILE
    end

    subgraph Holistic["Holistic Rubric"]
        EM["Emerging"]:::holistic
        DV["Developing"]:::holistic
        PR["Proficient"]:::holistic
        EX["Exceeds"]:::holistic
        EM --> SINGLE["Single Score Band"]:::holistic
        DV --> SINGLE
        PR --> SINGLE
        EX --> SINGLE
    end

    PROFILE -->|"per-criterion remediation possible"| DSA["Diagnostic Signal: Rich"]:::signal
    SINGLE -->|"remediation requires re-reading"| DSH["Diagnostic Signal: Compressed"]:::signal2

    classDef analytic fill:#4A90D9,stroke:#2C5F8A,color:#fff
    classDef holistic fill:#E8795A,stroke:#C0392B,color:#fff
    classDef signal fill:#2D9C6F,stroke:#1E7A55,color:#fff
    classDef signal2 fill:#D4A76A,stroke:#A67D3D,color:#fff
```

## Related Resources

- [Chapter 8: Measurement and Feedback](../../chapters/08-measurement-feedback/index.md)
