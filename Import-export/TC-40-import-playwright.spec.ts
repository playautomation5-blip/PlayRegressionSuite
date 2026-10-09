import { leapwork } from "./leapwork";

import { teamName } from "@assets/Utilities/random-team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";

leapwork.variables.set("email", "test-play-43@outlook.com", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("teamName", teamName);

await logInfo(leapwork.generateTOTP("wcmdl7bkddwddktm"))


// ai-studio-step-id: pw46dk8s00
await leapwork.step("Click the email field on the Leapwork Play login page", async () => {
    // Click textbox "email"
    await page.getByRole('textbox', { name: 'email' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pw1p0nxrx0
await leapwork.step(`Fill the email field with "${lw__email}"`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pwvsyx3q00
await leapwork.step("Click the “Log in with email” button on the Leapwork Play login form", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1k18k7p0
await leapwork.step("Click the Password field on the Leapwork Play login page", async () => {
    // Click textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pw1manfb20
await leapwork.step("Fill the Password field with the provided password", async () => {
    // Fill textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).fill(leapwork.variables.getSecret("pwd_SDyI73Pt"));
}, { action: "input", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pwmcg59700
await leapwork.step("Click the “Sign in with password” button on the Leapwork Play login form", async () => {
    // Click button "Sign in with password"
    await page.getByRole('button', { name: 'Sign in with password' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: 4e73fe4d
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 9eac61f4
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw18d3uub0
await leapwork.step("Right-click the \"${teamName}\" folder on the Leapwork AI Studio page", async () => {
    const regression = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await regression.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw10trlo80
await leapwork.step(`Click the Import submenu in the ${teamName} context menu`, async () => {
    // Click div
    await page.getByText('Import').click();
}, { action: "click" });

// ai-studio-step-id: pw1e376f50
await leapwork.step("Click Import Playwright in the Import submenu", async () => {
    // Click div
    await page.getByText('Import Playwright').click();
}, { action: "click" });

// ai-studio-step-id: pw1k62imk0
await leapwork.step("Click the Browse button to select Playwright files for import", async () => {
    // Click button "Browse"
    await page.getByRole('button', { name: 'Browse' }).click();
}, { action: "click" });

// ai-studio-step-id: pws62g0j00
await leapwork.step("Click the Cancel button in the Import Playwright tests dialog", async () => {
    // Click button "Cancel"
    await page.getByRole('button', { name: 'Cancel' }).click();
}, { action: "click" });

// ai-studio-step-id: 6ccd1cfb
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
