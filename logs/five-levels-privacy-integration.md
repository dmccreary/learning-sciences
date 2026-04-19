# Integrating the Five-Levels Framework and the Level 3 Privacy Warning

**Date:** 2026-04-19
**Trigger:** Author requested incorporation of concepts from *A Five-Level Classification Framework for Intelligent Textbooks: Lessons from Autonomous Vehicle Standards* (McCreary et al., `~/Documents/ws/intelligent-textbooks/papers/five-levels/`) into the Learning Sciences textbook, with specific emphasis on the Level 3 privacy inflection point and the regulatory obligations that attach the moment any individual student data is collected.

## The Core Point

The Learning Sciences book teaches authors to build **Level 2** intelligent textbooks (interactive, no student-data storage). The jump from Level 2 to Level 3 is **not primarily a technical step** — it is a regulatory inflection point. Once individual student data is stored, FERPA, COPPA, GDPR, and state-level laws (CCPA/CPRA) impose auditable obligations on the operator. These obligations are outside this course's scope. The book must make that boundary loud and unmissable without scope-creeping into data-governance territory it does not cover.

## Three-Chapter Treatment Plan (Chosen)

The author approved a full three-chapter treatment over a lighter two-chapter alternative. The three touch-points, with responsibilities:

| Chapter | Role | Length | Status |
|---|---|---|---|
| Ch. 1 — Foundations | Introduce the Five Levels vocabulary. State that this book targets Level 2. Forward-point to Ch. 8 and Ch. 10. | ~200 words | ✅ Applied in-place (Ch. 1 content already exists) |
| Ch. 8 — Measurement and Feedback | Full privacy-warning mascot admonition at the point where learning analytics tempts an author to cross the threshold. Names all four regulatory frameworks and the operational obligations. Keeps all analytics examples at the aggregate/anonymized level. | ~400 words when generated | 📋 Directive embedded in outline; executes on next content-generator run |
| Ch. 10 — Intelligent Textbook Architecture and AI Tooling | Full Five Levels taxonomy as an architectural classification, a comparison table, a citation to the McCreary paper, the METR doubling-time context, and a second mascot-warning admonition focused on the Level 3 inflection. | ~600 words when generated | 📋 Directive embedded in outline; executes on next content-generator run |

## Why This Split Over the Alternatives

- **Ch. 1 alone** would plant vocabulary but not deliver the warning where the temptation actually lives (learning analytics in Ch. 8).
- **Ch. 10 alone** would arrive after Ch. 8 in the reading order — a reader who is about to design a dashboard in Ch. 8 would not yet have seen the warning.
- **Ch. 8 alone** would put the warning at the right moment but leave the framework unmentioned elsewhere, missing the architectural home in Ch. 10.
- **Three-chapter distribution** gives early vocabulary, in-context warning at the point of temptation, and full architectural framing — each chapter does one job.

## Implementation Mechanics

**Chapter 1** was already fully generated. I edited the "What Is an Intelligent Textbook?" section to add a **"Levels of Intelligent Textbook"** subsection with a 5-item list and the explicit sentence *"This book teaches Level 2"*, followed by a paragraph naming FERPA, COPPA, GDPR and forward-pointing to Ch. 8 and Ch. 10. No mascot admonition added here (Ch. 1 is already at 5 mascots, the writing-style-guide sweet spot). The warning lives as plain prose.

**Chapters 8 and 10** are still outline-only (`TODO: Generate Chapter Content`). I embedded **Required Content Directives** sections between the `Prerequisites` section and the `TODO` marker. These directives are durable markdown scaffolding that the `chapter-content-generator` skill will read as part of the chapter outline on every future regeneration. Each directive:

- Names the required mascot-warning admonition and what it must contain (regulations, obligations, actionable guidance).
- Specifies the mascot image path and alt text.
- Lists the concepts that must be handled with aggregate-only examples.
- Includes a forward or backward cross-chapter pointer so the three treatments reference each other.

When the content generator runs on Ch. 8 and Ch. 10, it will generate prose that satisfies these directives, producing the mascot-warning admonitions at the right spots. The directives themselves should survive into the published chapters as inline comments or be deleted by the generator — I'll decide at generation time which is more useful to the reader.

## Scope Decisions — What We Are NOT Adding

- **No chapter on data governance.** Legal, security, and compliance training for Level 3+ operators is out of scope. We warn and refer; we do not teach.
- **No xAPI / LRS implementation tutorial.** We mention these standards as the principled path forward for authors who genuinely need Level 3+, but implementation is left to specialized courses.
- **No case studies of specific vendor products** at Level 3–5 (Khan Academy adaptive, DreamBox, Carnegie Learning, etc.). Products evolve; principles endure.

## Learning-Graph Follow-Up (Recommended, Not Done)

The following concepts are now referenced in the chapter prose but do not yet exist as nodes in `docs/learning-graph/learning-graph.json`:

- *Intelligent Textbook Level* (the capability-tier concept itself)
- *Privacy Inflection Point* (the Level 2 → 3 boundary)
- *FERPA*, *COPPA*, *GDPR*, *CCPA/CPRA* (regulatory landscape)
- *xAPI*
- *Learning Record Store (LRS)*
- *Data Minimization*

Recommended action in a future pass: add these nodes to the learning graph (likely in the FOUND taxonomy for the classification concept and in a new taxonomy or ITB extension for the regulatory and standards concepts). Dependencies would point from each to *Intelligent Textbook*. This will let the glossary generator, quiz generator, and FAQ generator pick them up automatically. Track as a follow-up task, not blocking.

## Files Modified

- `docs/chapters/01-foundations/index.md` — added "Levels of Intelligent Textbook" subsection with Level-2 positioning statement and regulatory mention.
- `docs/chapters/08-measurement-feedback/index.md` — added "Required Content Directives" block before the TODO marker.
- `docs/chapters/10-textbook-architecture/index.md` — added "Required Content Directives" block before the TODO marker.

## Files NOT Modified (Deliberately)

- `docs/course-description.md` — the course description does not mention the Five Levels framework and does not need to; the framework is a clarifying lens, not a new learning outcome.
- `CLAUDE.md` — did not add a project-wide rule. The in-outline directives for Ch. 8 and Ch. 10 do the work durably, and a global rule would be over-engineered for a concern that applies to exactly two chapters.
- Learning graph — flagged above as follow-up; not done in this pass.

## Source Reference

Primary source paper (author's own):

- McCreary et al., *A Five-Level Classification Framework for Intelligent Textbooks: Lessons from Autonomous Vehicle Standards.* Local path: `~/Documents/ws/intelligent-textbooks/papers/five-levels/` (versions 0.01 – 0.04 present; `main.pdf` is the current build). Abstract consulted for this integration pass: `abstract.md`.

Cite this paper in Ch. 10's full treatment when that chapter is generated.
