const scope = require("../support/scope");

const TIMEOUT = 5000;

async function navigationToEnd() {
  await scope.page.waitForNavigation();
}

const selectorToBeRendered = async selector => {
  try {
    await scope.page.waitForSelector(selector, {
      visible: true,
      timeout: TIMEOUT
    });
  } catch (e) {
    console.error(
      `Failed to find a visible DOM element with selector: "${selector}" within the ${TIMEOUT /
        1000} seconds timeout.`
    );
    throw e;
  }
};

const selectorToContainText = async (selector, text) => {
  await selectorToBeRendered(selector);

  try {
    await scope.page.waitForFunction(
      (text, selector) =>
        document.querySelector(selector).innerText.includes(text),
      { timeout: TIMEOUT },
      text,
      selector
    );
  } catch (e) {
    // We assume the element must still be available as we previously waited for the selector to be rendered
    const domNode = await scope.page.$(selector);
    const domNodeInnerText = await scope.page.evaluate(
      el => el.innerText,
      domNode
    );
    console.log(
      `Successfully found a visible DOM element with selector: "${selector}", 
      however it contained the following text: "${domNodeInnerText}" instead of the expected text: "${text}"`
    );
    throw e;
  }
};

/**
 * WARNING: Do NOT use this in order to wait for parts of the page or data to load before then clicking or asserting.
 * This will lead to race conditions and also will slow down the tests unnecessarily. Instead use one of the other
 * functions in this module which allow you to wait until some event happens.
 * This function should ONLY be used when we have to wait for some period of time to pass.
 */
const millisecondsToPass = async millis => {
  await scope.page.waitFor(millis);
};

module.exports = {
  navigationToEnd,
  selectorToBeRendered,
  selectorToContainText,
  millisecondsToPass
};
