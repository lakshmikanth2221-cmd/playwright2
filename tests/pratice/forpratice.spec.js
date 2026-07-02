import{test,expect} from "@playwright/test"

test("verify the logo",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('//img[@src="/web/images/ohrm_branding.png?v=1763650546848"]')
})
test("verify the login cridencile ",async({page})=>{

    await page.goto(("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"))
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@type="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator('a[href="/web/index.php/dashboard/index"]')).toBeVisible()
    await page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]').click()
    await expect(page.locator('//span[@class="oxd-topbar-header-breadcrumb"]')).toBeVisible()
    await page.locator('//div[@class="oxd-buzz-post oxd-buzz-post--active"]').click()
    await page.locator('//textarea[@placeholder="What\'s on your mind?"]').fill('Happy birthday Mahadev')
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main"]').click()
    await page.locator('(//p[@class="oxd-text oxd-text--p oxd-text--card-title"])[2]')
})