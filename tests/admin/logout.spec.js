import { test, expect } from '@playwright/test';

test('should log in and log out successfully', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  await page.getByRole('button', { name: 'Profile' }).click().catch(async () => {
    await page.locator('text=Rana Ludhi').first().click();
  });

  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/auth\/login/);
});
