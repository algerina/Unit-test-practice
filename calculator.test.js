const { Calculator } = require('./calculator.js');

describe('add', () => {
    test('Must be eaqual to 5', () => expect(Calculator.add(4, 1)).toBe(5));
    test('Must be eaqual to 34', () => expect(Calculator.add(32, 2)).toBe(34));
});

describe('substract', () => {
    test('Must be eaqual to 5', () => expect(Calculator.substract(10, 5)).toBe(5));
    test('Must be eaqual to 34', () => expect(Calculator.substract(34, 0)).toBe(34));
});

describe('multiply', () => {
    test('Must be eaqual to 5', () => expect(Calculator.multiply(1, 5)).toBe(5));
    test('Must be eaqual to 34', () => expect(Calculator.multiply(17, 2)).toBe(34));
});

describe('divid', () => {
    test('Must be eaqual to 5', () => expect(Calculator.divid(10, 2)).toBe(5));
    test('Must be eaqual to 34', () => expect(Calculator.divid(34, 1)).toBe(34));
});



