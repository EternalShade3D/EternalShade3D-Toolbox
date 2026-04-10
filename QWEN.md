# EternalShade3D Utility Toolbox

## Project Overview

A **Blender 4.2+ extension** (add-on) providing a high-precision utility toolkit for mathematical accuracy within Blender's 3D workflow. Built with Python, it focuses on evaluated "truth" dimensions, smart origin alignment, dynamic naming, and scene hygiene utilities.

### Key Features

- **Evaluated Truth Dimensions**: Real-time monitoring of object bounding box sizes accounting for the entire modifier stack (including Geometry Nodes, Subdivision, etc.)
- **Edit Mode Precision**: Direct dimension input and scaling for vertex/edge/face selections
- **Smart Origin Alignment**: Mathematical snapping of origins to bounding box coordinates, geometry medians, or 3D cursor positions
- **Dynamic Naming Engine**: Systematic asset naming with customizable presets (category, type, name tags with date prefixing)
- **Scene Hygiene**: Material cleanup (.001 merging), orphan purging, random material assignment to loose parts/UV islands
- **Multi-object Group Bounds**: Pin and monitor live bounding box dimensions for groups of objects

### Architecture

```
__init__.py          # Add-on lifecycle, preferences, class registration
dimensions.py        # Core dimension evaluation, caching, background sync, scaling math
utils.py             # Naming engine, origin operators, scene hygiene, material utilities
ui.py                # Blender UI panel definitions (N-panel), labels, icons, tooltips
```

## Building and Running

### Installation

1. The add-on resides in Blender's extensions directory:
   `extensions/user_default/EternalShade3D_Utility_Toolbox/`
2. Enable via **Edit > Preferences > Add-ons**, search for "Eternal"
3. Access via the **N-panel** in the 3D Viewport under the "ETERNAL" tab

### Development

This is a Blender Python add-on — no build step required. Blender loads the Python modules directly.

- **Reload during development**: Changes to Python files require disabling and re-enabling the add-on in Blender preferences (the `__init__.py` includes local reload logic for when Blender re-evaluates the module)
- **Debug logging**: Enable in add-on preferences ("Enable Debug Logging") to print internal math and state checks to the system console

### Dependencies

- **Blender 4.2.0+** minimum (uses the Blender 4.2 extension system with `blender_manifest.toml`)
- **NumPy** (bundled with Blender's Python)
- **bmesh, mathutils** (bundled with Blender)

## Add-on Configuration

Preferences (accessible via the gear icon in the panel header):

| Setting | Description | Default |
|---------|-------------|---------|
| **Presets File** | Path for saving naming preset JSON data | Blender config dir |
| **Real-time Threshold** | Vertex count threshold before smart-sync debouncing kicks in (performance optimization) | 100,000 |
| **Enable Debug Logging** | Print internal calculations to system console | Off |

## Codebase Details

### `dimensions.py` — Core Dimension Engine

- **`RuntimeState`**: Class-level state tracking for truth caches, group caches, debounce state, and drag anchors
- **`get_global_evaluated_dims()`**: Uses Blender's depsgraph to evaluate the true world-space bounding box of an object including all modifiers. Falls back to `obj.dimensions` for unmodified objects. Uses NumPy for fast vertex coordinate processing.
- **`get_selection_bounds()`**: Calculates the combined world-space bounding box of multiple selected objects
- **`get_edit_selection_evaluated_dims()`**: Evaluates the dimensions of selected geometry in Edit Mode, optionally passing through the modifier stack using custom bmesh layers (`__ETERNAL_F__`, `__ETERNAL_V__`) for face/vertex selection masking
- **`sync_dimensions_task()`**: Background timer (~10Hz) that bi-directionally syncs UI properties with actual object dimensions. Includes debouncing (`is_stable()`) for heavy meshes to prevent lag
- **`perform_scale()`**: Transactional scaling that respects Blender's transform pivot point (3D cursor, median point, active element, etc.). Anchors at drag start and calculates deltas to properly grow/shrink geometry relative to the pivot

### `utils.py` — Operators & Data Management

- **Naming system**: JSON-backed preset storage for categories, types, and name tags with CRUD operators
- **`ETERNAL_OT_SetSmartOrigin`**: Origin alignment using a clever Geometry Nodes hack — temporarily creates a GN modifier that outputs only the bounding box mesh (8 vertices) for instant evaluated BB calculation, even on multi-million vertex meshes
- **Scene hygiene**: Material merging, orphan purging, random material assignment by loose parts or UV islands
- **Color utilities**: Prefix-based material detection and restoration

### `ui.py` — UI Panels

Six N-panel sub-panels under the "ETERNAL" category:

1. **Global Dimensions** — X/Y/Z dimension sliders with Truth Mode toggle, uniform scale, pivot point selector, and group bounds pinning
2. **Smart Origin** — 3×3 compass grid for bbox corner alignment, cursor/geometry median snapping, selection-based origin
3. **Naming Engine** — Tag toggles, index counter, rename objects/collection buttons
4. **Scene Hygiene** — Material cleanup, orphan purge
5. **Color Utilities** — Random materials for loose parts and UV islands, restore base material
6. **Connect & Support** — Social media links (currently commented out)

### `blender_manifest.toml`

Blender 4.2+ extension manifest. Key metadata:
- Version: `1.28.2`
- License: GPL-3.0-or-later
- Tags: Modeling, Object, System
- Permission: File access for naming preset JSON

## Implementation Plans

See `implementation_plan.md` for the Area Light dimensioning feature plan (replacing mesh sliders with light size X/Y controls when an Area Light is selected, with auto-shape transition and pivot-respecting math).

## Coding Conventions

- **Type hints**: Extensively used throughout (`bpy.types.Context`, `mathutils.Vector`, `Optional`, `Tuple`, etc.)
- **Naming**: `ETERNAL_OT_` prefix for operators, `ETERNAL_PT_` for panels, `UI_`/`OP_`/`LBL_`/`MSG_`/`ICO_` prefixes for string constants
- **Performance**: NumPy for bulk vertex processing, hash-based caching, debouncing for heavy meshes, evaluated depsgraph for modifier-aware dimensions
- **Error handling**: Try/finally blocks for mesh cleanup (`eval_obj.to_mesh_clear()`), graceful fallbacks to cage data when evaluation fails
- **State management**: Centralized `RuntimeState` class with class-level attributes and `reset()`/`clear_anchor()` methods
