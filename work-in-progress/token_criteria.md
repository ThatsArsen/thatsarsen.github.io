# Token Design Criteria

## 1. Hierarchy
Tokens must follow a strict three-level hierarchy. **Never** skip a level.

1.  **Primitive (Base) Tokens**: 
    -   **Definition**: Raw hex codes or values.
    -   **Naming**: `--base-{color}-{grade}` (e.g., `--base-blue-500`).
    -   **Usage**: **ONLY** inside Semantic Tokens. Never use directly in components.

2.  **Semantic Tokens**:
    -   **Definition**: Context-aware abstractions that change based on theme (Light/Dark).
    -   **Naming**: `--{property}-{context}-{variant}` (e.g., `--surface-accent-1`, `--text-accent-error`).
    -   **Usage**: Inside Component styles.
    -   **Rule**: Must **NEVER** reference a specific color name (like "blue" or "red") in the variable name, unless it is a universal state (like "error" or "success"). Use numbered slots (1, 2, 3...) or functional names (primary, secondary).

3.  **Component Tokens** (Optional/Rare):
    -   **Definition**: Specific overrides for complex components.
    -   **Naming**: `--{component}-{part}-{property}`.
    -   **Usage**: Only when a component needs a unique value not covered by semantic tokens.
    -   **Rule**: Must reference Semantic Tokens, not Base Tokens.

## 2. Naming Conventions
-   **No Color Names in Semantic Layer**: Avoid `--bg-blue`. Use `--surface-accent-1` or `--surface-info`.
-   **Reverse Numbering for Base**: 050 (Darkest/Black) → 950 (Lightest/White). *Note: This is the user-specified inverted scale.*
-   **Abstract Numbering for Accents**:
    -   Accent 1: Gray/Default
    -   Accent 2: Blue
    -   Accent 3: Green (Success)
    -   Accent 4: Yellow (Warning)
    -   Accent 5: Red/Pink (Error)
    -   Accent 6: Purple
    -   Accent 7: Brown/Orange

## 3. Usage Rules
-   **Theming**: All distinguishing between Light and Dark mode happens **ONLY** in `semantic_tokens.css`.
-   **Components**: `components.css` should look identical for all themes. It should blindly consume semantic tokens.
