import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RenameAsset } from "@assets/Utilities/Rename Asset";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { Record } from "@assets/Utilities/Record";
import { RunToHere } from "@assets/Context menu/Utilities/Run to here";
import { RecordAfterThisStep } from "@assets/Context menu/Utilities/Record after this step";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RunThisStep } from "@assets/Context menu/Utilities/Run this step";
import { RunFromHere } from "@assets/Context menu/Utilities/Run from here";
import { InsertAboveTheStep } from "@assets/Context menu/Utilities/Insert above the step";
import { InsertBelowThisStep } from "@assets/Context menu/Utilities/Insert below this step";
import { ContinueIfFails } from "@assets/Context menu/Utilities/Continue if fails";
import { AddComment } from "@assets/Context menu/Utilities/Add comment";
import { AddPropertySelfHeal } from "@assets/Context menu/Utilities/Add property - self-heal";
import { AddPropertyTimeout } from "@assets/Context menu/Utilities/Add property - timeout";
import { EditStep } from "@assets/Context menu/Utilities/Edit step";
import { DeleteStep } from "@assets/Context menu/Utilities/Delete step";

leapwork.variables.set("addAComment", "my comment", leapwork.storage.LOCAL);
leapwork.variables.set("descriptionOutlineAbove", "This is an inserted step - 1", leapwork.storage.LOCAL);
leapwork.variables.set("descriptionOutlineBelow", "This is an inserted step - 2", leapwork.storage.LOCAL);

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

// ai-studio-step-id: pw43hj0000
await leapwork.step("Wait for 1 second", async () => {
    await page.waitForTimeout(1000);
}, { action: "wait" });

// ai-studio-step-id: pwsoxako00
await leapwork.step("Use test case: Run this step", async () => {
    return await RunThisStep();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw10bko6e0
await leapwork.step("Wait for 1 second", async () => {
    await page.waitForTimeout(1000);
}, { action: "wait" });

// ai-studio-step-id: pw1l318jr0
await leapwork.step("Use test case: Run from here", async () => {
    return await RunFromHere();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwx1z8vr00
await leapwork.step("Wait for 1 second", async () => {
    await page.waitForTimeout(1000);
}, { action: "wait" });

// ai-studio-step-id: 1f7c4b78
await leapwork.step("Use test case: Run to here", async () => {
    return await RunToHere();
}, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 15000 });

// ai-studio-step-id: pwpd8uf500
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pw1tcpdad0
await leapwork.step("Use test case: Insert above the step", async () => {
    return await InsertAboveTheStep();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1xd5ldt0
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pw1gs8ayf0
await leapwork.step("Use test case: Insert below this step", async () => {
    return await InsertBelowThisStep();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwoqmder00
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pwkrgmey00
await leapwork.step("Use test case: Record after this step", async () => {
    return await RecordAfterThisStep();
}, { action: "asset_reference", linkedAssetType: "test-case", continueOnFailure: true });

// ai-studio-step-id: pw1wmuthp0
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pwzen49z00
await leapwork.step("Use test case: Continue if fails", async () => {
    return await ContinueIfFails();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1q10ou20
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pw2sa0ry00
await leapwork.step("Use test case: Add comment", async () => {
    return await AddComment();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwesmi1000
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pw1evbjuj0
await leapwork.step("Use test case: Add property - self-heal", async () => {
    return await AddPropertySelfHeal();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwmkj1qe00
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pwsqfagd00
await leapwork.step("Use test case: Add property - timeout", async () => {
    return await AddPropertyTimeout();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwaqokkw00
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pwwnu29d00
await leapwork.step("Use test case: Edit step", async () => {
    return await EditStep();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwhtzm0000
await leapwork.step("Wait for 2 seconds", async () => {
    await page.waitForTimeout(2000);
}, { action: "wait" });

// ai-studio-step-id: pwkxcut500
await leapwork.step("Use test case: Delete step", async () => {
    return await DeleteStep();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1exx5830
await leapwork.step("Click the Browser tab in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Browser' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[1]/span/span" });

// ai-studio-step-id: pwblzyh700
await leapwork.step("Wait for Connect to be visible", async () => {
    // Wait for button "Connect" to be visible
    await page.getByRole('button', { name: 'Connect' }).waitFor({state: 'visible'});
}, { action: "click" });

// ai-studio-step-id: pwfvixus00
await leapwork.step("Click the Explorer button in Leapwork Play", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: pw61ezhx00
await leapwork.step("Use test case: Delete Asset", async () => {
    return await DeleteAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwcw1mlk00
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
