import {test,expect} from "@playwright/test";
test.beforeAll(async() =>{
    console.log("This should excute first , like used for intializing browser"); 
})

test.beforeEach(async({page}) =>{ 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name = 'username']").fill("Admin");
    await page.locator('input[name= "password"]').fill("admin123");
    await page.getByRole('button', { type: 'submit' }).click();
    await expect(page.locator('div[class="oxd-sidepanel-body"]')).toBeVisible();
    await expect(page).toHaveTitle("OrangeHRM");
});

test.describe('Grouping',()=>{
    test('Validate Navigation to Admin Page',async({page})=>{
        await page.getByText('Admin').click();
        await expect(page.url()).toContain('/admin/');
        await expect(page.getByText('System Users')).toBeVisible();
    });

    test('Validate Navigation to PIM Page',async({page})=>{
        await page.getByText('PIM').click();
        await expect(page.url()).toContain('/pim/');
        await expect(page.getByText('Employee Information')).toBeVisible();
    });
    test('Validate Navigation to Leave Page',async({page})=>{
        await page.locator("//span[text() ='Leave']").click();
        await expect(page.url()).toContain('/leave/');
        await expect(page.getByText('Leave List')).toHaveCount(2);
    });
    test('Validate Navigation to Time Page',async({page})=>{
        await page.locator("//span[text() ='Time']").click();
        await expect(page.url()).toContain('/time/');
        await expect(page.getByText('Timesheets Pending Action')).toBeVisible();
    });
    test('Validate Navigation to Recruitment Page',async({page})=>{
        await page.locator("//span[text() ='Recruitment']").click();
        await expect(page.url()).toContain('/recruitment/');
        await expect(page.getByText('Candidates')).toHaveCount(2)   ;
    });
    test('Validate Navigation to My Info Page',async({page})=>{
        await page.getByText('My Info').click();
        await expect(page.url()).toContain('/viewPersonalDetails/');
        await expect(page.getByText('Personal Details')).toHaveCount(2);
    });

    test('Validate Navigation to Performance Page',async({page})=>{
        await page.getByText('Performance').click();
        await expect(page.url()).toContain('/performance/');
        await expect(page.getByText('Employee Reviews')).toBeVisible();
    });
    test('Validate Navigation to Dashboard Page',async({page})=>{
        await page.locator("//span[text() ='Dashboard']").click();
        await expect(page.url()).toContain('/dashboard/');
        await expect(page.getByText('Dashboard')).toHaveCount(2);
    });
    test('Validate Navigation to Directory Page',async({page})=>{
        await page.locator("//span[text() ='Directory']").click();
        await expect(page.url()).toContain('/directory/');
        await expect(page.getByText('Directory')).toHaveCount(3);
    });
    
    test('Validate Navigation to Maintenance Page',async({page})=>{
        await page.getByText('Maintenance').click();
        await expect(page.url()).toContain('/maintenance/');
        await page.locator('[type="button"]').click();
    });

    test('Validate Navigation to Claim Page',async({page})=>{
        await page.locator("//span[text() ='Claim']").click();
        await expect(page.url()).toContain('/claim/');
        await expect(page.getByText('Employee Claims')).toHaveCount(2);
    });
    
    test('Validate Navigation to Buzz Page',async({page})=>{
        await page.locator("//span[text() ='Buzz']").click();
        await expect(page.url()).toContain('/buzz/');
        await expect(page.getByText('Buzz Newsfeed')).toBeVisible();
    });
   
});


test.afterEach(async({page}) =>{
    console.log("This should execute after each test case");
    await page.locator('[class="oxd-userdropdown-tab"]').click();
    await page.getByText('Logout').click();
    await expect(page.locator("input[name = 'username']")).toBeVisible();
});