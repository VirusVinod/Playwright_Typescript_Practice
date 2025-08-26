import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  //  Should navigate to inventory
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('//div[@class="product_label"]')).toContainText('Products');
});

test('Login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('#user-name', 'standard_user1'); 
  await page.fill('#password', 'secret_sauce1');  
  await page.click('#login-button');
  
  // Should stay on login page
  await expect(page).toHaveURL(/saucedemo\.com\/v1/);

  //  Verify error message
  const errorMessage = page.locator('//h3[@data-test="error"]'); 
  await expect(errorMessage).toContainText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});
