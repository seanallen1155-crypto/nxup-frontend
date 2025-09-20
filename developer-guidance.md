# Developer Guidance

This document consolidates **baseline best practices**, the **current conventions in the repo**, and **CI/CD contributor rules** into a unified standard for this project.  
It is intended for both **human developers** and **Custom GPT integrations** to ensure consistency and quality.

---

## 1. Current Conventions

### Exports
- **Named exports** everywhere (`InputDark`, `PrimaryCTAButton`, `OnboardingContainer`, `EligibilityFlow`).
- **Default exports** only where Next.js requires (e.g., `page.tsx`, `layout.tsx`).

### Imports
- Use of **absolute path aliases** (`@/...`) rather than relative imports.
- Imports grouped logically: external → UI primitives/features → local utils.

### File & Folder Structure
- **App Router**: Thin `page.tsx` files delegate into features.
- **Features**: Organized by vertical slice (`features/onboarding/` with `steps/`).
- **UI Primitives**: Grouped by category (`ui/actions`, `ui/forms`, `ui/cards`).
- **Lib**: Pure functions (`eligibility.ts`).
- **Styles**: Tokens pipeline (`tokens.ts` → `scripts/generate-tokens.js` → `tokens.css`).

### Styling
- **Dual approach**:
  - Tailwind utilities for layout/spacing (`flex`, `items-center`, `pt-[88px]`).
  - Inline raw CSS for branded elements (gradients, shadows, text effects).
- Tokens exist but are **not consistently applied yet**.

### Accessibility
- **Integrated**: axe-core/react in dev, ARIA roles in some primitives, semantic HTML in flow containers.
- **Gaps**: Error messages not tied with `aria-describedby`, decorative images with alt text instead of empty alt, inconsistent focus outlines.

### Testing & Storybook
- **Infrastructure present**: Vitest, Playwright, Storybook.
- Components structured for testability (deterministic flows, props-driven UI).
- Storybook partially applied (coverage for some primitives).

### Process Rules (from CONTRIBUTING + CI/CD)
- **Design tokens are mandatory**: no raw values allowed; `npm run tokens` required before commit.
- **UI primitives only in `components/ui/`**, no raw `<button>`/`<input>` in features.
- **Storybook required**: stories for all variants, states, accessibility cases.
- **Accessibility mandatory**: ARIA roles, reduced motion support, keyboard navigation.
- **CI/CD gates**:
  - Linting, type-checking, unit tests.
  - Coverage enforcement.
  - Playwright smoke tests after deploy.
  - Block merges if tokens out of sync, accessibility checks fail, or visual regressions fail.

---

## 2. Best Practices (React/Next.js/TypeScript/Tailwind)

### Exports & Imports
- Prefer **named exports** for all components/utilities.
- Only use default export where framework enforces (Next.js pages/layouts).
- Order imports: external → internal features → local utils.

### Component Patterns
- Functional components only.
- Props typed with interfaces (`ComponentProps`) extending `HTMLAttributes` where appropriate.
- Avoid prop bloat → use **variants** instead of freeform style props.

### Styling
- **Tokens-first** design: all colors, radii, shadows, motion come from `tokens.ts`.
- Use Tailwind mapped to tokens; avoid raw hex, pixel values, arbitrary z-index.
- Inline styles only as escape hatch for one-off browser bugs.

### Accessibility
- Always label inputs (`aria-label`, `aria-labelledby`).
- Tie error messages to inputs with `aria-describedby`.
- Decorative images: `alt=""` (empty string).
- Respect `prefers-reduced-motion`.

### Testing & Storybook
- Each primitive must have Storybook stories (overview, states, accessibility).
- Use Vitest + React Testing Library for unit tests.
- Use Playwright for E2E scenarios.
- Snapshot test tokens to catch regressions.

### Process & Workflow
- Branching: feature branches → PR into `dev` → merged into `main`.
- Commit messages: conventional style (`feat:`, `fix:`, `chore:`).
- Run `npm run tokens` before commit to sync generated CSS.
- No arbitrary new folders — follow app/features/ui/lib/styles/scripts layout.

---

## 3. Unified Developer Guidance

This is the **explicit, actionable rule set** all developers (and Custom GPTs) must follow.

### Exports
- Use **named exports** everywhere.
- Use **default exports** only for Next.js `page.tsx` and `layout.tsx`.

### Imports
- Always use **absolute path aliases (`@/...`)**.
- Import order: external → primitives/features → local utils.

### File & Folder Organization
- `app/`: Next.js pages, lean, only delegate to features.
- `features/`: Vertical slices (`onboarding`, `profile`, etc.).
- `components/ui/`: Only primitives. No raw HTML elements outside this layer.
- `components/patterns/`: Composed building blocks of primitives.
- `components/layout/`: Shared layout wrappers.
- `lib/`: Pure business logic and utilities.
- `styles/`: Token-generated CSS and globals.
- `scripts/`: Build and maintenance scripts.

### Styling
- All colors, shadows, radii, motion come from **tokens.ts** → generate via `npm run tokens`.
- Tailwind must consume tokens via config extensions.
- **Forbidden**:
  - Raw hex (`#fff`, `#123456`).
  - Arbitrary z-index (`z-[9999]`).
  - Arbitrary spacing unless tokenized.
- Inline CSS only for escape hatches (with justification).

### Accessibility
- Every interactive element must include proper **ARIA roles/labels**.
- Inputs must associate errors via `aria-describedby`.
- Decorative images must have empty alt (`alt=""`).
- Motion must respect `prefers-reduced-motion`.
- All primitives must include **accessibility-focused Storybook stories**.

### Testing & Storybook
- **Unit tests** for logic/validation (Vitest).
- **E2E tests** for flows (Playwright).
- **Storybook required** for every primitive and pattern:
  - Variants, states (hover, pressed, disabled).
  - Accessibility coverage (reduced motion, keyboard navigation).
  - Tokens usage visible.
- CI will block merges if:
  - `tokens.css` out of sync.
  - Accessibility checks fail.
  - Visual regression fails.

### Process Rules
- Branch workflow: feature → PR → `dev` → `main`.
- Commits follow conventional format (`feat:`, `fix:`, `chore:`).
- Contributors must run:
  ```bash
  npm run tokens
  npm run lint
  npm run type-check
  npm run test
  npm run build-storybook
  ```
  before PR.

---

# ✅ Summary

This unified guidance merges **current conventions**, **baseline best practices**, and **CI/CD contributor rules** into a single enforceable standard.  
It ensures **design consistency, accessibility, and reliability** across the project, while making the system explicit and machine-readable for both humans and Custom GPTs.

