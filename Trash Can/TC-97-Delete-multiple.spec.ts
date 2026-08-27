import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteMultipleAssets } from "@assets/Trash Can/Utilities/delete multiple assets";
import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_26");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");

const assetDictionary: Record<string, string> = {
  "New test case": "Leapwork test case",
  "New typescript": "Common utility",
  "New folder": "Trash folder",
};

// ai-studio-step-id: 8fbfd910
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 0727c9d2
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: bbb26852
await leapwork.step("Use test case: Create New Asset", async () => {
    const entries = Object.entries(assetDictionary);
    for (let i = 0; i < 3; i++) {
        const [assetType, assetName] = entries[i];
        leapwork.variables.set("assetType", assetType);
        leapwork.variables.set("assetName", assetName);
     await CreateNewAsset();
    }
}, { action: "asset_reference", linkedAssetType: "test-case" ,  timeoutMs : 80000});

// ai-studio-step-id: 44a3c8ce
await leapwork.step("Use test case: delete multiple assets", async () => {
    const entries = Object.entries(assetDictionary);
    for (let i = 0; i < 3; i++) {
        const [assetType, assetName] = entries[i];
        leapwork.variables.set("assetType", assetType);
        leapwork.variables.set("assetName", assetName);
     await DeleteMultipleAssets();
    }
}, { action: "asset_reference", linkedAssetType: "test-case",  timeoutMs : 80000 });

// ai-studio-step-id: 3c7918c1
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
