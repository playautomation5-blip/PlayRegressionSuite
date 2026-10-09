import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { AddSetting } from "@assets/Team configuration/Utilities/Add Setting";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";

leapwork.variables.set("settingKey", "enableSelfHeal", leapwork.storage.LOCAL);
leapwork.variables.set("settingValue", "false", leapwork.storage.LOCAL);

leapwork.variables.set("email", "xagaci3338@calirona.com", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

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


// ai-studio-step-id: pwgoz4yr00
await leapwork.step("Click the email field on the Leapwork Play login page", async () => {
    // Click textbox "email"
    await page.getByRole('textbox', { name: 'email' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pwpey5ow00
await leapwork.step(`Fill the email field with "${lw__email}"`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pwn5a8yt00
await leapwork.step("Set \"Remember me\" checkbox", async () => {
    // Check checkbox "Remember me"
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
}, { action: "click", relativeXpath: "//*[@id=\"checkbox-_r_3_\"]" });

// ai-studio-step-id: pw13hayd40
await leapwork.step("Click the “Log in with email” button on the Leapwork Play login form", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pwudwrxb00
await leapwork.step("Fill the Password field with the password.", async () => {
    // Fill textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).fill(leapwork.variables.getSecret("pwd_Am9RS1xu"));
}, { action: "input", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pw1tkye160
await leapwork.step("Click Sign in with password on the Leapwork Play login form", async () => {
    // Click button "Sign in with password"
    await page.getByRole('button', { name: 'Sign in with password' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

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

// ai-studio-step-id: pw1dvznir0
await leapwork.step("Validate the Leapwork Play page shows the “Oat & Aloe Wash” product details dialog", async () => {
    // Assert div contains "expect(locator).toHaveCount(expected) failed Locator: getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) Expected: 1 Received: 0 Timeout: 5000ms Call log: - Expect "toHaveCount" getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) with timeout 5000ms - waiting for getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) 14 × locator resolved to 0 elements - unexpected value "0""
    await expect(page.locator('#root').getByText('expect(locator).toHaveCount(')).toContainText("expect(locator).toHaveCount(expected) failed\n\nLocator:  getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true })\nExpected: 1\nReceived: 0\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveCount\" getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true }) with timeout 5000ms\n  - waiting for getByRole('dialog', { name: 'Oat & Aloe Wash', exact: true })\n    14 × locator resolved to 0 elements\n       - unexpected value \"0\"");
}, { action: "validate", relativeXpath: ".//div[2]/div[1]/div[3]/div/div[3]/div", timeoutMs: 30000 });

// ai-studio-step-id: pw10bjjs70
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
