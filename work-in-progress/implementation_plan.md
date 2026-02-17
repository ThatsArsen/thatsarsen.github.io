# Portfolio Site Implementation Plan

This plan outlines the steps to overhaul the portfolio site with a modern design system, SPA-like navigation, and high-quality case pages.

## Proposed Changes

### Core System
- [NEW] `styles/base_tokens.css`: Define base (primitive) range of colors and spacing.
- [NEW] `styles/semantic_tokens.css`: Define theme-specific alias tokens (dark/light).
- [NEW] `styles/main.css`: Global styles, layout, and theme switching logic.
- [NEW] `scripts/router.js`: History API implementation for seamless navigation.
- [NEW] `scripts/theme_switcher.js`: Logic to handle dark/light theme persistence.

### Component Showcase
- [NEW] `overview/index.html`: Showroom for components and tokens.
- [NEW] `styles/components.css`: Modular styles for all identified components.

### Media & Asset Strategy
- [MOD] `/images`: Central repository for all site imagery to simplify future migration to external hosting.
- [NEW] Placeholder logic: All `<img>` tags should have a standard loading placeholder or a "broken image" fallback style in `main.css`.
- [STRATEGY] Plan for `data-src` or variable-based image URLs to easily switch between local `/images/` and external CDN/Hosting paths.

### Overview Page (Revamped)
- [MOD] `overview/index.html`: 
    - Full Design System showcase.
    - Tabbed interface: **Foundation** (Tokens) vs **Components**.
    - Exhaustive list of all Notion-style blocks (Callouts, Toggles, Lists, etc.).

### Main Page Redesign (Strategies from Insights)
- [MOD] `index.html`:
    - **Hero Section**: Compact layout, "Value Proposition" header, Notion-style callouts for links.
    - **Experience**: Horizontal Timeline or "Projects/Features" breakdown.
    - **Social Proof**: "Kind Words" testimonials block.
    - **Case Cards**: "Action + Metric" titles (e.g., "Reduced Churn by 15%").

### Case Editor (Research & Design)
- [NEW] `docs/editor_spec.md`: Detailed functional requirements for the Notion-style case editor.

## Verification Plan

### Automated Tests
- N/A (Project is mostly static HTML/CSS/JS)

### Browser Verification
1. Open `index.html` in the browser.
2. Navigate between Home, /overview, and /portfolio/oopsify.
3. Verify that the URL changes without page reload.
4. Verify that the "Back" button works correctly.
5. Check responsiveness on mobile and desktop views.
6. Verify design token usage (changing a token in CSS should reflect across all components).

### Manual Verification
1. Visual inspection of the Oopsify case page for micro-animations and layout consistency.
2. Verify that `embed/`, `portfolio/`, and `resume/` directories remain functional.
3. Confirm that `buffer/` is ignored by git.
