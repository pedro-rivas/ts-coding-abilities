const operators: { [key: string]: (a: any, b: any) => number } = {
  "+": (n1, n2) => n1 + n2,
  "-": (n1, n2) => n1 - n2,
  "*": (n1, n2) => n1 * n2,
  "/": (n1, n2) => n1 / n2,
};

/**
 * Reverse polish notation calculator
 * @param expression the expression in reverse polish notation ej. "2 1 + 3 *"
 * @param expressionSeparator the separator, default " "
 * @returns the result as a number ej. 9
 */
export default function calculate(
  expression: string,
  expressionSeparator = " "
): number {
  const stackNumbers: number[] = [];
  expression = expression.trim();
  const expressionTokens = expression.split(expressionSeparator);
  /**
   * [1] Preconditions
   */
  isNotEmpty(expression);
  /**
   * [2] Calculate
   */
  // loop every token
  expressionTokens.forEach((token) => {
    // check if the token is a number
    if (isANumber(token)) {
      stackNumbers.push(parseInt(token));
    }
    // check if the operator is valid
    else if (isAValidOperator(token)) {
      // get the values from the stack
      const n2 = stackNumbers.pop();
      const n1 = stackNumbers.pop();
      // make the operation
      const tempResult = operators[token](n1, n2);
      // save the result
      stackNumbers.push(tempResult);
    } else {
      // throw a error
      throw new Error(`Token: ${token} is not valid`);
    }
  });

  if (stackNumbers.length > 1) {
    throw new Error(`Invalid expression`);
  }
  /**
   * [3] Return the result
   */
  return stackNumbers[0];
}

/**
 * Helpers
 */
const isAValidOperator = function (token: string): boolean {
  return token in operators;
};

const isANumber = function (token: string): boolean {
  return !isNaN(parseInt(token)) && token != "0";
};

/**
 *  Preconditions
 */

// check if it's empty
function isNotEmpty(expression: string) {
  if (expression.length < 1) {
    throw new Error("The expression must not be empty");
  }
}
