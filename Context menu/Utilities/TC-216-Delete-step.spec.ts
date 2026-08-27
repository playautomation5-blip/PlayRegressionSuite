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

const initialStepCount = await page.locator('.testcase-step-row').count();

// ai-studio-step-id: pw1bqjr1c0
await leapwork.step("Right-click the 3rd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '3' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw1ljp5p00
await leapwork.step("Click Delete step for step 3 \"This is an inserted step - 2\"", async () => {
    // Click span
    await page.getByText('Delete step').click();
}, { action: "click" });

// ai-studio-step-id: pw14iilii0
await leapwork.step("Validate 1 step was deleted", async () => {
    const steps = page.locator('.testcase-step-row');
    await expect(steps).toHaveCount(initialStepCount - 1);
}, { action: "validate", timeoutMs: 30000 });
