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

// ai-studio-step-id: pw1lcqfr00
await leapwork.step("Click Account and settings in the Leapwork Play workspace.", async () => {
    // Click span
    await page.getByText('Account and settings').click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[3]/div[2]/div[5]/span" });

// ai-studio-step-id: pw1i21ovg0
await leapwork.step("Click the Workspace settings button in the settings navigation.", async () => {
    // Click button "Workspace settings"
    await page.getByRole('button', { name: 'Workspace settings' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div/div/nav/button[1]" });

// ai-studio-step-id: pw1v19s350
await leapwork.step("Validate the Leapwork Play settings page shows “Workspace settings”", async () => {
    // Assert button "Workspace settings" contains "Workspace settings"
    await expect(page.getByRole('button', { name: 'Workspace settings' })).toContainText("Workspace settings");
}, { action: "validate", relativeXpath: ".//div[2]/div[2]/div/div/nav/button[1]" });

// ai-studio-step-id: pwkjay2a00
await leapwork.step("Validate the Settings tab on the Leapwork Play settings page shows \"Settings\"", async () => {
    // Assert button "Settings" contains "Settings"
    await expect(page.getByRole('button', { name: 'Settings', exact: true })).toContainText("Settings");
}, { action: "validate", relativeXpath: ".//div/div/div/div/div[@aria-label=\"Workspace settings tabs\"]/button[1]" });

// ai-studio-step-id: pw144j04v0
await leapwork.step("Validate the Leapwork Play settings page shows the “Workspace settings” heading", async () => {
    // Assert heading "Workspace settings" contains "Workspace settings"
    await expect(page.getByRole('heading', { name: 'Workspace settings' })).toContainText("Workspace settings");
}, { action: "validate", relativeXpath: ".//div/div/div/div/div[2]/h2" });

// ai-studio-step-id: pwbx55k600
await leapwork.step("Validate the Leapwork Play settings page shows the \"+ Add setting\" button", async () => {
    // Assert span contains "+ Add setting"
    await expect(page.getByRole('button', { name: '+ Add setting' })).toContainText("+ Add setting");
}, { action: "validate", relativeXpath: ".//div/div/div[2]/div[2]/button/span" });
