import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_16");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "new TC created");

// ai-studio-step-id: 4ac8ee3a
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 58c84faa
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 6a241f4d
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: e945b8cc
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pws8qksu00
await leapwork.step("Right-click the \"${teamName}\" asset", async () => {
    const tempTeam = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await tempTeam.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw1dk5bnv0
await leapwork.step("Click the Import submenu in the context menu", async () => {
    // Click div
    await page.getByText('Import›').click();
}, { action: "click" });

// ai-studio-step-id: pw18s7c140
await leapwork.step("Click the Import tests option in Leapwork AI Studio", async () => {
    await page.getByText('Import tests', { exact: true }).click();
});

// ai-studio-step-id: pw1gocju50
await leapwork.step("Click the Browse button in the Import Tests dialog", async () => {
    const browseButton = page.getByRole('button', { name: 'Browse', exact: true });
    await browseButton.click({ force: true });
});

// ai-studio-step-id: pwhg58pq00
await leapwork.step("Click the Cancel button", async () => {
    const cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
    await cancelButton.click({ force: true });
});

// ai-studio-step-id: 63ef7c8c
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw1suujv00
await leapwork.step("Click the Collapse folder button in the explorer sidebar", async () => {
    const explorerButton = page.getByRole('button', { name: 'Explorer', exact: true });
    await explorerButton.click({ force: true });
});



// ai-studio-step-id: pw1fvi82a0
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// await leapwork.step("Single click in empty space in the Explorer panel", async () => {
//     await page.locator('.explorer-list').click();
// });

// ai-studio-step-id: pw6ab0m300
await leapwork.step("Right-click the new test case item in the explorer list", async () => {
    const newTestCaseItem = page.locator('.explorer-list').getByText('new TC created', { exact: true });
    await newTestCaseItem.click({ button: 'right', force: true });
});

// ai-studio-step-id: pwdqe9sq00
await leapwork.step("Click the Export tests option", async () => {
    await page.getByText('Export tests', { exact: true }).click();
});

// ai-studio-step-id: pwssxknv00
await leapwork.step("Click the \"${teamName}\" in Leapwork AI Studio", async () => {
    const tempTeam = page.getByRole('button', { name: 'Collapse folder', exact: true });
    await tempTeam.click({ force: true });
});

// ai-studio-step-id: 33cfdd95
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
