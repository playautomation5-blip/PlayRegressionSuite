import { leapwork } from "./leapwork";

import { teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_39");
leapwork.variables.set("teamName", teamName);

await logInfo(leapwork.generateTOTP("wcmdl7bkddwddktm"))


// ai-studio-step-id: 2c298fad
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 4e73fe4d
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 9eac61f4
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw18d3uub0
await leapwork.step("Right-click the \"${teamName}\" folder on the Leapwork AI Studio page", async () => {
    const regression = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await regression.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw10trlo80
await leapwork.step(`Click the Import submenu in the ${teamName} context menu`, async () => {
    // Click div
    await page.getByText('Import').click();
}, { action: "click" });

// ai-studio-step-id: pw1e376f50
await leapwork.step("Click Import Playwright in the Import submenu", async () => {
    // Click div
    await page.getByText('Import Playwright').click();
}, { action: "click" });

// ai-studio-step-id: pw1k62imk0
await leapwork.step("Click the Browse button to select Playwright files for import", async () => {
    // Click button "Browse"
    await page.getByRole('button', { name: 'Browse' }).click();
}, { action: "click" });

// ai-studio-step-id: pws62g0j00
await leapwork.step("Click the Cancel button in the Import Playwright tests dialog", async () => {
    // Click button "Cancel"
    await page.getByRole('button', { name: 'Cancel' }).click();
}, { action: "click" });

// ai-studio-step-id: 6ccd1cfb
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });