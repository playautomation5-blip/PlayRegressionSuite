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

const userName = leapwork.variables.get("userName") as string;
const creditsAssigned = leapwork.variables.get("creditsAssigned") as string;
const planName = leapwork.variables.get("planName") as string;
const planStatus = leapwork.variables.get("planStatus") as string;
const geographicRegionIncludedCount = leapwork.variables.get("geographicRegionIncludedCount") as string;

// ai-studio-step-id: pw1wuw2fq0
await leapwork.step(`Click the ${userName} button`, async () => { 
    // Click button 
    await page.getByRole('button', { name: userName }).click(); 
}, { action: "click" }); 

// ai-studio-step-id: pwl6pyo700
await leapwork.step("Click Account and settings", async () => {
    // Click span
    await page.getByText('Account and settings').click();
}, { action: "click" });

// ai-studio-step-id: pw1xhd5c60
await leapwork.step("Click the Subscription and usage button in the settings navigation", async () => {
    // Click button "Subscription and usage"
    await page.getByRole('button', { name: 'Subscription and usage' }).click();
}, { action: "click" });

// ai-studio-step-id: pw13pdbs70
await leapwork.step("Validate the Leapwork Play settings page shows Unassigned credits of ${creditsAssigned}", async () => {
    // Assert strong contains "1,500,000"
    await expect(page.getByLabel('Current plan').getByText(`${creditsAssigned}`, { exact: true })).toContainText(`${creditsAssigned}`);
}, { action: "validate" });

// ai-studio-step-id: pwcnj3ui00
await leapwork.step("Verify the current plan name and status", async () => {
    const planSummary = page.locator('.subscription-usage-plan-summary');

    await expect(planSummary).toContainText(`${planName}`);
    await expect(planSummary).toContainText(`${planStatus}`);
}, { action: "validate" });

// ai-studio-step-id: pw3i65m800
await leapwork.step("Validate “Geographic Region” on the Subscription and usage page", async () => {
    // Assert span contains "Parallel remote browser sessions"
    const capacityRow = page
        .locator('.subscription-usage-capacity-row')
        .filter({ hasText: 'Geographic regions' });

    await expect(capacityRow).toContainText('Geographic regions');
    await expect(capacityRow).toContainText(`${geographicRegionIncludedCount}`);
}, { action: "validate" });