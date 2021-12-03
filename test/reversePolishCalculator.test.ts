import { calculate } from "../index";

describe("Reverse polish calculator", () => {
  /**
   * Should not be empty
   */
  test("the expression should not be empty", () => {
    expect(() => calculate("")).toThrow("The expression must not be empty");
    expect(() => calculate(" ")).toThrow("The expression must not be empty");
  });
  /**
   * Should accept only legal operators
   */
  test("should accept only legal operators", () => {
    expect(() => calculate("3 5 x")).toThrow("Token: x is not valid");
    expect(() => calculate("2 9 s + -")).toThrow("Token: s is not valid");
    expect(calculate("3 4 +")).toEqual(7);
  });
  /**
   * Should not accept 0
   */
  test("should not accept 0", () => {
    expect(() => calculate("0")).toThrow("Token: 0 is not valid");
    expect(() => calculate("1 0 +")).toThrow("Token: 0 is not valid");
  });
  /**
   * Should not accept invalid expressions
   */
  test("should not accept invalid expressions", () => {
    expect(() => calculate("2 5 + 5")).toThrow("Invalid expression");
  });

  /**
   * Should calculate the test examples
   */
  test("should calculate the test examples", () => {
    expect(calculate("3")).toEqual(3);
    expect(calculate("3 4 +")).toEqual(7);
    expect(calculate("2 9 5 + -")).toEqual(-12);
  });

  /**
   * Should calculate the other examples
   */
  test("should calculate other examples", () => {
    expect(calculate("4 13 5 / +")).toEqual(6.6);
    expect(calculate("5 1 2 + 4 * + 3 -")).toEqual(14);
    expect(calculate("2 1 + 3 *")).toEqual(9);
    expect(calculate("2,4,+", ",")).toEqual(6);
  });
});
