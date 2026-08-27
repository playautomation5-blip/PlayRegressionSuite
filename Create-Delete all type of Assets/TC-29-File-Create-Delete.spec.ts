import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RenameAsset } from "@assets/Utilities/Rename Asset";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_38");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New file");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");

// ai-studio-step-id: 3d2f8e33
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 938bace8
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 3910d585
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: d3e8b5de
await leapwork.step("Use test case: Rename Asset", async () => {
    return await RenameAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1mrhlhs0
await leapwork.step("Click the Upload file button for the renamed test-data file", async () => {
    // Click button "Upload file"
    await page.getByRole('button', { name: 'Upload file' }).click();
}, { action: "click" });

// ai-studio-step-id: ed54b9b2
await leapwork.step("Use test case: Delete Asset", async () => {
    return await DeleteAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 38b113aa
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
