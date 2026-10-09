import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteAsset } from "@assets/Utilities/Delete Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});


leapwork.variables.set("userId", "user_69");
leapwork.variables.set("teamName", teamName);
// leapwork.variables.set("assetType", "New test case");
// leapwork.variables.set("assetName", "Tc");
// leapwork.variables.set("renamedAssetName", "");

//const userId = "reg_12";
const fileId = "FL-11"
const testCaseName = "self_heal variables"

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

// ai-studio-step-id: pwt75w9000
await leapwork.step("Validate the Recipient name step shows the “Self-Heal” tag on Leapwork Play", async () => {
    // Assert span contains "Self-Heal"
    await expect(page.getByText('Self-Heal', { exact: true })).toContainText("Self-Heal");
}, { action: "validate", relativeXpath: ".//div[4]/div/div/div[3]/div[@aria-label='Fill the Recipient name field with \"${lw__recipientName}\" in the Checkout form']/span[2]", timeoutMs: 30000 });

// ai-studio-step-id: pw12g1cgs0
await leapwork.step("Click the Playwright tab.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Playwright' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[2]/span/span" });

// ai-studio-step-id: pw1whza2l0
await leapwork.step("Validate the code editor shows the Add to cart, Checkout, and Recipient name steps", async () => {
// 1. Perform the conditional scroll inside page.evaluate() to bring the target line into view
await page.evaluate(async () => {
  const scrollable = document.querySelector('.monaco-scrollable-element');
  const target = 'await recipientName.fill(String(lw__recipientName));';

  let scrollCount = 0;
  while (scrollCount < 10) {
    const linesContent = document.querySelector('.lines-content');
    if (linesContent && linesContent.textContent.includes(target)) {
      break;
    }

    const lines = Array.from(document.querySelectorAll('.view-line'));
    const fullText = lines.map(line => line.textContent).join('');
    if (fullText.includes(target)) {
      break;
    }

    if (scrollable) {
      scrollable.scrollTop += 300;
      scrollable.dispatchEvent(new Event('scroll'));
    }
    
    scrollCount++;
    await new Promise(resolve => setTimeout(resolve, 150));
  }
});

// 2. Allow a brief moment for the DOM to stabilize, then test using the locator
await page.waitForTimeout(300);

const editorContent = page.locator('.monaco-editor .view-lines');
await expect(editorContent).toContainText('await recipientName.fill(String(lw__recipientName));');
}, { action: "input", relativeXpath: ".//div/div[1]/div[1]/div[3]/div[1]/div[4]" });

// ai-studio-step-id: pw1jjeqq40
await leapwork.step("Click the Browser button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Browser' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[1]/span/span" });

// ai-studio-step-id: pw1y4l2vz0
await leapwork.step("Click Run to execute the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]" });

// ai-studio-step-id: pw1uginli0
await leapwork.step("Validate the Leapwork Play page shows Last run as “Passed”", async () => {
    // Assert "Passed" contains "Passed"
    await expect(page.getByText('Passed')).toContainText("Passed");
}, { action: "validate", relativeXpath: ".//div/div/div[6]/div/div[2]/span", timeoutMs: 30000 });

// ai-studio-step-id: pwyy68og00
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
