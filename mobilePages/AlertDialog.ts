import { By } from 'selenium-webdriver';
import { MobileBasePage } from './MobileBasePage';
import { WebDriver } from 'selenium-webdriver';

export class AlertDialog extends MobileBasePage {
  constructor(driver: WebDriver) {
    super(driver);
  }

  async getMessageText(): Promise<string> {
    const locator = By.id('android:id/message');
    return await this.getText(locator);
  }
}
