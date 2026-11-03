import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";

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
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
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

// ai-studio-step-id: pw1ewo74r0
await leapwork.step("Validate the Settings tab on the Leapwork Play settings page shows \"Workspace settings\"", async () => {
    // Assert button "Settings" contains "Settings"
    await expect(page.getByRole('button', { name: 'Workspace settings', exact: true })).toContainText("Workspace settings");
}, { action: "validate", relativeXpath: ".//div/div/div/div/div[@aria-label=\"Workspace settings tabs\"]/button[1]" });

// ai-studio-step-id: pw19tbjeq0
await leapwork.step("Validate that the Leapwork Play page displays the “Workspace settings” heading", async () => {
    // Assert heading "Workspace settings" contains "Workspace settings"
    await expect(page.getByRole('heading', { name: 'Workspace settings', exact: true })).toContainText("Workspace settings");
}, { action: "validate", relativeXpath: ".//div/div/div/div[1]/div/h2" });
// ai-studio-step-id: pw1jbrwuq0
await leapwork.step("Validate the Leapwork Play Workspace settings page shows the \"+ Add Settings\" button", async () => {
    // Assert button "+ Add Settings" contains "+ Add Settings"
    await expect(page.getByRole('button', { name: '+ Add Settings' })).toContainText("+ Add Settings");
}, { action: "validate", relativeXpath: ".//div/div/div/div/div[3]/button", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from + Add Settings", async () => {
//     // Get value from button "+ Add Settings"
//     const lw_value = (await page.getByRole('button', { name: '+ Add Settings' }).textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_addSettings", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div/div/div/div/div[3]/button" });
