
import { test, expect } from '@playwright/test';


import logindata from "../../testdata/login.json"

test('verify the job title', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Job Titles$/ }).click();
  await expect(page.getByText('Job Titles Add')).toBeVisible();
  await page.getByRole('button', { name: ' Add' }).click();
  let r = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox').nth(1).fill('softwa'+r);
  await page.getByRole('textbox', { name: 'Type description here' }).fill('f kbdjknc;bknmkd');
  await page.getByRole('textbox', { name: 'Add note' }).fill('jfhudgdnvkjshy');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('SuccessSuccessfully Saved×')).toBeVisible();
});

test('verify the nagitive testcses given more numbere letters', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Job Titles$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).fill('kjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifg');
  await page.getByRole('textbox').nth(1).press('ControlOrMeta+a');
  await page.getByRole('textbox').nth(1).press('ControlOrMeta+c');
  await page.getByRole('textbox').nth(1).fill('kjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifg');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('kjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifg');
  await page.getByRole('textbox', { name: 'Add note' }).fill('kjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifgkjfoihnmc/,nijhfn;lkf,vkjlbhdfhiklemjoifjdl.gkldhfign;kdhgkdsffho8uewfjneruyf8oiwjefifg');
  await expect(page.getByText('Should not exceed 100')).toBeVisible();
  await expect(page.getByText('Should not exceed 400').first()).toBeVisible();
  await expect(page.getByText('Should not exceed 400').nth(1)).toBeVisible();
});


test('verify the negitive credencile with empty job', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Required', { exact: true })).toBeVisible();
});
