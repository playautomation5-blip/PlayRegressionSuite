import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { AddTag } from "@assets/Team configuration/Utilities/Add Tag";
import { Record } from "@assets/Test Case/Utilities/Record";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("userId", "user_30");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("envName", "Leapwork");
leapwork.variables.set("envUrl", "https://leapwork.com");
leapwork.variables.set("tagName", "Tag 1");
leapwork.variables.set("tagDescription", "This is a tag");

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("runlistName", "Runlist");
const lw__runlistName = leapwork.variables.get("runlistName") as string;

leapwork.variables.set("testcaseName", "Test Case");
const lw__testcaseName = "Test Case";

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwem1slo00
await leapwork.step("Use test case: Add Tag", async () => {
    return await AddTag();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("assetType", "New Runlist");
leapwork.variables.set("assetName", lw__runlistName);

// ai-studio-step-id: pwjj1vap00
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", lw__testcaseName)

// ai-studio-step-id: pw1tfaclk0
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwx585id00
await leapwork.step("Use test case: Record", async () => {
    return await Record();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwiz7nek00
await leapwork.step("Click the Select tags dropdown in the test case metadata panel", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Select tags$/ }).nth(3).click();
}, { action: "click", relativeXpath: ".//div[3]/div/div[2]/div/div/div" });

// ai-studio-step-id: pwu7g20b00
await leapwork.step("Click the Tag 1 option in the tag selection menu", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Tag 1$/ }).nth(1).click();
}, { action: "click", relativeXpath: ".//div/div[2]/div/div/div[2]/div" });

// ai-studio-step-id: pw74aurm00
await leapwork.step(`Click the "${lw__runlistName}" item in the explorer`, async () => {
    // Click "New runlist"
    await page.getByText(lw__runlistName).first().dblclick();
}, { action: "click" });

// ai-studio-step-id: pw1frcakx0
await leapwork.step("Click the Filter dropdown in the Selection criteria section", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Filter$/ }).nth(2).click();
}, { action: "click" });

// ai-studio-step-id: pw1naw8h50
await leapwork.step("Click the Filter option in the Selection criteria section", async () => {
    // Click div
    await page.getByText('Filter').nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pw1oo8d6i0
await leapwork.step("Click the Select tags option in the Selection criteria section", async () => {
    // Click span
    await page.getByText('Select tags').click();
}, { action: "click" });

// ai-studio-step-id: pw1m3sbdd0
await leapwork.step("Click the Tag 1 option in the Select tags dropdown", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Tag 1$/ }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pw14w407y0
await leapwork.step("Click the \"Critical (S1) and Major (S2)\" severity filter option", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Critical \(S1\) and Major \(S2\)$/ }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pw1xkifgz0
await leapwork.step("Click the Critical (S1) severity option in Selection criteria", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Critical \(S1\)$/ }).click();
}, { action: "click" });

// ai-studio-step-id: pwcis9qa00
await leapwork.step("Click the Major (S2) severity option in Selection criteria", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Major \(S2\)$/ }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: pw6b088r00
await leapwork.step("Validate that \"TC-1 Test Case\" appears in the Selected test cases table on Leapwork Play", async () => {
    // Assert span contains "TC-1 Test Case"
    await expect(page.getByText('TC-1 Test Case')).toContainText("TC-1 Test Case");
}, { action: "validate" });

// ai-studio-step-id: pw9ytjde00
await leapwork.step("Click the Run now button in the Selection criteria section", async () => {
    // Click button "Run now"
    await page.getByRole('button', { name: 'Run now' }).click();
}, { action: "click" });

// ai-studio-step-id: pwoklu1j00
await leapwork.step("Validate that the run status shows 'Pending' on the Leapwork Play run list", async () => {
    // Assert span contains "Pending"
    await expect(page.getByText('Pending')).toContainText("Pending");
}, { action: "validate" });

// ai-studio-step-id: pwcw1mlk00
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
