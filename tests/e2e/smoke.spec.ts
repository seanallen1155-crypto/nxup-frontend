import { test, expect } from "@playwright/test";

test("app loads and shows placeholder", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Hello World / Placeholder");
});
