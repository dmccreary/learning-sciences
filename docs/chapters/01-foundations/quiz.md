# Quiz: Foundations of Learning Sciences

Test your understanding of Learning Sciences fundamentals, parent disciplines, Bloom's Taxonomy, intelligent textbooks, and the authoring toolchain with these review questions.

---

#### 1. Which discipline serves as the "translation layer" that converts research findings into learning experiences?

<div class="upper-alpha" markdown>
1. Cognitive Science
2. Educational Psychology
3. Neuroscience in Learning
4. Instructional Design
</div>

??? question "Show Answer"
    The correct answer is **D**. Instructional Design is the applied discipline that translates findings from the three research fields — Cognitive Science, Educational Psychology, and Neuroscience — into actual learning experiences. Where cognitive science asks *how does memory work?*, instructional design asks *given how memory works, what should this lesson look like?* Models like ADDIE and Backward Design sit inside this discipline.

    **Concept Tested:** Instructional Design

---

#### 2. What is the primary commitment of evidence-based pedagogy?

<div class="upper-alpha" markdown>
1. Choosing instructional strategies based on empirical research rather than tradition or intuition
2. Using AI-generated content for all instructional materials
3. Following the instructional methods the author experienced as a student
4. Prioritizing neuroscience findings over behavioral evidence
</div>

??? question "Show Answer"
    The correct answer is **A**. Evidence-based pedagogy is the commitment to choose instructional strategies on the basis of empirical research — ideally randomized or quasi-experimental — rather than on what the author happened to experience in school, tradition, or market pressure. It also requires labeling claims by study type, flagging plausible confounds, and treating popular claims skeptically.

    **Concept Tested:** Evidence-Based Pedagogy

---

#### 3. In the 2001 revised Bloom's Taxonomy, which cognitive level sits at the top?

<div class="upper-alpha" markdown>
1. Evaluate
2. Analyze
3. Create
4. Apply
</div>

??? question "Show Answer"
    The correct answer is **C**. The 2001 revision by Anderson, Krathwohl, and colleagues reordered the top two levels so that Create sits above Evaluate. The full order from bottom to top is: Remember, Understand, Apply, Analyze, Evaluate, Create. The revision also renamed the levels as verbs (processes) rather than nouns.

    **Concept Tested:** Bloom Taxonomy 2001

---

#### 4. Which of the following is a valid learning objective at the Understand level of Bloom's Taxonomy?

<div class="upper-alpha" markdown>
1. List the three stages of the memory model
2. Design an original pedagogical mascot with a documented voice guide
3. Explain why retrieval practice strengthens memory more than re-reading
4. Use cognitive load theory to revise a MicroSim with too many controls
</div>

??? question "Show Answer"
    The correct answer is **C**. A learning objective at the Understand level requires the learner to construct meaning from instructional messages, using verbs like explain, summarize, describe, compare, or classify. Option A is Remember (list), option B is Create (design), and option D is Apply (use). The verb determines the Bloom level.

    **Concept Tested:** Learning Objective

---

#### 5. What three characteristics distinguish an intelligent textbook from a static textbook?

<div class="upper-alpha" markdown>
1. Color printing, hyperlinks, and a table of contents
2. Structured machine-readable knowledge, interactive components, and a regeneration pipeline
3. Digital format, search functionality, and multimedia
4. AI-generated prose, automatic grading, and student tracking
</div>

??? question "Show Answer"
    The correct answer is **B**. An intelligent textbook has structured machine-readable knowledge underneath the prose (the learning graph), interactive components on top (MicroSims, quizzes), and a production pipeline that can regenerate any part as understanding improves. All three pieces matter — prose alone is a static book; prose plus interactivity is a website; all three together make an intelligent textbook.

    **Concept Tested:** Intelligent Textbook

---

#### 6. In the authoring toolchain described in this chapter, what is the role of an Agent Skill?

<div class="upper-alpha" markdown>
1. A neural network trained to generate text
2. A modular, reusable capability invoked by name through an IDE harness
3. A static-site generator that converts Markdown to HTML
4. A version-control system for tracking file changes
</div>

??? question "Show Answer"
    The correct answer is **B**. An Agent Skill is a modular, reusable capability that an IDE harness can invoke by name. Each skill is a directory containing at minimum a SKILL.md file that describes when the skill applies and what it does. Skills turn general-purpose AI assistance into specific, repeatable authoring workflows — like generating a glossary, quiz, or MicroSim.

    **Concept Tested:** Agent Skill

---

#### 7. At which Intelligent Textbook Level does this book teach, and why does it stop there?

<div class="upper-alpha" markdown>
1. Level 1 — Static, because AI-generated content is unreliable
2. Level 3 — Adaptive, because personalization requires stored student data
3. Level 2 — Interactive, because moving to Level 3 crosses a regulatory inflection point involving student data privacy
4. Level 4 — Chatbot, because conversational tutoring is the current standard
</div>

??? question "Show Answer"
    The correct answer is **C**. The book teaches Level 2 (Interactive), which includes learning graphs, MicroSims, and path recommendations but stores no individual student records. The jump to Level 3 is a regulatory inflection point — once a system stores learning histories or identifying signals about named students, it enters a domain governed by FERPA, COPPA, GDPR, and comparable laws with requirements that are out of scope for this course.

    **Concept Tested:** Intelligent Textbook Level

---

#### 8. What is the structural spine of an intelligent textbook from which all other artifacts are generated?

<div class="upper-alpha" markdown>
1. The table of contents
2. The glossary
3. The learning graph
4. The chapter outline
</div>

??? question "Show Answer"
    The correct answer is **C**. The learning graph — a directed acyclic graph of concepts with dependency edges — is the structural spine of an intelligent textbook. Every other artifact (chapters, glossary, quiz bank, MicroSims, FAQ, references) is generated against it. Change a dependency in the graph and the downstream artifacts change too.

    **Concept Tested:** Intelligent Textbook

---

#### 9. Learning Sciences draws on multiple parent disciplines. Which discipline contributes the study of how sensory memory hands off to working memory and then to long-term memory?

<div class="upper-alpha" markdown>
1. Educational Psychology
2. Instructional Design
3. Neuroscience in Learning
4. Cognitive Science
</div>

??? question "Show Answer"
    The correct answer is **D**. Cognitive Science — the study of the mind as an information-processing system — contributes the architecture of memory: how sensory memory hands off to working memory, how working memory hands off to long-term memory, and what limits each transfer. Concepts like cognitive load, chunking, and dual coding draw on cognitive science.

    **Concept Tested:** Cognitive Science

---

#### 10. An IDE harness is best described as which of the following?

<div class="upper-alpha" markdown>
1. A benchmark test suite for evaluating language model performance
2. A client-side runtime that routes prompts, runs the agent loop, dispatches tool calls, manages context, and enforces sandboxing
3. A cloud-hosted API endpoint for accessing language models
4. A file format for storing conversation history
</div>

??? question "Show Answer"
    The correct answer is **B**. An IDE harness is the client-side software that sits between an author's prompt and a language model. It is responsible for routing the prompt to the appropriate model, running the agent loop (prompt → model → tool call → tool result → next prompt), dispatching tool calls to the filesystem and shell, managing conversation context and memory, and enforcing sandbox and permission policies. The widely-quoted shorthand is *Agent = Model + Harness*.

    **Concept Tested:** Claude Code
