import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";

leapwork.variables.set("email", "wofob63757@comzx.com", leapwork.storage.LOCAL);
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


leapwork.variables.set("userId", "user-69");
leapwork.variables.set("teamName", teamName);
// leapwork.variables.set("assetType", "New test case");
// leapwork.variables.set("assetName", "Tc");
// leapwork.variables.set("renamedAssetName", "");

const userId = "reg_12";
const fileId = "FL-7"
const testCaseName = "Xpath from variables"

leapwork.variables.set("fileId", fileId);
leapwork.variables.set("testCasesNames", [testCaseName]);
leapwork.variables.set("importType", "tests");



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

// ai-studio-step-id: pw1vxgtlu0
await leapwork.step("Use test case: Import Tests or Playwright", async () => {
    return await ImportTestsOrPlaywright();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwd9dbf900
await leapwork.step("Click Connect to launch the Google Chromium browser in North Europe (Ireland)", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div[1]/div[3]/button" });

// ai-studio-step-id: pw1bw2oe10
await leapwork.step("Click the Run button to execute the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]", timeoutMs: 10000 });

// ai-studio-step-id: pw1te4h8p0
await leapwork.step("Validate the Checkout form's Recipient name field step shows \"XPath\" in Leapwork Play", async () => {
    // Assert span contains "XPath"
    await expect(page.getByLabel('Fill the Recipient name field').getByText('XPath')).toContainText("XPath");
}, { action: "validate", relativeXpath: ".//div[5]/div/div/div[3]/div[@aria-label='Fill the Recipient name field with \"${lw__recipientName}\" in the Checkout form']/span[2]", timeoutMs: 30000 });

// ai-studio-step-id: pwbq3bwi00
await leapwork.step("Validate the email field step’s XPath equals “XPath” in Leapwork Play", async () => {
    // Assert span contains "XPath"
    await expect(page.getByLabel('Fill the Email address field').getByText('XPath')).toContainText("XPath");
}, { action: "validate", relativeXpath: ".//div[7]/div/div/div[3]/div[@aria-label='Fill the Email address field with \"${lw__emailAddress2}\"']/span[2]", timeoutMs: 30000 });

// ai-studio-step-id: pwdvosjz00
await leapwork.step("Validate the City field XPath equals \"XPath\" during checkout", async () => {
    // Assert span contains "XPath"
    await expect(page.getByLabel('Fill the City field with "${').getByText('XPath')).toContainText("XPath");
}, { action: "validate", relativeXpath: ".//div[9]/div/div/div[3]/div[@aria-label='Fill the City field with \"${lw__city}\" during checkout']/span[2]", timeoutMs: 30000 });



// ai-studio-step-id: pw94glp100
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
