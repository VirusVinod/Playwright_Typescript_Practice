import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.in');
});

test('open Amazon homepage', async ({ page }) => {
    await expect(page).toHaveTitle(/Amazon/);
});

test('Search for a product on Amazon', async ({ page }) => {
    await page.fill('#twotabsearchtextbox', 'Iphone');
    await page.press('#twotabsearchtextbox', 'Enter');

    await expect(page).toHaveTitle(/iphone/i);

    await page.waitForSelector('[data-cy="title-recipe"]');

    await page.waitForSelector('[data-cy="title-recipe"]');

    const expectedPhoneName = 'Apple iPhone 15 (128 GB) - Black';

    const productTitles = page.locator('h2.a-size-medium');

    const count = await productTitles.count();

    for (let i = 0; i < count; i++) {
        const titleText = await productTitles.nth(i).innerText();

        if (titleText.trim() === expectedPhoneName) {
            await productTitles.nth(i).click();
            console.log(`Clicked on: ${titleText}`);
            break;
        }
    }

    // Step 5: Confirm we're on a product page
    await expect(page).toHaveURL(/\/dp\//);
});