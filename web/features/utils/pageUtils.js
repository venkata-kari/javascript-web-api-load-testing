const scope = require("../support/scope");
const waitForUtils = require("../utils/waitForUtils");

async function getCurrentPageUrl() {
  return await scope.page.evaluate(() => location.href);
}

async function selectFromDropdown(selector, text) {
  await waitForUtils.selectorToBeRendered(selector);
  const dropdown = await scope.page.$(selector);
  await dropdown.type(text);
}

async function clickOn(selector) {
  await multiClickOn(selector, 1);
}

async function multiClickOn(selector, count) {
  await scope.page.click(selector, { clickCount: count });
}

async function type(selector, text) {
  await waitForUtils.selectorToBeRendered(selector);
  await scope.page.type(selector, text);
}

async function replaceInputText(selector, text) {
  await clearInputText(selector);
  await type(selector, text);
}

async function clearInputText(selector) {
  const currentInputValue = await getValueFromTextInput(selector);
  await clickOn(selector);
  for (let i = 0; i < currentInputValue.length; i++) {
    await hitBackspace();
  }
}

async function hitBackspace() {
  await keyboardPress("Backspace");
}

async function keyboardPress(key) {
  await scope.page.keyboard.press(key);
}

async function getInnerText(selector) {
  return await scope.page.$eval(selector, element => element.innerText);
}

async function getValueFromTextInput(selector) {
  return await scope.page.$eval(selector, element => element.value);
}

module.exports = {
  getCurrentPageUrl,
  clickOn,
  type,
  replaceInputText,
  getInnerText,
  getValueFromTextInput,
  selectFromDropdown
};
