import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill('happy birthday mister anil kumar');
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  await page.getByText('Success', { exact: true }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.getByText('manda akhil user2026-01-07 01:40 PMhappy birthday mister anil kumar')).toBeVisible();
});