import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export type CheckoutDetails = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage extends BasePage {
  readonly firstName: Locator = this.page.locator('[data-test="firstName"]');
  readonly lastName: Locator = this.page.locator('[data-test="lastName"]');
  readonly postalCode: Locator = this.page.locator('[data-test="postalCode"]');
  readonly continueButton: Locator = this.page.locator('[data-test="continue"]');
  readonly finishButton: Locator = this.page.locator('[data-test="finish"]');
  readonly completeHeader: Locator = this.page.locator('.complete-header');

  async completeCheckout(details: CheckoutDetails) {
    await this.fill(this.firstName, details.firstName);
    await this.fill(this.lastName, details.lastName);
    await this.fill(this.postalCode, details.postalCode);
    await this.click(this.continueButton);
    await this.click(this.finishButton);
  }
}
