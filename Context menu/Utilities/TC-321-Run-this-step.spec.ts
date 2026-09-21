import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1nh1wzq0
await leapwork.step("Click Connect to connect to the Google Chromium browser in North Europe (Ireland)", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pwkradb700
await leapwork.step("Validate the Disconnect button shows 'Disconnect' on the Leapwork Play page", async () => {
    // Assert button "Disconnect" contains "Disconnect"
    await expect(page.getByRole('button', { name: 'Disconnect' })).toContainText("Disconnect");
}, { action: "validate" });

// ai-studio-step-id: pw1jo6eas0
await leapwork.step("Right-click the 1st step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '1' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwt3w6t100
await leapwork.step("Click Run in the step context menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Run' }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pw1grox820
await leapwork.step("Click the “This step” context menu option in the step editor", async () => {
    // Click span
    await page.getByText('This step', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1pxazu10
await leapwork.step("validate that first step is success.", async () => {
    const steps = page.locator('.testcase-step-row');
    const succeededSteps = page.locator('.testcase-step.step-succeeded');
    await expect(succeededSteps).toHaveCount(1, { timeout: 60000 });
    await expect(steps.nth(0).locator('.testcase-step')).toHaveClass(/step-succeeded/);
}, { action: "validate" });

// ai-studio-step-id: pw11ivjcq0
await leapwork.step("Click Disconnect in the cloud browser controls", async () => {
    // Click button "Disconnect"
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click" });