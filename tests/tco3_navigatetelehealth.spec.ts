import { test, expect } from '@playwright/test';

test('Navigate to Telehealth Page', async ({ page }) => {
  await page.goto('https://hellonote.com/');
  await page.click('text=Telehealth');
  await expect(page).toHaveURL(/.*telehealth/);
});