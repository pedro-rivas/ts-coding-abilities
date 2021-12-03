import { numberToOrdinal } from "../index";

describe("Numbers to ordinals", () => {
  /**
   * Should be positive
   */
  test("should throw an error if the number is negative", () => {
    expect(() => numberToOrdinal(-1)).toThrow(
      "The number should be positive or 0"
    );
    expect(() => numberToOrdinal(-100659)).toThrow(
      "The number should be positive or 0"
    );
  });
  /**
   * Should be integer
   */
  test("should throw an error if the number isn´t a integer", () => {
    expect(() => numberToOrdinal(1.5)).toThrow(
      "The number should be integer or 0"
    );
    expect(() => numberToOrdinal(100.05)).toThrow(
      "The number should be integer or 0"
    );
  });
  /**
   * Should return 0 if the number is 0
   */
  test("should return 0", () => {
    expect(numberToOrdinal(0)).toBe("0");
  });
  /**
   * Should convert numbers ending in 1
   */
  test("should convert numbers ending in 1", () => {
    expect(numberToOrdinal(1)).toBe("1st");
    expect(numberToOrdinal(21)).toBe("21st");
    expect(numberToOrdinal(1991)).toBe("1991st");
  });
  /**
   * Should convert numbers ending in 2
   */
  test("should convert numbers ending in 2", () => {
    expect(numberToOrdinal(2)).toBe("2nd");
    expect(numberToOrdinal(22)).toBe("22nd");
    expect(numberToOrdinal(1982)).toBe("1982nd");
  });
  /**
   * Should convert numbers ending in 3
   */
  test("should convert numbers ending in 3", () => {
    expect(numberToOrdinal(3)).toBe("3rd");
    expect(numberToOrdinal(23)).toBe("23rd");
    expect(numberToOrdinal(1983)).toBe("1983rd");
  });
  /**
   * Should convert all the "teen" numbers
   */
  test("should convert all the teen numbers", () => {
    expect(numberToOrdinal(11)).toBe("11th");
    expect(numberToOrdinal(12)).toBe("12th");
    expect(numberToOrdinal(13)).toBe("13th");
    expect(numberToOrdinal(112)).toBe("112th");
  });
  /**
   * Should convert the test examples and some random numbers
   */
  test("should convert the test examples and some random numbers", () => {
    expect(numberToOrdinal(10)).toBe("10th");
    expect(numberToOrdinal(1000000)).toBe("1000000th");
    expect(numberToOrdinal(1855648)).toBe("1855648th");
    expect(numberToOrdinal(985462)).toBe("985462nd");
  });
});
