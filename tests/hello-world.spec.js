const { test, expect } = require('@playwright/test');

test('basic test for web page', async ({ page }) => {
    await page.goto('http://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
    const heading = await page.locator('h1').textContent();
    expect(heading).toBe('Example Domain');
});