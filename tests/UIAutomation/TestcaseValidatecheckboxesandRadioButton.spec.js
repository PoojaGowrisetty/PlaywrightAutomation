import { test, expect } from '@playwright/test';

let baseURL = "https://testautomationpractice.blogspot.com/"
test('Checkboxes', async ({ page }) => {
  await page.goto(baseURL);
  const checkbox = page.locator('input[id="monday"]');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  // Uncheck the checkbox

  await checkbox.uncheck();

  await expect(checkbox).not.toBeChecked();

  const weekDays = ['#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday', '#sunday'];
 
  for(const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

    // Uncheck all checkboxes   
  for(const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    }
    //Radio Button
    const radioButtonMale = page.locator('input[id="male"]');
    const radioButtonFemale = page.locator('input[id="female"]');
    await radioButtonMale.check();
    await expect(radioButtonMale).toBeChecked();
    await expect(radioButtonFemale).not.toBeChecked();  
    await radioButtonFemale.check();
    await expect(radioButtonFemale).toBeChecked();
    await expect(radioButtonMale).not.toBeChecked();
    
});


test.only('TC2 Radio Button and Checkboxes', async({page})=>{


    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    const roundButtonIDLocator = ["input#product_550","input#product_551","input#product_549", "input#product_3186","input#product_7441"];

    //await page.context.cookies().clear(); // Clear cookies before starting the test

    for(const rb of roundButtonIDLocator) {
    // Validate visibility
    if (await page.locator(rb).isVisible()) {
    console.log('Round Trip radio button is visible.');
    } else {
        console.error('Round Trip radio button is NOT visible.');
    }

    // Validate enabled state
    if (await page.locator(rb).isEnabled()) {
    console.log('Round Trip radio button is enabled.');
    } else {
    console.error('Round Trip radio button is NOT enabled.');
  }

    // Check if it's selected, if not, select it
    if (await page.locator(rb).isChecked()) {
    console.log('Round Trip radio button is already selected.');
    } else {
    console.log('Round Trip radio button is NOT selected. Selecting now...');
    await page.locator(rb).check();
    await page.waitForTimeout(3000); // Wait for 3 second to ensure the action is processed
    await page.locator(".woocommerce-message").to
    // Validate it’s now checked
    if (await page.locator(rb).isChecked()) {
      console.log('Successfully selected the Round Trip radio button.');
    } else {
      console.error('Failed to select the Round Trip radio button.');
    }
    }
  }
  const validateTextLocator = page.locator(".woocommerce-message");
  const radioSingleButton = page.locator('input#product_550');
  await radioSingleButton.check();
  await page.waitForTimeout(5000); // Wait for 3 seconds to ensure the action is processed
  await expect (validateTextLocator).toHaveText('"Dummy return ticket" added to your order. Complete your order below.')
        
});


