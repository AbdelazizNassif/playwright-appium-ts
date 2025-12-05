import { Builder, WebDriver } from "selenium-webdriver";
import * as path from "path";
import * as fs from "fs";

export class DriverManager {
  static async createAndroidDriver(caps: any): Promise<WebDriver> {
    return await new Builder()
      .usingServer(process.env.APPIUM_SERVER || '')
      .withCapabilities(caps)
      .forBrowser("")
      .build();
  }

  static async quitDriver(driver?: WebDriver): Promise<void> {
    if (!driver) return;
    try {
      await driver.quit();
    } catch (err) {
      // ignore - best effort
    }
  }
}
