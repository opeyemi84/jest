const reverseString = require("../app/reverseString");

describe("reverse a string", () => {
  test("reverse a string", () => {
    expect(reverseString("money")).toBe("yenom");
  });
});
