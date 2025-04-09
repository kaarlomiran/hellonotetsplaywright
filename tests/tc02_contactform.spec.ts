import { test, expect } from '@playwright/test';

test('Submit Contact Form', async ({ page }) => {
  await page.goto('https://hellonote.com/');
  await page.waitForTimeout(3000);
  await page.waitForSelector('text=Contact', { state: 'visible' });
  await page.click('text=Contact');
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message.');
  await page.click('text=Submit');
  await expect(page.locator('text=Thank you for your message')).toBeVisible();
});