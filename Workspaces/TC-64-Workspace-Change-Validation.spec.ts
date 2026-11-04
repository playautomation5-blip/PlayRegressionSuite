import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
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

leapwork.variables.set("userId", "user_73");
leapwork.variables.set("teamName", lw__text);

// ai-studio-step-id: pw1b64u5g0
await leapwork.step("Use test case: Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("currentWorkspace", "hdh5@usako.net (Personal)");
leapwork.variables.set("targetWorkspace", "hdh5@usako.net (thexux's Workspace)AI Builder");
leapwork.variables.set("newWorkSpace", "thexux's Workspace (AI Builder)")

// ai-studio-step-id: 16fba203
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

