---
title: Cover Image Prompt
description: AI image-generation prompt for the book cover (1200x630, 1.91:1 OG/social preview)
---

# Cover Image Prompt — Learning Sciences for Intelligent Textbook Design

**Output target:** `docs/img/cover.png`
**Dimensions:** 1200 x 630 pixels (1.91:1 aspect ratio — Open Graph / social preview standard)
**Book title:** Learning Sciences for Intelligent Textbook Design

---

## Theme keywords

learning sciences, seven domains, cognitive science, educational psychology, motivation, memory, retention, understanding, application, expertise, measurement, feedback loops, cognitive load, retrieval practice, intelligent textbooks, MicroSims, learning graph, pedagogical mascot, AI-assisted authoring

## Color palette

Deep navy blue and teal background, warm cream and soft amber accent lights, clean white title text with a subtle glow. Modern, professional, educational. Avoid neon and chromatic aberration.

## Composition notes

Centered title in large, crisp, high-contrast type. Surround the title with a tasteful montage of small, clean icons representing the Seven Domains (a lightbulb or spark for motivation, a brain/neural network for understanding, an hourglass or forgetting-curve graph for retention, a toolbox or gear for application, a stepped-mountain or mastery ladder for expertise, a dial/gauge or bar chart for measurement, and a nurturing environment motif for learning conditions). Include a small, friendly stylized elephant silhouette (the book's mascot, Bloom) in one corner wearing round wire-rimmed glasses. Thread a subtle connected-node graph across the background to suggest a learning graph. Uncluttered, balanced, high-quality digital illustration.

---

## Image prompt (paste into ChatGPT, Bing Image Creator, Ideogram, Leonardo, Midjourney, etc.)

```
Please generate a new 1200x630 pixel image (1.91:1 aspect ratio) — a modern,
professional wide-landscape book cover for "Learning Sciences for Intelligent
Textbook Design."

The title "Learning Sciences for Intelligent Textbook Design" should be
prominently displayed in large, crisp, high-contrast white sans-serif type,
centered on the image with a subtle soft glow so it reads clearly against the
background.

The background is a sophisticated montage on a deep navy-and-teal gradient.
Thread a faint connected-node network graph across the full width to suggest
a learning graph of concepts and dependencies. Scattered around the title,
show seven small, clean, iconographic motifs representing the Seven Domains
of the Learning Sciences:

  1. a glowing lightbulb or spark (Motivation and Engagement)
  2. a stylized brain or neural network (Understanding)
  3. an hourglass paired with a gently decaying forgetting curve (Retention)
  4. a toolbox or interlocking gears (Application)
  5. a stepped mountain or mastery ladder (Expertise)
  6. a dial/gauge or minimalist bar chart (Measurement and Feedback)
  7. a nurturing environment motif — a small plant under light or an open
     doorway with soft light (Learning Conditions)

In one lower corner, include a small, friendly, stylized cartoon elephant
mascot in soft blue-gray with cream ear highlights, wearing round wire-rimmed
glasses — modern flat vector style, no hat, no book, no clothing.

Color palette: deep navy blue, teal, warm cream, soft amber accent lights,
clean white title. Modern, professional, educational.

Composition: balanced, uncluttered, tasteful — the title is the clear focal
point. No other readable text besides the title. No logos, no watermarks,
no trademarks, no brand marks. No neon, no chromatic aberration, no
photorealistic human faces.

Style: modern textbook cover, high-quality digital illustration, clean
vector-leaning look with subtle depth and soft lighting.
```

---

## How to use this prompt

Pick the workflow that matches your resources:

1. **OpenAI API (fully automated).** Set `OPENAI_API_KEY` with active billing, then run:
   ```
   cd /Users/dan/Documents/ws/learning-sciences
   ~/Documents/ws/ibook-skills/src/image-generation/generate-cover.sh
   ```
   Output: `docs/img/cover.png` at 1200x630.

2. **ChatGPT Plus / Pro.** Copy the prompt above, paste into https://chatgpt.com/, download the generated image, save as `docs/img/cover.png`, and resize to 1200x630 if needed.

3. **Free tools.** Paste the prompt into Bing Image Creator, Ideogram, or Leonardo. Download and resize to 1200x630.

## Known issue

The `generate-cover-openai.py` script has a Python scoping bug: an `import os` inside the `--open-browser` branch of `main()` shadows the module-level `os` import, which causes `--help` and `--local-prompt` to fail with `UnboundLocalError`. Fix by removing the redundant `import os` inside `main()` (the module already imports `os` at the top). The full-generation path (with a valid API key) is not affected by this bug.
