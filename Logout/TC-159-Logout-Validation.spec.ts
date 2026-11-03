import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";

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
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
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

// ai-studio-step-id: pw1cd9amb0
await leapwork.step("Validate that the Leapwork Play page shows \"Log in to continue\"", async () => {
    // Assert heading "Log in to continue" contains "Log in to continue"
    await expect(page.getByRole('heading', { name: 'Log in to continue' })).toContainText("Log in to continue");
}, { action: "validate", relativeXpath: ".//div/section/div/div/header/h1" });
