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

// ai-studio-step-id: pww32zzd00
await leapwork.step("Click Edit step from the step actions menu", async () => {
    // Click span
    await page.getByText('Edit step').click();
}, { action: "click" });

// ai-studio-step-id: pw1fzs5ig0
await leapwork.step("Validate that the Playwright editor tab is opened.", async () => {
    // Click div
    await expect(page.locator('.tab[title="Playwright"]')).toHaveClass(/tab--active/);
}, { action: "validate" });