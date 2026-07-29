# Liquid Glass — Implementation Reference

Read `../SKILL.md` first for the design rules. This file is code: tokens, recipes, and a working example to adapt, not copy verbatim into every project — tune blur/opacity/shadow numbers to the specific surface and content you're placing glass over.

Real lensing (actual light refraction/displacement) isn't available in plain CSS. These recipes approximate it with layered blur, saturation boost, inset highlights, and a soft specular gradient — which reads convincingly as glass without a shader. If the target is a native app (SwiftUI) or a canvas/WebGL context, true refraction via `feDisplacementMap`/backdrop shaders is possible and noted at the bottom.

## Design tokens (CSS custom properties)

```css
:root {
  /* Regular variant — adapts, use almost everywhere */
  --glass-regular-bg-light: rgba(255, 255, 255, 0.55);
  --glass-regular-bg-dark: rgba(30, 30, 32, 0.55);
  --glass-blur: 20px;
  --glass-saturate: 1.8;

  /* Clear variant — permanently transparent, needs a dimming layer */
  --glass-clear-bg: rgba(255, 255, 255, 0.12);
  --glass-clear-dim: rgba(0, 0, 0, 0.25);

  /* Edge / highlight */
  --glass-border: rgba(255, 255, 255, 0.35);
  --glass-specular: rgba(255, 255, 255, 0.6);

  /* Shadow — vary opacity per-instance based on what's behind it */
  --glass-shadow-soft: 0 4px 16px rgba(0, 0, 0, 0.08);
  --glass-shadow-deep: 0 12px 32px rgba(0, 0, 0, 0.22);

  /* Tint — set per-instance from sampled/approximate content color */
  --glass-tint: transparent;

  /* Motion */
  --glass-ease: cubic-bezier(0.32, 0.72, 0, 1);
  --glass-duration: 380ms;
}
```

## Base recipe — Regular variant, small control (e.g. a toolbar button)

```css
.glass-regular {
  position: relative;
  background: color-mix(in srgb, var(--glass-regular-bg-light) 100%, var(--glass-tint) 15%);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  border: 1px solid var(--glass-border);
  border-radius: 999px; /* concentric with rounded device/window corners */
  box-shadow:
    var(--glass-shadow-soft),
    inset 0 1px 0 var(--glass-specular); /* top specular highlight */
  transition: transform var(--glass-duration) var(--glass-ease),
              box-shadow var(--glass-duration) var(--glass-ease);
}

@media (prefers-color-scheme: dark) {
  .glass-regular {
    background: color-mix(in srgb, var(--glass-regular-bg-dark) 100%, var(--glass-tint) 15%);
  }
}
```

## Larger surface (sidebar / sheet) — thicker material, deeper shadow, ambient bleed

Larger glass gets a stronger blur, a deeper shadow, and a soft tinted glow pulled from nearby content — but it should NOT flip light/dark the way small controls do; only its shadow/tint depth changes.

```css
.glass-panel {
  background: var(--glass-regular-bg-light);
  backdrop-filter: blur(32px) saturate(2);
  -webkit-backdrop-filter: blur(32px) saturate(2);
  border-radius: 24px;
  box-shadow:
    var(--glass-shadow-deep),
    inset 0 1px 0 var(--glass-specular),
    inset 0 0 40px var(--glass-tint); /* ambient bleed from content color */
}
```

## Clear variant — only over bold, media-rich content, always with a dimming layer

```css
.glass-clear-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}
.glass-clear-wrapper::before {
  /* the dimming layer — required for legibility, per the 3-condition rule in SKILL.md */
  content: "";
  position: absolute;
  inset: 0;
  background: var(--glass-clear-dim);
  z-index: 0;
}
.glass-clear {
  position: relative;
  z-index: 1;
  background: var(--glass-clear-bg);
  backdrop-filter: blur(12px) saturate(1.4);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
}
```

## Specular highlight sweep (approximates lensing on a curved edge)

A thin bright arc along the top edge, slightly brighter at one side, sells the "light bending across a curved lens" read better than a flat inset highlight alone.

```css
.glass-specular-edge {
  position: relative;
}
.glass-specular-edge::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(255, 255, 255, 0.05) 60%,
    rgba(255, 255, 255, 0.5) 100%
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

## Touch/press feedback — glow from contact point, not a flat highlight state

```css
.glass-regular {
  --glow-x: 50%;
  --glow-y: 50%;
}
.glass-regular:active {
  box-shadow:
    var(--glass-shadow-soft),
    inset 0 1px 0 var(--glass-specular),
    0 0 24px 4px rgba(255, 255, 255, 0.35);
  transform: scale(0.97);
}
```

```js
// Track pointer position so the glow can originate from the actual tap point
el.addEventListener('pointerdown', (e) => {
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
  el.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
});
```

Then reference `radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.4), transparent 60%)` as an additional background layer on `:active` instead of the flat glow above, for a true contact-point effect.

## Morph transition (button → menu), not a cross-fade

Animate `border-radius`, `width`, `height`, and `padding` together with FLIP or a layout-animation library (Framer Motion's `layout` prop, or manual FLIP with `transform`) so the element visibly stretches from its compact state into its expanded state, anchored at the same point it was tapped. Avoid `display: none` swaps between two separately-styled elements — that reads as a cross-fade, not a morph.

```jsx
// Framer Motion sketch
<motion.div layout transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
  className={open ? 'glass-panel' : 'glass-regular'}>
  {open ? <MenuContents /> : <ButtonIcon />}
</motion.div>
```

## Scroll edge dissolve

```css
.scroll-region {
  mask-image: linear-gradient(to bottom, transparent 0, black 24px);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 24px);
}
```
Apply this mask to the *scrolling content*, not the glass toolbar, so content fades out just before it would visually collide with the fixed glass header.

## Accessibility fallbacks

```css
@media (prefers-reduced-transparency: reduce) {
  .glass-regular, .glass-panel {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: var(--glass-regular-bg-light);
    background-color: rgb(245 245 247); /* solid fallback */
  }
}

@media (prefers-contrast: more) {
  .glass-regular, .glass-panel {
    border-width: 1.5px;
    border-color: currentColor;
    box-shadow: var(--glass-shadow-deep);
  }
}

@media (prefers-reduced-motion: reduce) {
  .glass-regular, .glass-panel {
    transition: opacity 120ms linear !important;
  }
  /* disable morph/spring transitions; swap to instant or plain fade */
}
```

## Full example — glass toolbar with two buttons

```html
<div class="glass-panel toolbar">
  <button class="glass-regular glass-specular-edge">🔍</button>
  <button class="glass-regular glass-specular-edge">✚</button>
</div>

<style>
  .toolbar {
    display: flex;
    gap: 8px;
    padding: 8px;
    width: fit-content;
    border-radius: 28px;
  }
  .toolbar .glass-regular {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: none; /* handled by ::after specular edge instead */
  }
</style>
```

## Going further: true refraction

For a WebGL/canvas surface (e.g. a Three.js or Shader-based hero element) or a native SwiftUI build, true lensing is achievable:
- **SVG**: `<feImage>` + `<feDisplacementMap>` sampling a blurred snapshot of the background, displaced by a normal-map-like gradient shaped like the glass element's edge, gives a genuine bending effect at the boundary. Heavier to compute; reserve for a hero moment, not every button.
- **SwiftUI**: use the native `.glassEffect()` API (iOS 26+) rather than reimplementing this from scratch — it already implements the full adaptive/lensing/motion system described in `SKILL.md`.
- **Three.js/WebGL**: a fragment shader sampling a background render texture with UV offset by a normal map computed from the mesh's screen-space edge produces real refraction; combine with a blur pass and Fresnel-based specular for the full effect.