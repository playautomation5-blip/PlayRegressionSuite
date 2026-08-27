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

leapwork.variables.set("newWorkSpace", "AiStudio03's Workspace (Trial)");
leapwork.variables.set("targetWorkspace", "AiStudio03 (Personal)")

// ai-studio-step-id: 7436b5b4
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: a0be6e65
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("newWorkSpace", "Manisha's Workspace (Trial)");
leapwork.variables.set("targetWorkspace", "AiStudio03 (Manisha's Workspace)Trial")

// ai-studio-step-id: pw83bwdz00
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: xxn6ZMtm
await leapwork.step("Click the Collapse folder button for My Team", async () => {
    // Click button "Collapse folder"
    await page.getByRole('button', { name: 'Collapse folder' }).first().click();
}, { action: "click" });

leapwork.variables.set("newWorkSpace", "AiStudio03's Workspace (Trial)");
leapwork.variables.set("targetWorkspace", "AiStudio03 (Personal)")

// ai-studio-step-id: pw12jn21d0
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: ca8a24e1
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
