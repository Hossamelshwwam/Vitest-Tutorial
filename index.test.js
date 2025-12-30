import { describe, it, expect, vi } from "vitest";
import {
  capitalize,
  divide,
  sum,
  asycnFn,
  fetchUser,
  getUserName,
} from "./index";
import { fetchData } from "./api";
import * as functions from "./index";

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

// describe("Test Divide Function", () => {
//   it.each(cases)("divide (%i, %i) => %i", (a, b, expected) => {
//     expect(divide(a, b)).toBe(expected);
//   });
//   it("Positive Numbers", () => {
//     expect(divide(12, 2)).toBe(6);
//   });
//   it("Negative Numbers", () => {
//     expect(divide(-6, 2)).toBe(-3);
//   });
//   it("Return Infinity", () => {
//     expect(divide(10, "")).toBe(Infinity);
//   });
//   it("throws error when dividing by zero", () => {
//     expect(() => divide(-6, 0)).toThrow("Division by zero");
//   });
//   it("Return NaN", () => {
//     expect(divide(10, "asdad")).toBeNaN();
//   });
// });

// describe("Test Capitalize Function", () => {
//   it("capitalize first character", () => {
//     expect(capitalize("hello")).toBe("Hello");
//   });

//   it("Throw error if null or ''", () => {
//     expect(() => capitalize("")).toThrowError("No string provided");
//   });

//   let cases = ["hello", "world", "vitest"];

//   it.each(cases)("Check first char uppercase for %s", (ch) => {
//     expect(capitalize(ch)).toBe(`${ch[0].toUpperCase()}${ch.slice(1)}`);
//   });
// });

describe("Test Async function", () => {
  it("Error Message", async () => {
    await expect(asycnFn(null)).rejects.toThrow("Invalid value");
  });
  it("Success Message", async () => {
    await expect(asycnFn(5)).resolves.toBe(7);
  });
});
describe("Test Fetch function", () => {
  it("Success Message", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        name: "hossam",
      }),
    });
    await expect(fetchUser()).resolves.toEqual({
      name: "hossam",
    });
  });
});

describe("Test Fetch function With Async Function", () => {
  it("Success Message", async () => {
    vi.spyOn(functions, "fetchUser").mockResolvedValue({
      name: "hossam",
    });

    await expect(getUserName()).resolves.toBe("hossam");
  });
});

vi.mock("./api", () => ({
  fetchData: vi.fn().mockReturnValue({ data: "123" }),
}));

describe("Test function With Mocking File", () => {
  it("Success Message", () => {
    expect(fetchData()).toEqual({ data: "123" });
  });
});
