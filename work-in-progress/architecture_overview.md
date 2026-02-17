# Portfolio Site Architecture

## Overview
A modern, high-performance portfolio site built with Vanilla HTML/JS and CSS. It uses a custom design token system and a component-based approach inspired by Notion's visual style, but optimized for the web with motion and dynamic interactions.

## Core Principles
- **Scalability**: All styles are based on tokens.
- **Performance**: Minimal dependencies, fast loading.
- **Micro-animations**: Subtle transitions for a premium feel.
- **SPA Experience**: Seamless page transitions using the History API.

## Design System (Tokens)
The site uses a tiered CSS custom property system defined in `:root`.

### Base Level (Primitive Tokens)
Literal values for the color palette, using reverse numbering (darker values are lower).
- `--base-gray-100`: Dark (near black)
- `--base-gray-900`: Light (near white)
- `--base-blue-600`: Standard blue for accents.

### Semantic Level (Alias Tokens)
Tokens that describe the purpose of the color. These change based on the theme.

#### Light Theme (`body.light-theme`)
- `--light-bg-primary`: `var(--base-gray-900)`
- `--light-text-primary`: `var(--base-gray-100)`
- `--light-accent-primary`: `var(--base-blue-600)`

#### Dark Theme (`body.dark-theme`)
- `--dark-bg-primary`: `var(--base-gray-100)`
- `--dark-text-primary`: `var(--base-gray-900)`
- `--dark-accent-primary`: `var(--base-blue-600)`

### Spacing
- `--space-xs`: 4px
- `--space-s`: 8px
- `--space-m`: 16px
- `--space-l`: 24px
- `--space-xl`: 32px

## Components
Components are defined as semantic HTML structures with dedicated CSS classes.
- **Layout**: Main container, headers, footers.
- **Typography**: H1-H3 with specific emoji/icon conventions.
- **Content Blocks**: Callouts, Toggles, Images with Captions, Column Lists.
- **Navigation**: Persistent top/side links, SPA-based routing.

## Navigation System
The site functions as a Single Page Application (SPA):
1. **Dynamic Loading**: `fetch()` API is used to load content without full page refresh.
2. **History API**: `pushState` and `popstate` events manage browser history and the back button.
3. **Seamless Transitions**: Content area is updated with fade-in/out animations.

## Data Structure
- **Cases**: Stored as HTML/JSON for now, potentially Markdown in the future.
- **Assets**: Structured by case name (e.g., `portfolio/oopsify/assets/`).

## Portfolio Case Editor (Future)
A WYSIWYG editor for creating new cases.
- **Input**: Rich text, images, block selection.
- **Output**: Clean HTML matching the component library.
- **Storage**: Direct save to GitHub (via API or local downloads for commit).
