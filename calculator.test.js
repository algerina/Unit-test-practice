const  calculator = require('./calculator.js');

describe('add', () => {
    it('Must be eaqual to 5', () => { 
        expect(calculator.add(4,1)).toBe(5)
    });
    it('Must be eaqual to 34', () => { 
        expect(calculator.add(32,2)).toBe(34)
    });
});

describe('substract', () => {
    test('Must be eaqual to 5', () => expect(calculator.substract(10, 5)).toBe(5));
    test('Must be eaqual to 34', () => expect(calculator.substract(34, 0)).toBe(34));
});

describe('multiply', () => {
    test('Must be eaqual to 5', () => expect(calculator.multiply(1, 5)).toBe(5));
    test('Must be eaqual to 34', () => expect(calculator.multiply(17, 2)).toBe(34));
});

describe('divid', () => {
    test('Must be eaqual to 5', () => expect(calculator.divid(10, 2)).toBe(5));
    test('Must be eaqual to 34', () => expect(calculator.divid(34, 1)).toBe(34));
});



