import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async click(locator: Locator) {
    await expect(locator).toBeVisible({ timeout: 15_000 });
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await expect(locator).toBeVisible({ timeout: 15_000 });
    await locator.fill(value);
  }
}
