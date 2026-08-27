import { leapwork } from "./leapwork";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { ExpandCollapse } from "@assets/Trash Can/Utilities/Expand collapse";
import { RandomTeam, password, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_27");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: d08ad41c
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: afb2c6dd
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 8bf7a3e6
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: a3f774e4
await leapwork.step("Use test case: Expand collapse", async () => {
    return await ExpandCollapse();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: LJhh5XNc
await leapwork.step("Right-click \"${teamName}\" team", async () => {
    const target = page.getByText(teamName, { exact: true });
    await target.click({ button: 'right', force: true });
});

// ai-studio-step-id: ybGFkuLL
await leapwork.step("Click Restore in the trash actions menu", async () => {
    const restore = page.getByText('Restore', { exact: true });
    await restore.click({ force: true });
});
// ai-studio-step-id: pww4odu600
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1i4hoyz0
await leapwork.step("Use test case: Expand collapse", async () => {
    return await ExpandCollapse();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pww62i3k00
await leapwork.step("Right-click the \"${teamName}\" team", async () => {
    await page.getByTitle(teamName).nth(2).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw16nrdy10
await leapwork.step("Click Delete permanently in the Trash context menu", async () => {
    await page.getByText('Delete permanently').click();
}, { action: "click" });
