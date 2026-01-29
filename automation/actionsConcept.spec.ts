import { test } from '@playwright/test';


test('Acction Conncept', async ({ page }) => {

    await page.goto('https://www.browserstack.com/guide/mouse-hover-in-selenium');

    const hoverElement = page.locator("//button[@id='products-dd-toggle']");
    await hoverElement.hover();

    const innerElementHover = page.locator("//button[@id='products-dd-tab-3']");
    await innerElementHover.hover();  
      

 });