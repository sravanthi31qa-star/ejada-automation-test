import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly title: Locator = this.page.locator('.title');
  readonly cartLink: Locator = this.page.locator('.shopping_cart_link');
  readonly burgerMenu: Locator = this.page.locator('#react-burger-menu-btn');
  readonly logoutLink: Locator = this.page.locator('#logout_sidebar_link');

  async addToCart(slug: string) {
    const button = this.page.locator(`[data-test="add-to-cart-${slug}"]`);
    await this.click(button);
  }

  async openProduct(name: string) {
    const product = this.page.locator('[data-test="inventory-item-name"]').filter({ hasText: name });
    await this.click(product);
  }

  async goToCart() {
    await this.click(this.cartLink);
  }

  async logout() {
    await this.click(this.burgerMenu);
    await this.click(this.logoutLink);
  }
}
