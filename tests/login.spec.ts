import { test, expect } from '@playwright/test';

test('Login Page', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

})