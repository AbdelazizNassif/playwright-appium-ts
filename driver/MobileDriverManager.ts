import { Builder, WebDriver } from "selenium-webdriver";
import * as path from "path";
import * as fs from "fs";

export class DriverManager {
  async createAndroidDriver(caps: any): Promise<WebDriver> {
    return await new Builder()
      .usingServer(process.env.APPIUM_SERVER || 'http://localhost:4723/')
      .withCapabilities(caps)
      .forBrowser("")
      .build();
  }


  async quitDriver(driver?: WebDriver): Promise<void> {
    if (!driver) return;
    try {
      await driver.quit();
    } catch (err) {
      // ignore - best effort
    }
  }
}
