# Changelog

All notable changes to **EternalShade3D Utility Toolbox** are documented here.

---

## [1.29.1] — 2026-07-22

### Added
- **Camera Screenshots** — Capture clean product shots straight from Blender: full-window capture, adjustable pre-screenshot delay, ESC to stop, live status readout, and captured PNGs appended to Blender's image list. Ships as a built-in feature (no optional loader).

---

## [1.28.6] — 2026-07-22

### Changed
- Maintenance release. Code is identical to v1.28.5; only the manifest version string was bumped.

---

## [1.28.5] — 2026-07-22

### Fixed
- **Edit Mode selection readout freeze (B1)** — Replacing a selected loop with another loop of identical element counts no longer freezes the local Truth/Cage dimensions at the prior selection's size; a real per-vertex-set signature now forces a fresh re-evaluation.
- **Multi-axis burst edit (B2)** — Cluster-selecting several dimension axes and typing one value now applies all axes atomically instead of fighting per-axis callbacks.
- **Truth-Mode local dims (B3)** — Evaluated size is correctly driven on type/snap and a truth_cache `hash` crash is guarded.

---

## [1.28.4] — 2026-05-29

### Added
- **Keyboard Shortcuts** — Apply Scale (`Ctrl+Shift+A`) and Round Dimensions (`Ctrl+Shift+R`) for faster, menu-free workflows.
- **Destructive-action Confirmations** — Merge Materials and Purge Orphans now show a confirmation dialog before running, preventing accidental material loss.
- **Context-Aware Operators** — All operators expose `poll()` methods and auto-disable their buttons when not applicable, for a cleaner, less confusing UI.

### Changed
- **Reverted Viewport-Aware Compass** — The experimental viewport-aware smart origin compass has been removed; Smart Origin reverts to the stable 9-point compass grid. The compass feature will be revisited in a future version.

### Fixed
- **Edit Mode viewport lag** — A depsgraph dirty-flag fix eliminates dimension-recalculation lag on heavy meshes while editing.
- **Addon stability** — Restored stable UI after compass experiments broke panel rendering; defensive `register()` / `unregister()` prevents add-on breakage on Blender reload.
- **Internal cleanup** — `debug.info()` → `debug.log()` consistency, deduplicated preferences handling, and reliable debug logging across modules.
- **File organization** — Moved graphify output files into `graphify-out/`.
- **Release build script** — Added `_build_release.py` for versioned zip packaging.

---

## [1.28.3] — 2026-04-10

### Added
- **Debug Logging System** — New `debug.py` module with centralized `log()`, `warn()`, `error()` functions. Toggleable in addon preferences. Logs all user-facing operators, property toggles, and data operations without background timer noise.
- **Social Links in Preferences** — Connect & Support section with Gumroad, FairMarket, GitHub, Discord, and Instagram buttons in a compact horizontal layout.
- **Debug logging on all operators** — ApplyScale, RoundDimensions, CalcGroupBounds, SetSmartOrigin, NameObject, NameCollection, MergeMaterials, RandomIslands, RandomUVIslands, ClearRandomColors, ObjToMat, MatToObj.
- **Debug logging on property toggles** — Truth Mode, Date Prefix, Category/Type/Name naming tags.

### Fixed
- **Material accumulation bug** — Random Islands and Random UV Islands now reuse existing materials instead of creating duplicates. Re-clicking the button recolors without growing the material count.
- **ClearRandomColors orphan purge** — Now removes orphaned random materials from `bpy.data` after clearing slots.
- **Custom preset path resolution** — `get_data_file()` now uses the correct addon ID (`__package__` instead of `__package__.split('.')[0]`), fixing preferences lookup in Blender's extension system.
- **Debug logging not working** — Fixed swapped argument order in `debug.py` and incorrect `ADDON_ID` resolution across all modules.

---

## [1.28.2] — 2026-04-09

### Fixed
- Performance optimizations for heavy mesh dimension calculations.
- Stability improvements in background sync timer.

---

## [1.28.1] — 2026-04-09

### Fixed
- Minor UI alignment tweaks.
- Tooltip corrections in dimensions panel.

---

## [1.27.x] — 2026-03-23 to 2026-04-07

### Added
- **Pivot-respecting Edit Mode scaling** — Selection dimensions now correctly respect Transform Pivot Point (3D Cursor, Median Point, Active Element, Individual Origins).

### Changed
- Refactored `perform_scale()` for transactional scaling with anchor state management.
- Stability improvements for multi-object scaling operations.

---

## [1.26.x] — 2026-03-18 to 2026-04-04

### Added
- **Group Bounds Pinning** — Pin live bounding box dimensions across selection changes for 2+ selected objects.
- **Visual bounding box guide** — Wireframe cube in 3D viewport showing pinned group bounds.

### Fixed
- Hash caching edge cases for dense meshes.
- Smart-sync threshold debouncing improvements.

---

## [1.22.2] — 2026-03-17

### Added
- **Edit Mode Selection Dimensions** — Local dimensions panel for selected faces/edges/vertices in Edit Mode.
- **Truth Mode toggle** — Switch between evaluated "Truth" math and raw "Cage" fallback for local selections.

### Changed
- Bmesh custom layers (`__ETERNAL_F__`, `__ETERNAL_V__`) for Edit Mode selection masking.

---

## [1.22.0] — 2026-03-15

### Added
- **Evaluated Truth Dimensions** — Real-time object size accounting for ALL modifiers (Subdivision, Displace, Geometry Nodes).
- **Smart Origin Alignment** — 9-point compass grid, geometry median, cursor-based, and selection-based origin snapping.
- **Dynamic Naming Engine** — Preset-based naming with date prefixing and batch renaming.
- **Scene Hygiene** — Merge duplicate materials (.001), purge orphans, sync object/material names.
- **Color Utilities** — Random colors by loose parts or UV islands.
- **Smart Sync** — Auto-throttling for meshes above 100k vertices with hash-based caching.
- **Geometry Nodes bounding box hack** — Instant 8-vertex extraction for multi-million vertex meshes.

---

## [Development History] — 2026-03-04 to 2026-03-14

> Internal development from `v1.09` to `v1.21`. These versions were pre-release checkpoints that were never published.

- **Mar 4** — Development started. Early `bl_info` format (pre-manifest era).
- **Mar 4–14** — 22 checkpoints of iterative development: dimension evaluation engine, Origin alignment, Naming Engine, Scene Hygiene, Color Utilities, and performance optimizations.
- **Mar 15** — First public release (`v1.22.0`) with the complete feature set.

[1.29.1]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.29.1`
[1.28.6]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.6`
[1.28.5]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.5`
[1.28.4]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.4`
[1.28.3]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.3`
[1.28.2]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.2`
[1.28.1]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.1`
[1.27.x]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases`
[1.26.x]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases`
[1.22.2]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.22.2`
[1.22.0]: @url:`https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.22.0`
