const chai = require("chai");
const fetch = require("node-fetch");
const mockData = require("../utils/mockUtils");
const FormData = require("form-data");

const api = "http://newtours.demoaut.com";
const loginUrl = "/login.php";
const registerUrl = "/mercurycreate_account.php";
const badUrl = "/black";

let firstName = mockData.firstName();
let lastName = mockData.lastName();
let password = mockData.password();
let phoneNumber = mockData.phoneNumber();
let email = mockData.email();
let address1 = mockData.address1();
let address2 = mockData.address2();
let city = mockData.city();
let state = mockData.state();
let postalCode = mockData.postalCode();

describe("API TEST", () => {
  it("successful register new user account", async () => {
    const expect = chai.expect;
    const formData = registerFormData();
    const regResponseData = await fetch(`${api}${registerUrl}`, {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    expect(regResponseData.status).to.equals(200); //Not getting 302 as the website behaviour
    expect(regResponseData.statusText).to.equals("OK");
    const createAccountSuccessUrl = regResponseData.url.split("?");
    expect(createAccountSuccessUrl[0]).to.equals(
      "http://newtours.demoaut.com/mercurycreate_account.php"
    );
  });

  it("successful login using valid login details", async () => {
    const expect = chai.expect;
    const formData = loginFormData();
    const loginResponse = await fetch(`${api}${loginUrl}`, {
      method: "post",
      body: formData,
      headers: {}
    });
    expect(loginResponse.status).to.equals(200);
    expect(loginResponse.statusText).to.equals("OK");
  });

  //404 response  http://newtours.demoaut.com/black
  it("check /black url not accessible", async () => {
    const expect = chai.expect;
    const response = await fetch(`${api}${badUrl}`, {
      method: "get"
    });
    expect(response.status).to.equals(404);
  });
});

function loginFormData() {
  let loginForm = new FormData();
  loginForm.append("action", "process");
  loginForm.append("userName", "asdf.asdf");
  loginForm.append("password", "123456");
  return loginForm;
}

function registerFormData() {
  let regFormData = new FormData();
  regFormData.append("mercury", "process");
  regFormData.append("firstName", firstName);
  regFormData.append("lastName", lastName);
  regFormData.append("phone", phoneNumber);
  regFormData.append("userName", `${firstName + lastName}`);
  regFormData.append("address1", address1);
  regFormData.append("address2", address2);
  regFormData.append("city", city);
  regFormData.append("state", state);
  regFormData.append("postalCode", postalCode);
  regFormData.append("country", "215");
  regFormData.append("email", email);
  regFormData.append("password", password);
  regFormData.append("confirmPassword", password);
  return regFormData;
}
