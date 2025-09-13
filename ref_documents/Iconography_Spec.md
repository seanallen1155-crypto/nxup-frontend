# 📐 Iconography Spec – Brand System (Phosphor Icons)

This document defines how icons are used across the brand system. Icons are more than decoration — they provide *direction, affordance, and momentum*. Consistency is key: one system, one style.

---

## 🎨 Library  
- **Phosphor Icons** (https://phosphoricons.com)  
- Chosen for:  
  - Wide range of symbols.  
  - Multiple weights (thin → bold).  
  - Playful but professional aesthetic, appropriate for athletes 13–22.  

---

## 🖌 Style Guidelines  

### 1. Icon Weight  
- **Bold (filled/strong strokes):**  
  - Primary CTAs (e.g., buttons, hype states).  
  - Gamification/reward elements.  

- **Regular (outline/medium stroke):**  
  - Secondary navigation (tabs, menus, settings).  
  - Labels and supporting UI.  

- **Light/Thin:**  
  - Avoid — too fragile for mobile-first, youth-facing design.  

### 2. Icon Size  
- Match typography scale, but slightly larger for emphasis.  
- **Rules:**  
  - Inline with body text: `font-size + 2px`.  
  - Inline with button text: `1.25 × text size`.  
  - Standalone icon button: 24–32px, depending on importance.  

### 3. Color  
- Inherit from text color unless otherwise specified.  
- **Primary CTAs:** Always white.  
- **Disabled/Inactive:** Use `gray.500` token.  
- **Success/Error:** Use semantic green/red tokens.  

---

## 🔗 Spacing Rules  
- **Inline with Text:** 8px gap between text and icon.  
- **Standalone Buttons:** Icon centered, padding = 1.5 × icon size.  
- **Lists/Menus:** Icon flush-left, text indented 12–16px after icon.  

---

## ▶ Example Usage  

### 1. Primary CTA with Chevron  
```tsx
import { ChevronRight } from "phosphor-react";

<button className="flex items-center gap-2 px-6 py-3 rounded-md text-white font-bold
  bg-gradient-to-r from-[#FF5A1F] to-[#E64500] shadow-lg transition hover:translate-x-0.5">
  Claim my NIL deal
  <ChevronRight size={20} weight="bold" />
</button>
```
- Chevron appears **inside button, right-aligned**.  
- Size = 20px (1.25 × 16px button text).  
- Weight = bold.  
- Hover: Chevron shifts +4px right.  

---

### 2. Secondary Navigation (Tab Menu)  
```tsx
import { UsersThree, Storefront, Camera } from "phosphor-react";

<nav className="flex justify-around py-2 bg-bg-lightAlt">
  <a className="flex flex-col items-center text-gray-700">
    <UsersThree size={24} weight="regular" />
    Athletes
  </a>
  <a className="flex flex-col items-center text-gray-700">
    <Storefront size={24} weight="regular" />
    Sponsors
  </a>
  <a className="flex flex-col items-center text-gray-700">
    <Camera size={24} weight="regular" />
    Cameras
  </a>
</nav>
```
- Use **regular weight** for navigation.  
- Icons sized 24px.  
- Label text below, 12px gap.  

---

### 3. Success / Error Feedback  
```tsx
import { CheckCircle, XCircle } from "phosphor-react";

<div className="flex items-center gap-2 text-success">
  <CheckCircle size={20} weight="bold" />
  Success! Your NIL profile is live.
</div>

<div className="flex items-center gap-2 text-error">
  <XCircle size={20} weight="bold" />
  Error: Something went wrong.
</div>
```
- **CheckCircle / XCircle** in bold weight.  
- Color pulled from semantic tokens (success/error).  
- Always inline with message text.  

---

## ⚖️ Do’s and Don’ts  
- ✅ Do keep stroke weight consistent across a screen.  
- ✅ Do scale icons slightly larger than text for emphasis.  
- ✅ Do use bold chevrons/arrows for CTAs (momentum cues).  
- ❌ Don’t mix libraries (no Lucide/Feather + Phosphor together).  
- ❌ Don’t overuse icons — they should clarify, not decorate.  
- ❌ Don’t use light/thin weights; they get lost in mobile contexts.  

---

## 📦 Tokens (Suggested)  
```ts
icons: {
  size: {
    inline: "fontSize + 2px",
    button: "1.25x fontSize",
    standalone: { sm: 24, md: 28, lg: 32 }
  },
  weight: {
    primary: "bold",
    secondary: "regular",
  },
  spacing: {
    inline: "8px",
    listIndent: "12-16px"
  },
}
```
