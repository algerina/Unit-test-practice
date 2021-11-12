class Calculator {
    constructor(num1, num2) { 
        this.num1 = num1;
        this.num2 = num2;
    }
    add(num1, num2) {
        return num1 + num2;
    }

    substract(num1, num2) { 
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divid(num1, num2) {
        return num1 / num2;
    }
}
const calculator = new Calculator();
module.exports = calculator;