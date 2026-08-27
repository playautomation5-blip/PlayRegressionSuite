import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("userId", "user_31");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New Runlist");
leapwork.variables.set("assetName", "Runlist");

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwb5guge00
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1d4kpvd0
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1p6nhzc0
await leapwork.step("Click the Add trigger button in the Trigger section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Add trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: pw9or36700
await leapwork.step("Click the API endpoint trigger option under Trigger", async () => {
    // Click div
    await page.getByText('API endpoint').click();
}, { action: "click" });

// ai-studio-step-id: pw1uihzjc0
await leapwork.step("Click the Create secret button in the Trigger section", async () => {
    // Click button "Create secret"
    await page.getByRole('button', { name: 'Create secret' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1hjb6rd0
await leapwork.step("Click the Add trigger button in the Trigger section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Add trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: pwppfagg00
await leapwork.step("Click the Schedule option in the Trigger context menu", async () => {
    // Click div
    await page.getByText('Schedule').click();
}, { action: "click" });

// ai-studio-step-id: pw1f4ztwb0
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1mmjv0p0
await leapwork.step("Validate that the Upcoming Runs section shows '5 upcoming runs' on the Leapwork Play page", async () => {
    // Assert div contains "5 upcoming runs"
    await expect(page.getByText('5 upcoming runs')).toContainText("5 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: pw19humys0
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw26y45z00
await leapwork.step("Click the API endpoint trigger options button", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pwu6ymgg00
await leapwork.step("Click Disable in the trigger context menu", async () => {
    // Click div
    await page.getByText('Disable').click();
}, { action: "click" });

// ai-studio-step-id: pw1juakw30
await leapwork.step("Validate the Trigger status shows 'Disabled' on the Leapwork Play page", async () => {
    // Assert div contains "Disabled"
    await expect(page.getByText('Disabled')).toContainText("Disabled");
}, { action: "validate" });

// ai-studio-step-id: pwjczhdq00
await leapwork.step("Click the Trigger section menu button for the disabled API endpoint", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1joey4z0
await leapwork.step("Click the Enable option in the trigger context menu", async () => {
    // Click div
    await page.getByText('Enable', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1w3aufa0
await leapwork.step("Validate the Trigger status shows 'Enabled' on the Leapwork Play asset page", async () => {
    // Assert div contains "Enabled"
    await expect(page.getByText('Enabled').first()).toContainText("Enabled");
}, { action: "validate" });

// ai-studio-step-id: pw17nyi0l0
await leapwork.step("Click the API endpoint options menu button in the Trigger section", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1k2o72k0
await leapwork.step("Click the Delete option in the trigger context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click" });

// ai-studio-step-id: pw1pi6zbc0
await leapwork.step("Click the three-dot menu button for the enabled Schedule trigger", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).click();
}, { action: "click" });

// ai-studio-step-id: pw13jrht50
await leapwork.step("Click Disable in the Trigger schedule menu", async () => {
    // Click div
    await page.getByText('Disable').click();
}, { action: "click" });

// ai-studio-step-id: pwxnqb3i00
await leapwork.step("Validate that the Schedule trigger status shows 'Disabled' on the Leapwork Play page", async () => {
    // Assert div contains "Disabled"
    await expect(page.getByText('Disabled')).toContainText("Disabled");
}, { action: "validate" });

// ai-studio-step-id: pwkc1nbh00
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1hk8z880
await leapwork.step("Validate that the Upcoming Runs section on Leapwork Play shows '0 upcoming runs'", async () => {
    // Assert div contains "0 upcoming runs"
    await expect(page.getByText('0 upcoming runs')).toContainText("0 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: pww6wa8r00
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: pwd5nv2o00
await leapwork.step("Click the Schedule options menu button in the Trigger section", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).click();
}, { action: "click" });

// ai-studio-step-id: pwpme66900
await leapwork.step("Click Enable in the Trigger options menu", async () => {
    // Click div
    await page.getByText('Enable').click();
}, { action: "click" });

// ai-studio-step-id: pw1ymwv4e0
await leapwork.step("Validate the Trigger status shows 'Enabled' on the Leapwork Play page", async () => {
    // Assert div contains "Enabled"
    await expect(page.getByText('Enabled')).toContainText("Enabled");
}, { action: "validate" });

// ai-studio-step-id: pw9wvzkb00
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ttrhh30
await leapwork.step("Validate that the Upcoming Runs section shows '5 upcoming runs' on the Leapwork Play page", async () => {
    // Assert div contains "5 upcoming runs"
    await expect(page.getByText('5 upcoming runs')).toContainText("5 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: pw1qc83wy0
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwl8cgpr00
await leapwork.step("Click the Schedule trigger menu button", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).click();
}, { action: "click" });

// ai-studio-step-id: pwt8552000
await leapwork.step("Click Delete in the Trigger context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click" });

// ai-studio-step-id: pw1ln8jx90
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: pw82bg6y00
await leapwork.step("Validate that Upcoming Runs shows '0 upcoming runs' on the Leapwork Play page", async () => {
    // Assert div contains "0 upcoming runs"
    await expect(page.getByText('0 upcoming runs')).toContainText("0 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: pw1vabuzj0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
