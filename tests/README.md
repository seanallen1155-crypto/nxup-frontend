# Frontend Test Suite

This repo follows a layered testing strategy:

- **Unit (tests/unit/)**  
  - Run with Vitest + React Testing Library.  
  - Test individual components, pages, or lib utilities.  
  - Fast, isolated, mocked dependencies.

- **Integration (tests/integration/)**  
  - Run with Vitest + React Testing Library + MSW (Mock Service Worker).  
  - Test feature flows (e.g., onboarding, parent portal).  
  - Focus on API contracts and UI behavior across multiple units.

- **E2E (tests/e2e/)**  
  - Run with Playwright.  
  - Critical “spine” tests against deployed app (Cloud Run).  
  - Covers app loads, eligibility happy path, parent consent.

## CI/CD Flow

- **Pull Requests (dev/main)** → run unit + integration tests.  
- **Push to dev** → build + deploy → run Playwright smoke spine.  
- **Staging/Prod** → extended Playwright suite.  
