import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';
const VALID_USER = 'standard_user';
const VALID_PASS = 'secret_sauce';
const INVALID_USER = 'invalid_user';
const INVALID_PASS = 'wrong_pass';

test.describe('SauceDemo Playwright Automation', () => {

  test('Login with valid credentials', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Login with invalid credentials', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', INVALID_USER);
    await page.fill('#password', INVALID_PASS);
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  test('Logout after login', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page.locator('#login-button')).toBeVisible();
  });

  test('Add product to cart', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');

    await expect(page.locator('.inventory_item_name'))
      .toHaveText('Sauce Labs Backpack');
  });

  test('Complete checkout flow', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', VALID_USER);
    await page.fill('#password', VALID_PASS);
    await page.click('#login-button');

    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');

    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');

    await page.click('[data-test="finish"]');

    await expect(page.locator('.complete-header'))
      .toHaveText('THANK YOU FOR YOUR ORDER');
  });

});
