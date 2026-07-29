---
name: liquid-glass-ui
description: Design and build UI components in Apple's "Liquid Glass" visual language — a translucent, light-bending navigation-layer material with adaptive tint, dynamic shadows, specular highlights, and fluid motion. Use this skill whenever the user asks for a "liquid glass", "glassmorphism", "frosted glass", "translucent glass UI", "Apple-style glass", or "iOS 26 / macOS Tahoe style" component, mockup, or design system — for toolbars, tab bars, sidebars, buttons, sheets, menus, dock/navigation elements, cards, or any HTML/CSS/React/SVG artifact meant to evoke that look. Also use it when asked to critique, adapt, or "make it feel more Apple-native" for an existing glassy interface, or to translate a Liquid Glass concept into a different design tool (e.g. Figma, Google Stitch, Framer). Do NOT use for flat/opaque Material Design or generic neumorphism unless the user explicitly wants glass.
---

# Liquid Glass UI

A design system skill for building translucent "glass" interface elements that bend, tint, and react to the content and light behind them — modeled on Apple's Liquid Glass material introduced across iOS/iPadOS/macOS/visionOS. This is a **navigation-layer material**, not a general-purpose surface treatment.

## When to reach for the reference files

- Read this file first for the design rules — what glass is *for*, where it goes, and how it behaves.
- Read `references/implementation.md` before writing any actual CSS/React/SVG — it has ready-to-adapt tokens, backdrop-filter recipes, specular-highlight techniques, and a working component example. Don't hand-roll blur/shadow values from scratch; start from those recipes and tune them.

## Core concept

Liquid Glass is not a flat blur-and-tint effect. It's a *lensing* material: it bends and concentrates the light of whatever is behind it, the way a real lens or a bead of liquid does, rather than just scattering it (which is what older frosted-glass/blur effects do). That's the single idea to hold onto — every rule below exists to serve it. When in doubt, ask: "does this read as glass bending light, or as a translucent PNG sitting on top of content?"

The material is also treated as physically responsive: it flexes on touch, glows from the point of contact outward, and morphs its shape when it changes context (e.g. a button expanding into a menu) rather than cross-fading between two static states.

## Two variants — never mix them

**Regular** — the default, used almost everywhere. Fully adaptive: it shifts tint, contrast, and light/dark appearance based on what's underneath, so it stays legible over anything. Anything can sit on top of it.

**Clear** — permanently transparent, with no adaptive legibility behavior. Only use Clear when *all three* are true:
1. It sits over media-rich content (video, photos, colorful imagery).
2. Adding a dimming layer underneath won't hurt that content.
3. The content/icons placed on top of the glass are bold and high-contrast on their own.

If any of those three isn't true, use Regular. Never let a Regular and a Clear element sit adjacent in the same navigation surface.

## Where glass goes — and where it doesn't

- **Navigation layer only**: toolbars, tab bars, sidebars, floating action buttons, menus, sheets that float above content. Glass exists to separate the "controls" plane from the "content" plane.
- **Never in the content layer.** A table row, a content card, a message bubble — these should not be glass. Making content itself glassy erases the hierarchy glass is supposed to create.
- **Never glass-on-glass.** If an element sits on top of a glass surface (an icon, a badge, a small control), give it a fill/vibrancy/opacity treatment instead of its own independent glass material. Stacking two lensing surfaces reads as visual noise, not depth.

## Adaptivity rules

- **Size changes material weight.** A small glass button reads as a thin, light lens. A glass element that expands (a button opening into a menu, a sidebar widening) should simultaneously deepen its shadow, strengthen its refraction/highlight, and feel like a physically thicker slab of material — not just a bigger version of the same flat effect.
- **Tint follows content luminance.** The glass should sample (or approximate sampling) the color/brightness of what's behind it and tint itself accordingly, the way real colored glass would. Use tint sparingly — reserve it for primary actions or elements you want to emphasize; tinting everything defeats the purpose.
- **Light/dark flips only for small elements.** Small icons, glyphs, and compact controls (tab bar icons, small buttons) should flip between light and dark rendering based on what's behind them, for maximum legibility. Large surfaces (sidebars, big menus, sheets) should *not* flip — the transition would be too visually loud at that size. They adapt shadow/tint/contrast instead.
- **Ambient bleed on large surfaces.** For big glass panels (sidebars, full-width toolbars), let nearby colorful content visually "spill" a little light onto the glass edge closest to it — reinforcing that the glass is elevated above and aware of what's under it.

## Shadow & light behavior

- Shadow opacity should respond to what's underneath: deeper/darker shadow over busy or dark content (for separation), lighter/softer shadow over plain light backgrounds.
- On interaction (tap, press, drag), the material should illuminate from the point of contact and let that glow subtly propagate outward — including onto neighboring glass elements, if any are close by. This is the primary feedback mechanism, doing the job a highlight/ripple state does in flatter design systems.
- When a window or panel loses focus, its glass should visually recede (lower contrast, quieter highlights) rather than staying fully energized — this helps guide attention back to the active surface.

## Motion

- Elements **materialize**, they don't fade. Prefer animating the lensing/refraction intensity and blur radius in, rather than a plain opacity cross-fade — it should look like the material is condensing into presence, not appearing behind a scrim.
- Context changes (switching tabs, opening a menu from a button) should **morph** the glass shape from state A to state B as one continuous surface, not swap two separately-faded elements. A menu opening from a toolbar button should look like the button's own bubble is stretching open to reveal its contents, staying anchored at the tap point.
- Respect `prefers-reduced-motion` — fall back to quick opacity/scale transitions with no morphing when it's set.

## Scroll edge effects (companion to glass, not glass itself)

When content scrolls underneath a fixed glass toolbar/header, don't just let it slide under a static blur. Dissolve the content into the background as it approaches the edge (a gradient mask fading opacity to zero right at the boundary) so floating labels/titles on the glass stay legible against a softened backdrop. If the content triggers the glass to switch to its dark appearance, swap the dissolve for a subtle dimming gradient instead. For places where you need a harder line of separation (e.g. pinned column headers under a toolbar), apply a flat, uniform edge instead of a gradual fade.

## Accessibility — build these in, don't treat as optional extras

- **Reduced transparency**: raise the material's opacity/reduce blur so it reads as a mostly-solid surface; keep general shape and color, drop the "see-through" quality.
- **Increased contrast**: strengthen the border/edge definition and shadow so the glass boundary is unambiguous even without relying on the blur difference.
- **Reduced motion**: disable the morphing/energizing animations described above; keep state changes instant or simply cross-faded.

Wire all three to the relevant OS/browser media queries (`prefers-reduced-transparency`, `prefers-contrast`, `prefers-reduced-motion`) rather than making them manual toggles the user has to find.

## Quick do / don't checklist

**Do**
- Reserve glass for floating navigation/control surfaces.
- Pick Regular by default; justify Clear against the three-condition test above.
- Vary shadow and tint based on what's actually behind the element.
- Let small controls flip light/dark; let large surfaces flip tint/shadow only.
- Animate state changes as a morph, not a cross-fade.

**Don't**
- Put glass in the content layer (list rows, cards, chat bubbles).
- Stack glass on glass.
- Mix Regular and Clear in the same navigation surface.
- Tint every element — it should mark emphasis, not be the default.
- Ship the effect without reduced-transparency / reduced-motion / increased-contrast fallbacks.

## Next step

For actual code (CSS custom properties, backdrop-filter recipes, a specular-highlight technique that works in plain CSS/SVG, and a full working toolbar/button example), open `references/implementation.md`.