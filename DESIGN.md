---
version: alpha
name: EternalShade3D Utility Toolbox
description: Dark precision design system for the Eternal Utility Toolbox Blender extension landing page. Monochrome base with purple accent and gold CTA, built for hard-surface modelers and ArchViz professionals.
colors:
  bg: "#0a0a0f"
  elevated: "#0e0e16"
  card: "#141420"
  surface: "#1a1a2b"
  border: "#202032"
  borderMedium: "#2a2a45"
  borderHover: "#33334e"
  text: "#f0f0f8"
  muted: "#8b8ba7"
  dim: "#545470"
  heading: "#ffffff"
  accent: "#7c5cfc"
  accentHover: "#6945f9"
  accentLight: "#a48eff"
  accentSubtle: "rgba(124, 92, 252, 0.1)"
  accentBorder: "rgba(124, 92, 252, 0.3)"
  gold: "#f0c040"
  goldHover: "#e0b030"
  goldGlow: "rgba(240, 192, 64, 0.25)"
typography:
  sans:
    fontFamily: "Inter"
    fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"]
    weights: [300, 400, 500, 600, 700, 800]
  mono:
    fontFamily: "JetBrains Mono"
    fallback: ["monospace"]
    weights: [400, 500, 600]
shadows:
  glow-gold: "0 0 32px rgba(240, 192, 64, 0.25), 0 8px 24px rgba(0, 0, 0, 0.5)"
  glow-purple: "0 0 32px rgba(124, 92, 252, 0.2), 0 8px 24px rgba(0, 0, 0, 0.5)"
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#000000"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    boxShadow: "0 0 16px rgba(240, 192, 64, 0.2)"
  button-primary-hover:
    backgroundColor: "{colors.goldHover}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.heading}"
    rounded: "{rounded.md}"
    boxShadow: "0 0 12px {colors.accentSubtle}"
  menu-item:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1rem"
  menu-item-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.heading}"
  skip-link-focus:
    backgroundColor: "{colors.gold}"
    textColor: "#000000"

## Overview

EternalShade3D Utility Toolbox is a dark, precision-oriented design system for a Blender extension landing page. The palette is monochrome-first (deep charcoal bg #0a0a0f) with a single purple accent (#7c5cfc) for interactive highlights and a gold CTA (#f0c040) for conversion actions. Typography pairs Inter (sans) with JetBrains Mono (mono) for a technical, engineering-appropriate feel.

## Colors

- **Bg (#0a0a0f):** Deep charcoal base. Used on `<body>` and the mobile menu panel — the dominant surface.
- **Elevated (#0e0e16):** Slightly lighter than bg. Used for raised cards and containers that need to pop off the background.
- **Card (#141420):** Panel and feature card surface.
- **Surface (#1a1a2b):** Hover/active state surface, darker than card but lighter than bg.
- **Border (#202032):** Subtle divider between sections.
- **BorderMedium (#2a2a45):** Stronger divider for menu headers and footers.
- **Text (#f0f0f8):** Primary body text — near-white but not pure white for reduced glare.
- **Muted (#8b8ba7):** Secondary text and disabled states.
- **Dim (#545470):** Tertiary labels, footers, version numbers.
- **Heading (#ffffff):** Pure white for H1/H2 headings — maximum contrast on dark bg.
- **Accent (#7c5cfc):** Brand purple. Primary interactive color — links, buttons, glows, logo SVG fill (#7149FF variant).
- **Gold (#f0c040):** Brand gold. Reserved for the primary CTA ("Get Addon — €19") only — never used decoratively.

## Typography

- **Sans (Inter):** UI and body text. Weights 300–800. Chosen for readability at small sizes on dark backgrounds.
- **Mono (JetBrains Mono):** Technical labels, dimensions, code-adjacent text. Weights 400–600.

## Layout

- Max-width container `max-w-7xl` with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).
- Mobile-first stack; desktop uses multi-column grids for features, screenshots, and panels.
- Navigation is `h-16` fixed-height header with brand mark on the left, actions on the right.

## Elevation & Depth

- **Glow-gold:** Gold CTA button shadow — subtle outer glow emphasizing the primary action.
- **Glow-purple:** Accent button / logo shadow — purple halo around the brand mark.
- **Radial gradient ambient grid:** Purple-tinted radial gradient + 40px grid overlay on body for depth without imagery.

## Shapes

- **Sm (4px):** Scrollbar thumb, small UI accents.
- **Md (8px):** Cards, menu items, standard border-radius.
- **Lg (12px):** Hero banner, large featured images.

## Components

- **Button-primary:** Gold fill (#f0c040), black text, gold glow shadow. Hover: #e0b030. Used for "Get Addon — €19" CTA only.
- **Button-accent:** Purple fill (#7c5cfc), white text, subtle purple shadow.
- **Menu-item:** Transparent bg, muted text, md radius. Hover: surface bg (#1a1a2b), heading text.
- **Skip-link:** Visually hidden by default, gold bg + black text on focus — WCAG skip-to-content.

## Do's and Don'ts

- **Do:** Keep gold (#f0c040) exclusive to the primary CTA. Do not use it decoratively.
- **Do:** Use accent (#7c5cfc) for the favicon/logo mark (#7149FF fill variant) and interactive highlights.
- **Do:** Maintain minimum 44px touch targets on mobile menu items.
- **Don't:** Introduce new brand colors without adding them to this spec first.
- **Don't:** Use pure black (#000000) as a background — use bg (#0a0a0f) instead.
- **Don't:** Use pure white (#ffffff) for body text — use text (#f0f0f8) for reduced glare.