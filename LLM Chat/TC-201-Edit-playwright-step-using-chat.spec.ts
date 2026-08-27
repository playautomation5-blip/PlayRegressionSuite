import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const userId = "reg_13";
const fileId = "FL-2"
const testCaseName = "Edit Step"
const updatedEmail = "updatedUsingChat@abc.com";

const askAnythingPrompt =
  `Update the email in step 1 to ${updatedEmail }`;
const updatedStepText =
  `await page.getByRole('textbox', { name: 'email' }).fill("${updatedEmail}");`;

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

// ai-studio-step-id: pw14uptbj0
await leapwork.step("Click the Explorer button", async () => {
  await page.getByRole('button', { name: 'Explorer', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwwcu44s00
await leapwork.step("Open the Playwright tab", async () => {
  await page.getByRole('button', { name: 'Playwright', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1yc6hxb0
await leapwork.step("Click the Expand chat button in Leapwork Play", async () => {
    // Click button "Expand chat"
    const expandChat = page.getByRole('button', { name: 'Expand chat' });
    if (await expandChat.isVisible()) {
      expandChat.click();
    }
}, { action: "click", relativeXpath: ".//div/div/div[2]/div/div/button[@aria-label=\"Expand chat\"]" });

// ai-studio-step-id: pw1rd1j300
await leapwork.step("Click the New chat button", async () => {
  await page.getByRole('button', { name: 'New chat', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwh5l37i00
await leapwork.step("Click the Ask anything text box", async () => {
  await page.getByRole('textbox', { name: 'Ask anything', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1vj4fwz0
await leapwork.step(`Enter the update request in the Ask anything field`, async () => {
  await page
    .getByRole('textbox', { name: 'Ask anything', exact: true })
    .fill(askAnythingPrompt);
}, { action: "input" });

// ai-studio-step-id: pwyqft5a00
await leapwork.step("Submit the update request by pressing Enter", async () => {
  await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pw1ucbc3p0
await leapwork.step("Wait for Thinking to appear and disappear in the chat", async () => {
  const thinkingLocator = page.getByText('Thinking', { exact: true });

  await thinkingLocator.waitFor({ state: "visible" });
  await expect(thinkingLocator).toBeVisible();
  await thinkingLocator.waitFor({ state: "hidden" });
}, { action: "validate", timeoutMs: 30000 });

// ai-studio-step-id: pwrbwpql00
await leapwork.step("Validate that the Approve button appears in the chat", async () => {
  const approveButton = page.getByRole('button', {
    name: 'Approve',
    exact: true,
  });

  await approveButton.waitFor({ state: "visible" });
  await expect(approveButton).toBeVisible();
}, { action: "validate", timeoutMs: 30000 });

// ai-studio-step-id: pwwvmmi600
await leapwork.step("Click the Approve button", async () => {
  await page
    .getByRole('button', { name: 'Approve', exact: true })
    .click();
}, { action: "click" });

// ai-studio-step-id: pw1tt59d50
await leapwork.step("Validate that the email step was updated", async () => {
  const updatedStepLocator = page.getByText(updatedStepText, { exact: true });

  await updatedStepLocator.waitFor({ state: "visible" });
  await expect(updatedStepLocator).toBeVisible();
}, { action: "validate", timeoutMs: 30000 });

// ai-studio-step-id: pwk80v8k00
await leapwork.step("Click the Explorer button", async () => {
  await page.getByRole('button', { name: 'Explorer', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwqsjnuk00
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
