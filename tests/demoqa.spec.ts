import { test, expect } from '@playwright/test';

test('demoqa page', async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    const firstName = page.locator("//input[@id='firstName']");
    await firstName.fill("Test");

    const lastName = page.locator("//input[@id='lastName']");
    await lastName.fill("Test Test")



})