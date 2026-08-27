import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("secretName", "secetr 1", leapwork.storage.LOCAL);
const lw__secretName = leapwork.variables.get("secretName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("secretValue", "tpo-secret", leapwork.storage.LOCAL);
const lw__secretValue = leapwork.variables.get("secretValue", leapwork.storage.LOCAL) as string;

leapwork.variables.set("newSecretValue", "edited", leapwork.storage.LOCAL);
const lw__newSecretValue = leapwork.variables.get("newSecretValue", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_23");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: 64004d9e
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: dabe3caa
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

// ai-studio-step-id: pw1eprw030
await leapwork.step("Click the More actions button for secret secetr 1", async () => {
    // Click button "More actions for secret secetr 1"
    await page.getByRole('button', { name: 'More actions for secret secetr' }).click();
}, { action: "click" });

// ai-studio-step-id: pwl9l4kp00
await leapwork.step("Click Edit secret in the Secrets context menu", async () => {
    // Click div
    await page.getByText('Edit secret').click();
}, { action: "click" });

// ai-studio-step-id: pwsel77200
await leapwork.step("Click the New secret value field for secetr 1", async () => {
    // Click textbox "New secret value"
    await page.getByRole('textbox', { name: 'New secret value' }).click();
}, { action: "click" });

// ai-studio-step-id: pwa0pzft00
await leapwork.step("Fill the New secret value field for secetr 1 with ${lw__newSecretValue}", async () => {
    // Fill textbox "New secret value"
        await page.getByRole('textbox', { name: 'New secret value' }).fill(String(lw__newSecretValue));
}, { action: "input" });

// ai-studio-step-id: pw8uhxju00
await leapwork.step("Click the Save button for the new secret value", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw2g2rcv00
await leapwork.step("Click the More actions button for secret secetr 1", async () => {
    // Click button "More actions for secret secetr 1"
    await page.getByRole('button', { name: 'More actions for secret secetr' }).click();
}, { action: "click" });

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

// ai-studio-step-id: pw1hn33xv0
await leapwork.step("Click the Delete button in the delete confirmation dialog", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });

// ai-studio-step-id: 73ce1cf8
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

