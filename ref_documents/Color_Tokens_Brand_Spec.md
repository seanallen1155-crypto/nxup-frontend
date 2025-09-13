# Color Tokens – Brand Spec (Refined)

This document defines the **brand color system** for the NIL platform. It is a **grayscale-first, platform-neutral identity** with carefully scoped and customized accents for specific purposes.  
All colors have been tuned to avoid “generic” or “out of the box” Tailwind defaults. Developers should **only use tokens defined here** and never substitute Tailwind palette values directly.

---

## 🎨 Core Palette

### 1. **Neutrals (Foundation)**
- **Black (Ink):** `#0E0E0E`  
- **White:** `#FFFFFF`  
- **Gray Scale:**  
  - 100: `#FAFAFA`  
  - 200: `#F5F5F5`  
  - 300: `#E0E0E0`  
  - 400: `#BDBDBD`  
  - 450: `#A6A6A6` (custom trust gray, not Tailwind)  
  - 500: `#8C8C8C`  
  - 600: `#666666`  
  - 700: `#4D4D4D`  
  - 800: `#333333`  
  - 900: `#1A1A1A`  

**Usage:** All backgrounds, text, borders, and surfaces default to this grayscale range. Text tokens should map directly to these grays (no separate hex).

---

### 2. **Accent Colors (Scoped Roles)**
- **Athlete CTA (Orange):**  
  - Default: `#FF5A1F`  
  - Hover: `#E64500`  
  - Purpose: Primary CTAs in athlete app, marketing sections targeted to athletes.

- **Parent/Sponsor CTA (Navy):**  
  - Default: `#1E2A5E` (custom deep navy, darker & less saturated than Tailwind indigo)  
  - Hover: `#243D8A` (slightly lighter navy for hover)  
  - Purpose: Parent/sponsor CTAs, professional tone, trust reinforcement.

- **Success (Green):**  
  - Border/Text: `#176B4D` (muted emerald)  
  - Active Bg: `#CFF5E0` (custom mint tint)  
  - Inactive Bg: `#E9F9F1`  
  - Purpose: Confirmation, success messages, valid input states.

- **Error (Red):**  
  - Border/Text: `#B3261E` (deep crimson, custom tuned)  
  - Active Bg: `#F9D7D4`  
  - Inactive Bg: `#FDECEA`  
  - Purpose: Errors, destructive actions, invalid inputs.

- **Warning (Amber):**  
  - Border/Text: `#9A6B16`  
  - Active Bg: `#FAE5B6`  
  - Inactive Bg: `#FDF6E6`  
  - Purpose: Alerts or caution states only.

---

### 3. **Avatar Palette (Deterministic, Tweaked from Tailwind)**
- Teal: `#0E857A` / Light `#5ED9C9`  
- Blue: `#285CC8`  
- Indigo: `#5140B6`  
- Purple: `#8A33D1`  
- Slate: `#4A5563`  

**Note:** Each hue has been shifted slightly from Tailwind to reduce the “default UI kit” look while retaining familiarity.

---

## 🧩 Semantic Usage States

### ✅ Success (Green)
- **Inactive:** Bg `#E9F9F1`, border `gray.300`, text `gray.600`.  
- **Hover:** Bg `#CFF5E0`, border `#36A97D`, text `#176B4D`.  
- **Active:** Bg `#A4E7CA`, border `#176B4D`, text `#176B4D`.

### ❌ Error (Red)
- **Inactive:** Bg `#FDECEA`, border `gray.300`, text `gray.600`.  
- **Hover:** Bg `#F9D7D4`, border `#E04B3E`, text `#B3261E`.  
- **Active:** Bg `#F4B8B3`, border `#B3261E`, text `#B3261E`.

### ⚠️ Warning (Amber)
- **Inactive:** Bg `#FDF6E6`, border `gray.300`, text `gray.600`.  
- **Hover:** Bg `#FAE5B6`, border `#E3A31D`, text `#9A6B16`.  
- **Active:** Bg `#F7D98A`, border `#9A6B16`, text `#9A6B16`.

### ⬜ Inactive (Neutral)
- **Buttons:** Bg `gray.200`, text `gray.600`, border `gray.300`.  
- **Inputs (empty):** Bg `gray.100`, border `gray.300`, placeholder `gray.600`.  
- **Disabled:** Bg `gray.200`, text `gray.500`, no hover.

---

## 🔘 Button Hierarchy

1. **Primary CTA (Athletes)**  
   - Bg: Orange `#FF5A1F`  
   - Hover: `#E64500`  
   - Text: White

2. **Primary CTA (Parents/Sponsors)**  
   - Bg: Navy `#1E2A5E`  
   - Hover: `#243D8A`  
   - Text: White

3. **Secondary Action**  
   - Bg: transparent  
   - Border: `gray.300`  
   - Text: `gray.600`  
   - Hover: Bg `gray.100`, text `gray.800`

4. **Destructive Action**  
   - Bg: transparent  
   - Border: `#B3261E`  
   - Text: `#B3261E`  
   - Hover: Bg `#FDECEA`, border `#E04B3E`, text `#B3261E`

5. **Disabled**  
   - Bg: `gray.200`  
   - Text: `gray.500`  
   - No hover states

---

## 📱 Contextual Rules
- **Athlete App:** neutrals + orange CTA + semantic (green/red).  
- **Parent Portal:** neutrals + navy CTA + semantic.  
- **Sponsor Portal:** same as parent portal.  
- **Marketing Site:** orange for athlete-facing sections, navy for parent/sponsor sections — never side by side.

---

## 📦 Example Token Snippet

```ts
brand: {
  athleteCTA: {
    default: "#FF5A1F",
    hover: "#E64500",
  },
  parentCTA: {
    default: "#1E2A5E",
    hover: "#243D8A",
  },
},
semantic: {
  success: {
    bgInactive: "#E9F9F1",
    bgActive: "#A4E7CA",
    border: "#176B4D",
    text: "#176B4D",
  },
  error: {
    bgInactive: "#FDECEA",
    bgActive: "#F4B8B3",
    border: "#B3261E",
    text: "#B3261E",
  },
  warning: {
    bgInactive: "#FDF6E6",
    bgActive: "#F7D98A",
    border: "#9A6B16",
    text: "#9A6B16",
  },
  inactive: {
    buttonBg: "#E0E0E0",
    buttonText: "#757575",
    border: "#BDBDBD",
  },
}
```

---

## 🎯 Final Word
This refined palette ensures:  
- **Grayscale-first foundation** for neutrality.  
- **Custom-tuned accents** (orange, navy, green, red, amber) for clear, scoped roles.  
- **No Tailwind clones** — every hue has been adjusted to feel proprietary and premium.  
- **Strict usage rules** so devs can’t “color outside the lines.”  
