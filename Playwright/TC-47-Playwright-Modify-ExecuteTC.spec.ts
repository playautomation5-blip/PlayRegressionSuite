import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, RandomTeam2, teamName } from "@assets/Utilities/random-team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("userId", "user_56");
leapwork.variables.set("teamName", teamName);

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 30000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: 47523548
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1jvvd100
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1iuwt7p0
await leapwork.step("Click New team", async () => {
    // Click "New team"
     await page.locator(`div.explorer-item[title="${teamName}"]`).click();
}, { action: "click" });
 
// ai-studio-step-id: pw16nl49o0
await leapwork.step("Click Create new in the New team section", async () => {
    // Click button "Create new in New team"
    await page.getByRole('button', { name: `Create new in ${teamName}` }).click();
}, { action: "click" });

// ai-studio-step-id: 5BS8Ipxx
await leapwork.step("Click New test case in the Leapwork Play context menu", async () => {
    // Click div
    await page.getByText('New test case').click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[2]/div[2]/div[3]/div[1]" });

// ai-studio-step-id: mfVyrnjw
await leapwork.step("Click the Collapse chat button in the chat toolbar", async () => {
    // Click button "Collapse chat"
    const collapseChatButton = page.getByRole('button', { name: 'Collapse chat' });
    await collapseChatButton.click();
}, { action: "click", continueOnFailure: true, timeoutMs: 5000 });

// ai-studio-step-id: KoBPA2TB
await leapwork.step("Click the Playwright tab", async () => {
    // Click span
    await page.getByRole('button', { name: 'Playwright' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[2]/span/span" });

// ai-studio-step-id: pw1rzdtl50
await leapwork.step("Fill the Playwright monaco editor", async () => {

  const editor = page.locator(".monaco-editor");
  await editor.click();
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Delete");
  
  await page.keyboard.insertText(`import { leapwork } from "./leapwork";

  await leapwork.step("Open https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_file", async () => {
      await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_file');
  }, { action: "navigate" });`);

}, { action: "click" });

// ai-studio-step-id: oC7sc5Wy
await leapwork.step("Click the Browser tab.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Browser' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[1]/span/span" });

// ai-studio-step-id: rmU82AYW
await leapwork.step("Click the Connect button to connect to the Google Chromium browser", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[1]/div[1]/div[3]/button" });

// ai-studio-step-id: scfvblL9
await leapwork.step("Click the Run button in the Leapwork Play test case.", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]" });

// ai-studio-step-id: pwe8sceg00
await leapwork.step("Validate the step shows the W3Schools input-file URL on Leapwork Play", async () => {
    // Assert span contains "Open https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_file"
    await expect(page.getByText('Open https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_file', { exact: true })).toContainText("Open https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_file");
}, { action: "validate", relativeXpath: ".//div[1]/div/div/div[3]/div[@aria-label=\"Open https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_file\"]/span" });

// ai-studio-step-id: pw9q669t00
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
