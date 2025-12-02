import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    // Note: Adjust this expectation based on the actual title of the app
    await expect(page).toHaveTitle(/Archon|Vite/);
});
