# Quiz: MicroSims and Interactive Visualizations

Test your understanding of MicroSim design principles, control complexity, library selection, the diagram overlay pattern, and iframe embedding with these review questions.

---

#### 1. What distinguishes a MicroSim from an interactive laboratory or a virtual lab?

<div class="upper-alpha" markdown>
1. MicroSims use more advanced programming languages
2. MicroSims are scoped to a single concept with a few controls, designed for insight within two minutes
3. MicroSims require server-side computation while labs run client-side
4. MicroSims are always built with p5.js while labs use other libraries
</div>

??? question "Show Answer"
    The correct answer is **B**. A MicroSim is a small, single-concept interactive simulation with a tight scope — a reader should understand its purpose within ten seconds and extract its insight within two minutes. An interactive lab bundles many concepts into a larger artifact. The tight scope is not minimalism for its own sake; every additional dimension of interactivity adds cognitive load from the same fixed budget described in Chapter 4. One concept, one canvas, two to four controls is the design center.

    **Concept Tested:** MicroSim

---

#### 2. What is the project's working rule for MicroSim control complexity?

<div class="upper-alpha" markdown>
1. No more than 20 controls to allow maximum exploration
2. Exactly two controls per MicroSim, no exceptions
3. Under seven controls, with four as the target and three as the ideal
4. The number of controls should match the chapter number
</div>

??? question "Show Answer"
    The correct answer is **C**. The project uses the rule: under seven controls, with four as the target and three as the ideal. This is grounded in Cowan's four-item working-memory capacity — a sim with six sliders has already spent more than the budget before the reader does any conceptual work. A sim that wants eight controls is usually two sims in disguise, or needs presets that collapse related dimensions into a scenario dropdown.

    **Concept Tested:** MicroSim Control Complexity

---

#### 3. When should an author choose the diagram overlay pattern instead of building a custom p5.js interactive figure?

<div class="upper-alpha" markdown>
1. When the concept involves dynamic animations that change over time
2. When the reader needs to learn the parts of a fixed spatial structure — the anatomy of a model, the components of an architecture
3. When the visualization requires real-time data from an API
4. When the reader needs to drag and rearrange nodes in a graph
</div>

??? question "Show Answer"
    The correct answer is **B**. The diagram overlay pattern is the right choice when the reader's job is to learn the parts of a fixed structure — the anatomy of a rubric, the stages of a memory model, the components of an architecture. It pairs a static scientific illustration with overlay markers that reveal labels on hover or click. When the spatial structure itself needs to be manipulated (dragging nodes, reassembling parts), a bespoke p5.js sim is warranted instead.

    **Concept Tested:** Diagram Overlay Pattern

---

#### 4. A visualization needs to show how three research disciplines overlap in their shared methods. Which library is the best fit?

<div class="upper-alpha" markdown>
1. Leaflet
2. vis-network
3. Venn.js
4. Chart.js
</div>

??? question "Show Answer"
    The correct answer is **C**. Venn.js is a specialized library for drawing Venn and Euler diagrams from set-intersection data. It is the right choice when the concept being taught is literally about overlapping sets — such as the shared methods of three research disciplines, the intersection of taxonomies, or the overlapping capabilities of tools. Most textbook authors use it once or twice per book.

    **Concept Tested:** Venn.js Library

---

#### 5. What is the iframe-height-clipping footgun, and why does it satisfy the three-property footgun definition?

<div class="upper-alpha" markdown>
1. It occurs when the iframe is too wide, causing horizontal scrolling on mobile devices
2. It is silent (no error logged), easy to trigger (any height mismatch), and produces delayed damage (controls clipped from view that the author tested standalone)
3. It happens when JavaScript errors prevent the MicroSim from loading
4. It is caused by using the wrong p5.js version in the HTML file
</div>

??? question "Show Answer"
    The correct answer is **B**. The iframe-height-clipping footgun occurs when a sim's declared iframe height is shorter than its actual content height. It is silent (no build error, no runtime error), easy to trigger (any iframe height set even slightly too short), and produces delayed damage (the author tested the sim standalone where it renders at full height; readers see clipped controls with no indication anything is missing). The structural fix is the microsim-iframe-tester skill using Playwright.

    **Concept Tested:** Iframe Embedding

---

#### 6. According to the chapter, what is the primary reason every p5.js MicroSim must call updateCanvasSize() as the first line of setup()?

<div class="upper-alpha" markdown>
1. It initializes the color palette for the sketch
2. It registers event listeners for keyboard input
3. It reads the actual container width so the canvas is created at the correct responsive size
4. It connects the sketch to the MkDocs Material theme
</div>

??? question "Show Answer"
    The correct answer is **C**. Calling updateCanvasSize() before createCanvas() reads the actual container width from the `<main>` element, ensuring the canvas is created at the correct responsive size. Calling it afterward — or not at all — produces a canvas at the default 100-pixel width, which is the silent-failure shape where the sim renders but appears tiny. This convention is what keeps every MicroSim usable on the device the reader actually has.

    **Concept Tested:** p5.js Library

---

#### 7. The scaffolded-exploration flywheel (R1) in the MicroSim control-complexity diagram depends on what key variable being available?

<div class="upper-alpha" markdown>
1. Number of controls
2. Available germane capacity — working memory freed from extraneous interface load
3. Internet connection speed
4. The reader's prior experience with p5.js
</div>

??? question "Show Answer"
    The correct answer is **B**. The scaffolded-exploration flywheel (R1) depends on available germane capacity. When control count is kept tight, most of the reader's working memory is free for germane processing — noticing what changes when a control moves. Clean observations feed pattern recognition, which builds schemas, which builds confidence, which deepens exploration. When control count is too high, extraneous load from tracking the interface consumes germane capacity, and the loop collapses.

    **Concept Tested:** MicroSim Design Principles

---

#### 8. What are the three modes of the diagram overlay pattern used across this book's interactive infographics?

<div class="upper-alpha" markdown>
1. Read mode, write mode, delete mode
2. Static mode, animated mode, 3D mode
3. Explore mode (hover for labels), quiz mode (click to answer), edit mode (drag to recalibrate)
4. Teacher mode, student mode, admin mode
</div>

??? question "Show Answer"
    The correct answer is **C**. The three standard modes are: Explore mode (hovering a marker reveals labels and definitions — a segmenting and pre-training move), Quiz mode (a prompt appears and the reader clicks the correct marker — converting a passive picture into a retrieval opportunity), and Edit mode (for authors to drag markers and export recalibrated positions). Quiz mode is especially valuable because it turns the testing effect into an interaction that costs the reader only seconds.

    **Concept Tested:** Interactive Infographic

---

#### 9. When choosing between Chart.js and Plotly for a data visualization, what is the key decision criterion?

<div class="upper-alpha" markdown>
1. Chart.js is free while Plotly requires a license
2. Chart.js handles standard 2D charts with a smaller bundle; Plotly is needed for 3D surfaces, hover tooltips, and zoomable axes
3. Chart.js only works with p5.js while Plotly works standalone
4. Plotly is always faster to render than Chart.js
</div>

??? question "Show Answer"
    The correct answer is **B**. Chart.js is the right choice for standard 2D chart types (bar, line, pie, scatter) with a small API and lightweight bundle. Plotly is needed when the reader must hover for detail, zoom axes, rotate 3D surfaces, or explore higher-dimensional data. Plotly's bundle is roughly ten times larger than Chart.js. The project's rule is to default to the smallest library that fits — unused capability costs the reader on every page load.

    **Concept Tested:** Chart.js Library

---

#### 10. Screen capture automation removes which production failure mode from the MicroSim pipeline?

<div class="upper-alpha" markdown>
1. JavaScript syntax errors in MicroSim code
2. Thumbnail drift — where a sim's visual state changes but its manually captured thumbnail does not update
3. Incorrect library version references in HTML files
4. Missing alt text on MicroSim canvas elements
</div>

??? question "Show Answer"
    The correct answer is **B**. Screen capture automation uses headless-browser tools (Playwright) to programmatically capture thumbnails from running sims at a standard viewport size. This prevents thumbnail drift — the silent failure where a sim's visual defaults change (new colors, repositioned controls) but its hand-captured thumbnail stays stale. Automated captures also ensure consistency (same viewport, same background) and support cover images for announcements.

    **Concept Tested:** Screen Capture Automation
