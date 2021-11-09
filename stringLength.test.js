const stringLength = require('./stringLength');

test('string length should be between 1 and 10', () => {
    expect( stringLength('mutluluk')).toBe(8);
});

test('String length cannot be longer than 10', () => { 
    expect(() =>  stringLength('Mutluluk gemisi')).toThrow();
  });