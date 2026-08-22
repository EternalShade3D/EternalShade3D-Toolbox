# Eternal Utility Toolbox ◈ — Documentation

## Table of Contents

- [Installation](#installation)
- [Dimensions Panel](#dimensions-panel)
- [Smart Origin Alignment](#smart-origin-alignment)
- [Naming Engine](#naming-engine)
- [Scene Hygiene](#scene-hygiene)
- [Color Utilities](#color-utilities)
- [FAQ](#faq)

---

## Installation

### Requirements
- **Blender**
- Windows, macOS, or Linux

### Steps

1. **Download** the addon from [Gumroad](https://eternalshade3d.gumroad.com/l/eternal-utility-toolbox) or [FairMarket](https://www.fairmarket.land/product/eternal-utility-toolbox)
2. Open Blender and go to **Edit > Preferences > Add-ons**
3. Click **Install...** and select the downloaded `.zip` file
4. Enable the addon by checking the box next to **"Eternal Utility Toolbox ◈"**
5. Open the **N-panel** (press `N` in the 3D Viewport) and find the **"ETERNAL"** tab

### First Launch
On first launch, the addon creates a preferences file in your Blender config directory. You can customize this path in the addon preferences (gear icon in the panel header).

---

## Dimensions Panel

### What Are "Truth" Dimensions?

Blender's native `dimensions` property shows the bounding box of the object's **cage** (original mesh), not what you actually see in the viewport. When you have modifiers like **Subdivision Surface**, **Solidify**, or **Geometry Nodes**, the visual size differs from the cage size.

**Truth Dimensions** evaluates the actual result of your entire modifier stack and shows you the real-world size of what you see.

### Panel Layout

```
┌── ETERNALSHADE3D 💎 TOOLBOX ──────────────────────┐
│                                                   │
│  Evaluated Verts: 145,230                         │
│                                                   │
│  [Median Point] [3D Cursor] [Active] [Individual] │
│                    [🔗 Uniform Scale]              │
│                                                   │
│  X:  2.5000  ━━━━━━━━━━━━━━ ◯                     │
│  Y:  1.8000  ━━━━━━━━━━━━━━ ◯                     │
│  Z:  3.2000  ━━━━━━━━━━━━━━ ◯                     │
│                                                   │
│  [Apply Scale]  [Snap to Round Values]             │
│                                                   │
│  ── LOCAL DIMENSIONS [Truth] ──                   │
│  REAL-TIME TRUTH                                  │
│  X:  1.2500                                       │
│  Y:  0.9000                                       │
│  Z:  1.6000                                       │
│  [Snap to Round Values]                            │
└───────────────────────────────────────────────────┘
```

### Features

| Feature | Description |
|---------|-------------|
| **Dimension Sliders (X/Y/Z)** | Type or drag to set absolute dimensions. Objects scale proportionally |
| **Uniform Scale** | When enabled, all three axes scale together (maintains proportions) |
| **Truth Mode Toggle** | Switch between evaluated "Truth" math and raw "Cage" fallback for Edit Mode selections |
| **Pivot Point Selector** | Respects Blender's transform pivot (3D Cursor, Median Point, Active Element, etc.) |
| **Group Bounds Pinning** | When 2+ objects are selected, pin the live bounding box and monitor it across selection changes |
| **Apply Scale** | Safely applies object scale (handles multi-user mesh data) |
| **Snap to Round Values** | Rounds dimensions to the nearest 5cm increment |

### Edit Mode Selection Dimensions

When in Edit Mode with geometry selected, an additional **Local Dimensions** section appears. This shows the footprint of your current selection — and when **Truth Mode** is active, it passes through the modifier stack to show the evaluated size of just the selected geometry.

### Smart Sync & Performance

For dense meshes (above the threshold in preferences), the addon uses **debouncing** to avoid lag. Dimensions update in real-time for light meshes and intelligently cache for heavy ones. The **Shield Active** indicator tells you when caching is engaged.

---

## Smart Origin Alignment

Snap object origins with mathematical precision using multiple methods:

### Geometry Median
Snaps the origin to the geometric center (mean) of all vertices. Fast and accurate for any mesh density.

### Cursor Position
Snaps the origin to the 3D cursor's world location.

### Bounding Box Grid (9-Point Compass)
A 3×3 compass grid lets you snap the origin to any combination of:
- **Top / Center / Bottom** (Z-axis)
- **Left / Center / Right** (Y-axis)  
- **Front / Center / Back** (X-axis)

```
↖  ↑  ↗     (Top row: min/center/max X, max Y)
←  •  →     (Middle: min/center/max X, center Y)
↙  ↓  ↘     (Bottom: min/center/max X, min Y)
```

### Selection-Based Origin
In Edit Mode, snap the origin to the center of your current vertex/edge/face selection.

### How It Works (Technical)
For bounding box calculations on heavy meshes, the addon uses a **Geometry Nodes trick** — temporarily creating a GN modifier that outputs only the 8 bounding box vertices. This makes even 10M+ vertex meshes compute instantly, then the modifier is destroyed cleanly.

Children are counter-transformed to prevent origin inheritance drifting.

---

## Naming Engine

Systematically name assets with customizable presets and automatic formatting.

### Configuration

| Toggle | Effect |
|--------|--------|
| **Include Date** | Prepends `YYYY MM` to the name (e.g., `2026 04`) |
| **Category** | Adds a category tag (e.g., `SCENE`, `PRODUCT`) |
| **Type** | Adds a type tag (e.g., `CATEGORY`, `PROJECT`) |
| **Name** | Adds a specific name tag (e.g., `ASSET_NAME`) |

### Preset Management
- **`+` button** — Add a new category/type/name preset
- **✏️ button** — Edit the currently selected preset
- **`−` button** — Remove the currently selected preset

### Preview & Apply

The **Preview** line shows exactly what the generated name will look like:
```
Preview: 2026 04 — SCENE — PRODUCT — ASSET_NAME.001
```

- **Rename Objects** — Applies the generated name to all selected objects (with sequential indexing)
- **Rename Collection** — Applies the generated name to the active collection

### Preset Storage
Presets are saved as a JSON file. The path is configurable in addon preferences.

---

## Scene Hygiene

Keep your Blender scenes clean and professional.

### Material Tools

| Tool | Description |
|------|-------------|
| **Obj Name → Mat** | Renames the active material to match the object name |
| **Mat Name → Obj** | Renames the object to match its active material |
| **Clean .001 Materials** | Merges duplicate materials (e.g., `Material.001` → `Material`) and remaps all users |
| **Purge Orphans** | Removes all orphaned data blocks (unused materials, meshes, etc.) recursively |

### Why This Matters
Blender accumulates orphan data blocks over time, increasing file size and causing confusion. Regular cleanup keeps scenes performant and organized.

---

## Color Utilities

Quick visualization tools for complex meshes.

### Random Loose Parts
Automatically detects separate mesh islands (unconnected geometry groups) and assigns each a random material with a distinct color.

### Random UV Islands
Detects UV islands (separate UV clusters) and assigns each a random material.

### Restore Base Material
Removes all auto-generated materials (prefixed with `Eternal_Part_` or `Eternal_UV_`) and resets everything to the first material slot.

---

## FAQ

### Q: Why do the dimensions differ from Blender's native display?
A: Blender shows the **cage** dimensions (original mesh). This addon evaluates the **modified** mesh through the entire modifier stack, giving you the real-world size of what you actually see.

### Q: The dimensions aren't updating instantly on heavy meshes. Is it broken?
A: No — this is intentional. For meshes above the **Real-time Threshold** (default: 100,000 verts), the addon debounces updates to prevent lag. Wait ~0.25 seconds after changes for the sync to kick in. You can adjust the threshold in preferences.

### Q: Which Blender versions does this work with?
A: The addon requires Blender's new extension system (`blender_manifest.toml`), so it works on Blender 4.2 and later.

### Q: Does it work with Geometry Nodes?
A: Yes! Truth Dimensions evaluates the full GN output, giving you the actual size of whatever your node tree generates.

### Q: Where are my naming presets saved?
A: By default, in your Blender config directory as `eternal_naming_data.json`. You can change this path in addon preferences.

### Q: Is my purchase tied to one machine?
A: Check the license terms on your purchase platform. Generally, personal use on multiple machines is fine — redistribution is not permitted.

### Q: I found a bug or have a feature request.
A: Reach out via [Instagram](https://www.instagram.com/eternal.shade3d/) or the support options in the addon's Socials panel.

---

*© 2025–2026 EternalShade3D. All rights reserved.*
