
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

]
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await browser.newPage();

    let message = 'Welcome to Lambda test'
    let url = 'https://www.lambdatest.com/selenium-playground/simple-form-demo'
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.goto(url);
    expect(url).ttoContainText('ssimple-form-demo');
    await page.getByPlaceholder('Please enter your Message').click();
    await page.getByPlaceholder('Please enter your Message').fill.message;
    await page.getByRole('button', { name: 'Get Checked Value' }).click();
    await page.getByText('Welcome to Lambda test').isVisible();
});

