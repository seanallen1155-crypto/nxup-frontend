# Frontend Testing Guide

## Overview
This project has a **multi-layer test strategy** designed to align with the backend pipeline while using frontend-native tools.

- **Unit & Integration Tests** → [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **E2E Smoke Tests** → [Playwright](https://playwright.dev/)

Tests are wired into GitHub Actions to run on every PR and deployment.

---

## Test Structure

```
tests/
  unit/           # Component and small integration tests (Vitest)
  integration/    # Larger multi-component tests (Vitest + RTL + MSW)
  e2e/            # End-to-end Playwright tests
```

---

## Running Tests Locally

### Unit & Integration (Vitest)
```bash
npm run test
```

- Runs with `jsdom` test environment
- Coverage enabled via `@vitest/coverage-v8`
- Globals (`describe`, `it`, `expect`) are available
- React Testing Library (`@testing-library/react`) and Jest DOM matchers (`@testing-library/jest-dom`) are preconfigured

### E2E (Playwright)
```bash
npm run e2e
```

- Runs browser-driven smoke tests (currently a single "Hello World / Placeholder" test)
- Uses Playwright's own test runner, **separate from Vitest**

---

## CI/CD Behavior

- **PRs**
  - Lint
  - Type-check
  - Vitest unit/integration tests with coverage
- **Push to `dev`**
  - Build & deploy to GCP Cloud Run
  - Run Playwright smoke tests against deployed service
- **Push to `main`**
  - Reserved for staging/prod deploys (future sprints)

---

## Known Issues (as of Sprint 1)

- ✅ Vitest is configured and runs locally with coverage.
- ✅ Playwright smoke test passes locally.
- ❌ CI pipeline fails during type-check/test steps:
  - TypeScript strictness in `next.config.ts` / `tailwind.config.ts` caused initial failures (patched).
  - Vitest coverage step failed when no test files existed — fixed by adding a seed test.
  - React auto-import in tests required additional setup (`@vitejs/plugin-react`) — fixed locally but still flaky in CI.
  - Pipeline is currently failing on type-check/test in GitHub Actions.

---

## Next Steps

- Fix CI type-check/test failures (likely related to `@vitejs/plugin-react` in GitHub Actions).
- Add more unit tests to ensure coverage reports are meaningful.
- Add integration tests with [MSW](https://mswjs.io/) once APIs are stubbed.
- Expand Playwright suite beyond a single smoke test (eligibility flow, parent invite flow).

---

## References

- [Vitest Docs](https://vitest.dev/)
- [React Testing Library Docs](https://testing-library.com/)
- [Playwright Docs](https://playwright.dev/)
