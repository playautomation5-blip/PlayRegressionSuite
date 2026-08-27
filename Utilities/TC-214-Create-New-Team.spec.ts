import { leapwork } from "./leapwork";

// await leapwork.step("Right-click in empty space in the Explorer panel", async () => {
//     await page.locator('.explorer-list').dispatchEvent('contextmenu');
// });

// await leapwork.step("Click New team in the context menu", async () => {
//     // Click div
//     await page.waitForTimeout(800);
//     await page.getByText('New team').click();
// }, { action: "click" });


// ai-studio-step-id: pw864e9000
await leapwork.step("Right-click the Trash item in the Explorer panel", async () => {
    // Right-click div
    await page.locator('div').filter({ hasText: /^Trash$/ }).nth(4).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwqt1lld00
await leapwork.step("Click New team in the TM-1 dialog", async () => {
    // Click span
    await page.getByText('New team').click();
}, { action: "click" });