import { WebDriver, By, until, WebElement } from 'selenium-webdriver';

const DEFAULT_TIMEOUT = 30000;

export class MobileBasePage {
  constructor(protected driver: WebDriver) {}

  async waitForLocated(locator: By, timeout = DEFAULT_TIMEOUT): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(locator), timeout);
    const el = await this.driver.findElement(locator);
    return el;
  }

  async waitForVisible(locator: By, timeout = DEFAULT_TIMEOUT): Promise<WebElement> {
    const el = await this.waitForLocated(locator, timeout);
    await this.driver.wait(until.elementIsVisible(el), timeout);
    return el;
  }

  async click(locator: By, timeout = DEFAULT_TIMEOUT): Promise<void> {
    const el = await this.waitForLocated(locator, timeout);
    await el.click();
  }

  async sendKeys(locator: By, text: string, timeout = DEFAULT_TIMEOUT): Promise<void> {
    const el = await this.waitForLocated(locator, timeout);
    await el.sendKeys(text);
  }

  async getText(locator: By, timeout = DEFAULT_TIMEOUT): Promise<string> {
    const el = await this.waitForLocated(locator, timeout);
    return await el.getText();
  }

  async isDisplayed(locator: By, timeout = DEFAULT_TIMEOUT): Promise<boolean> {
    try {
      const el = await this.waitForLocated(locator, timeout);
      return await el.isDisplayed();
    } catch {
      return false;
    }
  }
}
