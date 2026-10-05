import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";
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


const userId = "reg_2";
const fileId = "FL-8"
const testCaseName = "Microsoft Login"
//const password = `test-play-`;

leapwork.variables.set("userId", userId);
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("fileId", fileId);
leapwork.variables.set("testCasesNames", [testCaseName]);
leapwork.variables.set("importType", "tests");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1vxgtlu0
await leapwork.step("Use test case: Import Tests or Playwright", async () => {
    return await ImportTestsOrPlaywright();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwiqz3dz00
await leapwork.step("Click the Connect button for the Google Chromium browserത്തിനു", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[1]/div[1]/div[3]/button" });

// ai-studio-step-id: pwxzhpko00
await leapwork.step("Click the Run button to execute the Microsoft Login test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
    
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]", timeoutMs: 30000 });

// ai-studio-step-id: pw1dewdi70
await leapwork.step("Validate the failure status of 4th step", async () => {
    // Assert div contains "Cannot read properties of undefined (reading 'startsWith')"
    await page.waitForTimeout(30000);
    const failedStep = page.locator('.testcase-step.step-failed');
  await expect(failedStep).toBeVisible();

}, { action: "validate", relativeXpath: ".//div[2]/div[1]/div[4]/div/div[2]/div" });

// ai-studio-step-id: pw1ciil360
await leapwork.step("Click the Record button", async () => {
    // Click button "Record"
    await page.getByRole('button', { name: 'Record' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Record\"]" });

// ai-studio-step-id: pwijafsp00
await leapwork.step("Click Stop recording on the Leapwork Play recording toolbar", async () => {
    // Click button "Stop recording"
    await page.getByRole('button', { name: 'Stop recording' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Stop recording\"]" });


// ai-studio-step-id: pwi9esy000
await leapwork.step("Validate the failure status of 4th step", async () => {
    
const failedStep = page.locator('.testcase-step.step-failed');
await expect(failedStep).not.toBeVisible();

}, { action: "validate", relativeXpath: ".//div[2]/div[1]/div[4]/div/div[2]/div" });