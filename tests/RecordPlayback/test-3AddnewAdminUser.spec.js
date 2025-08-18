import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  //await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Ame');
  await page.getByText('Amelia Brown').click();
  await page.getByText('-- Select --').click();
  await page.getByText('Enabled').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('test.user01');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('test@12345');
  await page.getByRole('textbox').nth(3).press('Tab');
  await page.getByRole('textbox').nth(4).fill('test@12345');
  await page.getByRole('button', { name: 'Save' }).click();
  //await expect(page.getByText('Success')).toBeVisible();
});