import { leapwork } from "./leapwork";

import { teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RenameAsset } from "@assets/Utilities/Rename Asset";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "reg_10");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetType2", "New runlist");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");


// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwb5guge00
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1k3sc190
await leapwork.step("Use test case: Rename Asset", async () => {
    return await RenameAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw13hy6sg0
await leapwork.step("Validate the Owner shows \"Sakshamm Garg\" on the Leapwork Play page", async () => {
    // Assert span contains "Sakshamm Garg"
    await expect(page.getByText('Sakshamm Garg', { exact: true })).toContainText("Sakshamm Garg");
}, { action: "validate", continueOnFailure: true });
//
// ai-studio-step-id: pw19zkl7p0
await leapwork.step(`click the "${teamName}" folder on the Leapwork AI Studio page`, async () => {
    const regression = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await regression.click({force: true });
},{ action: "click"});

// ai-studio-step-id: pw12ecmn40
await leapwork.step("Click Create new in the asset menu", async () => {   
    const createNewButton = page.getByRole('button', { name: `Create new in ${teamName}`, exact: true });
    await createNewButton.click({ force: true });
});

// ai-studio-step-id: pw12a22zd0
await leapwork.step(`Click the "New runlist" option in the Create new menu`, async () => {
    // Click div
    await page.getByText("New runlist").click();
}, { action: "click" });
//
// ai-studio-step-id: pw7cij2m00
await leapwork.step("Right-click in empty space in the Explorer panel", async () => {
    await page.locator('.explorer-list').dispatchEvent('contextmenu');
});

// ai-studio-step-id: pw1gkb9xr0
await leapwork.step("Click the Critical (S1) and Major (S2) severity filter checkbox", async () => {
    // Click span
    await page.getByText('Critical (S1) and Major (S2)').click();
}, { action: "click" });

// ai-studio-step-id: pw16rebkb0
await leapwork.step("Click the Moderate (S3) severity checkbox under Selection criteria", async () => {
    // Click span
    await page.getByText('Moderate (S3)').click();
}, { action: "click" });

// ai-studio-step-id: pw1ppo2dw0
await leapwork.step("Click the Selection criteria section in the run list configuration.", async () => {
    // Click section
    await page.getByText('Selection criteriaRun nowThe').click();
}, { action: "click"});

// ai-studio-step-id: pw5vq5xt00
await leapwork.step("Validate the Author cell shows \"Sakshamm Garg\" for TC-1 renamed in Leapwork Play", async () => {
    // Assert cell "Sakshamm Garg" contains "Sakshamm Garg"
    await expect(page.getByRole('cell', { name: 'Sakshamm Garg' })).toContainText("Sakshamm Garg");
}, { action: "validate"});

// ai-studio-step-id: pw1i43ob40
await leapwork.step("Click the “Run now” button in the Selection criteria section", async () => {
    // Click button "Run now"
    await page.getByRole('button', { name: 'Run now' }).click();
}, { action: "click" });

// ai-studio-step-id: pwsuzr9x00
await leapwork.step("Validate the Run log shows “Sakshamm Garg” in the By column", async () => {
    // Assert span contains "Sakshamm Garg"
    await expect(page.getByText('Sakshamm Garg', { exact: true })).toContainText("Sakshamm Garg");
}, { action: "validate" });

// ai-studio-step-id: pw1sr7vuk0
await leapwork.step("Click the RL-1 run log section", async () => {
    // Click section
    await page.getByText('RL-1 · New runlistRun log1 RUN · 1 DAYRefresh0%— vs last weekRUN').click();
}, { action: "click" });

// ai-studio-step-id: pw1w45ukd0
await leapwork.step("Click the Trigger tab.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: pw143qolk0
await leapwork.step("Click the Run log tab in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Run log' }).click();
}, { action: "click" });

// ai-studio-step-id: pw54nkmz00
await leapwork.step("Click the Upcoming Runs tab.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1teoof60
await leapwork.step("Use test case: Delete Asset", async () => {
    return await DeleteAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1jylhwo0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
