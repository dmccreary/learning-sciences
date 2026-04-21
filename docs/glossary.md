# Glossary of Terms

#### A/B Testing in Learning

A controlled experimental method that randomly assigns learners to different versions of an instructional element and compares outcomes to determine which version produces better learning.

A/B testing brings empirical rigor to textbook design decisions. Instead of debating whether worked examples or problem sets are better for a particular section, you test both and let the data decide.

**Example:** Randomly showing half the learners a worked example first and the other half a problem first, then comparing quiz scores to determine the more effective sequence.

#### Accessibility

The design and implementation of learning materials so that people with disabilities — including visual, auditory, motor, and cognitive impairments — can perceive, navigate, and interact with the content effectively.

Accessibility is a non-negotiable quality standard, not an optional feature. An intelligent textbook that excludes learners with disabilities has failed at its fundamental mission regardless of how sophisticated its other features are.

**Example:** Ensuring every MicroSim includes alt text descriptions, keyboard navigation, and sufficient color contrast for learners with visual impairments.

#### Accessibility Audit Basics

A systematic review of learning materials against established accessibility standards — such as WCAG guidelines — to identify and remediate barriers for learners with disabilities.

An accessibility audit is not optional polish — it is a quality gate that every chapter and MicroSim must pass before deployment. Basic audits can catch the majority of issues with minimal specialized training.

**Example:** Checking that all images have alt text, all MicroSims are keyboard-navigable, color is not the sole information channel, and heading hierarchy is correct.

#### Admonition CSS Styling

The custom CSS rules that define the visual appearance — colors, icons, borders, spacing, and mascot image placement — of each admonition type in the MkDocs Material theme.

Admonition CSS styling is what makes each admonition type visually distinct and instantly recognizable, supporting the reader's ability to identify the function of each admonition at a glance.

**Example:** The `mascot-warning` admonition styled with an orange left border and the Bloom "warning" pose image, visually distinct from the green `mascot-tip` admonition.

#### Agent Skill

A reusable, self-contained AI capability defined by a SKILL.md file that specifies the task, inputs, outputs, constraints, and quality criteria for a particular content generation workflow.

Agent skills are the building blocks of the intelligent textbook pipeline. Each skill encapsulates domain expertise — how to write a good quiz item, how to structure a chapter — so the process is repeatable and auditable.

**Example:** The `microsim-generator` skill takes a concept name and learning objective, then produces a working p5.js simulation with appropriate controls and pedagogical framing.

#### Analogical Reasoning

A cognitive process in which a learner maps the relational structure of a familiar domain (the source analog) onto a less familiar domain (the target analog) to generate inferences, explanations, or predictions.

Analogies are powerful tools for understanding abstract concepts, but they carry risks — learners may over-extend the mapping or import features from the source that do not apply to the target.

**Example:** Explaining working memory capacity using the analogy of a juggler who can keep only four balls in the air at once — useful for the capacity limit, misleading for the processing aspect.

#### Application Domain

The area of learning sciences concerned with how learners use acquired knowledge and skills to solve new problems, make decisions, and perform tasks in varied contexts.

The gap between "I understand it" and "I can use it" is where most instruction fails. This domain covers transfer, problem solving, and the design of practice that bridges classroom learning to real-world performance.

**Example:** After learning about cognitive load theory, students design a MicroSim that deliberately manages intrinsic and extraneous load for a target audience.

#### ARCS Model

A motivational design framework identifying four components — Attention, Relevance, Confidence, and Satisfaction — that instructional materials must address to sustain learner motivation.

The ARCS model gives textbook designers a systematic checklist for each chapter: Does it capture attention? Show relevance to learner goals? Build confidence through achievable challenges? Deliver satisfaction through meaningful outcomes?

**Example:** A chapter that opens with a surprising finding (Attention), connects it to the reader's teaching practice (Relevance), includes a scaffolded exercise (Confidence), and ends with a successful MicroSim build (Satisfaction).

#### Assessment Rubric

A scoring guide that defines the criteria and performance levels for evaluating learner work, providing transparency about expectations and consistency across evaluations.

Rubrics serve double duty: they guide the evaluator and teach the learner what quality looks like. Sharing the rubric before the assignment is itself an instructional strategy.

**Example:** A MicroSim rubric with criteria for pedagogical alignment, code quality, user interaction design, and accessibility, each rated on a four-level scale.

#### Attention

The cognitive process of selectively concentrating on relevant information while filtering out distractions, serving as the gateway to all subsequent learning processes.

Attention is the first bottleneck in learning: information that does not pass through the attentional filter never reaches working memory. Textbook design must capture and sustain attention without resorting to gimmicks that compete with the content.

**Example:** Using a surprising statistic or counterintuitive finding at the opening of each chapter to capture attention before introducing the core concept.

#### Attention Capture

The initial process by which a stimulus — through novelty, salience, relevance, or emotional valence — draws a learner's focus from their current activity.

Attention capture gets learners to the starting line. In a textbook, it is the hook at the beginning of a section — the question, the puzzle, the vivid scenario that makes the reader lean in.

**Example:** Opening a chapter on the forgetting curve with "You will forget 70% of this chapter within 24 hours — unless we do something about it."

#### Automaticity

The ability to perform a cognitive or motor skill with minimal conscious attention or working memory resources, achieved through extensive practice and freeing capacity for higher-level thinking.

Automaticity is the mechanism that makes expertise efficient. When basic operations become automatic, working memory is freed for strategic and creative thinking — which is why fluent readers understand more than struggling decoders.

**Example:** A proficient programmer who writes basic p5.js syntax without thinking about it, freeing working memory to focus on the pedagogical design of the MicroSim.

#### Autonomy Need

The psychological need to feel volitional and self-directed in one's actions, experiencing choice and ownership rather than coercion or external control.

When textbooks offer only a single rigid path, they undermine autonomy. Intelligent textbooks can support this need by providing branching content, optional deep dives, and learner-selected MicroSim parameters.

**Example:** Letting learners choose which historical figure's story they read in a graphic novel chapter while still covering the same learning objective.

#### Blended Learning

An instructional approach that combines face-to-face classroom instruction with online learning activities, integrating the strengths of both modalities to create a more flexible and effective learning experience.

Blended learning lets the intelligent textbook handle what it does best — content delivery, retrieval practice, personalized pacing — while preserving face-to-face time for discussion, collaboration, and mentorship.

**Example:** Students reading the textbook and completing MicroSim activities online, then meeting in person to discuss applications and work through case studies collaboratively.

#### Bloom Taxonomy 2001

A revised framework for classifying educational objectives into six hierarchical cognitive levels: Remember, Understand, Apply, Analyze, Evaluate, and Create, updated from the 1956 original by Anderson and Krathwohl.

The taxonomy gives textbook authors a shared vocabulary for writing learning objectives at the right cognitive level and ensures that assessments match the intended depth of understanding.

**Example:** A chapter objective at the Analyze level might read: "Compare the effectiveness of massed versus distributed practice using experimental evidence."

#### Book Chapter Generator

An AI skill that produces chapter outlines — including learning objectives, section structure, key terms, and planned activities — from the learning graph and course description.

The book chapter generator bridges the gap between the learning graph's abstract concept structure and the concrete chapter-by-chapter organization of the textbook.

**Example:** Generating outlines for 14 chapters, each with 4-6 sections aligned to the learning graph's concept clusters and sequenced to respect prerequisite dependencies.

#### Book Metrics Generator

An AI skill that analyzes the completed textbook to produce quality metrics — word counts, reading levels, concept coverage, assessment density, and MicroSim distribution — for review and improvement.

The book metrics generator provides the quantitative feedback needed for iterative textbook improvement, identifying chapters that are too long, too dense, or insufficiently assessed.

**Example:** A report showing that Chapter 9 has 6,000 words but only two quiz items, flagging it as under-assessed relative to other chapters.

#### Capstone Project

A culminating academic assignment that requires learners to integrate and apply knowledge and skills from across the entire course to produce a substantial, original work product.

The capstone project for this course is the intelligent textbook itself — a project that requires learners to apply all seven domains of learning science while using the AI-augmented authoring pipeline they studied.

**Example:** Each learner or team producing a complete intelligent textbook on a topic of their choice, including a learning graph, five chapters, MicroSims, quizzes, and a graphic novel section.

#### Caption Box Writing

The composition of narrative text boxes in graphic novel panels that provide context, transitions, or explanatory information that cannot be conveyed through character dialogue alone.

Caption boxes handle the expository work that speech bubbles cannot — historical context, time jumps, technical explanations — while maintaining the narrative flow of the graphic novel format.

**Example:** A caption box reading "Berlin, 1885. After months of memorizing and forgetting 2,300 nonsense syllables, Ebbinghaus began to see a pattern." — setting the scene for the next panel.

#### Case-Based Learning

An instructional method in which learners analyze detailed, realistic scenarios or cases to apply theoretical concepts, develop analytical skills, and practice professional judgment.

Cases bridge the gap between abstract principles and messy reality. Each case provides a rich context for applying multiple concepts simultaneously, building the kind of integrated knowledge that transfers to practice.

**Example:** Analyzing a case study of a corporate training program that failed despite high learner satisfaction scores, using assessment and motivation theory to diagnose the problem.

#### Central Executive

The attentional control component of working memory that coordinates the phonological loop and visuospatial sketchpad, directs focus, and manages the switching between tasks and information sources.

The central executive is what gets taxed when a textbook page requires learners to simultaneously read text, interpret a diagram, and adjust a MicroSim — a design pattern to avoid.

**Example:** Sequencing a worked example so learners read the explanation first, then examine the diagram, rather than splitting attention between both simultaneously.

#### Chapter Content Authoring

The process of writing the full text of a textbook chapter, integrating explanatory prose, examples, diagrams, mascot admonitions, retrieval prompts, and MicroSim references according to the chapter outline and style guide.

Chapter content authoring is the most complex skill in the pipeline because it must simultaneously manage voice, accuracy, cognitive load, engagement, and structural consistency across all chapters.

**Example:** An AI skill that generates a first draft of a chapter section by combining the chapter outline, glossary definitions, learning objectives, and style guide constraints.

#### Chapter Content Generator

An AI skill that produces full chapter text — prose, examples, mascot admonitions, retrieval prompts, and MicroSim references — from a chapter outline, glossary, and style guide.

The chapter content generator is the most complex skill in the pipeline, responsible for producing engaging, accurate, pedagogically sound prose that follows the voice and formatting guidelines.

**Example:** Generating a 4,000-word chapter on retrieval practice that includes a Bloom welcome admonition, two worked examples, an interactive MicroSim reference, and a closing retrieval prompt.

#### Chapter Outline

A structured plan for a chapter that specifies the learning objectives, concept sequence, major sections, key terms, planned activities, and assessment strategy before full content is authored.

Chapter outlines are the architectural blueprints of the textbook. Writing them before the content ensures that each chapter has a clear learning path, appropriate cognitive load, and alignment with the learning graph.

**Example:** An outline for the Retention chapter listing sections on the forgetting curve, retrieval practice, spaced repetition, and interleaving, with a MicroSim planned for the forgetting curve section.

#### Chapter Rubric Evaluation

The systematic assessment of a completed chapter against defined quality criteria — learning objective alignment, cognitive load management, voice consistency, mascot usage, and assessment density — to ensure publication readiness.

Chapter rubric evaluation is the quality gate between drafting and publishing. The rubric operationalizes the style guide and design principles into a checkable, scorable format.

**Example:** Evaluating a chapter against criteria including: exactly one mascot-welcome, no more than six total mascot admonitions, at least one retrieval prompt, no instances of "obviously" or "simply."

#### Character Design

The process of defining a character's visual appearance, personality, background, and role within a pedagogical narrative, ensuring they serve the story's learning objectives and represent diverse perspectives.

Character design for pedagogical narratives prioritizes clarity and consistency over artistic complexity. Characters must be recognizable across panels and their visual design should support, not distract from, the learning content.

**Example:** Designing Hermann Ebbinghaus as a middle-aged man with distinctive spectacles and beard, holding a list of nonsense syllables — visual elements that reinforce his identity and research across all panels.

#### Chart.js Library

A JavaScript charting library that renders responsive, animated charts — line, bar, scatter, pie, and others — in HTML canvas elements using a declarative API.

Chart.js is used for MicroSims that need standard chart types — learning curves, performance distributions, comparison bar charts — where p5.js custom drawing would be unnecessary overhead.

**Example:** A line chart showing quiz performance over time with annotations for when spaced retrieval sessions occurred, rendered with Chart.js for clean, responsive display.

#### Chunking

The cognitive strategy of grouping individual pieces of information into larger, meaningful units to reduce the number of items held in working memory and increase effective capacity.

Chunking is the learner's main defense against working memory limits. Expert chess players do not see 20 individual pieces — they see four familiar patterns. Textbook design supports chunking through clear categories, acronyms, and visual groupings.

**Example:** Remembering the ARCS model as a single chunk (Attention, Relevance, Confidence, Satisfaction) rather than four separate motivational principles.

#### Classroom Discourse

The patterns of verbal and written interaction between instructors and learners and among learners themselves, including questions, explanations, arguments, and collaborative reasoning.

Classroom discourse is where understanding is constructed socially. In an online textbook context, discussion prompts, peer review processes, and comment features serve as the digital equivalent.

**Example:** A structured discussion prompt that asks learners to explain a concept to a peer and then revise their explanation based on the peer's questions.

#### Claude Code

Anthropic's command-line interface for Claude that enables developers to invoke AI capabilities directly from a terminal, run agent skills, and automate multi-step content generation workflows.

Claude Code is the primary authoring tool for this course's intelligent textbook pipeline, orchestrating skills that generate learning graphs, chapters, quizzes, glossaries, and MicroSims.

**Example:** Running a glossary generator skill from Claude Code that reads the course learning graph and produces definitions for every concept node.

#### Cognitive Load

The total demand placed on working memory during a learning task, determined by the complexity of the material, the quality of instruction, and the learner's relevant prior knowledge.

Cognitive load is the master constraint of instructional design. Every element added to a page — text, image, animation, control — consumes a finite cognitive resource, and overload stops learning cold.

**Example:** A learner struggling with a MicroSim that requires adjusting five sliders while reading a graph and interpreting a legend simultaneously — a clear case of cognitive overload.

#### Cognitive Load Theory

A comprehensive instructional design theory, developed by John Sweller, that uses the architecture of human cognition — limited working memory and unlimited long-term memory — to derive principles for designing instruction that optimizes learning.

Cognitive load theory is the single most actionable framework in this textbook. It explains why worked examples help novices, why expertise can reverse instructional effects, and why more information is not always better.

**Example:** The expertise reversal effect — where instructional scaffolding that helps novices actually hinders experts — predicted and explained by cognitive load theory.

#### Cognitive Science

The scientific study of mental processes including perception, attention, memory, language, reasoning, and problem solving, drawing on psychology, neuroscience, linguistics, and artificial intelligence.

Cognitive science provides the theoretical backbone for intelligent textbook decisions — from how much text fits on a page before overloading working memory to why retrieval practice outperforms re-reading.

**Example:** Applying findings about the capacity limits of working memory to keep MicroSim controls under four simultaneous parameters.

#### Community of Practice

A group of people who share a domain of interest and engage in regular interaction to develop shared expertise, resources, norms, and identity through collaborative learning and knowledge sharing.

Communities of practice provide the social infrastructure for sustained learning beyond any single textbook. Building a community around the textbook — through forums, peer review, or shared projects — extends its impact.

**Example:** A cohort of instructional designers who share their intelligent textbook projects, review each other's MicroSims, and collectively develop best practices.

#### Competence Need

The psychological need to feel effective and capable when interacting with one's environment, experiencing mastery and growth rather than helplessness.

Competence need explains why appropriate challenge level matters: tasks too easy bore learners; tasks too hard defeat them. Intelligent textbooks can calibrate difficulty dynamically through adaptive quizzing.

**Example:** A quiz system that adjusts item difficulty upward after three correct answers, keeping the learner in a productive challenge zone.

#### Concept Classifier

An AI skill that categorizes concepts by domain, Bloom's Taxonomy level, prerequisite depth, and other attributes to support learning graph construction and chapter organization.

The concept classifier enriches the raw concept list with metadata that drives downstream decisions — which domain a concept belongs to, what cognitive level it targets, and how deep its prerequisite chain runs.

**Example:** Classifying "retrieval practice" as Retention domain, Bloom's Apply level, prerequisite depth 3 (depends on long-term memory, encoding, and consolidation).

#### Concept Dependency

A prerequisite relationship between two concepts in which understanding the first concept is necessary for meaningful learning of the second.

Concept dependencies constrain the order in which material can be effectively presented. Violating a dependency — teaching transfer before teaching schemas — produces confusion that looks like inability but is actually poor sequencing.

**Example:** "Retrieval practice" depends on "long-term memory" and "encoding" — a learner cannot understand why retrieval works without knowing where memories are stored and how they got there.

#### Concept Edge

A directed connection between two concept nodes in the learning graph, indicating that the source concept is a prerequisite for understanding the target concept.

Concept edges encode the pedagogical sequencing logic of the textbook. Each edge is a testable claim: "if a learner does not understand concept A, they will struggle with concept B."

**Example:** An edge from "Working Memory" to "Cognitive Load" indicating that understanding working memory is necessary before cognitive load theory makes sense.

#### Concept Node

A single concept or learning objective represented as a node in the learning graph, typically corresponding to a glossary entry, a section of a chapter, or a distinct skill to be assessed.

Concept nodes are the atomic units of the curriculum. Each node should be small enough to teach in one sitting but large enough to be meaningful — roughly one section of one chapter.

**Example:** "Retrieval Practice" as a concept node linked to its definition, the chapter section that teaches it, the quiz items that assess it, and the MicroSim that demonstrates it.

#### Conceptual Change

The learning process by which a learner's existing understanding of a concept is fundamentally reorganized or replaced, typically requiring dissatisfaction with the current model and exposure to a more explanatory alternative.

Conceptual change is the hardest kind of learning because it requires dismantling existing schemas, not adding to them. Effective textbook strategies include bridging analogies, refutational texts, and MicroSims that make the misconception's failure visible.

**Example:** A learner who initially believes that "more study time always means more learning" encountering the forgetting curve data and revising their model to include retrieval timing as a critical variable.

#### Consolidation

The neurobiological process by which recently encoded memories are stabilized and integrated into existing long-term memory networks, occurring over hours to days and enhanced by sleep.

Consolidation explains why cramming fails and why spaced practice works: the brain needs time — especially sleep — to stabilize new memories. Textbook pacing should respect this biological constraint.

**Example:** Spacing chapter readings across several days rather than assigning all chapters in one sitting, allowing overnight consolidation between sessions.

#### Constructivism

A learning theory positing that learners actively construct knowledge by integrating new experiences with their existing mental frameworks rather than passively receiving transmitted information.

Constructivism reframes the textbook's role from transmitter to facilitator. The text does not deliver knowledge into the learner's head — it provides experiences and scaffolding that help the learner build their own understanding.

**Example:** A MicroSim that lets learners discover the forgetting curve by entering their own data and observing the pattern, rather than presenting the curve as a pre-made graph.

#### Context Window

The maximum amount of text — measured in tokens — that a large language model can process in a single interaction, encompassing both the input prompt and the generated output.

Context window size determines how much course material the AI can "see" at once when generating content. A larger context window allows the model to maintain consistency across an entire chapter or textbook section.

**Example:** Feeding the full learning graph, style guide, and chapter outline into a single prompt so the model can generate a chapter that is consistent with the entire textbook structure.

#### Corrective Feedback

Feedback that not only indicates an error but also provides specific information about what is wrong, why it is wrong, and how to correct it, guiding the learner toward accurate understanding.

Corrective feedback is more effective than simple right/wrong feedback because it addresses the underlying misconception rather than the surface error. An intelligent textbook can generate targeted explanations for each wrong answer.

**Example:** "Incorrect — you selected 'extraneous cognitive load,' but this scenario describes complexity inherent to the material itself (intrinsic load). Extraneous load comes from poor design, not from the content's complexity."

#### Course Description Analyzer

An AI skill that extracts key information from a course description — topics, objectives, prerequisites, audience, and scope — to inform the generation of a learning graph and chapter structure.

The course description analyzer is the first skill in the pipeline, transforming a high-level course description into the structured data that all downstream skills depend on.

**Example:** Feeding a three-paragraph course description into the analyzer and receiving a structured list of 15 topic areas, 40 learning objectives, and a recommended chapter sequence.

#### Culturally Responsive Teaching

An instructional approach that recognizes the importance of including students' cultural references, experiences, and perspectives in all aspects of learning, connecting content to learners' lived realities.

Culturally responsive teaching ensures that the textbook's examples, case studies, stories, and assessment scenarios reflect the diversity of its readership rather than assuming a single cultural default.

**Example:** Including graphic novel chapters featuring learning scientists from diverse cultural backgrounds and geographic regions, not only Western European and American researchers.

#### Curiosity

An intrinsic desire to seek new information or experiences, triggered by information gaps, novelty, or conceptual conflict, and serving as a natural driver of exploratory learning behavior.

Curiosity is the motivation researchers wish they could bottle. Textbook designers can trigger it reliably by revealing an information gap — showing learners what they do not yet know — before providing the answer.

**Example:** Presenting a MicroSim result that contradicts the learner's prediction, then asking "Why did that happen?" before explaining the underlying principle.

#### DAG Structure

A directed acyclic graph — a network of nodes connected by one-way edges with no cycles — used as the mathematical structure for representing concept dependencies that flow in one direction without circular prerequisites.

DAG structure ensures the learning graph has a valid topological ordering — a sequence in which every concept appears after all its prerequisites. Cycles would create impossible prerequisite chains.

**Example:** If concept A requires B and B requires C, the DAG guarantees C is taught first, then B, then A — with no circular dependency where A requires B which requires A.

#### Danger Admonition

A styled content block that warns learners about critical errors, irreversible actions, or severe misconceptions that could have significant negative consequences for their learning or work.

Danger admonitions are reserved for the most serious warnings — mistakes that are hard to recover from or misconceptions that, if internalized, will actively interfere with future learning.

**Example:** "Danger: Do NOT treat AI-generated quiz items as validated without human review. AI can produce plausible-sounding items with incorrect answer keys."

#### Delayed Feedback

Information about the correctness or quality of a learner's response provided after a time interval, allowing the learner to process and reflect before receiving evaluation.

Delayed feedback can be more effective than immediate feedback for complex, conceptual learning because it encourages deeper processing and prevents learners from becoming dependent on instant correction.

**Example:** Returning written assignment feedback 48 hours after submission, giving learners time to self-evaluate before seeing the instructor's assessment.

#### Deliberate Practice

A structured form of effortful practice specifically designed to improve performance, characterized by clear goals, focused attention, immediate expert feedback, and repeated refinement of weak areas.

Deliberate practice is what separates improvement from mere repetition. The intelligent textbook can support it by providing targeted exercises that address specific weaknesses identified through assessment analytics.

**Example:** A learner who receives quiz analytics showing weak performance on transfer questions and then spends focused practice time on analogy-based exercises rather than re-reading the chapter.

#### Desirable Difficulty

A learning condition that introduces challenges during encoding or practice — such as spacing, interleaving, or generation — that slow initial performance but enhance long-term retention and transfer.

Desirable difficulties are counterintuitive: they make learning feel harder in the moment while making it more durable. The intelligent textbook must convince learners that productive struggle is a feature, not a bug.

**Example:** Interleaved practice problems that feel confusing compared to blocked practice, but produce significantly better performance on a delayed test.

#### Diagnostic Assessment

Evaluation designed to identify specific knowledge gaps, misconceptions, or skill deficits before or during instruction, informing targeted remediation rather than measuring achievement.

Diagnostic assessment answers the question "Where exactly is the learner stuck?" rather than "How much does the learner know?" It is the foundation for personalized learning paths in an intelligent textbook.

**Example:** A pre-chapter diagnostic that reveals a learner lacks prerequisite understanding of working memory, triggering a recommendation to review that concept before proceeding.

#### Diagram Overlay Pattern

A design pattern in which interactive markers, labels, or hotspots are layered on top of a base scientific illustration, enabling learners to explore and quiz themselves on the diagram's components.

The diagram overlay pattern is the implementation technique behind interactive infographics. It separates the visual content (the illustration) from the interactive layer (the markers and quiz logic).

**Example:** A base illustration of the human brain with overlay markers for the prefrontal cortex, hippocampus, and amygdala that reveal descriptions on hover and test recall on click.

#### Diagram Reports Generator

An AI skill that identifies where the textbook would benefit from diagrams, causal loop diagrams, or infographics and generates specification reports for creating them.

The diagram reports generator ensures that visual elements are placed where they add pedagogical value rather than where they are merely decorative, guided by the multimedia learning theory principles in the style guide.

#### Distributed Practice

A study pattern in which practice or review sessions are spread across multiple time points with intervening gaps, producing stronger long-term retention than the same total study time concentrated in one session.

Distributed practice is the behavioral implementation of the spacing effect. The intelligent textbook supports it architecturally by distributing review prompts across chapters rather than concentrating them in a single review section.

**Example:** Studying three chapters per week over four weeks rather than all twelve chapters in a single weekend.

#### Dreyfus Skill Model

A five-stage model of skill acquisition — Novice, Advanced Beginner, Competent, Proficient, Expert — describing how learners progress from rigid rule-following to fluid, intuitive performance.

The Dreyfus model helps textbook designers match instructional strategies to the learner's current stage: rules and procedures for novices, case studies for competent learners, and complex scenarios for proficient and expert learners.

**Example:** A novice instructional designer follows a rigid template for chapter structure, while an expert adapts the structure fluidly based on the specific content and audience.

#### Dual Coding Theory

Allan Paivio's theory proposing that cognition operates through two independent but interconnected systems — a verbal system for language and a nonverbal system for imagery — and that information encoded in both systems is remembered better than information encoded in only one.

Dual coding is the theoretical justification for pairing text with diagrams, MicroSims, and graphic novels throughout the intelligent textbook. Two codes are better than one because they provide independent retrieval routes.

**Example:** A chapter on the forgetting curve includes both a verbal description and an interactive MicroSim showing the curve visually, engaging both coding systems.

#### Echoic Memory

The sensory memory subsystem that stores auditory information for approximately 3-4 seconds after the sound ends, enabling continuous processing of speech and other time-dependent audio signals.

Echoic memory's longer duration compared to iconic memory is one reason narrated explanations can complement visual content — the auditory trace persists long enough to integrate with what the eyes are reading.

#### Educational Psychology

A branch of psychology focused on understanding how people learn in educational settings, including motivation, development, assessment, and the design of instruction.

Educational psychology supplies the empirical evidence for pedagogical choices — which feedback timing works best, how goal orientation affects persistence, and what role self-efficacy plays in learning outcomes.

**Example:** Drawing on research about growth mindset to frame textbook error messages as learning opportunities rather than failure indicators.

#### Elaboration

A cognitive strategy in which learners generate connections between new information and prior knowledge by adding detail, creating examples, forming analogies, or asking and answering "why" and "how" questions.

Elaboration is one of the most powerful encoding strategies because it creates multiple retrieval paths to the same information. The more ways a concept connects to existing knowledge, the easier it is to find later.

**Example:** After reading about the testing effect, a learner writes a paragraph explaining why it works using their own experience of studying for exams — connecting new theory to personal episodic memory.

#### Encoding

The cognitive process of transforming perceived information into a mental representation that can be stored in long-term memory, influenced by attention, elaboration, and the depth of processing.

Encoding quality determines retrieval quality. Shallow encoding (reading words without thinking about meaning) produces fragile memories; deep encoding (connecting new ideas to existing knowledge) produces durable ones.

**Example:** A learner who paraphrases each section in their own words before moving on is encoding more deeply than one who highlights the text.

#### Encouragement Admonition

A styled content block that normalizes difficulty, validates the learner's effort, and provides emotional support at points in the text where learners commonly struggle or feel discouraged.

Encouragement admonitions are not generic cheerleading — they name the specific difficulty and reframe it as a sign of productive learning, drawing on desirable difficulty research.

**Example:** Bloom saying: "If this section feels harder than the last one, that's not a sign you're falling behind. It means you're in the zone where real learning happens."

#### Engagement

The degree to which a learner is behaviorally, cognitively, and emotionally involved in a learning activity, encompassing time on task, mental effort, and affective investment.

Engagement is the observable proxy for motivation. An intelligent textbook can track behavioral engagement through analytics (time on page, quiz attempts) and design for cognitive engagement through challenging, meaningful tasks.

**Example:** Tracking whether learners interact with optional MicroSim parameters as a behavioral indicator of cognitive engagement beyond minimum compliance.

#### Episodic Memory

A subsystem of long-term memory that stores personally experienced events along with their spatial, temporal, and emotional context, enabling mental time travel to past experiences.

Episodic memory explains why stories, case studies, and graphic novels are powerful learning tools — they embed concepts in memorable narrative contexts that provide retrieval cues later.

**Example:** Remembering the graphic novel panel where Hermann Ebbinghaus plotted his forgetting curve, and using that vivid image to recall the curve's shape on an exam.

#### Evidence-Based Pedagogy

Teaching practices and instructional strategies whose effectiveness has been validated through rigorous empirical research, including controlled experiments and meta-analyses.

An intelligent textbook should embed evidence-based strategies — retrieval practice, spaced repetition, interleaving — rather than relying on intuition or tradition alone. The evidence base is what distinguishes a research-grounded textbook from a well-meaning one.

**Example:** Including low-stakes quizzes after each section because meta-analyses show retrieval practice produces stronger long-term retention than re-reading.

#### Example-Problem Pair

An instructional sequence in which a worked example is immediately followed by a structurally similar practice problem, allowing the learner to map the demonstrated procedure onto a new instance while the example is still in working memory.

Example-problem pairs leverage the worked example effect while building toward independent problem solving. The practice problem should share the deep structure but vary the surface features.

**Example:** After studying a worked example of a spaced repetition schedule for vocabulary, the learner designs a schedule for learning historical dates — same algorithm, different content.

#### Expert Chunking

The ability of experts to perceive and store large amounts of domain-specific information as integrated, meaningful units rather than individual elements, dramatically expanding effective working memory capacity within their domain.

Expert chunking explains how experts seemingly bypass working memory limits — they are not holding more items, they are holding fewer, larger chunks built from years of organized experience.

**Example:** A master teacher who perceives an entire lesson plan structure as a single integrated chunk, while a novice must hold each component — objectives, activities, assessment — as separate items.

#### Expertise

A high level of proficiency in a domain, characterized by extensive organized knowledge, rapid pattern recognition, automaticity of basic skills, flexible problem solving, and qualitatively different perception compared to novices.

Understanding expertise helps textbook designers sequence instruction appropriately and recognize that the strategies effective for novices (worked examples, high scaffolding) may actually hinder experts.

**Example:** An expert instructional designer who "sees" cognitive load problems in a page layout the way a chess grandmaster sees tactical patterns — instantly and without conscious analysis.

#### Expertise Domain

The area of learning sciences studying how extended, deliberate practice transforms novice performance into expert-level competence characterized by automaticity, pattern recognition, and flexible knowledge use.

Understanding the novice-to-expert trajectory helps textbook designers sequence content appropriately and set realistic expectations for skill development timelines.

**Example:** Structuring a capstone project so that students integrate skills from all seven domains, demonstrating expert-like coordination rather than isolated recall.

#### Explicit Knowledge

Knowledge that can be clearly articulated, documented, and communicated through language, symbols, or other formal representations, making it teachable and shareable.

Explicit knowledge is what textbooks are designed to convey. The challenge is that much expert performance depends on tacit knowledge that must be made explicit — or developed through practice — before it can be taught.

**Example:** The formal definition of cognitive load theory and its three types — information that can be stated precisely and communicated directly through text.

#### Extraneous Cognitive Load

The portion of cognitive load caused by poor instructional design rather than by the inherent complexity of the material, including confusing layouts, irrelevant decorations, and split-attention effects.

Extraneous load is the only type that is purely wasteful. Every unit of working memory consumed by bad design is a unit stolen from understanding. Intelligent textbook design aims to minimize extraneous load relentlessly.

**Example:** A diagram whose labels are placed in a separate legend on the next page, forcing the learner to split attention between two locations — pure extraneous load.

#### Extrinsic Motivation

The drive to engage in an activity to obtain external outcomes such as grades, credentials, praise, or avoidance of negative consequences.

Extrinsic motivation is not inherently harmful — it gets learners to the table. The risk arises when external rewards crowd out intrinsic interest or when the rewards disappear and the behavior stops.

**Example:** A learner completing textbook quizzes primarily to earn a course grade rather than to test their own understanding.

#### FAQ Generator

An AI skill that produces anticipated questions and detailed answers for each chapter or concept, based on common learner confusions, prerequisite gaps, and concept relationships in the learning graph.

The FAQ generator supplements the main text by addressing questions that arise from the learning experience itself — "How is this different from...?" "When would I use...?" "What if...?"

**Example:** Generating 10 FAQs for the cognitive load chapter, including "What's the difference between intrinsic and extraneous cognitive load?" and "Can germane load ever be too high?"

#### FAQ Section

A curated collection of frequently asked questions and answers for a course or chapter, anticipating common points of confusion and addressing them in a conversational format.

FAQs complement the main text by addressing the questions learners actually ask, which are often different from the questions the author anticipated. They reduce learner frustration and support self-directed study.

**Example:** "Q: Is cognitive load the same as mental effort? A: Not exactly — cognitive load is the demand placed on working memory by the task, while mental effort is the learner's voluntary investment of resources."

#### Far Transfer

The application of learned knowledge or skills to a novel situation that differs substantially from the original learning context in surface features, domain, or required approach.

Far transfer is difficult to achieve and rarely occurs spontaneously. It requires learners to extract abstract principles from specific examples and recognize when those principles apply in unfamiliar territory.

**Example:** A learner who studied cognitive load theory in an instructional design course applies the same principles to simplify a complex medical diagnosis interface — different domain, same underlying principle.

#### Feedback Loop

A cyclical process in which the output of a system is fed back as input, either reinforcing the current trajectory (positive/reinforcing loop) or correcting deviations from a target (negative/balancing loop).

Feedback loops are everywhere in learning: assessment results inform instruction, which changes learning outcomes, which change the next assessment results. Making these loops visible helps designers and learners manage them.

**Example:** The retrieval practice loop: quiz reveals gap, learner reviews gap, next quiz tests gap, success strengthens memory, longer interval before next review.

#### Fixed Mindset

The belief that abilities and intelligence are innate, stable traits that cannot be significantly changed through effort or instruction.

When learners hold a fixed mindset, they interpret difficulty as evidence of inability rather than as an opportunity for growth, leading to avoidance and decreased persistence.

**Example:** A student who skips the optional challenge problems because they believe "I'm just not a math person."

#### Flow State

A psychological state of complete absorption in a challenging activity where the difficulty level closely matches the person's skill, resulting in effortless concentration, loss of self-consciousness, and intrinsic enjoyment.

Flow is the motivational sweet spot for learning. Textbook designers can foster it by matching task difficulty to learner skill, providing clear goals, and giving immediate feedback — all achievable through well-designed MicroSims.

**Example:** A learner so absorbed in tuning a spaced repetition MicroSim that they lose track of time, adjusting parameters and observing the retention curve shift.

#### Forgetting Curve

The mathematical function, first described by Hermann Ebbinghaus, showing that memory for newly learned information decays rapidly at first and then levels off, with the steepest decline occurring within the first 24 hours.

The forgetting curve is the empirical foundation for spaced repetition. Without intervention, learners lose the majority of new information within days — a fact that makes retention strategies essential, not optional.

**Example:** A MicroSim that lets learners adjust the initial learning strength and review intervals to see how the forgetting curve flattens with each spaced retrieval.

#### Formative Assessment

Ongoing evaluation conducted during instruction to monitor learning progress, identify misunderstandings, and provide feedback that guides both the learner's next steps and the instructor's adjustments.

Formative assessment is assessment for learning, not of learning. In an intelligent textbook, every embedded quiz, retrieval prompt, and MicroSim interaction is a formative assessment opportunity.

**Example:** A short three-question quiz after each section that gives immediate feedback on which concepts the learner should review before moving on.

#### Generative AI

Artificial intelligence systems that produce new content — text, images, code, or other media — based on patterns learned from large training datasets, typically using deep neural network architectures.

Generative AI is the engine behind intelligent textbook authoring: it drafts chapters, generates quiz items, creates MicroSim code, and produces graphic novel panels, all guided by human expertise and prompt engineering.

**Example:** Using a large language model to generate 20 multiple-choice questions aligned to a chapter's learning objectives, then curating the best 10.

#### Germane Cognitive Load

The portion of cognitive load devoted to effortful cognitive processing that directly contributes to schema construction and learning, such as comparing examples, self-explaining, and integrating new information with prior knowledge.

Germane load is the "good" cognitive load — the mental effort that builds understanding. Effective instruction minimizes extraneous load to free up capacity for germane processing.

**Example:** A learner spending working memory resources to compare two worked examples and identify their common deep structure — effortful but directly productive.

#### GitHub Pages Deployment

The process of publishing a static website — generated by MkDocs Material — to GitHub's free hosting service, making the intelligent textbook accessible via a public URL.

GitHub Pages deployment is the final step that transforms a collection of Markdown files and MicroSims into a live, searchable, navigable website that anyone in the world can access.

**Example:** Running `mkdocs gh-deploy` to build the site and push it to the `gh-pages` branch, making the textbook available at `https://username.github.io/repo-name/`.

#### Glossary

An alphabetized or categorized collection of key terms and their definitions for a course, serving as both a reference resource and a study tool for learners encountering unfamiliar vocabulary.

The glossary is one of the first artifacts generated in the intelligent textbook pipeline because it establishes the precise vocabulary that all subsequent content — chapters, quizzes, MicroSims — must use consistently.

**Example:** This document — a comprehensive glossary of 221 terms organized by domain, with definitions, discussions, and examples.

#### Glossary Generator

An AI skill that produces ISO 11179-compliant term definitions from a concept list and course description, ensuring consistency, precision, and appropriate scope for the target audience.

The glossary generator establishes the terminological foundation for the entire textbook. Downstream skills reference glossary definitions to maintain consistent vocabulary across chapters, quizzes, and MicroSims.

**Example:** Generating 221 glossary entries with definitions, discussions, and examples that are cross-referenced to the learning graph and chapter structure.

#### Goal Orientation

A learner's underlying purpose for engaging in achievement tasks, typically characterized as either mastery-oriented (seeking to develop competence) or performance-oriented (seeking to demonstrate competence relative to others).

Goal orientation shapes how learners interpret difficulty and failure. Mastery-oriented learners treat errors as information; performance-oriented learners may avoid challenging tasks to protect their image.

**Example:** Framing textbook exercises as "practice retrievals" (mastery orientation) rather than "scored assessments" (performance orientation) to encourage risk-taking.

#### Graphic Novel Chapter

A chapter or chapter section presented in sequential art format — panels, speech bubbles, captions, and illustrations — that conveys learning science concepts through narrative and visual storytelling.

Graphic novel chapters leverage dual coding and narrative transportation to make abstract concepts memorable. They provide episodic memory anchors that text alone cannot create.

**Example:** A 12-panel graphic novel showing B.F. Skinner discovering reinforcement schedules, with each panel illustrating a key concept from the Motivation domain.

#### Growth Mindset

The belief that abilities and intelligence can be developed through effort, effective strategies, and learning from mistakes, as opposed to being fixed traits.

Growth mindset is not magic — it works through the behavioral mechanism of persistence. A textbook that normalizes struggle and credits effort with improvement helps cultivate this belief.

**Example:** Bloom saying "This part tends to feel hard the first time — that's the desirable difficulty working" to reframe struggle as a sign of learning.

#### Hint Admonition

A styled content block that provides a subtle clue or nudge to help learners approach a problem without revealing the complete answer, supporting productive struggle.

Hint admonitions preserve the learner's opportunity to generate the answer — and capture the testing effect benefit — while preventing the frustration that causes learners to give up entirely.

**Example:** "Hint: Think about what happens to working memory when you add a fifth variable to a MicroSim. What does Miller's Law predict?"

#### Historical Accuracy Check

The verification process ensuring that graphic novel depictions of historical figures, events, and scientific discoveries are factually correct and do not misrepresent the historical record.

Historical accuracy is a credibility requirement. A graphic novel that gets the science right but the history wrong undermines reader trust and teaches inaccurate episodic memories that are hard to correct later.

**Example:** Verifying that Ebbinghaus actually used nonsense syllables (not words) and that his experiments occurred in the 1880s (not the 1900s) before finalizing the graphic novel panels.

#### Historical Figure Selection

The process of choosing real historical scientists, psychologists, or educators to feature in graphic novel chapters, based on their relevance to the chapter's learning objectives and their potential for engaging storytelling.

Historical figure selection balances pedagogical relevance, narrative potential, and cultural diversity. The figure's life story should naturally illustrate the concept being taught, not require forced connections.

**Example:** Selecting Hermann Ebbinghaus for the Retention chapter because his self-experimentation with the forgetting curve is both scientifically foundational and narratively compelling.

#### Iconic Memory

The sensory memory subsystem that briefly stores visual information for approximately 250-500 milliseconds after the stimulus disappears, providing a raw buffer for visual processing.

Iconic memory explains why a briefly flashed diagram can still be "seen" for an instant after it disappears — and why static images need sufficient viewing time to be processed meaningfully.

#### Iframe Embedding

The technique of displaying a MicroSim or external interactive content within an HTML `<iframe>` element on a textbook page, isolating the simulation's code and styles from the surrounding page.

Iframe embedding allows MicroSims built with p5.js to coexist with MkDocs Material's styling without conflicts, and enables the same simulation to be reused across multiple pages.

**Example:** Embedding a spaced repetition MicroSim in both the Retention chapter and the Measurement chapter using the same iframe source, ensuring consistent behavior.

#### Image Generation

The process of using AI systems to create illustrations, graphic novel panels, diagrams, and other visual assets from text prompts, producing images that support the textbook's pedagogical and visual design goals.

Image generation enables a single author to produce a richly illustrated textbook without a dedicated art team, dramatically reducing the cost and time barriers to visual pedagogy.

**Example:** Generating seven Bloom the Elephant pose variations (neutral, welcome, thinking, tip, warning, encouraging, celebration) from documented image prompts for consistent use across all chapters.

#### Image Generation Costs

The financial and computational expenses associated with using AI image generation services to produce illustrations, graphic novel panels, and visual assets for the textbook.

Understanding image generation costs is essential for project planning. Each graphic novel chapter requires multiple panel images, and costs scale with quality settings, revision rounds, and the number of visual assets needed.

**Example:** Budgeting for 12 panel images per graphic novel chapter at approximately $0.04-$0.08 per image, plus additional iterations for consistency corrections and historical accuracy fixes.

#### Image Prompt Engineering

The practice of writing detailed text descriptions that guide an AI image generator to produce illustrations matching specific character designs, compositions, styles, and pedagogical requirements.

Image prompt engineering is the visual equivalent of text prompt engineering. Consistency across panels requires precise specifications for character appearance, art style, perspective, and lighting.

**Example:** A prompt specifying "Bloom the Elephant, small round cartoon, soft blue-gray skin, cream ear highlights, small round wire-rimmed glasses in warm blue, modern flat vector style, transparent background, thinking pose with one trunk raised."

#### Immediate Feedback

Information about the correctness or quality of a learner's response provided within seconds of the response, enabling rapid error correction and reinforcement of correct understanding.

Immediate feedback is most effective for factual and procedural knowledge where there is a clear right answer. It prevents learners from practicing errors and builds confidence through timely confirmation.

**Example:** A textbook quiz that highlights the correct answer and a brief explanation immediately after the learner submits their response.

#### Instructional Design

The systematic process of analyzing learning needs, defining objectives, selecting strategies, developing materials, and evaluating outcomes to create effective educational experiences.

Every intelligent textbook is an instructional design artifact. The quality of the design process directly determines whether the book helps readers build lasting understanding or merely presents information.

**Example:** Using the ADDIE framework to plan a chapter sequence that scaffolds from foundational vocabulary through worked examples to independent problem solving.

#### Intelligent Textbook

A digitally authored educational resource that integrates adaptive features, interactive simulations, AI-generated content, and embedded assessments to personalize and enhance the learning experience.

This course treats the intelligent textbook as both the product and the curriculum — learners build one while studying how the underlying learning sciences make it effective.

**Example:** A textbook that adjusts quiz difficulty based on prior performance and surfaces spaced review prompts at optimal intervals using a learning graph.

#### Intelligent Textbook Design

The systematic process of planning, structuring, and authoring an AI-augmented educational resource that integrates learning science principles, interactive elements, and adaptive features into a coherent learning experience.

Intelligent textbook design extends traditional instructional design with decisions about learning graph structure, AI skill orchestration, MicroSim placement, and assessment integration.

**Example:** Planning a 14-chapter textbook by first generating a learning graph of concept dependencies, then using that graph to sequence chapters and identify where MicroSims add the most value.

#### Interactive Infographic

A visual learning tool that combines a scientific illustration with clickable or hoverable information markers, supporting explore and quiz modes to turn a passive image into an active retrieval opportunity.

Interactive infographics are used for concepts with spatial structure — brain regions, classroom layouts, memory system diagrams — where pointing at labeled parts helps learners build accurate mental models.

**Example:** An infographic of the working memory model where learners click on the central executive, phonological loop, and visuospatial sketchpad to reveal descriptions and then test themselves in quiz mode.

#### Interest Development

The process by which a learner's engagement with a topic progresses from initial situational interest triggered by external features to enduring individual interest sustained by personal value and deep knowledge.

Situational interest is fragile but designable. The textbook's job is to use hooks, stories, and interactive elements to spark situational interest, then deepen it through meaningful activities that build personal connection to the content.

**Example:** A graphic novel about a historical figure sparks situational interest in memory research, which deepens into individual interest as the learner successfully applies spaced repetition in their own study.

#### Interleaving

A practice strategy in which different topics, skills, or problem types are mixed within a single study session rather than being practiced in separate, blocked sequences.

Interleaving forces learners to discriminate between problem types and select the appropriate strategy — a skill that blocked practice never develops because the learner always knows which approach to use.

**Example:** A quiz that mixes questions about cognitive load, retrieval practice, and motivation rather than grouping all cognitive load questions together.

#### Intrinsic Cognitive Load

The portion of cognitive load inherent to the complexity of the material itself, determined by the number of interacting elements the learner must process simultaneously and their prior knowledge.

Intrinsic load cannot be eliminated — some topics are genuinely complex. But it can be managed by sequencing instruction so that some elements are learned to automaticity before others are introduced.

**Example:** Teaching learners what a node and an edge are before introducing the concept of a directed acyclic graph, reducing the number of simultaneously novel elements.

#### Intrinsic Motivation

The drive to engage in an activity for its inherent satisfaction, interest, or personal meaning rather than for external rewards or pressures.

Intrinsic motivation is the gold standard for sustained learning. When learners find a topic genuinely interesting, they persist through difficulty, seek deeper understanding, and retain more — all without external incentives.

**Example:** A student who explores a MicroSim beyond the assigned parameters because they are genuinely curious about how the variables interact.

#### Item Response Theory

A family of mathematical models that describe the relationship between a test item's properties (difficulty, discrimination) and a learner's latent ability, enabling precise measurement and adaptive testing.

IRT moves assessment beyond simple percentage scores by modeling the probability that a specific learner will answer a specific item correctly, enabling more informative and efficient measurement.

**Example:** An adaptive quiz that selects the next question based on the learner's estimated ability from previous responses, providing maximum measurement information with minimum questions.

#### Iterative Improvement

A cyclic development process in which a work product is created, evaluated against quality criteria, revised based on feedback and data, and re-evaluated, with each cycle producing a closer approximation of the desired quality.

Iterative improvement is how intelligent textbooks reach quality — no first draft, human or AI-generated, is publication-ready. The improvement cycle uses quality metrics, peer feedback, and learner analytics to guide each revision.

**Example:** A chapter that goes through three revision cycles: first draft from AI, second draft after human review for accuracy and voice, third draft after peer feedback on clarity and engagement.

#### Knowledge Transfer

The process by which knowledge or skills learned in one context are applied to a different context, task, or domain, ranging from near transfer between similar situations to far transfer between dissimilar ones.

Transfer is the ultimate goal of education — if knowledge stays locked in the original learning context, instruction has failed. Intelligent textbooks must design for transfer explicitly through varied examples, analogies, and authentic practice.

**Example:** A learner who studies cognitive load theory in a textbook chapter and then applies those principles when designing a slide presentation for work.

#### Large Language Model

A neural network trained on massive text corpora that predicts and generates human-like text, capable of summarization, translation, question answering, code generation, and conversational interaction.

Large language models power the AI skills used throughout this course — from analyzing course descriptions to generating glossary entries — and understanding their strengths and limitations is essential for responsible textbook authoring.

**Example:** Claude generating a first draft of a chapter section that the author then revises for accuracy, voice, and pedagogical alignment.

#### Leaflet Map Library

A JavaScript library for creating interactive, mobile-friendly maps with tile layers, markers, popups, and geographic data overlays.

Leaflet is available for MicroSims that involve geographic or spatial data — mapping the locations of learning science research institutions, or visualizing the global spread of educational innovations.

#### Learning Analytics

The collection, measurement, analysis, and reporting of data about learners and their contexts, with the purpose of understanding and optimizing learning processes and environments.

Learning analytics close the feedback loop between learner behavior and instructional design. An intelligent textbook can track which sections produce the most quiz errors and flag them for revision.

**Example:** Dashboard data showing that 68% of learners miss quiz questions about "germane cognitive load," suggesting the explanation needs revision or additional examples.

#### Learning Conditions Domain

The area of learning sciences examining the environmental, social, cultural, and technological factors that enable or constrain learning, including classroom design, accessibility, and community dynamics.

Even well-designed content fails in a hostile or inaccessible environment. This domain covers scaffolding, psychological safety, universal design, and the social structures that surround every learning experience.

**Example:** Applying universal design for learning principles to ensure that MicroSims are usable by learners with visual impairments through alternative text descriptions and keyboard navigation.

#### Learning Dashboard

A visual interface that displays aggregated learning analytics — progress, performance, time on task, and mastery indicators — to learners, instructors, or both, supporting data-informed decision making.

Dashboards make the invisible visible. When learners can see their own forgetting curves, quiz trends, and mastery levels, they are better equipped to self-regulate and make strategic study decisions.

**Example:** A dashboard showing green, yellow, and red indicators for each chapter's mastery level, with a recommended review schedule for yellow and red topics.

#### Learning Environment

The physical, virtual, social, and psychological context in which learning takes place, encompassing tools, spaces, relationships, norms, and cultural factors that influence learning outcomes.

The learning environment is not a backdrop — it is an active variable. The same content in a psychologically safe environment produces different outcomes than in an anxious or competitive one.

**Example:** An online textbook that includes a discussion forum with community guidelines, creating a social learning environment around otherwise solitary reading.

#### Learning Graph

A directed acyclic graph representing the prerequisite relationships among concepts in a course, where nodes represent concepts and edges represent dependency relationships.

The learning graph is the structural backbone of the intelligent textbook, determining chapter sequence, prerequisite warnings, and the order in which concepts are introduced to respect cognitive load constraints.

**Example:** A learning graph showing that "working memory" depends on "sensory memory" and "attention," which must both be covered before introducing cognitive load theory.

#### Learning Graph Generator

An AI skill that creates a directed acyclic graph of concept dependencies from a course description and learning objectives, establishing the prerequisite structure that guides chapter sequencing.

The learning graph generator translates the course's conceptual structure into a machine-readable format that can be visualized, validated, and used to drive content generation for every downstream skill.

**Example:** Generating a JSON graph with 221 concept nodes and 350 dependency edges from a course description, then visualizing it with vis-network to validate the structure.

#### Learning Objective

A specific, measurable statement describing what a learner should be able to do after completing an instructional unit, typically expressed with an action verb and a content target.

Well-written learning objectives drive every downstream decision — content selection, activity design, assessment items, and even MicroSim parameters. Without them, a chapter has no rudder.

**Example:** "Given a dataset of quiz scores, the learner will calculate and interpret a forgetting curve using spaced repetition intervals."

#### Learning Sciences

An interdisciplinary field that studies how people learn by integrating research from cognitive science, psychology, education, computer science, and neuroscience to improve teaching and learning outcomes.

Understanding the research base of learning sciences is essential for designing textbooks that go beyond content delivery to actively support how the brain acquires, stores, and applies knowledge.

**Example:** A textbook designer draws on spacing effect research to schedule review exercises across chapters rather than massing them at the end.

#### Leitner System

A flashcard-based spaced repetition method that sorts cards into graduated boxes based on recall success, with correctly recalled cards moving to less frequent review boxes and missed cards returning to the most frequent box.

The Leitner system is an elegant mechanical implementation of spaced repetition principles, and its box metaphor makes the abstract concept of expanding review intervals concrete and manageable for learners.

**Example:** A new concept starts in Box 1 (reviewed daily); after three correct recalls it moves to Box 2 (reviewed every three days), then Box 3 (weekly), and so on.

#### LinkedIn Announcement Generator

An AI skill that creates professional social media announcements for textbook milestones, chapter releases, or course launches, tailored for the LinkedIn audience of educators and technologists.

The LinkedIn announcement generator supports the textbook's public engagement strategy by producing consistent, professional announcements that build awareness and community.

#### Long-Term Memory

A memory system with virtually unlimited capacity and duration that stores knowledge, skills, and experiences through organized networks of schemas, available for later retrieval and use.

Long-term memory is the destination for all meaningful learning. The entire instructional design challenge can be framed as: how do we move knowledge from sensory input through working memory into organized, retrievable long-term storage?

**Example:** A student who can explain cognitive load theory six months after the course without re-reading the chapter has successfully stored and organized that knowledge in long-term memory.

#### Markdown Authoring

The practice of writing content using Markdown syntax — a lightweight markup language with plain-text formatting — to produce structured documents that render as HTML.

Markdown is the lingua franca of the intelligent textbook pipeline: authors, AI skills, and the build system all read and write Markdown, making the content portable, version-controlled, and human-readable.

**Example:** Using `#### Term Name` headers and `**bold**` for key terms to produce consistent glossary formatting across hundreds of entries.

#### Mascot Admonition

A styled content block in MkDocs Material that pairs a mascot image with a short message, typed by emotional function — welcome, thinking, tip, warning, encouragement, or celebration — and placed according to documented frequency rules.

Mascot admonitions are the technical implementation of the pedagogical mascot's presence. Each type has a specific function, and overuse or misuse dilutes their signal value.

**Example:** A `mascot-thinking` admonition where Bloom prompts the reader to pause and self-explain: "Can you state the three types of cognitive load without looking back? That's retrieval practice in action."

#### Mascot Persona

The defined personality, voice, values, and behavioral characteristics of a pedagogical mascot, documented to ensure consistent portrayal across all chapters and contributors.

The mascot persona is a design specification, not a creative whim. Consistency is what builds the reader's trust — if Bloom is warm and encouraging in one chapter but sarcastic in another, the trust signal breaks.

**Example:** Bloom's persona: wise but never condescending, uses "we" and "let's" framing, normalizes struggle, grounds advice in research, catchphrase is "Let's build a mental model."

#### Mascot Visual Identity

The consistent visual design elements of a pedagogical mascot — species, coloring, accessories, art style, and pose variations — documented to ensure recognizable appearance across all illustrations.

Visual identity ensures the mascot is instantly recognizable regardless of which chapter, page, or pose is being displayed. Even small inconsistencies (different glasses, wrong shade of blue) erode the character's coherence.

**Example:** Bloom: small round cartoon elephant, soft blue-gray skin, cream ear highlights, small round wire-rimmed glasses in warm blue, no clothing or accessories, modern flat vector style.

#### Mascot Voice Guide

A documented specification of how the pedagogical mascot speaks — sentence length, vocabulary level, tone markers, signature phrases, and explicit anti-patterns — ensuring consistent dialogue across all authors.

The voice guide is the editorial guardrail for mascot dialogue. Without it, different chapter authors produce different-sounding mascots, and the character's coherence — and the trust it builds — disintegrates.

**Example:** Bloom speaks in 1-3 sentences, plain words, no jargon unless introduced on the same page, never says "obviously," uses at most one exclamation point per chapter.

#### Massed Practice

A study pattern in which all practice or review of a topic is concentrated into a single, continuous session with no intervening time gaps.

Massed practice feels effective because the material is fresh in working memory during the session, creating an illusion of mastery that collapses within days. It is the default study strategy and one of the least effective.

**Example:** Re-reading all 14 chapters the night before the final exam — a classic massed practice pattern that produces poor long-term retention despite feeling productive.

#### Mastery Demonstration

The process by which a learner provides evidence — through performance, portfolio artifacts, or assessment — that they have achieved the defined level of proficiency for a learning objective or course outcome.

Mastery demonstration shifts the assessment question from "How much time did you spend?" to "Can you do it?" It respects the learner's autonomy by focusing on outcomes rather than process compliance.

**Example:** A learner demonstrating mastery of MicroSim design by producing a working simulation that meets all rubric criteria, regardless of how many attempts it took.

#### Mastery Learning

An instructional approach in which learners must demonstrate proficiency at a defined level on each unit before progressing to the next, with additional time and support provided until mastery is achieved.

Mastery learning rejects the assumption that some learners "just can't get it." It assumes that given sufficient time and appropriate instruction, virtually all learners can achieve proficiency — a powerful equity principle.

**Example:** A textbook module that requires learners to score 80% on the retrieval practice quiz before unlocking the next chapter, with targeted review materials for missed concepts.

#### Measurement Domain

The area of learning sciences focused on assessing learning outcomes through formative feedback, summative evaluation, analytics, and psychometric methods to inform instructional decisions.

You cannot improve what you do not measure. This domain covers how to design assessments that reveal genuine understanding, how to interpret learning analytics, and how to close the feedback loop between measurement and instruction.

**Example:** Using item response theory to calibrate quiz difficulty so that each question provides maximum information about a learner's mastery level.

#### Mental Model

An internal, simplified representation of how a system, process, or concept works, used to reason about, predict, and explain phenomena in the world.

Mental models are what learners actually use — not the textbook's formal definitions, but their own internal simulations. Building accurate mental models is the core aim of the Understanding domain.

**Example:** A learner's mental model of working memory as a "desk with limited space" that helps them predict when adding more information will cause some to fall off.

#### Mermaid Diagram

A text-based diagramming tool that renders flowcharts, sequence diagrams, class diagrams, and other visualizations from Markdown-like syntax, integrated natively with MkDocs Material.

Mermaid diagrams are the fastest way to create causal loop diagrams, process flows, and concept maps in the textbook because they are written as text alongside the chapter prose and version-controlled in Git.

**Example:** A Mermaid flowchart showing the feedback loop between retrieval practice, memory strength, and confidence, embedded directly in the chapter Markdown.

#### Metacognition

The awareness and regulation of one's own thinking processes, including the ability to monitor comprehension, evaluate learning strategies, and adjust approaches when current methods are not working.

Metacognition is the skill that makes all other learning skills effective. A learner with strong metacognition recognizes when they do not understand, chooses an appropriate strategy, and monitors whether it works.

**Example:** A learner who pauses mid-chapter and thinks "I can't explain the last two paragraphs — I should try retrieval practice before moving on" is exercising metacognition.

#### MicroSim

A small, browser-based interactive simulation designed to illustrate a single concept or principle, featuring learner-adjustable parameters and immediate visual feedback within a focused pedagogical frame.

MicroSims are the signature interactive element of the intelligent textbook. They transform passive reading into active exploration by letting learners manipulate variables and observe consequences in real time.

**Example:** A p5.js simulation showing how chunking affects working memory capacity — the learner adjusts the chunk size and watches how many items can be held simultaneously.

#### MicroSim Control Complexity

The measure of how many independent parameters a MicroSim exposes to the learner, governed by working memory limits and the principle that each additional control must add meaningful pedagogical value.

Controlling complexity is itself a cognitive load management decision. Every slider, button, or dropdown added to a MicroSim consumes a slot of the learner's working memory for tracking that variable's effect.

**Example:** A MicroSim with two sliders (spacing interval and number of reviews) is more effective for teaching the forgetting curve than one with six sliders that also controls font size, color, and animation speed.

#### MicroSim Design Principles

The pedagogical and technical guidelines governing how MicroSims are created, including single-concept focus, minimal controls, clear variable labeling, immediate feedback, and alignment with learning objectives.

Design principles ensure that MicroSims enhance understanding rather than adding extraneous cognitive load. A MicroSim that is too complex or misaligned with the learning objective does more harm than good.

**Example:** The principle that MicroSims should have no more than four adjustable parameters, respecting working memory limits while providing meaningful exploration space.

#### MicroSim Generator

An AI skill that produces interactive browser-based simulations using p5.js or other libraries, designed to illustrate specific concepts with learner-adjustable parameters and clear pedagogical framing.

The MicroSim generator translates abstract concepts into tangible, explorable experiences — the interactive element that distinguishes an intelligent textbook from a static PDF.

**Example:** Generating a p5.js simulation of the forgetting curve where learners adjust initial learning strength and review intervals to observe retention changes in real time.

#### Miller's Law

The cognitive principle, proposed by George Miller in 1956, that working memory can hold approximately seven plus or minus two items, later refined by research suggesting the effective limit is closer to four chunks.

Miller's Law is the quantitative anchor for cognitive load management. It tells textbook designers exactly why a list of 12 unrelated terms will overwhelm learners — and why chunking those terms into three meaningful groups will not.

**Example:** Grouping the seven domains into "Input" (Motivation, Conditions), "Process" (Understanding, Retention), and "Output" (Application, Expertise, Measurement) to reduce cognitive load.

#### Misconception

A persistent, incorrect understanding of a concept that a learner holds with confidence, often resistant to change because it is embedded in a coherent (but wrong) mental model.

Misconceptions are not random errors — they are systematic and often logical within the learner's existing framework. Addressing them requires more than correction; it requires showing why the old model fails and how the new one succeeds.

**Example:** The belief that "we only use 10% of our brains" — a confident, widespread misconception that resists correction because it feels intuitively appealing.

#### MkDocs Build Process

The automated sequence of parsing Markdown files, applying themes and plugins, generating HTML, building the search index, and producing the final static site output executed by the MkDocs tool.

Understanding the build process helps authors diagnose problems — broken links, missing images, failed MicroSim embeds — and ensures that what they see locally matches what gets deployed.

**Example:** Running `mkdocs build --strict` to generate the static site and catch any warnings about broken links or missing references before deploying.

#### MkDocs Material

A documentation site generator built on MkDocs and the Material Design theme that renders Markdown files into a searchable, responsive, and navigable static website.

MkDocs Material is the publishing platform for the intelligent textbook, providing site navigation, search indexing, admonition styling, and GitHub Pages deployment out of the box.

**Example:** Adding a new chapter by creating a Markdown file in the `docs/chapters/` directory and registering it in `mkdocs.yml` under `nav`.

#### Motivation Domain

The area of learning sciences concerned with the internal and external forces that initiate, direct, sustain, and energize learning behavior.

Without motivation, even the best-designed instruction fails. This domain covers why learners engage, what sustains their effort, and how textbook design can support autonomous motivation rather than undermine it.

**Example:** Embedding choice into MicroSim parameters so learners feel autonomy over their exploration path.

#### Multimedia Learning Theory

Richard Mayer's evidence-based theory that people learn more deeply from words and pictures together than from words alone, governed by principles such as coherence, signaling, redundancy, spatial contiguity, and temporal contiguity.

Multimedia learning theory provides specific, testable design rules for intelligent textbooks — place labels near their referents, remove decorative images that do not support the objective, synchronize narration with animation.

**Example:** Placing the label "working memory" directly on the diagram box rather than in a separate legend, following the spatial contiguity principle.

#### Narrative Transportation

The psychological phenomenon in which a reader becomes absorbed in a story, experiencing reduced critical evaluation and increased emotional engagement, resulting in stronger attitude and belief changes aligned with the narrative.

Narrative transportation is the mechanism that makes stories pedagogically powerful — and potentially dangerous. When learners are transported, they encode the story's claims more readily, which is why accuracy matters.

**Example:** A reader who becomes absorbed in a graphic novel about a struggling student applying retrieval practice is more likely to adopt the strategy themselves than a reader who only reads the research summary.

#### Narrative Voice Consistency

The maintenance of a uniform tone, vocabulary, person, and style across all chapters, mascot dialogue, exercises, and admonitions, ensuring the textbook reads as a coherent work rather than a collection of independent sections.

Voice consistency is what makes a textbook feel authored rather than assembled. It requires a documented style guide, editorial review, and AI skill prompts that enforce the voice constraints.

**Example:** Every chapter using "we" for shared thinking, "you" for reader actions, present tense by default, contractions welcome, and no instances of "obviously" or "simply."

#### Near Transfer

The application of learned knowledge or skills to a new situation that closely resembles the original learning context in surface features, structure, or required procedures.

Near transfer is the easier, more reliable form of transfer. Textbook exercises that vary surface features while keeping the deep structure constant train learners to see past superficial differences.

**Example:** After learning to calculate a forgetting curve for vocabulary words, a learner calculates a forgetting curve for historical dates — same procedure, different content.

#### Neuroscience in Learning

The application of brain science findings — including neural plasticity, memory consolidation, and reward circuitry — to inform and improve educational practice.

While neuroscience does not prescribe lesson plans directly, it grounds learning strategies in biological mechanisms, helping designers understand why sleep, emotion, and physical movement matter for retention.

**Example:** Scheduling spaced review sessions to align with research on sleep-dependent memory consolidation between study periods.

#### Novel Problem Solving

The process of applying knowledge and reasoning to address problems that the learner has not previously encountered and for which no practiced procedure directly applies.

Novel problem solving is the highest-value application of learning because real-world problems rarely arrive pre-categorized. Textbooks that only practice routine problems leave learners helpless when the template does not fit.

**Example:** Designing a MicroSim for a concept that has no existing simulation template, requiring the learner to combine coding skills, domain knowledge, and design principles in a new way.

#### Novice Expert Difference

The systematic qualitative differences between how beginners and experts perceive, organize, reason about, and solve problems within a domain, affecting instructional design decisions.

The novice-expert difference is why "one size fits all" instruction fails. Novices need worked examples and scaffolding; experts need to be challenged with novel problems. The same material that helps one hinders the other.

**Example:** Novices categorize physics problems by surface features ("this is a pulley problem") while experts categorize by deep structure ("this is a conservation of energy problem").

#### Online Learning Environment

A digital platform or collection of tools that enables learning activities to occur remotely, including content delivery, interaction, assessment, and collaboration through web-based interfaces.

The intelligent textbook is itself an online learning environment. Its design must account for the unique challenges of digital learning — screen fatigue, isolation, self-regulation demands, and the absence of in-person social cues.

**Example:** An MkDocs Material site with embedded MicroSims, quizzes, discussion links, and a learning dashboard, constituting a complete online learning environment.

#### p5.js Library

A JavaScript library for creative coding that simplifies drawing, animation, and user interaction in the browser, used as the primary framework for building MicroSims in this textbook.

p5.js was chosen for its low barrier to entry, rich visual capabilities, and compatibility with the MkDocs Material deployment pipeline. Its setup/draw loop maps naturally to simulation design patterns.

**Example:** Using `createSlider()` and `createButton()` to add interactive controls to a forgetting curve simulation without writing raw HTML form elements.

#### Panel Composition

The arrangement of visual elements — characters, backgrounds, speech bubbles, and captions — within a single graphic novel panel, designed to guide the reader's eye and convey narrative information clearly.

Panel composition is visual cognitive load management. A cluttered panel with competing visual elements overloads the reader the same way a cluttered textbook page does.

**Example:** Placing the speaking character on the left, the speech bubble flowing right, and the key concept diagram in the background, creating a natural left-to-right reading path.

#### Pattern Recognition

The cognitive ability to quickly identify meaningful configurations, regularities, or structures in information based on extensive prior experience, enabling rapid categorization and response.

Pattern recognition is a hallmark of expertise and explains why experts can make good decisions quickly — they have seen similar patterns thousands of times and can match the current situation to stored templates.

**Example:** An experienced teacher who instantly recognizes the "glazed eyes" pattern as cognitive overload and switches to a simpler explanation, while a novice teacher continues lecturing.

#### Pedagogical Mascot

A recurring character used throughout educational materials to provide a consistent, approachable voice that guides learners, signals emotional tone, and creates a sense of companionship during the learning experience.

A pedagogical mascot is not a decoration — it is a deliberate instructional design element that provides emotional scaffolding, reduces perceived social distance, and signals when to pay attention, pause, or celebrate.

**Example:** Bloom the Elephant, who appears at chapter openings, key concepts, warnings, and celebrations, always with a consistent personality: wise, curious, warm, and playful.

#### Peer Review Process

A structured evaluation in which learners assess each other's work against defined criteria, providing constructive feedback that benefits both the reviewer (through critical analysis) and the author (through external perspective).

Peer review serves double pedagogical duty: the reviewer practices evaluation skills (Bloom's Taxonomy level 5), and the author receives diverse feedback that a single instructor cannot provide at scale.

**Example:** Each learner reviewing two peers' MicroSims using a rubric that evaluates pedagogical alignment, cognitive load management, code quality, and accessibility.

#### Phonological Loop

A component of working memory that maintains and rehearses verbal and acoustic information through subvocal repetition, supporting language comprehension and verbal reasoning.

The phonological loop explains why learners silently "say" new terms to themselves and why pronounceable terminology is easier to hold in working memory than unpronounceable jargon.

**Example:** A learner subvocally rehearsing "retrieval practice, spaced repetition, interleaving" while reading a comparison table of retention strategies.

#### Plotly Library

A JavaScript graphing library that produces interactive, publication-quality charts with features like zoom, pan, hover tooltips, and data export, suitable for complex data visualization.

Plotly is used when MicroSims need advanced charting features — 3D surfaces, contour plots, or statistical distributions — that exceed Chart.js capabilities.

**Example:** A 3D surface plot showing how retention varies as a function of both spacing interval and number of retrievals, with interactive rotation and zoom.

#### Portfolio Artifact

A tangible work product — a chapter, MicroSim, graphic novel, or complete textbook — produced during the course that demonstrates the learner's competence and can be shared with employers or academic programs.

Portfolio artifacts give learners something beyond a grade: evidence of capability that they can show to others. The intelligent textbook format produces particularly compelling portfolio pieces because they are interactive and publicly accessible.

**Example:** A deployed intelligent textbook chapter on cognitive load theory, complete with MicroSims and a graphic novel section, linked from the learner's professional portfolio.

#### Print-Friendly Output

A formatted version of the textbook optimized for physical printing or PDF generation, with appropriate page breaks, consistent typography, and accessible layout.

Print-friendly output ensures the textbook remains usable for learners who prefer physical reading or who lack reliable internet access, extending the reach of the intelligent textbook.

#### Problem-Based Learning

An instructional approach in which learners encounter an authentic, ill-structured problem before receiving direct instruction, using the problem to drive inquiry, knowledge seeking, and collaborative reasoning.

PBL mirrors how knowledge is used in the real world — messy, underdefined, and requiring integration across domains. It builds transfer readiness but demands significant scaffolding for novices.

**Example:** Presenting learners with a poorly designed online course and asking them to diagnose why students are dropping out, before teaching the relevant learning sciences.

#### Procedural Memory

A subsystem of long-term memory that stores knowledge of how to perform skills and procedures, typically acquired through practice and expressed through action rather than conscious verbal recall.

Procedural memory is the target for skill-based learning objectives. It develops through repeated practice, not through reading about how to do something — which is why intelligent textbooks must include hands-on activities.

**Example:** A learner who can write a p5.js MicroSim from scratch without consulting documentation has encoded the coding patterns in procedural memory.

#### Prompt Engineering

The practice of designing, structuring, and iteratively refining the text instructions given to a large language model to elicit accurate, useful, and well-formatted outputs for specific tasks.

Prompt engineering is a core skill for intelligent textbook authoring because every AI-generated artifact — chapters, quizzes, glossaries, MicroSims — is only as good as the prompt that produced it.

**Example:** Including the target audience, format constraints, and quality criteria in a glossary generation prompt to ensure definitions are ISO 11179-compliant rather than generic.

#### Psychological Safety

A shared belief within a learning community that it is safe to take interpersonal risks — asking questions, admitting confusion, making errors, and offering ideas — without fear of punishment, ridicule, or status loss.

Psychological safety is the invisible foundation of productive learning. When learners feel unsafe, they avoid the retrieval failures and productive struggle that drive deep learning, opting instead for performance-protecting silence.

**Example:** A discussion forum where the instructor models vulnerability by sharing their own misconceptions, normalizing error as part of the learning process.

#### Publishing Workflow

The end-to-end sequence of steps — authoring, reviewing, building, testing, and deploying — that transforms raw content into a published intelligent textbook, including version control, quality checks, and deployment automation.

The publishing workflow ensures that changes move from author to reader through a controlled, repeatable process. Breaking the workflow — deploying without review, skipping the build check — introduces errors that reach learners.

**Example:** Author commits chapter to Git, CI runs `mkdocs build --strict`, peer reviews the rendered output, and after approval, `mkdocs gh-deploy` publishes the update.

#### Quality Metrics

Quantitative measures used to evaluate the effectiveness, efficiency, and user experience of instructional materials, including completion rates, assessment scores, time on task, and learner satisfaction.

Quality metrics provide the evidence base for iterative textbook improvement. Without them, revision decisions rely on intuition; with them, revision targets the sections that actually underperform.

**Example:** Tracking that Chapter 7 has a 40% completion rate compared to 85% for other chapters, signaling a design problem that needs investigation.

#### Quiz Bank

A structured collection of assessment items — multiple choice, short answer, scenario-based, and retrieval prompts — organized by concept, difficulty level, and cognitive objective, used for formative and summative evaluation.

A well-designed quiz bank is the assessment backbone of the intelligent textbook, enabling randomized quizzes, adaptive testing, and spaced retrieval scheduling from a curated pool of validated items.

**Example:** A bank of 200 items for a 14-chapter textbook, tagged by concept, Bloom's Taxonomy level, and difficulty, enabling the system to generate unique quiz instances for each learner.

#### Quiz Generator

An AI skill that creates assessment items — multiple choice, short answer, and scenario-based — aligned to specific learning objectives, tagged by concept and Bloom's Taxonomy level.

The quiz generator populates the quiz bank that powers the textbook's formative assessment and spaced retrieval systems, ensuring every concept is assessable at multiple cognitive levels.

**Example:** Generating five multiple-choice items and two scenario-based items for "retrieval practice," each tagged with the Bloom's level and linked to the source chapter section.

#### Recall vs Recognition

The distinction between generating information from memory without prompts (recall) and identifying previously encountered information when presented with options (recognition), with recall being more effortful and producing stronger learning.

This distinction explains why multiple-choice tests feel easier than free-response tests and why they produce less learning benefit. Intelligent textbooks should include both formats, with recall-based questions for maximum retention.

**Example:** "What are the three components of self-determination theory?" (recall) versus "Which of the following is NOT a component of self-determination theory?" (recognition).

#### Reference Generator

An AI skill that compiles and formats scholarly citations relevant to each chapter's content, linking claims to their evidence base and providing further reading resources.

The reference generator ensures the textbook's evidence-based claims are traceable to primary sources, supporting both academic credibility and reader curiosity.

#### Reference List

A compiled bibliography of scholarly sources, books, articles, and other resources cited or consulted in the creation of a chapter or the entire textbook.

The reference list grounds the textbook in the research base, enabling readers to verify claims, explore further, and assess the evidence quality behind instructional recommendations.

**Example:** A chapter reference list including Roediger and Butler (2011) on the testing effect and Sweller (2011) on cognitive load theory.

#### Relatedness Need

The psychological need to feel connected to, cared for by, and significant to other people, experiencing belonging and social integration.

Even in self-paced textbook learning, relatedness matters. Discussion prompts, peer review processes, and a warm mascot voice all signal that the learner is part of a community, not alone with a screen.

**Example:** Bloom the Elephant using "we" and "let's" language to create a sense of shared investigation between the textbook and the reader.

#### Retention Domain

The area of learning sciences addressing how learned information is maintained in long-term memory over time through strategies such as retrieval practice, spaced repetition, and interleaving.

Content that is understood but not retained has no lasting value. This domain focuses on the research-backed strategies that move knowledge from fragile short-term traces to durable long-term storage.

**Example:** A textbook that automatically schedules review quizzes at expanding intervals — 1 day, 3 days, 7 days, 21 days — after initial learning.

#### Retrieval Cue

Any stimulus — a word, image, context, emotion, or sensory experience — that triggers the recall of associated information stored in long-term memory.

Retrieval cues are why context matters for memory. Intelligent textbooks can embed multiple cues for the same concept — a diagram, a story, a mascot reference — so learners have multiple paths to recall it later.

**Example:** Seeing Bloom the Elephant in a "thinking" pose and immediately recalling the concept of metacognition because that mascot pose was paired with the concept during initial learning.

#### Retrieval Practice

A learning strategy in which learners actively recall information from memory rather than passively re-reading or re-studying it, strengthening memory traces through the act of retrieval itself.

Retrieval practice is the single most well-supported study strategy in cognitive psychology. Each successful retrieval strengthens the memory trace and makes future retrieval easier — a virtuous cycle the intelligent textbook exploits through embedded quizzes.

**Example:** Closing the textbook and writing down everything you remember about cognitive load theory before checking your notes, rather than re-reading the chapter.

#### Retrieval Strength

The current ease and speed with which a memory can be accessed, reflecting recent use and context availability rather than the underlying durability of the memory trace.

Retrieval strength is what makes massed practice feel effective — after repeated re-reading, retrieval strength is high. But high retrieval strength does not mean the memory will last; that depends on storage strength.

#### Scaffolding

Temporary instructional support provided to help a learner accomplish a task they cannot yet perform independently, gradually removed as competence increases until the learner can perform the task alone.

Scaffolding is the practical mechanism for teaching within the zone of proximal development. The key word is "temporary" — scaffolding that never fades becomes a crutch that prevents independence.

**Example:** A MicroSim that initially labels all variables and provides hints, then progressively removes labels as the learner demonstrates understanding, eventually presenting an unlabeled version.

#### Scenario-Based Assessment

An evaluation method that presents learners with realistic situations requiring them to apply knowledge, make decisions, and justify their reasoning within an authentic context rather than recalling isolated facts.

Scenario-based assessments measure transfer and application rather than recognition or recall. They reveal whether learners can use their knowledge in context, not report it.

**Example:** "A colleague shows you a textbook chapter with 15 new terms introduced in two pages. Using cognitive load theory, identify two specific problems and propose redesigns."

#### Schema

An organized mental framework of related concepts, experiences, and expectations that helps learners interpret new information, make predictions, and fill in gaps in understanding.

Schemas are the building blocks of expertise. When a learner has a rich schema for "cognitive load theory," new information about instructional design slots into the existing framework rather than floating as an isolated fact.

**Example:** A learner's schema for "assessment" initially contains only "test at the end of a course" but expands to include formative, diagnostic, and self-assessment after studying the Measurement domain.

#### Schema Construction

The cognitive process of building new mental frameworks by integrating novel information with existing knowledge structures through elaboration, comparison, and reorganization.

Schema construction is the active work of understanding. It is effortful, requires working memory resources, and benefits from instructional strategies like worked examples that reduce extraneous load while supporting the construction process.

**Example:** A learner constructing a schema for "intelligent textbook" by connecting previously separate concepts of adaptive learning, assessment, and content generation into a unified framework.

#### Screen Capture Automation

The process of programmatically generating screenshots or recordings of MicroSims and interactive content for use as static previews, documentation, or print-friendly alternatives.

Screen capture automation ensures that every MicroSim has a static fallback image for print output and accessibility, generated automatically rather than requiring manual screenshots.

#### Search Index

A system that maps keywords and phrases to their locations within the textbook, enabling learners to quickly locate specific topics, definitions, or discussions across all chapters.

In a digital intelligent textbook, the search index is generated automatically by MkDocs and is the primary navigation tool for learners who know what they are looking for but not which chapter covers it.

#### Self-Determination Theory

A macro theory of human motivation positing that people thrive when three basic psychological needs are met: autonomy, competence, and relatedness.

SDT gives textbook designers a concrete checklist: does this activity support the learner's sense of choice, build their feeling of capability, and connect them to others? If not, motivation will erode.

**Example:** Offering learners a choice of three capstone project topics (autonomy) with clear rubrics (competence) and peer review (relatedness).

#### Self-Efficacy

A person's belief in their capacity to execute the specific behaviors needed to produce desired outcomes in a particular domain or task.

Self-efficacy is not general confidence — it is task-specific and built through mastery experiences, vicarious learning, social persuasion, and managing physiological states. Well-designed formative assessments build self-efficacy by providing evidence of growing competence.

**Example:** A learner who successfully completes three progressively harder retrieval practice quizzes and reports feeling "ready for the exam."

#### Self-Regulated Learning

The process by which learners proactively set goals, select strategies, monitor progress, and adjust their approach based on feedback, taking active control of their own learning process.

Self-regulated learning is the behavioral expression of metacognition. Intelligent textbooks support it by providing progress dashboards, strategy suggestions, and prompts for self-reflection.

**Example:** A learner who checks their quiz performance dashboard, identifies weak areas, creates a spaced review schedule, and tracks improvement over two weeks.

#### Semantic Memory

A subsystem of long-term memory that stores general world knowledge, facts, concepts, and meanings independent of the personal context in which they were learned.

Semantic memory holds the conceptual knowledge that a textbook aims to build — the definitions, principles, and relationships that transfer across contexts. Well-structured chapters build rich semantic networks, not isolated facts.

**Example:** Knowing that "retrieval practice strengthens memory more than re-reading" without remembering when or where you first learned that fact.

#### Sensory Memory

An ultra-brief memory store that holds unprocessed sensory information — visual, auditory, tactile — for fractions of a second before it is either attended to and transferred to working memory or lost.

Sensory memory is the first filter in the learning pipeline. Information that is not attended to within milliseconds vanishes entirely, which is why textbook design must guide attention deliberately.

#### Seven Domains

A conceptual framework organizing learning sciences into seven interdependent areas: Motivation, Understanding, Retention, Application, Expertise, Measurement, and Learning Conditions.

The seven domains provide the structural backbone of this textbook, ensuring that every chapter addresses a distinct facet of the learning process while showing how the domains influence each other through feedback loops.

**Example:** A chapter on retrieval practice (Retention domain) links to motivation research by showing how successful recall builds self-efficacy (Motivation domain).

#### Short-Form Narrative

A brief, self-contained story — typically one to three pages — designed to illustrate a learning science concept through characters, conflict, and resolution rather than expository explanation.

Short-form narratives are pedagogical tools, not entertainment. Every narrative element — character choice, conflict type, resolution — should map to a specific concept the reader needs to learn.

**Example:** A one-page story about a student who switches from re-reading to retrieval practice and discovers the difference, illustrating the testing effect through a relatable character arc.

#### Site Navigation

The structural elements — menus, sidebars, breadcrumbs, and links — that enable readers to move through the textbook's content, find specific sections, and understand their current location within the overall structure.

Good site navigation reduces extraneous cognitive load by making wayfinding automatic. In MkDocs Material, the left sidebar navigation is the primary mechanism, and the project explicitly prohibits top navigation tabs.

#### Situated Cognition

The theory that knowledge is inseparable from the context in which it is learned and used, meaning that learning is most effective when it occurs in authentic situations that resemble the contexts where the knowledge will be applied.

Situated cognition challenges the assumption that abstract knowledge transfers automatically. It argues that the intelligent textbook should embed concepts in realistic tasks, not strip them of context for "cleaner" presentation.

**Example:** Learning about assessment rubric design by actually creating and applying a rubric to evaluate a peer's chapter, rather than studying rubric theory in isolation.

#### Skill Invocation

The act of triggering an agent skill from Claude Code or another orchestration tool, passing the required inputs and receiving the generated outputs.

Skill invocation is how the intelligent textbook pipeline moves from plan to product — each invocation transforms inputs (learning graph, glossary, outlines) into textbook artifacts (chapters, quizzes, MicroSims).

**Example:** Running `/generate-chapter --chapter 5 --outline docs/outlines/ch05.md` from Claude Code to invoke the chapter content generator skill.

#### SKILL.md Format

A standardized Markdown template that defines an agent skill's purpose, inputs, outputs, constraints, quality criteria, and step-by-step instructions, enabling consistent and repeatable AI-assisted content generation.

The SKILL.md format is the contract between the human author and the AI agent. A well-written SKILL.md produces consistent, high-quality outputs regardless of which specific model version executes it.

**Example:** A SKILL.md for the quiz generator that specifies: input (learning objectives, concept list), output format (JSON with question, options, correct answer, explanation), and constraints (no trick questions, Bloom's level 3+).

#### Social Learning Theory

Albert Bandura's theory that people learn not only through direct experience but also by observing, imitating, and modeling the behavior of others, mediated by attention, retention, reproduction, and motivation.

Social learning theory explains why worked examples, expert demonstrations, and peer interactions are effective — learners acquire new behaviors by watching others perform them before attempting their own.

**Example:** A video showing an expert thinking aloud while designing a learning graph, making the cognitive process observable and imitable.

#### Spaced Repetition

A learning strategy that schedules review sessions at increasing intervals over time, exploiting the spacing effect to maximize long-term retention with minimal total study time.

Spaced repetition is the algorithmic heart of intelligent textbook retention features. By reviewing material at the point it is about to be forgotten, learners get the maximum retrieval benefit with the minimum time investment.

**Example:** Reviewing a concept at 1 day, 3 days, 7 days, and 21 days after initial learning, with each successful retrieval extending the next interval.

#### Spaced Retrieval Scheduling

The algorithmic determination of optimal time intervals between retrieval practice sessions, balancing the goal of maximum long-term retention against the constraint of limited study time.

Spaced retrieval scheduling is where learning science meets computation. Algorithms like SM-2 and its descendants calculate when each item should next be reviewed based on the learner's performance history.

**Example:** An intelligent textbook's quiz engine scheduling a review of "cognitive load theory" for five days after the learner's last successful retrieval, based on their response time and accuracy pattern.

#### Speech Bubble Design

The visual formatting of character dialogue in graphic novel panels, including bubble shape, tail direction, font choice, and text length, designed to guide reading order and manage cognitive load.

Speech bubbles are the primary text delivery mechanism in graphic novel chapters. Overfilled bubbles or ambiguous reading order create extraneous cognitive load that competes with the learning content.

**Example:** Limiting each speech bubble to 15-25 words, using a clear tail pointing to the speaking character, and numbering bubbles when reading order might be ambiguous.

#### Storage Strength

The underlying durability and permanence of a memory trace, reflecting how well the information is encoded and integrated into long-term memory networks, independent of current retrieval ease.

Storage strength is what spaced retrieval builds. Each time you successfully retrieve a memory when retrieval strength is low, storage strength increases — which is why waiting until you almost forget before reviewing is optimal.

**Example:** A concept reviewed five times over a month has higher storage strength than the same concept reviewed five times in one hour, even though retrieval strength may be lower at any given moment.

#### Story Arc Structure

The narrative framework — setup, rising action, climax, falling action, and resolution — that organizes a pedagogical story to create engagement, tension, and satisfaction while delivering the intended learning content.

Story arc structure maps naturally to the learning sequence: the setup introduces the problem (information gap), the rising action builds understanding, the climax is the insight moment, and the resolution connects to application.

**Example:** Setup: a teacher's students keep failing tests despite studying hard. Rising action: the teacher investigates learning science. Climax: discovers the testing effect. Resolution: redesigns practice and sees improvement.

#### Story Engagement Techniques

Deliberate narrative strategies — cliffhangers, emotional stakes, humor, foreshadowing, and relatable characters — used to capture and maintain reader interest throughout a pedagogical story.

Engagement techniques are the means by which narrative transportation is achieved. Each technique has a pedagogical rationale: cliffhangers create information gaps, relatable characters build identification, and humor reduces anxiety.

**Example:** Ending a graphic novel panel with a cliffhanger — "But when Ebbinghaus tested himself the next day, something unexpected happened..." — to sustain curiosity across the page turn.

#### Story Generator

An AI skill that creates short-form graphic novel narratives featuring historical figures, learning science concepts, and pedagogically meaningful story arcs to support narrative-based learning.

The story generator adds an emotional and narrative dimension to the textbook, leveraging narrative transportation to make abstract concepts memorable through character and plot.

**Example:** Generating a 12-panel graphic novel story about Hermann Ebbinghaus discovering the forgetting curve through his self-experimentation with nonsense syllables.

#### Summative Assessment

Evaluation conducted at the end of an instructional unit to measure the extent of learning achieved, assign grades or certifications, and determine whether learning objectives have been met.

Summative assessment is necessary for accountability but insufficient for learning. The intelligent textbook uses summative assessments sparingly and relies on frequent formative assessments for the actual learning work.

**Example:** A final capstone project that demonstrates mastery across all seven domains, evaluated against a comprehensive rubric.

#### Sustained Attention

The ability to maintain focused concentration on a task or information source over an extended period without significant decline in performance.

Sustained attention determines whether a learner finishes a chapter or drifts away after two paragraphs. Short sections, varied formats (text, MicroSim, quiz), and clear progress indicators all support sustained engagement.

**Example:** Breaking a 4,000-word chapter into five sections, each ending with a brief retrieval prompt that re-engages attention before the next section.

#### Table of Contents

An organized listing of all chapters, sections, and subsections in the textbook, typically with page or link references, providing an overview of the content structure and supporting navigation.

The table of contents is the reader's first mental model of the textbook's scope and structure. A well-organized TOC reveals the conceptual architecture at a glance.

#### Tacit Knowledge

Knowledge that is difficult to articulate, formalize, or transfer through verbal or written instruction, typically acquired through experience and expressed through skilled performance rather than explicit statements.

Tacit knowledge is what makes expert performance hard to teach — the expert often cannot explain why they made a particular decision because the reasoning has become intuitive and automatic.

**Example:** An experienced editor's "feel" for whether a paragraph is too dense for the target audience — a judgment based on years of reader feedback that resists reduction to explicit rules.

#### Ten Thousand Hour Rule

The popular claim, derived from Anders Ericsson's research on deliberate practice, that approximately 10,000 hours of practice are needed to achieve world-class expertise in a domain.

The rule is a useful heuristic for appreciating the scale of expert development, but it oversimplifies: the quality, structure, and feedback conditions of practice matter as much as the quantity. Not all hours are equal.

**Example:** Two musicians each practice for 10,000 hours, but the one who engaged in deliberate practice with expert feedback reaches a higher level than the one who repeated comfortable pieces.

#### Testing Effect

The robust finding that retrieving information from memory during a test produces stronger long-term retention than spending the equivalent time re-studying the material.

The testing effect reframes quizzes from assessment tools to learning tools. In an intelligent textbook, frequent low-stakes quizzes are not there to judge the learner — they are there to strengthen memory.

**Example:** Students who took a practice quiz after reading a chapter scored 50% higher on a delayed test than students who spent the same time re-reading.

#### Tip Admonition

A styled content block that offers a practical, actionable suggestion for applying a concept more effectively, presented as optional helpful advice rather than required instruction.

Tip admonitions respect learner autonomy by framing advice as an offer rather than a command. They work best when they provide a specific, concrete action the reader can take immediately.

**Example:** "Tip: After reading each section, close the book and write down three key points from memory. This takes 60 seconds and doubles your retention."

#### Token Budgeting

The practice of strategically allocating portions of the context window to different content types — instructions, source material, examples, and output space — to maximize the quality of AI-generated results.

Token budgeting prevents the common failure mode of stuffing so much context into a prompt that the model runs out of space for a complete output or loses track of important instructions buried in the middle.

**Example:** Allocating 20% of the context window to the style guide, 30% to the chapter outline and glossary, and reserving 50% for the generated chapter content.

#### Twelve Panel Story

A graphic novel format consisting of exactly twelve sequential panels that tells a complete pedagogical narrative, constrained to a length that maintains focus and fits a single concept.

The twelve-panel constraint forces disciplined storytelling: every panel must advance the narrative or illustrate the concept. This format produces stories that are complete, focused, and reproducible by the AI generation pipeline.

**Example:** A 12-panel story about Hermann Ebbinghaus: panels 1-3 establish the character and question, panels 4-8 show the experiment, panels 9-11 present the forgetting curve discovery, and panel 12 connects to modern spaced repetition.

#### Understanding Check Admonition

A styled content block that poses a brief retrieval question or self-assessment prompt, asking learners to verify their comprehension of the preceding material before continuing.

Understanding check admonitions implement retrieval practice directly in the reading flow. They transform passive reading into active recall, leveraging the testing effect for in-context learning.

**Example:** "Understanding Check: Without scrolling back, name the three types of cognitive load and give one example of each. If you can, you're ready for the next section."

#### Understanding Domain

The area of learning sciences focused on how learners construct meaning from new information by integrating it with prior knowledge through cognitive processes like encoding, elaboration, and schema building.

Understanding is not the same as exposure. This domain examines the cognitive architecture — working memory, long-term memory, dual coding — that determines whether information becomes inert knowledge or usable understanding.

**Example:** Pairing a verbal explanation of the forgetting curve with a visual MicroSim that lets learners manipulate retention intervals.

#### Universal Design for Learning

A framework for designing flexible instructional materials and activities that provide multiple means of engagement, representation, and action/expression to accommodate the widest possible range of learner variability.

UDL shifts the design question from "How do we accommodate special needs?" to "How do we design for variability from the start?" An intelligent textbook built on UDL principles serves more learners without requiring retrofitted accommodations.

**Example:** Providing concept explanations in text, diagram, and interactive MicroSim formats so learners can engage through whichever representation works best for them.

#### Unlearning

The effortful cognitive process of weakening, revising, or replacing previously held beliefs, mental models, or habitual responses that conflict with new, more accurate understanding.

Unlearning is often harder than initial learning because the old knowledge actively competes with the new. Textbooks must surface misconceptions explicitly and provide compelling evidence and experiences that motivate revision.

**Example:** A teacher who has always used learning styles theory must unlearn that framework when confronted with evidence that matching instruction to supposed styles does not improve outcomes.

#### Venn.js Library

A JavaScript library that generates proportionally accurate Venn diagrams from set intersection data, useful for visualizing overlapping categories and concept relationships.

Venn.js is used for MicroSims that need to show how concepts overlap — such as the intersection of cognitive science, educational psychology, and neuroscience that constitutes learning sciences.

**Example:** A Venn diagram showing the overlap between intrinsic motivation, self-efficacy, and flow state, with the intersection labeled "optimal engagement."

#### vis-network Library

A JavaScript library for creating interactive network graphs with draggable nodes, configurable edges, and physics-based layouts, used for rendering learning graphs and concept dependency maps.

vis-network powers the textbook's learning graph viewer, letting learners explore concept dependencies interactively. Note: horizontal edges have a known rendering bug with labels that requires a slight y-offset.

**Example:** An interactive visualization of the 221-concept learning graph where learners can click nodes to see definitions and trace prerequisite chains.

#### Visuospatial Sketchpad

A component of working memory that maintains and manipulates visual and spatial information, supporting tasks like mental imagery, navigation, and diagram interpretation.

The visuospatial sketchpad is the cognitive resource that MicroSims and diagrams draw upon. When a simulation is well designed, it offloads spatial reasoning from imagination to perception, freeing cognitive resources for understanding.

**Example:** A causal loop diagram that externalizes the feedback relationships between motivation and practice, letting the visuospatial sketchpad track arrows rather than requiring pure mental imagination.

#### Warning Admonition

A styled content block that alerts learners to common errors, dangerous misconceptions, or frequently confused concepts, using a visually distinct format to capture attention.

Warning admonitions are high-signal, low-frequency — used only for genuinely dangerous mistakes, not for general notes. Overuse trains readers to ignore them.

**Example:** A warning about the learning styles myth: "Caution: matching instruction to visual, auditory, or kinesthetic 'learning styles' is not supported by evidence. It feels intuitive, which is part of the problem."

#### Worked Example

A step-by-step demonstration of how to solve a problem or complete a task, showing both the process and the reasoning behind each step, designed to reduce cognitive load for novice learners.

Worked examples are among the most effective instructional strategies for novices because they allow learners to study the solution process without the high cognitive load of trying to solve the problem themselves.

**Example:** Showing a complete, annotated example of how to create a MicroSim — from learning objective through p5.js code to deployment — before asking learners to create their own.

#### Working Memory

A limited-capacity cognitive system that temporarily holds and manipulates information during complex tasks like reasoning, comprehension, and learning, typically constrained to about four chunks of information.

Working memory is the central bottleneck of learning. Every design decision in an intelligent textbook — page layout, MicroSim complexity, number of new terms per section — should respect its severe capacity limits.

**Example:** Limiting a MicroSim to three adjustable sliders because a fourth would push the learner's working memory past its capacity to track all variables simultaneously.

#### Zone of Proximal Development

The range of tasks that a learner cannot yet perform independently but can accomplish with appropriate guidance, support, or collaboration, as proposed by Lev Vygotsky.

The ZPD is the sweet spot for instruction: tasks below it are too easy to produce learning, and tasks above it are too hard to benefit from guidance. The intelligent textbook must calibrate difficulty to stay within this zone.

**Example:** A learner who cannot design a MicroSim from scratch but can complete one when given a partially built template with guiding comments — the gap between those two levels is the ZPD.
