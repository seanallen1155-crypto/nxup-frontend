# NXUP Frontend

## 🚀 Overview
Frontend built with **Next.js 15**, **TailwindCSS**, and **shadcn/ui**, extended by a custom **design system**.  
Deployed via **GitHub Actions → GCP Cloud Run**.  

- **Vercel** is dev-only (preview builds).  
- **Tokens-first architecture**: all design decisions flow from `tokens.ts`.  
- **Storybook** is the living documentation for all foundations and UI primitives.  

---

## 🛠️ Local Development
```bash
npm install
npm run dev
```
App available at [http://localhost:3000](http://localhost:3000).

---

## 🧑‍💻 Getting Started (New Developers)
1. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd nxup-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate tokens → CSS variables**
   ```bash
   npm run tokens
   ```

4. **Run Storybook**
   ```bash
   npm run storybook
   ```

5. **Run the app locally**
   ```bash
   npm run dev
   ```

6. **Run tests**
   ```bash
   npm run test
   npm run e2e
   ```

7. **Check linting & type safety**
   ```bash
   npm run lint
   npm run type-check
   ```

---

## 🎨 Design System Workflow
- **`tokens.ts`** → single source of truth for colors, typography, spacing, shadows, radii, motion, z-index, and layout.  
- **`tailwind.config.js`** → consumes `tokens.ts` for utilities.  
- **`styles/tokens.css`** → auto-generated from `tokens.ts` via `npm run tokens`.  
- **Storybook** → visual documentation of all tokens (`stories/foundations/`) and UI primitives (`stories/ui/`).  

👉 **Never hardcode styles**. Always consume tokens or primitives.  

---

## 📚 Storybook
```bash
npm run storybook
```
- `stories/foundations/` → Colors, Typography, Spacing, Shadows, Radii, Motion, ZIndex, Layout, Accessibility.  
- `stories/ui/` → Button, Input, Card, Modal, Toasts, etc.  

Storybook is the **living brand kit**. All new components must include stories.  

---

## 🧪 Test Strategy
- **Unit & Integration** → Vitest + React Testing Library (`npm run test`)  
- **E2E Smoke** → Playwright (`npm run e2e`)  
- **Accessibility** → axe + Lighthouse CI  
- **Visual Regression** → Chromatic (planned)  

Coverage enforced in CI.  

---

## ⚙️ CI/CD
- **PR** → lint, type-check, tokens generation, unit/integration tests.  
- **Push to `dev`** → build, deploy to Cloud Run (us-central1), run Playwright smoke tests.  
- **Push to `main`** → staging/prod deployments (future sprints).  

Pipeline includes:  
- `npm run tokens` → generate CSS vars.  
- `npm run build` → Next.js build.  
- `npm run build-storybook` → Storybook build (fail if errors).  

---

## 📂 Project Structure
```
/
├── app/ or pages/           # Next.js routing
├── components/              # UI primitives, layouts, patterns, providers
├── constants/               # Tokenized constants (mirrors tokens.ts)
├── lib/                     # Utilities
├── public/                  # Static assets
├── scripts/                 # Automation (generate-tokens.js)
├── stories/                 # Storybook stories
├── styles/                  # Global CSS + tokens.css
├── tests/                   # Unit, integration, E2E
├── tokens.ts                # Master design tokens
├── tailwind.config.js       # Tailwind consumes tokens.ts
├── postcss.config.js
├── tsconfig.json
└── CONTRIBUTING.md          # Developer rules
```

---

## 🌍 Environment
- **Local dev** → `.env.local`  
- **CI/CD** → secrets via GitHub Actions + GCP WIF  
- **Cloud Run** → env vars set at deploy  

---

## ✅ Contribution Rules
See [CONTRIBUTING.md](./CONTRIBUTING.md).  

Key points:  
- No raw hex/px → always use tokens.  
- All components require Storybook coverage.  
- Accessibility is mandatory (ARIA, reduced motion, WCAG AA).  
- CI/CD enforces tokens sync, lint, typecheck, and Storybook build.  

---

🔑 **In short:**  
This repo is not just a Next.js app — it’s a **design system + application shell**. Foundations → Primitives → Patterns, all enforced in CICD, all visible in Storybook.  
