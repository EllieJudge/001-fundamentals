function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function isOdd(num) {
    return num % 2 === 1;
}

function isEven(num) {
    return num % 2 === 0;
}

const divideBy = (a, b) => {
    return a % b === 0;
}

function square(num) {
    return Math.sqrt(num);
}

module.exports = {
    add,
    subtract,
    multiply,
    isOdd,
    isEven,
    divideBy,
    square
};