import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});
leapwork.variables.set("userId", "user_35");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: d8613a03
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 37db792b
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw41d9me00
await leapwork.step("Click New team", async () => {
    // Click "New team"
     await page.locator(`div.explorer-item[title="${teamName}"]`).click();
}, { action: "click" });
 
// ai-studio-step-id: pwcia05700
await leapwork.step("Click Create new in the New team section", async () => {
    // Click button "Create new in New team"
    await page.getByRole('button', { name: `Create new in ${teamName}` }).click();
}, { action: "click" });
 
// ai-studio-step-id: pw1606r1e0
await leapwork.step("Click New recording adapter in the context menu", async () => {
    // Click div
    await page.getByText('New recording adapter').click();
}, { action: "click" });
 
// ai-studio-step-id: pw1vp87ws0
await leapwork.step("Click the Collapse chat button in Leapwork Play.", async () => {
    // Click button "Collapse chat"
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click" });

// ai-studio-step-id: pwbznxtt00
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});

// ai-studio-step-id: pw1251nyp0
await leapwork.step("Select \"New recording adapter (TS-1)\" from Team adapter", async () => {
    // Click combobox "Team adapter"
    await page.getByLabel('Team adapter').selectOption({ label: "New recording adapter (TS-1)" });
}, { action: "click", relativeXpath: "//*[@id=\"team-recording-adapter-select\"]" });

// ai-studio-step-id: pw1lmdd880
await leapwork.step("Validate the Team adapter is set to \"New recording adapter (TS-1)\" on Leapwork Play", async () => {
    // Assert combobox "Team adapter" contains "New recording adapter (TS-1)"
    await expect(page.getByLabel('Team adapter')).toContainText("New recording adapter (TS-1)");
}, { action: "validate", relativeXpath: "//*[@id=\"team-recording-adapter-select\"]" });


