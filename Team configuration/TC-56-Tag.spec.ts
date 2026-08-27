import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { AddTag } from "@assets/Team configuration/Utilities/Add Tag";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_24");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("tagName", "Tag 1");
leapwork.variables.set("tagDescription", "This is a tag");

// ai-studio-step-id: 89f33f5f
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 43d3410f
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 3d21ac21
await leapwork.step("Use test case: Add Tag", async () => {
    return await AddTag();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 15c095cb
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
