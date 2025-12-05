import { test, expect, request } from "@playwright/test";
import { CreateAccountApi } from "../api/CreateAccountApi";
import { VerifyLoginApi } from "../api/VerifyLoginApi";
import { signupSchema, verifyLoginSchema } from "../api-schema/api-schema";

let username: string;
let email: string;
let password: string;

test.describe.configure({ mode: "serial" });

test.beforeAll(async ({}) => {
  username = "register" + Date.now();
  email = username + "@gmail.com";
  password = "123456";
});

test("Create/Register User Account", async ({}) => {
  const apiContext = await request.newContext();

  const createAccount = new CreateAccountApi(apiContext);

  const createForm = {
    name: username,
    email: email,
    password: password,
    title: "Mr",
    birth_date: "10",
    birth_month: "May",
    birth_year: "1995",
    firstname: "John",
    lastname: "Doe",
    company: "TechCorp",
    address1: "123 Street",
    address2: "Apartment 4",
    country: "United States",
    zipcode: "10001",
    state: "NY",
    city: "New York",
    mobile_number: "1234567890",
  };

  // Call create account endpoint via API object
  let response = await createAccount.createAccount(createForm);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.message).toBe("User created!");
  // verify respone schema
  const parseResult = signupSchema.safeParse(body);
  expect(parseResult.success).toBeTruthy(); // Ensure schema is valid
});

test("Verify user is created", async ({}) => {
  const apiContext = await request.newContext();

  // Call verify login endpoint via API object
  const verifyLogin = new VerifyLoginApi(apiContext);

  const response = await verifyLogin.verifyLogin({ email, password });
  expect(response.status()).toBe(200);

  const verifyBody = await response.json();
  expect(verifyBody.message).toBe("User exists!");
  const parseResult = verifyLoginSchema.safeParse(verifyBody);
  expect(parseResult.success).toBeTruthy(); // E
});
