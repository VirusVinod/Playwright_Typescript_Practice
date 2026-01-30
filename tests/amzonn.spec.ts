import { test, expect } from '@playwright/test';

test('test case', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const searchBox = page.locator("//input[@id='twotabsearchtextbox']");
    await searchBox.fill("Iphone")

    const searchBtnClick = page.locator("//input[@id='nav-search-submit-button']");
    await searchBtnClick.click();

    const expectedPage = "Results";
    const resultsHeading = page.locator("//h2[@class='a-size-medium-plus a-spacing-none a-color-base a-text-bold']");
    const actualText = (await resultsHeading.textContent())?.trim();
    await expect(actualText).toBe(expectedPage);








})