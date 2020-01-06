const puppeteer = require("puppeteer");
const { BeforeAll, Before, After, AfterAll } = require("cucumber");
const scope = require("../support/scope");
const waitFor = require("../utils/waitForUtils");
const debugUtils = require("../utils/debugUtils");

const height = 1080;
const width = 1220;
let browser;
let page;

const pageUrl = "http://newtours.demoaut.com";

BeforeAll(async () => {
  console.log(`\nRunning tests against: ${pageUrl}`);

  browser = await puppeteer.launch({
    headless: false,
    timeout: 60000,
    args: [
      `--window-size=${width},${height}`,
      `--disable-setuid-sandbox`
    ]
  });
});

Before(async scenario => {
  page = await browser.newPage();
  await page.setViewport({ height: height, width: width });
  scope.browser = browser;
  scope.page = page;
  console.log(`\nRunning scenario: "${scenario.pickle.name}"`);

  page = await scope.page.goto(pageUrl, {
    waitUntil: "networkidle2"
  });
});

After(async scenario => {
  if (scenario.result.status === "failed") {
    // If a scenario fails, we take a screenshot and save it as web/debug/screenshots/<SCENARIO_NAME>.png
    await debugUtils.takeScreenshot(scenario.pickle.name);
  }

  if (scope.browser && scope.page) {
    const cookies = await scope.page.cookies();
    if (cookies && cookies.length > 0) {
      await scope.page.deleteCookie(...cookies);
    }
    await scope.page.close();
  }
});

AfterAll(async () => {
  await browser.close();
});
