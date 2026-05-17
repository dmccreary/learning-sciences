---
title: Causal Loop Diagram Viewer
description: An interactive viewer for causal loop diagrams (CLDs) built with vis-network. Load any CLD JSON file, drag nodes, inspect details, and save adjusted positions.
---

# Causal Loop Diagram Viewer

The CLD Viewer renders any causal loop diagram JSON file as an interactive vis-network diagram. Nodes are draggable, edges are labeled with polarity (+ or −), and loop annotations (R/B circles) mark the center of each feedback loop.

[Open CLD Viewer](./main.html?menu=true){ .md-button .md-button--primary }

## How to use

1. Open the viewer with the button above.
2. Select a sample diagram from the buttons, or load your own JSON file.
3. Click any node, edge, or loop symbol to see details in the panel below the diagram.
4. Drag nodes to improve the layout.
5. Click **Save Positions** to download an updated JSON with your layout baked in.

## Keyboard shortcuts

| Action | How |
|---|---|
| Zoom | Horizontal two-finger swipe or pinch gesture |
| Pan | Click and drag on the background |
| Select | Click a node, edge, or loop marker |
| Reset view | Double-click the background |

## JSON format

Each CLD is a JSON file with `metadata`, `nodes`, `edges`, and `loops` sections.
See the [CLD JSON schema reference](../../sims/cld-viewer/examples/learning-flywheel-r1-cld.json) for a worked example.
