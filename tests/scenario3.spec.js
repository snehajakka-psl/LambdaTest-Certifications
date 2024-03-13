import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.getByRole('link', { name: 'Input Form Submit' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
});