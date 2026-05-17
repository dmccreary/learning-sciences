# Quiz: Intelligent Textbook Architecture and AI Tooling

Test your understanding of learning graphs, DAG structure, the five-level classification, prompt engineering, context windows, token budgeting, and the Level 2/Level 3 privacy inflection with these review questions.

---

#### 1. What is the structural spine of a Level 2 intelligent textbook from which all other artifacts are generated?

<div class="upper-alpha" markdown>
1. The table of contents
2. The learning graph — a directed acyclic graph of concepts with dependency edges
3. The chapter outlines
4. The MkDocs configuration file
</div>

??? question "Show Answer"
    The correct answer is **B**. The learning graph is the machine-readable representation of what the book teaches — a directed acyclic graph whose nodes represent concepts and whose edges represent dependencies. Every other artifact (chapters, glossary, quiz bank, FAQ, references) is generated against it. When a chapter and the graph disagree, the graph is the source of truth and the chapter is regenerated.

    **Concept Tested:** Learning Graph

---

#### 2. In this project's convention, what does an edge from concept A to concept B in the learning graph mean?

<div class="upper-alpha" markdown>
1. A is a prerequisite for B
2. A depends on B (B is the prerequisite)
3. A and B are taught in the same chapter
4. A and B are synonyms in the glossary
</div>

??? question "Show Answer"
    The correct answer is **B**. The project's dependency-direction convention is that an edge from A to B means "A depends on B" — B is the prerequisite and A is the dependent. The arrow points from the dependent concept toward the prerequisite concept, matching the convention used by most build-system dependency graphs. This convention is what the downstream skills and the graph viewer expect.

    **Concept Tested:** Concept Edge

---

#### 3. Why must a learning graph be acyclic (contain no cycles)?

<div class="upper-alpha" markdown>
1. Cycles make the graph visually cluttered
2. A cycle means a concept depends on itself transitively, so there is no valid teaching order
3. Cycles increase the file size of the learning graph JSON
4. MkDocs Material cannot render cyclic graphs
</div>

??? question "Show Answer"
    The correct answer is **B**. A cycle in the learning graph means a concept depends on itself transitively — there is no order in which a learner could encounter all the concepts for the first time without running into a prerequisite they have not yet seen. A DAG (directed acyclic graph) admits at least one topological ordering, which is exactly the order in which concepts can be taught. A graph with a cycle has no valid topological order.

    **Concept Tested:** DAG Structure

---

#### 4. What is the primary benefit of separating chapter outline generation from chapter content authoring into two pipeline stages?

<div class="upper-alpha" markdown>
1. It reduces the total word count of each chapter
2. It allows Required Content Directives to survive regenerations, enables targeted regeneration, and supports idempotence
3. It makes chapters easier to translate into other languages
4. It eliminates the need for a learning graph
</div>

??? question "Show Answer"
    The correct answer is **B**. The two-stage split buys three properties: idempotence under unchanged inputs (running the pipeline twice produces the same chapter), targeted regeneration (only chapters touched by a graph change need to be regenerated), and directives that survive regenerations (constraints like the privacy-warning admonition are parked in the outline and read as input by the generator, not as something it might choose to keep).

    **Concept Tested:** Chapter Outline

---

#### 5. In prompt engineering for the authoring pipeline, why is the system role the preferred location for project-wide constraints like the style guide?

<div class="upper-alpha" markdown>
1. The system role is cheaper to process in terms of tokens
2. The system role persists across the whole conversation, letting the model apply global constraints to each local request
3. The system role is the only role the model can read
4. The system role is automatically cached for 24 hours
</div>

??? question "Show Answer"
    The correct answer is **B**. The Claude API distinguishes system, user, and assistant roles. The system role holds persistent instructions that apply across the entire conversation — the style guide, schema conventions, and voice rules. The user role holds the immediate request. Keeping them separated rather than concatenating into a single blob lets the model apply global constraints to every local request. Tokens near the start (system role) and end (recent request) also get more attention weight.

    **Concept Tested:** Prompt Engineering

---

#### 6. The "lost-in-the-middle" effect in large context windows refers to what phenomenon?

<div class="upper-alpha" markdown>
1. Tokens in the middle of a long prompt receive less attention weight than tokens at the start or end
2. The model cannot process any tokens beyond the context window limit
3. Middle chapters of a textbook are always lower quality than first and last chapters
4. The prompt cache only stores the middle portion of the context
</div>

??? question "Show Answer"
    The correct answer is **A**. Even within a context window that fits all the content, the model's attention is not uniform. Tokens near the start (especially in the system role) and tokens at the end (the recent request) get more weight than tokens in the middle. A constraint stated in the middle of a 50,000-token prompt may be ignored. The structural fix is to put high-priority directives in the system role or at the end of the user role.

    **Concept Tested:** Context Window

---

#### 7. This book targets Level 2 on the intelligent textbook classification. What is the defining characteristic that separates Level 2 from Level 3?

<div class="upper-alpha" markdown>
1. Level 2 uses MicroSims; Level 3 does not
2. Level 3 stores individual student data, triggering FERPA, COPPA, GDPR, and CCPA/CPRA obligations
3. Level 2 requires an LLM; Level 3 does not
4. Level 3 uses a different static site generator
</div>

??? question "Show Answer"
    The correct answer is **B**. The defining architectural addition at Level 3 is the storage of per-learner records — goals, progress, behavioral history tied to an identifiable student. This crosses the privacy inflection point and triggers regulations including FERPA, COPPA (if under 13), GDPR, and CCPA/CPRA. Level 2 has MicroSims, learning graphs, and path recommendations but stores no individual student records, keeping the regulatory surface minimal.

    **Concept Tested:** Intelligent Textbook Design

---

#### 8. According to the METR finding cited in this chapter, what is the approximate rate at which AI task capabilities are doubling?

<div class="upper-alpha" markdown>
1. Every three years
2. Every seven months
3. Every two weeks
4. Every five years
</div>

??? question "Show Answer"
    The correct answer is **B**. The METR finding on frontier AI task-capability growth indicates that the length of tasks an AI system can reliably complete roughly doubles every seven months. This trend has direct implications for Level 2 content: producing high-quality Level 2 content is commoditizing rapidly, which means the durable strategic value lies in producing it with pedagogical discipline (this book's contribution) and in Level 3+ capabilities that require institutional data-governance infrastructure.

    **Concept Tested:** Intelligent Textbook Design

---

#### 9. The token-pressure trap (loop B1) in the authoring pipeline produces what cascade of negative effects?

<div class="upper-alpha" markdown>
1. Longer chapters cost more tokens, forcing context truncation, which produces generation inconsistency, which creates rework that throttles iteration
2. Shorter chapters reduce quality because they lack sufficient detail
3. Token costs rise but have no effect on output quality
4. The learning graph becomes too large for the context window
</div>

??? question "Show Answer"
    The correct answer is **A**. The token-pressure trap (B1) works as follows: as chapters grow, token-budget pressure rises; pressure forces truncation of prior-chapter context; truncation produces style, voice, and schema drift; drift is caught on review and fixed by hand (rework); rework throttles the author's iteration rate, which starves the graph-quality flywheel (R1). Three moves counter this: separate outlines from content, keep references in separate files, and regenerate in batches within the five-minute cache window.

    **Concept Tested:** Token Budgeting

---

#### 10. A SKILL.md file must include which section that names every file the skill will write, preventing silent side effects?

<div class="upper-alpha" markdown>
1. ## Changelog
2. ## References
3. ## Outputs
4. ## Description
</div>

??? question "Show Answer"
    The correct answer is **C**. The ## Outputs section names every artifact the skill produces, with paths. A skill that silently edits files outside its declared output surface is broken — side-effect-explicitness is one of the two properties (alongside composability) that make skills reusable across projects. The Outputs section is what lets the harness verify that the skill did what it said it would do and nothing more.

    **Concept Tested:** SKILL.md Format
