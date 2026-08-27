import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RenameAsset } from "@assets/Utilities/Rename Asset";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_10");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New knowledge base");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");



// ai-studio-step-id: 8ca9c882
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: c348a535
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 0d2f61ce
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 178d8217
await leapwork.step("Use test case: Rename Asset", async () => {
    return await RenameAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: ce68ef1b
await leapwork.step("Use test case: Delete Asset", async () => {
    return await DeleteAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: ae4acdeb
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

