import { test } from '@playwright/test';


test('Acction Conncept', async ({ page }) => {

    await page.goto('https://www.browserstack.com/guide/mouse-hover-in-selenium');

    const hoverElement = page.locator("//button[@id='products-dd-toggle']");
    await hoverElement.hover();

    const innerElementHover = page.locator("//button[@id='products-dd-tab-3']");
    await innerElementHover.hover();


    const expectedProduct = 'App Automate';
    const productSList = page.locator("//div[@id='products-dd-tabpanel-3-inner-1']//a");
    const count = await productSList.count();

    for (let i = 0; i < count; i++) {

        const product = productSList.nth(i);
        const actualProduct = await product.textContent();
        if (actualProduct?.trim() == expectedProduct) {
            await product.click();
            console.log(`Clicked on the product: ${actualProduct}`);
            break;
        }
    }

});