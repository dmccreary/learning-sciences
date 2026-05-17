# Quiz: Measurement and Feedback

Test your understanding of formative and summative assessment, feedback types, rubrics, Item Response Theory, diagnostic assessment, metacognition, learning analytics, and the privacy inflection point with these review questions.

---

#### 1. What is the primary distinction between formative and summative assessment?

<div class="upper-alpha" markdown>
1. Formative assessment uses multiple-choice items; summative uses essay items
2. Formative assessment is for learning (adjusting instruction); summative assessment is of learning (certifying achievement)
3. Formative assessment occurs only at the start of a course; summative occurs only at the end
4. Formative assessment is graded; summative assessment is ungraded
</div>

??? question "Show Answer"
    The correct answer is **B**. Formative assessment is assessment *for* learning — measurement during instruction whose purpose is to feed information back into the next teaching move. Summative assessment is assessment *of* learning — measurement at the end of a unit to certify achievement. The same item can play either role depending on how results are used: a quiz returned with remediation prompts and re-take allowed is formative; the same quiz graded and never revisited is summative.

    **Concept Tested:** Formative Assessment

---

#### 2. In the Rasch one-parameter logistic model, what does P(correct) equal when a learner's ability (θ) exactly matches the item's difficulty (b)?

<div class="upper-alpha" markdown>
1. 0.0
2. 1.0
3. 0.5
4. 0.75
</div>

??? question "Show Answer"
    The correct answer is **C**. In the Rasch model, P(θ, b) = 1 / (1 + e^-(θ-b)). When θ = b, the exponent becomes zero, e^0 = 1, and P = 1/(1+1) = 0.5. This means the item is calibrated to the learner's edge of ability — a 50% chance of getting it right. This property is why the model places item difficulty and learner ability on the same scale, enabling principled adaptive testing where items are selected near the learner's current ability estimate.

    **Concept Tested:** Item Response Theory

---

#### 3. What makes a diagnostic assessment item different from a standard multiple-choice item?

<div class="upper-alpha" markdown>
1. Diagnostic items have more answer choices than standard items
2. Each distractor in a diagnostic item corresponds to a specific documented misconception, making wrong answers informative
3. Diagnostic items are always harder than standard items
4. Diagnostic items can only be used in summative assessment
</div>

??? question "Show Answer"
    The correct answer is **B**. In diagnostic assessment, each distractor is authored against a documented misconception from the discipline's education-research literature, so the pattern of wrong answers across a cohort reveals not just *that* students are struggling but *how* they are struggling. This produces a misconception map that drives specific instructional moves — a far richer signal than standard items whose wrong answers merely need to be plausible.

    **Concept Tested:** Diagnostic Assessment

---

#### 4. According to Zimmerman's cyclical model, what are the three phases of self-regulated learning?

<div class="upper-alpha" markdown>
1. Encoding, consolidation, retrieval
2. Attention, retention, reproduction
3. Forethought, performance, self-reflection
4. Planning, execution, grading
</div>

??? question "Show Answer"
    The correct answer is **C**. Zimmerman's self-regulated learning (SRL) model describes three cyclical phases: forethought (goal-setting, strategic planning, self-efficacy activation), performance (self-control, self-observation, self-instruction during the task), and self-reflection (self-judgment against the goal, self-reaction, attribution). The cycle is iterative — the reflection phase of one episode feeds into the forethought phase of the next. Intelligent textbooks can support SRL by prompting prediction before and reflection after each section.

    **Concept Tested:** Self-Regulated Learning

---

#### 5. Goodhart's Law states that "when a measure becomes a target, it ceases to be a good measure." How does this apply to A/B testing in education?

<div class="upper-alpha" markdown>
1. It means A/B testing should never be used in educational contexts
2. Optimizing a chapter against a single metric like quiz score can narrow learning or degrade the test itself, requiring guardrail metrics to detect gaming
3. It only applies to standardized testing, not to intelligent textbooks
4. It means all assessment metrics are inherently unreliable
</div>

??? question "Show Answer"
    The correct answer is **B**. When a chapter is relentlessly optimized against a single metric (e.g., end-of-chapter quiz score), either the chapter gets rewritten to teach to the quiz specifically (narrowing learning) or the quiz drifts toward easier items (degrading the measure). The structural fix is triangulation: pair the primary metric with guardrail metrics (transfer performance on novel items, time-on-page) that would move in the wrong direction if the primary metric were being gamed.

    **Concept Tested:** A/B Testing in Learning

---

#### 6. What is the "privacy inflection point" described in this chapter?

<div class="upper-alpha" markdown>
1. The moment when a textbook becomes too complex to maintain
2. The threshold where an intelligent textbook transitions from manipulating content-level data (Level 2) to storing individual student data (Level 3+), triggering regulatory obligations
3. The point at which learning analytics become statistically significant
4. The boundary between formative and summative assessment
</div>

??? question "Show Answer"
    The correct answer is **B**. The privacy inflection point is where a textbook crosses from Level 2 (Interactive, aggregate analytics only) to Level 3+ (Adaptive, storing individual student data). At that threshold, regulations including FERPA, COPPA, GDPR, and CCPA/CPRA attach, bringing obligations for data minimization, consent, retention limits, access and deletion rights, encryption, and audit logging. The crossing is often made accidentally — a cached session ID or a quiz engine logging click trails.

    **Concept Tested:** Privacy Inflection Point

---

#### 7. Which feedback type turns an assessment item into a second instructional unit by telling the learner not just whether their answer was correct, but what the correct reasoning would have been?

<div class="upper-alpha" markdown>
1. Immediate feedback
2. Delayed feedback
3. Corrective feedback
4. Summative feedback
</div>

??? question "Show Answer"
    The correct answer is **C**. Corrective feedback tells the learner not only whether their response was correct but what the correct response would have been and why — naming the reasoning step where their path diverged from the canonical solution. This turns the assessment into a miniature worked example at the moment of maximum receptivity. A quiz that says "wrong — try again" teaches almost nothing; one that explains the divergent reasoning teaches the concept itself.

    **Concept Tested:** Corrective Feedback

---

#### 8. An analytic rubric differs from a holistic rubric in what key way?

<div class="upper-alpha" markdown>
1. Analytic rubrics are faster to apply than holistic rubrics
2. Analytic rubrics score multiple criteria independently, producing richer diagnostic signal for per-dimension remediation
3. Holistic rubrics are always more reliable than analytic rubrics
4. Analytic rubrics can only be used for writing assignments
</div>

??? question "Show Answer"
    The correct answer is **B**. An analytic rubric scores multiple criteria independently — a writing assignment might score thesis, evidence, organization, and mechanics on separate scales. This produces richer diagnostic signal (you can see which dimension is weak) at the cost of more scoring time. A holistic rubric scores the work as a single judgment, which is faster but collapses the diagnosis into one number. If the rubric feeds a feedback loop for instructional adjustment, go analytic; if it certifies a final product, holistic may suffice.

    **Concept Tested:** Assessment Rubric

---

#### 9. Why does the chapter argue that data minimization is a design principle rather than merely a legal footnote?

<div class="upper-alpha" markdown>
1. Because collecting less data makes the textbook load faster
2. Because every per-student field is a future compliance obligation and every record retained past its operational need is a future breach risk
3. Because data minimization is only required by GDPR, not by other regulations
4. Because aggregate data is always more accurate than individual data
</div>

??? question "Show Answer"
    The correct answer is **B**. Data minimization — collecting only what is necessary and retaining it only for the minimum required time — short-circuits most of the downstream regulatory load. Every per-student field creates a compliance obligation under FERPA, COPPA, GDPR, and CCPA/CPRA; every record retained past its operational need increases breach exposure. The principled design move is to default to not collecting: if a feature can be served by aggregated anonymized signals, serve it that way.

    **Concept Tested:** Data Minimization

---

#### 10. In the formative-feedback flywheel (loop R1), what role does metacognitive calibration play?

<div class="upper-alpha" markdown>
1. It replaces the need for external assessment entirely
2. It drives the learner to seek more formative checkpoints because they have learned that the checkpoints pay off
3. It causes learners to avoid assessment to protect their self-image
4. It only develops through summative high-stakes testing
</div>

??? question "Show Answer"
    The correct answer is **B**. In the formative flywheel (R1), frequent low-stakes formative checks produce diagnostic signals that drive instructional adjustments, raising performance. Improved performance sharpens metacognitive calibration — the learner's sense of what they know and don't know becomes more accurate. Calibrated learners seek out more formative checkpoints because they have learned that the checkpoints produce real learning gains, closing the reinforcing loop. This is why formative assessment and metacognitive growth are structurally coupled.

    **Concept Tested:** Metacognition
