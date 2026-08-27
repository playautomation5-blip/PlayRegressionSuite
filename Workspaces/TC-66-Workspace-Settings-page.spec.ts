import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";


//This test case is not added in the RL as of now 
//We can add workspace category to this tc once self-service-billing FF is turned on, on prod
//It will be auto added in the TC once category is added

leapwork.variables.set("userId", "user_34");

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});


// ai-studio-step-id: 2c34f551
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw878z3900
await leapwork.step(`Click the account button`, async () => {
    // Click span
    await page.locator('.brandbar-account-summary').click();
}, { action: "click" });

// ai-studio-step-id: pwje6hci00
await leapwork.step("Click the Current plan button in Your Subscription", async () => {
    await page.locator('.plan-current-title').click();
}, { action: "click", relativeXpath: ".//div/div[3]/div[1]/div[3]/div[2]/div[1]" });

// ai-studio-step-id: pwzkcr4500
await leapwork.step("Validate the Settings tab shows 'Settings' on the Leapwork Play settings page", async () => {
    // Assert span contains "Settings"
    await expect(page.getByRole('button', { name: 'Settings close' })).toContainText("Settings");
}, { action: "validate" });

