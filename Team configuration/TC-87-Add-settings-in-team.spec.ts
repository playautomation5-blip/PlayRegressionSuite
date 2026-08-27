import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("settingKey", "newTimeoutMs", leapwork.storage.LOCAL);
const lw__settingKey = leapwork.variables.get("settingKey", leapwork.storage.LOCAL) as string;

leapwork.variables.set("value", "10000", leapwork.storage.LOCAL);
const lw__value = leapwork.variables.get("value", leapwork.storage.LOCAL) as string;

leapwork.variables.set("value2", "100000", leapwork.storage.LOCAL);
const lw__value2 = leapwork.variables.get("value2", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_53");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: 5662571b
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: b1fbf60a
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// await leapwork.step(`Double-click "${teamName}"`, async () => {
//     // Double-click "team 99509"
//     await page.getByText(teamName).dblclick();
// }, { action: "click", });

// ai-studio-step-id: pw10ox4w00
await leapwork.step("Double-click the team 74800 item in the explorer pane", async () => {
    // Double-click "team 74800"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick", relativeXpath: ".//div[2]/div[2]/div[2]/div[1]/div/span[3]" });

// ai-studio-step-id: pw11tie5l0
await leapwork.step("Click the \"+ Add setting\" button in the Settings section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add setting' }).click();
}, { action: "click", });

// ai-studio-step-id: pw1jyxkao0
await leapwork.step(`Fill the Setting key field with "${lw__settingKey}"`, async () => {
    // Fill textbox "Setting key"
    await page.getByRole('textbox', { name: 'Setting key' }).fill(String(lw__settingKey));
}, { action: "input", });

// ai-studio-step-id: pwebte8f00
await leapwork.step("Click the Value field for the newTimeoutMs setting", async () => {
    // Click textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).click();
}, { action: "click", });

// ai-studio-step-id: pwc7e61k00
await leapwork.step(`Fill the Value field for the newTimeoutMs setting with ${lw__value}`, async () => {
    // Fill textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).fill(String(lw__value));
}, { action: "input", });

// ai-studio-step-id: pw1iowbs50
await leapwork.step("Click Save for the newTimeoutMs setting", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click", });

// ai-studio-step-id: pw34uxog00
await leapwork.step("Validate the newTimeoutMs setting equals “newTimeoutMs” on Leapwork Play", async () => {
    // Assert span contains "newTimeoutMs"
    await expect(page.getByText('newTimeoutMs')).toContainText("newTimeoutMs");
}, { action: "validate", });

// ai-studio-step-id: pweww5yd00
await leapwork.step("Validate that newTimeoutMs is set to \"10000\" on the Leapwork Play page", async () => {
    // Assert span contains "10000"
    await expect(page.getByText('10000')).toContainText("10000");
}, { action: "validate", });

// ai-studio-step-id: pw17dd49z0
await leapwork.step("Click the More actions button for newTimeoutMs.", async () => {
    // Click button "More actions for newTimeoutMs"
    await page.getByRole('button', { name: 'More actions for newTimeoutMs' }).click();
}, { action: "click", });

// ai-studio-step-id: pwrwrqs600
await leapwork.step("Click Edit setting in the Settings section", async () => {
    // Click div
    await page.getByText('Edit setting').click();
}, { action: "click", });

// ai-studio-step-id: pwgxsnpd00
await leapwork.step("Click the Value field for newTimeoutMs.", async () => {
    // Click textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).click();
}, { action: "click", });

// ai-studio-step-id: pw1006uuu0
await leapwork.step(`Fill the Value field for newTimeoutMs with ${lw__value2}`, async () => {
    // Fill textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).fill(String(lw__value2));
}, { action: "input", });

// ai-studio-step-id: pw1bzkf9b0
await leapwork.step("Click Save for the newTimeoutMs team setting", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click", });

// ai-studio-step-id: pwjnjate00
await leapwork.step("Validate the newTimeoutMs setting on the Leapwork Play page equals \"newTimeoutMs\"", async () => {
    // Assert span contains "newTimeoutMs"
    await expect(page.getByText('newTimeoutMs')).toContainText("newTimeoutMs");
}, { action: "validate", });

// ai-studio-step-id: pwy0fwan00
await leapwork.step("Validate that the newTimeoutMs setting shows \"100000\" on the Leapwork Play page", async () => {
    // Assert span contains "100000"
    await expect(page.getByText('100000')).toContainText("100000");
}, { action: "validate", });

// ai-studio-step-id: pwfpjkki00
await leapwork.step("Click the More actions button for newTimeoutMs set to 100000", async () => {
    // Click button "More actions for newTimeoutMs"
    await page.getByRole('button', { name: 'More actions for newTimeoutMs' }).click();
}, { action: "click", });

// ai-studio-step-id: pwnuxvnr00
await leapwork.step("Click Delete setting for the newTimeoutMs team setting", async () => {
    // Click div
    await page.getByText('Delete setting').click();
}, { action: "click", });

// ai-studio-step-id: pwe7vw0000
await leapwork.step("Click Delete to remove the team setting", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click", });

// ai-studio-step-id: pw1jylhwo0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });