# Surface Tokens – Brand Spec (Radii, Shadows, Surfaces, Motion)

This document defines the **surface language** for the NIL platform: radii, shadows, borders, dividers, overlays, z-index, motion, and **surface tiers** for light & dark modes. It’s tuned for a **grayscale-first** brand with athlete (13–22), parent/guardian, and sponsor contexts.

> Why these choices?
> - **Dark mode backgrounds aren’t pure black.** We use deep gray (not #000000) for readability and depth.  
> - **Contrast is explicit.** Normal text must meet WCAG 4.5:1; small text on dark backgrounds should strive for ~7:1.  
> - **Elevation in dark mode** is conveyed via **lighter surfaces** (tonal steps) and **subtle shadows/overlays**.  
> - **Texture is optional and micro.** Tiny noise/grain can add warmth to large empty surfaces—used sparingly to avoid “template” sterility.

---

## 1) Radii (Corners)

```
radii:
  none: 0px            # tables, dividers, strict UI elements
  sm:   4px            # inputs, chips, small tags
  md:   8px            # default: buttons, standard cards
  lg:   16px           # hero cards, featured modules, modals
  full: 9999px         # circular avatars
```

**Guidance**
- Inputs feel **disciplined** at 4px.  
- Buttons/cards default to **8px**.  
- Premium/hype surfaces (hero cards, spotlight CTAs) may use **16px**.

---

## 2) Shadows (Elevation)

```
shadows:
  none: none
  sm:   0px 1px 2px rgba(0,0,0,0.05)      # subtle separation
  md:   0px 4px 8px rgba(0,0,0,0.08)      # default card/menu
  lg:   0px 8px 16px rgba(0,0,0,0.12)     # hover/raised
  xl:   0px 12px 24px rgba(0,0,0,0.18)    # hero CTA/hype
```

**Psychology**
- **Athlete flows:** use **lg–xl** on interactive/hype moments.  
- **Parent/sponsor flows:** prefer **sm–md** for a calm, professional feel.

---

## 3) Borders

```
borders:
  width:
    none: 0px
    thin: 1px
    thick: 2px
  color:
    neutral: gray.300
    focusAthlete: brand.athleteCTA.default     # orange focus ring
    focusParent:  brand.parentCTA.default      # navy focus ring
```

**Usage**
- Neutral 1px borders structure layouts without extra shadow.  
- Use **2px focus** outlines (athlete = orange, parent/sponsor = navy) for keyboard and accessibility states.

---

## 4) Dividers

```
dividers:
  lightMode: rgba(0,0,0,0.08)   # maps to gray.300 on light
  darkMode:  rgba(255,255,255,0.12)
```

- Prefer dividers to avoid “everything is a card.”  
- Use sparingly—priority is **signal > noise**.

---

## 5) Overlays (Scrims, Elevated Surfaces)

```
overlays:
  scrim:
    light: rgba(0,0,0,0.25)     # modal on light background
    dark:  rgba(0,0,0,0.50)     # modal on dark background
  elevationOverlayDark:         # lightening overlay on dark surfaces
    none: 0%    # tier 0
    sm:   6%    # tier 1–2
    md:   8%    # tier 3–4
    lg:   12%   # tier 5–6
    xl:   15%   # tier 7+
```

- In **dark mode**, raised surfaces get slightly **lighter** than the page background (either via tonal steps or a white overlay %) so depth is visible even on dark UIs.

---

## 6) Z-Index (Layering)

```
zIndex:
  base:    10    # content
  sticky:  20    # sticky headers/nav
  float:   30    # dropdowns, popovers, tooltips
  modal:   40    # dialogs, drawers
  toast:   50    # global alerts/messages
```

Keep layering predictable. **No ad-hoc z-9999.**

---

## 7) Motion (Interaction)

```
motion:
  ease: cubic-bezier(0.4, 0, 0.2, 1)
  duration:
    fast:   150ms   # hover
    normal: 250ms   # button/card transitions
    slow:   400ms   # modals/overlays
  scale:
    hover: 1.02     # cards/buttons (athlete)
    press: 0.98     # tactile feedback
  opacity:
    hoverBump: +5%  # highlight on hover
    disabled: 50%   # lock disabled
```

- Athlete contexts can use **scale + shadow bump**.  
- Parent/sponsor contexts may limit to **color/tint** changes.

---

## 8) Surface Tiers (Backgrounds & Surfaces)

Dark mode uses **deep gray**, not pure black, to avoid halation and to allow shadow/elevation to read. Surfaces become **lighter as elevation increases**.

```
surfaces:
  light:
    tier0_bg:  # page background
      color: #FFFFFF
    tier1:     # base cards, inputs
      color: gray.100
    tier2:     # raised cards, menus
      color: gray.200
    tier3:     # nav bars, sheets, modals
      color: #F0F0F0         # slightly brighter for clarity
  dark:
    tier0_bg:  # page background (NOT pure black)
      color: #121212
    tier1:     # base cards, inputs
      color: #1A1A1A         # + tonal step
    tier2:     # raised cards, menus
      color: #222222         # + tonal step
    tier3:     # nav bars, sheets, modals
      color: #2A2A2A         # + tonal step
```

**Rules**
- **Text contrast:** normal text ≥ 4.5:1; small text on dark backgrounds should target ~7:1.  
- **Never #000000 for body backgrounds.** Reserve true black only for special cases (e.g., video canvas) if required.  
- Prefer **tonal steps** between tiers; add **overlay %** if your stack supports it.

---

## 9) Optional Micro-Texture (Large Blank Surfaces)

```
texture:
  grain:
    enabled: selective      # hero / marketing sections only, never forms
    opacity:
      light: 0.0125         # ~1.25%
      dark:  0.018          # ~1.8%
    scale: 100%
    tile: 512px             # large tile to minimize repetition
```

**Guidance**
- Use **micro** grain to add “tooth” on large, flat hero sections so grayscale doesn’t feel sterile.  
- Avoid on inputs/forms and high-density data views.  
- Keep opacity **<2%**; the effect should be felt, not seen.  
- Implementation tip (CSS): apply grain as a pseudo-element overlay so you can toggle per tier:
```css
.surface--hero::after{
  content:"";
  position:absolute; inset:0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.018"/></svg>');
  pointer-events:none;
}
```

---

## 10) Component Defaults by Persona

```
defaults:
  inputs:
    radius: radii.sm        # 4px
    border: borders.width.thin / borders.color.neutral
    shadow: shadows.sm
  buttons:
    radius: radii.md        # 8px
    shadow: shadows.md
  cards:
    radius: radii.md        # 8px (athlete hero cards may use lg/16px)
    shadow: shadows.md
  athleteCTA_hover:
    shadow: shadows.lg
    motion: { scale: motion.scale.hover }
  parentCTA_hover:
    shadow: shadows.md      # calmer
    motion: { scale: 1.00 } # color-only
```

---

## 11) Accessibility & Contrast

- WCAG **minimum** contrast for normal text is **4.5:1**; large text (≥18pt regular or ≥14pt bold) is **3:1**.  
- On dark backgrounds, aim higher (Apple suggests **~7:1** for small text).  
- Don’t rely on **semi-transparent text** over variable imagery; pin text to a **stable surface** first (gradient or surface tier).

---

## 12) Quick Usage Examples

### Card (dark mode, tier2)
- **Background:** `surfaces.dark.tier2.color` (#222222)  
- **Shadow:** `shadows.md`  
- **Border:** `borders.width.thin` + `borders.color.neutral`  
- **Hover:** lighten to `surfaces.dark.tier3.color` (#2A2A2A) + `shadows.lg`

### Primary CTA (athlete)
- **Radius:** `radii.md` (8px)  
- **Shadow:** `shadows.lg` on hover  
- **Motion:** scale `1.02` on hover, `0.98` on press

### Input (parent portal, focus)
- **Border:** `borders.width.thick` + `borders.color.focusParent` (navy)  
- **Shadow:** `shadows.sm`  
- **Background:** tier1 (dark) or tier1 (light) to match mode

---

## 13) Do / Don’t

**Do**
- Use **#121212** as dark page background; step lighter for elevation.  
- Keep corners **consistent** (4 / 8 / 16).  
- Prefer **borders & tonal steps** to a pile of heavy shadows.  
- Use micro-grain only on large blank heroes.

**Don’t**
- Use **pure black** for full-page backgrounds.  
- Mix multiple elevation systems (random shadows, random tones).  
- Apply grain to forms or dense UI.  
- Invent new radii/shadow values per component.

---

## 14) Token Snapshot (pseudocode)

```ts
surfaceTokens = {
  radii: { none: "0px", sm: "4px", md: "8px", lg: "16px", full: "9999px" },
  shadows: {
    none: "none",
    sm: "0px 1px 2px rgba(0,0,0,0.05)",
    md: "0px 4px 8px rgba(0,0,0,0.08)",
    lg: "0px 8px 16px rgba(0,0,0,0.12)",
    xl: "0px 12px 24px rgba(0,0,0,0.18)",
  },
  borders: {
    width: { none: "0px", thin: "1px", thick: "2px" },
    color: {
      neutral: "gray.300",
      focusAthlete: "brand.athleteCTA.default",
      focusParent: "brand.parentCTA.default",
    },
  },
  dividers: { lightMode: "rgba(0,0,0,0.08)", darkMode: "rgba(255,255,255,0.12)" },
  overlays: {
    scrim: { light: "rgba(0,0,0,0.25)", dark: "rgba(0,0,0,0.50)" },
    elevationOverlayDark: { none: "0%", sm: "6%", md: "8%", lg: "12%", xl: "15%" },
  },
  zIndex: { base: 10, sticky: 20, float: 30, modal: 40, toast: 50 },
  motion: {
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    duration: { fast: "150ms", normal: "250ms", slow: "400ms" },
    scale: { hover: 1.02, press: 0.98 },
    opacity: { hoverBump: 0.05, disabled: 0.5 },
  },
  surfaces: {
    light: {
      tier0_bg: { color: "#FFFFFF" },
      tier1: { color: "#FAFAFA" },
      tier2: { color: "#F5F5F5" },
      tier3: { color: "#F0F0F0" },
    },
    dark: {
      tier0_bg: { color: "#121212" },
      tier1: { color: "#1A1A1A" },
      tier2: { color: "#222222" },
      tier3: { color: "#2A2A2A" },
    },
  },
  texture: {
    grain: { enabled: "selective", opacity: { light: 0.0125, dark: 0.018 }, scale: "100%", tile: "512px" },
  },
};
```

---

## References (for design intent)
- Dark theme background & elevation overlays (#121212, lightened surfaces) – see Material guidance and Android Compose notes.
- WCAG contrast: 4.5:1 (normal), 3:1 (large). Apple HIG suggests ~7:1 target for small text on dark.
- Avoid pure black for long reading & readability/halation concerns; use deep gray and desaturate strong hues on dark backgrounds.

🎨 Gradient Tokens & Usage
1. Overlay Gradients on Imagery
Purpose: Ensure text legibility, add depth.
Direction: Top → Bottom (linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)).
Light Mode: Darken bottom of image with black fade at 40–60%.
Dark Mode: Lighten top of image with white fade at 20–40%.
Rule: Always apply gradient overlays when text sits on top of imagery. Never rely on image contrast alone.
2. Surface Background Gradients
Purpose: Prevent “flat” grayscale sterility, especially on hero sections.
Subtle Neutrals:
Light: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%).
Dark: linear-gradient(180deg, #121212 0%, #1A1A1A 100%).
Keep stops close (Δ ≤ 8% luminance difference). Should feel like tone shift, not rainbow.
Usage: Hero backgrounds, not dense UI cards/forms.
3. Accent Gradients (CTAs)
Purpose: Make high-value buttons feel “alive” without neon.
Athlete CTA (Orange):
Default: linear-gradient(90deg, #FF5A1F 0%, #E64500 100%).
Hover: Shift angle to 135° for motion illusion.
Parent CTA (Navy):
Default: linear-gradient(90deg, #1E2A5E 0%, #243D8A 100%).
Hover: lighten end stop slightly.
Rule: Reserve for primary CTAs only. Secondary buttons stay flat.
4. Borders & Dividers with Gradient Edge (optional, sparing)
Purpose: Premium polish for cards, hero sections.
Example: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%).
Usage: Under nav bars or between major sections. Not for inputs or forms.
📦 Token Examples (pseudo-code)
gradients: {
  overlay: {
    imageLight: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
    imageDark:  "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)",
  },
  surface: {
    light: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)",
    dark:  "linear-gradient(180deg, #121212 0%, #1A1A1A 100%)",
  },
  cta: {
    athlete: "linear-gradient(90deg, #FF5A1F 0%, #E64500 100%)",
    parent:  "linear-gradient(90deg, #1E2A5E 0%, #243D8A 100%)",
  },
  divider: {
    subtleLight: "linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 100%)",
    subtleDark:  "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)",
  },
}
