import { test, expect } from '@playwright/test';
import { Page } from '@playwright/test';

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

}

test('Search product on Amazon', async ({ page }) => {
    const amazonPage = new AmazonPage(page);

    await amazonPage.LunchUrl();
    await amazonPage.searchProduct('iphone');
    await amazonPage.verifyResultsHeading();

});