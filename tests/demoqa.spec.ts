import { test, expect } from '@playwright/test';

test('demoqa page', async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    const firstName = page.locator("//input[@id='firstName']");
    await firstName.fill("Test");

    const lastName = page.locator("//input[@id='lastName']");
    await lastName.fill("Test Test");

    const email = page.locator("//input[@id='userEmail']");
    await email.fill("Test231ert@gmail.com");

    const gender = page.locator("//input[@id='gender-radio-1']");
    await gender.click({ force: true });

    const userMobileNumber = page.locator("//input[@id='userNumber']");
    await userMobileNumber.fill("8802800000");

    const dateOfBirth = page.locator("//input[@id='dateOfBirthInput']");
    await dateOfBirth.click();

    const monthDropDown = page.locator("//select[@class='react-datepicker__month-select']");
    await monthDropDown.selectOption({ label: "October" });

    const yearDropDown = page.locator("//select[@class='react-datepicker__year-select']");
    await yearDropDown.selectOption({ label: "2011" });

    const expectedDate = "8";
    const date = page.locator("//div[@role='option']");
    const counts = await date.count();

    for (let i = 0; i < counts; i++) {
        const actual = date.nth(i);
        const actualDate = (await actual.textContent())?.trim();
        if (actualDate === expectedDate) {
            await actual.scrollIntoViewIfNeeded();
            await actual.click();
            console.log("Actual date:", actualDate);
            break;
        }
    }




})