import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillLoginEmail(email: string): Promise<void> {
    await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
  }

  async doubleClickLoginEmail(): Promise<void> {
    await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').dblclick();
  }

  async clickLogout(): Promise<void> {
    await this.page.getByRole('link', { name: ' Logout' }).click();
  }
}
