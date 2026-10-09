import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_28");

// ai-studio-step-id: b309fc92
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 9IaAUHdN
await leapwork.step(`Click the account button`, async () => {
    // Click span
    await page.locator('.brandbar-account-summary').click();
}, { action: "click" });

// ai-studio-step-id: Bq3DoksX
await leapwork.step("Click the Log out link", async () => {
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: FA8qjA9c
await leapwork.step("Validate the Leapwork Play login page shows “Log in to continue” and login options", async () => {
    // Assert div contains "Log in to continueRemember meLog in with emailOrContinue with GithubContinue with GoogleContinue with MicrosoftContinue with AppleNeed an account?Create accountTerms and ConditionsPrivacy policy"
    await expect(page.locator('div').nth(3)).toContainText("Log in to continueRemember meLog in with emailOrContinue with GithubContinue with GoogleContinue with MicrosoftContinue with AppleNeed an account?Create accountTerms and ConditionsPrivacy policy");
}, { action: "validate", relativeXpath: "//*[@id=\"root\"]/div/div/div" });