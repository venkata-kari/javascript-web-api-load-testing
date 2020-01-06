async function getElementById(elementId) {
  return scope.page.evaluate(() => document.getElementById(elementId));
}

module.exports = {
  getElementById
};
