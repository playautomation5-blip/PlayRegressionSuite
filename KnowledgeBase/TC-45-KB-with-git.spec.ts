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


// ai-studio-step-id: pw1j34xxb0
await leapwork.step("Validate the Import from Git button shows 'Import from Git' on the Leapwork Play page", async () => {
    // Assert button "Import from Git" contains "Import from Git"
    await expect(page.getByRole('button', { name: 'Import from Git' })).toContainText("Import from Git");
}, { action: "validate" });

// ai-studio-step-id: pw1937h3g0
await leapwork.step("Click the Import from Git button in the Git repositories section", async () => {
    // Click button "Import from Git"
    await page.getByRole('button', { name: 'Import from Git' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1x0m9150
await leapwork.step("Validate that the Connector label shows 'Connector' on the Leapwork Play asset page", async () => {
    // Assert label contains "Connector"
    await expect(page.getByText('Connector', { exact: true })).toContainText("Connector");
}, { action: "validate" });

// ai-studio-step-id: pw1wxdsj60
await leapwork.step("Validate the \"Subpath (optional)\" label is visible on the Leapwork Play repository form", async () => {
    // Assert label contains "Subpath (optional)"
    await expect(page.getByText('Subpath (optional)')).toContainText("Subpath (optional)");
}, { action: "validate" });

// ai-studio-step-id: pw17zro3f0
await leapwork.step("Validate on Leapwork Play that the Include globs label shows 'Include globs (optional, one per line)'", async () => {
    // Assert label contains "Include globs (optional, one per line)"
    await expect(page.getByText('Include globs (optional, one')).toContainText("Include globs (optional, one per line)");
}, { action: "validate" });

// ai-studio-step-id: pw16rya600
await leapwork.step("Validate that the Exclude globs label shows 'Exclude globs (optional, one per line)'", async () => {
    // Assert label contains "Exclude globs (optional, one per line)"
    await expect(page.getByText('Exclude globs (optional, one')).toContainText("Exclude globs (optional, one per line)");
}, { action: "validate"});

// ai-studio-step-id: 39143cb9
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
