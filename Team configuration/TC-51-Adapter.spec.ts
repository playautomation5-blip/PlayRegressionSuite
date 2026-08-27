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


// ai-studio-step-id: pw1crr8k80
await leapwork.step("Click the Create new button for \"${teamName}\"", async () => {
    const createNewButton = page.getByRole('button', { name: `Create new in ${teamName}`, exact: true });
    await expect(createNewButton).toHaveCount(1);
    await createNewButton.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwub1yxp00
await leapwork.step("Click New typescript in the assets create new menu", async () => {
    const loc = page.getByText('New typescript');
    await loc.waitFor({ state: 'visible' });
    // Click div
    await page.getByText('New typescript').click();
}, { action: "click" });

// ai-studio-step-id: pw1vp87ws0
await leapwork.step("Click the Collapse chat button in Leapwork AI Studio", async () => {
    // Click button "Collapse chat"
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click" });

// ai-studio-step-id: pwbznxtt00
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});

// ai-studio-step-id: pwo6pxhk00
await leapwork.step("Select Team adapter", async () => {
    const teamAdapter = page.getByRole('combobox', { name: 'Team adapter', exact: true });
    await expect(teamAdapter).toHaveCount(1);
    await teamAdapter.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwza0gfb00
await leapwork.step("Select \"New typescript (TS-1)\" from Team adapter dropdown", async () => {
    // Click combobox "Team adapter"
    await page.locator('select').selectOption({ label: 'New typescript (TS-1)' });
}, { action: "click" });

// ai-studio-step-id: pw14cl4y20
await leapwork.step("Validate the Team adapter is 'New typescript (TS-1)' on the Leapwork AI Studio page", async () => {
    // Assert combobox "Team adapter" contains "New typescript (TS-1)"
    await expect(page.getByLabel('Team adapter').locator('option:checked')).toHaveText('New typescript (TS-1)');
}, { action: "validate" });

// ai-studio-step-id: 8814c963
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
