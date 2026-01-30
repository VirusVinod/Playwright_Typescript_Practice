import { test, expect } from '@playwright/test';

test('test case', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const searchBox = page.locator("//input[@id='twotabsearchtextbox']");
    await searchBox.fill("Iphone")

    const searchBtnClick = page.locator("//input[@id='nav-search-submit-button']");
    await searchBtnClick.click();


})