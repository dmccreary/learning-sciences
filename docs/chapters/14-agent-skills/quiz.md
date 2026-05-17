# Quiz: AI Agent Skills for Textbook Generation

Test your understanding of the fourteen agent skills, pipeline structure, image generation costs, skill design principles, and footgun patterns with these review questions.

---

#### 1. Which three skills compose the "foundation" band of the production pipeline and must run before any chapter prose is generated?

<div class="upper-alpha" markdown>
1. Glossary generator, FAQ generator, quiz generator
2. Course description analyzer, learning graph generator, book chapter generator
3. MicroSim generator, story generator, concept classifier
4. Book metrics generator, diagram reports generator, LinkedIn announcement generator
</div>

??? question "Show Answer"
    The correct answer is **B**. The three foundation skills are: the course-description-analyzer (validates the course description), the learning-graph-generator (produces the DAG of ~200 concepts), and the book-chapter-generator (produces chapter outlines from the learning graph). These run first because every downstream skill depends on their outputs — the learning graph is the structural spine, and the chapter outlines drive content generation.

    **Concept Tested:** Learning Graph Generator

---

#### 2. What is the primary reason the reference-generator skill stores references in separate per-chapter files rather than inline in the chapter Markdown?

<div class="upper-alpha" markdown>
1. Separate files are easier to format for print output
2. It reduces the token count when the next chapter's regeneration reads prior chapters as context
3. MkDocs cannot render inline reference lists
4. Separate files allow references to be shared across multiple chapters
</div>

??? question "Show Answer"
    The correct answer is **B**. Storing references in separate `references.md` files keeps the chapter Markdown small enough to fit comfortably inside the chapter-content-generator's context window on the next regeneration. A 40-reference inline block in every chapter would add hundreds of references worth of tokens to the "prior context" the next chapter's generation must carry. This is a token-budgeting decision that looks cosmetic but is actually performance infrastructure.

    **Concept Tested:** Reference Generator

---

#### 3. The microsim-generator skill uses a routing layer to select among seven libraries. What is the structural advantage of encoding this judgment in the skill rather than leaving it to the author?

<div class="upper-alpha" markdown>
1. It ensures all MicroSims use the same library for visual consistency
2. It turns a recurring judgment call into a documented decision, letting the author focus on what to visualize rather than which library to reach for
3. It reduces the total number of libraries the project depends on
4. It prevents authors from using p5.js for any visualization
</div>

??? question "Show Answer"
    The correct answer is **B**. The routing layer encodes a judgment that recurs on every MicroSim — which library fits this visualization? — into a documented table inside the skill. This is the shape of a skill worth writing: it encodes a recurring judgment so the author can think about the pedagogical question (what to visualize) instead of the tooling question (which library to use). The routing table is the reusable artifact.

    **Concept Tested:** MicroSim Generator

---

#### 4. A twelve-panel graphic novel story where each panel needed an average of 3.5 regenerations at $0.04 per image costs how much in API spend?

<div class="upper-alpha" markdown>
1. $0.48
2. $1.68
3. $4.80
4. $0.14
</div>

??? question "Show Answer"
    The correct answer is **B**. The calculation is: 12 panels x 3.5 regenerations x $0.04 per image = $1.68 per story. The naive estimate of $0.48 (12 x $0.04) assumes each panel is accepted on the first generation, which Chapter 13's guidance explicitly warns against. Across fourteen chapters with one story each, the realistic story-image budget for a whole book lands between $7 and $30 depending on iteration discipline — still cheap relative to commissioned illustration but an order of magnitude higher than the one-pass estimate.

    **Concept Tested:** Image Generation Costs

---

#### 5. When should an author use a terse prompt rather than creating a new skill?

<div class="upper-alpha" markdown>
1. Never — every task should be a skill for documentation purposes
2. When the task is a one-off edit, requires conversational context, or has an obvious shape that does not need a named output format
3. Only when the Claude API is unavailable
4. When the task involves more than three files
</div>

??? question "Show Answer"
    The correct answer is **B**. Three categories of task do not belong in a skill: one-off tasks (a single reformatting or migration), tasks that require conversational context (exploratory analysis, design discussion), and tasks where a terse prompt is simpler (an edit whose shape is obvious from the sentence). The rough test: if the task has a named output artifact with a defined format, it wants a skill; if the task is an edit whose shape is obvious from the sentence, it wants a prompt. Skill design has real overhead that is not earned by single-use tasks.

    **Concept Tested:** Course Description Analyzer

---

#### 6. The skill-quality flywheel (R1) describes a reinforcing loop. What is the drag variable that can stall the loop if unattended?

<div class="upper-alpha" markdown>
1. Token cost per invocation
2. The number of available libraries
3. Maintenance burden — bug reports, feature requests, and spec drift that accumulate with use
4. The size of the learning graph
</div>

??? question "Show Answer"
    The correct answer is **C**. Maintenance burden is the drag variable. Every increase in skill invocation rate also increases bug reports, feature requests, and spec drift. Unattended, this burden dampens the description-precision edge — the skill's description stays static while its behavior has moved. The structural fix is treating the skill's Changelog section as load-bearing. A skill without a visible recent changelog is either archived (fine) or accumulating silent drift (urgent).

    **Concept Tested:** Book Metrics Generator

---

#### 7. The "silent success" footgun in skill design refers to what pattern?

<div class="upper-alpha" markdown>
1. A skill that runs too quickly for the author to notice
2. A skill that reports success while the artifact it produced is actually wrong
3. A skill that produces perfect output every time without needing iteration
4. A skill that completes without generating any output files
</div>

??? question "Show Answer"
    The correct answer is **B**. The silent-success footgun occurs when a skill reports success but the artifact is wrong — a story with a missing panel image, a glossary that overwrote hand-edited entries, or a chapter with a wrong-skill-invoked output. The gap between the success report and the actual artifact quality is where damage accumulates. The structural fix is post-condition verification: every external-service call is checked, every output file is validated as existing and well-formed before the skill reports success.

    **Concept Tested:** Story Generator

---

#### 8. What does the quiz-generator skill do differently from running one agent per chapter in parallel?

<div class="upper-alpha" markdown>
1. It generates fewer questions per chapter
2. It runs serially through the chapter list so items have cross-chapter awareness, preventing overlaps and contradictions
3. It uses a different LLM model than the parallel version
4. It skips chapters that already have quiz files
</div>

??? question "Show Answer"
    The correct answer is **B**. An earlier parallel version was faster but produced quizzes whose items occasionally overlapped or contradicted across chapters. The serial version — one agent walking the chapter list in order — is slower but produces quizzes with visible awareness of prior items. Token efficiency and cross-chapter coherence pushed in the same direction, which is not always the case. Serial execution ensures the quiz bank reads as a coordinated whole.

    **Concept Tested:** Quiz Generator

---

#### 9. The glossary-generator skill enforces five style rules on definitions. Which rule prevents a definition like "working memory is the short-term store our dashboard visualizes in the left pane"?

<div class="upper-alpha" markdown>
1. Precise — the definition picks out the concept and nothing else
2. Concise — one or two sentences maximum
3. Non-circular — no definition uses the term it defines
4. Free of business rules — prevents definitions from drifting into product-specific language
</div>

??? question "Show Answer"
    The correct answer is **D**. The "free of business rules" constraint prevents a definition from drifting into product-specific language that would tie the glossary to a specific deployment rather than to the discipline. A definition that references "our dashboard" or "the left pane" only makes sense in one product context and fails as a general definition. The other four rules (precise, concise, distinct, non-circular) address different failure modes of glossary entries.

    **Concept Tested:** Glossary Generator

---

#### 10. Two skills whose output sections both name the same file path will produce what problem, and what is the structural fix?

<div class="upper-alpha" markdown>
1. A syntax error in MkDocs; fixed by using different file extensions
2. A merge conflict in Git; fixed by using separate branches
3. The last writer silently overwrites the first writer's output; fixed by declaring exclusive file ownership per skill
4. Both files will be combined automatically; no fix needed
</div>

??? question "Show Answer"
    The correct answer is **C**. When two skills write to the same file, the last writer wins and silently discards the first writer's content. For example, a "glossary-appender" skill that writes to `docs/glossary.md` will have its additions silently discarded when the main glossary-generator regenerates the same file. The structural fix is the single-writer discipline: every skill declares exclusive ownership of its output files, and any skill that needs to transform another skill's output writes to its own path with composition happening at a documented later stage.

    **Concept Tested:** Chapter Content Generator
