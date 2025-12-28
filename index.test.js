import { describe, it, expect } from "vitest";
import { capitalize, divide, sum } from "./index";

// describe("Test Sum Function", () => {
//   it("returned 5 if a = 2, b = 3", () => {
//     expect(sum(2, 3)).toBe(5);
//   });
// });

const cases = [
  [12, 2, 6],
  [-6, 2, -3],
  [10, "", Infinity],
];

describe("Test Divide Function", () => {
  it.each(cases)("divide (%i, %i) => %i", (a, b, expected) => {
    expect(divide(a, b)).toBe(expected);
  });
  it("Positive Numbers", () => {
    expect(divide(12, 2)).toBe(6);
  });
  it("Negative Numbers", () => {
    expect(divide(-6, 2)).toBe(-3);
  });
  it("Return Infinity", () => {
    expect(divide(10, "")).toBe(Infinity);
  });
  it("throws error when dividing by zero", () => {
    expect(() => divide(-6, 0)).toThrow("Division by zero");
  });
  it("Return NaN", () => {
    expect(divide(10, "asdad")).toBeNaN();
  });
});

describe("Test Capitalize Function", () => {
  it("capitalize first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("Throw error if null or ''", () => {
    expect(() => capitalize("")).toThrowError("No string provided");
  });

  let cases = ["hello", "world", "vitest"];

  it.each(cases)("Check first char uppercase for %s", (ch) => {
    expect(capitalize(ch)).toBe(`${ch[0].toUpperCase()}${ch.slice(1)}`);
  });
});
