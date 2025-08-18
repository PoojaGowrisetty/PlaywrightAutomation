import {test, expect} from '@playwright/test';
test('TC1 for dropdown', async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
 await page.locator('#country').selectOption('Australia'),
 await page.locator('#country').selectOption({value:"france"});
 await page.locator('#country').selectOption({label: "India"});
 await page.locator('#country').selectOption({index:5});
 await page.selectOption('#country','Brazil');

 //To check number of options - Approach 1

    const optionLength =await page.locator('#country option')
    await expect(optionLength).toHaveCount(10);

    //To check number of options - Approach 2

    const demoOption = await page.$$('#country option')
    console.log("Number of Option in Dropdown", demoOption.length);
    expect(demoOption.length).toBe(10)


    //To Validate specific country in the dropdown
    let status=false;
    for(const demo of demoOption)
    {
        console.log('Country - ', await demo.textContent());
        let value = await demo.textContent();
        if(value.includes('India'))
        {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

});
    
    test.only('TC2 Dropdown Demo for otherwebsite', async ({ page }) => {
    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    
    // Select the dropdown element
    await page.locator('[id="select2-reasondummy-container"]').click();
    await page.locator('[class="select2-search__field"]').fill('Visa application');
    await page.locator('[class="select2-search__field"]').press('Enter');
    await page.waitForTimeout(3000); // Wait for 3 seconds to ensure the action is processed    
    // Validate the selected option 
    const selectedOption = await page.locator('[id="select2-reasondummy-container"]').textContent();
    console.log('Selected Option:', selectedOption);
    await expect(selectedOption).toContain('Visa application');

});

