

const path = require('path');
const xlsx = require('xlsx');
const { test, expect } = require('@playwright/test');

function readEmployeeData() {
  const filePath = path.resolve(process.cwd(), 'testdata', 'employees.xlsx');
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, { defval: '' });

  if (!rows.length) {
    throw new Error(`No employee data found in ${filePath}`);
  }

  return rows;
}

test('create employee from xlsx data', async ({ page }) => {
  const employeeData = readEmployeeData()[0];
  const suffix = Date.now().toString().slice(-4);
  const firstName = `${employeeData['first name '] || 'Excel'}${suffix}`;
  const lastName = `${employeeData['last name'] || 'User'}${suffix}`;

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible({ timeout: 10000 });
  await expect(loginButton).toBeEnabled({ timeout: 10000 });
  await loginButton.scrollIntoViewIfNeeded();
  await loginButton.click();

  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible({ timeout: 20000 });

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);

  const saveButton = page.getByRole('button', { name: 'Save' });
  await expect(saveButton).toBeEnabled({ timeout: 10000 });
  await saveButton.click();

  await page.waitForURL(/viewPersonalDetails/, { timeout: 30000 });
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue(firstName, { timeout: 20000 });
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(lastName, { timeout: 20000 });
});