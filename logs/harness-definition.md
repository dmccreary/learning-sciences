# Research Notes — Defining "IDE Harness" for Chapter 1

**Date:** 2026-04-19
**Context:** Chapter 1 — *Foundations of Learning Sciences*, section *The Authoring Toolchain*.
**Question asked by the author:** Add the term *IDE Harness* to the toolchain, framed as "a client-side framework that takes a user's prompt and determines which LLM should be used to generate output." Investigate how the term is used across Claude Code, Windsurf, Cursor, OpenAI Codex, and Google Antigravity, and note variations.
**Resolution:** Added *IDE Harness* as a top bullet in the toolchain list, plus a new subsection *A Note on the Word "Harness"* with a six-row comparison table and two caveats.

---

## Why the author's framing needed to be broadened

The author's working definition — "a client-side framework that takes a user's prompt and determines which LLM should be used to generate output" — captures **model routing**, which is one responsibility of an IDE harness but not the whole concept. In the dominant April 2026 usage (Anthropic + OpenAI + Fowler + Willison), a harness is broader than routing. It includes:

1. **Model routing** — which model to call (fast vs. deep, small vs. large, local vs. hosted).
2. **Agent loop** — prompt → model → tool call → tool result → next prompt, iterated.
3. **Tool dispatch** — filesystem, shell, network, MCP tools, etc.
4. **Context / memory management** — context window budgeting, compaction, persistence.
5. **Sandbox and permission policy** — what the agent may and may not do without asking.
6. **Error recovery** — retry, fallback, bounded failure.

The synthesized definition in the chapter lists routing first (honoring the author's framing) then expands to the rest. The widely-quoted shorthand *Agent = Model + Harness* is included because it makes the scope explicit in five words.

---

## Source-by-source findings

### 1. Anthropic / Claude Code — **explicit adopters of "harness"**

Anthropic's engineering blog uses *harness* as a first-class term:

- [*Effective harnesses for long-running agents*](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [*Harness design for long-running application development*](https://www.anthropic.com/engineering/harness-design-long-running-apps)

In these posts, the harness is the loop + tools + context compaction + guardrails that wrap Claude. Claude Code is described as Anthropic's reference harness — the one the engineering team uses internally and the one this course uses.

### 2. OpenAI / Codex CLI — **explicit adopters of "harness"**

OpenAI published at least two "harness engineering" posts in early 2026:

- [*Harness engineering: leveraging Codex in an agent-first world*](https://openai.com/index/harness-engineering/)
- [*Unlocking the Codex harness*](https://openai.com/index/unlocking-the-codex-harness/)

"The Codex harness" is defined there as **the agent loop and execution logic shared across the Codex CLI, IDE extensions, and desktop app**. The language is close enough to Anthropic's that the two companies' usage is effectively interchangeable.

### 3. Martin Fowler — **popularizer of "harness engineering" as a named discipline**

- [*Harness engineering for coding agent users*](https://martinfowler.com/articles/harness-engineering.html)

Fowler's post attributes the *Agent = Model + Harness* equation and argues that prompt-engineering skills translate into harness-engineering skills as the surrounding runtime grows richer. This is the clearest vendor-neutral synthesis of the term.

### 4. Simon Willison — **independent confirmation of the same usage**

- [*How coding agents work*](https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/)

Willison writes: "a coding agent is a piece of software that acts as a **harness** for an LLM, extending that LLM with additional capabilities … implemented as callable tools." This is the same meaning as the Anthropic/OpenAI posts, reached independently, which raises confidence that the term is stable and not vendor-specific PR.

### 5. Cursor — **avoids "harness"**

Cursor's own documentation uses:

- **Agent** — the general concept.
- **Background agent** — long-running asynchronous agent.
- **Shadow workspace** — isolated execution environment for code changes.

The term *harness* does not appear in official Cursor documentation as of April 2026. A user of Cursor would describe harness-equivalent features using Cursor's own vocabulary.

### 6. Windsurf (Codeium) — **avoids "harness"**

Windsurf's official positioning uses:

- **Cascade** / **Cascade Engine** — the agent runtime.
- **Flow** — Cascade's proprietary context-state layer.

Comparison page consulted: [windsurf.com/compare/windsurf-vs-cursor](https://windsurf.com/compare/windsurf-vs-cursor). No use of *harness* in the product vocabulary.

### 7. Google Antigravity — **avoids "harness"**

Google's launch posts for Antigravity use:

- **Agent-first platform / agent-first architecture**
- **Manager** view
- **Artifacts**

Sources consulted:

- [Google Developers Blog — Build with Google Antigravity, our new agentic development platform](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
- [VentureBeat — Google Antigravity introduces agent-first architecture for asynchronous development](https://venturebeat.com/ai/google-antigravity-introduces-agent-first-architecture-for-asynchronous)

No use of *harness*.

### 8. Evaluation community (METR, EleutherAI) — **older, narrower usage**

Predating the 2026 "harness engineering" vocabulary, the AI-evaluation community uses *harness* specifically for **test-running infrastructure**:

- [EleutherAI `lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) — benchmark runner.
- [METR — New report](https://metr.org/blog/2023-08-01-new-report/) — distinguishes *scaffolding* (program + model = agent) from *evaluation harness* (test runner).

This is the source of potential confusion: in the evaluation community, *evaluation harness* = benchmark runner; in the IDE-tools community, *agent harness* = runtime wrapping a live model. The chapter's footnote reserves *evaluation harness* for the benchmarking sense in later chapters to avoid collision.

---

## Summary of the definitional spread

| Community / product | Uses "harness"? | Preferred term(s) |
|---|---|---|
| Claude Code (Anthropic) | Yes — explicit | Harness |
| Codex CLI (OpenAI) | Yes — explicit | Codex harness |
| Martin Fowler | Yes — popularizer | Harness engineering |
| Simon Willison | Yes — independent | Harness |
| Cursor | No | Agent / background agent / shadow workspace |
| Windsurf (Codeium) | No | Cascade / Cascade Engine / Flow |
| Google Antigravity | No | Agent-first platform / Manager / Artifacts |
| METR / EleutherAI | Narrow sense only | *Scaffolding* (runtime); *evaluation harness* (test runner) |

The term is currently concentrated in the **Anthropic + OpenAI + Fowler + Willison** lineage and has not yet propagated to Google or to the major editor-based products (Cursor, Windsurf). The concept is converging; the word is not.

---

## Process notes for the chapter admonition

Steps taken, in order:

1. Spawned a general-purpose research agent with an open-ended question — "how is *harness* used across AI-coding products?" — rather than a narrow lookup. Open-ended because the author's framing (routing-only) hinted that the popular meaning might be broader.
2. Collected the five product-specific positions and the three vendor-neutral positions (Fowler, Willison, METR).
3. Confirmed the Anthropic/OpenAI definitions match Fowler/Willison. Two independent paths to the same meaning → high confidence in the synthesized definition.
4. Kept the author's routing emphasis by listing it first in the definition, then expanded to the full responsibility set.
5. Flagged two caveats in the chapter text: the term is not universal across products, and the agent-runtime sense must be kept distinct from the older evaluation-harness sense.

## Decisions left for later

- **Chapter 14** (AI Agent Skills for Textbook Generation) will need a longer treatment of harness internals — context compaction, tool dispatch, permission policy. A single paragraph in Chapter 1 is a placeholder, not the full story.
- **Glossary entry for *IDE harness*** should cite this log when it is generated.
- If *IDE Harness* is adopted as a first-class concept in this book, it should probably be added to the learning graph (currently 221 nodes). The node would sit in the FOUND taxonomy with edges from Generative AI and Large Language Model, and would become a prerequisite for Claude Code and Agent Skill. Flag for a future learning-graph revision pass.
