# UI Preservation and Minimal-Change Rule

The existing UI design is canonical.

When modifying an existing interface, assume that all current visual design decisions are intentional unless the user explicitly requests a redesign.

## Mandatory Behavior

1. Make the smallest possible change that satisfies the user's request.
2. Preserve all existing:
   - Layout structure
   - DOM/JSX hierarchy
   - Tailwind classes
   - CSS rules
   - Typography
   - Colors
   - Spacing
   - Responsive behavior
   - Animations
   - Transitions
   - Hover and focus states
   - Component APIs
3. Do not replace existing design decisions with generic, "cleaner", "modern", or "more minimal" alternatives.
4. Do not refactor code unless refactoring is explicitly requested.
5. Do not reorganize files or move components unless explicitly requested.
6. Do not perform unrelated cleanup while implementing a requested change.
7. Do not modify files outside the requested scope unless the user explicitly approves those additional files.

## Scope Control & Modes

### MODE: TWEAK (Default for bug fixes & micro edits)
- Change only what is requested.
- Change budget: Max 1 file, 1 component, 1 property.
- Preserve everything else.

### MODE: DESIGN (Explicitly specified by user)
- May restructure UI, modify multiple components, and propose architectural changes after creating an Implementation Plan for user review.

## Visual Preservation

When the user requests a tweak, preserve the existing visual language:
- "Increase padding" means change padding only.
- "Move this element" means adjust positioning only.
- "Change this color" means change that color only.
- "Fix this animation" means modify that animation only.

Do not interpret a small request as permission to redesign the component.

## Forbidden Autonomous Behavior

Do NOT:
- Redesign
- Modernize
- Simplify
- Refactor
- Rebuild
- Reorganize
- "Clean up"
- Standardize
- Replace custom styling with defaults
- Replace custom UI with boilerplate patterns

unless explicitly requested.
