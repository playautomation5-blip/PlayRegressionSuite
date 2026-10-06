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
    // Assert div contains "await page.getByRole('button', { name: 'Add to cart' }).click();}, { action: "click", relativeXpath: "//*[@id=\"productDialogContent\"]/div/div[2]/button" });await leapwork.step("Click the Checkout button in the cart footer.", async () => { // Click button "Checkout" await page.getByRole('button', { name: 'Checkout' }).click();}, { action: "click", relativeXpath: "//*[@id=\"checkoutButton\"]" });await leapwork.step(`Fill the Recipient name field with "${lw__recipientName}" in the Checkout form`, async () => { // [Leapwork Play self-heal preserved previous code] // // // // Fill textbox "Recipient name" // await page.getByRole('textbox', { name: 'Recasdaaasipient name' }).fill(String(lw__recipientName)); // [/Leapwork Play self-heal preserved previous code] const recipientName = page.getByRole('textbox', { name: 'Recipient name', exact: true }); await expect(recipientName).toHaveCount(1); await recipientName.fill(String(lw__recipientName));}, { action: "input", relativeXpath: "//*[@id=\"customerName\"]" });"
const editorContent = page.locator('.monaco-editor .view-lines');
await expect(editorContent).toContainText('await recipientName.fill(String(lw__recipientName));');
}, { action: "validate", relativeXpath: ".//div/div[1]/div[1]/div[3]/div[1]/div[4]" });

// ai-studio-step-id: pw94glp100
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
