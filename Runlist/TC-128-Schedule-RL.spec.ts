import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("userId", "user_31");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New Runlist");
leapwork.variables.set("assetName", "Runlist");

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: 5d456816
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 76572079
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 7b9a734c
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: MTzze8RH
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: LmAn0uvF
await leapwork.step("Click the Add trigger button in the Trigger section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Add trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: IyHZ3JbD
await leapwork.step("Click the API endpoint trigger option under Trigger", async () => {
    // Click div
    await page.getByText('API endpoint').click();
}, { action: "click" });

// ai-studio-step-id: lt1Rzc7k
await leapwork.step("Click the Create secret button in the Trigger section", async () => {
    // Click button "Create secret"
    await page.getByRole('button', { name: 'Create secret' }).click();
}, { action: "click" });

// ai-studio-step-id: voc9Ix48
await leapwork.step("Click the Add trigger button in the Trigger section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Add trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: JQNp9BDM
await leapwork.step("Click the Schedule option in the Trigger context menu", async () => {
    // Click div
    await page.getByText('Schedule').click();
}, { action: "click" });

// ai-studio-step-id: N9c64rn8
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: xANVRAsB
await leapwork.step("Validate that the Upcoming Runs section shows '5 upcoming runs' on the Leapwork Play page", async () => {
    // Assert div contains "5 upcoming runs"
    await expect(page.getByText('5 upcoming runs')).toContainText("5 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: CxfEqTw7
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pqyq0VMR
await leapwork.step("Click the API endpoint trigger options button", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).first().click();
}, { action: "click" });

// ai-studio-step-id: oSekd4JE
await leapwork.step("Click Disable in the trigger context menu", async () => {
    // Click div
    await page.getByText('Disable').click();
}, { action: "click" });

// ai-studio-step-id: pw13gbgz30
await leapwork.step("Validate the Trigger status shows 'Disabled' on the Leapwork Play page", async () => {
    // Assert div contains "Disabled"
    await expect(page.getByText('Disabled')).toContainText("Disabled");
}, { action: "validate" });

// ai-studio-step-id: pw15ofox40
await leapwork.step("Click the Trigger section menu button for the disabled API endpoint", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1blda5f0
await leapwork.step("Click the Enable option in the trigger context menu", async () => {
    // Click div
    await page.getByText('Enable', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw67zlns00
await leapwork.step("Validate the Trigger status shows 'Enabled' on the Leapwork Play asset page", async () => {
    // Assert div contains "Enabled"
    await expect(page.getByText('Enabled').first()).toContainText("Enabled");
}, { action: "validate" });

// ai-studio-step-id: PppAShaU
await leapwork.step("Click the API endpoint options menu button in the Trigger section", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).first().click();
}, { action: "click" });

// ai-studio-step-id: 1gmVuU22
await leapwork.step("Click the Delete option in the trigger context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click" });

// ai-studio-step-id: 2yuiaTld
await leapwork.step("Click the three-dot menu button for the enabled Schedule trigger", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).click();
}, { action: "click" });

// ai-studio-step-id: cqhtmHNB
await leapwork.step("Click Disable in the Trigger schedule menu", async () => {
    // Click div
    await page.getByText('Disable').click();
}, { action: "click" });

// ai-studio-step-id: pw1pouzoe0
await leapwork.step("Validate that the Schedule trigger status shows 'Disabled' on the Leapwork Play page", async () => {
    // Assert div contains "Disabled"
    await expect(page.getByText('Disabled')).toContainText("Disabled");
}, { action: "validate" });

// ai-studio-step-id: R9TON9NW
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: LnlJ1iUH
await leapwork.step("Validate that the Upcoming Runs section on Leapwork Play shows '0 upcoming runs'", async () => {
    // Assert div contains "0 upcoming runs"
    await expect(page.getByText('0 upcoming runs')).toContainText("0 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: cM2joY5f
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger' }).click();
}, { action: "click" });

// ai-studio-step-id: Q707zyEx
await leapwork.step("Click the Schedule options menu button in the Trigger section", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).click();
}, { action: "click" });

// ai-studio-step-id: tJd19KHa
await leapwork.step("Click Enable in the Trigger options menu", async () => {
    // Click div
    await page.getByText('Enable').click();
}, { action: "click" });

// ai-studio-step-id: pw1ge8o720
await leapwork.step("Validate the Trigger status shows 'Enabled' on the Leapwork Play page", async () => {
    // Assert div contains "Enabled"
    await expect(page.getByText('Enabled')).toContainText("Enabled");
}, { action: "validate" });

// ai-studio-step-id: YeXyapKN
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: E6fPJ1Cj
await leapwork.step("Validate that the Upcoming Runs section shows '5 upcoming runs' on the Leapwork Play page", async () => {
    // Assert div contains "5 upcoming runs"
    await expect(page.getByText('5 upcoming runs')).toContainText("5 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: nNrdlXdj
await leapwork.step("Click the Trigger button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Trigger', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: kgbEyU1m
await leapwork.step("Click the Schedule trigger menu button", async () => {
    // Click button "..."
    await page.getByRole('button', { name: '...' }).click();
}, { action: "click" });

// ai-studio-step-id: yR0SC0ay
await leapwork.step("Click Delete in the Trigger context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click" });

// ai-studio-step-id: SRkOJRYu
await leapwork.step("Click the Upcoming Runs button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Upcoming Runs' }).click();
}, { action: "click" });

// ai-studio-step-id: EdVAbAV8
await leapwork.step("Validate that Upcoming Runs shows '0 upcoming runs' on the Leapwork Play page", async () => {
    // Assert div contains "0 upcoming runs"
    await expect(page.getByText('0 upcoming runs')).toContainText("0 upcoming runs");
}, { action: "validate" });

// ai-studio-step-id: 08b94cd3
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });