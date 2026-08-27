import { leapwork } from "./leapwork";

import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:false,
});
leapwork.variables.set("userId", "user_6");
leapwork.variables.set("assetType", "New runlist");

// ai-studio-step-id: pw1y4nxq40
await leapwork.step("Use test case: Create New Asset - Runlist", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 10000 });

// ai-studio-step-id: pw3xmduj00
await leapwork.step("Validate the Selection criteria shows Execution mode: \"Sequential\" on Leapwork Play", async () => {
    // Assert span contains "Sequential"
    await expect(page.getByText('Sequential')).toContainText("Sequential");
}, { action: "validate" });

// ai-studio-step-id: pw1l714cw0
await leapwork.step("Validate on Leapwork Play that “Continue if a test case fails” is checked", async () => {
    // Assert checkbox "Continue if a test case fails" is unchecked
    await expect(page.getByRole('checkbox', { name: 'Continue if a test case fails' })).toBeChecked();
}, { action: "validate" });