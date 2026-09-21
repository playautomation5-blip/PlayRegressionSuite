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

const lw__descriptionOutlineAbove = leapwork.variables.get("descriptionOutlineAbove", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw19t4lso0
await leapwork.step("Right-click the 2nd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '2' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwoeup7v00
await leapwork.step("Click Insert step in the context menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Insert step' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1r51ntq0
await leapwork.step("Click “Above this step” in the step insertion menu", async () => {
    // Click span
    await page.getByText('Above this step').click();
}, { action: "click" });

// ai-studio-step-id: pw89hfrt00
await leapwork.step(`Fill the Description / outline field with "${lw__descriptionOutlineAbove}"`, async () => {
    // Fill textbox "Description / outline"
    await page.getByRole('textbox', { name: 'Description / outline' }).fill(String(lw__descriptionOutlineAbove));
}, { action: "input" });

// ai-studio-step-id: pwa2qqpq00
await leapwork.step("Fill the code editor", async () => {
    await page.getByRole('textbox', { name: 'Editor content' }).pressSequentially('for (let i = 0; i < 1; i++) { continue; }');
}, { action: "input" });

// ai-studio-step-id: pw1bdhesp0
await leapwork.step("Click the Insert step button to add a new step to the test case", async () => {
    // Click span
    await page.getByRole('button', { name: 'Insert step', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw8dej7e00
await leapwork.step("Validate that a new step is added above 2nd step.", async () => {
    const steps = page.locator('.testcase-step-row');
    const newStep = steps.nth(1);
    expect(newStep.locator('.step-name')).toHaveText(String(lw__descriptionOutlineAbove));
}, { action: "validate", timeoutMs: 30000 });