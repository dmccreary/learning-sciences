# CLAUDE.md — Learning Sciences for Intelligent Textbook Design

Project-specific instructions for Claude Code when working in this repo. Global instructions in `~/.claude/CLAUDE.md` still apply.

## Project summary

An intelligent textbook on the emerging field of Learning Sciences, organized around the Seven Domains (Learner Motivation; Understanding; Retention; Application; Expertise; Measurement; Learning Conditions). The book is unusual in that it teaches readers how to build intelligent textbooks with Claude Agent Skills, MicroSims, mascot admonitions, and short-form graphic novels — so the book's own production pipeline is part of the curriculum.

## Learning Mascot: Bloom the Elephant

### Character Overview

- **Name:** Bloom
- **Species:** Elephant
- **Personality:** Wise, curious, warm, playful
- **Catchphrase:** "Let's build a mental model."
- **Visual:** Small, round, cartoon elephant with soft blue-gray skin and cream highlights inside the ears. Wears small round wire-rimmed glasses in a warm blue color. Holds nothing — no hat, no book, no clothing. Just the glasses. Modern flat vector art style with clean lines on a transparent background.

### Voice Characteristics

- Warm and unhurried — Bloom is wise but never condescending.
- Grounds statements in the learning-sciences research (testing effect, spaced practice, cognitive load theory, ZPD, etc.) without name-dropping citations in the body text.
- Uses "we" and "let's" framing — learning is collaborative, not adversarial.
- Normalizes struggle explicitly: "This part often feels hard the first time — that's the desirable difficulty working." That framing is itself a motivation intervention.
- Signature phrases: "Let's build a mental model.", "Retrieve, don't re-read.", "What does the research say about this?"

### Mascot Admonition Format

Always place mascot images **in the admonition body**, never in the title bar. The `<img>` tag requires `md_in_html` (already enabled in `mkdocs.yml`).

    !!! mascot-welcome "Title Here"
        <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom waving welcome">
        Body text goes after the img tag. Keep it to 1–3 sentences.

The `src` path depth must match the rendered page's directory depth. MkDocs uses directory URLs, so a chapter at `chapters/01-motivation/index.md` renders at `chapters/01-motivation/` and needs `../../img/mascot/`. A page at `learning-graph/mascot-test.md` also needs `../../img/mascot/`. Count `../` from the rendered URL.

### Placement Rules

| Context | Admonition type | Frequency |
|---|---|---|
| General note / sidebar | `mascot-neutral` | As needed |
| Chapter opening | `mascot-welcome` | Exactly one per chapter |
| Key concept | `mascot-thinking` | 2–3 per chapter |
| Helpful tip | `mascot-tip` | As needed |
| Common mistake | `mascot-warning` | As needed |
| Difficult content | `mascot-encourage` | Where students may struggle |
| Section completion | `mascot-celebration` | Exactly one per chapter at the end |

### Do's

- Use Bloom to introduce the chapter's central question.
- Include the catchphrase in the welcome admonition when it fits naturally.
- Keep dialogue to 1–3 sentences. Bloom is a signpost, not a narrator.
- Match the pose to the content type (the image does the emotional work; the text doesn't need to re-state it).

### Don'ts

- **Don't** use Bloom more than 6 times in a single chapter.
- **Don't** put mascot admonitions back-to-back — they lose signal value.
- **Don't** use the mascot decoratively. Every appearance should change what the reader does next (pause, revise, try the exercise, etc.).
- **Don't** alter Bloom's personality, voice, or appearance. Consistency across chapters is the whole point.

### Files

- `docs/img/mascot/{neutral,welcome,thinking,tip,warning,encouraging,celebration}.png` — the seven pose images
- `docs/img/mascot/image-prompts.md` — self-contained AI prompts for regenerating any pose
- `docs/css/mascot.css` — admonition styling (registered in `mkdocs.yml` under `extra_css`)
- `docs/learning-graph/mascot-test.md` — rendering regression page (open it after CSS or image changes)

## Writing Style Guide

This style guide governs **all chapter prose, mascot dialogue, exercise prompts, admonition bodies, and MicroSim captions**. The goal is a consistent voice across the book: positive, fun, helpful, encouraging, and lightly humorous — the kind of voice you'd want from a trusted tutor who is also good company. Bloom the Elephant is the embodiment of this voice. Even text that does not mention Bloom should sound like it could.

### Core Voice Principles

1. **Warm, not saccharine.** We are generous with encouragement, but we do not oversell. "Nice — that's the testing effect at work" beats "Amazing job!! You're crushing it!!" Earned praise carries weight; reflexive praise trains readers to ignore it.
2. **Curious, not authoritative.** We frame learning as an investigation *we are doing together*, not a lecture we are delivering. Prefer "Let's see what happens when…" over "You must understand that…"
3. **Playful, not goofy.** Humor is a seasoning, not a main course. One small grin per section is plenty. If a joke would confuse an ESL reader or distract from the concept, cut it.
4. **Precise, not stuffy.** Plain words over Latinate ones ("use" not "utilize"; "show" not "demonstrate"; "help" not "facilitate"). Short sentences between longer ones create rhythm.
5. **Research-grounded, not citation-heavy.** Mention research findings casually in-line ("spaced practice beats massed practice — which is why we come back to this idea in Chapter 5"). Save formal citations for the references section.
6. **Learner-respecting, never condescending.** Assume the reader is smart and busy. Do not explain a word we just defined. Do not apologize for hard material — name the difficulty and walk alongside it.

### Person, Tense, and Voice

- **"We" for shared thinking.** "We noticed that…", "Let's try…", "We'll come back to this."
- **"You" for actions the reader takes.** "You might pause here and sketch the graph." Use sparingly — too much "you" feels like instructions for an appliance.
- **"I" is reserved for Bloom's dialogue only.** Chapter prose does not have a first-person narrator.
- **Present tense by default.** "The testing effect strengthens memory." Past tense only for historical anecdotes; future tense only for previewing ("In the next section we'll…").
- **Active voice.** "Researchers found…" not "It was found by researchers…"
- **Contractions are welcome.** "Let's", "we'll", "that's", "don't". They signal conversation, not carelessness.

### Sentence and Paragraph Rhythm

- Average sentence length: **15–22 words**. Vary it — a 6-word sentence next to a 25-word one is the texture we want.
- Paragraphs: **2–5 sentences**. A one-sentence paragraph is allowed for emphasis, but no more than once per section.
- Open sections with a concrete hook (a question, a scenario, a surprising finding) before the abstract framing.
- Close sections with a bridge — a single sentence that points at what comes next or what to do with what we just learned.

### Humor Guidelines

Humor should be **gentle, nerdy, and inclusive** — the kind that makes a reader smile, not laugh aloud. Think *xkcd* restraint, not stand-up.

- **Good:** "Your working memory has roughly four slots. Yes, four. This explains a lot of grocery trips."
- **Good:** self-deprecating asides about the writing process ("The authors learned this the hard way — twice.").
- **Good:** naming a pattern humorously after we define it ("We'll call this the *highlighter illusion* — the warm feeling that yellow ink equals learning.").
- **Avoid:** sarcasm aimed at the reader, their prior teachers, or other fields.
- **Avoid:** pop-culture references that will date within two years or exclude international readers.
- **Avoid:** puns in technical definitions. A definition is a contract; jokes there cost clarity.
- **Never:** humor about learning disabilities, test anxiety, motivation struggles, or age. These are the reader's real pain points.

### Encouragement Patterns

When a reader is about to hit a hard idea or a common stumbling block, use one of these patterns rather than generic "You can do it!":

- **Normalize the difficulty:** "This part tends to feel slippery on a first read. That's the concept working against your intuition — which is exactly where learning happens."
- **Name the desirable difficulty:** "If this feels harder than re-reading the last section, good. Effortful retrieval is what moves knowledge into long-term memory."
- **Offer a concrete next move:** "If the diagram isn't clicking yet, close your eyes and try to describe it out loud. Stumbling there tells you which piece to re-read."
- **Preview the payoff:** "Stick with the notation for one more page — once it clicks, the next three chapters get dramatically shorter."

### Vocabulary

- **Always prefer:** use, help, show, find, build, try, notice, remember, retrieve, revisit.
- **Use carefully:** leverage, utilize, facilitate, robust, deep-dive, unpack (each has its place; each is overused).
- **Avoid in body text:** "obviously", "simply", "just", "clearly", "of course". These words either insult a reader who didn't find it obvious or lie to one who did.
- **Avoid hype:** "game-changing", "revolutionary", "cutting-edge", "powerful". If a thing is genuinely new, show the reader why; don't tell them to be impressed.
- **Term-of-art rule:** the first time a domain term appears, introduce it in italics and give a one-sentence plain-English gloss in the same sentence. Example: *retrieval practice* — pulling information out of memory rather than reading it back in.

### Formatting Conventions

- **Bold** for the first occurrence of a key term in a section, and for action verbs in a step list ("**Pause** and predict before reading on.").
- *Italics* for book titles, for emphasis on a single word, and for the introduction of a term of art (see above).
- `Code voice` only for literal code, filenames, CLI flags, and exact UI labels.
- Bulleted lists for **parallel** items; numbered lists for **ordered** steps. Do not mix the two in one list.
- One blank line between paragraphs, between list and prose, and before every admonition. No trailing whitespace.
- Em dashes — used freely for asides — are part of the voice. Use spaces around them.
- Use the Oxford comma.
- Numerals for numbers 10 and above, words for zero through nine, except when a sentence starts with a number (rewrite it) or when numbers are mixed in a comparison ("between 8 and 12 items").

### Chapter-Level Structure Cues

Even without reading the mascot admonitions, a reader should feel a consistent shape to each chapter:

1. **Hook** — a concrete scenario, question, or small puzzle. No abstract definitions yet.
2. **Why this matters** — one short paragraph that connects the chapter to the reader's goals.
3. **Core idea** — the main concept, introduced with a named term-of-art.
4. **Worked example or MicroSim** — show the idea in motion before abstracting it.
5. **Common misconceptions** — call them out directly; readers relax when we acknowledge the traps.
6. **Retrieval prompt** — one or two questions the reader can answer from memory, not by re-reading.
7. **Bridge** — one sentence to the next chapter.

### Mascot Dialogue Voice (sharper constraints than body prose)

Bloom speaks in **1–3 sentences, plain words, no jargon unless it was introduced on the same page**. Bloom never says "obviously". Bloom never ends with an exclamation point more than once per chapter — weight them. Bloom gently normalizes struggle and points at the next action.

- **On-voice:** "This one surprised me the first time, too. Close the book for a moment — can you explain the testing effect out loud? That's the move that makes it stick."
- **Off-voice (too peppy):** "Great job everyone!!! You're doing AMAZING!!! Let's gooo!!!"
- **Off-voice (too formal):** "The empirical literature demonstrates robust evidence for retrieval-based encoding."
- **Off-voice (too chummy):** "lol this part is wild, just vibe with it."

### Systems Thinking, Causal Loops, and Critical Thinking

Learning Sciences is a **systems field**: motivation, memory, practice, environment, and measurement all affect each other. Chapters must teach readers to see those connections, not just memorize isolated findings. Three habits of mind run through the whole book:

1. **Holistic systems thinking.** Treat every topic as a node in a larger system. When we introduce a concept, we also name at least one upstream cause and one downstream effect. "Cognitive load" isn't just a number to lower — it's a variable that rises with poor instructional design and falls when we chunk, scaffold, or offload to a MicroSim. Resist the urge to present findings as standalone facts; show the reader where they sit in the web.
2. **Causal reasoning over correlation.** Many popular learning claims are correlational dressed up as causal ("students who highlight more get worse grades — so highlighting causes low grades"). Whenever we cite a finding, note whether it comes from an experiment, a quasi-experiment, or an observational study, and flag the plausible confounds. Teach readers the question *"what else could explain this?"* as a reflex.
3. **Critical thinking as a first-class skill.** Every chapter should include at least one prompt that asks the reader to **evaluate, critique, or extend** a claim rather than recall it. Good prompts: "Where might this effect fail?", "What would you need to see to believe the opposite?", "Which assumption is doing the real work here?" This is how we move readers up Bloom's Taxonomy from *understand* to *analyze* and *evaluate*.

**Feedback loops deserve special attention.** Much of what makes learning hard to design is that it is full of reinforcing and balancing loops: confidence → practice → competence → confidence (reinforcing); difficulty → frustration → avoidance → skill gap → more difficulty (reinforcing, and corrosive). When a chapter touches a loop, **name it as a loop**, show its polarity, and — where it helps — render it as a causal loop diagram.

### When to Use Which Visualization

Chapter authors have three main visualization tools. Choose based on what the reader needs to see:

| Reader needs to… | Use | Skill |
|---|---|---|
| See the parts of a single artifact labeled in context (brain region, classroom layout, memory system, dashboard) | **Interactive infographic overlay** — a scientific illustration with clickable callout markers, explore/quiz modes | `interactive-infographic-overlay` |
| See how variables influence each other over time (motivation ↔ effort ↔ mastery; cognitive load ↔ performance) | **Causal loop diagram** — nodes as variables, arrows with +/− polarity, reinforcing (R) and balancing (B) loop labels | Mermaid `graph` / `flowchart` with custom edge labels, or a dedicated MicroSim |
| See a process the reader can run themselves with parameters | **MicroSim** (p5.js or appropriate library) | `microsim-generator` |

**Guidelines for infographic overlays.** Use them for any concept that has a *spatial or anatomical structure* worth pointing at — the working-memory/long-term-memory pipeline, a classroom seating layout, the parts of a rubric, the stages of a retrieval-practice study. The `interactive-infographic-overlay` skill generates the image prompt, the `data.json` with marker positions, and the `main.html` that wires up explore/quiz/edit modes. Prefer an overlay over a flat diagram whenever the reader benefits from hovering or clicking to reveal labels — it turns a passive picture into a low-stakes retrieval opportunity.

**Guidelines for causal loop diagrams.** Use them for any claim that involves **two or more variables influencing each other**, especially when a loop is present. Every CLD in this book follows the same conventions:

- **Nodes are variables** (things that can go up or down), written as noun phrases: "perceived difficulty", "time on task", "test anxiety". Never use verbs or events as nodes.
- **Arrows carry polarity.** `+` means "when the source goes up, the target goes up (all else equal)"; `−` means "when the source goes up, the target goes down". Label every arrow.
- **Loops are named.** Mark reinforcing loops with `R1`, `R2`, … and balancing loops with `B1`, `B2`, …, placed at the loop's center with a short English name ("R1: confidence flywheel", "B1: frustration brake").
- **Delays are shown** with a double hash `⧚` or a labeled "delay" tag when the effect takes time to materialize (practice → mastery is delayed; stress → avoidance is fast).
- **Keep CLDs under ~8 nodes.** If the system is larger, split it into sub-diagrams and show how they connect.
- **Pair every CLD with a one-paragraph walkthrough** that traces one loop in plain English. The diagram shows the structure; the prose shows how to *read* it.

Reach for a CLD the moment a chapter says "this affects that, which in turn affects…" — that phrase is the structural signature of a loop, and a diagram will usually explain it faster than three paragraphs.

### Consistency Checks Before Shipping a Chapter

Before marking a chapter done, scan for:

- [ ] No instances of "obviously", "simply", "just", "clearly" in body text.
- [ ] No hype adjectives ("game-changing", "revolutionary", etc.).
- [ ] Every term-of-art is italicized on first use and glossed in the same sentence.
- [ ] Exactly one `mascot-welcome` at the top and one `mascot-celebration` at the end.
- [ ] Total mascot admonitions ≤ 6.
- [ ] No back-to-back mascot admonitions.
- [ ] At least one retrieval prompt in the chapter.
- [ ] The closing bridge names the next chapter's hook.
- [ ] At least one prompt asks the reader to evaluate, critique, or extend a claim (not just recall).
- [ ] Any claim cited as "X causes Y" notes the study design and at least one plausible confound.
- [ ] If the chapter describes two or more variables influencing each other, a causal loop diagram is present with polarities and named loops.
- [ ] If the chapter describes a spatial or anatomical structure, consider an interactive infographic overlay rather than a flat image.
- [ ] Read the chapter aloud — if a sentence can't be read in one breath, split it.

## Project-specific conventions

- **No `navigation.tabs`** in `mkdocs.yml`. Side navigation only (enforced by global CLAUDE.md).
- The social override is wired as an **mkdocs hook** at `plugins/social_override.py`, not a plugin — don't reintroduce the setup.py/entry-point path.
- The graph viewer ships at template v0.04 (see `docs/sims/graph-viewer/main.html` for the badge). Bump the badge when changing viewer behavior.
