---
title: Pedagogical Mascots and Admonitions
description: Teaches the design of a pedagogical mascot from persona and visual identity through voice guide, the six admonition types, CSS styling, and narrative voice consistency — using Bloom the Elephant as the running exemplar.
generated_by: claude skill chapter-content-generator
date: 2026-04-19 13:15:00
version: 0.07
---

# Pedagogical Mascots and Admonitions

!!! mascot-welcome "Welcome — Meet the Pattern You've Been Using for Eleven Chapters"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    Hello again. I've been walking alongside you since Chapter 1 — introducing ideas, flagging pitfalls, normalizing the struggle where it shows up, and celebrating progress at each chapter close. In this chapter the tables turn: instead of using me, you'll learn to *design* your own version of me. We'll cover the character sheet, the visual identity, the voice guide, the admonition types, and the cross-cutting CSS that keeps the voice consistent. By the end, you'll have a repeatable method for building a mascot that earns its pixels on the page. Let's build a mental model.

## Summary

This chapter teaches readers to design a pedagogical mascot from scratch: persona, visual identity, voice guide, and the six admonition types (hint, warning, tip, encouragement, danger, understanding check). We cover admonition CSS styling and narrative voice consistency across chapters. Readers finish with the patterns they need to make their own mascot a genuine learning intervention, not decoration.

## Concepts Covered

This chapter covers the following 13 concepts from the learning graph:

1. Pedagogical Mascot
2. Mascot Persona
3. Mascot Visual Identity
4. Mascot Voice Guide
5. Mascot Admonition
6. Hint Admonition
7. Warning Admonition
8. Tip Admonition
9. Encouragement Admonition
10. Danger Admonition
11. Understanding Check Admonition
12. Admonition CSS Styling
13. Narrative Voice Consistency

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Learning Sciences](../01-foundations/index.md)
- [Chapter 2: The Seven Domains Framework](../02-seven-domains/index.md)
- [Chapter 3: Motivation and Engagement](../03-motivation-engagement/index.md)
- [Chapter 10: Intelligent Textbook Architecture and AI Tooling](../10-textbook-architecture/index.md)
- [Chapter 11: MicroSims and Interactive Visualizations](../11-microsims/index.md)

---

## What Makes a Mascot Pedagogical

A ***Pedagogical Mascot*** is a recurring character in a learning artifact whose appearances serve a pedagogical function — orienting attention, delivering retrieval prompts, normalizing struggle, or closing a feedback loop — rather than a branding or decorative function. The distinction is sharper than it sounds. A cereal-box mascot exists to make the brand memorable; a pedagogical mascot exists to change what the reader *does next*. If an appearance of the character doesn't prompt the reader to pause, predict, retrieve, revise, or move on with more confidence, that appearance is decoration, and decoration is a cost the reader pays in attention without a matching return.

By the end of this chapter you will be able to:

- Define a pedagogical mascot and distinguish it from a brand mascot.
- Design a mascot persona — species, form, personality, knowledge stance, and catchphrase — that can survive 300 pages of use.
- Specify a visual identity that stays recognizable across regenerations by different image tools.
- Write a voice guide that prevents drift across multiple chapters, multiple authors, and multiple LLM sessions.
- Place mascot admonitions across the six types (hint, warning, tip, encouragement, danger, understanding check) with correct frequency and positioning.
- Style mascot admonitions with CSS that signals category at a glance while staying accessible.
- Audit an existing chapter for narrative voice consistency and name the drift patterns it reveals.
- Recognize when a mascot becomes a footgun and propose the structural fix.

Three findings from earlier chapters frame the whole discussion. From Chapter 3, Self-Determination Theory identifies *relatedness* — the felt presence of another person who cares about the learner's progress — as one of the three basic needs underwriting intrinsic motivation. In an otherwise authorless document, the mascot is the primary relatedness channel. From Chapter 4, cognitive load theory reminds us that every unfamiliar element on a page spends some of the learner's extraneous-load budget; a *consistent* mascot, after the first few appearances, moves from extraneous load to germane signal because the reader learns to predict what each admonition type is for. From Chapter 9, psychological safety determines whether a struggling learner will attempt the next problem or close the tab; the mascot's normalization of difficulty is a safety intervention cheap enough to run on every hard page.

Those three findings give us the working definition the rest of this chapter operationalizes. A pedagogical mascot is the voice layer that delivers **relatedness**, **cognitive predictability**, and **psychological safety** through a consistent character whose every appearance is a small pedagogical move.

## Mascot Persona

A ***Mascot Persona*** is the character sheet that defines who the mascot is — species or form, personality, knowledge stance, relationship to the reader, and signature phrases. Without a written persona, every author and every LLM session will reach for plausible defaults, and those defaults will differ. With a written persona, the same character survives regeneration after regeneration.

Bloom the Elephant is the persona for this book. The full character sheet has seven fields, and the lines we've held for Bloom are worth naming so you can steal the shape of the document, not only the content.

| Persona field | Bloom's value | Why this field matters |
|---|---|---|
| Name | Bloom | A proper name forces the mascot into the reader's semantic memory. "The elephant" is generic; "Bloom" is specific. |
| Species or form | Small, round cartoon elephant | Concrete enough to draw identically; abstract enough to stylize. |
| Personality | Wise, curious, warm, playful | Four adjectives is the right length — enough to constrain behavior, few enough to remember. |
| Knowledge stance | Knows the field; thinks *with* the reader, not *at* them | "Tutor who reads the research" — not professor, not cheerleader. |
| Relationship to reader | Learning companion, not instructor | Uses "we" and "let's"; never "you must". |
| Signature phrases | "Let's build a mental model." "Retrieve, don't re-read." | Two or three phrases maximum; they are spice, not staple. |
| Physical accessories | Small round wire-rimmed glasses in warm blue | One distinguishing feature is enough; more creates drawing drift. |

Two of those fields deserve more attention because they are the ones most often under-specified in first drafts. **Knowledge stance** determines what the mascot is allowed to claim. A mascot that says "the research is clear that X" in a field where the research is actually mixed breaks the reader's trust; a mascot that hedges every claim to the point of saying nothing wastes the reader's time. Bloom's stance — *knows the field, thinks with the reader* — resolves this: Bloom names findings with their evidence level, flags what's contested, and co-investigates rather than pronounces. **Relationship to reader** is the field that prevents the most embarrassing drift: an "instructor" mascot sooner or later starts issuing commands, and commands break the autonomy leg of the SDT triad. Writing *companion* on the character sheet is a commitment to a pronoun — *we*, not *you must* — that carries the relationship.

!!! mascot-thinking "A Persona Is a Negative Space, Too"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    The character sheet is as useful for what it *forbids* as for what it permits. When Bloom is defined as warm and unhurried, an over-enthusiastic cheerleader voice is out of bounds by construction. When the relationship is companion, a command verb like *must* stands out as off-voice immediately. The forbidden region is where drift is detected — so write the persona tightly enough that drift has somewhere to stand out against.

## Mascot Visual Identity

A ***Mascot Visual Identity*** is the set of visual constraints that keep the mascot recognizable across poses, regenerations, and image tools. The word *constraint* is doing the work: visual identity is not a single reference image but the *envelope* inside which any new image of the mascot must sit. Consistency here matters more than polish; a reader will forgive a slightly awkward drawing, but a reader will not recognize a character whose proportions, palette, or accessories shift between chapters.

The Bloom visual identity has five load-bearing constraints.

1. **Body form** — small, round, cartoon-proportioned; head-to-body ratio roughly 1:1.2; four visible legs; short trunk; small curved tusks.
2. **Palette** — soft blue-gray body (the same hex across regenerations); cream highlights inside ears; warm-blue wire-rimmed glasses as the only accessory.
3. **Face** — large kind dark eyes; closed-mouth smile as the neutral expression; glasses positioned consistently on the bridge of the trunk-adjacent forehead.
4. **Background** — transparent, always; no white boxes, no checkered placeholder, no baked-in color. This is what lets the mascot float on any admonition background color.
5. **Style** — modern flat vector; clean lines; no photorealism; no gradients except for the subtle ear-interior highlight.

The constraints live in a self-contained prompt library — the file `docs/img/mascot/image-prompts.md` in this book — with one prompt per pose, each including the full constraint block inline. The redundancy across prompts is deliberate. An image tool does not remember the previous prompt; every prompt has to specify the character in full or the next pose will drift.

#### Diagram: The Seven Bloom Poses and When to Use Each

<details markdown="1">
<summary>Interactive infographic overlay: the seven Bloom poses (neutral, welcome, thinking, tip, warning, encouraging, celebration) with hover-reveal usage guidance</summary>
Type: interactive-infographic
**sim-id:** bloom-poses-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a three-by-three grid of cream-backgrounded cells (the last two cells empty) showing the seven Bloom poses — neutral, welcome, thinking, tip, warning, encouraging, celebration — in a consistent drawing style with transparent per-cell backgrounds. Each cell has a labeled border in the admonition color corresponding to the pose (primary blue for welcome, warm brown for thinking, teal for tip, red for warning, deep purple for celebration, accent orange for encourage, slate gray for neutral). The base image is annotation-free; pose names, use-cases, and admonition-type pairings come from overlay markers positioned via `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering any pose reveals a tooltip with (a) the pose name, (b) the admonition type it pairs with, (c) one concrete learning moment where it fits best, and (d) the reason — in SDT or cognitive-load terms — that it's the right pose for that moment.
- **Quiz mode:** A short scenario appears (for example, *"The reader has just encountered a claim that contradicts their intuition and may feel defensive"*) and the reader clicks the pose that best fits. Correct answers highlight green; incorrect answers reveal the correct pose and a one-sentence explanation.
- **Edit mode (authors only):** Drag markers to recalibrate positions on the base image; export updated `data.json`.

Learning objective (Bloom level: Apply): *Given a learning moment in a chapter, select the mascot pose whose pedagogical function fits best.*

Responsive: canvas width adapts to container via `updateCanvasSize()` as the first line of `setup()`; marker anchor ratios preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/bloom-poses-gallery/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the annotation-free base image.
</details>

Consistency, not polish, is the bar worth holding. A reader who sees three Blooms with subtly different ear shapes in the same chapter spends working memory asking *is this the same character?* — which is exactly the orienting load a consistent identity is supposed to spare them.

## Mascot Voice Guide

A ***Mascot Voice Guide*** is the written specification of how the mascot speaks — tense, person, register, vocabulary constraints, humor rules, prohibited moves, and a short set of on-voice and off-voice examples. It is the instrument that keeps the mascot's voice stable across chapters, authors, and LLM sessions. Without the guide, voice drift is not a risk; it's a certainty.

The voice guide for Bloom lives inside the project's `CLAUDE.md` file, where every authoring pass reads it before generating prose. Six rules cover most of the work.

1. **Person:** *we* and *let's* for shared thinking; *you* for actions the reader takes; *I* reserved for Bloom's direct speech inside an admonition.
2. **Tense:** present by default; past only for historical asides; future only to preview what's next.
3. **Register:** warm-but-unhurried. Contractions welcome. Exclamation points rare and load-bearing.
4. **Length inside an admonition:** one to three sentences. Bloom is a signpost, not a narrator.
5. **Prohibited words in body prose:** *obviously*, *simply*, *just*, *clearly*, *of course*. These words insult readers who didn't find it obvious and lie to the ones who did.
6. **Hype ban:** *game-changing*, *revolutionary*, *cutting-edge*, *powerful*. If a thing is new, show why; don't tell the reader to be impressed.

A four-way comparison helps more than a list of rules, because drift is almost always *toward* one of three recognizable off-voice directions.

| Situation | Too peppy (off-voice) | Too formal (off-voice) | Too chummy (off-voice) | On-voice (Bloom) |
|---|---|---|---|---|
| Chapter opening | "Hey friends! Get ready, this is going to be AMAZING!" | "The following chapter addresses the theoretical foundations of retrieval practice." | "lol this chapter's kinda wild, just vibe with it." | "We're about to look at something counterintuitive — why re-reading feels like learning when the evidence says otherwise. Let's build a mental model." |
| Flagging a misconception | "Watch out for this tricky one!!!" | "A commonly held misconception that must be dispelled is as follows." | "Ngl, this one trips everybody up." | "This part surprised me the first time too — the intuition runs the wrong direction. Slow down for a sentence and we'll walk through it." |
| After a hard section | "You did it!!! You're crushing it!!!" | "The learner has now completed the unit and demonstrated procedural mastery." | "Nice, you crushed it, high five." | "That one asked a lot of you. The struggle is the signal — something durable just got built. Ready for the next piece?" |
| Retrieval prompt | "Pop quiz time! Let's see what you remember!" | "Please respond to the following items from memory." | "Okay quick check, no peeking!" | "Close the tab for a minute and try these from memory. Stumbling tells you where to look back — that's the diagnostic, not the grade." |

Drift is rarely dramatic. The usual pattern is a slow accumulation of slightly-too-peppy exclamation points, or a slightly-too-formal use of *utilize* where *use* would have done. The voice guide is the reviewer's reference point for catching the accumulation before it ships.

## Mascot Admonition

A ***Mascot Admonition*** is a styled callout block in the chapter that renders the mascot image in its body with a short line of mascot-voiced text. Admonitions are the delivery vehicle for every mascot appearance in this book. The Markdown format is specific, and the specifics matter — the most common footgun in the whole chapter lives here.

Here is the correct form:

```markdown
!!! mascot-tip "A Working Rule"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom giving a tip">
    When two controls do the same job, pick the smaller one. Every pixel of interface you save is a pixel of germane capacity you hand back to the reader.
```

Three properties of this form are load-bearing. First, the `<img>` tag sits **in the admonition body**, not in the title. Material for MkDocs renders the title as text inside a colored bar; HTML inside the title is escaped in many rendering paths, and an image placed there either appears broken or replaces the title with the image. Keeping the image in the body preserves both the title and the picture. Second, the `class="mascot-admonition-img"` selector is what the CSS hooks onto to float the image left of the body text at the correct size. Third, the `alt` attribute is not optional — it is how screen readers identify the mascot for visually impaired readers, and it is how any HTML-to-text pipeline preserves the mascot's pose information.

The path in the `src` attribute deserves its own note because it is the second most common footgun. MkDocs renders pages at directory URLs; a chapter at `docs/chapters/12-mascots-admonitions/index.md` serves at `/chapters/12-mascots-admonitions/`, which means the chapter's effective depth for relative paths is *two levels below* the `docs/` root. The `../../img/mascot/tip.png` path climbs up two levels to `docs/` and then down into `img/mascot/`. Get that depth wrong and the image silently fails to load — no error in the build log, just a broken-image icon on the rendered page.

#### Diagram: Path Depth for the Mascot Image `src`

<details markdown="1">
<summary>Diagram: relative-path depth calculation for the mascot image `src` attribute across different page locations</summary>
Type: diagram
**sim-id:** mascot-path-depth<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram showing three representative rendered URLs and the path each must use for the mascot image. Each node lists a page location and its required `src` prefix.

Nodes:

- Top-level page (`docs/index.md` → `/`) uses `img/mascot/tip.png` (zero `../`).
- Learning-graph page (`docs/learning-graph/mascot-test.md` → `/learning-graph/mascot-test/`) uses `../../img/mascot/tip.png` (two `../`, one to leave the page slug directory and one to leave the section directory).
- Chapter page (`docs/chapters/12-mascots-admonitions/index.md` → `/chapters/12-mascots-admonitions/`) uses `../../img/mascot/tip.png` (two `../`).
- MicroSim index page (`docs/sims/bloom-poses-gallery/index.md` → `/sims/bloom-poses-gallery/`) uses `../../img/mascot/tip.png` (two `../`).

Edges connect each page location to a "count the rendered URL depth" decision node labeled "one `../` per URL path segment after the site root".

Visual treatment: page nodes in light blue; decision node in amber; the correct-path nodes in green. A small inset box shows the failure mode: too few `../` produces a broken image with no build-log warning.

Implementation: Mermaid `flowchart TD` with `classDef` for node styling; embedded directly in the chapter markdown.
</details>

The rule is memorable as a one-liner: *one `../` per URL path segment between the page and the site root*, then `img/mascot/<pose>.png`. When you move a page, you update the path.

## The Six Admonition Types

This book uses six pedagogical-admonition types, each paired with a Bloom pose and a distinct CSS treatment. The six cover the full range of moves a mascot makes inside a chapter. Writing outside these six is a signal to stop and ask whether a new type is actually needed or whether the content belongs in plain prose.

### Hint Admonition

A ***Hint Admonition*** is a subtle nudge toward a discovery the reader is close to making on their own. It doesn't give the answer; it points at the shape of the answer. Hints work best immediately after a prompt or exercise, so the reader has a moment to try unaided before reading further. In this book the hint visually uses the `mascot-tip` style (teal) but its *content* pattern is distinct — a hint ends with a question back to the reader, where a tip ends with a declarative rule.

### Warning Admonition

A ***Warning Admonition*** flags a common misconception or a likely misstep before the reader walks into it. Warnings use the `mascot-warning` style (red border, pale red background) and Bloom's concerned-but-caring pose. Content pattern: name the misstep, show what the reader would conclude from it, then name the correct move. Use warnings sparingly — one or two per chapter. A chapter that warns on every page trains the reader to skip them.

### Tip Admonition

A ***Tip Admonition*** is a small move with outsized payoff — a habit, a shortcut, or a working rule the reader can carry out of the chapter. Tips use the `mascot-tip` style (teal) and Bloom's helpful pose. Content pattern: state the move in imperative form, then explain in one sentence why it pays off. A tip that cannot fit in two sentences is probably a section of prose, not a tip.

### Encouragement Admonition

An ***Encouragement Admonition*** is the dedicated slot for normalizing struggle on content that readers typically find hard. It uses the `mascot-encourage` style (warm orange) and Bloom's reassuring pose. The content pattern is load-bearing and worth naming: (1) *normalize the difficulty* ("this part often feels slippery on a first pass"); (2) *name the mechanism* ("that's the desirable difficulty working"); (3) *point at a concrete next move* ("try explaining it out loud, then come back"). Generic "you can do it!" encouragement is off-voice — it does not survive an SDT audit because it addresses competence without giving the reader anything concrete to act on.

### Danger Admonition

A ***Danger Admonition*** is reserved for regulatory or safety hard stops — situations where misreading the content could cross a legal, ethical, or privacy line. In this book the canonical Danger case is the Chapter 10 Level 3 privacy boundary: the moment a learning platform begins storing individual student data, it enters FERPA, COPPA, and GDPR territory, and "I didn't know" is not a defense. Danger admonitions should be rare — if a chapter has two, one of them is probably a Warning. Visually, Danger uses a higher-contrast red treatment than Warning (darker border, deeper background) to signal that this is the stop-and-read-carefully tier, not the proceed-with-caution tier. This book's CSS currently implements Danger as a darker variant of `mascot-warning`; production sites may split the class.

### Understanding Check Admonition

An ***Understanding Check Admonition*** is a retrieval prompt delivered in the mascot's voice. It uses the `mascot-neutral` or `mascot-thinking` style, depending on whether the question is soft-prompt or rigorous. Content pattern: one or two questions the reader can answer from memory, framed as an *opportunity to test a memory*, not as a grade. Understanding checks are distinct from the end-of-chapter retrieval check section — checks appear mid-chapter, at a point where the reader has just been introduced to a concept and a tiny retrieval act will ten-fold the concept's durability.

The six types in one table, with their pairings and placement rules, give you the whole menu at a glance.

| Admonition type | CSS class | Bloom pose | Purpose | Frequency per chapter | Typical placement | Example Bloom line |
|---|---|---|---|---|---|---|
| Welcome | `mascot-welcome` | welcome | Introduce the chapter's central question | Exactly 1 | Top of chapter, before Summary | "We're about to look at something counterintuitive — let's build a mental model." |
| Hint | `mascot-tip` (hint variant) | tip | Nudge toward discovery | 0 to 2 | After a prompt or exercise | "Before reading the answer — what changes when the slider moves past the midpoint?" |
| Warning | `mascot-warning` | warning | Flag misconception or likely misstep | 0 to 2 | Right before the trap | "This part is where most readers over-generalize. The effect replicates for X, not Y." |
| Tip | `mascot-tip` | tip | Small move with outsized payoff | 0 to 2 | Adjacent to the skill it improves | "When two controls do the same job, pick the smaller one." |
| Encouragement | `mascot-encourage` | encouraging | Normalize struggle on hard content | 0 to 1 | Right before or after a hard passage | "This part often feels slippery — the struggle is the desirable difficulty. Stay with it." |
| Danger | `mascot-warning` (danger variant) | warning | Regulatory or safety hard stop | 0 to 1 | At the regulatory line | "Crossing from Level 2 to Level 3 moves you under FERPA. Do not ship until legal has signed." |
| Understanding check | `mascot-thinking` | thinking | Mid-chapter retrieval prompt | 0 to 2 | After a concept is introduced | "Close the tab for ten seconds — can you state the three conditions in your own words?" |
| Thinking | `mascot-thinking` | thinking | Highlight a key concept or habit of mind | 2 to 3 | At each major idea | "A principle is a default, not an axiom — know the evidence that justifies breaking it." |
| Celebration | `mascot-celebration` | celebration | Close the chapter and bridge to next | Exactly 1 | Bottom of chapter | "You now have the mascot toolkit. Next up: graphic novels." |

Two constraints apply across all types. Total mascot admonitions per chapter stay at **six or fewer** — more than six and each appearance starts to lose signal value, because the reader learns to skim them. And *back-to-back* admonitions are forbidden. Prose must separate them. Two mascot callouts touching each other reads as a wall of decoration; prose between them lets each appearance do its signaling work.

!!! mascot-tip "The One-Bump Rule for Admonition Density"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom giving a tip">
    If two admonitions are about to appear with only a one-line transition between them, merge the second into the prose or cut it. Admonitions that touch each other stop functioning as signals and start functioning as wallpaper. The one-bump rule — at least one real paragraph between any two admonitions — keeps the signal-to-noise ratio high.

## Admonition CSS Styling

***Admonition CSS Styling*** is the visual layer that makes the six types distinguishable at a glance. Color-coding is the primary signal; a consistent left-border stripe, a tinted background, and a colored title bar together tell the reader what kind of admonition this is before they read a word of its body. Good styling is pedagogical: it lets the eye pre-process the callout's category so working memory can start on the content, not the container.

The approach this book uses is straightforward. Each admonition type has its own CSS class (`mascot-tip`, `mascot-warning`, and so on). The class overrides three visual properties of MkDocs Material's default admonition: the `border-color`, the `background-color`, and the `background-color` of the title-bar `.admonition-title`. A fourth rule — shared across all mascot types — floats the `<img class="mascot-admonition-img">` to the left of the body text at a fixed 90-pixel size. The last rule is what lets every admonition type reuse the same body-image layout.

Here is the CSS for `mascot-tip` — the teal tip admonition — with brief annotations on each rule. This is the full pattern; the other five types are copies with different colors.

```css
/* Tip (hints) — teal */
/* The tip uses a calm teal palette: a darker border and title bar,
   a pale teal body background. The color is informational, not
   urgent, which matches the "helpful rule" pedagogical function. */
.md-typeset .admonition.mascot-tip,
.md-typeset details.mascot-tip {
  border-color: #00897b;                 /* teal 600, border stripe */
  background-color: #e0f2f1;             /* teal 50, body wash */
}
.md-typeset .mascot-tip > .admonition-title,
.md-typeset .mascot-tip > summary {
  background-color: #00897b;             /* matches the border stripe */
  color: white;                          /* title text on teal */
}

/* Shared: image floats left of the body, 90px square.
   This rule is the same for every mascot admonition type,
   which is why every pose image uses the same class. */
.mascot-admonition-img {
  float: left;
  width: 90px;
  height: 90px;
  margin: 0 .5em 0 0;
  object-fit: contain;
}
```

Two accessibility concerns deserve named attention. **Color is not the only signal.** A reader with red-green color blindness cannot reliably distinguish the `mascot-tip` green from the `mascot-warning` red on the title-bar color alone. The admonition title text itself must name the category unambiguously ("A Working Rule" vs. "A Common Misstep"), and the `alt` text on the mascot image must name the pose ("Bloom flagging a warning"). Both signals together let any reader decode the callout even if the color cue fails. **Screen-reader order matters.** The `<img>` comes first in the source, which means a screen reader announces the pose before the body text. That is the correct order for a pedagogical mascot — the pose sets expectation, then the content arrives. If you reverse them, the screen-reader experience loses the pose's framing function.

## Narrative Voice Consistency

***Narrative Voice Consistency*** is the property that a reader, sampling any page of the book at random, can recognize the voice and predict what the voice will say next. It is the cumulative outcome of every choice we've discussed so far: a tight persona, a stable visual identity, a written voice guide, and admonitions placed with signal discipline. And it is the property that most often erodes silently over the life of a long book, because each individual drift is too small to notice on its own.

Drift takes three recognizable shapes.

**Pronoun drift.** A chapter generated late in a book-authoring session starts using *you must* where earlier chapters used *let's*. The shift is small — one pronoun per paragraph — but it changes the relationship from companion to instructor, and the relationship is load-bearing for SDT autonomy. Catch: grep the chapter for *you must*, *you should*, and *you need to*; every occurrence is a candidate for rewrite.

**Register drift.** An LLM session under time pressure reaches for hype adjectives and Latinate verbs because they are statistically average. *Powerful*, *robust*, *leverage*, and *utilize* creep in. The fix is a lint pass with a prohibited-word list in the voice guide.

**Exclamation-point inflation.** Bloom is allowed at most one exclamation point per chapter, and most chapters use zero. By chapter 15, a drifting voice has three per chapter and a celebration admonition with four. Each exclamation point individually looks like enthusiasm; cumulatively they read as nervous over-assurance. The fix is a hard-count limit enforced in the chapter review.

Drift is not detected by reading one chapter carefully — it's detected by *sampling* across chapters. A reviewer who opens Chapter 3, Chapter 8, and Chapter 14 side-by-side and reads only the welcome admonitions of each can hear drift in under two minutes. The same reviewer reading Chapter 14 alone might not notice anything off.

The dynamics have a shape worth seeing.

#### Diagram: Voice-Consistency Dynamics — Flywheel and Drift Trap

<details markdown="1">
<summary>Causal loop diagram showing how consistent mascot voice reduces extraneous load and reinforces identification, with a corrosive drift loop when the voice guide is not enforced</summary>
Type: causal-loop-diagram
**sim-id:** mascot-voice-consistency-loops<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing eight variable-nodes and two named loops. All nodes are noun phrases naming variables that can go up or down.

Nodes: *voice-guide enforcement*, *voice consistency*, *orienting cognitive load*, *available germane capacity*, *mascot-signal predictability*, *reader identification with mascot*, *re-engagement on hard pages*, *voice drift*.

Edges and polarities:

- voice-guide enforcement → voice consistency (+) — the guide is what holds the line
- voice consistency → orienting cognitive load (−) — a predictable voice costs less to parse
- orienting cognitive load → available germane capacity (−) — load is a zero-sum budget
- available germane capacity → mascot-signal predictability (+) — freed capacity is what notices the signal
- mascot-signal predictability → reader identification with mascot (+) — predictable signals build relatedness
- reader identification with mascot → re-engagement on hard pages (+, with delay ⧚) — identified readers come back
- re-engagement on hard pages → voice-guide enforcement (+) — successful outcomes reinforce the practice of enforcing the guide
- voice drift → voice consistency (−) — drift erodes the consistency directly
- voice drift → orienting cognitive load (+) — inconsistent voice costs orienting attention
- voice-guide enforcement → voice drift (−) — enforcement is the brake on drift

Loop labels placed at each loop's geometric center:

- **R1 — Voice-consistency flywheel (reinforcing, productive).** enforcement → consistency → lower orienting load → more germane capacity → clearer signal → stronger identification → re-engagement → more enforcement.
- **B1 — Voice-drift trap (reinforcing, corrosive).** drift → inconsistency → higher orienting load → crowded germane capacity → muddled signals → weaker identification → disengagement on hard pages → less enforcement → more drift. Structurally a reinforcing loop running in the bad direction.

Visual treatment: R1 nodes in cool blue; B1 nodes in warm red-orange; the shared variable *voice consistency* drawn in a neutral tone with dual borders to signal it belongs to both loops. Delay marker ⧚ on the identification → re-engagement edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of R1 in plain English accompanies the diagram in the prose that follows.
</details>

Read loop **R1** in plain English. An author who enforces the voice guide on every chapter keeps the voice consistent; a consistent voice makes the mascot's appearances predictable; predictability moves the mascot's rendering cost from extraneous load to germane signal; that freed capacity is what the reader uses to *identify* with the mascot — to feel the companion presence that SDT relatedness requires; an identified reader returns to hard pages instead of abandoning them; and the visible return-rate is the evidence that motivates the author to keep enforcing the guide. Each trip around R1 makes the next chapter cheaper to author well. Now read **B1**. An author who lets the guide slide on one chapter allows a small drift; the drift makes the next chapter's voice slightly harder to parse; parsing load eats germane capacity; the mascot's signals are muddled; identification weakens; the reader disengages on the first hard page of the next chapter; the author, not seeing returns, stops investing in enforcement. Same loop, running corrosively.

The structural fix the project uses is a lint pass — part of the reviewer checklist — that runs against every chapter before it ships. The checklist is short on purpose:

- [ ] Every mascot admonition uses the correct Bloom pose and CSS class pairing.
- [ ] No more than six mascot admonitions total; exactly one welcome and one celebration.
- [ ] No back-to-back admonitions; at least one real paragraph separates any two.
- [ ] No prohibited words in body prose (*obviously*, *simply*, *just*, *clearly*, *of course*).
- [ ] No hype adjectives (*game-changing*, *revolutionary*, *cutting-edge*, *powerful*).
- [ ] At most one exclamation point in the whole chapter.
- [ ] Every mascot `<img src>` has the correct relative-path depth for its page location.
- [ ] Mascot dialogue stays at one to three sentences per admonition.
- [ ] The voice sample — welcome admonition of this chapter — reads consistently with welcomes of Chapter 1, a middle chapter, and the most recent chapter.

Running the checklist takes about five minutes per chapter. Not running it is the shape of decisions that produce ten-thousand-word books nobody wants to read twice.

## The Clippy Problem: When a Mascot Is an Anti-Feature

Not every mascot helps. The cautionary case every designer of intelligent textbooks should study is Microsoft's Clippy — the Office Assistant paperclip that shipped with Office 97 and was retired in 2001 after widespread user hostility. Clippy is instructive because the design intent was reasonable (reduce the discoverability problem in a feature-rich application), the execution was professional (animation, voice, dialogue), and the result was a product feature so universally disliked that Microsoft spoofed its own retirement. The lesson is structural, and it's worth attributing: the failure was documented in detail in Alan Cooper's *About Face* and in Microsoft's own post-mortems from the Office 2000 team. Four properties made Clippy a footgun rather than an asset.

1. **Uninvited interruption.** Clippy appeared on its own schedule, often interrupting a task to suggest it might be a letter. Interruption breaks the autonomy leg of SDT — the reader did not choose this appearance.
2. **Poor relevance.** Clippy's suggestions were heuristic and often wrong for the user's actual task. A mascot that is often wrong undermines trust in the mascot's right suggestions.
3. **High salience, low information.** The animations were attention-grabbing without matching the informational value they delivered. The signal-to-noise ratio across a user's session was negative.
4. **No exit that stuck.** Early versions of Clippy returned after being dismissed, which converted dismissal from user-respected autonomy into user-exhausting whack-a-mole.

A pedagogical mascot avoids the Clippy failure by inverting each of the four properties: *invited* (the mascot appears where the author placed it, not where an algorithm guessed); *relevant* (each appearance is at a pedagogical decision point, not a heuristic pattern match); *signal-proportional* (one appearance per real pedagogical moment, not many per page); and *dismissible by not scrolling* (the reader controls pacing — a static admonition on a page is waiting there, not chasing the reader).

The critical-thinking question worth carrying out of this section: *under what conditions would adding a mascot make a learning artifact worse?* Reasonable answers include: very short artifacts where persona overhead exceeds persona payoff; high-stakes reference material where playfulness undermines gravity; adversarial contexts where a cheerful mascot would read as tone-deaf. The mascot is a tool, not a virtue, and the decision to use one should be defended case by case.

!!! mascot-warning "Name Your Mascot's Retirement Criteria Up Front"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom the elephant flagging a warning">
    Before you ship a mascot, write down the signals that would cause you to retire it. *Completion rates drop in chapters with admonitions. Reader survey calls the mascot "annoying" more than twice in a cohort. A regulatory context requires gravitas incompatible with playfulness.* If you cannot articulate a retirement criterion, you are not yet designing a pedagogical tool — you are adding a feature you are already emotionally attached to.

## Footgun Patterns in Mascot Design

A ***footgun pattern*** is a design choice that is silent, easy to trigger, and produces delayed damage — the three-property definition we've been applying across the book. Mascot design has at least five recognizable footguns, and naming them makes them easier to spot during review.

**1. Voice drift.** *Silent:* no warning when an LLM session reaches for *powerful* instead of *useful*. *Easy to trigger:* any chapter authored without the voice guide in context. *Delayed damage:* drift compounds across chapters, and by chapter 14 the mascot is a different character than chapter 3. **Structural fix:** the voice guide is injected into every authoring session's system prompt, and a lint pass enforces the prohibited-word list before the chapter merges.

**2. Decorative placement.** *Silent:* the admonition renders fine; no error. *Easy to trigger:* any time the author thinks "this section needs something to break up the prose." *Delayed damage:* decorative appearances train the reader to skip admonitions, which destroys the signal value of the load-bearing ones. **Structural fix:** a review criterion that every admonition must change what the reader does next — pause, predict, retrieve, revise. "Break up prose" is not on that list.

**3. Hype register.** *Silent:* exclamation points and *amazing* do not throw errors. *Easy to trigger:* late-night chapter generation, LLM defaults, social-media-trained writing habits. *Delayed damage:* reflexive praise inoculates the reader against real praise, so when an earned celebration arrives it carries no weight. **Structural fix:** exclamation-point count enforced by the chapter-review checklist; hype-adjective list in the prohibited-words lint.

**4. Mismatched pose.** *Silent:* the image loads; the admonition renders. *Easy to trigger:* copy-pasting an admonition block and forgetting to change the pose filename. *Delayed damage:* a warning admonition with a celebration pose reads as unserious; a welcome admonition with a warning pose reads as ominous. Neither throws an error; both undermine the pose-pairs-with-type predictability the reader depends on. **Structural fix:** a linter that checks each admonition's CSS class against the filename in its image `src`.

**5. Catchphrase overuse.** *Silent:* catchphrases are on-voice by construction. *Easy to trigger:* an author who loves the phrase and slips it into every chapter opening. *Delayed damage:* by chapter 10, "Let's build a mental model" has lost its signaling function — it has become wallpaper, like a pre-printed slogan on stationery. **Structural fix:** a per-chapter cap (at most one use of a given catchphrase per chapter, and most chapters use zero; the phrase is for chapter openings where it fits naturally).

The meta-footgun across all five is the same: the damage is invisible in any single chapter and becomes visible only when the book is read cover to cover. Structural fixes — guide injection, lint passes, reviewer checklists — are the tools that make the bad outcome *impossible rather than merely unlikely*. That is the definition of a structural fix worth shipping.

## Designing Your Own Mascot: A Procedure

Readers asking *how do I build a mascot for my own intelligent textbook?* can follow a six-step procedure. Each step produces an artifact that feeds the next; skipping a step produces a mascot that looks finished but drifts under real use.

1. **Write the persona one-pager.** Fill in the seven fields from the persona table above — name, species or form, personality (four adjectives), knowledge stance, relationship to reader, signature phrases (at most three), physical accessories (at most one). This document goes into the repository's `CLAUDE.md` or equivalent authoring-context file.
2. **Lock the visual identity.** Write a self-contained image-generation prompt that specifies body form, palette (with exact hex codes), face, background (transparent), and style. Generate the seven standard poses — neutral, welcome, thinking, tip, warning, encouraging, celebration — *in the same session with the same tool* to minimize identity drift.
3. **Draft the voice guide.** Specify person, tense, register, length-inside-admonition, prohibited words, and hype ban. Include one on-voice and three off-voice examples for each of the four hardest moments: chapter opening, misconception flag, post-hard-section wrap, retrieval prompt.
4. **Define the admonition library.** For each of the six pedagogical types (hint, warning, tip, encouragement, danger, understanding check) pair a CSS class, a Bloom-analog pose, a purpose statement, a frequency budget per chapter, and one canonical example.
5. **Implement the CSS.** Follow the per-class border / body-background / title-bar-background pattern. Share a single `*-admonition-img` float rule across all types. Verify accessibility: color-blind-safe pairings, alt text on every image, title text that names the category without requiring color.
6. **Run the consistency audit.** Generate three chapters at different points in the book (early, middle, late). Read the welcome admonitions of all three side-by-side. If they sound like the same character, the pipeline is working. If they drift, strengthen the voice guide — usually by adding the specific drift pattern to the prohibited list with an on-voice alternative — and regenerate.

The procedure is not a one-time exercise. Step 6 is a standing practice, run whenever a batch of chapters has been authored. Voice consistency is not a property you achieve and walk away from; it's a property you maintain, the same way a test suite is a property you maintain.

#### Diagram: The Mascot Design Pipeline

<details markdown="1">
<summary>Diagram: six-step mascot design pipeline with the artifact each step produces and the audit that gates the next step</summary>
Type: diagram
**sim-id:** mascot-design-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A Mermaid `flowchart TD` diagram showing the six-step procedure as a pipeline. Each step is a rounded-rectangle node; each inter-step arrow is labeled with the artifact that carries forward; each step has a side-note showing the audit question that must pass before the next step begins.

Nodes (top-down):

1. Persona One-Pager — produces the character sheet.
2. Visual Identity — produces the seven pose images.
3. Voice Guide — produces the prohibited-word list and on-voice examples.
4. Admonition Library — produces the type-to-class-to-pose mapping.
5. CSS Implementation — produces the stylesheet.
6. Consistency Audit — produces the review checklist.

Edges labeled with artifacts: "character sheet" between 1 and 2, "seven poses" between 2 and 3, "voice guide" between 3 and 4, "admonition types" between 4 and 5, "stylesheet" between 5 and 6, and an audit feedback edge from 6 back to 3 (strengthen the voice guide when drift is detected).

Visual treatment: nodes in cool blue; audit feedback arrow in warm orange to signal that the audit is a loop, not a dead end. Each node annotated with its audit gate in a smaller secondary font.

Implementation: Mermaid `flowchart TD` with `classDef` for node styling and `linkStyle` for the audit feedback arrow coloring.
</details>

!!! mascot-encourage "Your First Mascot Will Not Be Your Last"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Bloom the elephant offering encouragement">
    Almost every pedagogical mascot that ships in a real book is the second or third version the author designed. The first draft always feels off after a chapter's worth of use; the revision after a reader-study round is where the character actually lands. Budget for the iteration up front. The mascot you ship is the one that survived revision, not the one you imagined at the start.

## A Critical-Thinking Prompt

Consider two counterfactuals. First, suppose a course on a regulatory topic — medical diagnosis, securities compliance, aviation safety — decided to add a mascot. What specific design moves would a pedagogical mascot need to make to avoid being read as flippant in a high-gravity context? Name at least three. Second, the evidence base for pedagogical mascots is thinner than the evidence base for, say, retrieval practice: most studies are small, some use self-report as the primary outcome, and the effect sizes are modest. *What would you need to see to believe that your mascot is actually helping?* Name the measurement, the population, and the comparison condition. A design choice you cannot measure is a design choice you cannot improve.

## Retrieval Check

Close the tab and try these from memory. Stumbling is diagnostic — it tells you which section to revisit.

1. **Define** a pedagogical mascot and name two properties that distinguish it from a brand mascot. (Level: Remember / Understand.)
2. **List** the seven fields of a mascot persona one-pager and give Bloom's value for each. (Level: Remember.)
3. **Explain** why the mascot image belongs in the admonition body rather than in the title bar. Name the rendering failure mode the body placement prevents. (Level: Understand.)
4. **Given** a chapter page rendered at the URL `/chapters/12-mascots-admonitions/`, state the correct `src` path for `tip.png` and justify the depth count. (Level: Apply.)
5. **Name** the six pedagogical admonition types, and for each give its purpose in one sentence and its typical placement in a chapter. (Level: Remember / Apply.)
6. **Trace** the voice-consistency flywheel (R1) around one full loop in your own words, and name the single intervention point where an author has the most leverage. (Level: Analyze.)
7. **Describe** the Clippy footgun, name each of its three footgun properties, and state which design move a pedagogical mascot makes to invert each one. (Level: Analyze / Evaluate.)
8. **Critique** this design: "every chapter opens and closes with a mascot admonition, and every major section has one in the middle — eight per chapter on average." Name at least three things wrong and propose a revised pattern that preserves the intended pedagogical function. (Level: Evaluate / Create.)

## Bridge to Chapter 13

We now have the voice layer — a pedagogical mascot with a locked persona, a stable visual identity, a written voice guide, a six-type admonition library, a CSS implementation, and a consistency audit that keeps the character from drifting across chapters. What we do *not* yet have is the episodic-narrative layer the book uses to show the reader the *history* of the field through the people who built it. A mascot is recurring — Bloom appears in every chapter, in small doses, as a consistent companion. A graphic novel is episodic — it shows up once, occupies the reader's attention for twelve panels, and tells a self-contained story about a historical figure whose work shaped the topic. Both techniques use narrative, and both are earned only when they change what the reader does next. They differ mostly in *attentional cost*: a mascot admonition costs five seconds; a twelve-panel graphic novel costs three minutes. Chapter 13 is where we design the second one.

!!! mascot-celebration "The Voice Layer Is Yours"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom the elephant celebrating with trunk raised">
    You now have the mascot toolkit — persona, visual identity, voice guide, six admonition types, CSS pattern, and the consistency audit that keeps the whole thing stable over a long book. Hold onto three headlines: *every appearance should change what the reader does next*, *consistency matters more than polish*, and *voice drift is invisible in one chapter and obvious across three*. Next up: graphic novels — the episodic narrative layer that sits alongside the mascot's recurring presence. See you in Chapter 13.
