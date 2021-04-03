const { expect } = require("chai");
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function solution(input, markers) {
  var re = new RegExp(`[${markers.join("|")}].*`,"g");
  return input.split("\n").map(line => line.replace(re,"").trim()).join("\n")
};

function checkComments(input, markers, expected) {
  var actual;
  actual = solution(input, markers);
  return expect(actual).to.equal(expected)
};

const a = checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
const b = checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
module.exports = () => {
 return Boolean(a)&Boolean(b)
}