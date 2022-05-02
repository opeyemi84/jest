const reverseString = require("./reverseString");

describe("reverse a string", () => {
  test("reverse a string", () => {
    expect(reverseString("money")).toBe("yenom");
  });
});
