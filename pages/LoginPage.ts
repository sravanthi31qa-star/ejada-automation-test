import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { getConfig } from '../utils/env';

export type LoginCredentials = {
  username: string;
  password: string;
};

export class LoginPage extends BasePage {
  readonly username: Locator = this.page.locator('[data-test="username"]');
  readonly password: Locator = this.page.locator('[data-test="password"]');
  readonly submit: Locator = this.page.locator('[data-test="login-button"]');
  readonly error: Locator = this.page.locator('[data-test="error"]');

  async open() {
    const { baseURL } = getConfig();
    await this.page.goto(baseURL);
    await this.waitForLoad();
  }

  async login(credentials: LoginCredentials) {
    await this.fill(this.username, credentials.username);
    await this.fill(this.password, credentials.password);
    await this.click(this.submit);
  }
}
