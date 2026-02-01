import { test, expect } from '@playwright/test';

test('demoqa page', async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

})