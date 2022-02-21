const { sum, product }  = require('../lib/random.js');

test('checks if 10 + 10 = 20....', () => {
    expect(sum(10, 10)).toBe(20);
});

test('checks if 10 * 10 = 100....', () => {
    expect(product(10,10)).toBe(100);
});