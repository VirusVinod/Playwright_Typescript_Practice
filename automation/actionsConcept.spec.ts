import { test } from '@playwright/test';


test('Acction Conncept', async ({ page }) => {

    await page.goto('https://www.browserstack.com/guide/mouse-hover-in-selenium');

    const hoverElement = page.locator("//button[@id='products-dd-toggle']");
    await hoverElement.hover();

 });