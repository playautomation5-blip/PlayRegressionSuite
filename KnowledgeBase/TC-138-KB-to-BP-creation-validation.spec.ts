import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
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

leapwork.variables.set("userId", "user_8");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New knowledge base");
leapwork.variables.set("assetName", "created");

// ai-studio-step-id: 07ba9fab
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: 3ac9da99
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: c0bc4bac
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwukxjlm00
await leapwork.step("Click the Upload document button (20 MB max)", async () => {
     await page.getByText('Upload document', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwawjtun00
await leapwork.step("Click the Create blueprint generator button", async () => {
    const createBlueprintGeneratorButton = page.getByRole('button', { name: 'Create blueprint generator', exact: true });
    await createBlueprintGeneratorButton.click({ force: true });
});

// ai-studio-step-id: pw1p87pmu0
await leapwork.step("Click the Generate test case blueprints button", async () => {
    const generateBlueprintsButton = page.getByRole('button', { name: 'Generate test case blueprints', exact: true });
    await generateBlueprintsButton.click({ force: true });
});

// ai-studio-step-id: 09wpGzbz
await leapwork.step("Validate that the selected blueprint name shows 'New blueprint generator' on Leapwork Play", async () => {
    // Assert "New blueprint generator" contains "New blueprint generator"
    await expect(page.getByText('New blueprint generator').first()).toContainText("New blueprint generator");
}, { action: "validate", relativeXpath: ".//div[2]/div[1]/div[2]/div[2]/div/span[4]" });

// ai-studio-step-id: OGVId4Au
await leapwork.step("Click the Clear plan button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Clear plan' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div/div[1]/button/span" });

// ai-studio-step-id: d4b7d031
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
