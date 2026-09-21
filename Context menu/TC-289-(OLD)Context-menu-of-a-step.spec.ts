import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RenameAsset } from "@assets/Utilities/Rename Asset";
import { Record } from "@assets/Utilities/Record";
import { RunToHere } from "@assets/Utilities/Run to here";
import { RecordAfterThisStep } from "@assets/Utilities/Record after this step";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "reg_1");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");
leapwork.variables.set("envName", "Leapwork");
leapwork.variables.set("envUrl", "https://leapwork.com");

// ai-studio-step-id: 2b84abf9
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: ab2e5d0a
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 2f05deb5
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: b3911b63
await leapwork.step("Use test case: Rename Asset", async () => {
    return await RenameAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: MpfBu0mB
await leapwork.step("Click the Explorer button in Leapwork Play", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: 3eb2a275
await leapwork.step("Use test case: Record", async () => {
    return await Record();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwjlhiq600
await leapwork.step("Click Connect to connect to the Google Chromium browser in North Europe (Ireland)", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1w3q7rd0
await leapwork.step("Validate the Disconnect button shows 'Disconnect' on the Leapwork Play page", async () => {
    // Assert button "Disconnect" contains "Disconnect"
    await expect(page.getByRole('button', { name: 'Disconnect' })).toContainText("Disconnect");
}, { action: "validate" });

// ai-studio-step-id: pwdbr1wo00
await leapwork.step("Right-click the 1st step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '1' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw1kgxc0b0
await leapwork.step("Click Run in the step context menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Run' }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pwaqdkz500
await leapwork.step("Click the “This step” context menu option in the step editor", async () => {
    // Click span
    await page.getByText('This step', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwmwnq8e00
await leapwork.step("validate that first step is success.", async () => {
    const steps = page.locator('.testcase-step-row');
    const succeededSteps = page.locator('.testcase-step.step-succeeded');
    await expect(succeededSteps).toHaveCount(1, { timeout: 60000 });
    await expect(steps.nth(0).locator('.testcase-step')).toHaveClass(/step-succeeded/);
}, { action: "validate" });

// ai-studio-step-id: pw1832sn30
await leapwork.step("Click Disconnect in the cloud browser controls", async () => {
    // Click button "Disconnect"
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click" });

// ai-studio-step-id: 1f7c4b78
await leapwork.step("Use test case: Run to here", async () => {
    return await RunToHere();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 1d099cbd
await leapwork.step("Use test case: Record after this step", async () => {
    return await RecordAfterThisStep();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1figa1c0
await leapwork.step("Wait for Connect to be visible", async () => {
    // Wait for button "Connect" to be visible
    await page.getByRole('button', { name: 'Connect' }).waitFor({state: 'visible'});
}, { action: "wait" });

// ai-studio-step-id: pwmoxitp00
await leapwork.step("Click the Explorer button in Leapwork Play", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: 915c2d96
await leapwork.step("Use test case: Delete Asset", async () => {
    return await DeleteAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 957c23e3
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

