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


leapwork.variables.set("userId", "user_36");
leapwork.variables.set("teamName", teamName);
// leapwork.variables.set("assetType", "New test case");
// leapwork.variables.set("assetName", "Tc");
// leapwork.variables.set("renamedAssetName", "");

const userId = "reg_12";
const fileId = "FL-5"
const testCaseName = "XpathTC"

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
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]" });

// ai-studio-step-id: pw1guxq120
await leapwork.step("Validate that the Leapwork Play page shows \"XPath\" for the Leap & Leash Chicken Kibble details step", async () => {
    // Assert span contains "XPath"
    await page.waitForTimeout(15000);
    await expect(page.getByLabel('Click View details for Leap').getByText('XPath')).toContainText("XPath");
}, { action: "validate", relativeXpath: ".//div[1]/div/div[1]/div[3]/div[@aria-label=\"Click View details for Leap & Leash Chicken Kibble ($28.00)\"]/span[2]", timeoutMs: 20000 });

// ai-studio-step-id: pw94glp100
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });