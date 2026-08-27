import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_16");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "new TC created");

// ai-studio-step-id: b5ae1627
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 7b14b3e5
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: b713e0fb
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 70d071e3
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1ntn1o60
await leapwork.step("Right-click the \"${teamName}\" asset", async () => {
    const tempTeam = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await tempTeam.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw18bzefx0
await leapwork.step("Click the Import submenu in the context menu", async () => {
    // Click div
    await page.getByText('Import').click();
}, { action: "click" });

// ai-studio-step-id: pw1hbnhs00
await leapwork.step("Click the Import tests option in Leapwork AI Studio", async () => {
    await page.getByText('Import tests', { exact: true }).click();
});

// ai-studio-step-id: pw1telvkn0
await leapwork.step("Click the Browse button in the Import Tests dialog", async () => {
    const browseButton = page.getByRole('button', { name: 'Browse', exact: true });
    await browseButton.click({ force: true });
});

// ai-studio-step-id: pw1fvfnie0
await leapwork.step("Click the Cancel button", async () => {
    const cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
    await cancelButton.click({ force: true });
});

// ai-studio-step-id: b6eed8a8
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwfxlyzp00
await leapwork.step("Click the Collapse folder button in the explorer sidebar", async () => {
    const explorerButton = page.getByRole('button', { name: 'Explorer', exact: true });
    await explorerButton.click({ force: true });
});



// ai-studio-step-id: rOV9zbdK
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// await leapwork.step("Single click in empty space in the Explorer panel", async () => {
//     await page.locator('.explorer-list').click();
// });

// ai-studio-step-id: pw1nt0brn0
await leapwork.step("Right-click the new test case item in the explorer list", async () => {
    const newTestCaseItem = page.locator('.explorer-list').getByText('new TC created', { exact: true });
    await newTestCaseItem.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw19y5jpg0
await leapwork.step("Click the Export tests option", async () => {
    await page.getByText('Export tests', { exact: true }).click();
});

// ai-studio-step-id: pwji6f1h00
await leapwork.step("Click the \"${teamName}\" in Leapwork AI Studio", async () => {
    const tempTeam = page.getByRole('button', { name: 'Collapse folder', exact: true });
    await tempTeam.click({ force: true });
});

// ai-studio-step-id: pw1fz8x6e0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
