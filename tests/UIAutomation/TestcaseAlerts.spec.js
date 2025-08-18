import { test, expect } from '@playwright/test';
let baseURL = 'https://the-internet.herokuapp.com/javascript_alerts';

test("TC1 JavaScript Alert with Ok Button", async({page})=>{
    await page.goto(baseURL);
    await page.getByText('Click for JS Alert').click();
    await page.waitForTimeout(5000); 
    page.on('dialog', async dialog => { 

        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');

        await dialog.accept(); // Accept the alert
        console.log('Alert accepted');  

        //await dialog.dismiss(); // Dismiss the alert
        
    })
    
    await expect(page.locator('#result')).toContainText('You successfully clicked an alert');

});

test("TC2 JavaScript Alert with Ok and Cancel Button", async({page})=>{
    await page.goto(baseURL);
    await page.getByText('Click for JS Confirm').click();
    //await page.waitForTimeout(5000); 

    page.on('dialog', async dialog => { 

        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');

       await dialog.accept(); // Accept the alert
        console.log('Alert with Ok accepted');  
       // await dialog.dismiss(); // Dismiss the alert
        
    });

    await expect(page.locator('#result')).toContainText('You clicked: Ok');
    //await expect(page.locator('#result')).toContainText('You clicked: Cancel');

});

test("TC3 JavaScript Alert with prompt OK and Cancel Button", async({page})=>{
    await page.goto(baseURL);
    await page.getByText('Click for JS Prompt').click();
    //await page.waitForTimeout(5000); 

    page.on('dialog', async dialog => { 

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        expect(dialog.defaultValue()).toBe(''); 
        await dialog.accept('test alert'); // Accept the alert 
        //await dialog.dismiss(); // Dismiss the alert
        
    });

    await expect(page.locator('#result')).toContainText('You entered: test alert');
    //await expect(page.locator('#result')).toContainText('You entered: null');

});

test('TC4 Simple Alert with Ok', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click("//button[@id='alertBtn']")
    await page.waitForTimeout(3000)
})


test('TC5 Confirmation Alert with Ok and cancel', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
        //await dialog.dismiss();
        
    })

    await page.click('[id="confirmBtn"]')
    await page.waitForTimeout(3000)
    await expect(page.locator('[id="demo"]')).toHaveText('You pressed OK!');
   // await expect(page.locator('[id="demo"]')).toHaveText('You pressed Cancel!');
});


test('TC6 Prompt Alert with type and click ok', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        
        await dialog.accept('Pooja Gowrisetty');
        //await dialog.accept()
    })

    await page.click('[id="promptBtn"]')
    await page.waitForTimeout(5000)
    await expect(page.locator('[id="demo"]')).toHaveText('Hello Pooja Gowrisetty! How are you today?');
})