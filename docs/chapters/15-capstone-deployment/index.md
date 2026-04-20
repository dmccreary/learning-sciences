---
title: Capstone and Deployment
description: The capstone chapter — producing a publishable intelligent-textbook chapter that demonstrates all Seven Domains, deploying it through the MkDocs and GitHub Pages pipeline, and shipping it with accessibility, peer review, and a repeatable publishing rhythm.
generated_by: claude skill chapter-content-generator
date: 2026-04-19 14:20:00
version: 0.07
---

# Capstone and Deployment

!!! mascot-welcome "Welcome — Where Theory Becomes Artifact"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    This is the last chapter. For fourteen chapters we've been loading the workbench — the Seven Domains, the architecture, the MicroSims, the mascot craft, the graphic novels, the skills. This chapter is where we pick up the tools and make something that's *shippable*. You won't walk away from here with more theory; you'll walk away with a deployed site, a peer-reviewed chapter, and a pipeline you can run again next month on a different subject. Let's build something the world can actually open in a browser.

## Summary

The book closes with the capstone: producing a publishable intelligent-textbook chapter that demonstrates all Seven Domains. We cover GitHub Pages deployment, the MkDocs build process, portfolio artifacts, peer review, iterative improvement, accessibility audit basics, publishing workflows, chapter-rubric evaluation, and mastery demonstration. Readers leave with a live site, a reusable mascot, and a repeatable pipeline.

## Concepts Covered

This chapter covers the following 10 concepts from the learning graph:

1. Capstone Project
2. GitHub Pages Deployment
3. MkDocs Build Process
4. Portfolio Artifact
5. Peer Review Process
6. Iterative Improvement
7. Accessibility Audit Basics
8. Publishing Workflow
9. Chapter Rubric Evaluation
10. Mastery Demonstration

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Learning Sciences](../01-foundations/index.md)
- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../10-textbook-architecture/index.md)
- [Chapter 11: MicroSims and Interactive Visualizations](../11-microsims/index.md)
- [Chapter 12: Pedagogical Mascots and Admonitions](../12-mascots-admonitions/index.md)
- [Chapter 13: Graphic Novels and Short-Form Stories](../13-graphic-novels/index.md)
- [Chapter 14: AI Agent Skills for Textbook Generation](../14-agent-skills/index.md)

---

## Fourteen Chapters, One Artifact

Before we define the capstone, let's recover the arc of the course in one paragraph — because the capstone is the thing that makes the arc visible as a whole. Chapter 1 set the field and the toolchain. Chapter 2 installed the Seven Domains — Motivation, Understanding, Retention, Application, Expertise, Measurement, and Learning Conditions — as the organizing spine. Chapters 3 through 9 walked each domain in order, each chapter one pass through the spine. Chapter 10 moved us from the research base into the architecture of an intelligent textbook: the learning graph, the chapter/glossary/quiz artifact set, and the five levels with the privacy inflection point at the Level 2 to Level 3 boundary. Chapters 11, 12, and 13 taught the three engagement artifacts — MicroSims, mascot admonitions, and 12-panel graphic novels. Chapter 14 named the fourteen skills that turn natural-language requests into all of the above. The capstone is the first project where the arc is applied end-to-end on a subject nobody has seen before.

## The Capstone Project

The ***Capstone Project*** is a single publishable intelligent-textbook chapter, on a subject of the learner's choosing, that demonstrates mastery of the Seven Domains and the full artifact set, and that ships as a live MkDocs Material site. The course description fixes the minimum contents of the artifact. Every capstone must include:

- Chapter prose that exercises all seven domains — motivation hook, understanding scaffold, retention prompts, application scenarios, expertise cues, measurement check, and attention to learning conditions.
- At least **one original MicroSim** that teaches a concept from the chapter while respecting cognitive-load constraints.
- At least **one original pedagogical mascot** with a documented persona, voice guide, and visual style sheet — plus **four mascot admonitions** that exercise different cognitive intents (for example, welcome, thinking, warning, celebration).
- At least **one 12-panel graphic novel** about a scientist, engineer, or mathematician whose work relates to the chapter's subject.
- At least **one Bloom-aligned quiz** whose items are distributed across the cognitive levels the chapter targets, not collapsed at *Remember*.
- A deployed, publicly reachable URL on GitHub Pages.

That list is intentionally short. Mastery isn't demonstrated by producing more artifacts; it's demonstrated by producing *coherent* artifacts that hang together around a single subject and that a reader can actually learn from. The rubric later in this chapter is how we check coherence.

## Scoping the Chapter

Before writing a single Markdown file, the capstone author picks a subject and right-sizes the scope. The most common capstone failure mode is not under-ambition; it's over-ambition — attempting a whole subject where a *chapter-sized slice* was the assignment. A capstone chapter should sit at the same grain as any one of this book's own chapters: a handful of concepts (10 to 16 is the working range), a word count around 4,000 to 6,000, and a total production effort that fits inside a two-to-three-week window rather than a semester.

Three questions help with right-sizing:

1. **Is the subject something you already know well enough to catch AI hallucinations?** The capstone is not the place to learn a new field and teach it at the same time. Pick something where your expert knowledge is the quality filter.
2. **Does a coherent 10-to-16-concept slice of the subject exist?** If the natural unit is 40 concepts, you've picked a *course*, not a chapter. Narrow until the dependency graph of your concept list is something a reader can hold in working memory.
3. **Is there a historical figure whose work intersects with the subject?** The graphic-novel requirement is easier to honor when a named person exists. If no figure surfaces naturally, the subject may be at the wrong grain.

## The MkDocs Build Process

The ***MkDocs Build Process*** is the procedure that turns a directory of Markdown files and a configuration file into a static HTML site. Three invocations matter in practice, and the difference between them is the difference between a smooth release and a mysterious production bug.

- `mkdocs serve` — runs a local development server at `http://127.0.0.1:8000/` and rebuilds on every file change. Watchdog detects saves; the page reloads. This is the authoring loop. The console stream is load-bearing — build errors and warnings appear here, not in the rendered page. (The global `CLAUDE.md` instructs Claude not to start or kill this process; the author keeps it running in their own terminal so they can watch the console.)
- `mkdocs build` — produces a one-shot build into `site/` without serving. Use this to inspect the final HTML, to run a link checker against the output, or to hand the built site to a different web server. Build warnings that scroll past in `serve` are easier to read as a static list here.
- `mkdocs gh-deploy` — builds the site and pushes it to the `gh-pages` branch of the current repository in a single atomic step. This is the release command. It is also the command with the highest blast radius, because a successful deploy overwrites the live site.

Plugin order in `mkdocs.yml` matters more than it looks. Plugins run in the order they appear, and later plugins see the output of earlier ones. A plugin that rewrites URLs must run before a plugin that validates them; a plugin that injects content must run before a plugin that counts words. When a build does the wrong thing silently, reordering plugins is the first thing to try.

#### Diagram: The Deploy Pipeline from Source to Live Site

<details markdown="1">
<summary>Flowchart showing the pipeline from Markdown source through mkdocs build to GitHub Pages, with failure points marked</summary>
Type: diagram
**sim-id:** deploy-pipeline-flow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart LR` diagram with five stages from left to right, each a named node with an inline status color, and three failure-mode callouts drawn as side nodes attached to the stage where they most often originate.

Main path (left to right):

1. **Markdown source** (`docs/`, `mkdocs.yml`) — author's working tree.
2. **MkDocs build** (`mkdocs build`) — produces `site/` HTML.
3. **Git commit and push** to `main` — triggers the publishing workflow.
4. **`mkdocs gh-deploy`** — rebuilds and pushes built output to the `gh-pages` branch.
5. **GitHub Pages** — serves the `gh-pages` branch at the project's public URL.

Failure callouts (drawn as red-bordered side nodes):

- **F1 — Build error** attached to stage 2. Missing plugin, malformed front matter, unresolved reference. Caught by the `mkdocs build` console output.
- **F2 — Broken link** attached to stage 2. Relative path mismatch, chapter renamed without link update. Caught by the link-check plugin if configured; otherwise silent.
- **F3 — Deploy cache drift** attached to stages 4 and 5. Browser serves a stale asset because the CDN TTL hasn't expired or a hashed filename wasn't bumped. Caught by a hard refresh and a second check in a private window.

A dashed feedback arrow runs from stage 5 back to stage 1 labeled "reader feedback" to signal that deployment is not the end — it is the start of the next iteration.

Visual treatment: main path in cool blue; failure callouts in warm red with a red border; feedback arrow in dashed orange. Nodes labeled with both the command and the artifact produced. Every edge labeled with the carrying artifact.

Implementation: Mermaid `flowchart LR` with `classDef` per stage category. Embedded directly in the chapter markdown.
</details>

## GitHub Pages Deployment

***GitHub Pages Deployment*** is the mechanism that turns a `gh-pages` branch into a publicly reachable HTTPS URL at `https://<user-or-org>.github.io/<repo-name>/`. For this course, `mkdocs gh-deploy` is the only command an author needs to run — the `ghp-import` library that MkDocs uses under the hood handles the branch commit, the orphan-history trick that keeps `gh-pages` small, and the push. GitHub Pages notices the push and updates the live site within a minute or two.

Three settings matter on the GitHub side, and all three are one-time configuration. The repository's *Pages* settings must point at the `gh-pages` branch and the root folder. If a custom domain is in use, the repository must own a `CNAME` file at the root of `gh-pages`, and the domain's DNS must point a `CNAME` record at `<user>.github.io`. HTTPS must be enabled (GitHub provisions the certificate automatically through Let's Encrypt once the DNS is valid). A fourth, optional concern is the `404.html` page — MkDocs Material provides one; keeping it in the deployed site makes mistyped URLs friendlier.

!!! mascot-warning "The Ship-Before-Audit Footgun"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom the elephant flagging a warning">
    Deploying before running an accessibility audit is a classic footgun. It's *silent* — the site looks fine to the author, whose browser and abilities aren't being tested. It's *easy to trigger* — the deploy command is one keystroke, and the audit feels like optional polish. The *damage is delayed and invisible to the author* — a screen-reader user hits the site, can't navigate the quiz, and quietly leaves. The structural fix is to run the accessibility checks *before* `gh-deploy` is even available to the author — wire them into the publishing workflow so a failing audit blocks the deploy, not warns about it.

## The Publishing Workflow

The ***Publishing Workflow*** is the repeatable sequence an author runs every time the site is updated. This book uses the ***CPD pattern*** — Commit, Push, Deploy — as its release rhythm. The three steps run sequentially, each one verifies something the next step depends on, and the combination is short enough to be muscle memory by the end of the capstone.

| Step | Command | What it does | What it verifies |
|---|---|---|---|
| **Commit** | `git add <files>; git commit -m "…"` | Records the change locally with a message | That the author has paused long enough to describe the change in prose — the message is the first quality gate |
| **Push** | `git push` | Uploads the commit to GitHub | That the commit builds cleanly against any remote pre-commit checks and that the change is backed up off-machine |
| **Deploy** | `mkdocs gh-deploy` | Rebuilds the site and pushes to `gh-pages` | That the build is error-free, all links resolve, and the site renders correctly at the public URL |

The CPD cadence matters for more than convenience. It *separates concerns* — a failing commit doesn't leave a half-deployed site; a successful push doesn't imply the site is live; a broken deploy is discoverable independently of whether the source was saved. Each step has its own failure mode and its own recovery path. Authors who fuse the three into a single "publish" action lose the ability to diagnose which stage went wrong.

## The Portfolio Artifact

A ***Portfolio Artifact*** is a finished, externally-reachable piece of work that can stand on its own as evidence of capability. A deployed capstone is a portfolio artifact in a strong sense: it has a URL anyone can visit, it demonstrates a concrete skill set, and — unlike a traditional academic paper — it continues to accept iteration after the course ends.

The `README.md` at the repository root is the artifact's cover letter. It should name the subject, link to the deployed site with a screenshot or a small GIF of the MicroSim in motion, list the seven domains and where each one surfaces in the chapter, name the mascot and show a pose, and credit the course. A reader who lands on the repository should understand in thirty seconds what the artifact is, who it is for, and where to see it live.

Three things to resist in the README. Don't pad the file with generic descriptions of MkDocs or Claude Code — those belong in their own documentation. Don't bury the live URL under three headings; put it in the first paragraph. Don't turn the README into a second version of the chapter — summarize, link, and let the deployed site do the teaching.

## Chapter Rubric Evaluation

The ***Chapter Rubric Evaluation*** is the formal review an author runs on their own capstone before submitting it for peer review, and the rubric peer reviewers apply when they read. The rubric below is the one this book itself is authored against; the chapter-metrics skill reports most of these items automatically, but the rubric is the document of record.

A rubric that works as a rubric — not as a checklist — contains items that can *fail honestly*. The list below has twenty items, organized into five categories.

**Structure (6 items).** (1) Title, summary, concepts list, and prerequisites present in the front matter. (2) Exactly one `mascot-welcome` admonition at the chapter opening. (3) Exactly one `mascot-celebration` admonition at the chapter close. (4) Total mascot admonitions at or below six. (5) No back-to-back mascot admonitions. (6) A retrieval check or equivalent "pre-flight" section is present.

**Seven-Domain coverage (3 items).** (7) All seven domains are either foregrounded or touched in the chapter, and the author can point to the paragraph where each one lands. (8) At least one causal loop diagram appears where two or more variables influence each other. (9) At least one critical-thinking prompt asks the reader to evaluate, critique, or extend a claim rather than recall.

**Engagement artifacts (3 items).** (10) At least one MicroSim is specified and implemented. (11) At least one mascot with four admonitions is present and voice-consistent across them. (12) At least one 12-panel graphic novel is specified and implemented.

**Measurement (3 items).** (13) A Bloom-aligned quiz is present; items are distributed across Bloom levels, not collapsed at *Remember*. (14) Every term-of-art is italicized on first use and glossed in the same sentence. (15) No banned vocabulary in body prose ("obviously", "simply", "just", "clearly", or hype adjectives).

**Systems thinking and evidence (3 items).** (16) Every "X causes Y" claim notes study design and at least one plausible confound. (17) At least one feedback loop is *named* as a loop with polarity and loop label. (18) A footgun pattern is called out and a structural fix proposed.

**Shippability (2 items).** (19) The site deploys cleanly from a fresh clone — `mkdocs gh-deploy` produces a working public URL with no console errors. (20) An accessibility pass at WCAG 2.2 AA-floor has been run and documented.

#### Diagram: The Interactive Capstone Rubric

<details markdown="1">
<summary>Interactive infographic overlay showing the 20-item capstone rubric as clickable cells with detail on hover</summary>
Type: interactive-infographic
**sim-id:** capstone-rubric-board<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay using the `interactive-infographic-overlay` skill. Base image: a 5 x 4 grid representing the twenty rubric items, grouped into five color bands for Structure, Seven-Domain coverage, Engagement artifacts, Measurement, and Systems thinking and evidence. Each cell contains the rubric item's short name. The bottom of the image holds two larger "Shippability" cells in a distinct color.

Modes (standard for this skill):

- **Explore mode:** Hovering a cell shows the rubric item's full text, the tool or skill that checks it automatically (if any), and a one-sentence example of what passing and failing look like.
- **Self-audit mode:** The author clicks each cell to mark it pass, partial, or fail for their current draft; the board colors update and a summary bar reports the count of each.
- **Edit mode (authors only):** Drag cells to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Evaluate): *Given a chapter draft, judge its readiness to ship by applying the 20-item rubric and identifying the two or three items most likely to fail.*

Implementation: Generated with the `interactive-infographic-overlay` skill. The directory `/docs/sims/capstone-rubric-board/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the grid base image. Canvas width is responsive via `updateCanvasSize()` as the first line of `setup()`.
</details>

A critical-thinking prompt sits on top of the rubric itself. **Goodhart's Law** — when a measure becomes a target, it stops being a good measure — applies sharply here. An author who optimizes the chapter *to score well on the rubric* rather than *to teach well* produces a chapter whose rubric score rises while its pedagogical quality doesn't. We've seen this pattern: the mascot count hits exactly six, the retrieval check exists but asks only *Remember*-level questions, every term-of-art is italicized on first use but the explanations drift. Every rubric item passes; no reader learns.

The structural fix is to treat the rubric as a **floor, not a ceiling**. A chapter that fails a rubric item is probably not ready to ship; a chapter that passes every item is *eligible* to ship, not certified as good. Pair every rubric pass with the qualitative prompt: *does this item serve a reader, or does it just satisfy the rubric?* When those two judgments diverge, trust the reader.

!!! mascot-thinking "Rubrics Measure What They Measure"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    A rubric is diagnostic, not prescriptive. When an item fails, the rubric tells you *something* is off — it doesn't tell you what. A missing retrieval check might mean the author forgot, or it might mean the chapter as drafted doesn't have material worth retrieving, which is a bigger problem than the checkbox suggests. Use rubric failures as prompts for diagnosis, not for quick fixes.

## Accessibility Audit Basics

***Accessibility Audit Basics*** covers the minimum accessibility work that turns a deployable site into one that a meaningfully broader audience can actually use. The floor for this course is **WCAG 2.2 Level AA** — the version of the Web Content Accessibility Guidelines current at the time of writing, at the middle of three conformance levels. Full AAA conformance is out of scope; AA is the realistic target for a volunteer-authored textbook and covers the failure modes that most directly exclude readers.

An accessibility audit has two modes — automated and manual — and neither one alone is sufficient. Automated tools catch what can be mechanically checked; manual checks catch what requires human judgment. The table below summarizes the split.

| Check | Automated or manual | Tool | What it catches | What it misses |
|---|---|---|---|---|
| Color contrast ratios | Automated | axe DevTools, Lighthouse | Text that fails the 4.5:1 contrast floor | Contrast inside images (like labels baked into diagrams) |
| Missing alt text | Automated | axe, Lighthouse, `pa11y` | `<img>` elements with no `alt` attribute | Alt text that exists but is empty, decorative, or unhelpful |
| Heading order | Automated | axe, Lighthouse | Skipped heading levels (h2 to h4 without h3) | Whether the heading *labels* the section correctly |
| Form-label association | Automated | axe | `<input>` without a linked `<label>` | Labels that are present but misleading |
| Keyboard navigation | Manual | Tab key in any browser | Focus traps, unreachable controls, missing focus rings | Nothing — this is where manual testing wins |
| Screen-reader experience | Manual | VoiceOver, NVDA, JAWS | Reading order, announcement wording, landmark structure | Nothing automated gets close |
| MicroSim accessibility | Manual | Hand testing | Whether a p5.js canvas has a keyboard-equivalent path | Nearly everything; canvases are opaque to automated tools |
| Reduced-motion support | Manual | OS reduced-motion toggle | Animations that don't respect the user preference | Partial coverage by Lighthouse |
| Language attribute | Automated | axe, Lighthouse | Missing `lang="en"` on the document | Incorrect language code (mark-up says "en" but content is French) |
| Link text quality | Manual | Read-through | Links whose text is "click here" or "read more" | All of it — tools can't judge context |

The right audit rhythm: run the automated checks every time before a deploy (they take seconds), and run the manual checks once per capstone and again whenever the chapter changes substantially. Fix violations before deploying — which means the audit runs *before* `mkdocs gh-deploy`, not after.

Alt-text discipline deserves its own paragraph because it is the accessibility failure that LLM-generated content reproduces most reliably. Every image in the capstone needs alt text that describes *what the image conveys in the context of the surrounding prose*, not what the image literally depicts. Bloom waving has `alt="Bloom the elephant waving welcome"`, not `alt="cartoon elephant standing"`. The distinction is whether a reader who can't see the image can still follow the chapter.

## The Peer Review Process

The ***Peer Review Process*** is a structured protocol for getting a second set of eyes on a capstone before it ships. Peer review is asynchronous, written, and time-boxed — the reviewer gets the chapter, reads it once at reading pace, runs the rubric once, and writes back. A typical review cycle takes ninety minutes end to end.

Four kinds of feedback tend to come out of peer review, and they require different responses from the author.

| Feedback type | What it sounds like | How to respond |
|---|---|---|
| **Praise** | "The mascot voice is really consistent across the chapter." | Note it, thank the reviewer, and preserve the thing that worked. Don't rewrite around praise. |
| **Critique** | "The causal loop in section 4 doesn't close — there's no arrow back from outcomes to motivation." | Treat as a specific claim to verify and fix. If the critique is right, the chapter has a real defect; if it's wrong, the reviewer probably misread, which is itself signal that the section is unclear. |
| **Sharpening** | "This paragraph is good, but the term *desirable difficulty* is introduced twice. You could compress." | High-value feedback that tightens the text. Apply directly; these changes rarely make things worse. |
| **Deflective** | "Have you thought about adding a chapter on gamification?" | Out of scope. Thank the reviewer and log it as a future-work note, not as a capstone change. Scope creep is the silent killer of peer-review cycles. |

The author's job during peer review is to **separate the signal from the preference**. A reviewer's preference for a different chapter structure isn't a defect; a reviewer's confusion about what a paragraph claims *is* a defect, even if the reviewer didn't articulate it as one. Train yourself to hear "I got lost in section 3" as "section 3 needs work," not as "this reader wasn't paying attention."

The peer-review protocol also has two anti-patterns worth naming. **Shipping without peer review** is a footgun: it's silent (the author's own eyes can't see the chapter the way a first-time reader does), easy to trigger (the deploy command is right there), and produces delayed damage (the public reader finds the bugs instead of the reviewer). The structural fix is to require a peer-review turn-around in the publishing workflow — no deploy until at least one external reader has run the rubric. **Treating peer review as approval** is the opposite footgun: the author interprets "I read it, looked good" as a pass when the reviewer actually skimmed. The fix is to ask the reviewer to report their rubric scores, not a thumbs-up — scores force actual reading.

## Iterative Improvement

***Iterative Improvement*** is the discipline that turns a shipped capstone into a series of better-shipped capstones. The chapter-content-generator skill emits a `version` field in the front matter; every meaningful change increments that field, and a short changelog at the bottom of the chapter records what changed and why. A chapter at version 0.03 that has been deployed three times should read like a chapter that has seen three rounds of real feedback.

A recurring decision inside iterative improvement is *regenerate or edit by hand*. Regenerating the whole chapter from the outline costs tokens and discards the prose-level edits an author has already made; editing by hand preserves those edits but doesn't benefit from changes in the outline, the style guide, or the learning graph. A rough rule: structural changes (new section, reordered concepts, new rubric item) want a regeneration; prose-level changes (a clearer sentence, a fixed typo, a tightened paragraph) want a hand edit. When both kinds of change are pending, stage the regeneration first and then apply hand edits on top.

#### Diagram: The Iteration Flywheel

<details markdown="1">
<summary>Causal loop diagram showing how shipping, feedback, revision, and quality reinforce each other — and how ship-and-forget breaks the loop</summary>
Type: causal-loop-diagram
**sim-id:** iteration-flywheel<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing seven variable-nodes and one reinforcing loop plus one balancing anti-pattern. All nodes are noun phrases naming variables that can go up or down.

Nodes: *ship cadence*, *reader feedback volume*, *peer review turnaround*, *revision rate*, *chapter quality*, *reader trust*, *ship-and-forget frequency*.

Edges and polarities for **R1 — Iteration flywheel (reinforcing):**

- ship cadence → reader feedback volume (+) — shipping produces readers, readers produce feedback
- peer review turnaround → revision rate (+) — faster reviews mean faster revisions
- reader feedback volume → revision rate (+) — feedback seeds revision
- revision rate → chapter quality (+, with delay ⧚) — revisions compound into quality
- chapter quality → reader trust (+) — good chapters build trust
- reader trust → ship cadence (+) — trusted authors ship more confidently
- peer review turnaround → ship cadence (+) — fast reviews enable faster releases

Edges for **B1 — Ship-and-forget brake (balancing anti-pattern):**

- ship cadence → ship-and-forget frequency (+) — shipping without a feedback gate tempts "ship and move on"
- ship-and-forget frequency → reader feedback volume (−) — no feedback mechanism, no feedback
- ship-and-forget frequency → revision rate (−) — revisions never happen if feedback isn't collected

Loop labels at each loop's geometric center:

- **R1 — Iteration flywheel (reinforcing, productive).** Ship → feedback → revise → quality → trust → more ship. Peer review accelerates the inner portion of the loop.
- **B1 — Ship-and-forget brake (balancing, corrosive).** Shipping without a feedback gate starves the flywheel.

Visual treatment: R1 nodes in cool blue; the B1 anti-pattern in warm orange; delay marker ⧚ on the revision-rate-to-chapter-quality edge; every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping.
</details>

Read loop **R1** in plain English. Shipping a chapter produces readers; readers produce feedback; feedback seeds revisions; revisions compound, over time (the delay marker), into higher chapter quality; higher quality builds reader trust; trust makes the next ship easier. Peer review is the accelerator on the loop — it shortens the cycle between ship and feedback from weeks (public readers) to hours (a single reviewer). The loop runs on cadence: an author who ships once and never again doesn't get the compounding benefit, which is why ship-and-forget is an anti-pattern, not just a style preference.

## Mastery Demonstration

***Mastery Demonstration*** is what the capstone is, formally, measuring — *Create*-level mastery in the Bloom 2001 sense. Create-level work is defined as putting elements together to form a coherent functional whole. Every earlier Bloom level shows up *inside* the capstone (the author remembers the Seven Domains, understands the research, applies cognitive-load theory to the MicroSim, analyzes the learning graph, evaluates against the rubric), but the whole is larger than the parts. A reader who could do each step in isolation but couldn't assemble the artifact would not have demonstrated Create-level mastery.

One distinction matters at this stage: "finished" is not "ready to ship." A finished chapter is one where the author has stopped adding material. A ready-to-ship chapter is one that has passed the rubric, the accessibility audit, and at least one peer review, and whose author can point at the deployed URL. The gap between the two states is usually two to five days of iteration, and that gap is where mastery gets demonstrated.

!!! mascot-tip "The Budget for the Last 10%"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom the elephant giving a tip">
    Reserve at least 25% of your total capstone time for the work *after* the first draft is done — the rubric pass, the accessibility audit, the peer review cycle, and the iteration pass. Authors who spend 95% of their time on the first draft and 5% on the finish consistently ship chapters that feel almost-ready. Authors who budget for the last ten percent ship chapters that feel done.

## Pre-Flight Check: Before You Ship

Close the tab and try these from memory. They're the "pre-flight" items — the things to confirm before running `mkdocs gh-deploy` on your capstone. If you can't answer one, go find the section.

1. **State** the three commands in the CPD workflow and what each one verifies. (Level: Remember / Understand.)
2. **Name** the minimum artifact set every capstone must include — the four engagement artifacts plus the deployment target. (Level: Remember.)
3. **Explain** in one sentence why the rubric is a floor, not a ceiling, and give one example of how Goodhart's Law could corrupt rubric use. (Level: Understand / Evaluate.)
4. **Identify** which checks in the accessibility audit are best handled automatically and which require manual testing. State one failure mode that only manual testing catches. (Level: Analyze.)
5. **Given** a peer reviewer's comment — "Have you thought about adding a chapter on gamification?" — decide whether to act on it before shipping the capstone. Justify your answer using the four feedback types. (Level: Apply / Evaluate.)
6. **Trace** one full cycle of the iteration flywheel (R1) in your own words and name the anti-pattern (B1) that breaks it. (Level: Analyze.)
7. **Distinguish** between "finished" and "ready to ship" as states of a capstone, and name two things that happen in the gap between them. (Level: Understand / Evaluate.)
8. **Critique** this workflow: *write the chapter, run `mkdocs gh-deploy`, post the URL to colleagues, read whatever feedback arrives.* What's missing, and in what order should it be added? (Level: Evaluate.)
9. **Decide** whether a proposed capstone revision — replacing the MicroSim with an updated version — warrants a full regeneration of the chapter or a hand edit. Justify your choice. (Level: Apply.)
10. **Evaluate** your own capstone against items 19 and 20 of the rubric (clean deploy and accessibility pass). If either item is not yet a confident pass, name the specific next action you'll take before running the deploy command. (Level: Evaluate.)

If question 10 produced real hesitation, stop before you ship. The hesitation is the signal.

## The Book's Closing Thought

We started fourteen chapters ago with a claim: capability without principle produces noise. The fourteen chapters between there and here have been, in their entirety, the *principle* — the research from the Seven Domains, the architecture of the intelligent textbook, the craft of MicroSims and mascots and stories, the discipline of skills. The capstone is the first time all of it shows up in one artifact, running under your name, on a URL you control.

Three things to carry forward after the capstone ships. First, the Seven Domains are a diagnostic lens for every piece of instruction you'll see for the rest of your career — someone else's course, a talk at a conference, a tutorial video, your own drafts. Use it. Second, the production pipeline is subject-neutral — you can point it at a new subject next month and get another capstone-sized chapter out the other end. The investment you just made is reusable. Third, the chapters that work aren't the ones with the most artifacts; they're the ones where the artifacts *serve the reader*, every mascot appearance changes what the reader does next, every MicroSim exercises a concept the chapter just defined, every quiz item measures something the prose actually taught. Coherence is the quality that separates a capstone from a pile.

!!! mascot-celebration "Go Make Something"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom the elephant celebrating with trunk raised">
    You have the pipeline. You have the mascot. You have the mental models — the Seven Domains, the learning graph, cognitive load, retrieval practice, desirable difficulty, the iteration flywheel. Fifteen chapters ago, the gap between "content that exists" and "content that teaches" felt like a mystery; now it's a set of moves you know how to make. I'm not going to tell you what to build next. Pick a subject you care about, a reader you want to help, and a slice small enough to ship. Then ship it. The world already has enough content that looks like teaching. It could use more that actually is. Go make something. It's been a real pleasure walking the book with you.
