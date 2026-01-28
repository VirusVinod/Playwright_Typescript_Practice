import { test, expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class AmazonPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async LunchUrl() {
        await this.page.goto('https://www.amazon.in/');
    }

    async searchProduct(productName: string) {
        const searchBox = this.page.locator("//input[@id='twotabsearchtextbox']");
        await searchBox.fill(productName);
        const searchBtnClick = this.page.locator("//input[@id='nav-search-submit-button']");
        await searchBtnClick.click();
    }

    async verifyResultsHeading() {
        const resultsHeading = this.page.locator("//h2[@class='a-size-medium-plus a-spacing-none a-color-base a-text-bold']");
        await expect(resultsHeading).toBeVisible();
    }

    async clickExpectedProduct(expectedProduct: string) {
        const products = this.page.locator("//div[@data-cy='title-recipe']//a//h2");
        const count = await products.count();

        for (let i = 0; i < count; i++) {
            const product = products.nth(i);
            const actualProduct = (await product.textContent())?.trim();
            if (actualProduct === expectedProduct) {
                await product.scrollIntoViewIfNeeded();
                await product.click();
                break;
            }
        }
    }

    // async addToCartFromNewTab() {
    //     const context = this.page.context();

    //     const [newPage] = await Promise.all([
    //         context.waitForEvent('page'),
    //     ]);

    //     await newPage.waitForLoadState();
    //     const addToCart: Locator = newPage.locator("//input[@id='add-to-cart-button']");
    //     await addToCart.scrollIntoViewIfNeeded();
    //     await addToCart.click();
    // }


}

test('Search product on Amazon', async ({ page }) => {
    const amazonPage = new AmazonPage(page);

    await amazonPage.LunchUrl();
    await amazonPage.searchProduct('iphone');
    await amazonPage.verifyResultsHeading();
    await amazonPage.clickExpectedProduct(" aaas iPhone 16 Pro Max 1 TB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; White Titanium");
    // await amazonPage.addToCartFromNewTab();
});

