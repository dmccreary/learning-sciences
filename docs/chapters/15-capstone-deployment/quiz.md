# Quiz: Capstone and Deployment

Test your understanding of the capstone project, GitHub Pages deployment, the MkDocs build process, peer review, accessibility auditing, publishing workflows, and mastery demonstration with these review questions.

---

#### 1. What are the minimum engagement artifacts every capstone project must include?

<div class="upper-alpha" markdown>
1. Three MicroSims, two graphic novels, and ten quiz questions
2. One MicroSim, one pedagogical mascot with four admonitions, one 12-panel graphic novel, and one Bloom-aligned quiz
3. Two MicroSims, one mascot, and a glossary of at least 50 terms
4. One interactive infographic, one causal loop diagram, and one worked example
</div>

??? question "Show Answer"
    The correct answer is **B**. Every capstone must include: chapter prose exercising all seven domains, at least one original MicroSim, at least one original pedagogical mascot with a documented persona, voice guide, and visual style sheet plus four admonitions, at least one 12-panel graphic novel about a relevant historical figure, at least one Bloom-aligned quiz with distributed cognitive levels, and a deployed public URL on GitHub Pages. Mastery is demonstrated by coherent artifacts, not more artifacts.

    **Concept Tested:** Capstone Project

---

#### 2. What are the three commands in the CPD (Commit, Push, Deploy) publishing workflow, and why are they kept as separate steps?

<div class="upper-alpha" markdown>
1. Clone, Pull, Delete — to ensure a clean working directory
2. Compile, Package, Distribute — standard software release steps
3. Commit, Push, Deploy (gh-deploy) — separating concerns so each step has its own failure mode and recovery path
4. Create, Publish, Document — to track the authoring process
</div>

??? question "Show Answer"
    The correct answer is **C**. The CPD pattern separates Commit (records change locally, forces the author to describe it), Push (uploads to GitHub, verifies against remote checks), and Deploy (mkdocs gh-deploy, rebuilds and publishes the live site). Keeping them separate means a failing commit does not leave a half-deployed site, a successful push does not imply the site is live, and a broken deploy is discoverable independently. Authors who fuse them into a single action lose the ability to diagnose which stage went wrong.

    **Concept Tested:** Publishing Workflow

---

#### 3. The capstone rubric contains 20 items across five categories. What does the chapter mean when it calls the rubric a "floor, not a ceiling"?

<div class="upper-alpha" markdown>
1. Every item must score perfectly for the capstone to pass
2. A chapter that fails an item probably is not ready to ship, but passing every item does not certify the chapter as good — Goodhart's Law can corrupt rubric optimization
3. The rubric only applies to the most basic capstone submissions
4. Additional items can be added by the instructor for advanced students
</div>

??? question "Show Answer"
    The correct answer is **B**. Passing every rubric item makes a chapter eligible to ship, not certified as good. Goodhart's Law applies: an author who optimizes the chapter to score well on the rubric (hitting exactly six mascot admonitions, adding a retrieval check that asks only Remember-level questions) rather than to teach well produces a chapter where every item passes but no reader learns. The structural fix is pairing every rubric pass with the qualitative prompt: does this item serve a reader, or does it satisfy the rubric?

    **Concept Tested:** Chapter Rubric Evaluation

---

#### 4. In the accessibility audit, which critical checks can only be done through manual testing and are missed by automated tools?

<div class="upper-alpha" markdown>
1. Color contrast ratios and missing alt text
2. Heading order and form-label association
3. Keyboard navigation, screen-reader experience, and MicroSim accessibility
4. Language attributes and link text quality
</div>

??? question "Show Answer"
    The correct answer is **C**. Keyboard navigation (checking for focus traps, unreachable controls, missing focus rings), screen-reader experience (reading order, announcement wording, landmark structure), and MicroSim accessibility (whether a p5.js canvas has a keyboard-equivalent path) all require manual testing. Automated tools like axe and Lighthouse catch color contrast, missing alt text, and heading order, but canvases are opaque to automated tools, and screen-reader quality requires human judgment.

    **Concept Tested:** Accessibility Audit Basics

---

#### 5. What distinguishes the mkdocs serve command from mkdocs gh-deploy in the build process?

<div class="upper-alpha" markdown>
1. mkdocs serve deploys to production; mkdocs gh-deploy runs locally
2. mkdocs serve runs a local dev server with auto-rebuild on file change; mkdocs gh-deploy builds and pushes to the live gh-pages branch
3. mkdocs serve generates PDF output; mkdocs gh-deploy generates HTML
4. They are identical commands with different names
</div>

??? question "Show Answer"
    The correct answer is **B**. `mkdocs serve` runs a local development server at localhost:8000 that rebuilds on every file change via watchdog — this is the authoring loop where the console shows build errors. `mkdocs gh-deploy` builds the site and pushes it to the `gh-pages` branch in a single atomic step — this is the release command with the highest blast radius because it overwrites the live site. The author keeps `mkdocs serve` running in their own terminal during development.

    **Concept Tested:** MkDocs Build Process

---

#### 6. In the iteration flywheel (R1), what is the anti-pattern (B1) that breaks the reinforcing loop?

<div class="upper-alpha" markdown>
1. Over-iterating so frequently that readers cannot keep up with changes
2. Ship-and-forget — shipping without a feedback gate, which starves the flywheel of reader feedback and revision opportunities
3. Collecting too much reader feedback, which overwhelms the author
4. Deploying only to local servers instead of public URLs
</div>

??? question "Show Answer"
    The correct answer is **B**. The ship-and-forget anti-pattern (B1) occurs when shipping happens without a feedback mechanism. Without reader feedback, revisions never happen; without revisions, quality does not compound; without quality improvement, reader trust does not build. Peer review is the accelerator that shortens the ship-to-feedback cycle from weeks to hours. An author who ships once and never iterates does not get the compounding benefit of the flywheel.

    **Concept Tested:** Iterative Improvement

---

#### 7. What is the most common capstone failure mode according to the chapter?

<div class="upper-alpha" markdown>
1. Choosing a subject the author knows nothing about
2. Under-ambition — attempting too narrow a topic
3. Over-ambition — attempting a whole subject where a chapter-sized slice was the assignment
4. Spending too much time on the accessibility audit
</div>

??? question "Show Answer"
    The correct answer is **C**. The most common capstone failure is over-ambition: attempting a whole subject where a chapter-sized slice (10-16 concepts, 4,000-6,000 words) was the assignment. A capstone chapter should sit at the same grain as any single chapter of this book. If the natural unit is 40 concepts, the author has picked a course, not a chapter. The right-sizing questions help: does a coherent 10-16 concept slice exist? Is there a historical figure whose work intersects?

    **Concept Tested:** Capstone Project

---

#### 8. The peer review process identifies four types of feedback. Which type should the author log as future work rather than act on before shipping?

<div class="upper-alpha" markdown>
1. Critique — "The causal loop in section 4 doesn't close"
2. Sharpening — "This paragraph introduces the term twice; you could compress"
3. Deflective — "Have you thought about adding a chapter on gamification?"
4. Praise — "The mascot voice is consistent across the chapter"
</div>

??? question "Show Answer"
    The correct answer is **C**. Deflective feedback suggests scope additions that are out of scope for the current capstone. The correct response is to thank the reviewer, log the suggestion as future work, and not act on it before shipping. Scope creep is the silent killer of peer-review cycles. Critique should be verified and fixed, sharpening should be applied directly (it rarely makes things worse), and praise should be preserved.

    **Concept Tested:** Peer Review Process

---

#### 9. What Bloom's Taxonomy level does the capstone formally measure, and why does it subsume all lower levels?

<div class="upper-alpha" markdown>
1. Remember — because the capstone tests recall of all fourteen chapters
2. Analyze — because the capstone requires breaking down the Seven Domains
3. Create — because assembling a coherent functional whole requires remembering, understanding, applying, analyzing, and evaluating within it
4. Evaluate — because the capstone requires judging the quality of one's own work
</div>

??? question "Show Answer"
    The correct answer is **C**. The capstone measures Create-level mastery in the Bloom 2001 sense — putting elements together to form a coherent functional whole. Every lower Bloom level shows up inside the capstone: the author remembers the Seven Domains, understands the research, applies cognitive-load theory, analyzes the learning graph, and evaluates against the rubric. But the whole is larger than the parts — a reader who could do each step in isolation but could not assemble the artifact would not have demonstrated Create-level mastery.

    **Concept Tested:** Mastery Demonstration

---

#### 10. The chapter recommends reserving what percentage of total capstone time for work after the first draft is complete?

<div class="upper-alpha" markdown>
1. 5% — just enough for a quick review
2. 50% — equal time on drafting and finishing
3. 25% — for the rubric pass, accessibility audit, peer review cycle, and iteration
4. 10% — for final formatting and deployment
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter advises reserving at least 25% of total capstone time for work after the first draft — the rubric pass, the accessibility audit, the peer review cycle, and the iteration pass. Authors who spend 95% on the first draft and 5% on finishing consistently ship chapters that feel almost-ready. Authors who budget for the last ten percent ship chapters that feel done. The gap between "finished" and "ready to ship" is usually two to five days of iteration.

    **Concept Tested:** Portfolio Artifact
