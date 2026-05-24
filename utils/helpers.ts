import { expect, Locator, Page } from '@playwright/test';

export async function waitForPageReady(page: Page) {
  await page.waitForLoadState('networkidle');
}

export async function safeClick(locator: Locator) {
  await expect(locator).toBeVisible({ timeout: 15_000 });
  await locator.click();
}

export function getTodayDate(): string {
  return new Date().toISOString().slice(0, 10);
}
