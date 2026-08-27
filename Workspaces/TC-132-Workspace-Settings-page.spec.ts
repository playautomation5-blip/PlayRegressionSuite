import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.variables.set("userId", "user_34");

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: 14c937e4
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: yG1Gu32t
await leapwork.step(`Click the account button`, async () => {
    // Click span
    await page.locator('.brandbar-account-summary').click();
}, { action: "click" });

// ai-studio-step-id: jBbBMya7
await leapwork.step("Click the Current plan button in Your Subscription", async () => {
    await page.locator('.plan-current-title').click();
}, { action: "click", relativeXpath: ".//div/div[3]/div[1]/div[3]/div[2]/div[1]" });


//Billing disabled as of now. 
// await leapwork.step("Validate the Settings tab shows 'Settings' on the Leapwork Play settings page", async () => {
//     // Assert span contains "Settings"
//     await expect(page.getByRole('button', { name: 'Settings close' })).toContainText("Settings");
// }, { action: "validate" });