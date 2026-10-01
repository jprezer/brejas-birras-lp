---
name: Local Label
description: A bold and adaptable storefront system for local-business landing pages.
colors:
  street-ink: "oklch(17% 0.008 150)"
  street-surface: "oklch(23% 0.009 150)"
  signal-orange: "oklch(68% 0.2 42)"
  signal-orange-active: "oklch(74% 0.19 45)"
  clean-paper: "oklch(96% 0.006 95)"
  muted-on-dark: "oklch(78% 0.008 95)"
  muted-on-light: "oklch(45% 0.01 95)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 9.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 6.2vw, 5.8rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  sharp: "2px"
  soft: "8px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  section: "clamp(4.75rem, 9vw, 8.75rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.street-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "15px 18px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.signal-orange-active}"
    textColor: "{colors.street-ink}"
  button-inverse:
    backgroundColor: "{colors.street-ink}"
    textColor: "{colors.clean-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "15px 18px"
    height: "54px"
---

# Design System: Local Label

## Overview

**Creative North Star: "Vitrine de Rua"**

Brejas & Birras deve transmitir uma loja e pub de bairro vivos: reconhecível de longe, divertido de explorar e direto para pedir, visitar ou encontrar um presente. O amarelo da fachada, o preto e o verde conduzem uma página mais gráfica e energética, sem cair no visual genérico de pub escuro.

The system is image-led and flat by default. Scale, color fields, rules, and typography create structure; effects never substitute for real business proof. It explicitly rejects generic marketplace templates, interchangeable SaaS landing pages, glassmorphism, endless icon-card grids, timid neutral palettes, fake editorial luxury, and decorative gradients.

**Key Characteristics:**

- decisive photography and large condensed headlines;
- one saturated signal color carrying actions and transitions;
- long, rule-separated content rows instead of repeated floating cards;
- direct labels, local proof, and contact actions;
- fluid spacing and mobile-first reflow with no hidden content.

## Colors

The default palette behaves like painted signage against a dark workshop: almost-black structure, a clean neutral field, and one high-energy signal color.

### Primary

- **Signal Orange:** The action and emphasis color. It carries the announcement bar, primary buttons, key words, rating stars, and the location section.
- **Signal Orange Active:** Reserved for interactive hover states and never introduced as a competing second accent.

### Neutral

- **Street Ink:** The main dark canvas and inverse button color.
- **Street Surface:** A shallow tonal step for the services section; it creates depth without a shadow.
- **Clean Paper:** The light reading surface used for statements and social proof.
- **Muted on Dark / Muted on Light:** Supporting text colors chosen for their respective backgrounds; never swap them across modes.

### Named Rules

**The One Signal Rule.** One accent color owns actions, highlighted language, and location. Never introduce decorative secondary accents inside one brand preset.

**The Contextual Muted Rule.** Gray is not universal. Supporting copy must use the muted token designed for its current light or dark surface.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)  
**Body Font:** Manrope (with Arial and sans-serif fallbacks)

**Character:** The display face is compressed, physical, and sign-like; the body face is open and practical. The contrast lets headlines carry identity while details remain easy to scan on a phone.

### Hierarchy

- **Display** (900, fluid 4rem–6rem, 0.82): Hero language only; keep it short and split into intentional lines.
- **Headline** (800, fluid 3rem–5.8rem, 0.92): Section-level promises and major statements.
- **Title** (800, fluid 2.2rem–4rem, 0.95): Service names and location details.
- **Body** (500, 1rem, 1.7): Descriptions and proof, capped near 70 characters per line.
- **Label** (800, 0.7rem, 0.1em, uppercase): Navigation, metadata, and short actions only.

### Named Rules

**The Distance Test.** A visitor should understand the hero promise at a glance without the display type exceeding 6rem or tightening beyond -0.04em.

**The No-Shouting Body Rule.** Uppercase is reserved for labels and display headlines; sentences remain in normal case.

## Elevation

The system is flat by default. Depth comes from tonal surfaces, decisive borders, full-width color changes, and image overlays. Shadows are intentionally absent from the core language; interactive lift is expressed with a small vertical transform, not a diffuse glow.

### Named Rules

**The Storefront Rule.** If a surface needs a large soft shadow to feel separate, the hierarchy or color boundary is too weak.

## Components

### Buttons

- **Shape:** Compact and structural; the default Impact preset uses a near-square corner (2px), while other presets may choose the documented soft or pill token.
- **Primary:** Signal Orange on Street Ink, 54px minimum height, with the label and arrow separated by generous internal space.
- **Hover / Focus:** Move upward by 3px with exponential easing; keyboard focus always uses a 3px visible ring.
- **Secondary:** A text link with a one-pixel underline. It never competes with the filled primary action.

### Chips

- **Style:** Proof chips use a small colored dot and a short label/value pair rather than a rounded container.
- **State:** Informational only; do not style static proof as a clickable pill.

### Cards / Containers

- **Corner Style:** Surfaces top out at 12px in the warm preset; the default is nearly square.
- **Background:** Full-width neutral or accent fields establish sections.
- **Shadow Strategy:** No resting shadows.
- **Border:** One-pixel contextual rules separate rows and review items.
- **Internal Padding:** Fluid, with 24–40px on substantial content blocks.

### Navigation

Desktop navigation is sparse and label-sized, with an animated underline that follows reading direction. Mobile navigation becomes a full-height dark menu with large display-type links, a real expanded state, Escape handling, and scroll locking.

### Service Row

Services are expressed as full-width rows with a directional mark, large title, useful description, and compact detail line. This resists the interchangeable icon-card grid and keeps the composition editorially strong without borrowing fake magazine conventions.

## Do's and Don'ts

### Do:

- **Do** use one decisive, locally relevant hero image and preserve readable foreground contrast.
- **Do** keep the primary action explicit, repeated sparingly, and at least 44px tall.
- **Do** use full-width color fields, one-pixel rules, and scale to express hierarchy.
- **Do** preserve visible focus, semantic landmarks, reduced-motion handling, and resilient mobile reflow.
- **Do** let each preset change the brand atmosphere while retaining the same conversion hierarchy.

### Don't:

- **Don't** produce generic marketplace templates or interchangeable SaaS landing pages.
- **Don't** use glassmorphism, decorative gradients, or timid neutral palettes.
- **Don't** create endless icon-card grids; use rows, split compositions, or one featured proof item.
- **Don't** imitate fake editorial luxury with italic serif headlines, mono metadata, and ornamental rules.
- **Don't** use side-stripe accent borders, gradient text, decorative grid backgrounds, or cards rounded beyond 16px.
- **Don't** paste cycling language or visual cues into a new niche; only the structure is white-label.
