// import { test, expect } from '@playwright/test';

// const employees = [
//   { firstname: 'raghavan', lastname: 'Rao', Role: 'QA engineer' },
//   { firstname: 'lakshmij', lastname: 'Sharma', Role: 'Developer' },
//   { firstname: 'raghavendrab', lastname: 'Singh', Role: 'Tester' }
// ];

// const loginDetails = { username: 'Admin', password: 'admin123' };


// test.only('Add multiple employees using DDT (for-in)', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByPlaceholder('Username').fill(loginDetails.username);
//   await page.getByPlaceholder('Password').fill(loginDetails.password);
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'PIM' }).click();

//   for (let idx in employees) {
//     const emp = employees[idx];

//     await page.getByRole('button', { name: 'Add' }).click();

//     await page.getByPlaceholder('First Name').fill(emp.firstname);
//     await page.getByPlaceholder('Last Name').fill(emp.lastname);

    
//     // const employeeId = String(Date.now() % 1000000).padStart(6, '0') + idx;
//     await page.locator('xpath=(//label[text()="Employee Id"]/following::input)[1]').fill(employeeId);

//     await page.getByRole('button', { name: 'Save' }).click();

//     await expect(page.getByText(`${emp.firstname} ${emp.lastname}`)).toBeVisible();

    
//     await page.getByRole('link', { name: 'PIM' }).click();
//   }
// });
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