# Mascot Style Guide

This page renders every mascot admonition style so you can verify colors, image sizes, and text-wrapping behavior at a glance. Use it as a regression check after changing `docs/css/mascot.css` or regenerating any of Bloom's poses.

!!! mascot-neutral "A Note from Bloom"
    <img src="../../img/mascot/neutral.png" class="mascot-admonition-img" alt="Bloom neutral pose">
    This is the neutral style — used for general sidebars, definitions, or
    commentary that doesn't call for a specific emotional tone. Keep the
    body brief, two or three sentences.

!!! mascot-welcome "Welcome to the Chapter"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Bloom waving welcome">
    Use this style at the start of each chapter. Bloom introduces the
    topic and names what the reader will be able to do by the end.
    "Let's build a mental model."

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom thinking">
    Use this style for the one or two concepts in a chapter that everything
    else hangs on. The reader should pause here. Two to three per chapter
    is the sweet spot — more than that and nothing feels "key" anymore.

!!! mascot-tip "Bloom's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Bloom giving a tip">
    Use this style for practical shortcuts, useful heuristics, or
    "next time you're doing X, try Y" guidance. Tips are optional reading;
    the chapter must make sense without them.

!!! mascot-warning "Watch Out!"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Bloom warning">
    Use this style for common misconceptions, tempting-but-wrong answers,
    and the kinds of mistakes that research consistently shows students
    make. The tone is caring, not scolding.

!!! mascot-encourage "You've Got This"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Bloom encouraging">
    Use this style before or during a section that learners commonly
    find difficult. Name the difficulty explicitly and normalize the
    struggle — that framing itself is a motivation intervention.

!!! mascot-celebration "Well Done!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Bloom celebrating">
    Use this style at the end of chapters or after a reader completes a
    major milestone (e.g., their first MicroSim, first mascot admonition,
    first deployed chapter). One per major milestone.

## Variant: text-only length check

Each admonition needs enough body text to wrap around the floated image without leaving an awkward gap. If a body is too short, the next element will clear the float and create visible empty space. Aim for at least four lines of body at standard widths:

!!! mascot-thinking "Longer-body Test"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Bloom thinking">
    This admonition intentionally contains more text to demonstrate how
    the body wraps cleanly to the right of Bloom's image. If the rendering
    looks broken — for example, the text overlaps the image, or the image
    appears above rather than beside the text — re-check that `md_in_html`
    is in `markdown_extensions` in `mkdocs.yml`, and that `docs/css/mascot.css`
    is listed in `extra_css`. The `.mascot-admonition-img` class applies
    `float: left` with a right-margin so the body text wraps naturally.

## What to check on this page

1. **Colors:** each admonition's title bar and body match the palette in `docs/css/mascot.css`.
2. **Image size:** every mascot is roughly 90px square. If one looks dramatically smaller, run the padding trimmer on that PNG.
3. **Identity consistency:** Bloom's face, glasses, and body proportion look the same across all seven poses. If one pose drifts (different eye shape, missing glasses, wrong color), regenerate it.
4. **Celebration contrast:** the dark-purple background should make the pale confetti sparkles readable. If sparkles disappear, the celebration.png was rendered against a light background — regenerate with a dark-aware prompt or adjust the admonition palette.
5. **Float behavior:** body text wraps to the right of the image; no awkward vertical gaps.
