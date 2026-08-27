import { leapwork } from "./leapwork";

import { RandomTeam2, RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.variables.set("secretName", "secetr 1", leapwork.storage.LOCAL);
const lw__secretName = leapwork.variables.get("secretName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("secretValue", "tpo-secret", leapwork.storage.LOCAL);
const lw__secretValue = leapwork.variables.get("secretValue", leapwork.storage.LOCAL) as string;

leapwork.variables.set("newSecretValue", "edited", leapwork.storage.LOCAL);
const lw__newSecretValue = leapwork.variables.get("newSecretValue", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_23");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: 78108104
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 7948999b
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw7cij2m00
await leapwork.step("Right-click in empty space in the Explorer panel", async () => {
    await page.locator('.explorer-list').dispatchEvent('contextmenu');
});

// ai-studio-step-id: pw1xk60ky0
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});

// ai-studio-step-id: pw12ayp3d0
await leapwork.step("Click the + Add Secret button in the Secrets section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add Secret' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1gczkg20
await leapwork.step(`Fill the Secret name field with "${lw__secretName}"`, async () => {
    // Fill textbox "Secret name"
        await page.getByRole('textbox', { name: 'Secret name' }).fill(String(lw__secretName));
}, { action: "input" });

// ai-studio-step-id: pw12tzo1v0
await leapwork.step("Click the Secret value field next to the secret name 'secetr 1'", async () => {
    // Click textbox "Secret value"
    await page.getByRole('textbox', { name: 'Secret value' }).click();
}, { action: "click" });

// ai-studio-step-id: pwdrcfao00
await leapwork.step(`Fill the Secret value field with "${lw__secretValue}"`, async () => {
    // Fill textbox "Secret value"
        await page.getByRole('textbox', { name: 'Secret value' }).fill(String(lw__secretValue));
}, { action: "input" });

// ai-studio-step-id: pw1ip6jn00
await leapwork.step("Click the Save button for the secret entry", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw7qm5xn00
await leapwork.step("Click the More actions button for secret secetr 1", async () => {
    // Click button "More actions for secret secetr 1"
    await page.getByRole('button', { name: 'More actions for secret secetr' }).click();
}, { action: "click" });

// ai-studio-step-id: pwb4281g00
await leapwork.step("Click Edit secret in the Secrets context menu", async () => {
    // Click div
    await page.getByText('Edit secret').click();
}, { action: "click" });

// ai-studio-step-id: pwwif2kf00
await leapwork.step("Click the New secret value field for secetr 1", async () => {
    // Click textbox "New secret value"
    await page.getByRole('textbox', { name: 'New secret value' }).click();
}, { action: "click" });

// ai-studio-step-id: pwl3l12k00
await leapwork.step("Fill the New secret value field for secetr 1 with ${lw__newSecretValue}", async () => {
    // Fill textbox "New secret value"
        await page.getByRole('textbox', { name: 'New secret value' }).fill(String(lw__newSecretValue));
}, { action: "input" });

// ai-studio-step-id: pw1azyifv0
await leapwork.step("Click the Save button for the new secret value", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1y12jv60
await leapwork.step("Click the More actions button for secret secetr 1", async () => {
    // Click button "More actions for secret secetr 1"
    await page.getByRole('button', { name: 'More actions for secret secetr' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1afpyo00
await leapwork.step("Click Delete secret in the secret actions menu", async () => {
    // Click div
    await page.getByText('Delete secret').click();
}, { action: "click" });

// ai-studio-step-id: vZIpGwT3
await leapwork.step("Set \"I understand that this secret and its stored value will be deleted.\" checkbox", async () => {
    // Check checkbox "I understand that this secret and its stored value will be deleted."
    await page.getByRole('checkbox', { name: 'I understand that this secret' }).check();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: yXBJ53by
await leapwork.step("Click Delete to confirm deleting the secret", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });

// ai-studio-step-id: 2c48f49f
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
