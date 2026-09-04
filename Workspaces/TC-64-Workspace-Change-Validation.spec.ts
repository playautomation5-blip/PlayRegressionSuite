import { leapwork } from "./leapwork";

import { EnterWorkspace } from "@assets/Workspaces/Utilities/Enter Workspace";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("text", "Automation", leapwork.storage.LOCAL);
const lw__text = leapwork.variables.get("text", leapwork.storage.LOCAL) as string;

leapwork.variables.set("userId", "aistudio_user_3");
leapwork.variables.set("passwordId", "aistudio_user_3");
leapwork.variables.set("teamName", lw__text);

// ai-studio-step-id: 31a2f186
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("newWorkSpace", 'AiStudio Automation\'s');
leapwork.variables.set("targetWorkspace", "AiStudio 03 Automation (Personal)AI Builder")

// ai-studio-step-id: baf831f0
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 224fd85b
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("newWorkSpace", "Shivani Wadhwa's Workspace (Cloud-Native (Scale Up))");
leapwork.variables.set("targetWorkspace", "AiStudio 03 Automation (Shivani Wadhwa's Workspace)Cloud-Native (Scale Up)")

// ai-studio-step-id: fa05b34f
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1kl2w220
await leapwork.step("Click the Collapse folder button for My Team", async () => {
    // Click button "Collapse folder"
    await page.getByRole('button', { name: 'Collapse folder' }).first().click();
}, { action: "click" });

leapwork.variables.set("newWorkSpace", 'AiStudio Automation\'s');
leapwork.variables.set("targetWorkspace", "AiStudio 03 Automation (Personal)AI Builder")

// ai-studio-step-id: 16fba203
await leapwork.step("Use test case: Enter Workspace", async () => {
    return await EnterWorkspace();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: f770db91
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


