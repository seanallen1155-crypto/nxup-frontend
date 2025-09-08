👩‍💻 Contributing Guidelines – UI Kit & Frontend Repo
Welcome! This repo is structured to enforce a design system-first approach. Please follow these guidelines to ensure consistency, scalability, and quality.
📦 Repo Structure
Foundations → tokens.ts, styles/tokens.css, tailwind.config.js
Primitives (UI components) → components/ui/
Patterns (flows, composites) → components/patterns/
Layouts (navigation, scaffolding) → components/layout/
Providers (context/state) → components/providers/
Stories → stories/
👉 Do not create new folders arbitrarily. If you’re unsure, ask before adding.
🎨 Design Tokens
All visual and motion values (colors, radii, shadows, spacing, typography, motion, z-index, etc.) must come from tokens.ts.
No raw hex codes, pixel values, or arbitrary Tailwind classes allowed.
❌ bg-[#3D5AFE]
✅ bg-primary (maps to tokens.colors.brand.primary)
If you need a new token → update tokens.ts first, then run npm run tokens.
🧩 UI Components (components/ui/)
Only implement primitives here (Button, Input, Card, etc.).
Each primitive:
Must use tokens.
Must expose variants (e.g., primary, secondary), not arbitrary props.
Must have accessibility baked in (aria-*, roles, labels).
Must include tactile/motion feedback (scale, hover, transitions) per tokens.
Do not use raw HTML <button>s or <input>s outside this layer.
📚 Storybook Requirements
Every new component must include Storybook stories under stories/ui/:
Overview → all variants + sizes.
States → hover, pressed, disabled, loading.
Accessibility → reduced motion, ARIA examples.
Tokens Used → optional demo showing what tokens drive the component.
For foundations, stories already exist under stories/foundations/.
⚡ Motion & Tactile
Always respect motion tokens (duration, ease, scale, delay).
Respect prefers-reduced-motion OS setting.
Gestures (swipe, drag) must always have tap/click equivalents.
♿ Accessibility
Mandatory: ARIA roles, aria-labels for icon-only buttons, aria-modal="true" for modals, role="alert" for toasts.
Test with keyboard navigation — everything must be reachable.
Storybook has Accessibility stories to validate contrast + reduced motion.
✅ Tests & CI/CD
Run npm run tokens before committing (ensures tokens.css is up to date).
All components must pass lint (eslint), type checks (tsc), and have Storybook coverage.
CI will block merges if:
tokens.css is out of sync with tokens.ts.
Accessibility checks fail (axe + Lighthouse CI).
Visual regressions fail (Chromatic/Loki).
🚫 Don’ts
Don’t hardcode values.
Don’t add arbitrary z-50 or delay-75 — use tokens.
Don’t skip Storybook.
Don’t create duplicate patterns (reuse primitives).
🚀 How to Add Something New
Add/extend tokens in tokens.ts.
Run npm run tokens.
Implement the component in components/ui/.
Add stories in stories/ui/.
Run npm run build-storybook to confirm.
Submit PR → must pass CI.
🔑 Key Principles
One Source of Truth → tokens.ts drives everything.
Accessibility First → a11y isn’t optional.
Consistency > Creativity → variants, not random styles.
Document Everything → Storybook is the living spec.