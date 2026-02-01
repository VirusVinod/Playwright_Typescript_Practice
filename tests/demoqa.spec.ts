import { test, expect } from '@playwright/test';

test('demoqa page', async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    const firstName = page.locator("//input[@id='firstName']");
    await firstName.fill("Test");

    const lastName = page.locator("//input[@id='lastName']");
    await lastName.fill("Test Test");

    const email = page.locator("//input[@id='userEmail']");
    await email.fill("Test231ert@gmail.com");

    const gender = page.locator("//input[@id='gender-radio-1']");
    await gender.click({ force: true });



})