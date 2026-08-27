import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: hCVt5vP4
await leapwork.step("Click the Automation Account (Personal) button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: 6l0qmmB1
await leapwork.step("Click the Account and settings option", async () => {
    // Click span
    await page.getByText('Account and settings').click();
}, { action: "click" });

// ai-studio-step-id: pw1y1ub4t0
await leapwork.step("Click Credits in the settings navigation", async () => {
    // Click button "Credits"
    await page.getByRole('button', { name: 'Credits', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: 6pLeNFuT
await leapwork.step("Validate that 'Your unassigned credits' is shown on the Leapwork AI Studio page", async () => {
    // Assert div contains "Your unassigned credits"
    await expect(page.getByText('Your unassigned credits')).toContainText("Your unassigned credits");
}, { action: "validate"});

// ai-studio-step-id: MkQHegSN
await leapwork.step("Validate that 'Your top-up credits' is shown on Leapwork AI Studio", async () => {
    // Assert div contains "Your top-up credits"
    await expect(page.getByText('Your top-up credits')).toContainText("Your top-up credits");
}, { action: "validate"});

// ai-studio-step-id: agVlISvV
await leapwork.step("Validate that the Credits heading shows 'Credits' on the Leapwork AI Studio page", async () => {
    // Assert heading "Credits" contains "Credits"
    await expect(page.getByRole('heading', { name: 'Credits' })).toContainText("Credits");
}, { action: "validate" });

// await leapwork.step("Validate the Credit Team heading shows 'Credit Team' on the Leapwork AI Studio page", async () => {
//     // Assert heading "Credit Team" contains "Credit Team"
//     await expect(page.getByRole('heading', { name: 'Credit Team' })).toContainText("Credit Team");
// }, { action: "validate" });

// ai-studio-step-id: uSxy6749
await leapwork.step("Validate the Credit Audit heading shows 'Credit Audit' on Leapwork AI Studio", async () => {
    // Assert heading "Credit Audit" contains "Credit Audit"
    await expect(page.getByRole('heading', { name: 'Credit Audit' })).toContainText("Credit Audit");
}, { action: "validate" });

// ai-studio-step-id: hGBZsjwI
await leapwork.step("Validate that the View Spend Pie Charts button shows 'View Spend Pie Charts' on Leapwork AI Studio", async () => {
    // Assert button "View Spend Pie Charts" contains "View Spend Pie Charts"
    await expect(page.getByRole('button', { name: 'View Spend Pie Charts' })).toContainText("View Spend Pie Charts");
}, { action: "validate" });

// ai-studio-step-id: ZLtbY6hM
await leapwork.step("Click the View Spend Pie Charts button in the Credit Audit section", async () => {
    // Click button "View Spend Pie Charts"
    await page.getByRole('button', { name: 'View Spend Pie Charts' }).click();
}, { action: "click"});

// ai-studio-step-id: kwCtidzK
await leapwork.step("Click the Close button on the Spend Breakdown panel", async () => {
    // Click button "Close"
    await page.getByRole('button', { name: 'Close', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: EabOcHfR
await leapwork.step("Validate that the Date column header shows 'Date' in Leapwork AI Studio", async () => {
    // Assert columnheader "Date" contains "Date"
    await expect(page.getByRole('columnheader', { name: 'Date' })).toContainText("Date");
}, { action: "validate" });

// ai-studio-step-id: OLrEAelX
await leapwork.step("Validate the Account column header shows 'Account' in Leapwork AI Studio", async () => {
    // Assert columnheader "Account" contains "Account"
    await expect(page.getByRole('columnheader', { name: 'Account', exact: true })).toContainText("Account");
}, { action: "validate" });

// ai-studio-step-id: yii9C8hc
await leapwork.step("Validate the Entry column header shows 'Entry' in the Credit Audit table", async () => {
    // Assert columnheader "Entry" contains "Entry"
    await expect(page.getByRole('columnheader', { name: 'Entry' })).toContainText("Entry");
}, { action: "validate" });

// ai-studio-step-id: fc7QvMVO
await leapwork.step("Validate the Kind column header shows 'Kind' on the Leapwork AI Studio Credit Audit table", async () => {
    // Assert columnheader "Kind" contains "Kind"
    await expect(page.getByRole('columnheader', { name: 'Kind' })).toContainText("Kind");
}, { action: "validate" });

// ai-studio-step-id: FSVBQB09
await leapwork.step("Validate that the Asset column header shows 'Asset' in Leapwork AI Studio", async () => {
    // Assert columnheader "Asset" contains "Asset"
    await expect(page.getByRole('columnheader', { name: 'Asset', exact: true })).toContainText("Asset");
}, { action: "validate" });

// ai-studio-step-id: xetC6EhV
await leapwork.step("Validate the Credit column header shows 'Credit' on Leapwork AI Studio", async () => {
    // Assert columnheader "Credit" contains "Credit"
    await expect(page.getByRole('columnheader', { name: 'Credit' })).toContainText("Credit");
}, { action: "validate" });

// ai-studio-step-id: 0ew9p0Fq
await leapwork.step("Validate that the Cost (USD) column header shows 'Cost (USD)' in Leapwork AI Studio", async () => {
    // Assert columnheader "Cost (USD)" contains "Cost (USD)"
    await expect(page.getByRole('columnheader', { name: 'Cost (USD)' })).toContainText("Cost (USD)");
}, { action: "validate" });

// ai-studio-step-id: 3Ii2L7Lf
await leapwork.step("Validate the Description column header shows 'Description' in Leapwork AI Studio", async () => {
    // Assert columnheader "Description" contains "Description"
    await expect(page.getByRole('columnheader', { name: 'Description', exact: true })).toContainText("Description");
}, { action: "validate" });

// ai-studio-step-id: oUbjGn4A
await leapwork.step("Click the Audit logs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Audit logs' }).click();
}, { action: "click" });