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

// ai-studio-step-id: pw1ixa58o0
await leapwork.step("Click the Test-28 Play (Personal) AI Builder account menu", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test-28 Play (Personal) AI' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]" });

// ai-studio-step-id: Bq3DoksX
await leapwork.step("Click the Log out link", async () => {
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: pw5z5k7t00
await leapwork.step("Click the “Log in to continue” heading on the login page", async () => {
    // Click heading "Log in to continue"
    await page.getByRole('heading', { name: 'Log in to continue' }).click();
}, { action: "click", relativeXpath: ".//div/section/div/div/header/h1" });

// ai-studio-step-id: pwpthkgu00
await leapwork.step("Validate the Leapwork Play login page shows “Log in to continue” and login options", async () => {
    // Assert div contains "Log in to continueRemember meLog in with emailOrContinue with GithubContinue with GoogleContinue with MicrosoftContinue with AppleNeed an account?Create accountTerms and ConditionsPrivacy policy"
    await expect(page.locator('div').nth(3)).toContainText("Log in to continueRemember meLog in with emailOrContinue with GithubContinue with GoogleContinue with MicrosoftContinue with AppleNeed an account?Create accountTerms and ConditionsPrivacy policy");
}, { action: "validate", relativeXpath: "//*[@id=\"root\"]/div/div/div" });