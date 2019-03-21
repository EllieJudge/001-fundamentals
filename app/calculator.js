function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function isOdd(n) {
	return n % 2 === 1;
}

function isEven(n) {
	return n % 2 === 0;
}

function divisibleBy(a, d) {
	return a % d === 0;
}

function square(n) {
	return n * n;
}

module.exports = {
	add,
	subtract,
	multiply,
	isOdd,
	isEven,
	divisibleBy,
	square,
};