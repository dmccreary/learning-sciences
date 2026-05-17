# Quiz: Pedagogical Mascots and Admonitions

Test your understanding of mascot persona design, visual identity, voice guides, admonition types, CSS styling, and narrative voice consistency with these review questions.

---

#### 1. What distinguishes a pedagogical mascot from a brand mascot?

<div class="upper-alpha" markdown>
1. A pedagogical mascot is always an animal; a brand mascot can be any character
2. A pedagogical mascot's every appearance serves a pedagogical function — orienting attention, normalizing struggle, or prompting retrieval — rather than a branding function
3. A pedagogical mascot appears on every page; a brand mascot appears only on the cover
4. A pedagogical mascot is always AI-generated; a brand mascot is always hand-drawn
</div>

??? question "Show Answer"
    The correct answer is **B**. A pedagogical mascot exists to change what the reader does next — pause, predict, retrieve, revise, or move on with more confidence. If an appearance does not prompt one of those actions, it is decoration, and decoration costs the reader attention without a return. A brand mascot exists to make the brand memorable. The distinction is sharper than it sounds and is the design criterion that separates signal from wallpaper.

    **Concept Tested:** Pedagogical Mascot

---

#### 2. In the mascot persona one-pager, why is the "knowledge stance" field particularly important?

<div class="upper-alpha" markdown>
1. It determines the mascot's color palette
2. It controls what the mascot is allowed to claim — preventing overclaiming in contested fields and hedging that wastes reader time
3. It specifies which chapters the mascot appears in
4. It sets the maximum word count for admonition text
</div>

??? question "Show Answer"
    The correct answer is **B**. The knowledge stance determines what the mascot is allowed to claim. A mascot that says "the research is clear" in a field where the research is mixed breaks trust; one that hedges every claim wastes time. Bloom's stance — "knows the field, thinks with the reader" — resolves this: Bloom names findings with their evidence level, flags what is contested, and co-investigates rather than pronounces. This field prevents the most serious credibility drift.

    **Concept Tested:** Mascot Persona

---

#### 3. Why must the mascot image be placed in the admonition body rather than in the title bar?

<div class="upper-alpha" markdown>
1. The body has more horizontal space for the image
2. MkDocs Material escapes HTML in the title bar, which would break the image rendering
3. The title bar cannot display any content at all
4. Images in the body load faster than images in the title
</div>

??? question "Show Answer"
    The correct answer is **B**. Material for MkDocs renders the title as text inside a colored bar, and HTML inside the title is escaped in many rendering paths. An image placed in the title either appears broken or replaces the title text with the raw `<img>` tag. Keeping the image in the body preserves both the title text and the picture, and the `class="mascot-admonition-img"` selector floats it left at the correct size.

    **Concept Tested:** Mascot Admonition

---

#### 4. What is the maximum number of mascot admonitions allowed per chapter, and why?

<div class="upper-alpha" markdown>
1. Twelve, to allow two per major section
2. Three, because working memory can only hold three items
3. Six, because more than six causes each appearance to lose signal value as readers learn to skim them
4. Unlimited, as long as each serves a pedagogical function
</div>

??? question "Show Answer"
    The correct answer is **C**. Total mascot admonitions per chapter stay at six or fewer. More than six and each appearance loses signal value — the reader learns to skim them, which destroys the effectiveness of the load-bearing ones. Additionally, no two admonitions may appear back-to-back; at least one real paragraph of prose must separate them. The constraint includes exactly one welcome at the top and one celebration at the end.

    **Concept Tested:** Narrative Voice Consistency

---

#### 5. Which four properties caused Microsoft's Clippy to fail as a pedagogical agent, according to the chapter's analysis?

<div class="upper-alpha" markdown>
1. Ugly design, slow animation, poor voice acting, and high cost
2. Uninvited interruption, poor relevance, high salience with low information, and no persistent exit
3. Small size, unclear speech, limited vocabulary, and black-and-white rendering
4. Complex installation, browser incompatibility, excessive memory usage, and slow loading
</div>

??? question "Show Answer"
    The correct answer is **B**. Clippy failed because it interrupted uninvited (breaking SDT autonomy), made poorly relevant suggestions (undermining trust), had high visual salience without matching informational value (negative signal-to-noise), and returned after being dismissed (converting dismissal into whack-a-mole). A pedagogical mascot inverts each: invited (author-placed), relevant (at pedagogical decision points), signal-proportional (one per real moment), and dismissible (static admonition the reader controls by scrolling).

    **Concept Tested:** Pedagogical Mascot

---

#### 6. The voice-consistency flywheel (R1) produces what cumulative benefit when the voice guide is enforced across chapters?

<div class="upper-alpha" markdown>
1. Chapters become shorter and easier to generate
2. The mascot's voice becomes predictable, reducing orienting load and building reader identification that increases re-engagement on hard pages
3. The mascot's visual identity improves with each chapter
4. The number of admonitions per chapter automatically increases
</div>

??? question "Show Answer"
    The correct answer is **B**. In the voice-consistency flywheel (R1), enforcing the voice guide keeps the voice consistent; consistency makes appearances predictable; predictability moves the mascot's rendering cost from extraneous load to germane signal; freed capacity builds reader identification (SDT relatedness); identified readers return to hard pages instead of abandoning them; visible returns motivate continued enforcement. Each trip around the loop makes the next chapter cheaper to author well.

    **Concept Tested:** Narrative Voice Consistency

---

#### 7. What is the correct relative path for the mascot image src attribute on a chapter page rendered at /chapters/12-mascots-admonitions/?

<div class="upper-alpha" markdown>
1. img/mascot/tip.png
2. ../img/mascot/tip.png
3. ../../img/mascot/tip.png
4. ../../../img/mascot/tip.png
</div>

??? question "Show Answer"
    The correct answer is **C**. MkDocs renders pages at directory URLs, so a chapter at `docs/chapters/12-mascots-admonitions/index.md` serves at `/chapters/12-mascots-admonitions/`. The path needs two `../` segments — one to climb out of `12-mascots-admonitions/` and one to climb out of `chapters/` — then descends into `img/mascot/`. Getting the depth wrong causes the image to silently fail to load with no build-log warning.

    **Concept Tested:** Mascot Admonition

---

#### 8. What content pattern must an encouragement admonition follow to be on-voice for Bloom?

<div class="upper-alpha" markdown>
1. Celebrate the reader's achievement with multiple exclamation points
2. Normalize the difficulty, name the learning-science mechanism, and point at a concrete next move
3. Summarize the key concepts from the previous section
4. Provide a link to additional reading material
</div>

??? question "Show Answer"
    The correct answer is **B**. The encouragement admonition pattern is: (1) normalize the difficulty ("this part often feels slippery on a first pass"), (2) name the mechanism ("that's the desirable difficulty working"), and (3) point at a concrete next move ("try explaining it out loud, then come back"). Generic "you can do it!" encouragement is off-voice because it addresses competence without giving the reader anything concrete to act on — it fails an SDT audit.

    **Concept Tested:** Encouragement Admonition

---

#### 9. Voice drift in a mascot takes three recognizable shapes. Which of the following is one of them?

<div class="upper-alpha" markdown>
1. Image resolution degradation across chapters
2. Pronoun drift — shifting from "let's" and "we" to "you must" and "you should"
3. Increasing chapter length over time
4. Changing the mascot's species midway through the book
</div>

??? question "Show Answer"
    The correct answer is **B**. Pronoun drift is one of three recognizable drift shapes. It occurs when later chapters shift from companion pronouns ("let's," "we") to instructor pronouns ("you must," "you should"), changing the relationship from companion to instructor and breaking SDT autonomy. The other two shapes are register drift (hype adjectives and Latinate verbs creeping in) and exclamation-point inflation. All three are caught by sampling welcome admonitions across chapters side-by-side.

    **Concept Tested:** Mascot Voice Guide

---

#### 10. The chapter identifies five footgun patterns specific to mascot design. What structural fix addresses the "decorative placement" footgun?

<div class="upper-alpha" markdown>
1. Increase the number of allowed admonitions per chapter to ten
2. A review criterion that every admonition must change what the reader does next — pause, predict, retrieve, or revise
3. Use only the warning admonition type throughout the book
4. Remove the mascot from chapters longer than 5,000 words
</div>

??? question "Show Answer"
    The correct answer is **B**. The decorative-placement footgun occurs when admonitions are added to "break up prose" rather than serve a pedagogical function. It is silent (renders fine), easy to trigger (any time the author wants visual variety), and produces delayed damage (trains readers to skip admonitions, destroying signal value). The structural fix is a review criterion requiring every admonition to change what the reader does next. "Break up prose" is not on that list.

    **Concept Tested:** Mascot Admonition
