import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("teamName", "Adapter");
leapwork.variables.set("userId", "user_52");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("assetName", "External adapter");
leapwork.variables.set("assetType", "New recording adapter");

// ai-studio-step-id: pwb5guge00
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("assetName", "External adapter TC");
leapwork.variables.set("assetType", "New test case");

// ai-studio-step-id: pwjj1vap00
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwww55sg00
await leapwork.step("Click the Collapse chat button in the Leapwork Play interface", async () => {
    // Click button "Collapse chat"
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click", continueOnFailure: true, enableSelfHeal: false, timeoutMs: 5000 });

// ai-studio-step-id: pwg3x6mx00
await leapwork.step("Click the Recording adapter dropdown and select “Use team adapter / built-in default”", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Recording adapter' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div/div[2]/div/button[@aria-label=\"Recording adapter\"]/span[1]" });

// ai-studio-step-id: pw1amzt800
await leapwork.step("Click the Recording adapter dropdown and select External adapter (TS-1)", async () => {
    // Click span
    await page.getByText('External adapter (TS-1)').click();
}, { action: "click", relativeXpath: "//*[@id=\"fluent-option_r_f_\"]/span[2]" });

// ai-studio-step-id: pwr77lrt00
await leapwork.step("Validate the Recording adapter on Leapwork Play shows \"External adapter (TS-1)\"", async () => {
    // Assert span contains "External adapter (TS-1)"
    await expect(page.getByRole('combobox', { name: 'Recording adapter' })).toContainText("External adapter (TS-1)");
}, { action: "validate", relativeXpath: ".//div[2]/div/div[2]/div/button[@aria-label=\"Recording adapter\"]/span[1]" });
