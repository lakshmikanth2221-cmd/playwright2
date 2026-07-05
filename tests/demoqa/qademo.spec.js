import { test, expect } from '@playwright/test';
import demodata from "../../testdata/demo.json"

test('demoqa text box form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box', { waitUntil: 'load' });

  await page.locator('#userName').fill('APP_NAME');
  await page.locator('#userEmail').fill('APP_GMAIL');
  await page.locator('#currentAddress').fill('APP_ADDRESS');
  await page.locator('#permanentAddress').fill('APP_PERMANENT_ADDRESS');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.locator('#userName')).toHaveValue('APP_NAME');
  await expect(page.locator('#userEmail')).toHaveValue('APP_GMAIL');
  await expect(page.locator('#currentAddress')).toHaveValue('APP_ADDRESS');
  await expect(page.locator('#permanentAddress')).toHaveValue('APP_PERMANENT_ADDRESS');

});

test('demoqa using jsonfile', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box', { waitUntil: 'load' });

  await page.locator('#userName').fill(demodata.name);
  await page.locator('#userEmail').fill(demodata.gmail);
  await page.locator('#currentAddress').fill(demodata.address);
  await page.locator('#permanentAddress').fill(demodata.permanent_address);

  await expect(page.locator('#userName')).toHaveValue(demodata.name);
  await expect(page.locator('#userEmail')).toHaveValue(demodata.gmail);
  await expect(page.locator('#currentAddress')).toHaveValue(demodata.address);
  await expect(page.locator('#permanentAddress')).toHaveValue(demodata.permanent_address);
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});
test("demodaata using testdata", async ({ page }) => {

  await page.goto('https://demoqa.com/text-box', { waitUntil: 'load' });
  await page.locator('#userName').fill("lakshmikanth");
  await page.locator('#userEmail').fill("lakshmikanth@gmail.com");
  await page.locator('#currentAddress').fill("k n palli");
  await page.locator('#permanentAddress').fill("nagasandra")
  await page.liocator('//button[@class="btn btn-primary"]').click()
  ; 
})