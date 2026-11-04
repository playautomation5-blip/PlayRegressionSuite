import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { ExpandCollapse } from "@assets/Trash Can/Utilities/Expand collapse";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_61");
leapwork.variables.set("teamName", teamName);



// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwft3po200
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1yctxlr0
await leapwork.step("Use test case: Expand collapse", async () => {
    return await ExpandCollapse();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw74mdtu00
await leapwork.step("Right-click the Trash item in the explorer", async () => {
    await page.locator('div').filter({ hasText: /^Trash$/ }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwxetpbz00
await leapwork.step("Click the Empty now option in the trash context menu", async () => {
    await page.getByText('Empty now').click();
}, { action: "click"});

// ai-studio-step-id: pwwqp2o800
await leapwork.step("Click the Empty trashcan button in the delete confirmation dialog", async () => {
    await page.getByRole('button', { name: 'Empty trashcan' }).click();
}, { action: "click" });
