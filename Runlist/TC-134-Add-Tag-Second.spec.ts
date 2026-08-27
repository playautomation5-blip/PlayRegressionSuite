import { leapwork } from "./leapwork";

const lw__tagName = leapwork.variables.get("tagName") as string;

// await leapwork.step("Click the Select tags dropdown in the metadata panel", async () => {
//     // Click div
//     await page.locator('div').filter({ hasText: /^Select tags$/ }).nth(3).click();
// }, { action: "click" });

// ai-studio-step-id: pw1qq6i1g0
await leapwork.step("Click the Select tags filter in the Selection criteria section", async () => {
    // Click span
    await page.getByText('Select tags').click();
}, { action: "click" });

// ai-studio-step-id: pw1awz25d0
await leapwork.step(`Click the ${lw__tagName} checkbox`, async () => {
    // Click span
    await page.getByText(lw__tagName).click();
}, { action: "click" });

// await leapwork.step("Click the Test case steps list in Leapwork Play", async () => {
//     // Click div
//     await page.locator('.testcase-steps-list').click();
// }, { action: "click" });

// await leapwork.step(`Validate that the Tag text shows ${lw__tagName} on the Leapwork Play page`, async () => {
//     // Assert span contains "Tag 1"
//     await expect(page.getByText(lw__tagName)).toContainText(lw__tagName);
// }, { action: "validate" });
