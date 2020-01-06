const scope = require("../support/scope");
const fs = require("fs-extra");

const debugDirectory = "web/debug/";
const screenshotsDirectory = debugDirectory + "screenshots/";

const takeScreenshot = async imageName => {
  makeDirectoryIfDoesNotExist(debugDirectory);
  makeDirectoryIfDoesNotExist(screenshotsDirectory);

  await scope.page.screenshot({
    path: `${screenshotsDirectory}${imageName}.png`
  });
};

const makeDirectoryIfDoesNotExist = directoryName => {
  fs.ensureDirSync(directoryName);
};

module.exports = {
  takeScreenshot
};
