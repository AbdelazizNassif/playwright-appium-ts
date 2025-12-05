import { By } from 'selenium-webdriver';
import { MobileBasePage } from './MobileBasePage';
import { WebDriver } from 'selenium-webdriver';

export class HomeScreen extends MobileBasePage {
  constructor(driver: WebDriver) {
    super(driver);
  }

  // Click the "Login Screen" entry to navigate to the login view
  async openLoginScreen(): Promise<void> {
    const locator = By.xpath("//*[@text='Login Screen']");
    await this.click(locator);
  }
}
