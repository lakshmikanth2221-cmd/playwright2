import { test, expect } from '@playwright/test';

test('verify pay grads', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  const r = Math.random().toString(36).substring(2, 12);
  await page.locator('form').getByRole('textbox').fill(r);
  await page.locator('form').getByRole('textbox').press('Enter');
  await page.getByRole('button', { name: 'Save' }).click();

});
test('veryfy given more then 50 charets', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').fill('gihojgiohggojgiogkjogjogjogfjpiugjogfjogfoljogogjkl');
  await expect(page.getByText('Should not exceed 50')).toBeVisible();
});
test('verify in valied credencile no data given', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Pay Grades$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Required', { exact: true })).toBeVisible();
});
