import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RenameAsset } from "@assets/Utilities/Rename Asset";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_6");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New agent");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");

// ai-studio-step-id: d8757fe2
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: fe6a63c5
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 0428ead8
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 5cd019d5
await leapwork.step("Use test case: Rename Asset", async () => {
    return await RenameAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: d3638064
await leapwork.step("Use test case: Delete Asset", async () => {
    return await DeleteAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: f03d2aea
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
