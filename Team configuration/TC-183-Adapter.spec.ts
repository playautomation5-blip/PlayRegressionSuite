import { leapwork } from "./leapwork";

import { RandomTeam, RandomTeam2, teamName, password } from "@assets/Utilities/random-team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
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

leapwork.variables.set("userId", "user_35");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: dcfe396e
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwt6mu5y00
await leapwork.step("Click New team", async () => {
    // Click "New team"
     await page.locator(`div.explorer-item[title="${teamName}"]`).click();
}, { action: "click" });
 
// ai-studio-step-id: pwsny42100
await leapwork.step("Click Create new in the New team section", async () => {
    // Click button "Create new in New team"
    await page.getByRole('button', { name: `Create new in ${teamName}` }).click();
}, { action: "click" });
 
// ai-studio-step-id: pw1606r1e0
await leapwork.step("Click New recording adapter in the context menu", async () => {
    // Click div
    await page.getByText('New recording adapter').click();
}, { action: "click" });
 
// ai-studio-step-id: pw1koat430
await leapwork.step("Click the Collapse chat button in Leapwork Play.", async () => {
    // Click button "Collapse chat"
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click" });

// ai-studio-step-id: pwa6n2ed00
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});
