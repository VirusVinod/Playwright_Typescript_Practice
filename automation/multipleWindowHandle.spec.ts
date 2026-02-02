import { test, expect } from '@playwright/test';

test('Multiple window handle', async ({ page, context }) => {

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");

    const parentPage = page;


    await Promise.all([
        context.waitForEvent('page'),
        page.click('#newTabsBtn')
    ])

    const pages = context.pages();
    console.log(pages);

    let targetPage;

    for (const p of pages) {

        const tittle = await p.title();

        if (tittle.includes('Basic Controls')) {
            targetPage = p;
            break;
        }
    }

    expect(targetPage).toBeDefined();

    await targetPage!.fill('#firstName', 'Vinod Singh');
    await targetPage!.fill('#lastName', 'Singh');


})