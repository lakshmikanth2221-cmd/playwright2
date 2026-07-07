const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL('**/dashboard/index');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).fill('Lakshmikanth');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Repo');

  const uniqueId = Date.now().toString().slice(-6);
  try {
    await page.getByRole('textbox', { name: 'Employee Id' }).fill(uniqueId);
  } catch (error) {
    await page.locator('input[name="employeeId"], input[id*="employee"]').first().fill(uniqueId);
  }

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForSelector('text=Success');

  console.log(`Employee created successfully with id: ${uniqueId}`);
  await browser.close();
})();
