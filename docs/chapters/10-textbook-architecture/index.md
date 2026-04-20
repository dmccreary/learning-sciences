---
title: Intelligent Textbook Architecture and AI Tooling
description: Defines the intelligent textbook as a software artifact — learning graphs, concept dependencies, DAG structure, nodes and edges, glossaries, FAQ sections, quiz banks, chapter outlines, reference lists, tables of contents, search indexes, navigation, and print-friendly output — alongside the AI tooling foundations (prompt engineering, context windows, token budgeting, SKILL.md format, skill invocation), the five-level classification of intelligent textbooks, and the architectural implications of the Level 2 to Level 3 privacy inflection.
generated_by: claude skill chapter-content-generator
date: 2026-04-19 12:35:00
version: 0.07
---

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

!!! mascot-welcome "Welcome — The Book Is a Piece of Software"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    The previous nine chapters gave us the research base. This chapter is where we pick up the hammer. We are going to look at an intelligent textbook the way a software engineer looks at any build — as a graph, a set of components, a pipeline, a deployment target, and a set of architectural commitments that make some futures easy and others hard. The commitment I want you to notice above all others is the one we make about student data. Let's build a mental model.

## The Textbook as Software Artifact

An ordinary book is a frozen document. An ***intelligent textbook design*** treats the book as a *software artifact* whose source of truth is a structured, machine-readable description of what the reader needs to learn, and whose prose, diagrams, simulations, quizzes, and navigation are all *generated against* that description. Change the description and the downstream artifacts change; leave the description alone and the book stays stable. The discipline is exactly the same as the one a web engineer applies when separating data, view, and controller — except that here the data is a learning graph, the view is a MkDocs Material site, and the controller is a pipeline of agent skills dispatched by an IDE harness.

That framing has a few consequences worth naming up front. The first is that *nothing in the output is authoritative*. If a chapter and the learning graph disagree about whether a concept depends on another, the learning graph wins, the chapter is regenerated, and the mismatch is a build-time signal rather than a runtime surprise. The second is that *every artifact must be cheap to rebuild*. A chapter that takes three days to hand-edit after every concept-graph refactor is not a chapter in this sense; it is a dependency that has been allowed to drift. The third is that *architecture is a policy decision*, not just a diagram. The choice to stay at Level 2 — which this chapter will spend real time on — is an architectural commitment that closes off entire categories of infrastructure the book does not need to build, own, or operate.

By the end of this chapter you will be able to:

- Describe the core components of a Level 2 intelligent textbook and explain which component is the structural spine.
- Define a directed acyclic graph and explain why acyclicity is a design discipline for learning material, not a mere formality.
- Distinguish a concept node from a concept edge and state the dependency-direction convention the project uses.
- Explain the difference between a chapter outline and chapter content authoring, and why they are separate pipeline stages.
- Describe prompt engineering, context windows, and token budgeting as the three controls that shape LLM behavior in an authoring pipeline.
- Read a `SKILL.md` file and identify the sections that make a skill reusable across projects.
- State the five levels of the intelligent-textbook classification, place this book at Level 2, and explain why crossing to Level 3 is both a regulatory and an architectural inflection.
- Sketch the delta in infrastructure between a Level 2 and a Level 3 system — what new components appear, and what each one costs to operate responsibly.

## Component Architecture of a Level 2 Intelligent Textbook

Before we can talk about what changes at Level 3, we need a crisp picture of what sits inside Level 2. A Level 2 intelligent textbook has a small number of components, each with a single job, arranged around a structural spine.

#### Diagram: Intelligent Textbook Component Architecture (Level 2)

<details markdown="1">
<summary>Interactive infographic overlay: the component architecture of a Level 2 intelligent textbook with the learning graph at the center and derived artifacts radiating outward</summary>
Type: interactive-infographic
**sim-id:** intelligent-textbook-architecture<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: a labeled architecture illustration with the *Learning Graph* rendered as a large central node (a small concept-node cluster with arrows between concepts suggests its DAG nature). Radiating outward from the graph are the generated artifacts: *Chapter Outlines*, *Chapter Content*, *Glossary*, *FAQ*, *Quiz Bank*, *Reference List*, *MicroSims*, *Stories*. Beneath these is a packaging layer labeled *Site Build*, which decomposes into *Table of Contents*, *Site Navigation*, *Search Index*, and *Print-Friendly Output*. A vertical stripe down one side is labeled *Mascot Voice Layer* to indicate the cross-cutting concern. A second vertical stripe, clearly separated, is labeled *Authoring Pipeline* with sub-nodes *Harness*, *Skills*, *Prompts*. The base image is annotation-free; all labels are delivered by overlay markers defined in `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering over any component shows a tooltip with the component's one-sentence definition, the concept or artifact it owns, and a pointer to the chapter where it is treated in detail.
- **Quiz mode:** A design decision is posed (e.g., "You need to add a new concept that every Chapter 6 quiz item depends on"); the learner clicks the component that owns the change. Correct answers highlight the component green; incorrect answers reveal the correct component and a one-sentence explanation of the ownership rule.
- **Edit mode (authors only):** Drag markers to recalibrate their positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Understand / Apply): *Given a proposed change to an intelligent textbook, identify the component whose ownership the change respects, and explain which other components the change cascades into.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/intelligent-textbook-architecture/` will contain `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the architecture base image.
</details>

The vocabulary the rest of the chapter uses is collected here, so that when the pipeline diagrams appear later, the labels already mean something.

- ***Learning graph*** — the directed acyclic graph of concepts with dependency edges that serves as the book's structural spine. Every other artifact is generated against it.
- ***Concept node*** — one entry in the learning graph representing a single unit of knowledge the reader is expected to acquire.
- ***Concept edge*** — one dependency relationship between two concept nodes, oriented from the dependent concept to its prerequisite.
- ***Chapter outline*** — the structured plan for a chapter, listing the concepts it covers, its prerequisites, its summary, and any directives that should be respected on regeneration.
- ***Chapter content authoring*** — the generation of prose, admonitions, tables, and non-text-element specifications against a chapter outline.
- ***Glossary*** — a term-by-term definition list with one entry per concept node.
- ***FAQ section*** — a curated set of Frequently Asked Questions derived from chapter content, reader feedback, and anticipated points of confusion.
- ***Quiz bank*** — a store of assessment items tagged by concept and Bloom level.
- ***Reference list*** — a per-chapter curated reading list grounding the claims the chapter makes.
- ***Table of contents*** — the ordered, hierarchical index of chapters and sections.
- ***Site navigation*** — the interactive navigation surface (sidebar, breadcrumbs, next/previous) that lets a reader move through the book.
- ***Search index*** — the precomputed full-text index that powers the book's site search.
- ***Print-friendly output*** — a stylesheet or build target that renders the book as a continuous document suitable for printing or PDF export.

Three properties of this architecture are worth emphasizing before we zoom in.

First, **the learning graph is the spine, not an accessory**. Every other artifact is generated against it. Chapters list their concepts; the glossary has one entry per concept node; quiz items tag themselves against concepts; reference lists pin themselves to chapters that pin themselves to concepts. A project that treats the graph as "nice to have, chapters come first" has inverted the dependency — and will spend the rest of its life fighting drift between the chapters and the concept list nobody maintains.

Second, **packaging is a separate concern from authoring**. The table of contents, site navigation, search index, and print-friendly output are all derived from the chapter files and the site configuration by MkDocs Material at build time. Authors do not hand-maintain them. A chapter reorder is a one-line change in `mkdocs.yml`; the TOC, sidebar, search index, and print output all regenerate. Treating packaging as a separate layer is what makes the content layer cheap to edit.

Third, **the mascot voice layer is cross-cutting**. Bloom does not live next to the content; Bloom lives *through* the content. The style guide, the admonition types, and the pose images are shared infrastructure that every chapter consumes. That is why Chapter 12 gets a whole chapter on getting the voice right; a cross-cutting concern is the category of architectural decision that is expensive to change later.

## The Learning Graph as the Structural Spine

The ***learning graph*** is the machine-readable representation of what the book teaches. Formally, it is a directed graph whose nodes represent concepts and whose edges represent concept dependencies. Informally, it is the document the whole pipeline argues with: when a chapter and the graph disagree, the graph is right.

A well-formed learning graph has three structural properties.

**It is directed.** Every edge has a source and a target. The project's convention, embodied in `learning-graph.json`, is that *an edge from A to B means "A depends on B"* — that is, B is the prerequisite and A is the dependent. The arrow points *from the dependent concept toward the prerequisite concept*. This is the convention used by most build-system dependency graphs (a build target depends on its sources), and it is the one the downstream skills expect.

**It is acyclic.** No sequence of edges starting at a node returns to that same node. Acyclicity is not a mere formality; it is a discipline. A cycle in the learning graph means a concept depends on itself transitively, which means there is no order in which a learner could encounter the concepts for the first time. The graph is telling us the decomposition is wrong and asking us to break the cycle.

**It is labeled.** Each node carries metadata — a canonical name, a short definition, a taxonomy tag, a chapter assignment, a Bloom level, a status flag. Each edge carries optional metadata — the kind of dependency (conceptual, notational, procedural) and a short justification.

### DAG Structure

A ***DAG structure*** — directed acyclic graph — is the mathematical object underlying the learning graph. Its properties are worth stating carefully because they directly enable the pipeline stages that come later.

**Topological ordering.** A DAG admits at least one *topological ordering* — a linear ordering of the nodes such that every edge goes from later to earlier in the ordering (if we read the edge as "dependent → prerequisite"). A topological order is exactly the order in which concepts can be taught: every concept appears after all of its prerequisites. A graph with a cycle has no topological order, which is one concrete reason acyclicity matters.

**Transitive reduction.** A DAG can be reduced to its *transitive reduction* — the minimum set of edges that preserves reachability. If A depends on B and B depends on C, the direct edge A → C is transitively redundant: the dependency is already implied by A → B → C. Maintaining the transitive reduction keeps the visual graph readable and prevents an edge explosion as the concept count grows. The `learning-graph-generator` skill produces both the full dependency graph and the transitive reduction, and the graph viewer defaults to the reduction.

**Multiple valid orderings.** A DAG with 200 concepts typically admits many topological orderings. The chapter-structuring skill uses this freedom to allocate concepts to chapters in a way that balances chapter length, groups thematically related concepts, and respects pedagogical constraints that the bare dependency structure does not encode. Two textbooks with identical learning graphs can legitimately differ in chapter order.

#### Diagram: A Small Learning Graph, Its Topological Ordering, and Its Transitive Reduction

<details markdown="1">
<summary>Side-by-side diagram showing a small sample learning graph with eight concepts, one valid topological ordering numbered along the left, and the graph's transitive reduction with the redundant edges grayed out</summary>
Type: diagram
**sim-id:** dag-topological-reduction<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram composed of two side-by-side panels sharing the same eight-concept graph. Nodes: *Working Memory*, *Chunking*, *Schema*, *Retrieval Practice*, *Spacing Effect*, *Desirable Difficulty*, *Deliberate Practice*, *Transfer*. Edges (from dependent to prerequisite, per project convention): *Chunking → Working Memory*; *Schema → Chunking*; *Retrieval Practice → Working Memory*; *Spacing Effect → Retrieval Practice*; *Desirable Difficulty → Spacing Effect*; *Desirable Difficulty → Retrieval Practice*; *Deliberate Practice → Desirable Difficulty*; *Deliberate Practice → Schema*; *Transfer → Schema*; *Transfer → Deliberate Practice*.

Left panel: the full graph with every edge shown. A numbered list along the left margin shows one valid topological ordering — *Working Memory (1), Chunking (2), Schema (3), Retrieval Practice (4), Spacing Effect (5), Desirable Difficulty (6), Deliberate Practice (7), Transfer (8)* — with the note "one of several valid orderings."

Right panel: the same graph with transitively redundant edges de-emphasized (rendered as dashed gray lines). The candidate for reduction is the *Desirable Difficulty → Retrieval Practice* edge, which is already implied by *Desirable Difficulty → Spacing Effect → Retrieval Practice*. A caption explains that the transitive reduction preserves reachability with fewer edges and is what the graph viewer renders by default.

Implementation: Mermaid `flowchart TD` with two `subgraph` blocks and `classDef` styling for the dashed reduced edges. Embedded directly in the chapter markdown.
</details>

### Concept Node and Concept Edge

A ***concept node*** is one knowledge unit. The schema the project uses is deliberately small: every extra field is a field that must be filled on every regeneration, so we stay close to the minimum that supports the downstream skills.

| Field | Type | Purpose |
|---|---|---|
| `id` | integer | Stable identifier used by every edge and artifact that references the concept |
| `name` | string | Canonical concept name, used in chapters, glossaries, quiz tags |
| `definition` | string | Short, non-circular, business-rule-free gloss (see the `glossary-generator` skill) |
| `taxonomy` | string | Seven-domain tag or a project-specific tag (e.g., FOUND, MOT, UND, RET, APP, EXP, MEAS, COND, PRIV, ARCH) |
| `chapter` | string | Chapter the concept is taught in (assigned by the `book-chapter-generator` skill) |
| `bloom_level` | string | The cognitive level at which the concept is targeted |
| `status` | string | `proposed`, `approved`, or `deprecated` |

A ***concept edge*** is one prerequisite relationship. The project's dependency-direction convention — edge goes *from dependent to prerequisite* — is the first thing a contributor needs to know, because the same edge pair means opposite things depending on convention. The `learning-graph.json` file and the viewer at `docs/sims/graph-viewer/` both assume the "dependent → prerequisite" orientation.

| Field | Type | Purpose |
|---|---|---|
| `from` | integer | The dependent concept's `id` |
| `to` | integer | The prerequisite concept's `id` |
| `kind` | string (optional) | `conceptual`, `notational`, `procedural` |
| `note` | string (optional) | Short justification for the dependency |

### Concept Dependency

A ***concept dependency*** is the relationship an edge encodes. A useful working definition: *A depends on B if a reader who does not know B will not be able to understand A on first encounter without a forward reference*. That definition is intentionally operational — it is a test the author can run in their head rather than a metaphysical claim about the nature of knowledge.

Three categories of dependency are worth distinguishing, because they lead to different remediation when a chapter tries to violate them.

A **conceptual dependency** is the one we most often mean: you need the idea of *working memory* before the idea of *cognitive load*, because cognitive load is defined in terms of working-memory capacity. Violating a conceptual dependency usually means the prerequisite concept needs to be introduced earlier, or the dependent concept needs to be deferred.

A **notational dependency** is more mechanical: a reader who has not seen the Rasch logit equation cannot read a sentence that uses \(\theta\) and \(b\) without loss. Notational dependencies are often best resolved by inlining a one-sentence notational gloss rather than by pulling the prerequisite forward.

A **procedural dependency** shows up in worked examples and MicroSims: a simulation that asks the reader to tune a slider assumes the reader knows how sliders work. The remediation is usually to demonstrate the procedure once in a low-stakes earlier context rather than to reorganize the concept graph.

Maintaining the *transitive reduction* of the concept-dependency graph is the structural habit that keeps the graph from bloating. Every time a contributor proposes an edge A → C, the graph-generator's validator asks: is C already reachable from A by some other path? If so, the edge is redundant and should not be added. If not, the edge is informative and should be added explicitly.

## Chapter Outline and Chapter Content Authoring

The chapter-generation pipeline has two stages, and treating them as one stage is one of the more common ways authors tangle themselves.

The first stage produces a ***chapter outline*** — a structured plan for the chapter. The outline file is a small Markdown file containing the chapter title, a one-paragraph summary, the list of concepts covered (drawn from the learning graph), the prerequisites (drawn from the concepts' dependency edges), and any *Required Content Directives* that future regenerations must respect. The file the reader is looking at right now was produced from an outline that, among other things, demanded the Five Levels subsection and the privacy-warning admonition. The directives live in the outline precisely because they outlive any individual generation run.

The second stage is ***chapter content authoring*** — the generation of the chapter's prose, admonitions, tables, retrieval checks, and non-text-element specifications against the outline. The `chapter-content-generator` skill consumes the outline, the learning graph, the style guide, and the prior chapters, and produces a long-form Markdown file. A re-generation is not a rewrite from scratch; it is a deterministic-by-design re-run of the same pipeline on (possibly) updated inputs.

Separating the two stages buys three properties.

**Idempotence under unchanged inputs.** Running the pipeline twice on the same inputs should produce substantively the same chapter. Idempotence is what makes the pipeline safe to re-run every time the learning graph changes.

**Targeted regeneration.** A graph refactor that touches three concepts can regenerate just the chapters those concepts are assigned to, leaving other chapters untouched. Without the outline/content split, the whole book would have to be regenerated on every change.

**Directives that survive regenerations.** A `Required Content Directives` section in the outline is the structural place to park constraints — like the privacy-warning admonition — that must appear in every version of the chapter. The generator reads them as input, not as something it might choose to keep.

## Derived Artifacts: Glossary, FAQ, Quiz Bank, References

Four artifacts are *derived* from the combination of the learning graph and the chapters. Derived means they are regenerated by their own skills against the same source of truth, not hand-maintained alongside it.

The ***glossary*** has one entry per concept node, produced by the `glossary-generator` skill. The skill's style rules — precise, concise, distinct, non-circular, free of business rules — come from long experience with glossaries that fail in recognizable ways. A circular definition ("*working memory* — the memory system used for working memory tasks") teaches nothing; a business-rule definition ("*working memory* — the part of memory the product's dashboard highlights") ties the glossary to a specific deployment rather than the discipline.

The ***FAQ section*** is a curated set of reader-oriented Frequently Asked Questions derived from chapter content, anticipated points of confusion, and — once the book is deployed — reader feedback. The `faq-generator` skill builds it. Two structural moves keep the FAQ useful. First, every FAQ answer links back to the chapter and section that treats the underlying concept, so the FAQ serves as an entry point rather than an independent island of content. Second, FAQs are not a dumping ground for content that could not find a chapter; content that appears *only* in the FAQ has failed to earn its place in the book.

The ***quiz bank*** is the collection of assessment items produced by the `quiz-generator` skill. Each item is tagged with the concept(s) it assesses, the Bloom level it targets, and the chapter that contains the concept. The tagging is what lets the book metrics tell us whether a chapter's assessment is distributed across Bloom levels or collapsed at *Remember*, and it is what lets future re-orderings move items alongside the concepts they test.

The ***reference list*** is the per-chapter curated reading list produced by the `reference-generator` skill. The project convention is ten references per chapter, prioritizing Wikipedia for reliability and stability, with each reference annotated for relevance to the chapter's topics. References are stored in separate `references.md` files per chapter rather than inlined, which keeps the chapter Markdown small enough to fit comfortably inside the chapter-generator's context window — a token-budgeting move we return to below.

| Artifact | Skill | Source of truth | Regeneration trigger |
|---|---|---|---|
| Glossary | `glossary-generator` | Learning graph (concept nodes) | Concept added, renamed, or its definition edited |
| FAQ | `faq-generator` | Learning graph + chapter content + reader questions | Major chapter revision or a batch of new reader questions |
| Quiz bank | `quiz-generator` | Learning graph + chapter content | Concept added or chapter content significantly revised |
| References | `reference-generator` | Chapter outline (topics) + course description | New chapter or a chapter's scope has shifted |

## Packaging: Table of Contents, Navigation, Search, Print

The packaging layer is MkDocs Material's responsibility, which is why it barely appears in the source repository outside `mkdocs.yml`.

The ***table of contents*** is generated from the chapter file structure and the `nav` section of `mkdocs.yml`. A chapter reorder is a one-line edit; the TOC that appears in the sidebar, at the top of each chapter, and in the print build all regenerate from that single source.

***Site navigation*** — the sidebar, the next/previous links at the chapter bottom, the breadcrumbs at the chapter top — is produced by the Material theme from the same `nav` tree. A project convention worth re-stating here: *no `navigation.tabs`*. The tabs-at-top pattern breaks the side-nav affordance the book relies on. If a contributor reintroduces `navigation.tabs` in `mkdocs.yml`, the build should be failed on review.

The ***search index*** is built by MkDocs's built-in search plugin at `mkdocs build` time by tokenizing the chapter Markdown and serializing a client-side index the browser consumes at runtime. Two design consequences follow. First, the search runs entirely in the browser — there is no server-side query handler, and therefore no per-search log to worry about. Second, the index is rebuilt on every deploy, which means search freshness is a function of deploy cadence rather than a separate cron.

***Print-friendly output*** is the build target that renders the entire book as a single continuous HTML document suitable for printing to PDF. The `mkdocs-with-pdf` plugin (or a custom print stylesheet) stitches the chapters together in TOC order, removes interactive elements that do not make sense on paper (sliders, buttons, collapsible `<details>` blocks), and applies a print stylesheet that controls page breaks, footers, and figure placement. The print target is regenerated from the same chapter Markdown the site uses, which is why authoring never involves a "print version" as a separate file.

One footgun worth flagging explicitly: a whitelist exporter that silently drops any chapter-level YAML field it does not recognize is a classic silent-failure shape. A new `audio` or `video` field added to a chapter's frontmatter that is silently dropped by a print build produces a chapter whose metadata is quietly lost in the print artifact with no warning. The structural fix is to spread the source frontmatter into the export rather than selecting named fields, and to fail the build when an unknown required field is seen. The footgun's three properties apply cleanly here: the drop is silent (no error), it is easy to trigger (add a field), and the damage is delayed (you discover it only when someone asks why the print version lacks the audio reference). We return to this pattern in Chapter 14 when we discuss skill design.

## AI Tooling Foundations

The authoring pipeline consumes prompts, runs them through Claude, and dispatches the results into the artifact tree. Three controls shape what the model produces — prompt engineering, the context window, and the token budget — and a fourth abstraction — the SKILL.md format — packages the controls into something reusable.

### Prompt Engineering

***Prompt engineering*** is the practice of structuring the inputs to a large language model so that its outputs reliably serve a specific purpose. It is not magic, and it is not prose alone. A production-grade prompt is a structured message made of several components that the model's training has learned to interpret.

Three structural moves matter most.

**System, user, and assistant roles.** The Claude API distinguishes the *system* role (the persistent instructions and persona that apply across the whole conversation), the *user* role (the current request), and the *assistant* role (the model's prior responses). The system role is where project-wide constraints live — the style guide, the schema conventions, the "never use the word *obviously*" rule. The user role is where the immediate request lives — "generate Chapter 10 content against this outline." The assistant role is where prior turns of the conversation appear. Keeping the roles separated, rather than concatenating everything into a single blob, is what lets the model apply global constraints to a local request.

**Instruction-following vs. completion framing.** Modern Claude models are trained as instruction-followers — give them a directive and an output schema and they execute. Older completion-style models expected a prose prefix and continued it. The two framings produce different behaviors even from the same underlying model capability; this book assumes the instruction-following framing throughout.

**In-context learning.** LLMs learn patterns from examples shown in the prompt itself, a phenomenon called *in-context learning*. A prompt that shows the model two or three examples of the desired output format ("here is how previous chapters structured their retrieval checks") will reliably elicit that format, without any fine-tuning or model update. Few-shot prompting — showing a handful of examples — is the bread-and-butter move of prompt engineering, and it is the reason the style guide is worth reading into the prompt rather than merely referenced.

### Context Window

The ***context window*** is the total number of tokens the model can attend to in a single request — system role, user role, assistant history, and the in-flight response all share it. The window has an architectural origin: the transformer's attention mechanism has a hard upper bound on the sequence length it can process. Claude Opus 4.7 at the time of writing offers a 1-million-token context; earlier models had 200 thousand; GPT-class models vary. The specific number will keep moving; the fact that it is *bounded* will not.

Two practical consequences follow from the context-window bound.

**Retrieval beats concatenation.** When the source material exceeds the window, you cannot fit it all in. The pipeline has to *retrieve* the relevant slices — the chapter outline, the prior chapter, the style guide, the concept subgraph — rather than concatenate everything. Retrieval strategies (embedding-based, keyword-based, structured-query-based) are a whole sub-discipline in their own right.

**Position matters.** Even within a window that fits, the model's attention is not uniform — tokens near the start of the prompt (especially in the system role) and tokens at the end (the recent request) get more weight than tokens in the middle. Long prompts can suffer from the *lost-in-the-middle* effect, where a constraint stated in the middle of a 50,000-token prompt is ignored in favor of constraints stated at the ends. The structural fix is to put high-priority directives in the system role or at the end of the user role, not buried in the middle.

### Token Budgeting

***Token budgeting*** is the practice of estimating, constraining, and measuring the token cost of a pipeline's prompts and completions. Tokens are the unit the model charges on, the unit the context window is measured in, and the unit the prompt cache is keyed on. Running a chapter-generation pipeline without thinking about tokens is like running a web service without thinking about HTTP requests — it will work until suddenly it does not.

Three practical levers control token cost.

**Instruction depth.** How much of the style guide, the outline, and the prior chapters do you read into the prompt? Reading in more increases fidelity at linear token cost. Reading in less increases the risk of drift from project conventions. The pipeline's heuristic: read in the entire style guide once (it is a few thousand tokens), the outline in full, and a *summary* of the prior chapters rather than their full text.

**Output length.** The completion is also billed per token. A chapter targeting 6,000 words of prose is roughly 8,000 tokens out; the surrounding admonition markup and tables add another 2,000. Setting a deliberate output-length target is the structural move that prevents runaway completions.

**Prompt caching.** Anthropic's prompt cache stores the model's attention state for a prefix of the prompt for five minutes, so that repeated runs with the same system role and the same leading user-role content pay the cache-hit price rather than the full-prefix price. The five-minute window has a sharp consequence for pipeline design: runs scheduled closer than five minutes apart benefit; runs scheduled further apart do not. We return to this in the causal-loop diagram below.

#### Diagram: Token Budget Explorer

<details markdown="1">
<summary>MicroSim: interactive token-budget calculator with sliders for instruction depth, output length, and run cadence; shows budget utilization and cache hit status</summary>
Type: microsim
**sim-id:** token-budget-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that makes token budgeting visible. The canvas shows a horizontal budget bar representing the context window (default 1,000,000 tokens), filled from left to right by colored segments: *system role*, *style guide*, *outline*, *prior-chapter summary*, *learning-graph subgraph*, *in-flight response*. A secondary panel shows the prompt-cache timer (a shrinking bar with a 300-second TTL) and a cost-per-run readout.

Controls (using built-in p5.js controls per project convention):

- **Instruction-depth slider** — 1 (minimal) to 10 (full style guide + full prior chapters). Moves the *style guide* and *prior-chapter summary* segments wider or narrower.
- **Output-length slider** — 500 to 15,000 tokens. Moves the *in-flight response* segment.
- **Context-window dropdown** — 200k, 400k, 1M. Redraws the bar scale.
- **Run-cadence slider** — 60s to 3600s. The cache-timer panel shows whether each scheduled run lands inside the 5-minute cache window or outside it; outside-window runs get a warning icon.
- **Reset button** — restore defaults.

A caption reports the total token usage, the remaining budget, the estimated cost per run (at a sample rate), and whether the run is a cache hit or a cache miss. The MicroSim uses no real API calls — it is purely a budget visualizer.

Learning objective (Bloom level: Apply): *Given a target chapter length and a style-guide size, choose a run cadence that keeps the pipeline inside the prompt-cache window and the context-window bound.*

Canvas responsive via `updateCanvasSize()` as the first line of `setup()`; parented to the standard `<main></main>` element so the sketch can be pasted into the p5.js editor.

Implementation: p5.js sketch in `/docs/sims/token-budget-explorer/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
</details>

!!! mascot-thinking "Cache Windows Change the Shape of the Pipeline"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    The five-minute cache window is not a minor optimization; it changes which batch shapes are cheap. Regenerating five chapters in a loop that takes two minutes each keeps every run inside the cache. Regenerating the same chapters once per hour pays the full prefix cost every time. When the pipeline is slow and expensive, look at the cadence before looking at the model.

### The SKILL.md Format

An ***Agent Skill*** is a modular, reusable capability an IDE harness can invoke by name; Chapter 1 introduced the idea, and this chapter names its shape. At the skill's root is a ***SKILL.md format*** file: a Markdown document whose frontmatter and sections describe when the skill applies, what it does, and how to run it. The format is deliberately small, because every field is a field future maintainers must keep current.

| Section | Purpose | Example |
|---|---|---|
| YAML frontmatter | Machine-readable metadata: `name`, `version`, `description`, `trigger`, `inputs`, `outputs` | `name: chapter-content-generator` |
| `## Description` | One paragraph, human-readable, answering *what does this skill do?* | "Generates chapter Markdown from an outline and the learning graph." |
| `## When to use` | Trigger hints — concrete natural-language phrasings and project conditions that should route to this skill | "Trigger when a chapter index.md exists with a TODO placeholder." |
| `## Inputs` | Named inputs, their types, and where the skill expects them | "`outline_path` — path to `docs/chapters/NN-name/index.md`" |
| `## Steps` | Ordered, numbered procedure the skill performs. This is the operational core of the skill. | "1. Read outline. 2. Load style guide. 3. Draft. 4. Write." |
| `## Outputs` | Named artifacts the skill produces, with paths | "Overwrites the `TODO: Generate Chapter Content` placeholder in the outline file." |
| `## References` | Pointers to deeper documentation, reference implementations, and related skills | Links to style guide, learning-graph spec |
| `## Changelog` | A dated, short history of non-trivial changes to the skill | "2026-04-19: added Required Content Directives support." |

Two properties make skills reusable across projects. First, **skills are side-effect-explicit**. The `## Outputs` section names every file the skill will write; a skill that silently edits files outside its declared output surface is broken. Second, **skills are composable**. The `reference-generator` skill does not re-implement chapter parsing; it calls conventions that the `chapter-content-generator` skill also follows. The convergence on a shared convention — chapter files in `docs/chapters/NN-name/index.md`, sims in `docs/sims/sim-id/main.html`, the learning graph at `docs/data/learning-graph.json` — is what makes the skill ecosystem cooperative rather than balkanized.

### Skill Invocation

***Skill invocation*** is the harness's act of routing a prompt to the skill that matches it. The harness reads the `When to use` section of each skill's `SKILL.md`, compares the trigger hints against the current user request and project state, and either invokes a single skill or — if the match is ambiguous — asks the author to choose. The invocation passes the user's request, the project context, and any explicit inputs to the skill's entry point; the skill's `Steps` section runs; the harness reads the `Outputs` and surfaces them to the author.

Three invocation patterns recur across this project.

**Explicit invocation.** The author types `/chapter-content-generator` (or names the skill in natural language: "run the chapter-content-generator skill on Chapter 10"). The harness routes directly; there is no ambiguity.

**Implicit invocation.** The author types a request in natural language ("please generate Chapter 10") and the harness matches it against skill trigger hints. The match is probabilistic; the harness surfaces the chosen skill and proceeds.

**Chained invocation.** One skill invokes another as part of its own steps. The `book-chapter-generator` skill calls the `course-description-analyzer` skill to validate its inputs; the `book-metrics-generator` skill calls the `glossary-generator` to recount terms. Chaining is powerful and also a source of runaway complexity; the project's rule is that a skill may call at most one other skill, and deeper chains go through the harness rather than skill-to-skill.

#### Diagram: The Authoring Pipeline — Prompt to Published Site

<details markdown="1">
<summary>Diagram of the end-to-end authoring pipeline: author prompt → harness → skill → Markdown → mkdocs build → deployed site</summary>
Type: diagram
**sim-id:** authoring-pipeline-architecture<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart LR` diagram showing six horizontal stages, each labeled and colored distinctly on a blue-to-orange palette.

1. *Author* — prompt or natural-language request.
2. *IDE Harness (Claude Code)* — receives request, reads `SKILL.md` files, selects a matching skill.
3. *Agent Skill* — runs its Steps; reads shared inputs (learning graph, style guide, prior chapters); writes Markdown.
4. *Markdown Files* — the chapter, glossary entry, quiz file, reference list.
5. *MkDocs Material Build* — converts Markdown to HTML, builds the search index, renders navigation, applies the print stylesheet.
6. *Deployed Site* — GitHub Pages URL served from the `gh-pages` branch.

Secondary arrows show:

- *Author → Harness* (primary request)
- *Harness → Skill* (invocation)
- *Skill ↔ Shared Inputs* (learning graph, style guide)
- *Skill → Markdown* (write)
- *Markdown → Build → Site* (deployment)
- *Site → Author* (preview loop at `http://127.0.0.1:8000/learning-sciences/` during development; deployed URL in production)

A side panel labels the three control surfaces we have discussed — *Prompt*, *Context Window*, *Token Budget* — and draws arrows from them into the Harness and Skill stages to indicate where each control lands in the flow.

Implementation: Mermaid `flowchart LR` with `classDef` for the stage colors and a `subgraph` for the control-surface side panel. Embedded directly in the chapter markdown.
</details>

## The Five Levels of Intelligent Textbooks

Not every intelligent textbook sits at the same point on the interactivity-and-personalization spectrum, and conflating the levels produces most of the category confusion that surrounds the term in marketing copy. The classification framework introduced by McCreary and colleagues in *A Five-Level Classification Framework for Intelligent Textbooks: Lessons from Autonomous Vehicle Standards* borrows its shape from the Society of Automotive Engineers' J3016 standard for autonomous vehicles — a five-tier specification that gives a shared vocabulary for a capability spectrum whose levels carry very different engineering, regulatory, and operational commitments. Chapter 1 introduced the levels briefly; here we give each level its architectural treatment and name the transition that changes the game.

1. **Level 1 — Static.** Fixed content, no interactivity. The traditional printed or PDF textbook. The reader cannot interact with the content; the content cannot interact with the reader. Architecturally, a Level 1 book is a document.
2. **Level 2 — Interactive.** Learning graphs, MicroSims, embedded simulations, and path recommendations generated from the graph, with *no storage of individual student records*. The reader interacts with the content; the content does not remember the reader between sessions. Aggregate, anonymized analytics (cohort completion rates, chapter-level averages) are compatible with Level 2.
3. **Level 3 — Adaptive.** Personalization driven by stored student goals, progress, and behavioral history. The textbook adapts what the reader sees based on what the reader has done. Storage of a per-learner record is the defining architectural addition.
4. **Level 4 — Chatbot.** Conversational tutoring via a large language model, typically layered on top of an adaptive substrate. The reader converses with an LLM that retains session context and, commonly, conversation history across sessions.
5. **Level 5 — Autonomous.** Real-time generation of fully personalized instruction for each learner. Every reader sees a bespoke book that the system composes, modifies, or regenerates as the learning trajectory unfolds.

**This book targets Level 2, and does so deliberately.** The scope choice is not timidity; it is an architectural commitment with three consequences we want to hold visible.

*Level 2 is where a solo author or small team can ship responsibly.* Every pattern in this book — the learning graph, the MicroSims, the aggregate metrics dashboard, the glossary regeneration, the mascot voice layer — runs without a student record store, a consent flow, a retention policy, or a breach-notification playbook. A capable author with a laptop, a GitHub account, and a budget for LLM API calls can produce Level 2 work; the same author cannot produce Level 3 work responsibly without institutional partnership.

*Level 2 content is commoditizing faster than most teams realize.* The METR finding on frontier AI task-capability growth — that the length of tasks an AI system can reliably complete roughly doubles every seven months, a trend that has held across several years of independent evaluations — has a direct implication for the Level 2 layer. The production of high-quality Level 2 content (chapter prose, MicroSims, quiz items, glossaries) is the kind of task whose time-to-completion that trend is compressing. Two years from now, producing a Level 2 chapter that today takes a small team a week will take a single author an hour. *Producing* Level 2 is becoming cheap; *producing it well* — with the pedagogical discipline the first nine chapters of this book defend — is what separates valuable work from the content flood.

*Level 3+ is where the durable strategic moat sits for educational organizations.* If Level 2 is commoditizing, then the work that justifies an institution's continued existence is the work that sits on top of Level 2 — the adaptive personalization, the conversational tutoring, the real-time generation — which all require the per-learner data-governance infrastructure that Level 2 does not. Organizations that will thrive in the 2028 landscape are the ones that learn to operate Level 3+ responsibly: with the consent flows, the retention policies, the audit logging, and the algorithmic-accountability practices that turn stored student data into a durable asset rather than a compliance liability. This book is not the place to learn those practices; this book is the place to acquire the Level 2 fluency that makes the Level 3 move possible and to name the regulatory line you are about to cross before you cross it.

The table below summarizes the five levels along the dimensions that matter most for architectural decisions. The cost-per-student-per-day numbers are order-of-magnitude estimates at 2026 prices and will move; the ratios between levels will move less.

| Level | Interactivity | Student Data Stored | Typical Cost per Student per Day (2026, order of magnitude) | Regulatory Surface | Example Product or Pattern |
|---|---|---|---|---|---|
| 1 — Static | None | None | ~$0 | Minimal (copyright, accessibility) | Printed textbook, PDF course reader |
| 2 — Interactive | MicroSims, learning graphs, path recommendations | None (aggregate analytics only) | ~$0.01 (hosting + occasional LLM batch regeneration) | Minimal (accessibility, cookie notice, standard web) | This book; most Khan Academy pre-AI content; CK-12 FlexBooks |
| 3 — Adaptive | Level 2 plus personalized sequencing | Per-learner goals, progress, behavioral history | ~$0.10–$0.50 (record store, backup, compliance tooling) | FERPA, COPPA (if under 13), GDPR, CCPA/CPRA; data minimization, consent, retention, access/deletion, encryption, audit logging | ALEKS, Knewton (historical), adaptive courseware in LMS |
| 4 — Chatbot | Level 3 plus conversational tutoring | Per-learner conversation history, session context | ~$1–$10 (per-learner LLM inference, longer context windows, conversation storage) | All of Level 3 plus algorithmic-accountability obligations for AI-driven feedback | Khanmigo, Duolingo Max, MATHia chat features |
| 5 — Autonomous | Full real-time generation of personalized content | Full per-learner generation state, often with cross-session memory | ~$5–$50+ (continuous generation, long-context inference, high-fidelity retrieval) | All of Level 4 plus heightened scrutiny of automated decision-making, data-protection impact assessments | Emerging research prototypes; bespoke tutor-as-a-service products |

### The Level 3 Privacy Inflection

!!! mascot-warning "The Moment You Store Student Data, the Rules Change"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom warning about student data">
    I need you to slow down for this one. Moving from Level 2 to Level 3 means **storing individual student data** — a learner's goals, progress, behavior, quiz attempts, and performance tied to an identifiable human being. The instant that first `student_id` column appears in a database, your project has crossed from a document-with-MicroSims into a *highly regulated domain*. In the United States, **FERPA** (the Family Educational Rights and Privacy Act) governs educational records for K-12 and higher education, and **COPPA** (the Children's Online Privacy Protection Act) attaches verifiable-parental-consent requirements for any user under 13. For European Union residents, **GDPR** applies with some of the strictest data-subject protections anywhere in the world. In California — and, increasingly, in a dozen other states following the same pattern — **CCPA** and **CPRA** add a state-level layer on top of federal law. The obligations that attach the moment you store the first identifiable record are real, auditable, and cumulative: *data minimization* (collect only what you genuinely need), *informed consent* (often parental for minors), *explicit purpose limitation* (you may not quietly repurpose the data you collected), *retention limits* (you must delete on a schedule you can describe precisely), *access and deletion rights* (students and parents can ask for records and ask you to erase them), *encryption at rest and in transit*, *audit logging* (every access leaves a trail), *third-party processor agreements* (every vendor that touches the data is bound by your compliance posture), and — when automated decisions affect the learner — *algorithmic bias auditing*. None of that is in scope for this course. Nothing in this book teaches a reader how to operate a Level 3+ system responsibly, and crossing the threshold without that expertise creates real legal, ethical, and reputational risk. **The actionable guidance is the same in both directions.** Level 2 is a safe, productive place to build; most of the pedagogical value you care about is available without ever collecting a per-learner record. If a project genuinely needs Level 3+ capabilities, partner with an institution that already has data-governance infrastructure — a university registrar's office, a K-12 district's technology department, an LMS vendor with an existing compliance posture — and adopt open standards like **xAPI** (the Experience API) paired with a **Learning Record Store** so that students retain control and portability of their own records. We do not collect student data because we have not earned the right to handle it. When you earn it, you will know — and the partner you earn it with will be the one telling you the rest of what this admonition left out.

### Architecture: Level 2 Components vs. the Level 3 Delta

The privacy warning above is a regulatory statement. It is also, and this is the contribution this chapter makes that [Chapter 8](../08-measurement-feedback/index.md) deferred, an *architectural* statement. The jump from Level 2 to Level 3 is not a feature addition; it is the appearance of an entire infrastructure layer the book did not need before. The table below lists the component inventory.

| Component | Level 2 | Level 3 delta |
|---|---|---|
| Learning graph | Present | Present (unchanged) |
| Chapters, glossary, quiz bank, references | Present | Present (unchanged; may be per-learner-filtered) |
| MicroSims, stories | Present | Present (unchanged) |
| Site build (TOC, nav, search, print) | Present | Present (unchanged) |
| Aggregate analytics (cohort-level, no PII) | Present | Present (extended with per-learner roll-ups) |
| **Student record store** | Absent | **New.** Relational or document database storing `student_id`, goals, progress, behavior, performance. Requires backups, retention policy, encryption at rest. |
| **Session state** | Absent | **New.** Per-learner ephemeral state (current chapter, current reading position, current MicroSim parameters) that must be associated with `student_id` across visits. |
| **Authentication and identity** | Absent (or optional at the organization level) | **New.** Login flow, password or SSO handling, account recovery, session cookies. |
| **Consent flow** | Absent | **New.** Consent capture at onboarding, versioned consent records, support for withdrawal. Parental consent flows for COPPA if applicable. |
| **Audit log** | Absent | **New.** Append-only record of every access to per-learner data, with who, when, and why. Retained per regulation. |
| **Encryption at rest and in transit** | Transport-only (HTTPS) | **New at rest.** Disk-level or field-level encryption for the student record store, key management, rotation. |
| **Purge and deletion workflow** | Absent | **New.** Scheduled deletion per retention policy; on-demand deletion per GDPR/CCPA access requests. |
| **Third-party processor agreements (DPAs)** | Generally not required | **New.** Every vendor that touches PII (database host, backup provider, analytics vendor, LLM provider if data crosses its boundary) requires a signed data processing agreement. |
| **Algorithmic-accountability review** | Not applicable | **New when automated decisions affect the learner.** Bias auditing, impact assessments, documented model governance. |
| **Breach-notification playbook** | Not required | **New.** Documented response procedure with regulator and data-subject notifications within the statutory window (72 hours under GDPR). |
| **Per-learner LLM inference infrastructure (Level 4+)** | Absent | **Further new at Level 4.** Per-session context management, conversation-history storage, per-learner prompt caching, rate limiting. |

Two things about this table are worth holding onto. The first is that *each new component is not one artifact but a whole operational practice*. A student record store is not a database schema; it is a database schema plus a backup policy plus a retention schedule plus an on-call rotation for when the backup fails plus a breach-notification playbook plus a DPA template plus a legal review for every schema change. The second is that *every new component is a new failure surface*. The moral weight of operating them is proportional to what they protect — and what they protect is the record of a human being learning, which is exactly the kind of record whose misuse damages trust in education as a whole.

Choosing Level 2 is, structurally, the choice to leave the entire right column empty. That is not a small choice; it is the reason a solo author or a two-person team can produce an intelligent textbook at all.

## Authoring-Pipeline Dynamics: A Causal Loop

The pieces from earlier in this chapter — the learning graph, the chapter outlines, the chapter content, the derived artifacts, the token budget, the skill invocations — do not sit still. They move in relation to each other, and two loops in particular govern whether the pipeline runs as a productive flywheel or as a rework trap.

#### Diagram: Authoring Pipeline Dynamics — Graph-Quality Flywheel vs. Token-Pressure Trap

<details markdown="1">
<summary>Causal loop diagram contrasting R1 (the graph-quality flywheel, productive) with B1 (the token-pressure trap, corrosive) in the intelligent-textbook authoring pipeline</summary>
Type: causal-loop-diagram
**sim-id:** authoring-pipeline-dynamics<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing ten variable-nodes and two named loops. All nodes are noun phrases naming variables that can go up or down.

Nodes for R1 (graph-quality flywheel, productive): *learning-graph quality*, *generated-artifact quality*, *author-iteration rate*, *graph-refinement rate*, *pipeline confidence*.

Nodes for B1 (token-pressure trap, balancing-but-corrosive): *chapter-content size*, *token-budget pressure*, *context-window truncation*, *generation inconsistency*, *rework cost*.

Edges and polarities for R1:

- learning-graph quality → generated-artifact quality (+) — a clearer graph produces clearer artifacts
- generated-artifact quality → author-iteration rate (+) — an author who trusts the artifacts iterates more
- author-iteration rate → graph-refinement rate (+) — each iteration surfaces a graph improvement
- graph-refinement rate → learning-graph quality (+, with delay marker ⧚) — refinements accumulate
- generated-artifact quality → pipeline confidence (+) — visible quality reinforces the author's willingness to trust the pipeline

Edges and polarities for B1:

- chapter-content size → token-budget pressure (+) — longer chapters cost more tokens per run
- token-budget pressure → context-window truncation (+) — pressure forces the pipeline to drop prior-chapter context
- context-window truncation → generation inconsistency (+) — dropped context produces style, voice, and schema drift
- generation inconsistency → rework cost (+) — drift is caught on review and fixed by hand
- rework cost → author-iteration rate (−) — time spent on rework is time not spent on refinement, starving R1
- token-budget pressure → author-iteration rate (−) — expensive runs are run less often

Loop labels at each loop's geometric center:

- **R1 — Graph-quality flywheel (reinforcing, productive).** Graph quality raises artifact quality, which raises iteration rate, which raises graph-refinement rate, which raises graph quality.
- **B1 — Token-pressure trap (balancing, corrosive).** Chapter size raises token pressure, which forces truncation, which creates inconsistency, which creates rework, which throttles iteration — starving R1.

The cross-link *rework cost → author-iteration rate (−)* is rendered in a distinct warning color to show how B1 leaks into R1. Delay marker ⧚ on the graph-refinement-rate → learning-graph-quality edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A two-paragraph walkthrough accompanies the diagram in the prose that follows.
</details>

Read loop **R1** — the graph-quality flywheel — in plain English. A well-structured learning graph, with clean concept nodes and a valid transitive reduction, feeds clean inputs to every downstream skill. Clean inputs produce higher-quality generated artifacts — chapters whose prose reads as coherent, glossaries whose entries are non-circular, quiz banks whose items are tagged correctly. When the artifacts are visibly high-quality, the author iterates more: they run the pipeline against a broader set of chapters, they refine edges they had been hesitant to touch, they propose new concepts whose definitions they can test immediately. Each iteration surfaces graph improvements — a redundant edge, a missing dependency, a concept whose definition is too narrow — which feed back into graph quality. Each trip around R1 makes the next trip a little easier.

Read loop **B1** — the token-pressure trap — in plain English. As chapters grow (and the research chapters in this book are genuinely long), the chapter-generation prompt starts consuming more tokens — the outline, the style guide, the prior-chapter summaries, the concept subgraph. Token pressure rises. Under pressure, the pipeline has to truncate: it drops prior-chapter context, or compresses the style guide, or retrieves a smaller concept subgraph. Truncation produces generation inconsistency — a chapter whose voice drifts from the previous one, a retrieval check that does not match the style guide's conventions, a table that uses a different column order than the rest of the book. Inconsistency is caught on review and fixed by hand, which is rework. Rework throttles iteration — the author runs fewer regenerations because each one costs more time than it saves — which starves R1. The loop is balancing in the sense that it pushes back on pipeline activity, and it is corrosive in the sense that the push is exactly on the activity that keeps the graph healthy.

The lever the author has is not in the R1 loop itself but in the B1 loop: reduce the pressure and R1 runs. Three concrete moves do this. First, keep the chapter outline separate from the chapter content (the two-stage split from earlier in this chapter) so that the chapter-generation prompt does not have to re-read every directive on every run. Second, keep the references in a separate `references.md` file per chapter rather than inlined in the chapter Markdown, so the chapter text the next chapter's generation reads as "prior context" is smaller. Third, regenerate chapters in *batches scheduled inside the five-minute cache window*, so the leading prompt prefix is cached and the per-run cost drops dramatically. These are three different moves at three different layers — architecture, file layout, and scheduling — and all three are targeting the same loop.

## A Critical-Thinking Interlude: When Level 2 and When Level 3?

The directives that structure this chapter make a specific recommendation — *default to Level 2*. But a recommendation is not an argument, and a reader who takes the recommendation without being able to state the conditions under which it would flip is not thinking at the level this book is asking for. So the question worth holding: *under what conditions would you choose Level 3 over Level 2 for a specific project?*

A few answers are clearly insufficient. "Because the market expects personalization" is not a condition; it is a pressure. "Because a competitor does it" is not a condition; it is a status move. "Because the data would be useful" is a nearly universal condition and does not discriminate. The conditions that do discriminate are narrower.

*The pedagogical benefit of Level 3 is large and documented for the specific learner population.* Adaptive pacing produces measurable outcome gains in some contexts (procedural skill acquisition in well-structured domains like early arithmetic) and produces indistinguishable-from-non-adaptive outcomes in others (conceptual learning in open domains). A project that adopts Level 3 without evidence that adaptation helps its specific content is paying the compliance overhead for a personalization benefit that may not exist.

*The institution has already earned the right.* A university registrar's office, a K-12 district IT department, or an enterprise LMS vendor may already have the consent flows, the retention policies, the audit logging, and the breach-notification playbook that Level 3 requires. In that case the marginal cost of adding an adaptive textbook is the textbook's own engineering cost, not the full compliance layer. The author is not personally operating Level 3; the institution is, and the author is building on top of the institution's posture.

*The data collected respects minimization and is student-controlled.* If the per-learner record is the minimum needed for adaptation, is accessible and exportable by the student, is deletable on request, and is stored under xAPI in a Learning Record Store the student chose, the ethical calculus tips differently than it does for an opaque behavioral log the student cannot see.

The evidence that would change the answer in the other direction — away from Level 3 and back to Level 2 — is easier to find than the evidence for Level 3. A single well-designed A/B test against the Level 2 baseline that fails to show a meaningful outcome gain is often enough, because the compliance overhead of Level 3 does not vanish when the outcome gain does.

!!! mascot-encourage "This Is the Question That Will Keep Coming Back"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Bloom the elephant offering encouragement">
    If the Level 2 / Level 3 question feels unresolved after this chapter, good. The right answer is not "always Level 2" and it is not "always Level 3"; it is "*it depends on conditions you can name out loud*," and getting fluent with those conditions takes real time. Keep the question in front of you on every design decision that touches personalization — it will sharpen with use.

### A Goodhart Risk in Our Own Metrics

One more critical-thinking thread to pull before the retrieval check. The quality metrics we introduced in Chapter 8 — coverage, distribution, readability, structural — are measurements of the book itself, not of its learners, and are therefore inside Level 2. But Chapter 8 also named Goodhart's Law, the pattern in which *any measure that becomes a target ceases to be a good measure*, and the same law applies to our own quality metrics.

A chapter author who relentlessly optimizes against the "mascot admonition count ≤ 6" rule will eventually write chapters whose structure is shaped by the count rather than by pedagogical need. A project that optimizes against "Flesch-Kincaid grade level ≤ 14" will eventually write prose that hits the grade-level number by breaking long sentences whose length was the right choice. A generator that optimizes against the "every concept appears in exactly one chapter" rule will eventually slot concepts into the wrong chapter because the rule said to slot them somewhere.

The structural fix — the same one we named in Chapter 8 for A/B testing — is to triangulate. Pair every quality metric with at least one guardrail metric that would move in the wrong direction if the primary were being gamed. Pair the admonition-count rule with a qualitative review of whether each admonition changes what the reader does next. Pair the grade-level number with a sample read-aloud. Pair the one-chapter-per-concept rule with a dependency-edge check that catches concepts slotted before their prerequisites. A metric alone is a target; a metric with a guardrail is a measurement.

## Retrieval Check

Close the tab and try these from memory. Stumbling is diagnostic — it tells you which section to revisit. Resist scrolling before attempting each one.

1. **Name** the central structural spine of a Level 2 intelligent textbook and three artifacts derived from it. (Level: Remember.)
2. **State** the dependency-direction convention the project uses for concept edges, and give an example sentence that reads the convention out loud for a specific edge pair. (Level: Remember / Apply.)
3. **Explain** why a DAG admits a topological ordering and why a graph with a cycle does not. Describe one concrete workflow consequence. (Level: Understand.)
4. **Distinguish** a chapter outline from chapter content authoring, and state one pipeline property that the two-stage split buys. (Level: Understand.)
5. **Describe** the role of the system role in prompt engineering and name one class of content that should live there rather than in the user role. (Level: Understand / Apply.)
6. **Given** a 1-million-token context window, a 20,000-token style guide, a 12,000-token chapter outline, and a 50,000-token prior-chapter summary, calculate the token budget remaining for the in-flight response and state whether the run will fit inside the prompt-cache window. (Level: Apply.)
7. **List** the five levels of the intelligent-textbook classification, state which level this book targets, and give one architectural component that appears only at Level 3 or above. (Level: Remember / Analyze.)
8. **Critique** this design: "Our new textbook adds a small personalization feature that remembers each learner's last chapter and highlights three concepts from their recent quiz errors on the homepage." Name the level the design sits at, at least three regulations that attach, and one Level 2 redesign that would preserve most of the pedagogical benefit. (Level: Evaluate.)
9. **Evaluate** the claim that adopting Level 3 is the right move for any organization whose competitors have done so. What evidence would you need to see to change your answer either way? (Level: Evaluate.)
10. **Apply** the B1 token-pressure trap to a hypothetical pipeline whose chapter files have grown from 5,000 to 15,000 words each. Name the three concrete moves that reduce pressure, and trace which part of R1 each move frees up. (Level: Apply / Analyze.)

If questions 8, 9, or 10 produced genuine hesitation, that hesitation is the right kind. It means the question is more contested than a headline suggests, and you are reading it at the resolution it deserves.

## Bridge to Chapter 11

We now have the architecture: the learning graph as the spine, the derived artifacts that hang off it, the packaging layer MkDocs Material provides, the AI tooling foundations that shape every generator skill, the five-level classification that names where we are and where we are not going, and the infrastructure delta that the Level 3 regulatory inflection forces. What we do not yet have is the *interactive heart* of the book — the MicroSim patterns that turn a chapter from a page you read into an experiment you run. Chapter 11 turns there. We will look at the MicroSim as a design category, the controls that make one educational rather than merely interactive, the accessibility commitments that keep them usable for every learner, and the skill that generates them against the learning graph we just specified.

!!! mascot-celebration "The Architecture Is Yours"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom the elephant celebrating with trunk raised">
    You now have the component-level mental model for how an intelligent textbook holds together — graph as spine, chapters as generated artifacts, derived glossary and quiz and references, packaging from MkDocs, AI tooling as the control surface, and the Level 2 commitment that keeps the build tractable and ethical. Hold onto three headlines: *the learning graph is the source of truth*, *the five-minute cache window changes the shape of the pipeline*, and *we do not collect student data because we have not earned the right to handle it*. Next up: MicroSims — the interactive heart of the book, and the place where the architecture you now own meets the reader. See you in Chapter 11.
