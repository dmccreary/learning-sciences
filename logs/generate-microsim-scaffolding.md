# MicroSim Scaffolding Generation Log

**Date:** 2026-04-20
**Session scope:** Extract MicroSim specs from chapters, generate scaffolding, build index page, update navigation

## Steps Completed

### 1. Extract TODO JSON Files from Chapter Content

**Tool:** `microsim-utils/scripts/create-microsim-todo-json-files.py`

Scanned all 15 chapter files (`docs/chapters/*/index.md`) for `#### Diagram:` headers and extracted specifications from `<details>` blocks.

- Chapters scanned: 15
- Total diagram specs found: 60
- Already implemented (have `main.html`): 0
- TODO JSON files written: 60
- Output directory: `docs/sims/TODO/`

Each JSON file contains: `sim_id`, `diagram_name`, `chapter_number`, `chapter_title`, `library`, `bloom_level`, `bloom_verb`, `learning_objective`, `completion_status: "specified"`, `extracted_date`, and `specification`.

### 2. Generate Scaffolding Directories from TODO JSON Files

**Tool:** `microsim-utils/scripts/scaffold-microsims-from-todo.py`

Created directory structure and starter files for all 60 unimplemented MicroSims.

- TODO specs processed: 60
- Scaffolded: 60
- Skipped (already implemented): 0

Each scaffolded directory (`docs/sims/<sim-id>/`) contains:
- `index.md` — documentation page with YAML frontmatter (title, description)
- `metadata.json` — structured metadata from the TODO spec

### 3. Update mkdocs.yml Navigation

Added all 62 MicroSim directories (60 new + 2 pre-existing: `graph-viewer`, `slide-viewer`) to the `MicroSims:` nav section in `mkdocs.yml`, sorted alphabetically. Cleaned up display titles with proper capitalization for acronyms (ARCS, DAG, IRT, SDT, SRL, UDL, ZPD).

### 4. Generate Grid-Card Index Page

**Tool:** `microsim-utils/references/index-generator.md` workflow

Created `docs/sims/index.md` with:
- YAML frontmatter (title, description, `hide: toc`)
- 62 grid cards in `<div class="grid cards" markdown>` format
- Alphabetical sorting
- Screenshot images included where available (1 of 62: `graph-viewer`)
- Added "List of MicroSims: sims/index.md" as first entry in mkdocs.yml MicroSims nav

## Files Created

| File | Count | Description |
|------|-------|-------------|
| `docs/sims/TODO/*.json` | 60 | Diagram spec JSON files |
| `docs/sims/<sim-id>/index.md` | 60 | Scaffold documentation pages |
| `docs/sims/<sim-id>/metadata.json` | 60 | Scaffold metadata files |
| `docs/sims/index.md` | 1 | Grid-card index page |

## Files Modified

| File | Change |
|------|--------|
| `mkdocs.yml` | Added 62 MicroSim entries + index page to nav |

## Outstanding Work

- **Screenshots:** 61 of 62 MicroSims are missing preview screenshots (only `graph-viewer` has one). Run `~/.local/bin/bk-capture-screenshot` after implementing each sim.
- **Implementation:** All 60 new MicroSims need `main.html` with working JavaScript. The TODO JSON files and `metadata.json` in each directory contain the full specification to guide generation.
- **Descriptions:** Most scaffold `index.md` files use the diagram title as the description. After implementation, descriptions should be expanded to 1-2 sentences explaining what the sim does and its interactive features.

## MicroSims by Chapter

| Chapter | Sims |
|---------|------|
| 01 Foundations | learning-sciences-confluence, bloom-taxonomy-pyramid, evidence-loop-authoring |
| 02 Seven Domains | seven-domains-wheel, seven-domains-coupling |
| 03 Motivation | flow-channel-explorer, motivation-loops-competence-frustration, arcs-four-pillars, sdt-three-needs-venn |
| 04 Cognitive Architecture | three-stage-memory-model, baddeley-working-memory, cognitive-load-budget, chunking-demonstration, load-dynamics-loops |
| 05 Knowledge Retention | forgetting-curve-simulator, spaced-retrieval-timeline, leitner-box-simulator, retrieval-vs-storage-strength, bjork-storage-dynamics |
| 06 Application & Transfer | barnett-ceci-transfer-taxonomy, mental-model-probe-interview, scaffold-fading-trainer, transfer-dynamics-flywheel-trap |
| 07 Expertise & Mastery | dreyfus-skill-model, power-law-learning-curve, chunking-board-recall, expertise-flywheel-plateau |
| 08 Measurement & Feedback | rubric-analytic-vs-holistic, irt-ability-difficulty-explorer, zimmerman-srl-cycle, feedback-flywheel-pressure-trap |
| 09 Learning Conditions | learning-environment-nested-layers, zpd-three-zones, udl-three-principles, talk-moves-decision-tree, psychological-safety-dynamics |
| 10 Textbook Architecture | intelligent-textbook-components, dag-topological-reduction, intelligent-textbook-architecture, textbook-production-pipeline |
| 11 MicroSims | library-decision-tree, microsim-control-complexity-loops |
| 12 Mascots & Admonitions | bloom-poses-gallery, mascot-design-pipeline, mascot-path-depth, mascot-voice-consistency-loops |
| 13 Graphic Novels | graphic-novel-pipeline, twelve-panel-arc-map, transportation-dynamics-loops |
| 14 Agent Skills | skill-dependency-graph, token-budget-explorer, authoring-pipeline-architecture, skill-quality-flywheel, authoring-pipeline-dynamics |
| 15 Capstone & Deployment | capstone-rubric-board, deploy-pipeline-flow, aggregate-quality-dashboard, iteration-flywheel, authoring-pipeline-walkthrough |
