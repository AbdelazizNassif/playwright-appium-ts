import { WebDriver } from "selenium-webdriver";
import { expect, jest, test, afterAll, beforeAll } from "@jest/globals";
import { Builder, By, until } from "selenium-webdriver";
import { HomeScreen } from "../mobilePages/HomeScreen";
import { LoginScreen } from "../mobilePages/LoginScreen";
import { AlertDialog } from "../mobilePages/AlertDialog";
import { DriverManager } from "../driver/MobileDriverManager";
import * as path from "path";

// Increase Jest timeout for device/emulator + Appium startup
jest.setTimeout(60000);

describe("Login flow", function () {
  let driver: WebDriver;
  // Re-open the hook to perform setup with the same timeout
  beforeAll(async () => {
    const appPath = path.resolve(__dirname, "..", "app-apk", "TheApp.apk");
    const capabilities = {
      "appium:platformName": "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Pixel XL",
      "appium:app": appPath,
      "appium:platformVersion": "13",
      "appium:browserName": "",
    };
    try {
      // Use centralized DriverManager to create the Android driver
      driver = await DriverManager.createAndroidDriver(capabilities);
      console.log("Driver created via DriverManager");
    } catch (err) {
      console.error("Error creating driver via DriverManager:", err);
      throw err;
    }
  }, 60000);

  afterAll(async () => {
    await DriverManager.quitDriver(driver);
  });

  test("login should fail", async () => {
    // Use page objects (each method includes explicit waits)
    const home = new HomeScreen(driver);
    await home.openLoginScreen();

    const login = new LoginScreen(driver);
    await login.enterUsername("ahmed@gmail.com");
    await login.enterPassword("12345");
    await login.tapLogin();

    const alert = new AlertDialog(driver);
    const msg = await alert.getMessageText();
    expect(msg).toEqual("Invalid login credentials, please try again");
  });
});
