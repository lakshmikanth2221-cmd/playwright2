import { test, expect } from '@playwright/test';

test('verify the valid possitive test casess', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  console.log("Lanch appliction")
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  //await page.waitForTimeout(30000)
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible({timeout:50000});
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  let r = (Math.random() + 1).toString(36).substring(7);
  await page.locator('form').getByRole('textbox').fill('Avathar'+r);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Successfully Saved')).toBeVisible();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus');
});

test('verify the negitive testcass for job title', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.waitForTimeout(40000)
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Employment Status$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').fill('fllsknjsdsgfhjkdjfhnfedjfhnl f;ohrodfklnvdfgjvidhjfiudshhfp9jdvnoghp9pethuig');
  await expect(page.getByText('Should not exceed 50')).toBeVisible();
});

test('verify the no test ', async ({ page }) => {
   await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Required', { exact: true })).toBeVisible();
});

