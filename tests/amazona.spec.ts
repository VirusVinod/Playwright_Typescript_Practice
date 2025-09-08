import{test, expect} from '@playwright/test';

//  Step: 1
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.in');
});

//  Step: 2

test('serach product',async({page})=>{

    await page.fill('//input[@id="twotabsearchtextbox"]','Iphone');
    await page.click('//input[@id="nav-search-submit-button"]');

})