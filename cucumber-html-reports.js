const reporter = require("cucumber-html-reporter");
const path = require("path");

const environment = process.env.MOCK == true ? "MOCK" : "UAT";

const reportsDir = path.resolve(__dirname, "./reports");

var options = {
  theme: "hierarchy",
  jsonFile: path.resolve(reportsDir, "cucumber-report.json"),
  output: path.resolve(reportsDir, "cucumber-report.html"),
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Test Environment": `${environment}`,
    Platform: "iOS",
    reportSuiteAsScenarios: true
  }
};

reporter.generate(options);
