---
name: Lumina Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The brand personality is sophisticated, precise, and understated. This design system targets a professional audience in technology and design, evoking a sense of calm authority and technical mastery. 

The aesthetic is rooted in **Minimalism** with a **Modern / Corporate** edge. It prioritizes clarity and intentionality, using generous whitespace to allow the portfolio content—projects, case studies, and code—to take center stage. The interface should feel like a premium gallery: quiet enough to not distract, but polished enough to signal high-end quality. Motion should be subtle, focusing on smooth transitions and intentional fades rather than decorative flourishes.

## Colors
The color strategy employs a high-contrast foundation to ensure legibility and focus. 

**Dark Mode (Default):**
- **Surface:** Deep Charcoal (#121212) serves as the primary canvas.
- **Content:** Soft White (#E0E0E0) for primary text to reduce eye strain while maintaining high contrast.
- **Accent:** Electric Violet (#6366F1) is used sparingly for Call-to-Action (CTA) elements, focus states, and active indicators.

**Light Mode:**
- **Surface:** Clean White (#FFFFFF) for a crisp, airy feel.
- **Content:** Dark Grey (#333333) for text, ensuring a soft but clear reading experience.
- **Accent:** The same Electric Violet (#6366F1) is retained for brand consistency across modes.

Functional colors (Success, Warning, Error) should be desaturated to fit the minimalist palette.

## Typography
The system utilizes **Inter** for all primary communication due to its exceptional legibility and neutral, systematic character. For technical details, metadata, or labels, **JetBrains Mono** is introduced to provide a subtle "developer-centric" texture.

- **Headlines:** Use tight letter-spacing (-0.02em) for large display text to create a compact, modern feel.
- **Body:** Standardized on a 16px/18px base for optimal readability. Use a slightly lighter weight (400) on dark backgrounds to prevent "ink spread" visual fatigue.
- **Hierarchy:** Maintain a strict vertical rhythm. Large display type should be used exclusively for hero sections and major project titles.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium gallery feel, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid with a 24px gutter. On desktop, the content is centered within a 1280px container.
- **Rhythm:** An 8px linear scale governs all spacing. Section headers should be separated from content by 48px (6 units), while global sections (e.g., Hero to Work) are separated by a generous 120px (15 units) to emphasize the minimalist aesthetic.
- **Mobile Adaption:** Margins shrink to 20px. Grid collapses to a single column for project cards, while maintaining the same 8px-based internal padding for components.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Surfaces:** Use a subtle "Elevation 1" background (a slightly lighter charcoal in dark mode, #1E1E1E) for cards and modals to separate them from the base #121212 layer.
- **Outlines:** Instead of shadows, use 1px solid borders for cards and containers. In Dark Mode, use `white/10%` opacity. In Light Mode, use `black/5%` opacity.
- **Active State:** When an element is hovered, apply a very soft, diffused ambient shadow with the primary accent color at 10% opacity to create a subtle glow effect.
- **Modals:** Use a heavy backdrop blur (20px) to dim the background, ensuring the focus remains entirely on the modal content.

## Shapes
The shape language is **Soft** (Level 1). This ensures the UI feels modern and approachable without becoming too "bubbly" or informal.

- **Components:** Standard buttons and input fields use a 0.25rem (4px) radius. 
- **Cards & Modals:** Use a `rounded-lg` (0.5rem / 8px) radius to provide a clear container structure.
- **Interactive Elements:** Maintain consistent corner radii across all form elements to preserve the grid-based architectural feel.

## Components
- **Sticky Navigation:** A minimal bar at the top with a 10px backdrop blur. Nav links should use the `label-caps` style with a subtle underline transition on hover.
- **Primary Buttons:** Solid background using the accent color (#6366F1). Text should be white in both modes for maximum punch. High-speed hover transition to a slightly darker shade.
- **Project Cards:** 1px low-opacity borders. Media (images/video) should fill the top half. Content area uses `body-md` for descriptions and `label-caps` for tags/technologies.
- **Input Fields:** Ghost-style inputs with a 1px border. On focus, the border transitions to the primary accent color.
- **Chips/Tags:** Small, secondary-colored pills with `label-caps` typography, used for categorizing skills or project types.
- **Custom Modals:** Centered, 0.5rem rounded corners, utilizing a vertical slide-up animation. Close button should be a minimal 'X' in the top right corner, positioned outside the padding area.