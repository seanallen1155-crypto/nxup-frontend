# Typography Tokens – Brand Spec (Teko + Satoshi)

This document defines the **brand typography system** for the NIL platform. It should be used to implement `tokens.ts` (or equivalent design tokens file) so that typography is consistent across app, website, and marketing materials.

---

## 🎨 Global Font Families
- **Display Font:** `Teko` (Google Fonts)  
  - Used for hype / hero headlines, CTAs, numbers, and stats.  
- **Body Font:** `Satoshi` (preferred) or `DM Sans` (fallback, Google Fonts).  
  - Used for paragraphs, UI copy, captions, legal content.  

---

## 📏 Type Scale Tokens

| Token       | Mobile Size | Desktop Size | Use Case |
|-------------|-------------|--------------|----------|
| `hero`      | 40–48px     | 56–64px      | Above-the-fold headlines |
| `subhead`   | 20–24px     | 24–28px      | Secondary headlines |
| `body`      | 16px        | 18px         | Paragraph copy |
| `caption`   | 14px        | 14px         | Supporting text |
| `micro`     | 12px        | 12px         | Labels, legal |
| `button`    | 16–18px     | 18px         | CTAs |

---

## 📐 Line Height

| Token       | Line Height | Notes |
|-------------|-------------|-------|
| `hero`      | 110%        | Tight, poster feel |
| `subhead`   | 120%        | Slightly looser |
| `body`      | 150%        | Comfortable reading |
| `caption`   | 140%        | Clear but compact |
| `button`    | 120%        | Crisp button fit |

---

## 🔡 Letter Spacing

| Token       | Tracking   | Notes |
|-------------|------------|-------|
| `hero`      | +0.04em    | Improves caps legibility |
| `subhead`   | +0.02em    | Subtle clarity |
| `body`      | 0em        | Neutral |
| `caption`   | 0em        | Neutral |
| `button`    | +0.02em    | Extra punch |

---

## 🏋️ Font Weights

| Token       | Weight | Font          |
|-------------|--------|---------------|
| `hero`      | 700    | Teko Bold |
| `subhead`   | 600    | Teko SemiBold (alt: Satoshi Medium) |
| `body`      | 400    | Satoshi Regular |
| `caption`   | 500    | Satoshi Medium |
| `micro`     | 500    | Satoshi Medium |
| `button`    | 700    | Teko Bold |

---

## 🧩 Semantic Usage Examples

### Hero (Headline)
```tsx
<h1 className="font-display text-hero font-bold tracking-wide leading-tight uppercase">
  CLAIM YOUR NIL DEAL
</h1>
```

### Subhead
```tsx
<h2 className="font-display text-subhead font-semibold tracking-wide leading-snug">
  Turn your name into income.
</h2>
```

### Body Copy
```tsx
<p className="font-body text-body leading-relaxed">
  Our platform helps athletes as young as 13 create their personal brand kits,
  launch merchandise, and start earning NIL money.
</p>
```

### Caption / Microcopy
```tsx
<span className="font-body text-caption font-medium">
  For athletes ages 13–22
</span>
```

### CTA Button
```tsx
<button className="font-display text-button font-bold uppercase tracking-wide">
  Claim My Deal
</button>
```

---

## 📱 Responsive Guidance
- **Hero font size:**  
  Use `clamp()` for responsive scaling:  
  ```css
  font-size: clamp(32px, 6vw, 64px);
  ```
- **Subhead:** clamp from 20px → 28px.  
- **Body:** lock at 16px mobile, scale to 18px desktop.  
- **CTA buttons:** always in Teko Bold, 16–18px.  

---

## ✅ Developer Notes
1. **Never swap fonts:** Only `Teko` (display) and `Satoshi/DM Sans` (body) are allowed.  
2. **Case consistency:**  
   - Heroes/CTAs: ALL CAPS (unless microcopy style requires sentence case).  
   - Body/micro: Sentence case.  
3. **Spacing > weight for hierarchy:** Use line-height and tracking to create rhythm, not just size jumps.  
4. **Fallback:** If Satoshi is unavailable, DM Sans is acceptable as a drop-in replacement (Google Fonts).  

---

## 📦 Example `tokens.ts` Reference

```ts
export const fontFamily = {
  display: "'Teko', sans-serif",
  body: "'Satoshi', sans-serif",
};

export const fontSize = {
  hero: "48px",
  heroDesktop: "64px",
  subhead: "24px",
  body: "16px",
  caption: "14px",
  micro: "12px",
  button: "18px",
};

export const lineHeight = {
  hero: "110%",
  subhead: "120%",
  body: "150%",
  caption: "140%",
  button: "120%",
};

export const letterSpacing = {
  hero: "0.04em",
  subhead: "0.02em",
  body: "0em",
  caption: "0em",
  button: "0.02em",
};

export const fontWeight = {
  hero: 700,
  subhead: 600,
  body: 400,
  caption: 500,
  micro: 500,
  button: 700,
};

export const typography = {
  hero: {
    fontFamily: fontFamily.display,
    fontSize: fontSize.hero,
    lineHeight: lineHeight.hero,
    letterSpacing: letterSpacing.hero,
    fontWeight: fontWeight.hero,
    textTransform: "uppercase",
  },
  subhead: {
    fontFamily: fontFamily.display,
    fontSize: fontSize.subhead,
    lineHeight: lineHeight.subhead,
    letterSpacing: letterSpacing.subhead,
    fontWeight: fontWeight.subhead,
  },
  body: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
    letterSpacing: letterSpacing.body,
    fontWeight: fontWeight.body,
  },
  caption: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
    letterSpacing: letterSpacing.caption,
    fontWeight: fontWeight.caption,
  },
  micro: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.micro,
    lineHeight: lineHeight.caption,
    letterSpacing: letterSpacing.caption,
    fontWeight: fontWeight.caption,
  },
  button: {
    fontFamily: fontFamily.display,
    fontSize: fontSize.button,
    lineHeight: lineHeight.button,
    letterSpacing: letterSpacing.button,
    fontWeight: fontWeight.button,
    textTransform: "capitalize",
  },
};
```

---
