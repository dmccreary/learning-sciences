[Content](../){ .md-button } [Slides in Viewer](../../../sims/slide-viewer/main.html?src=../../chapters/01-foundations/slides/){ .md-button .md-button--primary }

# Foundations of Learning Sciences

**Chapter 1 — Intelligent Textbook Design**

*Let's build a mental model.*

— Bloom

---

## The Authoring Gap

A single author can now produce interactive learning material that once needed a six-person publishing team.

Yet most of what gets produced is mediocre.

**Why?**

> Capability is not principle.

---

## What We'll Cover

By the end of this chapter you will be able to:

- **Define** Learning Sciences and name its four parent disciplines
- **Explain** what makes pedagogy evidence-based
- **State** the six levels of Bloom's Taxonomy 2001
- **Describe** what an intelligent textbook is
- **Identify** the four layers of our authoring toolchain

---

## What Is Learning Sciences?

An **interdisciplinary field** that studies how people actually learn — in classrooms, online, on the job, and alone at midnight before an exam.

It uses those findings to design environments, content, and feedback loops that make learning more effective.

---

## Four Parent Disciplines

- **Cognitive Science** — memory and attention
- **Educational Psychology** — motivation and development
- **Neuroscience in Learning** — mechanism and constraint
- **Instructional Design** — translation to practice

The first three supply research. The fourth turns research into lessons.

---

## Cognitive Science

Studies the **mind as an information-processing system**.

Contributes the architecture:

- How sensory memory hands off to working memory
- How working memory hands off to long-term memory
- What limits each of those transfers

Source of ideas like cognitive load, chunking, and dual coding.

---

## Educational Psychology

Studies **how people learn in educational settings**.

Contributes the motivational and developmental layer:

- Why a student engages or disengages
- How prior knowledge shapes new learning
- How feedback changes future effort

Home of Self-Determination Theory, growth mindset, and self-efficacy.

---

## Neuroscience in Learning

Studies the **brain and nervous system** as they relate to learning.

Contributes mechanism and constraint:

- Synaptic consolidation under sleep
- Attention networks in competition
- Neural signatures of retrieval

> Neural evidence *corroborates* behavioral evidence. It rarely *overrides* it.

---

## Instructional Design

The **translation layer**. Turns findings from the three research fields into learning experiences.

Cognitive science asks: *How does memory work?*

Instructional design asks: *Given how memory works, what should this lesson look like?*

Frameworks: ADDIE, Backward Design, 4C/ID.

---

## Evidence-Based Pedagogy

A commitment to choose instructional strategies on the basis of **empirical research** — not tradition, intuition, or market pressure.

It sounds obvious. It is not.

---

## Three Practical Consequences

1. **We label our claims.** Lab study? Field study? Meta-analysis?
2. **We flag plausible confounds.** Does note-taking cause the grades, or does conscientiousness?
3. **We treat popular claims skeptically.** Learning styles. Mozart effect. Left-brain/right-brain.

> Ask *"What's the evidence, and what else could explain it?"* as a reflex.

---

## The Evidence Loop

Two loops shape AI-assisted authoring:

- **B1 — Authoring Gap (balancing)**
  More AI capability → more content volume → lower quality

- **R1 — Evidence Flywheel (reinforcing)**
  Design adjustment → quality → outcomes → evidence → better adjustment

The loop is the engine. The book plugs you into it.

---

## Bloom's Taxonomy 2001

A shared vocabulary for **what kind of thinking** we're asking a learner to do.

Six levels, simplest to most complex:

1. **Remember**
2. **Understand**
3. **Apply**
4. **Analyze**
5. **Evaluate**
6. **Create**

*Revised by Anderson, Krathwohl, and colleagues — verbs, not nouns.*

---

## Six Levels at a Glance

| Level | Example verbs |
|---|---|
| Remember | list, recall, identify, define |
| Understand | explain, summarize, compare |
| Apply | use, demonstrate, solve |
| Analyze | differentiate, deconstruct, examine |
| Evaluate | critique, judge, justify |
| Create | design, compose, construct |

The **verb** determines the level. The **content** determines the scope.

---

## Learning Objectives

A single sentence naming what a learner will be able to do — written as an observable verb at a specific Bloom level.

**Not an objective:** *Understand photosynthesis.*

**An objective:** *Explain how light energy is converted to chemical energy in the Calvin cycle.*

---

## What Is an Intelligent Textbook?

Three things at once:

1. **Prose** — chapters a reader can follow
2. **Structured machine-readable knowledge** — a learning graph underneath
3. **A production pipeline** — that can regenerate any part as understanding improves

Prose alone is a static book. All three is what we're building.

---

## Core Components

- **Learning graph** — the structural spine
- **Chapters** — prose generated against the graph
- **Glossary** — one entry per concept
- **Quiz bank** — tagged with Bloom levels
- **MicroSims** — small interactive simulations
- **FAQ, References, Stories**
- **Mascot admonitions** — voice layer across the book

---

## Five Levels of Intelligent Textbook

1. **Static** — fixed content, no interactivity
2. **Interactive** — graphs, MicroSims, no student data
3. **Adaptive** — personalization from stored history
4. **Chatbot** — LLM conversational tutoring
5. **Autonomous** — real-time generated instruction

---

## This Book Teaches Level 2

Every skill, pattern, and artifact we cover runs **without collecting individual student data**.

Level 2 → Level 3 is not just a technical step — it's a **regulatory inflection point**.

FERPA. COPPA. GDPR. Data minimization. Consent. Retention. Access controls. Auditability.

Out of scope for this course, on purpose.

---

## Generative AI & LLMs

**Generative AI** — systems that *produce new artifacts* (text, images, code) rather than classify existing inputs.

**Large Language Model (LLM)** — a specific generative AI: a decoder-only transformer trained to predict the next token given preceding context.

Two properties that will outlast the specifics:

- An LLM is a **text generator**
- Its behavior is **shaped by context**

---

## The Authoring Toolchain

Five layers, stacked from model to site:

1. **IDE Harness** — the agent-loop runtime
2. **Claude Code** — the specific harness we use
3. **Agent Skills** — reusable, named capabilities
4. **MkDocs Material** — static-site generator
5. **Markdown** — the source-text convention

---

## Agent = Model + Harness

Without a harness, a language model is a chat window.

With one, it becomes an **autonomous authoring partner** that can:

- Read and edit files
- Run shell commands
- Call skills by name
- Manage context and memory
- Enforce sandboxing

Claude Code is the harness. This course lives inside it.

---

## Agent Skills

A **modular, reusable capability** an IDE harness can invoke by name.

Minimum: a directory with a `SKILL.md` file describing when it applies.

This course uses ~14 skills:

- Course description analyzer
- Learning graph generator
- Chapter, glossary, FAQ, quiz, MicroSim generators
- Story, references, metrics generators

*"Ask Claude to do this"* → *"invoke the thing that already knows how."*

---

## Why This Stack?

The toolchain is **intentionally boring**.

- Markdown has been stable for 20 years
- MkDocs has been stable for a decade
- GitHub Pages predates them both

The novelty is not the stack. It's what the stack lets an author do when a capable LLM sits on top of it.

---

## Retrieval Check

Close this tab. Try answering from memory.

1. Name the four parent disciplines and one contribution of each.
2. State the six Bloom levels in order with one verb each.
3. Why does evidence-based pedagogy matter *more* in AI-authoring?
4. Identify the Bloom level: *"Compare near and far transfer."*
5. Critique: *"Our AI platform dramatically improves outcomes."*

> Stumbling is the point. It tells you which section to revisit.

---

## Bridge to Chapter 2

We now have:

- The **territory** — Learning Sciences and its parent disciplines
- The **vocabulary** — Bloom's Taxonomy and learning objectives
- The **artifact** — intelligent textbook
- The **toolchain** — Claude Code, Skills, MkDocs, Markdown

Next: **The Seven Domains** — the framework every later chapter hangs off of.

---

## One Foundation Down

You now have the working mental map we'll build on for the rest of the book.

See you in Chapter 2.

— *Bloom*
