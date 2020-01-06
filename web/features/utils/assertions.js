const chai = require("chai");
const pageUtils = require("./pageUtils");
const waitFor = require("./waitForUtils");
const scope = require("../support/scope");

async function elementIsVisibleInPage(elementId) {
  await waitFor.selectorToBeRendered(elementId);
  await exists(elementId);
}

async function textMatchesInView(element, message) {
  await waitFor.selectorToBeRendered(element);
  await textVisibleInElement(element, message);
  const elementInnerText = await pageUtils.getInnerText(element);

  await equals(message, elementInnerText);
}

async function elementNotVisible(element) {
  const expect = chai.expect;
  const e = await scope.page.$$(element);
  expect(e.length).to.equals(0);
}

async function textIncludedInView(element, message) {
  await waitFor.selectorToBeRendered(element);
  await textVisibleInElement(element, message);
  const elementInnerText = await pageUtils.getInnerText(element);

  await includes(elementInnerText, message);
}

async function textMatchesInTextInput(textInputId, text) {
  await waitFor.selectorToBeRendered(textInputId);
  const inputValue = await pageUtils.getValueFromTextInput(textInputId);

  await equals(text, inputValue);
}

async function textVisibleInElement(element, text) {
  await waitFor.selectorToContainText(element, text);
}

async function textVisibleInView(text) {
  await textVisibleInElement("body", text);
}

async function equals(actual, expected) {
  const expect = chai.expect;
  expect(actual).to.equal(expected);
}

async function exists(selector) {
  const expect = chai.expect;
  await expect(selector).to.exist;
}

async function includes(actual, expected) {
  const expect = chai.expect;
  expect(actual).to.include(expected);
}

module.exports = {
  textMatchesInView,
  textIncludedInView,
  textVisibleInView,
  textMatchesInTextInput,
  textVisibleInElement,
  elementIsVisibleInPage,
  equals,
  elementNotVisible
};
