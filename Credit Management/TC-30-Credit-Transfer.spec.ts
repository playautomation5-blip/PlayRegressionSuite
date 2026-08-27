import { leapwork } from "./leapwork";

import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RecoverAsset } from "@assets/Utilities/Recover Asset";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RenameTeam } from "@assets/Utilities/Rename Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 10000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("teamName", "Credit Team");
leapwork.variables.set("assetName", "Credit Team");
leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");

leapwork.variables.set("searchByEmail2", "aistudio02", leapwork.storage.LOCAL);
const lw__searchByEmail2 = leapwork.variables.get("searchByEmail2", leapwork.storage.LOCAL) as string;



// ai-studio-step-id: b6b70ca2
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// await leapwork.step("Use test case: Delete All Teams", async () => {
//     return await DeleteAllTeams();
// }, { action: "asset_reference", linkedAssetType: "test-case" });

// await leapwork.step("Use test case: Create New Team", async () => {
//     return await CreateNewTeam();
// }, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1or960u0
await leapwork.step("Right-click the Trash item in Leapwork AI Studio", async () => {
    const trash = page.getByText('Trash', { exact: true });
    await trash.click({ button: 'right', force: true });
});

// ai-studio-step-id: pwyl9fuz00
await leapwork.step("Click the Empty trashcan button", async () => {
    const emptyNow = page.getByText('Empty now', { exact: true });
    await emptyNow.click({ force: true });
});
 
// ai-studio-step-id: pwj85jii00
await leapwork.step("Click the Empty trashcan button in the Trash panel", async () => {
    const emptyTrashcan = page.getByRole('button', { name: 'Empty trashcan', exact: true });
    await emptyTrashcan.click({ force: true });
});

// await leapwork.step("Use test case: Delete Team", async () => {
//     return await DeleteTeam();
// }, { action: "asset_reference", linkedAssetType: "test-case" });

// await leapwork.step("Use test case: Create New Team", async () => {
//     return await CreateNewTeam();
// }, { action: "asset_reference", linkedAssetType: "test-case" });

// await leapwork.step("Right-click the New team option", async () => {
//     const target = page.locator('.explorer-list').getByText('New team', { exact: true });
//         await target.click({ button: 'right', force: true });
// }, { action: "click" });

// await leapwork.step("Click Rename in the item context menu", async () => {
// await page.getByText('Rename', {exact:true}).click()
// }, { action: "click" });

// await leapwork.step("Fill the New team name field with \"Credit Team\"", async () => {
//     const teamNameInput = page.locator('input.explorer-item-name-input');
//     await teamNameInput.fill('Credit Team');
// }, { action: "input" });

// await leapwork.step("Press Enter", async () => {
//     await page.keyboard.press('Enter');
// });


// ai-studio-step-id: pw1xqd8yf0
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 3e73aae6
await leapwork.step("Click the main editor area in Leapwork AI Studio", async () => {
    // Click div
    await page.locator('.editor-main').click();
}, { action: "click" });

// ai-studio-step-id: pwno414900
await leapwork.step("Click the Automation Account (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: ee558df8
await leapwork.step("Click the Admin Section item in Leapwork AI Studio", async () => {
    const adminSection = page.getByText('Admin Section', { exact: true });
    await adminSection.click({ force: true });
});

// ai-studio-step-id: nxucxGxT
await leapwork.step("Click Admin Settings in the Management section.", async () => {
    // Click button "Admin Settings"
    await page.getByRole('button', { name: 'Admin Settings' }).click();
}, { action: "click" });

// ai-studio-step-id: eeac8936
await leapwork.step("Click the Search by email field", async () => {
    // Click textbox "Search by email"
    await page.getByRole('textbox', { name: 'Search by email' }).click();
}, { action: "click"});

// ai-studio-step-id: dd5f9c9d
await leapwork.step("Fill the Search by email field with \"${lw__searchByEmail2}\"", async () => {
    // Fill textbox "Search by email"
    await page.getByRole('textbox', { name: 'Search by email' }).fill(String(lw__searchByEmail2));
}, { action: "input"});

// ai-studio-step-id: 1dc83306
await leapwork.step("Click the Add button for aistudio02@outlook.com in the Users and credits table", async () => {
    // Click button "Add"
    await page.getByRole('button', { name: 'Add' }).click();
}, { action: "click" });

// ai-studio-step-id: 7e38a9a1
await leapwork.step("Click the 100 quick-add credits button in Credit adjustment", async () => {
    // Click button "100"
    await page.getByRole('button', { name: '100' }).click();
}, { action: "click" });

// ai-studio-step-id: 7509bdb1
await leapwork.step("Click the Add Credits button in the Credit adjustment panel", async () => {
    // Click button "Add Credits"
    await page.getByRole('button', { name: 'Add Credits' }).click();
}, { action: "click" });

// ai-studio-step-id: 99c8a3e8
await leapwork.step("Click the Automation Account (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1dnc7ag0
await leapwork.step("Click the unassigned credits balance bar", async () => {
    await page.locator('.credit-block').filter({ hasText: 'Your unassigned credits' }).locator('.credit-balance-bar').click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwytds3v00
await leapwork.step("Click the Amount field in the Transfer Credits to Team dialog", async () => {
    const amountInput = page.getByRole('spinbutton', { name: 'Amount', exact: true });
    await expect(amountInput).toHaveCount(1);
    await amountInput.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwfy050x00
await leapwork.step("Fill the Amount field with 100", async () => {
    const amountInput = page.locator('#account-panel-transfer-amount-input');
    await expect(amountInput).toHaveCount(1);
    await amountInput.fill('100');
}, { action: "input" });

// ai-studio-step-id: pw1ky029i0
await leapwork.step("Click the Transfer button in the Transfer Credits to Team dialog", async () => {
    const transferButton = page.locator('button.credit-transfer-popup-button.credit-transfer-popup-button-primary', { hasText: 'Transfer' });
    await transferButton.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw1fwqgxh0
await leapwork.step("Right-click the Credit Team option", async () => {
    const target = page.locator('.explorer-list').getByText('Credit Team', { exact: true });
            await target.click({ button: 'right', force: true });
}, { action: "click" });

// ai-studio-step-id: gtyHR8vT
await leapwork.step("Click Delete in the team context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click"});

// ai-studio-step-id: pwrnmfi800
await leapwork.step("Click Delete to confirm deleting the Credit Team team", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete', exact: true }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[3]/div/div/button[2]" });

// await leapwork.step("Click the Transfer and delete team button", async () => {
//     // Click button "Transfer and delete team"
//     await page.getByRole('button', { name: 'Transfer and delete team' }).click();
// }, { action: "click"});