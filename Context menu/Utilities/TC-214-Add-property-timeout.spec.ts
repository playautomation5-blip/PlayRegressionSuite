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

// ai-studio-step-id: pw1bqjr1c0
await leapwork.step("Right-click the 3rd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '3' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwmqj2xp00
await leapwork.step("Click Add property in the context menu", async () => {
    // Click span
    await page.getByText('Add property').click();
}, { action: "click" });

// ai-studio-step-id: pw1p3qqku0
await leapwork.step("Click Timeout to add the timeout property.", async () => {
    // Click span
    await page.getByText('Timeout', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw8racd300
await leapwork.step("Validate the Timeout property equals \"Timeout\" on the Leapwork Play page", async () => {
    // Assert span contains "Timeout"
    await expect(page.locator('.testcase-step', { has: page.locator('.step-order', { hasText: '3' }) }).locator('.testcase-step-property-row', { hasText: 'Timeout' }).locator('input')).toHaveValue('30s');
}, { action: "validate" });

