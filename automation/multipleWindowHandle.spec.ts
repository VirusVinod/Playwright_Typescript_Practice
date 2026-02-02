import {test, expect} from '@playwright/test';

test('Multiple window handle', async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");


})