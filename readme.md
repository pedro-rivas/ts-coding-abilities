# Ts - Exercises

Typescript exercises included in the coding abilities challenge.

## How to run the project

Steps to run the project locally:

1. Download or clone the project.
2. Enter to the root folder `/codeChallange`.
3. Open your terminal and run `npm i` or `npm install` to install the packages needed.
4. Run `yarn start` or `npm run start` to see if everything is ok. You should see a `ok` message in the console.
5. Run `yarn test` or `npm run test` to run the tests.

## Exercises

The exercises are located in the `src/exercises/` folder, one file for every exercise.

### 1. Credit card number masking

Available in `src/exercises/creditCardNumberMasking.ts`

```
/**
 * Mask a card number
 * @param cardNumber the card number
 * @param maskifyder the symbol to be used as mask, default x
 * @returns A card number masked ej. 5xxxxxxxxx6895
 */
```

### 2. Ordinal numbers

Available in `src/exercises/numberToOrdinal.ts`

```
/**
 * Converts numbers to ordinals
 * @param number a number
 * @returns A ordinal number ej. 1 => 1st
 */
```

### 3. Reverse polish notation calculator

Available in `src/exercises/reversePolishCalculator.ts`

```
/**
 * Reverse polish notation calculator
 * @param expression the expression in reverse polish notation ej. "2 1 + 3 *"
 * @param expressionSeparator the separator, default " "
 * @returns the result as a number ej. 9
 */
```

## Tests

The tests are available in the `test/` folder, one file for every exercise. Tests were implemented with [Jest](https://jestjs.io/).
To generate code coverage run `yarn testc` or `npm run testc`.

## Environment configurations

- node v12.18.2
- typescript v4.5.2
- ts-node 10.4.0
- jest 27.4.3
- ts-jest 27.0.7
