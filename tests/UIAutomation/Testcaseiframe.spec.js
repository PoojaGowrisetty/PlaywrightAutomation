import {test,expect} from "@playwright/test";

test('iFRAMES DEMO', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');
    // Count the number of iframes
    const allframes = await page.frames();
    console.log(`Total number of frames: ${allframes.length}`);
    // Switch to the first iframe
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.fill('[name="mytext1"]', 'John Doe');
    await page.waitForTimeout(2000);

    // Switch to the second iframe
    const frame2 = await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]');
    await frame2.fill('John Doe');
    await page.waitForTimeout(2000);

 // Switch to the third iframe
    const frame3 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"})
    await frame3.fill('[name="mytext3"]','testPooja');
    await page.waitForTimeout(2000);
    //iframeinsideiframe
  //  const childframe = await frame3.frameLocator('frame[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]');
    //await childframe.getByText("Hi, I am the UI.Vision IDE").click();
    //await page.waitForTimeout(2000);

 // Switch to the fourth iframe
    const frame4 = await page.frameLocator('frame[src= "frame_4.html"]').locator('[name = "mytext4"]');
    await frame4.fill("test");
    
});

var baseURL = "https://jqueryui.com/droppable/"

test.only('Iframe Demo', async({page}) =>{

    await page.goto(baseURL);

    const iframeDemo = page.frameLocator('.demo-frame');

    const dragElement = iframeDemo.locator('[id="draggable"]');

    const dropElement = iframeDemo.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);
   
    await expect(dropElement).toContainText("Dropped!")

    await page.waitForTimeout(3000);

});