import { leapwork } from "./leapwork";

import { RandomTeam2, RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
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

leapwork.variables.set("userId", "user_35");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: 960028ed
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
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


// await leapwork.step("Click the Create new button for \"${teamName}\"", async () => {
//     const createNewButton = page.getByRole('button', { name: `Create new in ${teamName}`, exact: true });
//     await expect(createNewButton).toHaveCount(1);
//     await createNewButton.click({ force: true });
// }, { action: "click" });

// await leapwork.step("Click New typescript in the assets create new menu", async () => {
//     const loc = page.getByText('New typescript');
//     await loc.waitFor({ state: 'visible' });
//     // Click div
//     await page.getByText('New typescript').click();
// }, { action: "click" });

// await leapwork.step("Click the Collapse chat button in Leapwork AI Studio", async () => {
//     // Click button "Collapse chat"
//     await page.getByRole('button', { name: 'Collapse chat' }).click();
// }, { action: "click" });

// ai-studio-step-id: pwa6n2ed00
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});

// ai-studio-step-id: pw1251nyp0
await leapwork.step("Select \"New recording adapter (TS-1)\" from Team adapter", async () => {
    // Click combobox "Team adapter"
    await page.getByLabel('Team adapter').selectOption({ label: "New recording adapter (TS-1)" });
}, { action: "click", relativeXpath: "//*[@id=\"team-recording-adapter-select\"]" });

// ai-studio-step-id: pwlvv0id00
await leapwork.step("Validate the Team adapter is set to \"New recording adapter (TS-1)\" on Leapwork Play", async () => {
    // Assert combobox "Team adapter" contains "New recording adapter (TS-1)"
    await expect(page.getByLabel('Team adapter')).toContainText("New recording adapter (TS-1)");
}, { action: "validate", relativeXpath: "//*[@id=\"team-recording-adapter-select\"]" });


