const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Piyush', 21);
    expect(text).toBe('Piyush (21 years old)');
});