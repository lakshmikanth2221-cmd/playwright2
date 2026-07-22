import { test } from "@playwright/test";

test("verify the gallery test case", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    const galleryLink = page.locator('//a[@href="/gallery/"]');
    const portfolioLink = page.locator('//a[@href="/portfolio/"]');

    const isGalleryVisible = await galleryLink.isVisible().catch(() => false);

    if (isGalleryVisible) {
        await galleryLink.click();
        console.log("Clicked gallery link");
    } else {
        await portfolioLink.click();
        console.log("Clicked portfolio link");
    }
});