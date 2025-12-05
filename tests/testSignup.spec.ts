import { test, expect } from "@playwright/test";
import { SignupPage } from "../pages/SignupPage";
import { AccountCreationSuccessPage } from "../pages/AccountCreationSuccessPage";

let username: string;
let email: string;
let password: string;
let address: string;
let state: string;
let city: string;
let zipcode: string;
let mobile: string;

test.describe.configure({ mode: 'serial' });

test.beforeAll(async ({ }) => {
  username = "register" + Date.now();
  email = username + "@gmail.com";
  password = "123456";
  address = "egypt cairo";
  state = "cairo";
  city = "caito";
  zipcode = "23456";
  mobile = "1234567";
});

test("test registring new user to the app", async ({ page }) => {
    const signupPage = new SignupPage(page);

    await signupPage.navigateTo();

  // Initialize page objects
  const accountCreationSuccessPage = new AccountCreationSuccessPage(page);

  // Navigate to signup/login
  await signupPage.navigateTo();

  // Sign up page - fill in signup form
  await signupPage.fillSignupEmail(email);
  await signupPage.fillSignupName(username);
  await signupPage.clickSignupButton();

  // Continue filling account information
  await signupPage.fillPassword(password);
  await signupPage.fillFirstName(username);
  await signupPage.fillLastName(username);
  await signupPage.fillAddress(address);
  await signupPage.fillState(city);
  await signupPage.clickAccountInformationSection();
  await signupPage.fillCity(state);
  await signupPage.fillZipcode(zipcode);
  await signupPage.fillMobileNumber(mobile);

  // Account creation success page
  await signupPage.clickCreateAccountButton();
  expect(
    await accountCreationSuccessPage.getAccountCreationSuccessMsg()
  ).toContain("Account Created!");
});

test("test registring existing user to the app", async ({ page }) => {
      const signupPage = new SignupPage(page);

    await signupPage.navigateTo();
  // Initialize page objects
  // Navigate to signup/login
  await signupPage.navigateTo();
  // Sign up page - fill in signup form with existing email
  await signupPage.fillSignupEmail(email);
  await signupPage.fillSignupName(username);
  await signupPage.clickSignupButton();

  // Verify error message for existing email
  expect(await signupPage.getSignupErrorMsg()).toContain(
    "Email Address already exist!"
  );
});
