const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('adds 7 * 2 to equal 14', () => {
  expect(calculator.multiply(7, 2)).toBe(14);
});

test('isOdd returns true for an odd number', () => {
  expect(calculator.isOdd(5)).toBe(true);
  expect(calculator.isOdd(15)).toBe(true);
  expect(calculator.isOdd(7)).toBe(true);
});

test('isOdd returns false for an even number', () => {
  expect(calculator.isOdd(52)).toBe(false);
  expect(calculator.isOdd(10)).toBe(false);
  expect(calculator.isOdd(12)).toBe(false);
});

test('isEven returns true for an even number', () => {
  expect(calculator.isEven(4)).toBe(true);
  expect(calculator.isEven(40)).toBe(true);
  expect(calculator.isEven(24)).toBe(true);
});

test('isEven returns false for an odd number', () => {
  expect(calculator.isEven(41)).toBe(false);
  expect(calculator.isEven(3)).toBe(false);
  expect(calculator.isEven(1)).toBe(false);
});

test('divisibleBy returns true when a number is evenly divisible', () => {
  expect(calculator.divisibleBy(10, 5)).toBe(true);
  expect(calculator.divisibleBy(50, 10)).toBe(true);
  expect(calculator.divisibleBy(14, 7)).toBe(true);
});

test('divisibleBy returns false when a number is not evenly divisible', () => {
  expect(calculator.divisibleBy(10, 3)).toBe(false);
  expect(calculator.divisibleBy(50, 11)).toBe(false);
  expect(calculator.divisibleBy(2, 7)).toBe(false);
});

test('square returns the square of a number', () => {
  expect(calculator.square(10)).toBe(100);
  expect(calculator.square(1)).toBe(1);
  expect(calculator.square(4)).toBe(16);
  expect(calculator.square(5.5)).toBe(30.25);
});
