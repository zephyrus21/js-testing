const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Piyush', 21);
    expect(text).toBe('Piyush (21 years old)');
});

test('should generate valid text output', () => {
    const text = checkAndGenerate('Piyush', 21);
    expect(text).toBe('Piyush (21 years old)');
});