// switch ("man"){
//     case "rohith":{
//         console.log("this is rohith block")
//     }
//     break
//     case "man":{
//         console.log("this is man block")
//     }
//     break
//     case "superman":{
//         console.log("this is superman block")
//     }
//     break
// }

//switch is a control statement in JavaScript that is used to execute different blocks of code based on the value of a single expression or variable. It compares the value with multiple case values and executes the matching block. It is mainly used to make the code cleaner, more readable, and easier to maintain when there are multiple fixed options.
//in the swith we are used break becouse it will run single case other wise it will consider all the test case
//if i get man in seviral place but it will considering in first which is come then only consider


import { test, expect } from '@playwright/test';

test('', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});