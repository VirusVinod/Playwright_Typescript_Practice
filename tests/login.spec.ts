import { test, expect } from '@playwright/test';

test('Login Page', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    const userName = page.locator("//input[@id='user-name']");
    await userName.fill("standard_user");

})