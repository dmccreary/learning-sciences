# Measurement and Feedback

## Summary

You cannot improve what you cannot see. We cover formative and summative assessment, feedback types (immediate, delayed, corrective), rubrics, Item Response Theory, diagnostic assessment, metacognition, self-regulated learning, learning dashboards, A/B testing, and quality metrics. The chapter closes the loop between what a learner does and how instruction responds.

## Concepts Covered

This chapter covers the following 23 concepts from the learning graph:

1. Formative Assessment
2. Summative Assessment
3. Learning Analytics
4. Feedback Loop
5. Immediate Feedback
6. Delayed Feedback
7. Corrective Feedback
8. Assessment Rubric
9. Item Response Theory
10. Diagnostic Assessment
11. Metacognition
12. Self-Regulated Learning
13. Learning Dashboard
14. A/B Testing in Learning
15. Quality Metrics
16. Privacy Inflection Point
17. FERPA
18. COPPA
19. GDPR
20. CCPA / CPRA
21. Data Minimization
22. xAPI
23. Learning Record Store

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Learning Sciences](../01-foundations/index.md)
- [Chapter 2: The Seven Domains Framework](../02-seven-domains/index.md)
- [Chapter 4: Cognitive Architecture and Load](../04-cognitive-architecture/index.md)
- [Chapter 6: Application and Transfer](../06-application-transfer/index.md)
- [Chapter 7: Expertise and Mastery](../07-expertise-mastery/index.md)

## Required Content Directives

When the `chapter-content-generator` skill generates this chapter, it MUST include the following in addition to the concepts listed above. These directives are durable and should be respected on every regeneration.

### Privacy Reinforcement — Mascot-Warning Admonition on Student Data

Learning analytics, learning dashboards, and A/B testing are the points in this course where authors are most likely to be tempted to collect, store, or analyze **individual student data** — moving their work from Level 2 (Interactive) to Level 3+ (Adaptive and beyond) on the five-level intelligent-textbook classification introduced in [Chapter 1](../01-foundations/index.md) and detailed in [Chapter 10](../10-textbook-architecture/index.md).

A prominent `!!! mascot-warning` admonition must appear in or immediately before the Learning Analytics subsection. It must include the mascot image (`<img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom warning about regulated student data">`) and communicate, in Bloom's voice:

- The moment an author begins **storing individual student data** — goals, progress, click trails, dashboard interactions, quiz attempts tied to a named learner — the work has crossed into a **highly regulated domain**. Name the regulations explicitly: **FERPA** (US K-12 and higher ed), **COPPA** (US children under 13), **GDPR** (EU residents), and state-level laws such as **CCPA / CPRA** in California.
- The obligations that attach at that moment — **data minimization, informed (often parental) consent, explicit purpose limitation, retention limits, access and deletion rights, encryption at rest and in transit, audit logging, third-party processor agreements,** and **algorithmic bias auditing** when automated decisions affect the learner — are **real, auditable, and outside the scope of this course**.
- Anonymized, aggregate analytics (course-level completion rates, chapter-level average quiz scores, no per-student records) remain inside Level 2 and are safe to use. Anything with a `student_id` attached is not.
- Actionable guidance: if a project genuinely needs Level 3+ capabilities, partner with an institution that has existing data-governance infrastructure, and adopt open standards like **xAPI** and a **Learning Record Store (LRS)** so that students retain control and portability of their own records.
- Close with the principled framing: *we do not collect student data because we have not earned the right to handle it.*

### Forward Pointer

A forward pointer to [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../10-textbook-architecture/index.md) must appear in the warning, noting that the full five-level classification and its architectural implications are treated there.

### Concepts to Handle with Care

When discussing the following three concepts in this chapter, the generator MUST keep all examples and diagrams at the **aggregate/anonymized** level (no per-student identifiers, no simulated named-student records):

- *Learning Analytics* — use cohort-level signals in all examples.
- *Learning Dashboard* — show teacher/admin views of aggregate metrics, not individual student timelines with PII.
- *A/B Testing in Learning* — show variant-level outcomes, never individual-learner rosters.

If a MicroSim is generated for any of these concepts, its data must be synthetic and clearly labeled as such.

---

TODO: Generate Chapter Content
