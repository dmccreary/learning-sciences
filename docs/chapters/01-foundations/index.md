---
title: Foundations of Learning Sciences
description: Introduces Learning Sciences as a field, its parent disciplines, Bloom's Taxonomy 2001, the idea of an intelligent textbook, and the Claude Code authoring stack that the rest of the book builds on.
generated_by: claude skill chapter-content-generator
date: 2026-04-19 10:08:39
version: 0.07
---

# Foundations of Learning Sciences

!!! mascot-welcome "Welcome — Let's Build a Mental Model"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    Hi — I'm Bloom, and I'll be walking through this book with you. You'll see me at the start of every chapter to introduce what we're about to cover and the question we're chasing. Along the way I'll drop in with **tips** when there's a small move that makes a big difference, **think out loud** with you when a concept has a subtle twist, and **flag pitfalls** before you step into them. When the material gets genuinely hard — and some of it will — I'll offer **encouragement** and remind you that the struggle is where the learning lives. And at the end of each chapter, I'll show up to **celebrate** what you've built so far, because noticing progress is itself a learning-science intervention. Our first job, right here, is to map the territory: what Learning Sciences actually *is*, and what tools we'll use to build intelligent textbooks with it. Let's build a mental model.

## Summary

We begin with the field-level definitions that everything else in this book assumes: what Learning Sciences is, the parent disciplines it draws from (cognitive science, educational psychology, neuroscience, instructional design), Bloom's Taxonomy as our shared vocabulary for learning outcomes, and the AI/authoring stack (Claude Code, Agent Skills, MkDocs Material, Markdown) that we'll use to build every artifact in the rest of the course. By the end of this chapter, readers will have a working mental model of the territory and the toolchain.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

1. Learning Sciences
2. Instructional Design
3. Cognitive Science
4. Educational Psychology
5. Neuroscience in Learning
6. Evidence-Based Pedagogy
7. Bloom Taxonomy 2001
8. Learning Objective
9. Intelligent Textbook
10. Generative AI
11. Large Language Model
12. Claude Code
13. Agent Skill
14. MkDocs Material
15. Markdown Authoring
16. Intelligent Textbook Level

## Prerequisites

This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).

---

## The Authoring Gap

Something has changed in the last few years that most educators still underestimate. A single author, working alone, can now produce interactive learning material that two years ago would have required a publishing-house team of six and a twelve-month timeline. The tools are on our laptops. The cost of an experiment is a cup of coffee. And yet most of what gets produced under this new capability is — charitably — mediocre. Why?

The short answer is that **capability is not principle**. A large language model will happily generate ten thousand words of plausible-sounding chapter prose whether or not any of it serves the learner. It will produce a quiz that looks like a quiz without regard to whether the questions are too easy, too hard, or aimed at the wrong cognitive level. It will invent a mascot whose voice drifts from chapter to chapter. The gap between "content that exists" and "content that teaches" is the authoring gap — and closing it is what this course is about.

By the end of this chapter you will be able to:

- Define Learning Sciences and name the four parent disciplines it draws on.
- Explain what makes pedagogy *evidence-based* and why that matters for AI-generated content.
- State the six levels of the 2001 revised Bloom's Taxonomy and give at least one verb for each.
- Describe what an *intelligent textbook* is and which pieces distinguish it from a static textbook.
- Identify the four layers of the authoring toolchain we'll use throughout the book.

## What Is Learning Sciences?

***Learning Sciences*** is an interdisciplinary field that studies how people actually learn — in classrooms, online, on the job, and alone at midnight before an exam — and uses those findings to design environments, content, and feedback loops that make learning more effective. It is deliberately *interdisciplinary* because no single parent field has the whole picture. Three contributing disciplines matter most for this book, and a fourth sits alongside them as the translation layer.

***Cognitive Science*** — the study of the mind as an information-processing system — contributes the architecture: how sensory memory hands off to working memory, how working memory hands off to long-term memory, and what limits each of those transfers. When we talk in later chapters about cognitive load, chunking, or dual coding, we are drawing on cognitive science.

***Educational Psychology*** — the study of how people learn in educational settings — contributes the motivational and developmental layer: why a student engages or disengages, how prior knowledge shapes new learning, and how feedback changes future effort. Self-Determination Theory, growth mindset, and self-efficacy all live here.

***Neuroscience in Learning*** — the study of the brain and nervous system as they relate to learning — contributes mechanism and constraint: what synaptic consolidation looks like under sleep, how attention networks compete, what the fMRI signature of retrieval looks like. We will treat neuroscience findings carefully in this book. Neural evidence corroborates behavioral evidence; it rarely overrides it. A finding that "light up region X" is not, by itself, an instructional recommendation.

The fourth contributor, ***Instructional Design***, is the translation layer — the applied discipline that turns findings from the three research fields into learning experiences. Where cognitive science asks *how does memory work?*, instructional design asks *given how memory works, what should this lesson look like?* Models like ADDIE (Analyze, Design, Develop, Implement, Evaluate), Backward Design, and the 4C/ID framework all sit inside instructional design.

The relationships among these fields are easiest to see as a picture.

#### Diagram: Parent Disciplines of Learning Sciences

<details markdown="1">
<summary>Confluence diagram showing how three research disciplines and one applied discipline converge into Learning Sciences</summary>
Type: diagram
**sim-id:** learning-sciences-confluence<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A top-down flowchart rendered with Mermaid showing four parent disciplines converging on Learning Sciences, which in turn feeds Intelligent Textbook Design. Three research disciplines (Cognitive Science, Educational Psychology, Neuroscience in Learning) sit on the top row with colored nodes; Instructional Design sits on a second row as the "translation layer" with a distinct color; Learning Sciences sits on the third row as the convergence node; Intelligent Textbook Design sits on the bottom row as the output. Each arrow from a parent discipline is labeled with the primary contribution (e.g., Cognitive Science → Learning Sciences labeled "memory and attention"; Educational Psychology → Learning Sciences labeled "motivation and development"; Neuroscience in Learning → Learning Sciences labeled "mechanism and constraint"; Instructional Design → Learning Sciences labeled "translation to practice"). Node colors use a blue palette on a white background; node width resizes with the container using Mermaid's responsive rendering.

Implementation: Mermaid flowchart (`flowchart TD`) embedded directly in the chapter markdown via the `pymdownx.superfences` mermaid fence already configured in `mkdocs.yml`. Responsive sizing is native to Mermaid when rendered in MkDocs Material.
</details>

A quick critical-thinking prompt before we move on: the diagram above shows clean arrows from each parent discipline into Learning Sciences. In reality the flow is messier — findings get challenged, reinterpreted, and sometimes retracted. *What would you need to see to believe that a particular cognitive-science finding should change how a chapter is designed?* Hold that question; we'll return to it in the Measurement chapter.

## From Principle to Practice: Evidence-Based Pedagogy

Most instructional decisions throughout history have been made by tradition, intuition, or market pressure. ***Evidence-Based Pedagogy*** is the commitment to choose instructional strategies on the basis of empirical research — ideally randomized or quasi-experimental — rather than on what the author happened to experience in school. It sounds obvious, and it is not.

Evidence-based pedagogy has three practical consequences that shape every chapter of this book.

First, **we label our claims**. When a chapter says "retrieval practice strengthens long-term memory," we note whether the supporting evidence comes from controlled experiments, classroom field studies, or meta-analyses. A finding from a lab study with undergraduates does not automatically generalize to fifth graders learning fractions. Naming the study type keeps us honest.

Second, **we flag plausible confounds**. "Students who take more notes get higher grades" is a correlation. Does note-taking cause the grades? Or do conscientious students both take more notes *and* earn higher grades, with conscientiousness doing all the causal work? The second explanation is cheaper to believe. We train ourselves — and our readers — to ask *what else could explain this?* as a reflex.

Third, **we treat popular claims skeptically**. Learning styles, the Mozart effect, and the left-brain/right-brain dichotomy are all widely believed and poorly supported. An AI-generated chapter that uncritically repeats these is worse than no chapter at all, because it launders folk belief as authority. Evidence-based pedagogy is our filter against that failure mode.

!!! mascot-thinking "A Core Habit of Mind"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    Whenever you read a claim about how people learn — in this book or anywhere else — make asking *"What's the evidence, and what else could explain it?"* your first move, not your last. That single habit separates durable knowledge from folk wisdom.

Instructional Design and Evidence-Based Pedagogy together form the **principled loop** that AI-assisted authoring needs. Without the loop, capable AI produces more content of unknown quality. With the loop, capable AI produces more content *whose quality we can check*. The loop has a shape worth seeing.

#### Diagram: The Evidence Loop That Disciplines AI-Generated Content

<details markdown="1">
<summary>Causal loop diagram showing how evidence-based pedagogy balances AI content volume</summary>
Type: causal-loop-diagram
**sim-id:** evidence-loop-authoring<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram with 6 nodes, each written as a noun phrase (a variable that can go up or down). Rendered with Mermaid as a `flowchart LR` using styled edges for polarity. Nodes: "AI authoring capability", "content volume", "content quality", "learner outcomes", "evidence feedback", "instructional design adjustment". Edges with polarity labels:

- AI authoring capability → content volume (+) — more capable AI produces more material
- content volume → content quality (−) — without a filter, volume dilutes quality (this is the authoring gap)
- evidence feedback → instructional design adjustment (+) — evidence tells us what to change
- instructional design adjustment → content quality (+) — better design lifts quality
- content quality → learner outcomes (+) — better content produces better learning
- learner outcomes → evidence feedback (+, with delay) — outcomes become measurable evidence (delay marker shown as "⧚")

Two loops are labeled at the center:

- **B1 — Authoring gap (balancing).** AI capability → volume → quality-drop. Left alone, this loop is corrosive: more volume, less quality.
- **R1 — Evidence flywheel (reinforcing).** Instructional design adjustment → quality → outcomes → evidence → adjustment. When the loop closes, quality reinforces itself.

The delay marker "⧚" appears on the learner outcomes → evidence feedback edge because outcome data takes weeks-to-months to accumulate. Node colors: loop B1 nodes in a warm red-orange; loop R1 nodes in a cool blue; edges labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for edge polarity coloring; embedded directly in the chapter markdown. A one-paragraph walkthrough of loop R1 in plain English accompanies the diagram (see the paragraph immediately following).
</details>

Here is how to read loop **R1** in plain English: an instructional design adjustment (say, adding retrieval prompts) raises content quality; higher quality raises learner outcomes; the outcomes, once measured, become evidence; the evidence suggests the next adjustment. Each trip around the loop makes the content better than the last. That is the engine this course is designed to plug readers into.

## A Shared Vocabulary for Learning: Bloom's Taxonomy 2001

Before we can design content or assess it, we need a common language for *what kind of thinking we're asking a learner to do*. Recalling a definition is a different cognitive act than evaluating two research claims against each other. Treating them the same is a recipe for quizzes that feel hard but measure nothing useful.

The ***Bloom Taxonomy 2001*** — the revision by Anderson, Krathwohl, and colleagues of Bloom's original 1956 framework — is the vocabulary we'll use. It organizes cognitive processes into six levels, from simpler to more complex: *Remember*, *Understand*, *Apply*, *Analyze*, *Evaluate*, and *Create*. Two things are worth noticing about the 2001 revision. First, the top two levels were reordered (Create is now above Evaluate). Second, the levels are named as verbs (processes) rather than nouns (static categories), which reflects the fact that learning is something a student *does*, not a state they occupy.

A ***Learning Objective*** is a single sentence that names what a learner will be able to do after a unit of instruction, written as an observable verb at a specific Bloom level. "Understand photosynthesis" is not a learning objective — understanding is not observable. "Explain how light energy is converted to chemical energy in the Calvin cycle" is a learning objective at the *Understand* level. The verb determines the level; the content determines the scope.

Before the table below, keep one thing in mind: the levels are not a strict ladder. A learner can *create* before they can fluently *evaluate* — good writers often produce work that outpaces their ability to critique it. The table summarizes the six levels, each with example verbs and a learning objective written at that level.

| Level | Cognitive process | Example verbs | Example learning objective |
|---|---|---|---|
| 1. Remember | Retrieve relevant knowledge from long-term memory | list, recall, identify, name, define | *List the three stages of the memory model.* |
| 2. Understand | Construct meaning from instructional messages | explain, summarize, describe, compare, classify | *Explain why retrieval practice strengthens memory more than re-reading.* |
| 3. Apply | Use a procedure in a given situation | use, demonstrate, implement, solve, execute | *Use cognitive load theory to revise a MicroSim with too many controls.* |
| 4. Analyze | Break material into parts and determine how they relate | differentiate, deconstruct, compare, examine, attribute | *Analyze a quiz bank and determine its distribution across Bloom levels.* |
| 5. Evaluate | Make judgments based on criteria and standards | critique, judge, assess, justify, defend | *Critique a course description using the 100-point rubric.* |
| 6. Create | Put elements together to form a coherent whole | design, compose, generate, construct, author | *Design an original pedagogical mascot with a documented voice guide.* |

The six-level taxonomy is most useful when you can see all of it at once, with the cognitive demand of each level made concrete. The interactive pyramid below lets you hover on any level to see its defining characteristics and the kinds of items on a quiz that measure it. We'll return to it whenever we design assessments, which in this course is often.

#### Diagram: Interactive Bloom's Taxonomy Pyramid

<details markdown="1">
<summary>Interactive infographic overlay: Bloom's Taxonomy 2001 pyramid with clickable level callouts</summary>
Type: interactive-infographic
**sim-id:** bloom-taxonomy-pyramid<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill pattern. Base image: a hand-drawn pyramid divided into six horizontal tiers labeled from bottom to top (Remember, Understand, Apply, Analyze, Evaluate, Create), each tier a different color in a warm blue-to-orange gradient. The base image is annotation-free — all labels are delivered by overlay markers at calibrated positions defined in `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering over a tier shows a tooltip containing the level name, one-sentence definition, three example verbs, and one sample learning objective written at that level. The content for all six tiers is pre-authored in `data.json`.
- **Quiz mode:** A randomly chosen learning objective appears at the top; the student clicks the tier that matches its Bloom level. Correct answers highlight the tier green; incorrect answers reveal the correct tier and a one-sentence explanation.
- **Edit mode (authors only):** Drag markers to recalibrate their positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Apply — per the chapter's own taxonomy): *Given a learning objective sentence, identify the Bloom level it targets.*

Responsive: canvas width adapts to container using the standard `updateCanvasSize()` first-line call in `setup()`; the pyramid rescales while preserving marker anchor ratios.

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/bloom-taxonomy-pyramid/` will contain `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the pyramid base image. The text-to-image prompt specifies an annotation-free pyramid so that overlay markers render cleanly over the image.
</details>

!!! mascot-tip "A Working Rule for Writing Objectives"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom the elephant giving a tip">
    If you can't decide whether a learning objective is at Apply or Analyze, ask: *does the learner need to break something into parts, or use it whole?* "Use cognitive load theory" is Apply. "Diagnose which kind of cognitive load is hurting this MicroSim" is Analyze.

## What Is an Intelligent Textbook?

An ordinary textbook is a frozen artifact. An ***Intelligent Textbook*** is a textbook with *structured machine-readable knowledge underneath the prose*, plus *interactive components* on top, plus *a production pipeline that can regenerate any part of it as understanding improves*. All three pieces matter. Prose alone is a static book; prose plus interactivity is a website with book-shaped content; prose plus interactivity plus a regeneration pipeline is the thing we will build.

An intelligent textbook has a small number of required components. Before the diagram that shows them, here is the vocabulary we will use for each:

- **Learning graph** — a directed acyclic graph of concepts with dependency edges. It is the structural spine of the book.
- **Chapters** — prose generated against the learning graph, with every concept appearing in exactly one chapter, after all its prerequisites.
- **Glossary** — a term-by-term definition list, one entry per concept node in the graph.
- **Quiz bank** — questions aligned to specific concepts and tagged with Bloom levels.
- **MicroSims** — small interactive simulations embedded inline in chapters.
- **FAQ** — common questions, harvested from chapter content and reader feedback.
- **References** — a curated reading list, pinned per chapter.
- **Mascot admonitions** — recurring character callouts that deliver hints, warnings, and encouragement in a consistent voice.
- **Stories** — short-form graphic novels about historical figures whose work intersects with the subject matter.

The components do not stand alone — they reference each other. The diagram below shows how.

#### Diagram: Components of an Intelligent Textbook

<details markdown="1">
<summary>Architecture diagram showing the components of an intelligent textbook and their dependencies</summary>
Type: diagram
**sim-id:** intelligent-textbook-components<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram showing the learning graph at the center as the structural spine, with arrows radiating to each generated artifact. Nodes:

- **Learning Graph** (central, larger node, highlighted): concepts and dependencies as a DAG.
- **Chapters** — generated from the graph; each chapter lists its concepts.
- **Glossary** — one entry per concept node.
- **Quiz Bank** — questions tagged per concept and Bloom level.
- **MicroSims** — embedded per concept or small concept cluster.
- **FAQ** — derived from chapter content.
- **References** — curated per chapter.
- **Mascot Admonitions** — voice layer cutting across all chapters (shown as a side stripe rather than a child node).
- **Stories** — graphic novels attached to chapters where a historical figure applies.

Edges labeled with the dependency type ("tagged with concept", "defined for concept", "referenced in chapter"). The mascot-admonition stripe is rendered in a distinct color to signal that it is a cross-cutting concern, not a sibling artifact. Layout is top-down with the learning graph at the top, chapters on the second row, and the other artifacts on the third row hanging off chapters and concepts.

Implementation: Mermaid `flowchart TD` with custom node styling via `classDef`. Rendered responsively via MkDocs Material's built-in Mermaid support.
</details>

Three things about this architecture are worth holding onto. **The learning graph is the spine**, not a nice-to-have. Every other artifact is generated against it; change a dependency and the downstream artifacts change too. **The mascot is cross-cutting** — it is not an artifact *next to* the book, it is a voice layer *through* the book, which is why Chapter 12 has a whole chapter on getting it right. And **regeneration is the point**. The production pipeline should let an author regenerate a chapter, a quiz, or a MicroSim without breaking anything else. That constraint shapes the tool choices below.

### Levels of Intelligent Textbook

Not all intelligent textbooks sit at the same point on a capability spectrum. An ***Intelligent Textbook Level*** is a tier on a five-point capability classification that describes how much interactivity, personalization, and student-data handling a given textbook involves. Drawing an analogy to the Society of Automotive Engineers' J3016 classification of autonomous-vehicle automation, McCreary and colleagues have proposed the following five levels:

1. **Level 1 — Static.** Fixed content, no interactivity. The traditional printed or PDF textbook.
2. **Level 2 — Interactive.** Learning graphs, MicroSims, embedded simulations, and path recommendations generated from the graph, with *no storage of individual student records*.
3. **Level 3 — Adaptive.** Personalization driven by stored student goals, progress, and behavioral history.
4. **Level 4 — Chatbot.** Conversational tutoring via a large language model, typically on top of an adaptive substrate.
5. **Level 5 — Autonomous.** Real-time generation of fully personalized instruction for each learner.

**This book teaches Level 2.** Every skill, pattern, and artifact in the production pipeline we cover is designed to run without collecting individual student data. The jump from Level 2 to Level 3 is not only a technical step — it is a *regulatory inflection point*. Once a system stores learning histories, behavioral traces, or identifying signals about a named student, it enters a highly regulated domain governed by FERPA, COPPA, GDPR, and comparable regional laws, with requirements for data minimization, consent, retention limits, access controls, and auditability that are out of scope for this course. We return to the full taxonomy and to the privacy inflection point in [Chapter 10](../10-textbook-architecture/index.md), and we reinforce the warning in [Chapter 8](../08-measurement-feedback/index.md) where learning analytics most naturally tempts authors to cross the threshold.

## The AI Stack Beneath the Book

Two definitions frame everything we do with AI in this book.

***Generative AI*** is the broad category of AI systems that produce new artifacts — text, images, audio, video, code — rather than classifying or predicting values for existing inputs. "Generative" is a statement about output type: the system creates something where before there was nothing.

A ***Large Language Model (LLM)*** is a specific class of generative AI: a neural network, usually a decoder-only transformer, trained on very large text corpora to predict the next token given the preceding context. Modern LLMs — Claude among them — have parameter counts in the hundreds of billions and context windows measured in the hundreds of thousands of tokens. The technical specifics will evolve quickly. The two properties that matter for authoring will not: an LLM is a *text generator* (it produces sequences), and its behavior is *shaped by context* (what you put in front of it determines what comes out).

The fact that LLM behavior is context-shaped has a direct consequence for this course: *how* we instruct an LLM matters as much as *which* LLM we use. We will spend real time on prompt engineering, context windows, and the SKILL.md format in Chapter 10, because those are the controls that turn a capable but unfocused text generator into a disciplined authoring partner.

!!! mascot-encourage "This Part Takes a Second Read"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Bloom the elephant offering encouragement">
    If the distinction between *generative AI* and *large language model* feels a little fuzzy right now, that's fine — the generic/specific relationship gets clearer once we start invoking actual LLMs through actual skills. The concept will sharpen with use.

## The Authoring Toolchain

This course's production pipeline has five layers, stacked from the model up to the published site. Each layer is a named tool; each tool does one job.

- ***IDE Harness*** — the client-side software that sits between an author's prompt and a language model. A harness is responsible for routing the prompt to the appropriate model (fast vs. deep, small vs. large, local vs. hosted), running the *agent loop* (prompt → model → tool call → tool result → next prompt), dispatching tool calls to the filesystem and shell, managing conversation context and memory, and enforcing sandbox and permission policies. The widely-quoted shorthand, from Martin Fowler and the Anthropic engineering team, is *Agent = Model + Harness*. Without a harness, a language model is a chat window; with one, it becomes an autonomous coding and authoring partner.
- ***Claude Code*** — Anthropic's IDE harness and command-line interface that runs Claude inside a local working directory. It can read files, edit files, run shell commands, and call skills. Claude Code is the specific harness this course uses, and it is where the author and the model meet.
- ***Agent Skill*** — a modular, reusable capability that an IDE harness can invoke by name. A skill is a directory containing at minimum a `SKILL.md` file that describes when the skill applies and what it does. In this course we will use around fourteen skills: one to analyze the course description, one to generate the learning graph, one to design chapter structure, one per artifact type (glossary, FAQ, quiz, MicroSim, story, references, metrics), and a few more. Skills are how we turn "ask Claude to do this" into "invoke the thing that already knows how to do this."
- ***MkDocs Material*** — a static-site generator built on MkDocs and the Material theme. It takes a directory of Markdown files, a configuration file, and a theme, and produces a polished, navigable, searchable website. Intelligent textbooks in this course deploy as MkDocs Material sites, typically on GitHub Pages.
- ***Markdown Authoring*** — the source-text convention used by MkDocs, by Claude Code, and by authors. Markdown is deliberately minimal: headings, lists, links, emphasis, fenced code, and (via extensions) admonitions, tables, and embedded diagrams. Every chapter in this book is a Markdown file.

### A Note on the Word "Harness"

The term *harness* is used consistently in some AI-coding-tool ecosystems and carefully avoided in others. The underlying concept — a client-side runtime that wraps a model so it can call tools and operate in a loop — is converging across products, but the vocabulary has not. The table below summarizes what each major product in this space calls the thing, as of April 2026.

| Product | Term used | Approximate meaning |
|---|---|---|
| Claude Code (Anthropic) | **Harness** (explicit) | Agent loop, tool dispatch, context compaction, and guardrails wrapping Claude. Anthropic's engineering blog uses "harness" as a first-class term. |
| Codex CLI (OpenAI) | **Harness** (explicit) | "The Codex harness" — the agent loop and execution logic shared across CLI, IDE extensions, and desktop. OpenAI's "harness engineering" posts popularized the phrase in early 2026. |
| Cursor | **Agent** / background agent / shadow workspace | Avoids "harness." The harness-equivalent features are branded as Agent and the shadow workspace execution environment. |
| Windsurf (Codeium) | **Cascade** / Cascade Engine | Avoids "harness." The runtime is called Cascade; its context state layer is called Flow. |
| Google Antigravity | **Agent-first platform** / Manager / Artifacts | Avoids "harness." The platform vocabulary is agent-first architecture, a Manager view, and Artifacts. |
| Evaluation community (METR, EleutherAI) | **Scaffolding** (runtime) vs. **evaluation harness** (test runner) | Older, narrower usage. "Evaluation harness" (e.g., `lm-evaluation-harness`) means test-running infrastructure, not an agent runtime. |

Two honest caveats about this table. First, the definitional spread is real: a Cursor user and a Claude Code user may be describing the same software pattern and not recognize each other's terms. Second, the harness-as-runtime sense popularized by Anthropic and OpenAI in early 2026 is not identical to the older evaluation-harness sense — they share a "scaffolding around a model" metaphor, but one runs agents and the other runs benchmarks. We use *IDE harness* in this book for the runtime sense and will reserve *evaluation harness* for the benchmarking sense when it appears in later chapters.

!!! info "How This Definition Was Built"
    The definition of *IDE harness* above was not taken from a single source. We surveyed the official documentation and engineering blogs of Claude Code, OpenAI Codex CLI, Cursor, Windsurf, and Google Antigravity; cross-checked them against Martin Fowler and Simon Willison's independent write-ups; and checked the older evaluation-community usage (METR, EleutherAI's `lm-evaluation-harness`) to make sure we were not conflating two senses of the word. The synthesis — *client-side runtime that routes prompts, runs the agent loop, dispatches tool calls, manages context, and enforces sandboxing* — is the intersection of what the explicit-adopter sources say a harness is. The full research trail, including URLs, quoted definitions, and the reasoning for each caveat, is logged in [`logs/harness-definition.md`](https://github.com/dmccreary/learning-sciences/blob/main/logs/harness-definition.md). Whenever a term in this book has contested meanings across a field, expect a note like this one. *What's the evidence, and what else could explain it?* applies to vocabulary too.

The five layers connect top-to-bottom, but the data flow has a shape worth seeing in motion.

#### Diagram: The Authoring Pipeline in Motion

<details markdown="1">
<summary>MicroSim: interactive walkthrough of the authoring pipeline from prompt to published chapter</summary>
Type: microsim
**sim-id:** authoring-pipeline-walkthrough<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that animates the flow of authoring work from prompt to published chapter. The canvas is divided into five horizontal lanes from top to bottom:

1. **Author** (types a natural-language request, e.g., "generate a chapter on retrieval practice")
2. **Claude Code** (receives the request, selects the matching skill)
3. **Agent Skill** (runs; reads shared context; generates Markdown)
4. **Markdown Files** (written to `docs/chapters/...`)
5. **MkDocs Material** (builds and serves the site)

Controls (using built-in p5.js controls per project convention):

- **Play / Pause button** — animate a request flowing through all five lanes with a glowing token that moves between lanes and leaves small artifacts (file icons, skill badges) where it lands.
- **Speed slider** (0.5× to 3×) — animation speed.
- **Skill dropdown** — pick one of: Chapter Content Generator, Glossary Generator, Quiz Generator, MicroSim Generator. Selection changes which artifacts appear in lane 4 and which chapter section lights up in lane 5.
- **Reset button** — clear and restart.

Learning objective (Bloom level: Understand): *Describe the flow of information from an author's natural-language request through Claude Code, an Agent Skill, and MkDocs to a published chapter.*

Visual style matches the project's other MicroSims: white background, warm blue primary with orange accent per `mkdocs.yml` theme; each lane labeled on the left; the moving token uses a soft-glow effect to signal motion. Canvas width is responsive via `updateCanvasSize()` as the first line of `setup()`, and the canvas is parented to the standard `<main></main>` element so the sketch can be copy-pasted into the p5.js editor without modification.

Implementation: p5.js sketch in `/docs/sims/authoring-pipeline-walkthrough/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generate via the `microsim-generator` skill after Chapter 11 introduces MicroSim design principles formally.
</details>

The toolchain is intentionally boring. We are not betting the book on exotic infrastructure. Markdown has been stable for twenty years; MkDocs has been stable for a decade; GitHub Pages predates them both. The novelty in this course is not the *stack* — it is what the stack lets an author do when a capable LLM sits on top of it, disciplined by Agent Skills that encode the learning-sciences findings we'll spend the next chapters unpacking.

## Retrieval Check

Before moving on to Chapter 2, close the browser tab briefly and try to answer these from memory. Stumbling is the point — it tells you which section to revisit.

1. **Name** the four disciplines that contribute to Learning Sciences, and the one distinct contribution of each. (Level: Remember / Understand.)
2. **State** the six levels of Bloom's Taxonomy 2001 in order, and give one verb for each. (Level: Remember.)
3. **Explain** in your own words why evidence-based pedagogy matters *more* in an AI-authoring workflow than in a traditional one. (Level: Understand.)
4. **Given** the learning objective "Compare near and far transfer using two examples from your own teaching," identify the Bloom level. Defend your choice. (Level: Analyze / Evaluate.)
5. **Critique** this sentence: "Our learning platform uses AI to generate personalized content, which research shows dramatically improves outcomes." What would you need to know before believing it? (Level: Evaluate.)

If question 5 made you uncomfortable, that discomfort is the instinct this whole book is trying to sharpen. Good.

## Bridge to Chapter 2

We now have the territory (Learning Sciences and its parent disciplines), the vocabulary (Bloom's Taxonomy and learning objectives), the artifact (intelligent textbook), and the toolchain (Claude Code, Agent Skills, MkDocs Material, Markdown). What we do *not* yet have is the organizing framework for the six research chapters that follow. That framework is the Seven Domains — the spine that the next chapter builds and that every later chapter hangs off of.

!!! mascot-celebration "One Foundation Down"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom the elephant celebrating with trunk raised">
    You now have the working mental map we'll build on for the rest of the book. Next up: the Seven Domains — the framework that will let us say *exactly* which part of learning each later chapter is about. See you there.
