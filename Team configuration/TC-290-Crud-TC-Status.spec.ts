import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { AddStatus } from "@assets/Utilities/Add Status";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "reg_3");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("text", "Regression Test Status", leapwork.storage.LOCAL);
const lw__text = leapwork.variables.get("text", leapwork.storage.LOCAL) as string;
leapwork.variables.set("statusName", "Test Status");
leapwork.variables.set("description", "This is a test status");
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "Status Check");

// ai-studio-step-id: 0213ee0a
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: e6ba87ff
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 774cc8cc
await leapwork.step("Use test case: Add Status", async () => {
    return await AddStatus();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 6vyExrtB
await leapwork.step("Click the More actions button for the \"Test Status\" row", async () => {
    await page.getByRole('button', { name: 'More actions for status Test' }).click();
}, { action: "click"});

// ai-studio-step-id: LuxjQZXp
await leapwork.step("Click the \"Edit status\" option in the context menu", async () => {
    await page.getByText('Edit status').click();
}, { action: "click" });

// ai-studio-step-id: L7aXkBJE
await leapwork.step("Click the Test Status text field", async () => {
    await page.getByRole('textbox').nth(1).click();
}, { action: "click" });

// ai-studio-step-id: sX2L0H6c
await leapwork.step(`Fill the Status name field with "${lw__text}"`, async () => {
    await page.getByRole('textbox').nth(1).fill(String(lw__text));
}, { action: "input"});

// ai-studio-step-id: epUxsMBa
await leapwork.step("Click the Save button for the Regression Test Status row", async () => {
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: fff98274
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: vI0UTQQ7
await leapwork.step("Click the Collapse chat button in the chat toolbar", async () => {
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click", continueOnFailure: true, enableSelfHeal: false, timeoutMs: 5000 });

// ai-studio-step-id: WGwt5Brv
await leapwork.step("Click the Status dropdown to open options", async () => {
    await page.getByRole('combobox', { name: 'Status' }).click();
}, { action: "click" });

// ai-studio-step-id: g0lmsAOW
await leapwork.step("Validate the dropdown option shows 'Regression Test Status' on the test case page", async () => {
    await expect(page.getByText('Regression Test Status')).toContainText("Regression Test Status");
}, { action: "validate" });

// ai-studio-step-id: pw1evz81e0
await leapwork.step(`Double-click the "${teamName}"  folder`, async () => {
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pw1eq7h5j0
await leapwork.step("Click the More actions button for the Regression Test Status row", async () => {
    await page.getByRole('button', { name: 'More actions for status Regression Test Status' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1drzdve0
await leapwork.step("Click the \"Delete status\" option from the context menu", async () => {
    await page.getByText('Delete status').click();
}, { action: "click" });

// ai-studio-step-id: pwz7t4iz00
await leapwork.step("Click the Delete button to confirm the irreversible deletion", async () => {
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click"});

// ai-studio-step-id: pw17okhzs0
await leapwork.step("Click the TC-1 Status Check tab", async () => {
    await page.getByRole('button', { name: 'TC-1 Status Check close' }).click();
}, { action: "click"});

// ai-studio-step-id: pwde46k900
await leapwork.step("Click the Status dropdown to open options", async () => {
    await page.getByRole('combobox', { name: 'Status' }).click();
}, { action: "click" });

// ai-studio-step-id: a699108d
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
