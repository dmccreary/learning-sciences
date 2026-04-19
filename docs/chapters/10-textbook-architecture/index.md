# Intelligent Textbook Architecture and AI Tooling

## Summary

Now we turn from theory to architecture. This chapter defines what an intelligent textbook is as a software artifact: learning graphs, concept dependencies, DAG structure, nodes and edges, glossaries, FAQ sections, quiz banks, chapter outlines, reference lists, tables of contents, search indexes, navigation, and print-friendly output. We also introduce the AI tooling foundations — prompt engineering, context windows, token budgeting, the SKILL.md format, and skill invocation — that every generator skill in Chapter 14 builds on.

## Concepts Covered

This chapter covers the following 21 concepts from the learning graph:

1. Intelligent Textbook Design
2. Learning Graph
3. Concept Dependency
4. DAG Structure
5. Concept Node
6. Concept Edge
7. Glossary
8. FAQ Section
9. Quiz Bank
10. Chapter Outline
11. Chapter Content Authoring
12. Reference List
13. Table of Contents
14. Search Index
15. Site Navigation
16. Print-Friendly Output
17. Prompt Engineering
18. Context Window
19. Token Budgeting
20. SKILL.md Format
21. Skill Invocation

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Learning Sciences](../01-foundations/index.md)
- [Chapter 2: The Seven Domains Framework](../02-seven-domains/index.md)

## Required Content Directives

When the `chapter-content-generator` skill generates this chapter, it MUST include the following in addition to the concepts listed above. These directives are durable and should be respected on every regeneration.

### The Five Levels of Intelligent Textbooks

A dedicated subsection — titled **"The Five Levels of Intelligent Textbooks"** — must introduce the classification framework proposed by McCreary and colleagues (analogous to the SAE J3016 framework for autonomous vehicles):

1. **Level 1 — Static.** Fixed content, no interactivity (traditional textbook).
2. **Level 2 — Interactive.** Learning graphs, MicroSims, path recommendations. No storage of student records.
3. **Level 3 — Adaptive.** Driven by stored student goals and progress history.
4. **Level 4 — Chatbot.** Conversational tutoring via a large language model.
5. **Level 5 — Autonomous.** Real-time generation of fully personalized instruction.

The subsection must:

- State explicitly that **this book targets Level 2**, and explain why that is a deliberate scope choice.
- Include a table comparing the five levels on (a) interactivity, (b) student data stored, (c) typical cost per student per day, (d) regulatory surface, (e) an example product or pattern.
- Cite the source paper: *A Five-Level Classification Framework for Intelligent Textbooks: Lessons from Autonomous Vehicle Standards* (McCreary et al.).
- Reference the METR finding that AI task capabilities double approximately every seven months and use it to motivate why Level 2 content is commoditizing while Level 3+ capabilities become the strategic focus for educational organizations.

### The Level 3 Privacy Inflection — Mascot-Warning Admonition

A prominent `!!! mascot-warning` admonition must appear inside or immediately after the five-levels subsection. It must include the mascot image (`<img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom warning about student data">`) and communicate the following points in Bloom's voice:

- Moving from Level 2 to Level 3 means **storing individual student data** — goals, progress, behavior, performance — tied to an identifiable learner.
- The moment student data is collected, the system enters a **highly regulated domain**. Name the regulations that apply in the US and EU: **FERPA** (K-12 and higher-ed in the US), **COPPA** (children under 13 in the US), **GDPR** (EU residents), and state-level laws such as CCPA/CPRA.
- The obligations that attach at that moment include data minimization, informed consent (often parental for minors), explicit purpose limitation, retention limits, access and deletion rights, encryption at rest and in transit, audit logging, third-party processor agreements, and algorithmic bias auditing where automated decisions affect the learner.
- These obligations are **out of scope for this course**. Nothing in this book teaches a reader how to operate a Level 3+ system responsibly. Crossing the threshold without that expertise creates real legal, ethical, and reputational risk.
- Close with actionable guidance: Level 2 is a safe, productive place to build; if a project needs Level 3+ capabilities, partner with an institution that has existing data-governance infrastructure, or adopt open standards like **xAPI** and a **Learning Record Store** with student-controlled portability.

### Concepts Already in the Learning Graph

The following related concepts now live in the learning graph and are introduced in earlier chapters. This chapter should **reference** them (not re-introduce them from scratch) when they appear in the architectural treatment:

- *Intelligent Textbook Level* — introduced in [Chapter 1](../01-foundations/index.md) (FOUND taxonomy).
- *Privacy Inflection Point*, *FERPA*, *COPPA*, *GDPR*, *CCPA / CPRA*, *Data Minimization*, *xAPI*, *Learning Record Store* — introduced in [Chapter 8](../08-measurement-feedback/index.md) (PRIV taxonomy).

This chapter's contribution is the **architectural framing**: how each level maps to concrete component choices (learning graph only vs. graph + student record store vs. graph + LRS + chatbot runtime), what infrastructure each level implies, and why the jump from Level 2 to Level 3 changes the system's software architecture as well as its regulatory surface.

---

TODO: Generate Chapter Content
