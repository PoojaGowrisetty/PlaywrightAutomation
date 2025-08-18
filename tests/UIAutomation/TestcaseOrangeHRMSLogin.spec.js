import { test, expect } from '@playwright/test';
let baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
test('test case for OrangeHRMS login', async ({ page }) => {
    await page.goto(baseURL);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("password").fill("admin123");
    await page.locator("button[type = 'submit']").click();
    
});
