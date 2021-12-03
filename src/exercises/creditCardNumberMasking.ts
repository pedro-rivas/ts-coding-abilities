/**
 * Mask a card number
 * @param cardNumber the card number
 * @param maskifyder the symbol to be used as mask, default x
 * @returns A card number masked ej. 5xxxxxxxxx6895
 */
export default function maskify(cardNumber: string, maskifyder = "x"): string {
  const cardLength = cardNumber.length;
  cardNumber = cardNumber.trim();
  const lastNumbersToShow = 4;
  const numbersToBeMasked = cardLength - lastNumbersToShow;
  /**
   * [1] Preconditions
   */
  containtOnlyDigits(cardNumber);
  hasRigthLength(cardLength);
  /**
   * [2] Mask
   */
  // return the card number if has less than the digits length allowed to mask
  if (cardLength < 7) {
    return cardNumber;
  }
  // mask the card number
  const cardNumberMasked = cardNumber
    .split("")
    .map((theNumber, i) =>
      !i || i >= numbersToBeMasked ? theNumber : maskifyder
    );
  /**
   * [3] Return the card number masked
   */
  return cardNumberMasked.join("");
}

/**
 *  Preconditions
 */

// check if card number contain only digits
function containtOnlyDigits(cardNumber: string) {
  const containtOnlyDigits = /^\d+$/.test(cardNumber);
  if (!containtOnlyDigits) {
    throw new Error("Card number must contain only digits");
  }
}

// check if card number has the right length
function hasRigthLength(cardLength: number) {
  if (cardLength <= 1 || cardLength >= 17) {
    throw new Error(
      "Card number must be more than 1 and at less 16 digits length"
    );
  }
}
