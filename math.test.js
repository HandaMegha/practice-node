const chai = require("chai");
const expect = chai.expect;
const sum = require("./math");

describe("sum function", () => {
  it("should return 4 when summing 2 and 2", () => {
    const result = sum(2, 2);
    expect(result).to.equal(4);
  });

  it("should return -5 when summing 2 and -7", () => {
    const result = sum(2, -7);
    expect(result).to.equal(-5);
  });

  it("should return NaN if one of the parameters is not a number", () => {
    const result = sum("a", 5);
    expect(result).to.be.NaN;
  });

  it("should return NaN if both parameters are not numbers", () => {
    const result = sum("a", "b");
    expect(result).to.be.NaN;
  });
});
