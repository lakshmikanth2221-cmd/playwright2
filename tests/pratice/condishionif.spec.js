import { test, expect } from "@playwright/test";

test("check check box",async({page})=>{
    await page.goto("https://mail.rediff.com/mobile/")

    await page.waitForTimeout(5000)
    
    const checkbox_status = await page.locator('//input[@type="checkbox"]').isChecked()

     console.log(checkbox_status)
  
     if(checkbox_status ){
        await page.locator('//input[@type="checkbox"]').click()
     }
     else if(!checkbox_status){
        console.log("show the error")
     }
})


test("check is check box", async ({ page }) => {
    await page.goto("https://mail.rediff.com/mobile/");

    const checkbox = page.locator('//input[@type="checkbox"]');
    await checkbox.waitFor();

    await checkbox.uncheck();
    const checkboxStatus = await checkbox.isChecked();

    const color = checkboxStatus ? "\u001b[32m" : "\u001b[31m";
    console.log(`${color}Checkbox status: ${checkboxStatus}\u001b[0m`);

    if (checkboxStatus) {
        await checkbox.check();
        console.log(`${color}FALSE -> Checkbox is now checked\u001b[0m`);
    } else {
        console.log(`${color}TRUE -> Checkbox is already checked\u001b[0m`);
    }

    await expect(checkbox).toBeChecked();
});
