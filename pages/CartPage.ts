import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartItems: Locator = this.page.locator('.inventory_item_name');
  readonly checkoutButton: Locator = this.page.locator('[data-test="checkout"]');

  async checkout() {
    await this.click(this.checkoutButton);
  }

  async getItemName(index = 0) {
    return this.cartItems.nth(index).textContent();
  }
}
