import { leapwork } from "./leapwork";

// ai-studio-step-id: pwmz7okm00
await leapwork.step("Right-click in empty space in the Explorer panel", async () => {
    await page.locator('.explorer-list').dispatchEvent('contextmenu');
});

// ai-studio-step-id: pw1dfper70
await leapwork.step("Click New team in the context menu", async () => {
    // Click div
    await page.getByText('New team').click();
}, { action: "click" });