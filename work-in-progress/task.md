# Task List

## Planning and Architecture
- [x] Create `implementation_plan.md`
- [x] Create architecture description document
- [x] Update `.gitignore` to exclude `buffer/` directory

## Analysis
- [ ] Analyze component documents (md and html) in `buffer/`
- [x] Create `ai_principles.md` to define working rules
- [x] Expand ALL base tokens to 11-shade scales (Yellow, Green, Purple, Pink, Brown)
- [x] Implement `localStorage` persistence for theme switching
- [x] Implement Semantic Token showcase in `/overview`
- [x] Refactor ALL tokens to strictly Separate Base/Semantic/Component layers
- [x] Create `token_criteria.md` and `insights.md` analysis
- [ ] Provide PowerShell execution policy fix for `npx serve`
- [ ] Verify color contrast and theme switching with new scales

## Redesign & Overview Overhaul
- [x] Overhaul `/overview/index.html`:
    - [x] Implement tabbed navigation (Foundation vs Components)
    - [x] Foundation Tab: Full color swatches (all 11 shades), Spacing, Radius, Transitions
    - [x] Components Tab: All Notion-style blocks (Callouts, Toggles, Lists, Columns, etc.)
- [ ] Implement Mobile Version (Responsive Design for all components)
- [x] Fix Router fallback for local `file://` usage (explained to user)
- [x] Move images from buffer to central `/images` folder
- [ ] Rewrite `index.html` with high-fidelity content from buffer files (Pending Insights)

## Portfolio Case Editor (Future Phase)
- [ ] Plan the development of the case editor
- [ ] Define case fields and Notion-like UI features
- [ ] Implement editing/saving functionality
- [ ] Ensure compatibility with GitHub Pages
