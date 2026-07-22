
import { test, expect } from '@playwright/test';

const employeeData = {
  set1: {
    firstname: 'lakshmi',
    lastname: 'kanth'
  },
  set2: {
    firstname: 'd',
    lastname: 'kumar'
  },
  set3: {
    firstname: 'm',
    lastname: 'candra'
  }
};

for (const emp1 in employeeData) {
  const employee = employeeData[emp1];

  test(`Add employee details - ${emp1}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(employee.firstname);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(employee.lastname);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  });
}