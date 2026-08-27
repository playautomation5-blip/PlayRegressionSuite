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

// ai-studio-step-id: pwzle7hm00
await leapwork.step("Validate the old color of the step.", async () => {
    await expect(page.locator('.step-order', { hasText: '3' })).toHaveCSS('color', 'rgb(159, 191, 204)');
}, { action: "validate" });

// ai-studio-step-id: pw3syqa400
await leapwork.step("Right-click the 3rd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '3' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw1h9ekqx0
await leapwork.step("Click “Continue if fails” in the step context menu", async () => {
    // Click span
    await page.getByText('Continue if fails').click();
}, { action: "click" });

// ai-studio-step-id: pwcaz90700
await leapwork.step("Validate the new color of the step.", async () => {
    await expect(page.locator('.step-order', { hasText: '3' })).toHaveCSS('color', 'rgb(217, 180, 92)');
}, { action: "validate" });

