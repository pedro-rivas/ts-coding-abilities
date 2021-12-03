/**
 * Converts numbers to ordinals
 * @param number a number
 * @returns A ordinal number ej. 1 => 1st
 */
export default function numberToOrdinal(number: number): string {
  /**
   * [1] Preconditions
   */
  isPositive(number);
  isInteger(number);
  // return '0' if it´s 0
  if (!number) return `${number}`;
  /**
   * [2] Covert to ordinal
   */
  // suffixes
  const suffixes: { [key: string]: string } = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  // get the number ordinal rule
  const orninalRules = new Intl.PluralRules("en-US", { type: "ordinal" });
  const rule = orninalRules.select(number);
  const suffix = suffixes[rule];
  const ordinal = `${number}${suffix}`;
  /**
   * [3] Return the ordinal
   */
  return ordinal;
}

/**
 *  Preconditions
 */

// check if it's positive
function isPositive(number: number) {
  if (number < 0) {
    throw new Error("The number should be positive or 0");
  }
}

// check if it's integer
function isInteger(number: number) {
  if (!Number.isInteger(number)) {
    throw new Error("The number should be integer or 0");
  }
}
