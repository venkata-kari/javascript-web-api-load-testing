const { Before, Given, When, Then, setDefaultTimeout } = require("cucumber");
const mockData = require("../utils/mockDataUtils");
const scope = require("../support/scope");
const pageUtils = require("../utils/pageUtils");
const pageObjects = require("../../testIds/pageObjects.page");
const assert = require("../utils/assertions");
const chai = require("chai");

setDefaultTimeout(120 * 1000);

let firstName = mockData.firstName();
let lastName = mockData.lastName();
let passwordString = mockData.password();

Given("I goto {word} page", async pageType => {
  switch (pageType) {
    case "Registration":
      await scope.page.goto(
        "http://www.newtours.demoaut.com/mercuryregister.php"
      );
      break;
    case "Signon":
      await scope.page.goto("http://newtours.demoaut.com/mercurysignon.php");
      break;
    default:
      console.log(`Missing page type in Given step.`);
  }
});

When("I enter valid ContactInformation", async () => {
  await pageUtils.type(pageObjects.firstName, firstName);
  await pageUtils.type(pageObjects.lastName, lastName);
  await pageUtils.type(pageObjects.phone, mockData.phoneNumber());
  await pageUtils.type(pageObjects.email, mockData.email());

  scope.userName = `${firstName}.${lastName}`;
});

When("I enter valid MailingInformation", async () => {
  await pageUtils.type(pageObjects.address1, mockData.address1());
  await pageUtils.type(pageObjects.address2, mockData.address2());
  await pageUtils.type(pageObjects.city, mockData.city());
  await pageUtils.type(pageObjects.state, mockData.state());
  await pageUtils.selectFromDropdown(pageObjects.country, "BANGLADESH ");
});

When("I enter valid UserInformation", async () => {
  scope.password = passwordString;
  await pageUtils.type(pageObjects.userName, scope.userName);
  await pageUtils.type(pageObjects.password, scope.password);
  await pageUtils.type(pageObjects.confirmPassword, scope.password);
});

When("I submit valid LoginDetails to Login", async () => {
  await pageUtils.type(pageObjects.loginUserName, scope.userName);
  await pageUtils.type(pageObjects.password, scope.password);
  await pageUtils.clickOn(pageObjects.loginButton);
});

Then("I see flight finder page", () => {
  const expect = chai.expect;
  const flightFinderPageUrl =
    "http://newtours.demoaut.com/mercuryreservation.php";
  expect(scope.page.url()).to.equals(flightFinderPageUrl);
});

When("I submit form to register", async () => {
  await pageUtils.clickOn(pageObjects.submitForm);
});

Then("I see registration success page", async () => {
  await assert.textVisibleInView(`Dear ${firstName} ${lastName}`);
  await assert.textVisibleInView(`Note: Your user name is ${scope.userName}`);
});
