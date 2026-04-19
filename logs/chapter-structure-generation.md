# Chapter Structure Generation — Design Decisions

**Date:** 2026-04-19
**Skill:** `book-chapter-generator`
**Inputs:** `docs/course-description.md`, `docs/learning-graph/learning-graph.json` (221 concepts, 340 edges), `docs/learning-graph/concept-taxonomy.md` (15 taxonomy categories).
**Output:** 15-chapter structure under `docs/chapters/`, with `mkdocs.yml` nav updated.

## Summary

Produced a **15-chapter** structure covering all **221 concepts** with **zero dependency violations**. Chapter sizes range from 8 to 25 concepts (within the skill's acceptable 8–25 bounds); average is 14.7. The structure maps one chapter to each of the 15 taxonomy categories, with one targeted split to resolve cross-category prerequisite cycles.

## Edge-Direction Validation

The skill warns that inverted edges in `learning-graph.json` silently produce invalid orderings. I verified the direction before designing chapters:

- Built prereqs with `prereqs[edge['from']].add(edge['to'])` (dependency direction).
- Foundational nodes (zero entries in prereqs): `Learning Sciences (1)`, `Cognitive Science (3)`, `Generative AI (10)`, `Markdown Authoring (15)`.
- All four are simple introductory terms → edge direction is correct. Proceeded.

## Chapter Count and Sizing

- **Chapter count: 15.** The learning graph's 15 taxonomy categories correspond almost perfectly to natural chapter boundaries, and 15 sits comfortably inside the skill's 10–15 optimal range. A smaller count would have forced splits within categories; a larger count would have left several chapters below 8 concepts.
- **Average concepts per chapter: 14.7.** Range 8–25. Only two chapters hit the extremes (Ch. 2 at 8, Ch. 4 at 25); all others fall in the 10–21 range.
- **Size outliers justified in the text below.**

## Chapter Ordering

Ordering follows the pedagogical arc of the course description:

1. Foundations and the Seven Domains framework (Chs. 1–2) establish vocabulary.
2. The six research domains (Chs. 3–9) are presented in the natural dependency order Motivation → Cognitive Architecture → Retention → Application → Expertise, with Measurement and Learning Conditions as cross-cutting chapters following the core arc.
3. Production chapters (Chs. 10–14) cover the software and AI tooling that turn the research into an intelligent textbook.
4. Capstone (Ch. 15) ships the artifact.

## Key Design Decisions

### 1. Split of the AIST (AI Skills and Tooling) taxonomy

**Problem.** A strict one-taxonomy-per-chapter plan produced **5 dependency violations**:

- `MicroSim Generator → MicroSim` (ch11 AIST → ch12 SIM)
- `Story Generator → Graphic Novel Chapter` (ch11 → ch14 GN)
- `Diagram Reports Generator → MicroSim` (ch11 → ch12)
- `Concept Classifier → MicroSim` (ch11 → ch12)
- `Image Generation Costs → Image Generation` (ch11 → ch14 GN)

Reordering alone (moving SIM/MASC/GN before AIST) fixed 4 of 5 but introduced a new violation: `Image Prompt Engineering (GN) → Prompt Engineering (AIST)`.

**Resolution.** Split the 20-concept AIST taxonomy into two:

- **AI tooling foundations** (IDs 151–155): Prompt Engineering, Context Window, Token Budgeting, SKILL.md Format, Skill Invocation — moved into **Chapter 10 "Intelligent Textbook Architecture and AI Tooling"** alongside the ITB concepts. Rationale: these are architecture-level primitives that every later chapter references, not skill-specific behaviors.
- **Generator skills** (IDs 156–169, plus 221 "Image Generation Costs"): the 15 Agent Skills used in the production pipeline — kept as **Chapter 14 "AI Agent Skills for Textbook Generation"**, placed after MicroSims (Ch. 11), Mascots (Ch. 12), and Graphic Novels (Ch. 13). Each skill can now refer to the artifact it generates because that artifact was introduced in an earlier chapter.

This yielded **zero violations**.

### 2. Chapter 4 kept at 25 concepts

The Cognitive Architecture taxonomy is the largest at 25 concepts, sitting exactly at the acceptable upper bound. I chose not to split it because:

- Memory systems (sensory → working → long-term), schemas, and cognitive load theory form one tightly coupled argument. Splitting them would fragment the schema/encoding/load discussion across a chapter boundary.
- The pedagogical payoff of Chapter 4 is Cognitive Load Theory, which only lands once the memory systems have been introduced in the same chapter.
- 25 is the documented upper bound, not an overrun.

If chapter-content generation later finds the chapter unwieldy, a clean split point exists between "Memory Systems" (IDs 42–58) and "Cognitive Load" (IDs 59–66).

### 3. Chapter 2 kept at 8 concepts

"The Seven Domains Framework" has only the 8 DOMAIN-taxonomy concepts — one node for the framework plus one for each of the seven domains. This sits at the acceptable lower bound. I chose not to merge it with Chapter 1 because:

- The Seven Domains is the organizing spine of the whole book. Later chapters reference "the Understanding Domain (Ch. 2)" routinely; a dedicated short chapter gives every such reference a consistent home.
- Merging into Foundations would dilute Chapter 1's already-diverse contents (field definitions + Bloom + authoring stack).
- A deliberately short chapter lets readers pause and see the whole framework at once before diving into the 18–25-concept chapters that follow.

### 4. Taxonomy-aligned chapters

Every other chapter maps one-to-one onto a taxonomy category. This is a deliberate choice: the taxonomy categories were already built to reflect natural conceptual groupings, so preserving them minimizes cognitive switching within chapters and makes cross-references (glossary, FAQ, quiz) trivially routable back to the home chapter.

## Validation Results

Final plan (after AIST split):

| # | Chapter | Concepts |
|---|---|---|
| 1 | Foundations of Learning Sciences | 15 |
| 2 | The Seven Domains Framework | 8 |
| 3 | Motivation and Engagement | 18 |
| 4 | Cognitive Architecture and Load | 25 |
| 5 | Knowledge Retention | 14 |
| 6 | Application and Transfer | 14 |
| 7 | Expertise and Mastery | 11 |
| 8 | Measurement and Feedback | 15 |
| 9 | Learning Conditions and Environment | 14 |
| 10 | Intelligent Textbook Architecture and AI Tooling | 21 |
| 11 | MicroSims and Interactive Visualizations | 14 |
| 12 | Pedagogical Mascots and Admonitions | 13 |
| 13 | Graphic Novels and Short-Form Stories | 14 |
| 14 | AI Agent Skills for Textbook Generation | 15 |
| 15 | Capstone and Deployment | 10 |

- **Concepts covered:** 221 / 221 (exactly once each) ✓
- **Dependency violations:** 0 ✓
- **Chapter sizes in bounds:** 8–25, all acceptable ✓
- **All chapter titles ≤ 200 chars, Title Case** ✓
- **URL slugs lowercase-dash only** ✓

## Files Created

- `docs/chapters/index.md` — master chapter overview
- `docs/chapters/01-foundations/index.md` through `docs/chapters/15-capstone-deployment/index.md` — per-chapter index pages (15 files)
- `mkdocs.yml` — `nav:` updated with `Chapters:` section between `Course Description` and `Learning Graph`

Each per-chapter `index.md` contains Title, Summary (2–4 sentences), full Concepts-Covered list in learning-graph order, Prerequisites (pointing to earlier chapters), and the `TODO: Generate Chapter Content` marker for the content generator to find.

## Next Step

User requested the `chapter-content-generator` skill to run on Chapter 1.
