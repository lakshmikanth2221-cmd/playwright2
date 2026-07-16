import {test,expect}from "@playwright/test"
import demo from "../../testdata/qademoour.json"

test("demoqa",async({page})=>{

    await page.goto("https://demoqa.com/")

    await page.locator('//input[@placeholder="Full Name"]').fill(demo.fullname)
    await page.locator('//input[@class="mr-sm-2 form-control"]').fill(demo.gmail)
    await page.locator('//textarea[@placeholder="Current Address"]').fill(demo.currentlocation)
    await page.locator('//textarea[@id="permanentAddress"]').fill(demo.permanentlocation)
    await page.locator('(//button[@type="button"])[2]').click()
    await expect(pag)


})