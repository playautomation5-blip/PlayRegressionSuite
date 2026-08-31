import { leapwork } from "./leapwork";

import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { AddCategory } from "@assets/Team configuration/Utilities/Add Category";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
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

