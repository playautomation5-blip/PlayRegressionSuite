import { leapwork } from "./leapwork";

import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.variables.set("secretName", "Secret_", leapwork.storage.LOCAL);
const lw__secretName = leapwork.variables.get("secretName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("secretName2", "0077", leapwork.storage.LOCAL);
const lw__secretName2 = leapwork.variables.get("secretName2", leapwork.storage.LOCAL) as string;

leapwork.variables.set("secretName3", "_@#", leapwork.storage.LOCAL);
const lw__secretName3 = leapwork.variables.get("secretName3", leapwork.storage.LOCAL) as string;

leapwork.variables.set("secretName4", "secret_updated_1", leapwork.storage.LOCAL);
const lw__secretName4 = leapwork.variables.get("secretName4", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_68");
leapwork.variables.set("teamName", teamName);

// leapwork.variables.set("secretName", "Secret_1", leapwork.storage.LOCAL);
// const lw__secretName = leapwork.variables.get("secretName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("secretValue", "tpo-secret", leapwork.storage.LOCAL);
const lw__secretValue = leapwork.variables.get("secretValue", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1da509s0
await leapwork.step("Right-click in empty space in the Explorer panel", async () => {
    await page.locator('.explorer-list').dispatchEvent('contextmenu');
});

// ai-studio-step-id: pwygr5zb00
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});

// ai-studio-step-id: pwnvgug800
await leapwork.step("Click the + Add Secret button in the Secrets section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add Secret' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1muna1j0
await leapwork.step(`Fill the Secret name field with "${lw__secretName}"`, async () => {
    // Fill textbox "Secret name"
        await page.getByRole('textbox', { name: 'Secret name' }).fill(String(lw__secretName));
}, { action: "input" });

// ai-studio-step-id: pwqv99jm00
await leapwork.step("Click the Secret value field next to the secret name 'secetr 1'", async () => {
    // Click textbox "Secret value"
    await page.getByRole('textbox', { name: 'Secret value' }).click();
}, { action: "click" });

// ai-studio-step-id: pwn8kxup00
await leapwork.step(`Fill the Secret value field with "${lw__secretValue}"`, async () => {
    // Fill textbox "Secret value"
        await page.getByRole('textbox', { name: 'Secret value' }).fill(String(lw__secretValue));
}, { action: "input" });

// ai-studio-step-id: pwwpijro00
await leapwork.step("Click the Save button for the secret entry", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });



// ai-studio-step-id: pw1equt1b0
await leapwork.step("Click the \"More actions\" button for secret Secret_1 in the team secrets list", async () => {
    // Click button "More actions for secret Secret_1"
    await page.getByRole('button', { name: 'More actions for secret' }).click();
}, { action: "click"});

// ai-studio-step-id: pw4vxqyv00
await leapwork.step("Click the \"Edit secret\" option in the context menu", async () => {
    // Click span
    await page.getByText('Edit secret').click();
}, { action: "click" });

// ai-studio-step-id: pw8di30000
await leapwork.step("Click the Secret name field containing 'Secret_1'", async () => {
    // Click textbox "Secret name"
    await page.getByRole('textbox', { name: 'Secret name' }).click();
}, { action: "click"});

// ai-studio-step-id: pwxke7sb00
await leapwork.step(`Fill the Secret name field with "${lw__secretName2}"`, async () => {
    // Fill textbox "Secret name"
    await page.getByRole('textbox', { name: 'Secret name' }).fill(String(lw__secretName2));
}, { action: "input" });

// ai-studio-step-id: pwzcimng00
await leapwork.step("Press Enter to confirm the input on the Leapwork Play asset page", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pwarjcex00
await leapwork.step("Validate the Secrets section shows 'Secret name cannot contain only numbers or special characters'", async () => {
    // Assert paragraph contains "Secret name cannot contain only numbers or special characters. Please include at least one letter."
    await expect(page.getByText('Secret name cannot contain')).toContainText("Secret name cannot contain only numbers or special characters. Please include at least one letter.");
}, { action: "validate" });

// ai-studio-step-id: pwogl9pb00
await leapwork.step(`Fill the Secret name field with "${lw__secretName3}"`, async () => {
    // Fill textbox "Secret name"
    await page.getByRole('textbox', { name: 'Secret name' }).fill(String(lw__secretName3));
}, { action: "input"});

// ai-studio-step-id: pwzkvty000
await leapwork.step("Press Enter to confirm the input on the Leapwork Play asset page", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pw159kz000
await leapwork.step("Validate the Secrets section shows 'Secret name cannot contain only numbers or special characters'", async () => {
    // Assert paragraph contains "Secret name cannot contain only numbers or special characters. Please include at least one letter."
    await expect(page.getByText('Secret name cannot contain')).toContainText("Secret name cannot contain only numbers or special characters. Please include at least one letter.");
}, { action: "validate" });

// ai-studio-step-id: pw1f4ssvz0
await leapwork.step(`Fill the Secret name field with "${lw__secretName4}"`, async () => {
    // Fill textbox "Secret name"
    await page.getByRole('textbox', { name: 'Secret name' }).fill(String(lw__secretName4));
}, { action: "input" });

// ai-studio-step-id: pwoncrqw00
await leapwork.step("Press Enter to confirm the input on the Leapwork Play asset page", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pw2g2rcv00
await leapwork.step("Click the \"More actions\" button for secret Secret_1 in the team secrets list", async () => {
    // Click button "More actions for secret Secret_1"
    await page.getByRole('button', { name: 'More actions for secret' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1afpyo00
await leapwork.step("Click Delete secret in the secret actions menu", async () => {
    // Click div
    await page.getByText('Delete secret').click();
}, { action: "click" });

// ai-studio-step-id: pw1vcflxb0
await leapwork.step("Set \"I understand that this secret and its stored value will be deleted.\" checkbox", async () => {
    // Check checkbox "I understand that this secret and its stored value will be deleted."
    await page.getByRole('checkbox', { name: 'I understand that this secret' }).check();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: pwcw77w600
await leapwork.step("Click Delete to confirm deleting the secret", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ek4m1b0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

