# Trade-offs of Auto-Generating a Slide Deck Per Chapter

**Date:** 2026-04-21
**Author:** Claude (Opus 4.7), in conversation with Dan McCreary
**Context:** The `book-installer` skill includes a `slide-generator` guide that produces a `slides.md` for every chapter of an intelligent textbook. After fixing three separate link-path bugs across all three chapter decks in *Learning Sciences for Intelligent Textbook Design*, we paused to ask the more important question: **should we be generating these decks at all?**

This note captures a skeptical reading of the pattern. It is not a recommendation to remove existing decks — it is a recommendation to think twice before adding more, and to instrument whether the ones we have are actually used.

## The Skeptical Case

### 1. Two sources of truth drift silently

Once a chapter has both `index.md` and `slides.md`, edits to the chapter prose do not propagate to the deck. The deck goes stale without any build-time warning. Readers who open the Slides view consume an older version of the chapter without knowing it.

This is a classic **footgun pattern**:

- **Silent** — no build warning, no visible indicator that the deck is older than the chapter.
- **Easy to trigger** — the happy path for authoring is "edit the chapter prose." Nothing in that path nudges you to touch the deck.
- **Delayed damage** — the divergence is only visible to a reader who happens to compare the two views, and even then only if they notice.

The structural fix — making the bad outcome *impossible* — would be to derive slides from the chapter at build time rather than checking in a parallel Markdown file. We have not done that.

### 2. Slides are a different medium, not a projection

Good presentation slides are **spoken-voice signposts** designed for a presenter's pace. Textbook prose is self-contained, dense, and linear. The two media reward opposite choices:

| Dimension | Textbook prose | Good slides |
|---|---|---|
| Density per page | High | Low |
| Voice | Third-person / "we" | Presenter's first-person |
| Redundancy | Avoided | Intentional (repeat key idea) |
| Examples | Worked out in prose | Pointed at, expanded verbally |
| Visuals | Embedded | Centerpiece |

Auto-distilled slides tend to land in one of two failure modes: **paragraph-dense** (unreadable in a room, because they're just the prose in a different container) or **skeletal** (useless without a speaker). Neither is actually a presentation.

### 3. There is no clear audience

Textbooks are consumed asynchronously by individual readers. Slides imply a **synchronous setting** — a lecture, a workshop, a demo. If no one ever presents from these decks, we have built a deliverable for a ceremony that does not happen. The effort spent authoring and maintaining decks is then pure overhead.

The book explicitly targets self-directed adult learners and instructional designers working on their own. That audience's natural reading mode is not "open the slides and press arrow keys."

### 4. The pattern contradicts the book's own pedagogy

The book argues, across multiple chapters, that **retrieval practice beats re-reading**. A chapter-plus-slide-deck pair is a form of re-reading: the reader sees the same content in two densities. That produces a **fluency illusion** — the warm feeling of "I know this" — without the encoding benefit of retrieval.

If the same authoring budget went to additional retrieval prompts, flashcards, or low-stakes quizzes, the pedagogy and the artifact would align. As it stands, the slide deck is a feature that quietly undermines the book's own thesis.

### 5. Nav, UI, and link surface grow faster than value

Every deck adds:

- A sidebar entry under the chapter, so the nav has **Content** and **Slides** twins everywhere.
- A three-button bar (**Content / Slides / Slides in Viewer**) at the top of both pages.
- A viewer query string with its own path-depth semantics.
- Three distinct link-path gotchas, as the recent fix demonstrated:
  - `[Content](../)` vs. `[Content](../index.md)` — INFO nag.
  - `[Slides](slides/)` vs. `[Slides](slides.md)` — INFO nag.
  - `../../../sims/slide-viewer/main.html` escaping the site prefix on GitHub Pages — silent WARNING, and broken at runtime on the deployed site.

Maintenance cost scales linearly with chapter count. The value per deck does not.

### 6. Fragility per chapter multiplies

Each deck depends on four independent things staying correct:

1. The **viewer JavaScript** (`docs/sims/slide-viewer/script.js`) fetching the rendered HTML and splitting it on `<hr>`.
2. The source `slides.md` having the right number of `---` separators in the right places.
3. MkDocs' directory-URL rewriting (`use_directory_urls: true`) not being changed.
4. The mascot images existing at the expected path depth.

A failure in any one of these silently degrades the slide experience, and none of them produce a build error. That is four footgun surfaces per chapter.

### 7. The three-button bar is probably a discoverability illusion

UI surface area looks like a feature. In practice, readers almost always pick one view (usually whichever the search engine or nav clicked them into) and never switch. The three buttons pay a visual-noise cost at the top of every page for a toggle behavior most readers do not use.

We have no evidence — no analytics, no click-through instrumentation — that the Slides view is opened more than incidentally. Without that data, adding more decks is building on vibes.

### 8. The "slides" deliverable is vague about who it is for

Ask "who is this deck for and what will they do with it?" and the answers get fuzzy:

- **A teacher presenting the chapter** — they will rewrite it to their own voice, so the auto-deck is at best a starting point they will largely discard.
- **A student studying the chapter** — flashcards or spaced-retrieval prompts serve that user better than a flat slide deck.
- **A casual browser** — the chapter itself already serves that user; the deck is a less complete version of the same thing.

No clear persona × job-to-be-done story emerges. That is often a sign the artifact is being built because it is technically easy, not because it is educationally needed.

## Recommendation

A defensible path forward:

1. **Leave existing decks in place.** They are built, linked, and not harmful on their own. Ripping them out is cost without learning.
2. **Stop generating new decks by default.** Treat slides as an opt-in deliverable per chapter, not a standard chapter component. A chapter should have to earn a deck (e.g., because Dan has a concrete speaking engagement planned) rather than get one automatically.
3. **Instrument whether anyone opens the viewer.** Before investing more authoring effort, confirm with Google Analytics or equivalent that the Slides view has non-trivial usage. If it does not, the retrieval-quiz or MicroSim effort is a better home for the same budget.
4. **If decks stay, build a staleness check.** A simple CI script that compares `mtime(index.md)` to `mtime(slides.md)` and fails the build when the deck is older would convert the silent drift into a loud, build-time signal.
5. **Update the `slide-generator` skill to surface these trade-offs up front** so future users of the skill — including future Claude sessions — see the skeptical case before generating a deck, rather than discovering it after the decks are built.

The general lesson applies beyond slides: when a feature is easy to generate with AI assistance, that does not mean it is the right feature to build. The Learning Sciences argument — that retrieval, feedback, and motivation do the heavy lifting in learning — should guide what we add to the book, not what is cheapest to produce.
