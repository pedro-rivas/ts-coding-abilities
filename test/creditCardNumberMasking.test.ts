import { maskify } from "../index";

describe("Maskify", () => {
  /**
   * Should contains only digits
   */
  test("should throw an error if card number contains something else than digits", () => {
    expect(() => maskify("123456g")).toThrow(
      "Card number must contain only digits"
    );
    expect(() => maskify("12345-68959")).toThrow(
      "Card number must contain only digits"
    );
    expect(() => maskify("12345.68959")).toThrow(
      "Card number must contain only digits"
    );
  });
  /**
   * Should have the right length
   */
  test("should throw an error if card number length is 1", () => {
    expect(() => maskify("1")).toThrow(
      "Card number must be more than 1 and at less 16 digits length"
    );
  });

  test("should throw an error if card number length is 17", () => {
    expect(() => maskify("12345678912345678")).toThrow(
      "Card number must be more than 1 and at less 16 digits length"
    );
  });

  test("should return the same card number if the length is 2", () => {
    expect(maskify("12")).toBe("12");
  });

  test("should return the same card number masked if the length is 16", () => {
    expect(maskify("1234567891234567")).toBe("1xxxxxxxxxxx4567");
  });
  /**
   * Should return the card number without the mask
   */
  test("should return the card number without the mask", () => {
    expect(maskify("123")).toBe("123");
    expect(maskify("1234")).toBe("1234");
    expect(maskify("12345")).toBe("12345");
    expect(maskify("123456")).toBe("123456");
  });
  /**
   * Should return the card number masked
   */
  test("should return the card number masked", () => {
    expect(maskify("1234567")).toBe("1xx4567");
    expect(maskify("12345678")).toBe("1xxx5678");
    expect(maskify("123456789123456")).toBe("1xxxxxxxxxx3456");
    expect(maskify("123456789123456", "+")).toBe("1++++++++++3456");
  });
});
