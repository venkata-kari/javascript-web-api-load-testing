const { Before, Given, When, Then, setDefaultTimeout } = require("cucumber");
const mockData = require("../utils/mockDataUtils");
const scope = require("../support/scope");
const pageUtils = require("../utils/pageUtils");
const pageObjects = require("../../testIds/pageObjects.page");
const assert = require("../utils/assertions");
const chai = require("chai");
const waitFor = require("../utils/waitForUtils");

setDefaultTimeout(120 * 1000);

Given("I login to find a flight", async () => {
  await scope.page.goto("http://newtours.demoaut.com/mercurysignon.php");
  await pageUtils.type(pageObjects.loginUserName, scope.userName);
  await pageUtils.type(pageObjects.password, scope.password);
  await pageUtils.clickOn(pageObjects.loginButton);
  const expect = chai.expect;
  const flightFinderPageUrl =
    "http://newtours.demoaut.com/mercuryreservation.php";
  expect(scope.page.url()).to.equals(flightFinderPageUrl);
});

When(
  "I select {word} as departing and {word} as arriving airports",
  async (departing, arriving) => {
    await pageUtils.selectFromDropdown(pageObjects.fromPort, departing);
    await pageUtils.selectFromDropdown(pageObjects.toPort, arriving);
  }
);

When("I select departing date and returning date", async () => {
  await pageUtils.selectFromDropdown(pageObjects.fromMonth, "February");
  await pageUtils.selectFromDropdown(pageObjects.fromDay, "1");

  await pageUtils.selectFromDropdown(pageObjects.toMonth, "February");
  await pageUtils.selectFromDropdown(pageObjects.toDay, "27");
});

When("I select flight preferences", async () => {
  await pageUtils.selectFromDropdown(pageObjects.airlinePref, "No Preference");
});

When("I search for flights", async () => {
  await pageUtils.clickOn(pageObjects.findFlightsButton);
});

Then("I select first flight from results", async () => {
  await waitFor.selectorToBeRendered(pageObjects.reserveFlightButton);
  await pageUtils.clickOn(pageObjects.reserveFlightButton);
});

Then("I submit form to secure reservation", async () => {
  const firstName = mockData.firstName();
  const lastName = mockData.lastName();
  const address1 = mockData.address1();
  const address2 = mockData.address2();
  const city = mockData.city();
  const state = mockData.state();
  const postalCode = mockData.postalCode();

  await pageUtils.type(pageObjects.mealPrefFirstName, firstName);
  await pageUtils.type(pageObjects.mealPrefLastName, lastName);
  await enterCardDetails();
  await pageUtils.type(pageObjects.ccFirstName, firstName);
  await pageUtils.type(pageObjects.ccMiddleName, mockData.middleName());
  await pageUtils.type(pageObjects.ccLastName, lastName);

  await pageUtils.replaceInputText(pageObjects.ccBillAddress1, address1);
  await pageUtils.replaceInputText(pageObjects.ccBillAddress2, address2);
  await pageUtils.replaceInputText(pageObjects.ccBillCity, city);
  await pageUtils.replaceInputText(pageObjects.ccBillState, state);
  await pageUtils.replaceInputText(pageObjects.ccBillZip, postalCode);
  await pageUtils.selectFromDropdown(
    pageObjects.ccBillCountry,
    "UNITED STATES "
  );
  await pageUtils.replaceInputText(pageObjects.delBillAddress1, address1);
  await pageUtils.replaceInputText(pageObjects.delBillAddress2, address2);
  await pageUtils.replaceInputText(pageObjects.delBillCity, city);
  await pageUtils.replaceInputText(pageObjects.delBillState, state);
  await pageUtils.replaceInputText(pageObjects.delBillZip, postalCode);
  await pageUtils.clickOn(pageObjects.buyFlightsButton);
});

Then("I see confirmation page", async () => {
  await assert.textVisibleInView("Your itinerary has been booked!");
});

async function enterCardDetails() {
  await pageUtils.selectFromDropdown(pageObjects.creditCard, "Visa");
  await pageUtils.type(pageObjects.creditnumber, mockData.fakeCardNumber());
  await pageUtils.selectFromDropdown(pageObjects.creditCardExpMonth, "05");
  await pageUtils.selectFromDropdown(pageObjects.creditCardExpYear, "2010");
}
