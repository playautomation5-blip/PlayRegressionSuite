import { leapwork } from "./leapwork";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { ExpandCollapse } from "@assets/Utilities/Expand collapse";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_25");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: 3079a270
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 3731f1ed
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: e43fe057
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 57a6dd04
await leapwork.step("Use test case: Expand collapse", async () => {
    return await ExpandCollapse();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: kN86XBCv
await leapwork.step("Right-click the Trash item in the explorer", async () => {
    await page.locator('div').filter({ hasText: /^Trash$/ }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: jzpgWEOg
await leapwork.step("Click the Empty now option in the trash context menu", async () => {
    await page.getByText('Empty now').click();
}, { action: "click"});

// ai-studio-step-id: HMUEj12L
await leapwork.step("Click the Empty trashcan button in the delete confirmation dialog", async () => {
    await page.getByRole('button', { name: 'Empty trashcan' }).click();
}, { action: "click" });