import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});


leapwork.variables.set("userId", "user_50");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New knowledge base");
leapwork.variables.set("assetName", "created");

// ai-studio-step-id: b3d0cada
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: d1634b53
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 51766fe1
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwzdld5300
await leapwork.step("Validate the text shows 'Add connections' on the Leapwork Play page.", async () => {
    // Assert strong contains "Add connections"
    await expect(page.getByText('Add connections')).toContainText("Add connections");
}, { action: "validate", relativeXpath: ".//div[2]/div/div[2]/div/div[2]/strong" });

// ai-studio-step-id: pw1ccqh6k0
await leapwork.step("Click the Add connection combobox", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Add connection' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div/div[3]/div/button[@aria-label=\"Add connection\"]/span[1]" });

// ai-studio-step-id: pw15skxhf0
await leapwork.step("Validate the option shows 'Atlassian' on the Leapwork Play page.", async () => {
    // Assert span contains "Atlassian"
    await expect(page.getByText('Atlassian')).toContainText("Atlassian");
}, { action: "validate", relativeXpath: "//*[@id=\"fluent-option_r_5_\"]/span[2]/span" });

// ai-studio-step-id: pw1bsl35a0
await leapwork.step("Validate the option shows 'GitHub' on the Leapwork Play page", async () => {
    // Assert span contains "GitHub"
    await expect(page.getByText('GitHub')).toContainText("GitHub");
}, { action: "validate", relativeXpath: "//*[@id=\"fluent-option_r_6_\"]/span[2]/span" });

// ai-studio-step-id: pw1tv79p10
await leapwork.step("Validate that the button shows 'Create blueprint generator' on the Leapwork Play page.", async () => {
    // Assert button "Create blueprint generator" contains "Create blueprint generator"
    await expect(page.getByRole('button', { name: 'Create blueprint generator' })).toContainText("Create blueprint generator");
}, { action: "validate", relativeXpath: ".//div[2]/div/div[1]/div[2]/span[2]/button" });

// ai-studio-step-id: 39143cb9
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
