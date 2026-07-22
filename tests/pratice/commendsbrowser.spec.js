import {test,expect}from "@playwright/test"

test("using condiction to run in browser",async({page,browserName})=>{


    if(browserName=="chrome"){

         await page.goto("https://mail.rediff.com/mobile/")
    }
    else if(browserName=="firefox"){
          await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    else{
        console.log("no one is running")
    }
})