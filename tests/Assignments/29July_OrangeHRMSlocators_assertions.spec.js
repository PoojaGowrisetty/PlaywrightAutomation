import {test, expect} from '@playwright/test';
 let baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
test('TC1 Login using multiple locators', async({page})=>{
    await page.goto(baseURL);
    await page.locator("input[name = 'username']").fill("Admin");
    await page.locator('input[name= "password"]').fill("admin123");
    await page.getByRole('button', { type: 'submit' }).click();
});

test('TC2 Login using multiple locators', async({page})=>{
    await page.goto(baseURL);
    await page.getByPlaceholder('Username').fill("Admin");
    await page.locator("input[type = 'password']").fill("admin123");
    await page.locator("button[class = 'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
});

test('TC3 Login and verify with assertions',async({page})=>{
    await page.goto(baseURL);
    await page.getByPlaceholder('Username').fill("Admin");
    await page.locator("input[type = 'password']").fill("admin123");
    await page.getByRole('button', {type: 'submit' }).click();
    //Assertions 
    await expect(page.locator('div[class="oxd-sidepanel-body"]')).toBeVisible();
    await expect(page.locator('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]')).toHaveCount(12);
    await expect(page.getByText("Admin")).toBeEnabled();
    await expect(page.locator('[class="oxd-userdropdown-name"]')).toHaveText("Test4 user");
    await expect(page).toHaveTitle("OrangeHRM");

});

test.only('TC4 Invalid Login with assertions',async({page})=>{
    await page.goto(baseURL);
    await page.getByPlaceholder('Username').fill("test");
    await page.getByRole('button', {type: 'submit' }).click();
    await expect(page.locator('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')).toHaveText("Required");
    await page.locator("input[type = 'password']").fill("oio");
    await page.getByRole('button', {type: 'submit' }).click();
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toContainText('Invalid credentials');
});

test('TC5 Assertion Test with NOP Commerce appliaction', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    await expect(page.locator('[type="text"]')).toHaveCount(4)

    console.log('Assertion Test Completed Successfully!')
})
