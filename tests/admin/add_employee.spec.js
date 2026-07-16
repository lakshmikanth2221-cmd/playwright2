

import { test, expect } from '@playwright/test';

const logStep = (message, value) => {
  if (value === undefined) {
    console.log(`[step] ${message}`);
  } else {
    console.log(`[step] ${message}: ${value}`);
  }
};

test('verify the add employee', async ({ page }) => {
  logStep('Navigate to login page', '/web/index.php/auth/login');
  await page.goto('/web/index.php/auth/login');

  logStep('Fill username', 'Admin');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  logStep('Fill password', 'admin123');
  await page.locator('input[name="password"]').fill('admin123');

  logStep('Click login button');
  await page.getByRole('button', { name: 'Login' }).click();
  logStep('Verify dashboard is visible');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  logStep('Open PIM menu');
  await page.getByRole('link', { name: 'PIM' }).click();
  logStep('Open Add Employee page');
  await page.getByRole('link', { name: 'Add Employee' }).click();

  logStep('Fill first name', 'Lakshmikanth');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Lakshmikanth');
  logStep('Fill last name', 'repo');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('repo');

  logStep('Verify save button is visible');
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  const uniqueId = String(Date.now()).slice(-6);
  logStep('Generated employee id', uniqueId);
  try {
    logStep('Fill employee id', uniqueId);
    await page.getByRole('textbox', { name: 'Employee Id' }).fill(uniqueId);
  } catch (e) {
    logStep('Fallback: fill employee id using alternate locator', uniqueId);
    await page.locator('input[name="employeeId"], input[id*="employee"]').first().fill(uniqueId);
  }

  logStep('Click save button');
  await page.getByRole('button', { name: 'Save' }).click();
  logStep('Verify success message');
  await expect(page.getByText('Success', { exact: true })).toBeVisible();

  logStep('Open employee details page', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/424');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/424');
});

test('verify the add employee negitive testcasess in empty box', async ({ page }) => {
  logStep('Navigate to login page', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  logStep('Fill username', 'Admin');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  logStep('Fill password', 'admin123');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  logStep('Click login button');
  await page.getByRole('button', { name: 'Login' }).click();

  logStep('Verify dashboard is visible');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  logStep('Open PIM menu');
  await page.getByRole('link', { name: 'PIM' }).click();

  logStep('Open Add Employee page');
  await page.getByRole('link', { name: 'Add Employee' }).click();

  logStep('Verify save button is visible');
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();

  logStep('Click save without required values');
  await page.getByRole('button', { name: 'Save' }).click();

  logStep('Verify required validation messages');
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
});
test('verify the add employee negitive testcasess in more then 30 casess', async ({ page }) => {
  logStep('Navigate to login page', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  logStep('Fill username', 'Admin');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  logStep('Fill password', 'admin123');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  logStep('Click login button');
  await page.getByRole('button', { name: 'Login' }).click();

  logStep('Verify dashboard is visible');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  logStep('Open Admin menu');
  await page.getByRole('link', { name: 'Admin' }).click();

  logStep('Open PIM menu');
  await page.getByRole('link', { name: 'PIM' }).click();

  logStep('Open Add Employee page');
  await page.getByRole('link', { name: 'Add Employee' }).click();

  logStep('Fill first name', 'ldhfoihjkmvjkpofndjghioufhfnkljbuohvvhi');
  await page.getByRole('textbox', { name: 'First Name' }).fill('ldhfoihjkmvjkpofndjghioufhfnkljbuohvvhi');

  logStep('Fill last name', 'd,mgnierohgjiur3y9fjncknlcbvug bifhihnjgjkjlch');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('d,mgnierohgjiur3y9fjncknlcbvug bifhihnjgjkjlch');

  logStep('Verify length validation message');
  await expect(page.getByText('Should not exceed 30').first()).toBeVisible();
  await expect(page.getByText('Should not exceed 30').nth(1)).toBeVisible();
});