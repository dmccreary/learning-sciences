# Learning Graph Revision v1.1 — Privacy and Regulation Concepts

**Date:** 2026-04-19
**Version bump:** 1.0 → 1.1
**Trigger:** Integration of the Five-Level intelligent-textbook classification and the Level 3 privacy inflection point (see [`logs/five-levels-privacy-integration.md`](five-levels-privacy-integration.md)).

## Summary

Added **9 new concepts** and **1 new taxonomy (PRIV)** to the learning graph. Total nodes: 221 → 230. Total edges: 340 → 351. No existing concepts were removed; one concept's taxonomy was reassigned (222 *Intelligent Textbook Level* moved from ITB to FOUND on placement — see below).

## New Concepts

| ID | Label | Taxonomy | Dependencies | Home Chapter |
|---|---|---|---|---|
| 222 | Intelligent Textbook Level | **FOUND** | 9 (Intelligent Textbook) | Ch. 1 |
| 223 | Privacy Inflection Point | **PRIV** | 222 | Ch. 8 |
| 224 | FERPA | **PRIV** | 223 | Ch. 8 |
| 225 | COPPA | **PRIV** | 223 | Ch. 8 |
| 226 | GDPR | **PRIV** | 223 | Ch. 8 |
| 227 | CCPA CPRA | **PRIV** | 223 | Ch. 8 |
| 228 | Data Minimization | **PRIV** | 223 | Ch. 8 |
| 229 | xAPI | **PRIV** | 222, 108 (Learning Analytics) | Ch. 8 |
| 230 | Learning Record Store | **PRIV** | 229, 223 | Ch. 8 |

## New Taxonomy: PRIV — Privacy and Regulation

Added to `taxonomy-names.json` and documented in `concept-taxonomy.md`. The taxonomy description makes the book's scope boundary explicit: this book teaches Level 2 only, and PRIV exists to make that boundary visible, not to teach readers to operate as Level 3+ data controllers.

## Taxonomic Decisions

### Why 222 (Intelligent Textbook Level) moved to FOUND

Initial assignment was ITB. After chapter-plan revalidation, keeping all 9 new concepts in Ch. 10 pushed that chapter to 31 concepts — over the book-chapter-generator's 25-concept upper bound. Two issues followed:

1. *Intelligent Textbook Level* is the **classification framework** for intelligent textbooks. It is used throughout the book as orienting vocabulary (Ch. 1 introduces it; Ch. 8 and Ch. 10 reference it). FOUND is a better semantic fit than ITB for a cross-cutting classification term.
2. Moving 222 to FOUND lets Ch. 1 (the Foundations chapter) introduce the concept at the first mention — which is where the chapter content already does so in prose — and removes a forward-reference risk in Ch. 8 (which depends on 222 via 223 *Privacy Inflection Point*).

### Why the 8 PRIV concepts went to Ch. 8, not Ch. 10

- **Where the temptation lives.** Chapter 8 (Measurement and Feedback) is where learning analytics, dashboards, and A/B testing are taught — the three points where authors are most likely to cross the Level 2 → Level 3 threshold. The regulations apply at the decision point, not at the abstract architecture layer.
- **Chapter 10 balance.** With 222 moved to FOUND, Ch. 10 stays at 21 concepts (16 ITB + 5 AIST foundations). Ch. 8 grows to 23 concepts — within the 8–25 bound.
- **Ch. 10's contribution.** Ch. 10 references (rather than re-introduces) the PRIV concepts and contributes the architectural framing: which components each level implies, why Level 2 → 3 changes the software architecture and not only the regulatory surface. The directive in Ch. 10's outline has been updated to reflect this reference-only role.

## Chapter Size Impact

| Chapter | Before | After | Change |
|---|---|---|---|
| Ch. 1 — Foundations | 15 | 16 | +1 (222) |
| Ch. 8 — Measurement and Feedback | 15 | 23 | +8 (223–230) |
| Ch. 10 — Textbook Architecture | 21 | 21 | — (222 moved out of this chapter's extras list; no net change) |
| All other chapters | — | — | unchanged |

## Validation Results

- **DAG:** no cycles. Topological sort visits all 230 nodes.
- **Foundational concepts (zero prerequisites):** still 4 (Learning Sciences, Cognitive Science, Generative AI, Markdown Authoring). Sanity check passes — foundational concepts are still simple introductory terms.
- **Dependency violations across the 15-chapter plan:** 0.
- **Chapter sizes:** all within 8–25 bounds (min 8 at Ch. 2, max 25 at Ch. 4).
- **Concept coverage:** 230 of 230 concepts assigned to exactly one chapter.

## Files Modified

- `docs/learning-graph/learning-graph.json` — added 9 nodes, 11 edges; reassigned node 222 from group ITB to FOUND.
- `docs/learning-graph/learning-graph.csv` — appended 9 rows; updated row 222's TaxonomyID.
- `docs/learning-graph/taxonomy-names.json` — added `"PRIV": "Privacy and Regulation"`.
- `docs/learning-graph/metadata.json` — bumped version to 1.1, updated node count and description.
- `docs/learning-graph/concept-taxonomy.md` — added the *Privacy and Regulation (PRIV)* section.
- `docs/chapters/01-foundations/index.md` — concepts-covered list grew from 15 to 16 (added *Intelligent Textbook Level*); the existing "Levels of Intelligent Textbook" subsection was tightened to explicitly italicize and define the term.
- `docs/chapters/08-measurement-feedback/index.md` — concepts-covered list grew from 15 to 23 (added the 8 PRIV concepts).
- `docs/chapters/10-textbook-architecture/index.md` — updated the Required Content Directive: the chapter now **references** Ch. 1's 5-levels introduction and Ch. 8's PRIV coverage rather than re-introducing them from scratch. The chapter's unique contribution remains the architectural mapping (level → component choices → infrastructure implications).

## Deferred / Not Done

- `docs/learning-graph/taxonomy-distribution.md` and `quality-metrics.md` are auto-generated by scripts in the directory; they should be regenerated in a follow-up pass but do not block chapter content generation. Running `python3 docs/learning-graph/taxonomy-distribution.py` and the validation script will bring them back in sync.
- The graph-viewer badge (`docs/sims/graph-viewer/main.html`) currently says v0.04 for the viewer itself, not the graph data — no bump needed there.
- A learning-graph-generator session log for this revision is *not* written, because this is a hand-edit (not a skill run). The note you are reading is the authoritative record for v1.1.

## When the Chapter Content Generator Runs on Ch. 8 and Ch. 10

The required-content directives already embedded in those chapters' outlines will still apply. The generator should:

- For Ch. 8: treat the 8 PRIV concepts as in-scope, define each one in prose before any warning admonition references it, and produce the mascot-warning admonition as specified in the directive.
- For Ch. 10: treat the PRIV concepts as *already introduced* in Ch. 8 and reference them by name with cross-chapter links rather than re-defining them. The Five Levels taxonomy treatment itself remains Ch. 10's responsibility, with Ch. 1 as the light introduction.
