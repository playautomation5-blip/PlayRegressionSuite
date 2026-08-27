import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RecoverAsset } from "@assets/Utilities/Recover Asset";

leapwork.configuration({
  enableSelfHeal: false,
});

leapwork.variables.set("teamName", "Credit Team");
leapwork.variables.set("assetName", "Credit Team");
leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");

leapwork.variables.set("searchByEmail2", "aistudio02", leapwork.storage.LOCAL);
const lw__searchByEmail2 = leapwork.variables.get("searchByEmail2", leapwork.storage.LOCAL) as string;



// ai-studio-step-id: a7e6c9b3
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 775e505c
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

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

// ai-studio-step-id: 099e0c10
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwg0ngug00
await leapwork.step("Right-click the New team option", async () => {
    const target = page.locator('.explorer-list').getByText('New team', { exact: true });
        await target.click({ button: 'right', force: true });
}, { action: "click" });

// ai-studio-step-id: pwo3ark100
await leapwork.step("Click Rename in the item context menu", async () => {
await page.getByText('Rename', {exact:true}).click()
}, { action: "click" });

// ai-studio-step-id: pwd4j55q00
await leapwork.step("Fill the New team name field with \"Credit Team\"", async () => {
    const teamNameInput = page.locator('input.explorer-item-name-input');
    await teamNameInput.fill('Credit Team');
}, { action: "input" });



// ai-studio-step-id: pw39b7tn00
await leapwork.step("Press Enter", async () => {
    await page.keyboard.press('Enter');
});

// ai-studio-step-id: pw7ovs7b00
await leapwork.step("Click the main editor area in Leapwork AI Studio", async () => {
    // Click div
    await page.locator('.editor-main').click();
}, { action: "click" });

// ai-studio-step-id: pw19elrhs0
await leapwork.step("Click the Automation Account (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: pwhcslrr00
await leapwork.step("Click the Admin Section item in Leapwork AI Studio", async () => {
    const adminSection = page.getByText('Admin Section', { exact: true });
    await adminSection.click({ force: true });
});

// ai-studio-step-id: pwzrmcns00
await leapwork.step("Click the Admin Settings tab in the Admin section", async () => {
    // Click tab "Admin Settings"
    await page.getByRole('tab', { name: 'Admin Settings' }).click();
}, { action: "click" });

// ai-studio-step-id: pwv5rcs300
await leapwork.step("Click the Search by email field", async () => {
    // Click textbox "Search by email"
    await page.getByRole('textbox', { name: 'Search by email' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1mpf0080
await leapwork.step("Fill the Search by email field with \"${lw__searchByEmail2}\"", async () => {
    // Fill textbox "Search by email"
    await page.getByRole('textbox', { name: 'Search by email' }).fill(String(lw__searchByEmail2));
}, { action: "input"});

// ai-studio-step-id: pw87491900
await leapwork.step("Click the Add button for aistudio02@outlook.com in the Users and credits table", async () => {
    // Click button "Add"
    await page.getByRole('button', { name: 'Add' }).click();
}, { action: "click" });

// ai-studio-step-id: pwbrobgw00
await leapwork.step("Click the 100 quick-add credits button in Credit adjustment", async () => {
    // Click button "100"
    await page.getByRole('button', { name: '100' }).click();
}, { action: "click" });

// ai-studio-step-id: pw9iomp000
await leapwork.step("Click the Add Credits button in the Credit adjustment panel", async () => {
    // Click button "Add Credits"
    await page.getByRole('button', { name: 'Add Credits' }).click();
}, { action: "click" });

// ai-studio-step-id: pwqx6cjc00
await leapwork.step("Click the Automation Account (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: pw8oratc00
await leapwork.step("Click the unassigned credits balance bar", async () => {
    await page.locator('.credit-block').filter({ hasText: 'Your unassigned credits' }).locator('.credit-balance-bar').click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw1xq7w9x0
await leapwork.step("Click the Amount field in the Transfer Credits to Team dialog", async () => {
    const amountInput = page.getByRole('spinbutton', { name: 'Amount', exact: true });
    await expect(amountInput).toHaveCount(1);
    await amountInput.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwh0kdlk00
await leapwork.step("Fill the Amount field with 100", async () => {
    const amountInput = page.locator('#account-panel-transfer-amount-input');
    await expect(amountInput).toHaveCount(1);
    await amountInput.fill('100');
}, { action: "input" });

// ai-studio-step-id: pwi3237j00
await leapwork.step("Click the Transfer button in the Transfer Credits to Team dialog", async () => {
    const transferButton = page.locator('button.credit-transfer-popup-button.credit-transfer-popup-button-primary', { hasText: 'Transfer' });
    await transferButton.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwicbxoo00
await leapwork.step("Right-click the Credit Team option", async () => {
    const target = page.locator('.explorer-list').getByText('Credit Team', { exact: true });
            await target.click({ button: 'right', force: true });
}, { action: "click" });

// ai-studio-step-id: pw19p5ny30
await leapwork.step("Click Delete in the team context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click"});

// ai-studio-step-id: pw11w2bna0
await leapwork.step("Click the Transfer and delete team button", async () => {
    // Click button "Transfer and delete team"
    await page.getByRole('button', { name: 'Transfer and delete team' }).click();
}, { action: "click" });

// ai-studio-step-id: e9c16835
await leapwork.step("Use test case: Recover Asset", async () => {
    return await RecoverAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });
