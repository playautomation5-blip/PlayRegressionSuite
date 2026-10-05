import { leapwork } from "./leapwork";

// ai-studio-step-id: pwmz7okm00
await leapwork.step("Right-click in empty space in the Explorer panel", async () => {
    await page.locator('.explorer-list').dispatchEvent('contextmenu');
});

// ai-studio-step-id: pw91hlyz00
await leapwork.step("Click New team in the context menu", async () => {
    // Click div
    await page.waitForTimeout(800);
    await page.getByText('New team').click();
}, { action: "click" });


// await leapwork.step("Right-click the Trash item in the Explorer panel", async () => {
//     // Right-click div
//     await page.locator('div').filter({ hasText: /^Trash$/ }).nth(4).click({ button: 'right' });
// }, { action: "click" });

// await leapwork.step("Click New team in the TM-1 dialog", async () => {
//     // Click span
//     await page.getByText('New team').click();
// }, { action: "click" });