import { leapwork } from "./leapwork";

// ai-studio-step-id: pwuyrjj400
await leapwork.step("Click the Connect button for the Google Chromium browser", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pwb9ioo900
await leapwork.step("Validate the Disconnect button shows 'Disconnect' on the Leapwork Play page", async () => {
    // Assert button "Disconnect" contains "Disconnect"
    await expect(page.getByRole('button', { name: 'Disconnect' })).toContainText("Disconnect");
}, { action: "validate", timeoutMs: 30000 });

// ai-studio-step-id: pwhml2hk00
await leapwork.step("Right-click the 2nd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '2' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwt3w6t100
await leapwork.step("Click Run in the step context menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Run' }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pwn7nv7a00
await leapwork.step("Click the “From here” option in the context menu", async () => {
    // Click span
    await page.getByText('From here').click();
}, { action: "click" });

// ai-studio-step-id: pw9dk5g100
await leapwork.step("Validate that all steps from 2nd to last are successful.", async () => {
    const steps = page.locator('.testcase-step-row');
    const stepCount = await steps.count();
    expect(stepCount).toBeGreaterThan(1);
    for (let i = 1; i < stepCount; i++) {
        await expect(steps.nth(i).locator('.testcase-step')).toHaveClass(/step-succeeded/, { timeout: 60000 });
    }
}, { action: "validate", timeoutMs: 30000 });

// ai-studio-step-id: pw1evhcoq0
await leapwork.step("Click the Disconnect button in the cloud browser panel", async () => {
    // Click button "Disconnect"
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click" });
