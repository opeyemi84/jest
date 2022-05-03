import { add, sub, div, mul } from "../app/calculator";

describe("return correct calculation for each operation", () => {
  test("add", () => {
    expect(add(5, 2)).toBe(7);
  });
  test("subtract", () => {
    expect(sub(5, 2)).toBe(3);
  });
  test("divide", () => {
    expect(div(5, 2)).toBe(2.5);
  });
  test("multiply", () => {
    expect(mul(5, 2)).toBe(10);
  });
});
