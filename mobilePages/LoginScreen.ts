import { By } from 'selenium-webdriver';
import { MobileBasePage } from './MobileBasePage';
import { WebDriver } from 'selenium-webdriver';

export class LoginScreen extends MobileBasePage {
  constructor(driver: WebDriver) {
    super(driver);
  }

  async enterUsername(username: string): Promise<void> {
    const locator = By.xpath("//*[@content-desc='username']");
    await this.sendKeys(locator, username);
  }

  async enterPassword(password: string): Promise<void> {
    const locator = By.xpath("//*[@content-desc='password']");
    await this.sendKeys(locator, password);
  }

  async tapLogin(): Promise<void> {
    const locator = By.xpath("//*[@content-desc='loginBtn']");
    await this.click(locator);
  }
}
