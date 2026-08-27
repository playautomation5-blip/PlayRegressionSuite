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

leapwork.variables.set("userId", "user_11");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New Runlist");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");

// ai-studio-step-id: e1c88b08
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: d378583e
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 60a7e4f3
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 3c8a260d
await leapwork.step("Use test case: Rename Asset", async () => {
    return await RenameAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 8e128f10
await leapwork.step("Use test case: Delete Asset", async () => {
    return await DeleteAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: b9a25dd7
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
