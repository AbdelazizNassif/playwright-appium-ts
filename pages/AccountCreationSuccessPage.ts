import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountCreationSuccessPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getAccountCreationSuccessMsg(): Promise<string | null> {
    let successMsg = await this.page.locator('h2.title').textContent();
    return successMsg;
  }

  async isAccountCreated(): Promise<boolean> {
    const msg = await this.getAccountCreationSuccessMsg();
    return !!msg && msg.includes('Account Created');
  }
}
