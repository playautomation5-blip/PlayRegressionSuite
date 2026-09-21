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

leapwork.variables.set("userId", "user_8");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New knowledge base");
leapwork.variables.set("assetName", "created");


// ai-studio-step-id: b677067d
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 75da0946
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: e9d4a216
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw16fpzst0
await leapwork.step("Click the Upload document button (20 MB max)", async () => {
     await page.getByText('Upload document', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1gwrwt00
await leapwork.step("Click Blueprint", async () => {
    // Click span
    await page.getByRole('button', { name: 'Blueprint' }).click();
}, { action: "click" });

// ai-studio-step-id: pw69nc3r00
await leapwork.step("Click the Generate test case blueprints button", async () => {
    const generateBlueprintsButton = page.getByRole('button', { name: 'Generate test case blueprints', exact: true });
    await generateBlueprintsButton.click({ force: true });
});

// ai-studio-step-id: pw11nch3p0
await leapwork.step("Click the Clear plan button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Clear plan' }).click();
}, { action: "click" });

// ai-studio-step-id: 93aadf4c
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
