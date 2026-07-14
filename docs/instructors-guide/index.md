---
title: Instructor's Guide
description: A complete instructor's guide to Learning Sciences for Intelligent Textbook Design — every feature explained, classroom and workshop tips, licensing, customization, and analytics. No prior technical knowledge assumed.
---

# Instructor's Guide

Welcome to the instructor's guide for *Learning Sciences: An Interactive Intelligent Textbook on the Emerging Field of Learning Sciences*. This guide explains every feature of the textbook, how to use it with your learners, and how to adapt it for your own course. No prior technical knowledge is assumed — every technical term is defined before it is used.

!!! mascot-welcome "A Note from Bloom"
    <img src="../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom the elephant waving welcome">
    This book is a little unusual — it teaches the learning sciences *and* it is itself an example of the ideas it describes. As you plan your course, notice how each feature here maps to a research principle your learners will study. Let's build a mental model of how the pieces fit together.

## About This Interactive Intelligent Textbook

### What Is an Intelligent Textbook?

An **intelligent textbook** is a digital textbook that goes beyond static text and images. It includes interactive simulations, self-check quizzes, a searchable glossary, and a structured map of how concepts relate to each other. The goal is to give learners a richer, more engaging experience than a traditional printed textbook.

This particular book has a reflexive quality worth naming up front: it teaches readers *how to build* intelligent textbooks with AI, so the book's own production pipeline — mascots, MicroSims, learning graphs, and agent skills — is part of the curriculum. When your learners study Chapter 12 on pedagogical mascots, they are studying the very mascot (Bloom) who has been guiding them since Chapter 1.

### The Five Levels of Intelligent Textbooks

Not all digital textbooks are created equal. We categorize intelligent textbooks into five levels based on how interactive and adaptive they are:

<iframe src="https://dmccreary.github.io/intelligent-textbooks/sims/book-levels/main.html" height="500px" scrolling="no"
  style="overflow: hidden;"></iframe>

| Level | Name | Description | Example Features |
|-------|------|-------------|-----------------|
| **Level 1** | Static Digital | A PDF or basic web version of a print textbook | Text and images only, no interactivity |
| **Level 2** | Interactive | Adds interactive elements like simulations, quizzes, and searchable glossaries | MicroSims, self-check quizzes, concept search |
| **Level 3** | Adaptive | Adjusts content based on individual learner performance | Personalized learning paths, difficulty adjustment |
| **Level 4** | AI-Assisted | Includes an AI tutor that can answer learner questions | Chatbot integration, automated feedback |
| **Level 5** | Fully Adaptive AI | Continuously learns from learner interactions and optimizes the experience | Real-time content generation, predictive analytics |

**This textbook is a Level 2 Intelligent Textbook — deliberately so.** The book teaches learners to build interactive textbooks with learning graphs, MicroSims, and path recommendations that require **no collection of individual student data**. The jump from Level 2 to Level 3 is what the book calls the *privacy inflection point*: the moment a system stores individual learning histories, it enters a regulated domain governed by FERPA, COPPA, GDPR, and state laws such as CCPA/CPRA. This book names that boundary, teaches learners to recognize it, and stops there on purpose. As an instructor, you can use the book with confidence that it does not ask your learners to build data-collection systems.

### What Makes This Textbook Different

- **Interactive MicroSims** let learners manipulate models directly in their browser — no software installation required.
- **A practical-toolkit framing** — the book treats the learning sciences not as abstract theory but as a working toolkit for building AI-augmented content. Each research finding is paired with a concrete design decision.
- **A systems-thinking and critical-thinking emphasis** — every chapter helps learners distinguish evidence-based strategies from popular myths, and asks whether a claimed effect is genuinely *causal* or merely *correlational*. Causal loop diagrams appear throughout to show how motivation, memory, practice, and feedback influence one another.
- **A learning graph** — a visual map showing how all 230 concepts connect and build on each other.
- **Bloom the Elephant** — a friendly mascot character (called a *pedagogical agent*) who guides learners through each chapter with tips, encouragement, and key insights.
- **Completely free and open source** — licensed under Creative Commons for non-commercial use.

## Using the Chapters

### Chapter Structure

The textbook contains **15 chapters** organized in a deliberate sequence. Each chapter builds on concepts from earlier chapters, so learners should work through them in order:

| Chapters | Topic Area |
|----------|-----------|
| 1–2 | Foundations — the field, its parent disciplines, Bloom's Taxonomy, and the Seven Domains framework |
| 3–9 | The Seven Domains in depth — motivation and engagement, cognitive architecture and load, retention, application and transfer, expertise, measurement and feedback, and learning conditions |
| 10–14 | Building intelligent textbooks with AI — textbook architecture, MicroSims, pedagogical mascots, graphic novels, and AI agent skills |
| 15 | Capstone project and deployment |

### What Each Chapter Contains

Every chapter follows a consistent structure:

1. **YAML front matter** — Metadata at the top of each chapter file (title, description, version). Learners don't see this; it's used by search engines and the website builder.
2. **Summary** — A brief overview of what the chapter covers and what learners will be able to do.
3. **Concepts covered** — The specific concepts addressed in the chapter, drawn from the learning graph.
4. **Prerequisites** — Links to prior chapters that should be completed first.
5. **Welcome from Bloom** — A mascot admonition that introduces the chapter topic in Bloom's warm, unhurried voice.
6. **Main content** — The core instructional material, written at a graduate and adult-learner reading level. Includes tables, real-world examples, causal loop diagrams, and embedded MicroSims.
7. **Mascot admonitions** — Throughout the chapter, Bloom appears up to five or six times to highlight key insights (thinking), offer practical tips (tip), provide encouragement on harder concepts (encourage), and warn about common mistakes (warning).
8. **Key takeaways** — A summary of the most important concepts, preceded by a celebration from Bloom.
9. **Critical thinking prompts** — Questions that ask learners to evaluate, critique, or extend a claim rather than simply recall it.
10. **Practice questions** — Open-ended questions for discussion or written responses.

### Suggested Classroom and Workshop Use

This book suits graduate seminars, professional-development workshops, and self-paced adult learning. The suggestions below use "session" to mean a class meeting, workshop block, or study session.

- **Before the session**: Assign the chapter as reading. The MicroSims keep learners engaged during independent reading and give them something concrete to bring to discussion.
- **During the session**: Project a MicroSim and ask learners to predict what will happen when you change a slider, then test the prediction together. This "predict, then observe" move is itself a retrieval-practice technique the book teaches.
- **After the session**: Assign the practice questions and critical-thinking prompts. Use the chapter quiz as a quick, low-stakes formative check.
- **Pacing**: Each chapter is designed for roughly one to two sessions (about two to three hours of instruction plus independent reading). Chapters 10–15, which are project-oriented, may take longer because learners are building artifacts of their own.

!!! mascot-thinking "Model the Method"
    <img src="../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom thinking">
    When you run a MicroSim and ask learners to predict first, you are demonstrating the testing effect live. Naming the technique out loud — "notice that predicting *before* you see the answer is what makes this stick" — turns a demo into a lesson about learning itself.

## Using the MicroSims

### What Is a MicroSim?

A **MicroSim** (short for "micro-simulation") is a small, interactive simulation that runs directly in a web browser. Learners don't need to install any software — MicroSims work on any device with a modern web browser (Chrome, Firefox, Safari, Edge).

Each MicroSim lets learners manipulate one or more variables (using sliders, buttons, or drag-and-drop) and immediately see how the model responds. This "learn by doing" approach helps learners build intuition for abstract concepts.

### How MicroSims Are Embedded

MicroSims appear within chapter text as rectangular interactive areas. They are embedded using **iframes** — a web technology that displays one web page inside another. You don't need to understand how iframes work; the MicroSims load automatically when learners view the chapter page.

### Types of MicroSims

The textbook includes more than 60 MicroSims built with different visualization technologies:

| Technology | What It's Good For | Example MicroSims |
|-----------|-------------------|-------------------|
| **p5.js** | Interactive animations with sliders and buttons | Baddeley Working Memory, ARCS Four Pillars, Forgetting Curve Simulator |
| **Chart.js** | Bar charts, line charts, pie charts | Aggregate Quality Dashboard |
| **Plotly** | Advanced interactive charts with hover details | Library Decision Tree |
| **vis-network** | Network diagrams showing connections | Learning Graph Viewer, CLD Viewer, Bjork Storage Dynamics |

Many of the p5.js MicroSims render **causal loop diagrams** — pictures that show how variables like motivation, effort, and mastery reinforce or balance one another over time. These pair naturally with the systems-thinking prompts in each chapter.

### Tips for Using MicroSims in Class

1. **Project them on a screen** — MicroSims are designed to be visible on a projector. Have learners call out predictions before you move a slider.
2. **Let learners explore independently** — After a demonstration, give learners five to ten minutes to experiment on their own devices.
3. **Use the "Reset" button** — Every MicroSim has a reset button. Encourage learners to reset and try different scenarios.
4. **Connect to the text** — Each MicroSim is placed near the concept it illustrates. After exploring the sim, have learners re-read the surrounding text.
5. **Offline access** — MicroSims require an internet connection unless you have built the site locally (see "Customizing Your Own Textbook" below).

!!! mascot-tip "Bloom's Tip: Embed MicroSims Anywhere"
    <img src="../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom shares a tip">
    You can add any MicroSim to **any web page** — a Google Site, a WordPress blog, a learning management system like Canvas or Schoology, or even a plain HTML file. Just paste a single line of HTML:

    ```html
    <iframe src="https://dmccreary.github.io/learning-sciences/sims/YOUR-MICROSIM-NAME/main.html"
        width="100%" height="450px"
        scrolling="no">
    </iframe>
    ```

    Replace `YOUR-MICROSIM-NAME` with the name of any MicroSim from the [MicroSims list](../sims/index.md). That's it — one line of code and your learners have an interactive simulation on any page you control.

### MicroSim Specifications

Within each chapter, you'll often find a collapsible **details** section below a MicroSim. Click to expand and see the full specification, including:

- **Bloom's Taxonomy level** — What cognitive level the MicroSim targets (Remember, Understand, Apply, Analyze, Evaluate, Create).
- **Learning objective** — What learners should be able to do after using the MicroSim.
- **Interactive controls** — What sliders, buttons, and inputs are available.
- **Default parameters** — The starting values when the MicroSim loads.

These specifications are useful for lesson planning and for understanding the pedagogical intent behind each simulation.

## Using the Glossary

### What Is the Glossary?

The **glossary** is an alphabetical list of the key terms used in the textbook — 222 terms in all — each with a precise, concise definition. It serves as a quick-reference dictionary for learners encountering unfamiliar vocabulary. The definitions follow the ISO 11179 metadata standard: each one is precise, non-circular, and does not begin with the term it defines.

### How to Access the Glossary

- Click **"Glossary"** in the left navigation sidebar from any page.
- Use the browser's built-in search (<kbd>Ctrl</kbd>+<kbd>F</kbd> on Windows/Linux, <kbd>Cmd</kbd>+<kbd>F</kbd> on Mac) to find a specific term on the glossary page.
- Use the site-wide **search bar** at the top of any page to search for a term across the entire textbook.

### Tips for Using the Glossary in Class

- **Vocabulary preview** — Before starting a new chapter, have learners look up the key terms to build familiarity.
- **Definition matching** — Create a warm-up where learners match glossary definitions to terms from the current chapter.
- **Learner-generated definitions** — After reading a chapter, have learners write their own definitions, then compare with the glossary. The gap between the two is a useful diagnostic.
- **Glossary quizzes** — Use glossary terms for quick formative checks (flash cards, quiz games, and the like).

## Using the FAQ

### What Is the FAQ?

The **FAQ** (Frequently Asked Questions) is a curated list of common questions learners ask about the learning sciences, organized by topic. Each question includes a clear, concise answer written at the same reading level as the chapters.

### How the FAQ Is Organized

The FAQ covers questions across all 15 chapters. Questions are grouped by topic area to make browsing easy.

### Tips for Using the FAQ in Class

- **Discussion starters** — Pick two or three FAQ questions at the start of a session and have learners discuss before revealing the answer.
- **Homework support** — Point learners to the FAQ when they have questions outside of session hours.
- **Extension reading** — The FAQ often covers angles not addressed in the main chapter text, making it good supplementary material.
- **Review** — Learners can use the FAQ as a study guide before assessments.

## Using the Quizzes

### What Are the Quizzes?

Each of the 15 chapters has an accompanying **quiz page** with multiple-choice questions designed for self-assessment. Quizzes test understanding of the concepts covered in that chapter and are aligned to specific items from the learning graph.

### How Quizzes Work

- Quizzes are accessed by clicking the **"Quiz"** link under each chapter in the left navigation.
- Each quiz contains multiple-choice questions at varying Bloom's Taxonomy levels.
- Questions are presented as expandable sections — learners can click to reveal the answer and explanation after attempting the question.
- Quizzes are **not graded automatically** — they are formative self-check tools, not summative assessments.

### Tips for Using Quizzes in Class

- **Exit tickets** — Have learners complete the quiz at the end of a session as a quick check for understanding.
- **Pre-reading check** — Assign the quiz before the chapter to see what learners already know (a diagnostic assessment).
- **Post-reading review** — Use the quiz after reading to identify concepts that need re-teaching.
- **Collaborative quiz** — Have learners work in pairs to discuss each question before revealing the answer.
- **Custom assessments** — Use the quiz questions as a bank to build your own tests. The questions are openly licensed (see "Understanding the License" below).

### Bloom's Taxonomy Levels

Each quiz question is tagged with a **Bloom's Taxonomy** level. Bloom's Taxonomy is a framework that classifies thinking skills from simple to complex:

| Level | Name | What It Means | Example Verb |
|-------|------|--------------|-------------|
| L1 | Remember | Recall facts and definitions | Define, list, name |
| L2 | Understand | Explain concepts in your own words | Explain, describe, compare |
| L3 | Apply | Use concepts to solve problems | Calculate, demonstrate, solve |
| L4 | Analyze | Break down and examine relationships | Differentiate, organize, compare |
| L5 | Evaluate | Make judgments based on criteria | Assess, argue, justify |
| L6 | Create | Produce original work or solutions | Design, construct, propose |

A well-balanced assessment includes questions across multiple levels. The quizzes in this textbook primarily target levels L1–L4, with the critical-thinking prompts in each chapter reaching toward L5–L6 — which is exactly where the book wants your learners to spend their effort.

## Using the References

### What Are the References?

The book includes a curated **references** page with high-quality sources for further reading. References prioritize Wikipedia articles for accessibility and reliability, supplemented by authoritative books and research papers.

### How References Are Organized

Each reference includes:

- **Title** — The name of the source.
- **URL** — A clickable link to the source.
- **Relevance** — A brief description of why this source is useful and how it connects to the book's content.

### A Note About Link Rot

**Link rot** is when a web link stops working because the page has been moved, renamed, or deleted. This is a common problem with any resource that links to external websites. While we prioritize Wikipedia (which has very stable URLs), some links may become outdated over time.

If you or your learners encounter a broken link:

1. Try searching for the article title on the source website.
2. Use the [Wayback Machine](https://web.archive.org/) to find archived versions of the page.
3. Report the broken link using GitHub Issues (see "Feedback" below).

## Feedback

### Reporting Issues and Suggestions

This textbook is an open-source project hosted on **GitHub**, a website where software and content projects are developed collaboratively. You don't need to understand programming to report a problem or suggest an improvement.

### What Is a GitHub Issue?

A **GitHub Issue** is like a support ticket — a way to report a bug, suggest an improvement, or ask a question. Each issue gets a unique number and can be discussed by the project team and community.

### How to Submit Feedback

1. Go to the textbook's GitHub repository: [dmccreary/learning-sciences](https://github.com/dmccreary/learning-sciences).
2. Click the **"Issues"** tab at the top of the page.
3. Click the green **"New issue"** button.
4. Give your issue a clear title (for example, "Broken link in Chapter 5 references" or "Suggestion: add a MicroSim for interleaving").
5. In the description, provide as much detail as possible:
    - Which page or chapter has the problem.
    - What you expected to see versus what you actually see.
    - Your browser and device, if relevant.
6. Click **"Submit new issue"**.

You will need a free GitHub account to submit issues. If you prefer not to create an account, you can email feedback to the author using the [contact page](../contact.md).

### Types of Feedback Welcome

- **Typos and errors** — factual mistakes, spelling errors, broken formatting.
- **Broken links** — URLs that no longer work.
- **MicroSim bugs** — simulations that don't load or behave unexpectedly.
- **Content suggestions** — topics that should be covered, examples that could be improved.
- **Accessibility issues** — content that is difficult to read or navigate for learners with disabilities.

## Understanding the License

### What Is a Creative Commons License?

A **license** is a legal document that explains what others are allowed to do with a piece of work. A **Creative Commons (CC) license** is a standardized, easy-to-understand license used for educational and creative content. It tells you exactly what permissions you have without needing a lawyer.

### This Textbook's License

This textbook uses the **CC BY-NC-SA 4.0** license. Here's what each part means:

| Code | Full Name | What It Means |
|------|-----------|---------------|
| **CC** | Creative Commons | A standard open license |
| **BY** | Attribution | You must give credit to the original author |
| **NC** | Non-Commercial | You cannot use the material to make money |
| **SA** | Share-Alike | If you modify the material, you must share it under the same license |
| **4.0** | Version 4.0 | The version of the license (the current standard) |

### What You CAN Do

- **Copy** the entire textbook or individual chapters for your learners.
- **Share** the textbook link with other instructors, learners, or colleagues.
- **Print** chapters for classroom use.
- **Modify** the content — add your own examples, remove sections, change the order.
- **Translate** the content into other languages.
- **Create derivative works** — build your own version of the textbook based on this one.

### What You CANNOT Do

- **Sell** the textbook or charge learners for access.
- **Remove attribution** — you must credit the original author (Dan McCreary).
- **Use a different license** — if you modify and share, it must remain CC BY-NC-SA 4.0.
- **Claim it as your own work** — the attribution requirement means you must acknowledge the original source.

For the full legal text, see the [Creative Commons License](../license.md) page.

## Customizing Your Own Textbook

One of the most valuable features of this textbook is that you can create your own customized version — which is, after all, the skill the book is teaching. This section explains how, step by step.

### Key Technical Terms

Before we begin, here are some terms you'll need to understand:

- **Repository (repo)** — A folder on GitHub that contains all the files for a project. Think of it as the project's home directory.
- **Git** — A version-control tool that tracks changes to files. It lets you see what changed, when, and by whom.
- **Clone** — Making a complete copy of a repository on your own computer.
- **Fork** — Making a complete copy of a repository on your own GitHub account (it stays on GitHub, not your computer).
- **MkDocs** — The software that converts the textbook's Markdown files into a website. You don't need to learn MkDocs deeply — just enough to make basic changes.
- **Markdown** — A simple text-formatting language. If you can write an email, you can write Markdown. `**bold**` makes **bold**, `# Heading` makes a heading, and `-` makes a bullet point.
- **mkdocs.yml** — The main configuration file for the textbook website. It controls the site title, navigation structure, colors, and which features are enabled.

### Step 1: Create a GitHub Account

If you don't already have one, go to [github.com](https://github.com) and create a free account.

### Step 2: Fork or Clone the Repository

**Option A: Fork (easier, stays on GitHub)**

1. Go to [dmccreary/learning-sciences](https://github.com/dmccreary/learning-sciences).
2. Click the **"Fork"** button in the upper-right corner.
3. This creates a copy in your own GitHub account that you can edit.

**Option B: Clone (more control, works on your computer)**

1. Install Git on your computer ([git-scm.com](https://git-scm.com/)).
2. Open a terminal (Command Prompt on Windows, Terminal on Mac).
3. Run this command:

```bash
git clone https://github.com/dmccreary/learning-sciences.git
```

This downloads the entire textbook to your computer.

### Step 3: Make Changes

All content files are in the `docs/` folder. They are written in **Markdown** (`.md` files) — plain text files with simple formatting. You can edit them with any text editor.

#### Changing the Title and Description

Open `mkdocs.yml` and edit these lines:

```yaml
site_name: "Your Custom Textbook Title"
site_description: "Your description here"
site_author: "Your Name"
```

#### Changing the Colors

In `mkdocs.yml`, find the `palette` section:

```yaml
theme:
  palette:
    primary: 'blue'    # Change to: red, purple, teal, green, etc.
    accent: 'orange'   # Change the accent color
```

MkDocs Material supports these primary colors: red, pink, purple, deep purple, indigo, blue, light blue, cyan, teal, green, light green, lime, yellow, amber, orange, deep orange, brown, grey, blue grey.

#### Changing the Logo

Replace the file `docs/img/mascot/neutral.png` — which currently serves as the header logo — with your own logo image (PNG format, roughly 128×128 pixels). If you design your own mascot, Chapter 12 walks through the full process.

### Step 4: Preview Your Changes Locally

1. Install Python (version 3.8 or newer) from [python.org](https://python.org).
2. Install MkDocs and the Material theme:

```bash
pip install mkdocs mkdocs-material
```

3. Navigate to the project folder and start the preview server:

```bash
cd learning-sciences
mkdocs serve
```

4. Open your browser to `http://127.0.0.1:8000/learning-sciences/` to see your customized version.

The preview server watches for file changes. When you edit and save a Markdown file, the page refreshes automatically in your browser.

### Step 5: Publish Your Version

To publish your customized textbook as a free website using GitHub Pages:

```bash
mkdocs gh-deploy
```

This command builds the website and publishes it to `https://YOUR-USERNAME.github.io/learning-sciences/`. The process takes about one to two minutes.

## Customizing Your Analytics

### What Is Web Analytics?

**Web analytics** is the process of measuring how visitors use a website — which pages they visit, how long they stay, and where they come from. For an educational textbook, analytics can help you understand which chapters learners read most, which MicroSims they interact with, and where they might be struggling.

### Google Analytics

This textbook includes **Google Analytics** — a free service from Google that tracks website visits. The author's analytics property is already configured. If you create your own fork, you'll want to set up your own so the data flows to your account rather than the original author's.

#### Setting Up Your Own Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com/) and sign in with a Google account.
2. Create a new **property** (Google's term for a tracked website).
3. Google will give you a **Measurement ID** — a code that looks like `G-XXXXXXXXXX`.
4. In your `mkdocs.yml`, update this section:

```yaml
extra:
  analytics:
    provider: google
    property: G-YOUR-MEASUREMENT-ID
```

5. Rebuild and deploy your site. Analytics data will start appearing within 24 to 48 hours.

#### What You Can Learn from Analytics

- **Which chapters are most and least visited** — helps you identify where learners might be skipping content.
- **Average time on page** — longer times may indicate engagement or confusion.
- **Device breakdown** — what percentage of learners use phones versus computers.
- **Geographic distribution** — where your learners are accessing from.
- **Search terms** — what learners search for on your site.

### xAPI Monitoring (Advanced)

**xAPI** (Experience API, also called "Tin Can API") is an advanced standard for tracking detailed learning activities — not just page views, but specific interactions like "learner moved a slider to position X" or "learner answered quiz question 3 correctly."

The book introduces xAPI conceptually in its discussion of the Level 2 → Level 3 privacy boundary. It is worth reading Chapter 8 and the course description's privacy section before you consider any of the following.

#### What Is an LRS?

An **LRS** (Learning Record Store) is a database that stores xAPI learning records. Think of it as a specialized analytics system designed for education. If you use an LRS, you can track granular, individual learning data — and this is precisely the step that moves a project from Level 2 to Level 3.

#### Important: Regulatory Considerations

Before collecting any student-specific learning data, be aware of these regulations — the same ones the book teaches learners to recognize:

- **FERPA** (Family Educational Rights and Privacy Act) — U.S. federal law that protects student education records. If you collect data that can identify individual students, you must comply with FERPA.
- **COPPA** (Children's Online Privacy Protection Act) — U.S. federal law that applies to children under 13. If any of your learners are under 13, additional restrictions apply.
- **State laws** — Many U.S. states have additional student-privacy laws, such as California's CCPA/CPRA.
- **GDPR** (General Data Protection Regulation) — European Union law that applies if any of your learners are in the EU.

**Recommendation**: The Google Analytics setup described above is anonymous by default — it tracks aggregate page views, not individual learners. This keeps you firmly at Level 2, which is where this book operates. If you genuinely need individual learner tracking via xAPI, treat it as a Level 3 project: consult your institution's data-privacy officer before proceeding, and consider whether partnering with an institution that already has governance infrastructure is the more responsible path. The book is deliberate about teaching learners *where to stop* — this guide follows the same principle.

### Building a Learner Progress Dashboard with AI

As AI tools become more accessible, it is becoming possible to build custom dashboards that visualize progress through the textbook — which chapters each learner has completed, quiz scores over time, MicroSim engagement, and concepts that need re-teaching. Building such a dashboard requires programming knowledge and careful attention to learner-data privacy. It also crosses the Level 2 → Level 3 boundary described above, so the regulatory considerations apply in full. This is an advanced topic beyond the scope of this guide, but the open-source nature of the textbook means all the data structures are available for developers who choose to build on them responsibly.

## The Learning Graph

### What Is a Learning Graph?

A **learning graph** is a visual map showing how the concepts in the textbook depend on each other. It is structured as a **DAG** (Directed Acyclic Graph) — a diagram where arrows show which concepts must be understood before others. "Acyclic" means the arrows never loop back on themselves, so there are no circular dependencies.

For example, understanding cognitive-load theory (Chapter 4) requires first understanding the three-stage memory model. The learning graph makes these dependency chains visible across all 230 concepts.

### How Instructors Can Use the Learning Graph

- **Prerequisite checking** — Before teaching a concept, verify that learners have covered its prerequisites.
- **Remediation** — If a learner struggles with a concept, trace back to its prerequisites to find the gap.
- **Curriculum mapping** — Compare the learning graph to your existing syllabus to identify coverage gaps.
- **Enrichment** — Advanced learners can explore concepts ahead of the current chapter by following the graph forward.

The interactive Learning Graph Viewer is available in the "Learning Graph" section of the left navigation, and in the MicroSims list as the Graph Viewer.

## Bloom the Elephant: Your Pedagogical Agent

### What Is a Pedagogical Agent?

A **pedagogical agent** is a character that appears throughout a textbook to guide learners. Research shows that pedagogical agents can improve engagement and learners' perception of learning — an effect known as the **persona effect**. This book's mascot, **Bloom the Elephant**, is both a teaching device *and* a running case study: Chapter 12 uses Bloom to teach learners how to design their own mascots.

### Who Bloom Is

Bloom is a wise, curious, warm, and playful elephant whose catchphrase is *"Let's build a mental model."* Bloom grounds every appearance in learning-sciences research — the testing effect, spaced practice, cognitive load, the zone of proximal development — without name-dropping citations in the body text. Bloom uses "we" and "let's" framing and explicitly normalizes struggle, because naming a difficulty is itself a motivation intervention.

### How Bloom Appears

Bloom appears as colored callout boxes (called **admonitions**) throughout each chapter. There are seven types:

| Type | Purpose | Frequency |
|------|---------|-----------|
| Welcome | Introduces the chapter and its central question | Every chapter opening |
| Thinking | Highlights a key insight | 2–3 per chapter |
| Tip | Shares practical advice | As needed |
| Warning | Alerts to a common mistake | As needed |
| Encourage | Supports learners on harder concepts | Where learners may struggle |
| Celebration | Marks progress at the chapter's end | Every chapter ending |
| Neutral | General notes | As needed |

Bloom appears no more than five or six times per chapter to preserve signal value, and mascot admonitions are never placed back-to-back.

### Tips for Instructors

- **Read Bloom's admonitions aloud** — They're written in a conversational tone that works well when spoken.
- **Use "thinking" admonitions as discussion prompts** — They highlight the most important insight in each chapter.
- **Point struggling learners to the "encourage" admonitions** — Bloom's framing of *desirable difficulty* helps learners reframe frustration as a sign that learning is happening.
- **Have learners critique the mascot** — Once your learners reach Chapter 12, ask them to evaluate whether Bloom's voice stays consistent across chapters. This is a genuine analysis task, and it doubles as a preview of their own mascot-design work.

!!! mascot-celebration "You're Ready to Teach with This Book"
    <img src="../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom celebrating">
    You now know every moving part — chapters, MicroSims, the glossary, quizzes, the learning graph, and me. Start with one chapter, run one MicroSim live, and watch what your learners predict before you move the slider. That first prediction is where the learning begins.
