import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { EnterWorkspace } from "@assets/Workspaces/Utilities/Enter Workspace";
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

leapwork.variables.set("text", "Automation", leapwork.storage.LOCAL);
const lw__text = leapwork.variables.get("text", leapwork.storage.LOCAL) as string;

leapwork.variables.set("userId", "aistudio_user_3");
leapwork.variables.set("passwordId", "aistudio_user_3");
leapwork.variables.set("teamName", lw__text);

// ai-studio-step-id: f3e53f9f
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("currentWorkspace", "435345 (Personal)");
leapwork.variables.set("targetWorkspace", "435345 (Test-40 Play's Workspace)Trial");
leapwork.variables.set("newWorkSpace", "Test-40 Play's Workspace (Trial)")

// ai-studio-step-id: pwtq3xwl00
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

