import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly signupLoginLink = '[data-qa="signup-login-button"]';

  constructor(page: Page) {
    super(page);
  }

  async navigateTo(): Promise<void> {
    await this.goto(process.env.APP_URL || 'https://automationexercise.com');
  }

  async clickSignupLogin(): Promise<void> {
    await this.page.getByRole('link', { name: ' Signup / Login' }).click();
  }
}
