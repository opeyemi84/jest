import { min, max, Average, len } from "./analyzeArray";

describe("Return values", () => {
  test("Return minimum value", () => {
    expect(min([1, 8, 3, 4, 2, 6])).toBe(1);
  });
  test("Return maximum value", () => {
    expect(max([1, 8, 3, 4, 2, 6])).toBe(8);
  });
  test("Return average value", () => {
    expect(Average([1, 8, 3, 4, 2, 6])).toBe(4);
  });
  test("Return length of Array", () => {
    expect(len([1, 8, 3, 4, 2, 6])).toBe(6);
  });
});
