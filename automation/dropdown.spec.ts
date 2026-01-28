import { test, expect } from "@playwright/test";


test('Dropdown handling test', async ({ page }) => {
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html');

    const drop = page.locator("//button[@class='btn btn-default dropdown-toggle']");
    await drop.click();

    const options = page.locator("//ul[@class='dropdown-menu']//li//a");
    const count = await options.count();

       for (let i = 0; i < count; i++) {
        const option = options.nth(i);
        const optionText = await option.textContent();
        console.log(optionText);
        if (optionText?.trim() === 'JavaScript') {
            console.log('Selecting option: ' + optionText);
            await option.click();
            break;
        }
    }

 
})