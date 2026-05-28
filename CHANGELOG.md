# Changelog

All notable changes to **EternalShade3D Utility Toolbox** are documented here.

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

[1.28.3]: https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.3
[1.28.2]: https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.2
[1.28.1]: https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.28.1
[1.27.x]: https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases
[1.26.x]: https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases
[1.22.2]: https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.22.2
[1.22.0]: https://github.com/EternalShade3D/EternalShade3D-Toolbox/releases/tag/v1.22.0
