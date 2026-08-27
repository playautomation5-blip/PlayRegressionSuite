import { leapwork } from "./leapwork";

import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { AddTag } from "@assets/Team configuration/Utilities/Add Tag";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_24");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("tagName", "Tag 1");
leapwork.variables.set("tagDescription", "This is a tag");

// ai-studio-step-id: 4f9b5e43
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 45766f8f
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwjjdnfw00
await leapwork.step("Click the team 75411 item", async () => {
    // Click "team 75411"
    await page.getByText('team').first().click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[2]/div[1]/div/span[3]" });




// ai-studio-step-id: bd9bfaf1
await leapwork.step("Use test case: Add Tag", async () => {
    return await AddTag();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: fed8d405
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
