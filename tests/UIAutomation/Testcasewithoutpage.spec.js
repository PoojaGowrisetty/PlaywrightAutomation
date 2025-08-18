const {test,expect,chromium} = require('@playwright/test');
 test('launching browser without using page', async()=>{

    const browser = await chromium.launch({headless: true});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

 });