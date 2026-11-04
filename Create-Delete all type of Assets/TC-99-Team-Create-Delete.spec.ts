import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const teamName = "rename";

leapwork.variables.set("userId", "user_73");
leapwork.variables.set("teamName", teamName);


// ai-studio-step-id: 49eff4de
await leapwork.step("Use test case: Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 245813dd
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: 1baaf393
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
