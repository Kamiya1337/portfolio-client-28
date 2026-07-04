---
name: Academic Editorial System
colors:
  surface: '#fff7fb'
  surface-dim: '#e6d5e7'
  surface-bright: '#fff7fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ffefff'
  surface-container: '#fbe8fb'
  surface-container-high: '#f5e3f6'
  surface-container-highest: '#efddf0'
  on-surface: '#221825'
  on-surface-variant: '#4b454c'
  inverse-surface: '#382d3b'
  inverse-on-surface: '#feebfe'
  outline: '#7c757c'
  outline-variant: '#cdc4cc'
  surface-tint: '#6c5773'
  primary: '#695570'
  on-primary: '#ffffff'
  primary-container: '#836d8a'
  on-primary-container: '#fffbff'
  inverse-primary: '#d8bede'
  secondary: '#635b71'
  on-secondary: '#ffffff'
  secondary-container: '#e6dbf5'
  on-secondary-container: '#675f75'
  tertiary: '#6b5376'
  on-tertiary: '#ffffff'
  tertiary-container: '#846c8f'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f4dafb'
  primary-fixed-dim: '#d8bede'
  on-primary-fixed: '#25152d'
  on-primary-fixed-variant: '#53405a'
  secondary-fixed: '#e9def8'
  secondary-fixed-dim: '#cdc2dc'
  on-secondary-fixed: '#1f182b'
  on-secondary-fixed-variant: '#4b4358'
  tertiary-fixed: '#f5d9ff'
  tertiary-fixed-dim: '#d9bde4'
  on-tertiary-fixed: '#271331'
  on-tertiary-fixed-variant: '#543f5f'
  background: '#fff7fb'
  on-background: '#221825'
  surface-variant: '#efddf0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Libre Franklin
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is crafted for high-end academic and editorial environments, prioritizing clarity, intellectual authority, and a sophisticated aesthetic. The brand personality is poised, refined, and archival, evoking the feel of a modern digital library or a premium literary journal. 

The visual style blends **Minimalism** with a **Corporate/Modern** structural discipline. It avoids superfluous decoration, instead using generous whitespace, precise typography, and a muted, tonal color palette to communicate value. The emotional response should be one of calm focus, reliability, and timelessness, ensuring that the content—be it research, portfolios, or editorial pieces—remains the primary focus.

## Colors

The palette is a sophisticated "muted-tone" system. It replaces harsh blacks with a deep plum to maintain softness while ensuring high contrast for readability.

- **Background:** A soft, warm blush (#f8dae1) serves as the primary canvas, providing a warmer, more "paper-like" feel than stark white.
- **Surface/Panels:** Pale lavender (#e8e6f0) is used for cards and secondary panels to create subtle tonal shifts without introducing heavy shadows.
- **Primary/Action:** Dusty mauve (#8d7794) is the signature color for interactive elements, representing stability and academic rigor.
- **Accents:** Muted mauve (#a187ac) provides a bridge between surfaces and actions, ideal for borders and secondary iconography.
- **Text:** Deep plum (#352a38) is used for all primary text to ensure WCAG-compliant contrast while adhering to the warm color profile.

## Typography

The typography system follows a classic editorial hierarchy. **Playfair Display** provides a premium, authoritative voice for headlines, utilizing high stroke contrast to signify elegance. For body text, **Libre Franklin** offers a clean, neutral, and highly legible experience that balances the decorative nature of the serif headlines.

Key principles:
- **Optical Sizing:** Large display titles should use tighter letter-spacing.
- **Hierarchy:** Labels and metadata utilize uppercase Libre Franklin with increased tracking to differentiate them from prose.
- **Readability:** Body text maintains a 1.6x line height to prevent eye fatigue during long-form reading.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop to maintain the feel of a structured editorial spread, while transitioning to a **Fluid Grid** for mobile devices.

- **Desktop:** A 12-column grid with a 1200px max-width, centered on the viewport. Margins are generous (64px) to create an "archival" frame around the content.
- **Mobile:** A 4-column fluid grid with 16px margins. 
- **Rhythm:** Spacing follows an 8px base unit. Stacked elements (paragraphs, sections) use 24px or 48px increments to maintain a breathable, organized vertical rhythm.
- **Tables:** Academic tables should use a minimalist approach—no vertical borders, only horizontal dividers in Muted Mauve (#b39cb5) at 1px thickness.

## Elevation & Depth

This system rejects heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. 

Depth is communicated through color-blocking: 
- The background is the lowest layer (#f8dae1).
- Interactive cards or secondary content areas sit on the next layer using the Pale Lavender Surface (#e8e6f0).
- Borders are used sparingly but strictly—1px solid strokes in Muted Mauve (#b39cb5) define container boundaries without adding visual weight. 
- Shadows, if used at all, are "ambient": extremely light, tinted with the deep plum color, and widely diffused (e.g., `0 4px 20px rgba(53, 42, 56, 0.05)`).

## Shapes

The shape language is **Soft**, but disciplined. To maintain a professional, academic feel, corner radii are kept minimal.

- **Standard (0.25rem):** Used for buttons, input fields, and small UI components.
- **Large (0.5rem):** Used for primary content cards and images.
- **Sharp:** 0px corners are used for vertical dividers and full-width section headers to reinforce the grid-like "archive" structure.
- **Avoid Pills:** Circular or "pill-shaped" buttons are avoided to keep the aesthetic more editorial and less "app-like."

## Components

### Buttons
- **Primary:** Solid Dusty Mauve (#8d7794) with Deep Plum or white text. Minimal roundedness (4px).
- **Secondary:** Outlined with Muted Mauve (#b39cb5), no fill. 
- **Ghost:** No border or fill; Deep Plum text in uppercase Label style.

### Cards
- Surfaces use the Pale Lavender Pink (#e8e6f0) with a 1px Muted Mauve border. Padding should be generous (min 24px).

### Input Fields
- Underline-only or subtle 1px border. Background should be 5% darker than the surface it sits on to denote interactivity.

### Lists & Tables
- Academic tables use "Deep Plum" for headers and "Muted Mauve" for 1px horizontal separators. No zebra striping; use whitespace for row separation.

### Chips/Tags
- Used for academic categories. Small, 12px Libre Franklin, uppercase, with a Pale Lavender background and a 1px Muted Mauve border.