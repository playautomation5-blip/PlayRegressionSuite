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

// ai-studio-step-id: 2c34f551
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw878z3900
await leapwork.step(`Click the account button`, async () => {
    // Click span
    await page.locator('.brandbar-account-summary').click();
}, { action: "click" });

// ai-studio-step-id: pwpa4m3400
await leapwork.step("Click Account and settings in the Leapwork Play workspace.", async () => {
    // Click span
    await page.getByText('Account and settings').click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[3]/div[2]/div[5]/span" });

// ai-studio-step-id: pw9ewv2t00
await leapwork.step("Click the Workspace settings button in the settings navigation.", async () => {
    // Click button "Workspace settings"
    await page.getByRole('button', { name: 'Workspace settings' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div/div/nav/button[1]" });

// ai-studio-step-id: pw1t6mikm0
await leapwork.step("Validate the Leapwork Play settings page shows “Workspace settings”", async () => {
    // Assert button "Workspace settings" contains "Workspace settings"
    await expect(page.getByRole('button', { name: 'Workspace settings' })).toContainText("Workspace settings");
}, { action: "validate", relativeXpath: ".//div[2]/div[2]/div/div/nav/button[1]" });

// ai-studio-step-id: pwvgd5sf00
await leapwork.step("Validate the Settings tab on the Leapwork Play settings page shows \"Settings\"", async () => {
    // Assert button "Settings" contains "Settings"
    await expect(page.getByRole('button', { name: 'Settings', exact: true })).toContainText("Settings");
}, { action: "validate", relativeXpath: ".//div/div/div/div/div[@aria-label=\"Workspace settings tabs\"]/button[1]" });

// ai-studio-step-id: pwmp2i2s00
await leapwork.step("Validate the Leapwork Play settings page shows the “Workspace settings” heading", async () => {
    // Assert heading "Workspace settings" contains "Workspace settings"
    await expect(page.getByRole('heading', { name: 'Workspace settings' })).toContainText("Workspace settings");
}, { action: "validate", relativeXpath: ".//div/div/div/div/div[2]/h2" });

// ai-studio-step-id: pw1njqz2b0
await leapwork.step("Validate the Leapwork Play settings page shows the \"+ Add setting\" button", async () => {
    // Assert span contains "+ Add setting"
    await expect(page.getByRole('button', { name: '+ Add setting' })).toContainText("+ Add setting");
}, { action: "validate", relativeXpath: ".//div/div/div[2]/div[2]/button/span" });
