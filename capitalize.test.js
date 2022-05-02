const capitalize = require("./capitalize");

describe("capitalize", () => {
  test("capitalize first letter of a string", () => {
    expect(capitalize("boy")).toBe("Boy");
  });
  test("capitalize first letter of a string", () => {
    expect(capitalize("bananas")).toBe("Bananas");
  });
});
