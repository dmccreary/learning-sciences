---
title: Cognitive Architecture and Load
description: Covers the three-stage memory model (sensory, working, long-term), Baddeley's working-memory components, long-term memory types, schemas, encoding and consolidation, dual coding, multimedia learning, and Cognitive Load Theory — then translates each into design rules for intelligent textbooks.
generated_by: claude skill chapter-content-generator
date: 2026-04-19 11:10:38
version: 0.07
---

# Cognitive Architecture and Load

!!! mascot-welcome "Welcome — The Bottleneck at the Heart of Learning"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    Motivation opened the gate. What comes through the gate is information — and information collides almost immediately with a narrow, measurable bottleneck called working memory. In this chapter we map the cognitive architecture the learner actually has, not the one we wish they had, and we introduce the load budget that governs every design decision from here on. Let's build a mental model.

## Summary

This is the memory-systems chapter. We walk through sensory memory, working memory (phonological loop, visuospatial sketchpad, central executive), long-term memory (semantic, episodic, procedural), and the schemas that organize it all. Then we introduce Cognitive Load Theory — intrinsic, extraneous, and germane load — and show how multimedia learning, dual coding, chunking, and elaboration let us design material that working memory can actually hold.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

1. Sensory Memory
2. Iconic Memory
3. Echoic Memory
4. Working Memory
5. Miller's Law
6. Phonological Loop
7. Visuospatial Sketchpad
8. Central Executive
9. Long-Term Memory
10. Semantic Memory
11. Episodic Memory
12. Procedural Memory
13. Schema
14. Schema Construction
15. Chunking
16. Encoding
17. Consolidation
18. Elaboration
19. Dual Coding Theory
20. Multimedia Learning Theory
21. Cognitive Load
22. Intrinsic Cognitive Load
23. Extraneous Cognitive Load
24. Germane Cognitive Load
25. Cognitive Load Theory

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Learning Sciences](../01-foundations/index.md)
- [Chapter 2: The Seven Domains Framework](../02-seven-domains/index.md)
- [Chapter 3: Motivation and Engagement](../03-motivation-engagement/index.md)

---

## A Recipe, a Video, and a Ringing Phone

Imagine trying to follow a spoken recipe that streams past you once, while a cooking video plays on the same screen, while your phone rings in the next room. You miss the third ingredient. You rewind the video, and by the time it restarts you've forgotten the pan temperature the narrator mentioned twelve seconds ago. You are not failing because you are distracted in some general sense; you are failing because several well-documented bottlenecks in your cognitive architecture are hitting their limits at the same moment. The narrator's voice and the video's onscreen text are competing for the same narrow channel. Your working memory — four items give or take — is being asked to hold seven. And none of it is being organized by prior knowledge, because cooking is new.

This chapter is about those bottlenecks. They are not character flaws; they are architectural features measured in laboratories across seventy years of research. Once an author sees the architecture, the design decisions that make textbooks teachable stop feeling like style and start feeling like plumbing.

By the end of this chapter you will be able to:

- Name the three stages of memory and the capacity and duration limits of each.
- Describe Baddeley's working-memory components and explain why verbal and visual material can share a page without colliding.
- Distinguish semantic, episodic, and procedural long-term memory and give a retrieval signature for each.
- Apply the intrinsic / extraneous / germane decomposition to diagnose a MicroSim that is overwhelming learners.
- Use Mayer's multimedia principles as a design checklist before shipping a chapter.
- Identify when Miller's "7 plus or minus 2" is being invoked correctly, and when it is being misquoted.

## The Three-Stage Model

The dominant framework for human memory — the ***Atkinson-Shiffrin model***, proposed in 1968 and refined extensively since — organizes memory into three stages arranged in series: ***sensory memory*** (a very brief, high-capacity buffer that holds raw perceptual input), ***working memory*** (a narrow, short-duration workspace where conscious thought happens), and ***long-term memory*** (a vast, long-duration store of knowledge and skills). Information flows forward when attention selects it and backward when retrieval pulls it into working memory for use. The three stages have dramatically different capacities and durations, and mixing them up is one of the most common sources of instructional-design error.

Before we step into each stage, the interactive infographic below anchors the whole chapter. Return to it whenever the relationships between the stages feel slippery.

#### Diagram: The Three-Stage Memory Model

<details markdown="1">
<summary>Interactive infographic overlay: sensory, working, and long-term memory with clickable capacity and duration callouts</summary>
Type: interactive-infographic
**sim-id:** three-stage-memory-model<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a left-to-right flow with three labeled containers — a thin blue "Sensory Memory" funnel, a narrow amber "Working Memory" workspace with a small stage in the middle, and a wide deep-blue "Long-Term Memory" library to the right — connected by arrows labeled "attention" (sensory → working) and "encoding" / "retrieval" (working ↔ long-term). A thin dashed arrow from long-term back into working memory shows retrieval. Base image is annotation-free; labels come from overlay markers in `data.json`.

Modes (standard for this skill):

- **Explore mode:** Hovering each container reveals a tooltip with (a) capacity estimate, (b) duration estimate, (c) example content, and (d) the mechanism that moves information to the next stage.
- **Quiz mode:** A fact about memory appears (e.g., "Holds roughly 4 items for about 20 seconds without rehearsal"); the student clicks the matching container. Incorrect clicks reveal the correct container and a one-sentence explanation.
- **Edit mode (authors only):** Drag markers to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Understand): *Given a memory property, identify which of the three stages it describes.*

Responsive: canvas width adapts via `updateCanvasSize()` as the first line of `setup()`; marker anchors preserved on resize.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/three-stage-memory-model/` contains `image-prompt.md`, `data.json`, `main.html`, `index.md`, and the annotation-free base image.
</details>

## Sensory Memory: The Briefest Buffer

***Sensory memory*** is the pre-attentive buffer that holds raw perceptual input for a fraction of a second while attention decides whether to forward it. Its capacity is very large — essentially everything the senses pick up in that moment — and its duration is very short. It has modality-specific subsystems, two of which matter for instructional design.

***Iconic memory*** is the visual sensory register; it holds a near-photographic trace of the visual field for roughly 250 to 500 milliseconds before it decays. George Sperling's partial-report experiments in 1960 demonstrated that participants could report any cued row of a briefly flashed letter matrix but could not report the whole matrix — evidence that the full image was briefly available and then faded before it could be transferred.

***Echoic memory*** is the auditory analog; it holds a trace of recent sound for roughly 2 to 4 seconds, long enough that a listener who is asked "what did you just say?" can retrieve the last clause. Echoic memory's longer duration relative to iconic memory is part of why spoken instructions can be held across a short interruption while a flashed image cannot.

For a textbook author the practical upshot is narrow but important: sensory memory is the *selection* stage, not the *learning* stage. Anything we want the learner to actually retain must be pulled forward by attention into working memory. A chapter packed with rapid, undirected visual and auditory input produces sensory-memory overload — nothing gets selected and nothing gets learned.

## Working Memory: The Stage Where Learning Happens

***Working memory*** is the limited-capacity, short-duration workspace where conscious thought, reasoning, and learning occur. It is where the learner currently holds the sentence they're reading, the variables they are comparing, and the intermediate result of the calculation they are running. Its capacity is small and its duration without active maintenance is roughly 15 to 30 seconds — which is why you repeat a phone number silently until you dial it.

For fifty years the working-memory capacity number of record has been "seven plus or minus two," and that number deserves a careful unpacking before we rely on it.

### Miller's Law, Carefully

In 1956 George Miller published a paper titled "The Magical Number Seven, Plus or Minus Two," summarizing a range of experiments on immediate memory span. The figure that stuck in popular memory — ***Miller's Law*** — is the claim that working memory holds about seven items at a time. The paper is a masterpiece and the slogan is a misquote.

Miller himself was careful. His seven-item estimate came from *digit-span* tasks in which participants could silently rehearse; the estimate for other materials (letters, words, tones) varied. More importantly, what counts as "an item" is not fixed — Miller's own contribution was to note that the capacity is measured in ***chunks*** (coherent units), not in raw elements, so the same seven-slot container can hold seven letters or seven words or seven sentences depending on what the learner knows. The often-quoted headline strips away both caveats.

Modern estimates of *pure* working-memory capacity — measured with procedures that suppress rehearsal and chunking — converge on closer to ***four plus or minus one*** items, a figure associated with Nelson Cowan's work beginning in 2001. Cowan's four-item estimate and Miller's seven-item estimate are not contradictory; they measure different things. Miller measured *effective span* (with rehearsal and chunking allowed), which is what a learner has in a natural reading situation. Cowan measured *raw span* (with those strategies blocked), which is the capacity ceiling. For instructional design, both numbers matter — the four is the floor when learners cannot chunk (as with wholly new material), and the seven is the ceiling when they can.

!!! mascot-warning "The Miller Misquote"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom the elephant flagging a warning">
    "Working memory holds seven items" is one of the most repeated facts in popular educational writing, and it is wrong in two ways at once. The figure is closer to four for truly novel material, and Miller's paper was about *chunks*, not items. Whenever you see "7 plus or minus 2" asserted without either caveat, treat it as a signal that the writer has not read Miller.

### Baddeley's Working-Memory Model

Miller treated working memory as a single slot-based store. Alan Baddeley and Graham Hitch proposed a richer structure in 1974, and the model has been refined steadily since. In Baddeley's account, working memory is not one container but a small system of specialized components coordinated by an attentional controller.

- The ***phonological loop*** — the verbal and acoustic subsystem that holds sound-based information for roughly two seconds of unrehearsed trace, refreshable through silent rehearsal. This is where inner speech lives.
- The ***visuospatial sketchpad*** — the visual and spatial subsystem that holds images, diagrams, and spatial layouts for a comparably brief period.
- The ***central executive*** — the attentional controller that allocates limited processing resources to the subsystems, selects relevant inputs, suppresses irrelevant ones, and coordinates task switching. It does not store information itself; it manages the stores.

Baddeley later added a fourth component, the *episodic buffer*, to explain how the separate modalities get integrated into coherent multimodal representations. We will treat it as part of the central executive's integration function for this chapter.

The model's most useful prediction for textbook design is that verbal and visual material draw on *separate* capacity pools. A learner who is reading a paragraph is spending phonological-loop capacity; a learner looking at a diagram is spending visuospatial-sketchpad capacity. The two can proceed in parallel without colliding — which is the architectural fact that dual coding and multimedia learning will exploit in a moment.

#### Diagram: Baddeley's Working-Memory Components

<details markdown="1">
<summary>Interactive infographic overlay: Baddeley's working memory with three subsystems and a central executive</summary>
Type: interactive-infographic
**sim-id:** baddeley-working-memory<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive infographic overlay built with the `interactive-infographic-overlay` skill. Base image: a central hub labeled "Central Executive" with three radiating slots — "Phonological Loop" on the left with a small ear icon, "Visuospatial Sketchpad" on the right with a small eye icon, and an "Episodic Buffer" beneath bridging to long-term memory shown as a distant container. Rendered in the project's blue-amber palette on a white background; base image annotation-free with overlay-driven labels.

Modes (standard for this skill):

- **Explore mode:** Hovering each component reveals its storage type, duration, refresh mechanism, and one concrete example (e.g., phonological loop: "holds the sentence you just read for ~2s; refreshed by silent rehearsal").
- **Quiz mode:** A task description appears ("mentally rotate this shape"); the student clicks the subsystem primarily engaged.
- **Edit mode (authors only):** Drag markers to recalibrate positions; export updated `data.json`.

Learning objective (Bloom level: Analyze): *Given a cognitive task, identify which working-memory component(s) it primarily recruits.*

Responsive via `updateCanvasSize()` as first line of `setup()`; marker anchors preserved.

Implementation: Generated with the `interactive-infographic-overlay` skill. Directory `/docs/sims/baddeley-working-memory/` contains the standard five files.
</details>

## Chunking: The Capacity-Extender

Given a four-item ceiling on raw capacity, how does anyone ever think about anything complex? The answer is ***chunking***, the process by which separate elements are grouped into a single higher-order unit that occupies one working-memory slot. The letters `F`, `B`, `I` are three items; `FBI` is one. The digits `1`, `7`, `7`, `6` are four items; `1776` is one if the learner knows American history. Chunking is how long-term knowledge effectively expands working-memory capacity without violating it — the slots are still four, but each slot now holds a dense package.

The classic demonstration comes from chess. Chase and Simon's 1973 studies showed that chess masters dramatically outperformed novices at reconstructing mid-game board positions — but *only* when the positions came from real games. On random board configurations, masters performed no better than novices. The master's advantage was not general visual memory; it was a library of roughly fifty thousand meaningful chess patterns that could each occupy a single chunk. Take the patterns away and the four-slot ceiling reasserts itself. The moral for instructional design is that chunking is not a trick the reader can apply at will — it depends on *pre-existing long-term knowledge*. New material cannot be chunked until something about it is already familiar.

#### Diagram: Chunking Demonstration

<details markdown="1">
<summary>MicroSim: compare recall of random vs. chunked letter strings</summary>
Type: microsim
**sim-id:** chunking-demonstration<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that demonstrates the chunking effect on effective working-memory span. The canvas shows a two-panel layout. In each trial, a string of 12 letters is flashed for a fixed duration (configurable 500–2000 ms) and then hidden; the learner types what they recall. The left panel draws strings from a random-letter source (`XQNTRPKVLYBF`); the right panel draws from a chunked source where letters form familiar acronyms (`FBIIBMCIANASA` shown as `FBI IBM CIA NASA`). A running tally shows the proportion correct in each condition.

Controls (using built-in p5.js controls per project convention):

- **Flash-duration slider** (500–2000 ms) — how long the string is visible.
- **Condition dropdown** — {random only, chunked only, alternating, random pairs}.
- **Show-chunk-boundaries checkbox** — when on, the chunked condition inserts visible spaces; when off, the learner must find the chunks.
- **Reset button** — clears the tally.

Learning objective (Bloom level: Apply): *Demonstrate that perceived working-memory capacity depends on the chunk structure of the material, not on the raw number of elements.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/chunking-demonstration/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
</details>

## Long-Term Memory: The Store Behind the Stage

***Long-term memory*** is the effectively unlimited, long-duration knowledge store behind working memory. Its capacity has no known upper bound; its duration is measured in years or decades. What looks like forgetting is usually retrieval failure — the trace is present but inaccessible from the current retrieval cues. This distinction, between *storage* and *accessibility*, is one we will return to repeatedly in Chapter 5 on retention.

Endel Tulving's work in the 1970s established that long-term memory is not a single undifferentiated store but a set of qualitatively distinct subsystems with different contents and different retrieval signatures. Three subsystems matter for this chapter.

- ***Semantic memory*** — general knowledge of facts, concepts, and meanings, decontextualized from the circumstances in which they were learned. "Paris is the capital of France" is a semantic memory. Retrieval is cue-driven and does not require mental time travel.
- ***Episodic memory*** — memory for specific events, bound to the time, place, and personal context of their occurrence. "I was reading this chapter on Sunday afternoon when the coffee spilled" is an episodic memory. Retrieval involves conscious recollection of the original episode.
- ***Procedural memory*** — memory for skills, procedures, and habits, expressed through performance rather than recall. Riding a bicycle or touch-typing are procedural memories. Retrieval is implicit; trying to introspect about the steps often degrades performance.

The table below compares the three in design-relevant terms.

| Memory type | Typical content | Retrieval signature | Example instructional target |
|---|---|---|---|
| Semantic | Concepts, definitions, facts, relationships | Cue-driven; no mental time travel | *State Miller's Law and its two caveats.* |
| Episodic | Events bound to time and place | Conscious recollection of the original episode | *Recall the MicroSim example we ran in class on the chunking effect.* |
| Procedural | Skills and procedures | Implicit; expressed through performance | *Invoke the microsim-generator skill and produce a working sketch.* |

Two implications for textbook design follow. First, the three subsystems require different instructional moves: semantic content is served by definitions, diagrams, and retrieval practice; procedural content is served by worked examples fading into independent practice; episodic content is served by memorable concrete scenarios that can be re-evoked as retrieval cues. Second, most real learning outcomes touch more than one subsystem. "Apply cognitive load theory" is procedural (applying) on top of semantic (knowing the theory); a chapter that teaches the semantic layer without exercising the procedural layer is shipping half a learning outcome.

## Schemas: The Organization of Long-Term Memory

A ***schema*** is a mental structure that organizes a category of related concepts, procedures, and expectations into a coherent unit. Schemas are what make a chess master's fifty-thousand-pattern library usable — each pattern is a schema that packages a board configuration, the threats it implies, and the moves that respond to them. A learner's schema for "classroom" organizes teachers, students, desks, bells, grades, and the implicit rules of the game; a learner's schema for "cognitive load" will eventually organize intrinsic, extraneous, and germane components, the working-memory system they draw on, and the design moves that manage each.

***Schema construction*** is the process by which schemas form, consolidate, and are refined through experience. New information is integrated into existing schemas where possible and prompts the formation of new schemas where no existing structure fits. Two properties of schema construction matter for instructional design.

First, **schema construction is incremental**. A rough schema forms from a single encounter and is refined across many. A chapter that tries to deliver a fully elaborated schema in one pass is asking for storage where the reader does not yet have the scaffold. Spacing matters (Chapter 5); revisiting matters; connecting new material to prior schemas matters.

Second, **schema construction is the mechanism by which chunking becomes possible**. The chess master's patterns *are* schemas. Once a schema is in place, material that fits it is recognized as a single chunk and occupies a single working-memory slot. This means that schema construction is not only a long-term-memory story; it is the primary long-run strategy for expanding effective working-memory capacity.

!!! mascot-thinking "Why the Design Moves Stack"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    Notice how the architecture makes the design moves cumulative. Spacing builds schemas; schemas enable chunking; chunking extends working-memory capacity; extended capacity leaves room for germane processing; germane processing builds better schemas. The next five chapters are different names for different points on that loop.

## Encoding, Consolidation, and Elaboration

Three processes describe how information moves from working memory into long-term memory and becomes durable.

***Encoding*** is the initial translation of information into a form that the long-term memory system can store. Encoding quality depends heavily on *depth of processing* — Craik and Lockhart's 1972 framework — in which shallow processing (e.g., noticing the font) produces weak traces and deep processing (e.g., relating the material to existing knowledge) produces strong ones. The practical consequence: a reader who processes a sentence for its meaning encodes more than a reader who processes it for its surface features, and a reader who connects the sentence to prior knowledge encodes more still.

***Consolidation*** is the neural stabilization of a new memory trace over time, converting an initially labile representation into a durable one. Consolidation takes minutes to hours for the cellular phase and months to years for the systems-level reorganization that binds new memories into existing semantic networks. Sleep plays a major role in both phases — which is why cramming followed by an all-nighter is a structurally poor strategy, not just an unpleasant one. The consolidation claim is supported by converging evidence from lesion studies, pharmacological interventions, and sleep-deprivation experiments; the basic finding is well replicated, though the exact mechanisms remain an active research area.

***Elaboration*** is the process of deepening encoding by actively relating new information to existing knowledge — generating examples, asking why, drawing connections, explaining in one's own words. Elaborative processing produces richer retrieval cues, which translates into better long-term retention. It is one of the few instructional interventions that is both strongly evidence-based and cheap to deploy — asking the learner "why does this work?" or "when would it fail?" is free and productive.

A caveat on the causal chain: most of the evidence that deep and elaborative encoding produces better retention comes from laboratory experiments with explicit encoding-strategy manipulations, which gives the causal claim real weight. A plausible confound in classroom settings is that students who elaborate spontaneously are also students who study more generally, so the correlation between elaboration and performance in observational studies overstates the causal effect. The experimental literature addresses this confound directly; the observational literature does not.

## Dual Coding Theory

Allan Paivio's ***Dual Coding Theory***, developed through the 1970s and formalized in his 1986 book, proposes that cognition operates through two separate but interconnected representational systems: a verbal system that processes linguistic information and a non-verbal (imaginal) system that processes visual and other perceptual information. Concepts represented in both systems are more memorable than concepts represented in only one, because two independent retrieval routes exist to reach them.

The prediction dovetails with Baddeley's separate phonological and visuospatial stores: information that recruits both channels spends capacity from both pools rather than piling onto one, and it leaves two complementary traces in long-term memory rather than one.

The design implication is straightforward and sturdy: a chapter that pairs text with a diagram that *carries complementary information* teaches better than text alone or diagram alone. The qualifier matters — pairing text with a diagram that carries *the same* information produces the redundancy effect we'll meet in a moment, not the dual-coding benefit. The benefit is in complementarity, not duplication.

## Multimedia Learning Theory

Richard Mayer's ***Multimedia Learning Theory***, developed across three decades of experiments summarized in his *Cambridge Handbook of Multimedia Learning*, takes dual coding as a starting point and adds a catalog of empirically tested design principles. The principles are not armchair heuristics; each is supported by controlled experiments with specific effect-size estimates. Graduate designers should know them by name.

| Principle | Rule | Design implication for MicroSims |
|---|---|---|
| Coherence | Exclude extraneous words, pictures, and sounds that do not support the learning goal | Remove decorative graphics and background music from MicroSims |
| Signaling | Highlight the essential material explicitly | Use arrows, color, and bold labels to guide the eye to the relevant region |
| Redundancy | Do not present the same verbal information simultaneously as printed text and narration | If a MicroSim narrates the equation, do not also display the equation text |
| Spatial contiguity | Place related words and pictures near each other | Place a label on the part it names, not in a separate legend far below |
| Temporal contiguity | Present related words and pictures simultaneously, not sequentially | Show the equation and the graph at the same moment, not in two phases |
| Modality | Present words as narration rather than on-screen text when paired with graphics | Prefer audio narration over captions when the learner is also watching a diagram |
| Segmenting | Break continuous material into learner-paced segments | Chunk a MicroSim into stages with a "next" button |
| Pre-training | Teach the names and characteristics of the key components before running the simulation | Label the parts of the working-memory model before asking the learner to run a task |
| Personalization | Use conversational style rather than formal style | Write "you will notice that..." rather than "the user will observe that..." |
| Voice | Use a human rather than a machine voice in narration | When we add narration to MicroSims, use a real recording, not text-to-speech |

A careful note on the evidence base. Most multimedia-learning experiments are short-duration laboratory studies with university undergraduates, which is a real ecological-validity limitation. Effect sizes in classroom field studies tend to be smaller, and some principles (particularly voice and personalization) have weaker replication records than others (particularly coherence, signaling, and contiguity). A prudent application is to treat the top five principles as near-certain design rules and the remainder as useful defaults that should yield to contrary local evidence.

!!! mascot-tip "Ship the Coherence Pass"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom the elephant giving a tip">
    If you can only apply one multimedia principle before shipping, apply coherence — delete the decorative graphic, the atmospheric music, and the cute-but-unrelated aside. Every irrelevant element is extraneous load that pushes useful load out of working memory.

## Cognitive Load Theory

John Sweller's ***Cognitive Load Theory***, developed beginning in the late 1980s, is the framework that ties the rest of this chapter together. Its central premise is that *working memory is the binding constraint on learning*, and that every instructional decision either respects that constraint or wastes it. ***Cognitive load*** is the total demand that a learning task places on working memory, and the theory decomposes it into three additive components.

- ***Intrinsic cognitive load*** is the load inherent in the material itself — specifically, the number of interacting elements the learner must hold in mind at once to make sense of it. Learning the word for "dog" in a new language has low intrinsic load; learning a differential equation that couples three variables has high intrinsic load. Intrinsic load is a property of the *material times the learner's prior knowledge* — material that is high-load for a novice may be low-load for an expert whose schemas have collapsed the interacting elements into a single chunk.
- ***Extraneous cognitive load*** is load imposed by the *presentation* of the material that does not contribute to learning. A confusing diagram, a split-attention layout, redundant narration, or a gratuitous decorative animation all generate extraneous load. Extraneous load is the designer's fault, and it is the primary lever the designer can pull to improve a lesson without changing its content.
- ***Germane cognitive load*** is load devoted to the construction and automation of schemas — the productive work of learning itself. Germane load is what we *want* the learner to spend their working memory on; it is the mental effort of noticing patterns, forming connections, and consolidating new structures.

The decomposition gives us the central equation of the theory. If we write the three components as \( L_\mathrm{int} \), \( L_\mathrm{ext} \), and \( L_\mathrm{ger} \) and the learner's available working-memory capacity as \( C \), then

\[
L_\mathrm{total} \;=\; L_\mathrm{int} + L_\mathrm{ext} + L_\mathrm{ger} \;\le\; C
\]

is the budget constraint every lesson is implicitly negotiating. The inequality is the point: when total load exceeds capacity, the learner overflows and learning collapses. The designer has three moves available — reduce intrinsic load (by sequencing, scaffolding, or pre-training), reduce extraneous load (by applying multimedia principles), or increase germane load (by elaboration prompts, self-explanation, and retrieval practice) — and the three are *not* independent because they share the same fixed capacity \( C \).

#### Diagram: The Cognitive Load Budget

<details markdown="1">
<summary>MicroSim: interactive cognitive-load budget with sliders for each load type and a capacity bar</summary>
Type: microsim
**sim-id:** cognitive-load-budget<br/>
**Library:** p5.js<br/>
**Status:** Specified

An interactive p5.js MicroSim that visualizes the cognitive-load budget inequality. The canvas displays a horizontal capacity bar labeled "Working Memory Capacity" filled with three stacked regions colored to represent intrinsic (blue), extraneous (red), and germane (green) load. A performance indicator on the right shows one of {learning, on the edge, overloaded}; the state transitions as total load approaches and exceeds capacity.

Controls (using built-in p5.js controls per project convention):

- **Intrinsic-load slider** (0–10) — material difficulty relative to learner prior knowledge.
- **Extraneous-load slider** (0–10) — presentation-driven load.
- **Germane-load slider** (0–10) — schema-construction effort.
- **Capacity slider** (5–15) — the learner's available capacity, illustrating individual differences.
- **Scenario dropdown** — preset configurations: {novice with bad diagram, expert with clean diagram, overloaded learner, well-designed chapter}.
- **Reset button** — returns to default values.

Learning objective (Bloom level: Apply): *Given a lesson description, decompose its cognitive load and predict whether the learner will overflow.*

Canvas responsive via `updateCanvasSize()` as first line of `setup()`; parented to the standard `<main></main>` element.

Implementation: p5.js sketch in `/docs/sims/cognitive-load-budget/` with `main.html`, `script.js`, `local.css`, and `index.md`. Generated via the `microsim-generator` skill.
</details>

A note on the measurement of cognitive load. Load has been assessed through subjective rating scales (Paas's mental-effort scale), through dual-task performance (secondary-task reaction time as a proxy for residual capacity), and through physiological measures (pupillometry, EEG). Each method has known limitations; no single measure is decisive. Claims that a specific intervention "reduces extraneous load" should be read with the usual care — the claim is stronger when the effect appears across multiple measurement modalities.

## Load as a System: The Load Dynamics Loop

The three load components do not sit in independent boxes. They compete for the same capacity \( C \), and each pushes on the others. When extraneous load rises, there is less capacity for germane load; when germane load is starved, schema construction slows; when schemas are impoverished, future material has higher intrinsic load because nothing can be chunked. The system has the shape of a loop, and the loop has both a corrosive brake and a productive flywheel.

Before the diagram, one term we'll reuse: a ***reinforcing loop*** is one where an increase in any variable eventually comes back around to further increase itself (the sign product around the loop is positive); a ***balancing loop*** tends toward a steady state. Load dynamics combine one of each, which is part of why poor load management is so hard to recover from and good load management compounds over time.

#### Diagram: Load Dynamics — The Extraneous Brake and the Germane Flywheel

<details markdown="1">
<summary>Causal loop diagram showing two cognitive-load feedback loops that share the germane-load node</summary>
Type: causal-loop-diagram
**sim-id:** load-dynamics-loops<br/>
**Library:** Mermaid<br/>
**Status:** Specified

A causal loop diagram rendered with Mermaid `flowchart LR` showing six variable-nodes connected by polarity-labeled edges. Nodes, written as noun phrases: "extraneous load", "germane-load capacity", "schema construction", "effective working-memory capacity", "intrinsic load of next task", "learner performance".

Edges and polarities:

- extraneous load → germane-load capacity (−) — extraneous load crowds out germane capacity
- germane-load capacity → schema construction (+) — germane processing builds schemas
- schema construction → effective working-memory capacity (+, with delay marker ⧚) — schemas enable chunking, which effectively expands capacity (delayed)
- effective working-memory capacity → intrinsic load of next task (−) — better chunking lowers perceived intrinsic load of related material
- intrinsic load of next task → germane-load capacity (−) — higher intrinsic load leaves less room for germane processing
- germane-load capacity → learner performance (+) — germane processing produces learning
- extraneous load → learner performance (−) — extraneous load directly hurts performance

Loop labels placed at each loop's geometric center:

- **B1 — Extraneous brake (balancing, corrosive).** extraneous load → crowded germane capacity → weak schema construction → small effective capacity → high intrinsic load → even less germane capacity. A design-quality failure that compounds.
- **R1 — Germane flywheel (reinforcing).** germane-load capacity → schema construction → effective capacity → lower intrinsic load on related material → more germane-load capacity available → more schema construction. When this loop spins, learning compounds.

Visual treatment: B1 nodes in warm red-orange; R1 nodes in cool blue; the shared node "germane-load capacity" drawn in a neutral tone with dual borders to signal that it belongs to both loops. Delay marker ⧚ on the schema-construction → effective-capacity edge. Every edge labeled with `+` or `−`.

Implementation: Mermaid `flowchart LR` with `linkStyle` declarations for polarity coloring and `classDef` for loop grouping. A one-paragraph walkthrough of loop R1 in plain English accompanies the diagram in the prose that follows.
</details>

Read loop **R1** — the germane flywheel — in plain English. A well-designed lesson leaves room in working memory for germane processing; germane processing builds schemas; schemas, once consolidated, make related material chunk-able; chunk-able material has lower intrinsic load, which leaves *more* room for germane processing on the next lesson. Each trip around the loop makes the next one easier. Now read **B1** — the extraneous brake. A cluttered diagram generates extraneous load; extraneous load crowds out germane capacity; weak germane processing builds weaker schemas; weaker schemas mean the next related lesson lands with higher perceived intrinsic load; higher intrinsic load leaves even less germane capacity. B1 is the same structural shape as R1, running in the corrosive direction.

The design implication is sharp. A chapter's first decision is not "what content to include" but "what extraneous load to exclude," because every unit of extraneous load the designer permits is a unit of germane load the learner cannot spend. This is why coherence — Mayer's first principle — is load-bearing in both senses of the word.

!!! mascot-thinking "Where the Three Theories Meet"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom the elephant thinking, one hoof raised">
    Dual Coding Theory says verbal and visual channels are separate. Multimedia Learning Theory says exploit that separation while avoiding redundancy. Cognitive Load Theory says the goal is to leave as much capacity as possible for germane processing. The three are not competing frameworks — they are progressively more prescriptive views of the same architecture. Hold them together and your design choices stop being a matter of taste.

## Design Implications for Intelligent Textbooks

The architecture in this chapter translates into a small set of design rules we'll use for every chapter, MicroSim, and admonition from here on. None of them is novel on its own; the collective discipline is what makes the difference.

| Design rule | Architectural justification |
|---|---|
| Pre-train vocabulary before the diagram that uses it | Reduces intrinsic load on the main task by moving term-learning to a separate, lower-load phase |
| Place labels on the parts they name, not in a legend | Spatial contiguity; avoids split-attention extraneous load |
| Use narration plus diagram, not on-screen text plus diagram | Modality principle; recruits both working-memory channels |
| Avoid decorative graphics and background sound | Coherence principle; prevents extraneous-load poaching |
| Keep MicroSim controls under seven | Respects the working-memory ceiling for interface state |
| Segment long explanations into learner-paced units | Segmenting principle; prevents overflow on dense content |
| Pair text with complementary (not duplicate) imagery | Dual coding benefit without redundancy penalty |
| Ask "why does this work?" immediately after a worked example | Forces elaboration; converts passive encoding to germane processing |
| Space revisits of prior-chapter concepts across the book | Supports consolidation and schema refinement |
| Flag novel material to the learner so they can slow down | Honors the intrinsic-load spike; lets them allocate capacity consciously |

The rules are boring, which is the point. Most instructional-design mistakes are not exotic; they are failures to apply a rule that was already on the list.

## A Critical-Thinking Prompt

Much of Cognitive Load Theory's evidence base comes from short-duration laboratory studies with specific populations — often high-school or university students learning mathematics and science topics where intrinsic load can be manipulated cleanly. A less-studied question is whether the intrinsic/extraneous/germane decomposition is cleanly measurable in the first place: several methodologists have argued that the three components are theoretically distinct but empirically hard to separate with current instruments, and that the ease of invoking them rhetorically exceeds the ease of measuring them rigorously.

*Which load-theory claim in this chapter would you apply most confidently to the design of your next MicroSim, and which would you hold more loosely?* Identify at least one claim where you would want to see multi-modal measurement evidence — subjective ratings, dual-task performance, and physiological data converging on the same conclusion — before betting a design decision on it. And consider the opposite challenge: *what would you need to see to believe that extraneous load does not, in fact, crowd out germane processing in a typical classroom?* Name one observation that would shift your prior.

## Common Misconceptions

A few misreadings of the memory architecture are common enough to call out directly.

- **"Working memory holds seven items."** Raw capacity for truly novel material is closer to four; the seven figure assumes chunking and rehearsal. Quote whichever number you want, but quote the caveat with it.
- **"Long-term memory is one big bucket."** Semantic, episodic, and procedural subsystems have different contents and different retrieval signatures; instructional moves should target the right one.
- **"More channels equals more learning."** Pairing text with a duplicate narration invokes the redundancy effect and *hurts* learning. Dual coding requires complementary information, not duplicate information.
- **"Extraneous load is just clutter."** It is anything the designer imposed that does not serve learning — including well-intentioned scaffolding that has outlived its usefulness and become noise.
- **"Cognitive load theory is just common sense."** The prediction that expert learners can be harmed by scaffolds that help novices — the expertise reversal effect — is not common sense; it is a counterintuitive empirical finding that has direct design consequences.

!!! mascot-encourage "If the Architecture Feels Dense"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Bloom the elephant offering encouragement">
    This chapter is genuinely dense — 25 concepts is a lot for one read. The architecture does not need to be memorized in one pass; it needs to be *available* when you design your next MicroSim or chapter. Come back to the load-budget equation and the three-stage model when you hit a design decision you can't resolve by taste. The structure is here to be re-entered, not to be finished.

## Retrieval Check

Close the tab and try these from memory. The struggle is diagnostic — where you stumble is the section to revisit.

1. **State** the three stages of memory and give one capacity estimate and one duration estimate for each. (Level: Remember.)
2. **Explain** why "Miller's 7 plus or minus 2" is a misquote, and give the corrected modern estimate for raw working-memory capacity. (Level: Understand.)
3. **Given** a MicroSim in which the narrator reads aloud the text that appears on screen, identify which Mayer principle is being violated and name the load consequence. (Level: Apply.)
4. **Decompose** the cognitive load of "learn to use a new IDE harness while reading its documentation in a second language" into intrinsic, extraneous, and germane components, and propose one design move that reduces the component most likely to overflow. (Level: Analyze.)
5. **Critique** the claim "adding more visual aids will make this chapter easier to learn." Name at least one empirical condition under which the claim is false, and name the principle that makes it false. (Level: Evaluate.)

## Bridge to Chapter 5

We now have the architecture: three stages, a working-memory bottleneck, separate verbal and visual channels, schemas that extend effective capacity, and a load budget that every design decision negotiates. What this architecture does not yet give us is durability. Encoded material fades; consolidated material reorganizes; retrieved material strengthens; un-retrieved material quietly disappears. The next chapter is about the dynamics of retention over time — the forgetting curve, the spacing effect, the testing effect, and the retrieval-practice moves that turn a freshly encoded schema into one the learner still has six months from now.

!!! mascot-celebration "Architecture Mapped — Next, We Make It Stick"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom the elephant celebrating with trunk raised">
    You now have the cognitive architecture and the load budget that every later chapter will implicitly negotiate. Remember the headline — encoded memory that isn't retrieved fades. Next up: the retention dynamics that turn fresh schemas into durable ones, and the retrieval-practice moves that make learning stick. See you in Chapter 5.
