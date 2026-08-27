import { leapwork } from "./leapwork";

import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { AddCategory } from "@assets/Team configuration/Utilities/Add Category";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_19");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("categoryName", "Category 1");
leapwork.variables.set("categoryDescription", "This is a category");

// ai-studio-step-id: 0376b695
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 32605dca
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 205a605f
await leapwork.step("Use test case: Add Category", async () => {
    return await AddCategory();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 31903dfb
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
