// import { test, expect } from '@playwright/test';

// test('Add employee using my object details', async ({ page }) => {
//   const employee = {
//     firstname: 'lakshmi',
//     lastname: 'kanth',
//     Role: 'QA engineer'
//   };

//   console.log(employee.firstname);

//   employee['Role'] = 'QA engineer';



//   const Role = {
//     Role1: 'Playwright',
//     Role2: 'JavaScript',
//     Role3: 'Python',
//     Role4: 'Java'
//   };

//   for (let key in courses) {
//     console.log('Loop starts here');
//     console.log('Key is: ' + key);
//     console.log('Value is: ' + courses[key]);
//     console.log(key + ' : ' + courses[key]);
//     console.log('Loop ends here');
//   }

//   const loginDetails = {
//     username: 'Admin',
//     password: 'admin123'
//   };

//   const employeeId = Date.now().toString().slice(-6);

//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//   await page.getByPlaceholder('Username').fill(loginDetails.username);
//   await page.getByPlaceholder('Password').fill(loginDetails.password);
//   await page.getByRole('button', { name: 'Login' }).click();

//   await page.getByRole('link', { name: 'PIM' }).click();
//   await page.getByRole('button', { name: 'Add' }).click();

//   await page.getByPlaceholder('First Name').fill(students.firstname);
//   await page.getByPlaceholder('Last Name').fill(students.lastname);

//   await page
//     .locator('xpath=(//label[text()="Employee Id"]/following::input)[1]')
//     .fill(employeeId);

//   await page.getByRole('button', { name: 'Save' }).click();

//   await expect(page.getByText(employee.firstname + ' ' + students.lastname)).toBeVisible();
// });


// ...existing code...
import { test, expect } from '@playwright/test';

const employees = [
  { firstname: 'Anita1', lastname: 'Rao', Role: 'QA engineer' },
  { firstname: 'Kuma1r', lastname: 'Sharma', Role: 'Developer' },
  { firstname: 'Priya1', lastname: 'Singh', Role: 'Tester' }
];

const loginDetails = { username: 'Admin', password: 'admin123' };

for (let idx in employees) {
  const emp = employees[idx];

  test(`Add employee: ${emp.firstname} ${emp.lastname}`, async ({ page }) => {
    const employeeId = String(Date.now() % 1000000).padStart(6, '0');

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(loginDetails.username);
    await page.getByPlaceholder('Password').fill(loginDetails.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: 'Add' }).click();

    await page.getByPlaceholder('First Name').fill(emp.firstname);
    await page.getByPlaceholder('Last Name').fill(emp.lastname);

    await page
      .locator('xpath=(//label[text()="Employee Id"]/following::input)[1]')
      .fill(employeeId);

    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByText(emp.firstname + ' ' + emp.lastname)).toBeVisible();
  });
}