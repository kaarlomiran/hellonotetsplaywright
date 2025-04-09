import { test, expect } from '@playwright/test';

test('Navigate to Login Page', async ({ page }) => {
  await page.goto('https://hellonote.com/');
  await page.click('text=Login');
  await expect(page).toHaveURL(/.*login/);
});