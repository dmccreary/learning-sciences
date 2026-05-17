# Quiz: Graphic Novels and Short-Form Stories

Test your understanding of the twelve-panel story structure, historical figure selection, narrative transportation, image prompt engineering, and historical accuracy checking with these review questions.

---

#### 1. What is the primary memory advantage of a short-form graphic novel over expository prose for teaching the same concept?

<div class="upper-alpha" markdown>
1. Graphic novels use fewer words, reducing cognitive load
2. A narrative with a named character and setting can land in episodic memory, where it is remembered like a personal experience
3. Graphic novels are always more visually appealing than text
4. Readers process images faster than text in all situations
</div>

??? question "Show Answer"
    The correct answer is **B**. Expository prose lives in semantic memory, competing with every other fact the reader encountered that day. A narrative with a named character, setting, and stake can land in episodic memory — the system that stores events bound to time, place, and personal context. This distinction, grounded in Tulving's 1972 separation of semantic and episodic memory, is why a concept carried by a story can be remembered differently than the same concept stated as a fact.

    **Concept Tested:** Short-Form Narrative

---

#### 2. In the twelve-panel story structure, which panels constitute the rising action and what percentage of the story do they occupy?

<div class="upper-alpha" markdown>
1. Panels 1-4, occupying 33% of the story
2. Panels 4-8, occupying approximately 42% of the story
3. Panels 9-12, occupying 33% of the story
4. Panels 5-10, occupying 50% of the story
</div>

??? question "Show Answer"
    The correct answer is **B**. Rising action occupies panels 4-8 (42% of the story), making it the largest allocation. This is deliberate — rising action is where the concept gets taught through the protagonist's encounter with the problem's real difficulty. Shortchanging rising action produces stories where the insight arrives unearned. Setup occupies panels 1-3 (25%), climax panels 9-10 (17%), and resolution panels 11-12 (17%).

    **Concept Tested:** Twelve Panel Story

---

#### 3. Why does the pipeline overlay speech bubbles in HTML rather than rendering them inside the AI-generated image?

<div class="upper-alpha" markdown>
1. HTML speech bubbles load faster than image-embedded text
2. AI-generated text in images is unreliable (misspellings, garbled letterforms), HTML bubbles are accessible to screen readers, and they can be edited without regenerating the panel
3. Image generation models cannot produce speech bubbles at all
4. HTML overlays allow for animated speech bubbles
</div>

??? question "Show Answer"
    The correct answer is **B**. Text rendered inside AI-generated images is unreliable at the time of writing — models misspell words, mangle letterforms, and invent characters. HTML-overlaid speech bubbles solve three problems at once: they are typographically correct, they are accessible to screen readers (which announce dialogue with speaker differentiation), and they can be edited without regenerating the underlying panel image. The negative prompt "no text, no speech bubbles" enforces this separation.

    **Concept Tested:** Speech Bubble Design

---

#### 4. What is the "great man fallacy" in historical figure selection and how does the twelve-panel structure address it?

<div class="upper-alpha" markdown>
1. The fallacy of choosing only male historical figures; addressed by requiring gender diversity
2. The narrative habit of attributing collective scientific progress to individual heroes; addressed by reserving panel 5 for a second named collaborator
3. The assumption that only famous figures are worth depicting; addressed by requiring obscure figures
4. The belief that older historical figures are more important; addressed by requiring figures from the last century
</div>

??? question "Show Answer"
    The correct answer is **B**. The great man fallacy attributes collective, iterative scientific progress to individual heroes, which both distorts history and demotivates readers by implying contribution requires rare genius. The structural fix is panel 5 of the canonical arc, reserved for a second named person — a collaborator, mentor, or predecessor. A Lovelace story that names Babbage and Menabrea does the pedagogical work; one that treats Lovelace as a solitary visionary trades faithfulness for mythology.

    **Concept Tested:** Historical Figure Selection

---

#### 5. Narrative transportation, as defined by Green and Brock, creates what ethical risk for educational graphic novels?

<div class="upper-alpha" markdown>
1. Readers may become too emotionally invested in the historical figure
2. Transported readers engage in reduced counterarguing, meaning historically inaccurate claims can install as confident false beliefs
3. Transportation makes readers unable to distinguish fiction from reality permanently
4. Transported readers skip the rest of the chapter after the graphic novel
</div>

??? question "Show Answer"
    The correct answer is **B**. Green and Brock's research shows that transported readers engage in reduced counterarguing — they are less likely to mentally challenge claims while inside the story. This is exactly why narrative is an effective teaching tool, and exactly what makes it dangerous when claims are wrong. A historically inaccurate story, read with transportation, installs confident false beliefs the reader will defend against later correction. The structural fix is the historical accuracy check, not the abandonment of narrative.

    **Concept Tested:** Narrative Transportation

---

#### 6. An image prompt for a panel in the pipeline has four sections in a specific order. What is the correct order and why?

<div class="upper-alpha" markdown>
1. Style modifiers, scene, composition, character — because style sets the overall tone
2. Character description, scene and setting, composition, style modifiers and negative prompts — because character consistency is most regeneration-fragile
3. Composition, character, style, scene — because framing determines everything else
4. Scene, character, negative prompts, composition — because setting context first improves coherence
</div>

??? question "Show Answer"
    The correct answer is **B**. The four sections are: (1) character description (the style sheet, verbatim) because it is the most regeneration-fragile element, (2) scene and setting with era-specific details, (3) composition (shot type, camera angle, framing), and (4) style modifiers and negative prompts. Many models weight earlier tokens more heavily, so locking the character first prevents drift across twelve independently generated panels.

    **Concept Tested:** Image Prompt Engineering

---

#### 7. Which five steps constitute the historical accuracy check, and which step specifically prevents AI hallucination of quotations?

<div class="upper-alpha" markdown>
1. Spell check, grammar check, fact check, style check, and final review; spell check prevents hallucinations
2. Claim enumeration, source verification, quotation provenance, dramatic license disclosure, and representation audit; quotation provenance prevents hallucinated quotations
3. Image review, text review, layout review, color review, and final approval; text review catches hallucinations
4. Peer review, expert review, editor review, audience review, and final sign-off; expert review catches hallucinations
</div>

??? question "Show Answer"
    The correct answer is **B**. The five steps are: claim enumeration (listing all factual claims), source verification (matching each to a primary or well-sourced secondary reference), quotation provenance (requiring documented quotations or relabeling as paraphrase), dramatic license disclosure (flagging compressed or inferred scenes in footnotes), and representation audit (ensuring collaborators and predecessors appear). Step 3 — quotation provenance — specifically prevents the AI hallucination footgun where plausible-sounding but invented quotations are attributed to real historical figures.

    **Concept Tested:** Historical Accuracy Check

---

#### 8. What is the recommended approach for maintaining character visual consistency across twelve independently generated panels?

<div class="upper-alpha" markdown>
1. Generate all twelve panels in a single API call
2. Include a verbatim character style sheet (80-150 words) in every panel prompt, optionally paired with a reference image
3. Use the same random seed for all twelve generations
4. Generate one panel and use image editing to modify it for the other eleven
</div>

??? question "Show Answer"
    The correct answer is **B**. Since text-to-image models do not remember previous prompts, every panel prompt must include the full character style sheet verbatim. The redundancy is deliberate — it is the discipline that prevents drift. For most historical-figure stories, combining the style sheet with a single reference image hits the consistency-versus-cost sweet spot. More expensive approaches (IP-Adapter, LoRA fine-tunes) are warranted only for recurring characters or heavily scrutinized famous figures.

    **Concept Tested:** Character Design

---

#### 9. In panel composition, what is the purpose of varying shot types across the twelve panels rather than using the same medium shot throughout?

<div class="upper-alpha" markdown>
1. Varying shots makes the generation cheaper by reducing image complexity
2. It creates a visual rhythm that matches the narrative rhythm, guiding attention from establishing context through emotional intensity to resolution
3. Different shot types are required by different image generation models
4. Medium shots are not supported by most AI image generators
</div>

??? question "Show Answer"
    The correct answer is **B**. Varying shot types — wide establishing shots for setup, medium shots for context, close-ups for emotional turns, extreme close-ups for the conceptual insight — creates a visual rhythm that matches the narrative arc. A story told in twelve identical medium shots reads as flat. The shot-type choice costs nothing in the prompt (a few words) and changes the entire reading cadence, guiding attention to rise through setup, peak at the climax, and release through resolution.

    **Concept Tested:** Panel Composition

---

#### 10. According to the chapter, where does the concept being taught actually live within the twelve-panel story arc?

<div class="upper-alpha" markdown>
1. In panel 1, where it is introduced to the reader immediately
2. In panel 12, where it is explicitly named in the bridge to the reader
3. In the rising-action panels (4-8), where the protagonist encounters the concept's real difficulty
4. In the climax panel (9), where the key insight is revealed
</div>

??? question "Show Answer"
    The correct answer is **C**. The concept lives in the rising-action panels where the protagonist encounters the concept's difficulty — not in the climax panel where the problem is solved. Readers remember the moment where the problem gets real, not the moment the problem resolves. Designing the rising action for cognitive fidelity — showing the real difficulty the concept addresses — is the move that makes the story pedagogically valuable. The climax follows naturally from well-constructed rising action.

    **Concept Tested:** Story Arc Structure
