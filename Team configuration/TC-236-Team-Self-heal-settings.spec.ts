import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { AddSetting } from "@assets/Team configuration/Utilities/Add Setting";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";

leapwork.variables.set("settingKey", "enableSelfHeal", leapwork.storage.LOCAL);
leapwork.variables.set("settingValue", "false", leapwork.storage.LOCAL);

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const fileId = "FL-10"
const testCaseName = "Self heal enabled"

leapwork.variables.set("fileId", fileId);
leapwork.variables.set("testCasesNames", [testCaseName]);
leapwork.variables.set("importType", "tests");
leapwork.variables.set("userId", "user-70");
leapwork.variables.set("teamName", teamName);


// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw91be7t00
await leapwork.step("Use test case: Add Setting", async () => {
    return await AddSetting();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1nets530
await leapwork.step("Use test case: Import Tests or Playwright", async () => {
    return await ImportTestsOrPlaywright();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwtbbj6z00
await leapwork.step("Click the Playwright button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Playwright' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[2]/span/span" });

// ai-studio-step-id: pw143aely0
await leapwork.step("Validate the Leapwork Play page shows self-healing is enabled but disabled at team level", async () => {
    // Assert div contains "Self-healing is enabled in this Playwright test case or one of its steps, but it is disabled at the team level. It will remain disabled until the upper-level setting is enabled."
    await expect(page.getByText('Self-healing is enabled in')).toContainText("Self-healing is enabled in this Playwright test case or one of its steps, but it is disabled at the team level. It will remain disabled until the upper-level setting is enabled.");
}, { action: "validate", relativeXpath: ".//div[2]/div[2]/div/div[2]/div/div[1]" });

// ai-studio-step-id: pw17jofh00
await leapwork.step("Click the Browser tab in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Browser' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[1]/span/span" });

// ai-studio-step-id: pw1dkxxv50
await leapwork.step("Click Connect to connect to the Google Chromium browser in North Europe (Ireland)", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div[1]/div[3]/button" });

// ai-studio-step-id: pwqxc9j200
await leapwork.step("Click the Run button to run the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]", timeoutMs: 10000 });

// ai-studio-step-id: pw1juvsc50
await leapwork.step("Validate the “Oat & Aloe Wash” product details dialog appears on Leapwork Play", async () => {
    // Assert div contains "Line 30: expect(locator).toHaveCount(expected) failed Locator: getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) Expected: 1 Received: 0 Timeout: 5000ms Call log: - Expect "toHaveCount" getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) with timeout 5000ms - waiting for getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) 14 × locator resolved to 0 elements - unexpected value "0""
    await expect(page.getByText('Line 30: expect(locator).')).toContainText("Line 30: expect(locator).toHaveCount(expected) failed\n\nLocator:  getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true })\nExpected: 1\nReceived: 0\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveCount\" getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) with timeout 5000ms\n  - waiting for getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true })\n    14 × locator resolved to 0 elements\n       - unexpected value \"0\"");
}, { action: "validate", relativeXpath: ".//div[2]/div[1]/div[3]/div/div[3]/div", timeoutMs: 30000 });

// ai-studio-step-id: pw10bjjs70
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
