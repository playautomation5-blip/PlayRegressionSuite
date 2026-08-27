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

// ai-studio-step-id: pw1fjkj3i0
await leapwork.step("Click Self-healing in the step options menu", async () => {
    // Click span
    await page.getByText('Self-healing').click();
}, { action: "click" });

// ai-studio-step-id: pw1t6c4cp0
await leapwork.step("Validate that Self-heal is shown as “Self-heal” on the Leapwork Play page", async () => {
    // Assert span contains "Self-heal"
    await expect(page.locator('.testcase-step', { has: page.locator('.step-order', { hasText: '3' }) }).locator('.testcase-step-property-label')).toContainText('Self-heal');
    await expect(page.locator('.testcase-step', { has: page.locator('.step-order', { hasText: '3' }) }).locator('.testcase-step-property-chip--active')).toHaveText('On');
}, { action: "validate" });
