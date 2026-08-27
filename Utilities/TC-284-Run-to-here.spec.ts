import { leapwork } from "./leapwork";

// ai-studio-step-id: pwr0a43w00
await leapwork.step("Click the Connect button for the Google Chromium browser", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pwkradb700
await leapwork.step("Validate the Disconnect button shows 'Disconnect' on the Leapwork Play page", async () => {
    // Assert button "Disconnect" contains "Disconnect"
    await expect(page.getByRole('button', { name: 'Disconnect' })).toContainText("Disconnect");
}, { action: "validate" });

// ai-studio-step-id: pw1bqjr1c0
await leapwork.step("Right-click the 3rd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '3' }).click({ button: 'right' });
}, { action: "click" });

// await leapwork.step("Click “Run to here” in the test case step context menu", async () => {
//     // Click div
//     await page.getByText('Run to here').click();
// }, { action: "click" });

// ai-studio-step-id: pw16dg7v70
await leapwork.step("Click Run in the step context menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Run' }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pw1yml0ui0
await leapwork.step("Click the “To here” option in the context menu", async () => {
    // Click span
    await page.getByText('To here').click();
}, { action: "click" });

// ai-studio-step-id: pwk3bf6l00
await leapwork.step("validate that first 3 steps are success.", async () => {
    const steps = page.locator('.testcase-step-row');
    const succeededSteps = page.locator('.testcase-step.step-succeeded');
    await expect(succeededSteps).toHaveCount(3, { timeout: 60000 });
    await expect(steps.nth(0).locator('.testcase-step')).toHaveClass(/step-succeeded/);
    await expect(steps.nth(1).locator('.testcase-step')).toHaveClass(/step-succeeded/);
    await expect(steps.nth(2).locator('.testcase-step')).toHaveClass(/step-succeeded/);
}, { action: "validate" });

// ai-studio-step-id: pwxhdq5800
await leapwork.step("Validate the \"Record\" button on the Leapwork Play page.", async () => {
    // Assert button "Record" contains "Record"
    await expect(page.getByRole('button', { name: 'Record' })).toBeEnabled({ timeout: 50000 });
}, { action: "validate" });
