

import { test, expect } from '@playwright/test';


test('verify the add employee', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Lakshmikanth');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('repo');
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  const uniqueId = String(Date.now()).slice(-6);
  try {
    await page.getByRole('textbox', { name: 'Employee Id' }).fill(uniqueId);
  } catch (e) {
    // Fallback if accessible name differs
    await page.locator('input[name="employeeId"], input[id*=\"employee\"]').first().fill(uniqueId);
  }
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Success', { exact: true })).toBeVisible();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/424');
});

test('verify the add employee negitive testcasess in empty box', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  console.log("lacnch the appliction")
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  console.log("print the user name")
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  console.log("launch the password")
  await page.getByRole('button', { name: 'Login' }).click();
  console.log("click on the login button")
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  console.log("user neviget dash bord page")
  await page.getByRole('link', { name: 'PIM' }).click();
  console.log("user show click on the pim button ")
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
});
test('verify the add employee negitive testcasess in more then 30 casess', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('ldhfoihjkmvjkpofndjghioufhfnkljbuohvvhi');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('d,mgnierohgjiur3y9fjncknlcbvug bifhihnjgjkjlch');
  await expect(page.getByText('Should not exceed 30').first()).toBeVisible();
  await expect(page.getByText('Should not exceed 30').nth(1)).toBeVisible();
});