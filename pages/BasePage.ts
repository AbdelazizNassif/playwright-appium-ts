import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, text: string): Promise<void> {
    await this.page.locator(selector).fill(text);
  }

  async waitForNavigation(): Promise<void> {
    await this.page.waitForNavigation();
  }
}
