import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('Grade A');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').click();
 // await page.getByText('ECS - Ecuador Sucre').first().click();
  //await page.getByText('ECS - Ecuador Sucre').first().click();
  await page.getByText('AFN - Afghanistan Afghani').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('60000');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('70000');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByText('SuccessSuccessfully Saved×').isVisible();
});