

import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"
test('verify the login valid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
});

test('verify the login invalid inusername and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ })).toBeVisible();
});
test('verify the login valid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ })).toBeVisible();
});
test('verify the login invalid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ })).toBeVisible();
});
test('verify the login with empty box', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(30000)
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();

});

