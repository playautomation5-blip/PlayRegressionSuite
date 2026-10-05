import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { AddSetting } from "@assets/Team configuration/Utilities/Add Setting";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";

leapwork.variables.set("settingKey", "enableSelfHeal", leapwork.storage.LOCAL);
const lw__settingKey = leapwork.variables.get("settingKey", leapwork.storage.LOCAL) as string;

leapwork.variables.set("value", "false", leapwork.storage.LOCAL);
const lw__value = leapwork.variables.get("value", leapwork.storage.LOCAL) as string;

leapwork.variables.set("settingKey", "enableSelfHeal", leapwork.storage.LOCAL);
leapwork.variables.set("settingValue", "true", leapwork.storage.LOCAL);

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const fileId = "FL-9"
const testCaseName = "Self heal enabled"

leapwork.variables.set("fileId", fileId);
leapwork.variables.set("testCasesNames", [testCaseName]);
leapwork.variables.set("importType", "tests");
leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");
leapwork.variables.set("teamName", teamName);


// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwogmnx200
await leapwork.step("Click the Automation Account (Personal) account menu", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]" });

// ai-studio-step-id: pw9e74gb00
await leapwork.step("Click Account and settings to open the workspace settings panel", async () => {
    // Click span
    await page.getByText('Account and settings').click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[3]/div[2]/div[10]/span" });

// ai-studio-step-id: pw1e5vq6w0
await leapwork.step("Click Workspace settings in the settings navigation", async () => {
    // Click button "Workspace settings"
    await page.getByRole('button', { name: 'Workspace settings' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[1]/div/nav/button[2]" });



// ai-studio-step-id: pwgehptg00
await leapwork.step("Delete all settings", async () => {
    const buttonLocator = page.locator('.kv-settings-action-button');
  // Keep looping as long as at least one button is visible
  while (await buttonLocator.first().isVisible()) {
    // Click the first available button
    await buttonLocator.first().click();
    await page.getByText('Delete setting').click();
    await page.getByRole('button', { name: 'Delete' }).click();
  }
}, { action: "click", relativeXpath: ".//div[6]/div[5]/div/div[3]/button/span" });

// ai-studio-step-id: pw1sb70p20
await leapwork.step("Click the + Add setting button.", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add setting' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/div[3]/button/span" });

// ai-studio-step-id: pw1upo4ij0
await leapwork.step("Click the “Setting key” field on the Leapwork Play settings page", async () => {
    // Click textbox "Setting key"
    await page.getByRole('textbox', { name: 'Setting key' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[2]/div[2]/span[1]/input" });

// ai-studio-step-id: pw1w9u3iy0
await leapwork.step(`Fill the Setting key field with "${lw__settingKey}"`, async () => {
    // Fill textbox "Setting key"
    await page.getByRole('textbox', { name: 'Setting key' }).fill(String(lw__settingKey));
}, { action: "input", relativeXpath: ".//div/div/div[2]/div[2]/span[1]/input" });

// ai-studio-step-id: pw1q4btev0
await leapwork.step("Press Tab on the Leapwork Play settings page", async () => {
    // Press Tab on element
    await page.keyboard.press("Tab");
}, { action: "keydown" });

// ai-studio-step-id: pw1jk7n080
await leapwork.step(`Fill the Value field for enableSelfHeal with "${lw__value}"`, async () => {
    // Fill textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).fill(String(lw__value));
}, { action: "input", relativeXpath: ".//div/div/div[2]/div[2]/span[2]/input" });

// ai-studio-step-id: pwoz7th100
await leapwork.step("Click Save for the enableSelfHeal workspace setting", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[2]/div[2]/span[3]/button" });

// ai-studio-step-id: pwdd6ytd00
await leapwork.step("Use test case: Add Setting", async () => {
    return await AddSetting();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1znhxi00
await leapwork.step("Validate the team settings error on Leapwork Play page.", async () => {
    // Assert paragraph contains "Self-healing cannot be enabled for a team while workspace self-healing is disabled."
    await expect(page.getByText('Self-healing cannot be')).toContainText("Self-healing cannot be enabled for a team while workspace self-healing is disabled.");
}, { action: "validate", relativeXpath: ".//div/div[2]/div[6]/div[5]/div/p" });

// ai-studio-step-id: pw1jetifs0
await leapwork.step("Use test case: Import Tests or Playwright", async () => {
    return await ImportTestsOrPlaywright();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1x8maw90
await leapwork.step("Click the Playwright button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Playwright' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[2]/span/span" });

// ai-studio-step-id: pw1riyau20
await leapwork.step("Validate the Leapwork Play page shows self-healing is disabled at the workspace level", async () => {
    // Assert div contains "Self-healing is enabled in this Playwright test case or one of its steps, but it is disabled at the workspace level. It will remain disabled until the upper-level setting is enabled."
    await expect(page.getByText('Self-healing is enabled in')).toContainText("Self-healing is enabled in this Playwright test case or one of its steps, but it is disabled at the workspace level. It will remain disabled until the upper-level setting is enabled.");
}, { action: "validate", relativeXpath: ".//div[2]/div[2]/div/div[2]/div/div[1]" });



// ai-studio-step-id: pwmzhxgp00
await leapwork.step("Click the Browser tab in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Browser' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[1]/span/span" });

// ai-studio-step-id: pwo9jk5000
await leapwork.step("Click Connect to connect to the Google Chromium browser in North Europe (Ireland)", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div[1]/div[3]/button" });

// ai-studio-step-id: pwa0riyr00
await leapwork.step("Click the Run button to run the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]", timeoutMs: 10000 });



// ai-studio-step-id: pwedutng00
await leapwork.step("Validate on Leapwork Play that the “Oat & Aloe Wash” product details dialog is displayed", async () => {
    // Assert div contains "expect(locator).toHaveCount(expected) failed Locator: getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) Expected: 1 Received: 0 Timeout: 5000ms Call log: - Expect "toHaveCount" getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) with timeout 5000ms - waiting for getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) 14 × locator resolved to 0 elements - unexpected value "0""
    await expect(page.locator('#root').getByText('expect(locator).toHaveCount(')).toContainText("expect(locator).toHaveCount(expected) failed\n\nLocator:  getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true })\nExpected: 1\nReceived: 0\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveCount\" getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) with timeout 5000ms\n  - waiting for getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true })\n    14 × locator resolved to 0 elements\n       - unexpected value \"0\"");
}, { action: "validate", relativeXpath: ".//div[2]/div[1]/div[3]/div/div[3]/div", timeoutMs: 30000 });

// ai-studio-step-id: pw1ek4m1b0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
