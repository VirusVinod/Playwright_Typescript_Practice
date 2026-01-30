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

    const expectedProduct = "iPhone 17 Pro Max 2 TB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Silver";
    const product = page.locator("//div[@data-cy='title-recipe']//a//h2");
    const count = await product.count();

    for (let i = 0; i < count; i++) {

        const products = product.nth(i);
        const actualProduct = (await products.textContent())?.trim();
        if (actualProduct === expectedProduct) {
            await products.scrollIntoViewIfNeeded();
            await products.click();
            break;
        }
    }


})