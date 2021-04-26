const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Piyush', 21);
    expect(text).toBe('Piyush (21 years old)');
});

test('should generate valid text output', () => {
    const text = checkAndGenerate('Piyush', 21);
    expect(text).toBe('Piyush (21 years old)');
});

test('should click around', async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080'],
    });
    const page = await browser.newPage();

    await page.goto('file:///E:/Projects/JavaScript/js-testing/index.html');

    await page.click('input#name');
    await page.type('input#name', 'Piyush');
    await page.click('input#age');
    await page.type('input#age', '21');
    await page.click('#btnAddUser');
});