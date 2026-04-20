---
title: AI Agent Skills for Textbook Generation
description: A working tour of the fourteen Agent Skills that compose this book's production pipeline — from the Course Description Analyzer at the start to the LinkedIn Announcement Generator at the end — plus a frank look at image generation costs and the footguns of skill design.
generated_by: claude skill chapter-content-generator
date: 2026-04-19 14:00:00
version: 0.07
---

# AI Agent Skills for Textbook Generation

!!! mascot-welcome "Welcome — Where the Theory Meets the Keyboard"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    The last thirteen chapters gave us the research base, the architecture, and the artifact inventory. This chapter is the tour of the workshop — the actual skills, sitting on my laptop right now, that turn a natural-language request into a chapter, a glossary, a quiz, a MicroSim, a graphic novel, or a metrics report. Every skill we'll name is installed in this project; each one has a `SKILL.md` we could open side by side with this prose. What I want you to walk away with is not a memorized roster but a mental model of *the pipeline's shape* — which skill runs first, which artifact feeds which, and where a careless skill design silently damages the work downstream. Let's build a mental model.

## Summary

This chapter is the tour of the generator skills that make this production pipeline possible: Course Description Analyzer, Learning Graph Generator, Book Chapter Generator, Chapter Content Generator, Glossary, FAQ, Quiz, MicroSim, Story, Reference, Book Metrics, Diagram Reports, LinkedIn Announcement, and Concept Classifier — plus a frank look at image generation costs. Readers leave knowing which skill to call at which stage of building a new textbook.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Course Description Analyzer
2. Learning Graph Generator
3. Book Chapter Generator
4. Chapter Content Generator
5. Glossary Generator
6. FAQ Generator
7. Quiz Generator
8. MicroSim Generator
9. Story Generator
10. Reference Generator
11. Book Metrics Generator
12. Diagram Reports Generator
13. LinkedIn Announcement Generator
14. Concept Classifier
15. Image Generation Costs

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Learning Sciences](../01-foundations/index.md)
- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../10-textbook-architecture/index.md)
- [Chapter 11: MicroSims and Interactive Visualizations](../11-microsims/index.md)
- [Chapter 12: Pedagogical Mascots and Admonitions](../12-mascots-admonitions/index.md)
- [Chapter 13: Graphic Novels and Short-Form Stories](../13-graphic-novels/index.md)

---

## The Pipeline Has a Shape

Chapter 10 introduced the `SKILL.md` format and the harness's skill-invocation mechanics in the abstract. This chapter grounds that abstraction in the fourteen concrete skills the project ships with — all of them resolvable by listing `~/.claude/skills/` on the author's laptop. The work the skills perform is real; the sequence they run in is the production pipeline this book itself was authored through.

A ***production pipeline*** is the ordered sequence of skill invocations that takes a new textbook from a one-page course description to a deployed MkDocs site. The order is not negotiable in a strong sense — each stage consumes artifacts the earlier stages produced — but it is negotiable in a weak sense: a skilled author can skip stages on a reprint, regenerate a single chapter in isolation, or bolt a new skill into the pipeline at a different point. The strong-order-weak-order distinction is what lets the same pipeline serve both a from-scratch build and a surgical edit.

Before we meet the skills individually, the pipeline diagram below is the mental map to hold onto as we go.

#### Diagram: The Textbook Production Pipeline

<details markdown="1">
<summary>Mermaid flowchart showing the end-to-end pipeline of all fourteen skills and the artifacts each one produces</summary>
Type: diagram
**sim-id:** textbook-production-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram arranged in five horizontal bands from top (structural skills) to bottom (publication skills). Nodes are labeled with the skill name and produce a named artifact.

Band 1 (structural foundation): *course-description-analyzer* → course description (validated). *learning-graph-generator* → learning graph (200 concepts, DAG). *book-chapter-generator* → chapter outlines (one per chapter).

Band 2 (content authoring): *chapter-content-generator* → chapter prose (`docs/chapters/NN-name/index.md`). *reference-generator* → per-chapter references (`references.md`).

Band 3 (derived artifacts): *glossary-generator* → glossary entries. *faq-generator* → FAQ section. *quiz-generator* → quiz bank.

Band 4 (engagement artifacts): *microsim-generator* → `/docs/sims/sim-id/` directories. *story-generator* → 12-panel graphic novel chapters. *concept-classifier* → interactive classification quizzes.

Band 5 (audit and publication): *book-metrics-generator* → `book-metrics.md` and `chapter-metrics.md`. *diagram-reports-generator* → diagram inventory. *linkedin-announcement-generator* → publishing post for milestones.

Edges labeled with the carrying artifact. Band 1 feeds Band 2 (outlines drive content). Band 2 feeds Band 3 (chapters + graph drive glossary, FAQ, quiz). Band 2 feeds Band 4 (chapters specify sims and stories the engagement skills then build). Bands 2, 3, and 4 all feed Band 5 (everything feeds the audit). A feedback arrow from Band 5 back to Band 1 is drawn in orange to signal that audit findings can trigger a re-run of any earlier stage.

Visual treatment: band 1 cool blue, band 2 teal, band 3 soft green, band 4 amber, band 5 warm orange. `classDef` styling per band. The feedback arrow is a dashed orange line labeled "audit regen."

Implementation: Mermaid `flowchart TD` embedded directly in the chapter markdown via the configured `pymdownx.superfences` mermaid fence.
</details>

The table below gives the same information in auditable form — which skill runs when, what it reads, what it writes, and how long a single run typically takes on a machine with a 1-million-token context window at 2026 prices.

| # | Skill | Input artifact | Output artifact | Typical duration | Pipeline position |
|---|---|---|---|---|---|
| 1 | course-description-analyzer | Draft `docs/course-description.md` | Validated and scored course description | 1–3 min | Foundation |
| 2 | learning-graph-generator | Course description | `learning-graph.json` with ~200 concepts + validation report | 10–30 min | Foundation |
| 3 | book-chapter-generator | Learning graph + course description | `docs/chapters/NN-name/index.md` outlines (one per chapter) | 5–10 min | Foundation |
| 4 | chapter-content-generator | Chapter outline + learning graph + style guide + prior chapters | Full chapter prose (this file, for example) | 3–8 min per chapter |  Authoring |
| 5 | reference-generator | Chapter outlines + course description | Per-chapter `references.md` (10 refs each) | 2–4 min per chapter | Authoring |
| 6 | glossary-generator | Learning graph (concept nodes) | `docs/glossary.md` | 5–15 min | Derived |
| 7 | faq-generator | Chapters + glossary + learning graph | `docs/faq.md` | 5–10 min | Derived |
| 8 | quiz-generator | Chapters + learning graph | Per-chapter `quiz.md` (Bloom-distributed items) | 3–6 min per chapter | Derived |
| 9 | microsim-generator | Chapter-specified sim brief (sim-id, library, controls) | `docs/sims/sim-id/` directory | 5–15 min per sim | Engagement |
| 10 | story-generator | Chapter-specified figure brief + concept tie | 12-panel graphic novel chapter + panel images | 10–20 min per story | Engagement |
| 11 | concept-classifier | Category list + scenario set (hand-authored or chapter-extracted) | `docs/sims/classifier-id/data.json` + `main.html` | 5–10 min per classifier | Engagement |
| 12 | book-metrics-generator | Entire book tree | `book-metrics.md` + `chapter-metrics.md` | 2–5 min | Audit |
| 13 | diagram-reports-generator | All chapter markdown files | Diagram inventory table + detail report | 1–3 min | Audit |
| 14 | linkedin-announcement-generator | `book-metrics.md` + chapters + deploy URL | Draft LinkedIn post | 1–2 min | Publication |

Two observations worth carrying through the rest of the chapter. First, the durations are *orders of magnitude* and will compress as models get faster; the *ratios* between skills will move less. Second, the "input artifact" column is the dependency graph of the pipeline — a change to a skill's input means every downstream skill is potentially stale. The book-metrics skill reports the staleness so the author can decide what to rerun.

## Foundation Skills: Getting the Spine Right

The three foundation skills do all of their work before a single paragraph of chapter prose is generated. They are also the skills whose output every other skill depends on, which makes them the place where early investment pays the largest dividends later.

### Course Description Analyzer

The ***course-description-analyzer*** skill reads a candidate `docs/course-description.md` file and evaluates it against a fixed checklist: is there a clear title, a named audience, a prerequisites statement, a topics list, and a set of Bloom-aligned learning outcomes? A course description missing any of these is a course description the learning-graph-generator will silently misinterpret, which is why this skill runs first and why its output is a *gate* rather than a suggestion. The skill returns a numeric score, a list of specific gaps, and a revised draft the author can accept or edit. A description scoring below 70/100 is treated as unready for the next stage; between 70 and 85 is runnable but flagged; above 85 is green.

The skill typically runs in one to three minutes and is cheap enough that an author can run it on a draft, take the suggestions, rerun, and converge in under fifteen minutes of wall time. That iteration cycle is the intended mode of use. A course description that an author tried to perfect in a single pass without running the analyzer is almost always worse than one that converged through three tool-assisted revisions.

### Learning Graph Generator

The ***learning-graph-generator*** skill reads a validated course description and produces the learning graph — the DAG of concept nodes and dependency edges that Chapter 10 established as the book's structural spine. The target is roughly 200 concepts, distributed across a project-specific taxonomy of domains. A 200-concept graph is an interesting size: small enough that a human reviewer can read the whole node list in a sitting; large enough that the skill has to think about categorization, dependency direction, and transitive redundancy rather than hand-drawing the edges.

The skill runs several validation passes on its own output. It checks for *cycles* (a cycle means the decomposition is wrong and gets flagged for human review); it computes the *transitive reduction* (so the graph viewer renders without an edge explosion); it checks for *orphan nodes* (a concept with no edges in or out is either foundational or a mistake, and the skill asks which); and it produces a *taxonomy coverage report* (are all seven domains covered, or did the generator cluster everything in one?). The validation report is as important as the graph itself; a graph that passes without a report is a graph you have no reason to trust.

#### Diagram: Skill Dependency Graph

<details markdown="1">
<summary>Mermaid DAG showing which skills depend on which other skills' outputs, with the learning graph as the central hub</summary>
Type: diagram
**sim-id:** skill-dependency-graph<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart LR` diagram showing all fourteen skills as nodes, with edges where one skill's output is a required input of another. The *learning-graph-generator* node sits as a central hub with outgoing edges to *book-chapter-generator*, *glossary-generator*, *quiz-generator*, *faq-generator*, and *reference-generator*. The *course-description-analyzer* has a single outgoing edge to *learning-graph-generator*. The *book-chapter-generator* has outgoing edges to *chapter-content-generator* and *reference-generator*. The *chapter-content-generator* has outgoing edges to *glossary-generator*, *faq-generator*, *quiz-generator*, *microsim-generator*, *story-generator*, and *concept-classifier* (each via chapter-level sim/story briefs). All thirteen other skills have outgoing edges to *book-metrics-generator* and *diagram-reports-generator*, which then both feed *linkedin-announcement-generator*.

Visual treatment: `learning-graph-generator` is drawn as a larger, highlighted hub node in warm orange; foundation skills in cool blue; authoring skills in teal; derived skills in soft green; engagement skills in amber; audit skills in warm orange. `classDef` per category. Edges labeled with the carrying artifact type (e.g., "chapter outline", "concept list", "chapter prose").

Implementation: Mermaid `flowchart LR` with `classDef` styling per skill category. Embedded directly in the chapter markdown.
</details>

### Book Chapter Generator

The ***book-chapter-generator*** skill takes the learning graph and the course description and produces an outline file per chapter. Each outline is a small Markdown file containing the chapter title, a one-paragraph summary, the list of concepts the chapter covers (drawn from the graph by the skill's allocation algorithm), the prerequisite chapters, and optional *Required Content Directives* — constraints that every future regeneration must honor. Chapter 10 is the canonical example of directives in action: its outline demanded the five-levels subsection and the privacy-warning admonition, and those directives survive every content regeneration because they live in the outline.

The allocation algorithm has some freedom even on a fixed graph. A 200-concept graph with, say, 15 chapters, typically admits many legitimate concept-to-chapter assignments. The skill balances three objectives: *respect the DAG* (no concept slotted before its prerequisites), *balance chapter length* (concept counts roughly within ±30% of the mean), and *group thematically* (concepts in the same domain tend to cluster). A conflict between objectives is surfaced as a decision the author can adjudicate rather than silently resolved.

## Authoring Skills: From Outlines to Prose

### Chapter Content Generator

The ***chapter-content-generator*** skill — the one that wrote the sentence you are reading — consumes a chapter outline, the learning graph, the style guide (`CLAUDE.md`), and the prior chapters, and produces the long-form Markdown file that renders as the chapter page. The skill is self-referential in the sense this chapter is documenting: this is the chapter that documents the skill that generates this chapter.

Three design decisions inside the skill are worth naming. **Reading depth is tunable.** On a from-scratch run the skill reads the full style guide and summaries of the prior chapters; on a regeneration it can short-circuit to the outline plus a diff summary, which is dramatically cheaper in tokens. **Non-text-element specifications are first-class.** The skill does not generate MicroSim code or infographic images; it specifies them as `<details markdown="1">` blocks that the `microsim-generator` and `interactive-infographic-overlay` skills consume later. This separation is what keeps the chapter-generation pass fast and the sim-generation pass deep. **The retrieval check and the celebration are structural.** Every chapter ends with a retrieval check and a celebration admonition; the skill refuses to emit a chapter that lacks either.

### Reference Generator

The ***reference-generator*** skill produces the per-chapter `references.md` files, with a project convention of ten references per chapter. References are stored in separate files rather than inlined in the chapter Markdown, which keeps the chapter text small enough to fit comfortably inside the chapter-content-generator's context window on the next regeneration. Token budgeting — from Chapter 10 — is what drove that layout decision; the layout in turn lets the skill iterate on references without touching the chapter.

The skill's default source priority is Wikipedia, which is not a statement about Wikipedia being the best academic citation but about Wikipedia being the most *stable*, *accessible*, and *non-paywalled* reference surface available. Each reference is annotated with a short relevance description so the reader knows *why* the reference is on the list, not just that it is.

!!! mascot-thinking "References as a Context-Window Move"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    The decision to park references in a separate file per chapter looks like a content-organization choice, but it's really a token-budgeting choice. A 40-reference inline block in every chapter would be 40 × 14 = 560 references worth of tokens the next chapter's regeneration has to carry in its "prior context" window. The separate-file layout keeps the pipeline fast. Watch for design decisions that look cosmetic but are actually performance infrastructure — they are everywhere in a well-designed pipeline.

## Derived Skills: Glossary, FAQ, Quiz

### Glossary Generator

The ***glossary-generator*** skill produces one entry per concept node in the learning graph, writing to `docs/glossary.md`. The skill enforces four style rules that emerge from long experience with glossaries that fail in recognizable ways: *precise* (the definition picks out the concept and nothing else), *concise* (one or two sentences, no more), *distinct* (a reader could pick the right term from a multiple-choice list of related terms), and *non-circular* (no definition uses the term it defines). A fifth rule — *free of business rules* — prevents a definition from drifting into product-specific language ("working memory is the short-term store our dashboard visualizes in the left pane"), which would tie the glossary to a deployment rather than the discipline.

The skill produces the glossary as a single Markdown file rather than a database because the glossary needs to render as a page and be searchable by MkDocs' built-in search plugin. A downstream skill can still parse the file deterministically because the entry format is fixed.

### FAQ Generator

The ***faq-generator*** skill produces `docs/faq.md` from the chapters, the glossary, and the learning graph, supplemented once the book is deployed with actual reader questions. The skill's structural contribution is that it treats FAQs as *entry points*, not as independent islands of content. Every FAQ answer links back to the chapter and section that treats the underlying concept; a reader who hits the FAQ for a passing question can follow the link into the chapter for the full treatment.

The skill also enforces a negative rule: content that appears *only* in the FAQ has failed to earn its place in the book. A concept important enough to warrant an FAQ is important enough to warrant a chapter-section treatment; the FAQ is there to address common confusions about content that already exists, not to smuggle new material in through the back door.

### Quiz Generator

The ***quiz-generator*** skill produces per-chapter quiz banks — multiple-choice items tagged with concept, Bloom level, and chapter. The skill deliberately distributes items across the Bloom levels the chapter covers, rather than collapsing them all at *Remember*. A chapter that lands every quiz item at *Remember* is a chapter that trained the reader to recognize vocabulary and nothing else. A chapter whose quiz includes *Apply* and *Analyze* items is a chapter whose assessment actually measures the cognitive work the chapter asked for.

The serial-execution choice inside the skill is worth a note. An earlier version ran one agent per chapter in parallel, which was fast but produced quizzes whose items occasionally overlapped or contradicted across chapters. The serial version — one agent walking the chapter list in order — is slower but produces quizzes with visible awareness of prior items. Token efficiency and cross-chapter coherence pushed in the same direction here; that alignment is not always present.

## Engagement Skills: MicroSims, Stories, Classifiers

### MicroSim Generator

The ***microsim-generator*** skill reads a MicroSim brief from a chapter's `<details>` block and produces the sim directory at `/docs/sims/sim-id/`. The skill's routing layer is what makes it a first-class skill rather than a p5.js-only generator: it analyzes the sim's visualization requirements and picks the appropriate library. The routing table below is the one the skill uses in practice.

| Visualization type | Library routed to | Reason |
|---|---|---|
| Interactive parametric sim (sliders, particles, custom rendering) | p5.js | Draw-every-frame control; simplest author path |
| Quantitative chart (time series, scatter, histogram) | Chart.js | Standard chart types; small dependency |
| Scientific or statistical chart (heatmap, 3D, specialized) | Plotly | Broader chart vocabulary; interactive legends |
| Static or reactive flowchart / graph | Mermaid | Text-source diagrams that version-control cleanly |
| Network or dependency graph (nodes and edges, interactive layout) | vis-network | Physics-based layout, edge labels |
| Map-based visualization | Leaflet | Tile-based maps; standard in web |
| Set-overlap diagram | Venn.js | Specialized library for Venn diagrams |
| Timeline visualization | vis-timeline | Time-axis interactions |

The output is always a full sim directory — `main.html`, `script.js` (or the library-specific source), `local.css`, `index.md`, a screen capture, and metadata. The directory structure is uniform across libraries so that the iframe embed pattern in chapters works without per-library special cases.

The skill's interaction with the project's other conventions is exact. In every p5.js sim, `updateCanvasSize()` is the first line of `setup()` (per the global `CLAUDE.md` rule); the canvas is parented to `<main></main>` (per the project rule that enables copy-paste into the p5.js editor); built-in p5.js controls are used (per the project rule against hand-drawn controls). A sim that violates one of these rules is caught by the sim-generation step's lint pass, not by a downstream reviewer weeks later.

!!! mascot-thinking "Routing Is Where Skills Earn Their Keep"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    Notice what the routing layer in `microsim-generator` does structurally. It turns a judgment call — *which library fits this visualization?* — that every author would otherwise have to make on every sim into a decision the skill makes from a documented table. That is the shape of a skill worth writing: it encodes a judgment that recurs, so the author can think about *what to visualize* instead of *which library to reach for*.

### Story Generator

The ***story-generator*** skill is the one Chapter 13 built up to: it produces a 12-panel graphic novel chapter from a figure brief and a concept tie. The skill handles the full pipeline Chapter 13 specified — figure selection, script and panel plan, image prompt engineering, image generation through the Google Gemini API, and historical accuracy check — and emits a Markdown chapter with speech bubbles and captions overlaid in HTML on the generated panel images.

The skill's default cadence is one story per chapter that has a documented historical figure worth naming. Not every chapter gets one; a chapter on context windows does not need a graphic novel, while a chapter on retrieval practice benefits from an Ebbinghaus story because Ebbinghaus *is* the concept's origin. The author decides; the skill executes.

### Concept Classifier

The ***concept-classifier*** skill produces an interactive p5.js classification quiz from a data file. The quiz format is simple: the reader sees a scenario, picks a category from a multiple-choice list, and gets immediate feedback. The pedagogical value is that classification is a well-studied form of retrieval practice — more active than re-reading and more concept-specific than a generic quiz. The format is particularly well-suited to chapters where the reader needs to recognize *instances* of a pattern (examples of reinforcing loops, cases of confounded correlations, types of cognitive load).

The skill's data-driven design is what makes it cheap to produce. A classifier that teaches the reader to tell reinforcing from balancing loops is the same code as a classifier that teaches the reader to tell conceptual from notational dependencies — the difference lives in `data.json`.

## Audit Skills: Measuring the Book

### Book Metrics Generator

The ***book-metrics-generator*** skill produces two Markdown files in `docs/learning-graph/`: `book-metrics.md` with overall statistics and `chapter-metrics.md` with a per-chapter breakdown. The metrics it reports span several categories: *volume* (chapter word counts, concept counts, glossary term counts), *coverage* (which concepts are covered in which chapters, and whether any are missing), *distribution* (Bloom-level distribution of quiz items, shot-type distribution of MicroSims, admonition counts per chapter), and *consistency* (dead links, missing references, orphaned concepts).

The skill is not a grading system; it is a *measurement* system. Chapter 8's warning about Goodhart's Law applies sharply here — any of these metrics, optimized against without a guardrail, produces chapters shaped by the target rather than by pedagogical need. The structural fix is to pair every metric the skill reports with a qualitative review prompt in the chapter-metrics file.

### Diagram Reports Generator

The ***diagram-reports-generator*** skill produces an inventory of every diagram, MicroSim, and interactive infographic across all chapters, with their status (Specified, In Progress, Shipped), their difficulty and Bloom-level tags, and their UI-complexity rating. The table version is the working surface an author uses to decide which sims to generate next; the detail report is the reference the author consults when revisiting a sim months later.

The skill's contribution is not the inventory itself — the chapters contain the source data — but the *aggregation*. An author looking at a single chapter sees five `<details>` specs; an author looking at the diagram report sees ninety, with coverage gaps and status imbalances visible at a glance.

### LinkedIn Announcement Generator

The ***linkedin-announcement-generator*** skill is a small, sharp skill that reads the book metrics and a deploy URL and produces a LinkedIn post draft. The draft is structured around the metrics that read as genuinely impressive on a professional-network feed — total concept count, total chapter count, total MicroSim count, the site URL — and includes hashtags appropriate to the book's subject matter.

Two design notes. First, the skill runs *after* the metrics skill, because every number in the post is drawn from the metrics file. Second, the skill produces a draft, not a published post. Posting is always a human action; an author who wants to edit the draft can, and an author who wants to post verbatim can, but the skill does not publish.

## Image Generation Costs: A Candid Section

The engagement skills — story, MicroSim screen captures, mascot regeneration, chapter hero images — depend on image generation, which is the line item in a textbook's LLM budget that moves the fastest and surprises authors the most. This section is the honest tour of what the costs are at the time of writing, how they add up across a whole book, and what the tradeoffs look like on the consistency-versus-cost-versus-speed surface.

Before the numbers, one disclaimer worth saying aloud: these prices are a snapshot from April 2026 and will move. The *ratios* between providers will move less than the absolute prices, but even the ratios shift as new models ship. Treat the table below as a decision framework, not a quoted rate card.

| Provider / model family | Cost per image (API, 2026 Q2) | Quality notes | Primary use case | 12-panel story cost |
|---|---|---|---|---|
| Google Imagen (Gemini API) | ~$0.04 | Strong painterly and photorealistic; reference-image conditioning available | Story panels, mascot poses, chapter hero images | ~$0.50 |
| Black Forest Labs Flux (hosted) | ~$0.05 | Crisp, high-resolution outputs; strong detail | Story panels where detail matters; technical illustrations | ~$0.60 |
| Midjourney (via API) | ~$0.10 | Stylized, strong aesthetic cohesion; tighter API access | Branded hero images; stylized chapter openers | ~$1.20 |
| OpenAI DALL-E 3 / GPT-Image-1 | ~$0.04–$0.08 | Good prompt adherence; integrated with ChatGPT workflows | Quick iteration; when already inside the OpenAI stack | ~$0.50–$1.00 |
| Local Flux / SDXL on workstation | ~$0 marginal (hardware amortized) | Variable quality; requires local GPU; longer wall-clock | High-volume regeneration; privacy-sensitive content | ~$0 per story after setup |

A twelve-panel story at $0.04 per image is $0.48 in API spend, which is the number Chapter 13 quoted as "a coffee's worth." That number is not wrong, and it is also misleading in two directions worth naming.

**It is too low in the common case** because the first generation of a panel is rarely the one that ships. Chapter 13's tip — *regenerate three times before accepting a panel* — means the realistic per-panel cost is three to four generations, not one. A twelve-panel story whose each panel needed four tries costs $1.92, not $0.48. Across fourteen chapters with one story apiece, the story-image budget for a whole book lands somewhere between $7 and $30, depending on iteration discipline. That is still cheap relative to a commissioned illustrator, but it is not pocket change for a volunteer-authored textbook, and it is an order of magnitude higher than the naïve one-pass estimate.

**It is too high in the rare case** where local generation makes sense. An author with a mid-range consumer GPU can run Flux locally at near-zero marginal cost once the setup is done. The tradeoffs are wall-clock time (local generation is slower than a hosted API), output quality (often still shy of the best hosted models at the time of writing), and setup cost (the first local-Flux environment an author builds takes a weekend). For a book whose author has 300 panels to generate across many stories, the local path can pay back that setup weekend inside a week.

The tradeoff surface is worth drawing out explicitly. Every choice on this axis is a three-way tradeoff among *consistency*, *cost*, and *speed*, and no provider wins on all three. The character-consistency techniques from Chapter 13 — text-only style sheet, reference image, IP-Adapter, LoRA fine-tune — sit on the same surface: each one trades setup cost for better character preservation across a story.

| Priority | Best choice (April 2026) | What you give up |
|---|---|---|
| Lowest cost | Google Imagen (hosted) or local Flux (on owned GPU) | Some consistency drift without reference image; slower for local |
| Highest consistency across a story | Flux with IP-Adapter or a LoRA fine-tune | Setup time; higher per-story cost |
| Fastest iteration | Google Imagen or OpenAI GPT-Image-1 | Minor consistency tradeoffs vs. Flux + IP-Adapter |
| Strongest branded aesthetic | Midjourney | Highest API cost; less API control |
| Full privacy / no cloud dependency | Local Flux or SDXL | Setup cost; variable quality; slower |

Why this matters for educational projects specifically: most educational books are produced on non-infinite budgets, by authors who are also domain experts rather than full-time image-generation operators. The image-generation budget is one of the few line items that can silently balloon — an enthusiastic story-generator run on every chapter, each with four regenerations per panel, each chapter having two candidate stories before the author picks one, can turn a $10 image budget into a $200 image budget without anyone noticing until the monthly invoice arrives.

!!! mascot-tip "Set an Image Budget Before You Start, Not After"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom the elephant giving a tip">
    A pre-declared image budget — say, $5 per story, $25 for mascot poses, $10 for chapter hero images — turns every regeneration decision into an explicit tradeoff. The author who checks their budget after the run has already spent the money. The author who checks it before spends deliberately and usually lands well under their cap.

## When NOT to Use a Skill

A theme that has been implicit through this chapter deserves a paragraph of its own: *not every task wants a skill*. Skill design has real overhead — the `SKILL.md` file to write and maintain, the trigger hints to tune, the inputs and outputs to document, the changelog to keep current — and a task that does not recur is a task where the overhead is not earned. Three categories of task do not belong in a skill.

**One-off tasks.** A one-time reformatting of a legacy document, a single migration step, an ad-hoc data extraction for a specific report — these are *prompts*, not skills. A skill that runs once and is never invoked again is documentation that nobody reads, blocking a search result somebody else needs.

**Tasks that require conversation context.** Some work is shaped by the back-and-forth of a real author-and-model conversation — exploratory analysis, design discussion, diagnosing why a specific chapter feels off. That work is inherently conversational; encoding it as a skill forces a linear step list onto what needs to be a dialog. The harness's chat interface is the right tool.

**Tasks where a terse prompt is simpler.** "Rename every `sim-id` in Chapter 7 from `foo-bar-baz` to `baz-bar-foo`" is a prompt. "Turn `docs/course-description.md` into a validated course description" is a skill. The rough test: if the task has a named output artifact with a defined format, it wants a skill; if the task is an edit whose shape is obvious from the sentence, it wants a prompt.

| Situation | Reach for | Why |
|---|---|---|
| Well-defined artifact, recurring | Skill | Overhead is earned by repeat use |
| One-off reformatting, migration, or extraction | Terse prompt | Skill overhead outpaces one-time benefit |
| Exploratory or diagnostic conversation | Harness chat | Needs dialog, not a linear step list |
| Task that itself calls several skills in sequence | Subagent or orchestrator skill | The chain is the reusable artifact |
| Task that needs to run unattended on a schedule | Scheduled skill or cron | The *when* is as important as the *what* |

The ***everything-is-a-skill footgun*** is the temptation, once an author has written a few good skills, to turn every request into one. The cost is real: a skill catalog full of single-use skills is a catalog whose triggering becomes ambiguous, whose maintenance burden accumulates, and whose "which skill applies here?" surface grows faster than the author's ability to remember it. The structural fix is to hold the rough test above in mind and accept that some requests will remain prompts forever.

## The Skill-Quality Flywheel

The payoff of investing in a skill — rather than a prompt — is not that any single invocation is better. It is that each invocation *surfaces edge cases* that get folded into the next version of the skill, and the skill gets *better than it was* in a way that a one-off prompt never does. That improvement has a shape worth seeing as a causal loop.

#### Diagram: The Skill-Quality Flywheel

<details markdown="1">
<summary>Causal loop diagram showing how skill use surfaces edge cases that tighten the description and improve invocation accuracy, creating a reinforcing loop</summary>
Type: causal-loop-diagram
**sim-id:** skill-quality-flywheel<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` with six variable-nodes and one named reinforcing loop. All nodes are noun phrases naming variables that can go up or down.

Nodes: *skill invocation rate*, *edge cases surfaced*, *skill description precision*, *trigger accuracy*, *author trust in the skill*, *maintenance burden*.

Edges and polarities:

- skill invocation rate → edge cases surfaced (+) — more runs surface more edge cases
- edge cases surfaced → skill description precision (+, with delay ⧚) — each edge case prompts a description tightening
- skill description precision → trigger accuracy (+) — a precise description routes the harness correctly
- trigger accuracy → author trust in the skill (+) — the skill is invoked when it should be, not otherwise
- author trust in the skill → skill invocation rate (+) — trusted skills get used
- skill invocation rate → maintenance burden (+) — more use means more bug reports and feature requests
- maintenance burden → skill description precision (−, if unmanaged) — neglected maintenance lets the description drift

Loop label at the loop's geometric center:

- **R1 — Skill-quality flywheel (reinforcing, productive).** Invocation → edge cases → description precision → trigger accuracy → trust → more invocation. Each trip around makes the next one easier. Maintenance burden is the drag variable that can stall the loop if left unattended.

Visual treatment: R1 nodes in cool blue; the maintenance-burden node in warm orange to signal the drag variable; delay marker ⧚ on the edge-case-to-description-precision edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 accompanies the diagram in the prose that follows.
</details>

Read loop **R1** in plain English. An author who uses a skill more frequently encounters more of its edge cases — inputs the skill handles poorly, outputs that need a post-processing step, trigger hints that route ambiguously. Each edge case is an opportunity to tighten the `SKILL.md` description, adding a precision that was not there before. A more precise description routes more accurately when the harness matches user requests against skills, which raises the author's trust in the skill — the skill gets invoked when it should and does not get invoked when it should not. Trusted skills get used more, which brings the loop back to the start. Each trip around R1 makes the skill a little better than it was.

The loop has a drag variable: *maintenance burden*. Every increase in invocation rate is also an increase in bug reports, feature requests, and spec drift. Unattended, the maintenance burden dampens the skill-description-precision edge — the skill's description stays where it was while the skill's behavior has moved. The structural fix is to treat the skill's `## Changelog` section as load-bearing: a skill without a visible recent changelog is a skill that has either stopped being used (in which case fine, archive it) or is accumulating silent drift (in which case urgent). The flywheel runs on visible maintenance, not on hope.

## Footgun Callouts

Three footgun patterns specific to skills in a production pipeline are worth naming with the three-property framework — silent, easy to trigger, delayed damage.

### Skill description ambiguity leading to wrong-skill invocation

*Silent:* the harness cheerfully routes the author's request to the wrong skill, produces an output, and reports success. *Easy to trigger:* two skills with overlapping trigger hints — say, a `chapter-content-generator` whose description matches "generate chapter" and a separate `chapter-image-enhancer` whose description also matches "generate chapter" — will collide on the same natural-language request. *Delayed damage:* the author discovers the wrong routing only when the output artifact does not look right; by then the write has already happened, possibly overwriting a file the author wanted kept. **Structural fix:** every skill's `When to use` section names *anti-triggers* alongside triggers — explicit phrasings that should NOT route to this skill — and the harness surfaces the chosen skill's name before executing, giving the author a chance to intercept. The anti-trigger pattern is what disambiguates skills whose descriptions are legitimately similar.

### Skills that write to the same file creating merge conflicts

*Silent:* two skills whose `## Outputs` sections both name `docs/glossary.md` will both write to the file without noticing each other, and the last writer wins. *Easy to trigger:* a quick local addition (a standalone "glossary-appender" skill) that writes to the canonical glossary path instead of a staging path, invoked after the main glossary-generator has run. *Delayed damage:* a later pipeline run of the main glossary-generator silently discards the appended content, because the main generator regenerates the file from the learning graph. **Structural fix:** every skill declares exclusive *ownership* of the files it writes; a second skill that wants to append or transform the output writes to its own output path and composition happens at a documented later stage, not through overlapping writes. This is a variant of the single-writer discipline from distributed systems, applied at the artifact level.

### Skills that depend on external services silently failing

*Silent:* the `story-generator` skill calls the Google Gemini API for image generation; if the API returns a 429 rate-limit or a partial response for a single panel, the skill can proceed with eleven panels rendered and one panel missing, writing a chapter whose panel 7 is a broken image reference. *Easy to trigger:* any external-service dependency that lacks end-to-end success verification inside the skill. *Delayed damage:* the broken chapter ships to the site build; the author discovers it on the deployed URL, days later, after the initial check looked fine. **Structural fix:** every external-service call inside a skill is wrapped in a post-condition check: *after* the call, verify the artifact exists and is valid before the skill reports success. A story skill should verify that every panel image file exists and is a valid image before the skill writes the chapter Markdown that references them.

The meta-pattern across all three footguns is the *silent-success* shape: the skill reports success, but the artifact is wrong. Structural fixes that make the failure *loud* — anti-trigger declarations, exclusive file ownership, post-condition verification — are the category of fix that matters. A watched-for failure is better than an unwatched one; a structurally-impossible failure is better than a watched-for one.

!!! mascot-warning "Silent Success Is the Worst Kind of Failure"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom the elephant flagging a warning">
    Every one of the footguns above shares the same shape: the skill says it worked, and the artifact says otherwise. That gap between the report and the reality is where damage accumulates. When you design a skill, ask: *if this skill silently produced a wrong artifact, how long would it take a reader — not me, a reader — to notice?* If the answer is "weeks" or "maybe never," the skill needs a louder failure mode. Structural impossibility beats structural vigilance every time.

## Retrieval Check

Close the tab and try these from memory. Stumbling is diagnostic — it tells you which section to revisit. Resist scrolling back before attempting each one.

1. **Name** the three foundation skills that run before any chapter prose is generated, and state in one sentence what each one produces. (Level: Remember / Understand.)
2. **State** the dependency the `reference-generator` skill's per-chapter-file layout buys that an inline-references layout would not. (Level: Understand.)
3. **Explain** why the `microsim-generator` skill has a library-routing layer rather than always producing p5.js output. Name at least three libraries and the visualization types each is the right choice for. (Level: Understand / Apply.)
4. **Describe** the skill-quality flywheel (R1) around one full cycle in your own words, and name the drag variable that can stall the loop. (Level: Analyze.)
5. **Given** a request to rename a single variable across three chapters, decide whether a new skill, a terse prompt, or a harness conversation is the right tool. Justify your answer. (Level: Apply / Evaluate.)
6. **Critique** the design choice to store ten references per chapter in separate `references.md` files rather than in a single book-wide references file. Name at least one benefit and one cost of the split, and propose one condition under which the consolidated-file choice would be better. (Level: Evaluate.)
7. **Given** a 12-panel story whose each panel needs an average of 3.5 regenerations to land, and a provider that charges $0.04 per image, calculate the realistic per-story image cost. Then state what changes if the author also produces two candidate stories per chapter before picking one, across 14 chapters. (Level: Apply.)
8. **Evaluate** the claim that every recurring authoring task should be turned into a skill. Name at least two conditions under which the claim fails, and propose a decision test that distinguishes skill-worthy tasks from prompt-worthy ones. (Level: Evaluate.)
9. **Trace** one of the three footguns (skill-description ambiguity, overlapping file writes, or silent external-service failure) and propose a structural fix that makes the failure *loud* rather than watched-for. (Level: Analyze / Create.)
10. **Under what conditions** would the image-generation budget for a book ship an unpleasant surprise at invoice time, and what pre-declared budget structure would prevent it? (Level: Evaluate / Apply.)

If questions 5, 8, or 10 produced real hesitation, that hesitation is the right kind. Skill design is genuinely a judgment call; getting fluent with the judgment takes real time.

## Bridge to Chapter 15

We now have the whole stack in one place: the theory (Chapters 1–9), the architecture (Chapter 10), the MicroSim and mascot craft (Chapters 11–12), the graphic novel discipline (Chapter 13), and the skill pipeline that turns requests into artifacts (this chapter). What we have not yet done is put it all to work on a real project — taking a subject we have never written about before, running the full pipeline from course-description validation to deployed site, measuring what lands and what doesn't, and iterating. That is the capstone. Chapter 15 is where the stack, the theory, and the skills meet a production deployment.

!!! mascot-celebration "The Toolchain Is Yours"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom the elephant celebrating with trunk raised">
    You now have the complete mental map of the workshop — every skill named, every artifact located, every pipeline position understood. Hold onto three headlines from this chapter: *the learning graph is the spine and the first three skills exist to get it right*, *image-generation costs balloon silently unless you pre-declare a budget*, and *the silent-success footgun is the one that matters most — design skills so wrong outputs fail loudly, not quietly*. Next up: the capstone. We take everything we have built — the stack, the theory, the skills — and deploy a textbook. See you in Chapter 15.
