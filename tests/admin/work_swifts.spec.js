

import { test, expect } from '@playwright/test';



test('verify the work swifts', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  let r = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox').nth(1).fill('Rolex'+r);
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('pox'+r);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Successfully Saved')).toBeVisible();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift');
});


test('verify the negitive work swifts with more numbre letters', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Work Shifts$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).fill('lhfolkmdojnmddhbfujkjodihjsjfcodsjdjowskdjfhodfhfc');
  await page.getByRole('textbox').nth(1).fill('lhfolkmdojnmddhbfujkjodihjsjfcodsjdjowskdjfhodfhfclhfolkmdojnmddhbfujkjodihjsjfcodsjdjowskdjfhodfhfc');
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('lhfolkmdojnmddhbfujkjodihjsjfcodsjdjowskdjfhodfhfclhfolkmdojnmddhbfujkjodihjsjfcodsjdjowskdjfhodfhfclhfolkmdojnmddhbfujkjodihjsjfcodsjdjowskdjfhodfhfclhfolkmdojnmddhbfujkjodihjsjfcodsjdjowskdjfhodfhfc');
});

test('verify the no word given ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Required', { exact: true })).toBeVisible();
});