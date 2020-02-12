const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies 5 x 5 to equal 25', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('returns true if the number is odd', () => {
  expect(calculator.isOdd(3)).toBe(true);
  expect(calculator.isOdd(2)).toBe(false);
});

test('returns true if the number is even', () => {
  expect(calculator.isEven(3)).toBe(false);
  expect(calculator.isEven(2)).toBe(true);
});

test('returns true if the first number can be divided by second number equally', () => {
  expect(calculator.divideBy(6, 2)).toBe(true);
  expect(calculator.divideBy(13, 7)).toBe(false);
});

test('returns the square of the number passed to it', () => {
  expect(calculator.square(9)).toBe(3);
  expect(calculator.square(6)).toBe(2.449489742783178);
});