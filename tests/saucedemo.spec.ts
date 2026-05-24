import { test, expect } from '../fixtures';
import { generateRandomCheckoutDetails } from '../utils/dataGenerator';
import { loadTestData } from '../utils/testData';

const testData = loadTestData();

test.describe('SauceDemo framework suite', () => {
  test('valid login shows the products page', async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(testData.users.valid);

    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('invalid login displays an error message', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(testData.users.invalid);

    await expect(loginPage.error).toContainText('Username and password do not match');
  });

  test('checkout flow completes successfully', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
    await loginPage.open();
    await loginPage.login(testData.users.valid);

    await inventoryPage.addToCart(testData.products.backpack);
    await inventoryPage.goToCart();

    await expect(cartPage.cartItems).toContainText('Sauce Labs Backpack');

    await cartPage.checkout();
    await checkoutPage.completeCheckout(generateRandomCheckoutDetails());

    await expect(checkoutPage.completeHeader).toContainText('Thank you for your order!');
  });

  test('logout returns the user to the login screen', async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(testData.users.valid);

    await inventoryPage.logout();

    await expect(loginPage.submit).toBeVisible();
  });
});
