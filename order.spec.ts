import { test, expect } from '@playwright/test';
import LoginPage from '../src/pages/LoginPage';
import ProductsPage from '../src/pages/ProductsPage';
import CartPage from '../src/pages/CartPage';
import CheckoutPage from '../src/pages/CheckoutPage';

test('full product order flow for logged-in user', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);

  const products = new ProductsPage(page);
  await products.addFirstProductToCart();
  await products.gotoCart();

  const cart = new CartPage(page);
  await cart.expectItemInCart();
  await cart.checkout();
  await page.screenshot({ path: 'C:/Users/Sravs/Pictures/cart_with_item.png' });
  console.log('Screenshot taken for cart with item');

  const checkout = new CheckoutPage(page);
  await checkout.fillCheckout('Sravanthi', 'Isanak', '13768');
  await page.screenshot({ path: 'C:/Users/Sravs/Pictures/checkout_filled.png' });
  console.log('Screenshot taken for checkout filled');
  await checkout.finishOrder();
});
