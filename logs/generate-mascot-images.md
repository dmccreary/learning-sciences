# Mascot Design and Image Generation — Bloom the Elephant

- **Date:** 2026-04-19
- **Skill:** `book-installer` → `references/learning-mascot.md`
- **Outcome:** Scaffolding installed, 7 pose images generated and trimmed, test page rendering correctly

## Final character spec

| Field | Value |
|---|---|
| **Name** | Bloom |
| **Species** | Elephant |
| **Catchphrase** | "Let's build a mental model." |
| **Personality** | Wise, curious, warm, playful |
| **Accessories** | Small round wire-rimmed glasses in warm blue — **no** held objects, **no** hats, **no** clothing |
| **Palette** | Soft blue-gray body, cream highlights inside ears, warm blue glasses frames |
| **Art style** | Modern flat vector, clean lines, transparent background |

## Why these design choices

- **Elephant ↔ Memory.** Elephants are culturally synonymous with memory ("an elephant never forgets"), which maps directly onto the Retention domain and the Ebbinghaus forgetting curve — one of the most-cited concepts in the book. The mascot itself is a retrieval cue every time it appears.
- **"Bloom" for the name.** Direct nod to Bloom's Taxonomy, which anchors the course-description learning outcomes and every chapter-level quiz. Users see the name, they think of the six cognitive levels.
- **No held objects.** The user's call and the right one. Static accessories (glasses) survive regeneration reliably; held objects (books, mortarboards, pointers) mutate between poses and break character identity. This is a footgun worth noting for future mascot designs.
- **Glasses as the single distinguishing feature.** Glasses are small, central to the face, and easy for image generators to preserve across poses. They give Bloom a "scholarly" signal without competing with pose-specific props.

## Q&A decision log

Initial proposals presented in one batch with recommended defaults + alternatives so the user could redirect in a single turn:

1. **Species** — recommended owl/elephant/octopus. User: "two owls in the family already, pick elephant."
2. **Name** — recommended Ebbi (Ebbinghaus ref). User picked **Bloom** (Bloom's Taxonomy ref) — equally strong, arguably clearer.
3. **Catchphrase** — user picked **"Let's build a mental model."** from the suggested list. This one wins because it's content-agnostic and reinforces Domain 2 (Understanding) — a concept every chapter will touch.
4. **Accessories** — user cut the mortarboard and the held book, keeping glasses only. Correct instinct for image-generator consistency.

## Files created

```
docs/
├── css/
│   └── mascot.css                        # 7 admonition types, book palette
├── img/
│   └── mascot/
│       ├── image-prompts.md              # 7 self-contained prompts
│       ├── neutral.png                   # 724×639 after trim
│       ├── welcome.png                   # 747×669
│       ├── thinking.png                  # 713×849
│       ├── tip.png                       # 759×797
│       ├── warning.png                   # 765×784
│       ├── encouraging.png               # 782×702
│       └── celebration.png               # 700×755
└── learning-graph/
    └── mascot-test.md                    # Rendering regression page

CLAUDE.md                                 # Character voice + placement rules
mkdocs.yml                                # nav: added Mascot Style Guide
```

All files written in a single parallel batch (per the skill's performance guideline against per-file TodoWrite overhead).

## Palette decisions in `docs/css/mascot.css`

Admonition title-bar colors chosen to match the book's theme (blue primary, orange accent) while keeping each category visually distinct:

| Admonition | Title-bar color | Background | Rationale |
|---|---|---|---|
| `mascot-welcome` | Primary blue `#1976d2` | `#e3f2fd` | Matches book primary. One per chapter opening. |
| `mascot-thinking` | Brown `#5d4037` | `#efebe9` | Warm/studious. 2–3 per chapter. |
| `mascot-tip` | Teal `#00897b` | `#e0f2f1` | Calm, different from welcome blue. |
| `mascot-warning` | Red `#c62828` | `#ffebee` | Standard danger cue. |
| `mascot-encourage` | Book accent orange `#ef6c00` | `#fff3e0` | **Intentionally not blue** — readers scanning a chapter can tell apart "welcome blue" from "you-can-do-this orange" at a glance. |
| `mascot-celebration` | Deep purple `#4a148c` | Dark `#311b4f`, text `#f3e5f5` | Dark body needed so the pale confetti/sparkles in the celebration pose remain visible. The canonical example of the "contrast-check-pose-against-background" rule in the skill. |
| `mascot-neutral` | Slate gray `#546e7a` | `#eceff1` | Low-key default for general sidebars. |

## Image generation

- Prompts at `docs/img/mascot/image-prompts.md`. Each one fully self-contained (repeats the base character description) so poses can be regenerated independently without copy-paste errors across a separate base block.
- **User edited the prompts** to add a preamble ("I am about to ask you to generate 7 poses…") and per-pose lead-in lines ("Please generate a new welcome pose for Bloom…"). These edits improved consistency by priming the model to expect a series. Worth folding into the default template in the skill.
- All 7 images generated at 1024×1024. No cross-tool mixing — all generated in a single session with the same tool, which is the single biggest factor in identity consistency.

## Padding trim results

Ran `trim-padding-from-image.py` on all 7 poses. Every image had 40–56% of its area as transparent padding — untrimmed, Bloom would have rendered at roughly half the intended 90px display size.

| Pose | Before | After | ~Padding trimmed |
|---|---|---|---|
| neutral | 1024×1024 | 724×639 | 56% |
| welcome | 1024×1024 | 747×669 | 52% |
| celebration | 1024×1024 | 700×755 | 49% |
| encouraging | 1024×1024 | 782×702 | 48% |
| warning | 1024×1024 | 765×784 | 43% |
| tip | 1024×1024 | 759×797 | 42% |
| thinking | 1024×1024 | 713×849 | 42% |

## Verification

User confirmed: "The test page is perfect!" at `/learning-sciences/learning-graph/mascot-test/`. All seven admonition styles render correctly with consistent character identity, readable contrast (including celebration dark background), and clean text-wrapping around the floated mascot images.

## Named footguns observed this session

1. **Held objects in mascot poses.** Silent (no error), easy to trigger (the obvious "give the mascot a book/pointer/mortarboard" instinct), damage only becomes visible after regenerating: the held object shifts, morphs, or disappears between poses. Fix: glasses and body-markings only; nothing held.
2. **Untrimmed image padding.** Silent (image loads fine), easy to trigger (AI generators default to ~1024×1024 with 40%+ transparent border), damage is visual not functional: the mascot renders at ~half the intended size inside the 90px admonition slot. Fix: always run `trim-padding-from-image.py` after saving.
3. **Confetti against pale backgrounds** (avoided this session by the skill's prescient CSS). The celebration pose's pale gold sparkles would vanish against a light admonition background. The skill's `docs/css/mascot.css` template pre-bakes the dark-purple celebration background, which is why user's test page worked first-try without needing regeneration.

## Follow-ups worth considering

- The user-added prompt preambles ("I am about to ask you to generate 7 poses…" + per-pose "Please generate a new X pose for Bloom…") noticeably improved pose-series consistency. Consider folding that preamble structure back into the book-installer `references/learning-mascot.md` template so the next author gets it by default.
- The seven admonition examples in `mascot-test.md` currently lean math/generic. When actual chapters are written, swap the test-page body text to use real Learning Sciences content (e.g., the quadratic-formula example in the skill template is a leftover). Low priority — the page works as-is.
- Five out of seven trimmed poses are taller than they are wide (thinking 713×849, tip 759×797, etc.). The CSS `object-fit: contain` with a 90×90 slot handles this cleanly (no squashing), but the narrower poses will letterbox slightly. If any feel visually small in a real chapter, bump `--mascot-size` from 90px to 100px in `docs/css/mascot.css`.
