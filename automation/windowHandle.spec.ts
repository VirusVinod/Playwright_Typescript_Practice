import { test, expect } from '@playwright/test';

test('Multiple window handle', async ({ page, context }) => {

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");

    const parentPage = page;

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('#newWindowsBtn')
    ]);

    await newPage.waitForLoadState();
    await newPage.bringToFront();

    const title = await newPage.title();
    expect(title).toContain('Basic Controls');

    const fisrtName = newPage.locator("#firstName");
    await fisrtName.fill("Vinod");

    const lastName = newPage.locator("#lastName");
    await lastName.fill("Singh");

    await parentPage.bringToFront();
});
