import { test, expect } from "@playwright/test";

test.describe("AsiaLife360 Home Page", () => {
  test("should load the home page and show the hero title", async ({
    page,
  }) => {
    await page.goto("/");

    // Check for the main heading
    const title = page.locator("h1");
    await expect(title).toBeVisible();

    // Specifically check for "AsiaLife360" or key value proposition
    await expect(page).toHaveTitle(/AsiaLife360/);
  });

  test("should navigate to destinations page", async ({ page }) => {
    await page.goto("/");

    // Find and click the destinations link in nav
    await page.click('nav a:has-text("Destinations")');

    // Check URL
    await expect(page).toHaveURL(/\/destinations/);

    // Check if Destinations heading exists
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
  });
});
