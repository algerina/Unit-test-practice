const capitalize = require('./capitalize.js');

test('Entry first letter should be a capital letter', () => {
expect(capitalize('javascript')).toBe('Javascript');
});

test('Entry must be a string', () => {
    expect(() => {capitalize(5);}).toThrow();
})