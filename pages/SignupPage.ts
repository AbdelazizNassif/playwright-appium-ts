import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {

  async getSignupErrorMsg(): Promise<string | null> {
    
    let txt: string | null = await this.page.getByText('Email Address already exist!').textContent() ;;
    console.log("Signup error msg: " + txt);
    return txt;
  }
  constructor(page: Page) {
    super(page);
  }

  async navigateTo(): Promise<void> {
    await this.goto('https://www.automationexercise.com/login');
  }

  async fillSignupEmail(email: string): Promise<void> {
    await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
  }

  async fillSignupName(name: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
  }

  async clickSignupButton(): Promise<void> {
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  async fillPassword(password: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Password *' }).fill(password);
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'First name *' }).fill(firstName);
  }

  async fillLastName(lastName: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill(lastName);
  }

  async fillAddress(address: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(address);
  }

  async fillState(state: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'State *' }).click();
    await this.page.getByRole('textbox', { name: 'State *' }).fill(state);
  }

  async clickAccountInformationSection(): Promise<void> {
    await this.page.locator('div').filter({ hasText: 'Enter Account Information' }).nth(1).click();
  }

  async fillCity(city: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
    await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill(city);
  }

  async fillZipcode(zipcode: string): Promise<void> {
    await this.page.locator('#zipcode').click();
    await this.page.locator('#zipcode').fill(zipcode);
  }

  async fillMobileNumber(mobile: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Mobile Number *' }).click();
    await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill(mobile);
  }

  async clickCreateAccountButton(): Promise<void> {
    await this.page.getByRole('button', { name: 'Create Account' }).click();
  }
}
