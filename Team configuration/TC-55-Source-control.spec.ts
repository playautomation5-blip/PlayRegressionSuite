import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.variables.set("myGithubConnector", "connector", leapwork.storage.LOCAL);
const lw__myGithubConnector = leapwork.variables.get("myGithubConnector", leapwork.storage.LOCAL) as string;

leapwork.variables.set("ownerOrganizationWorkspace", "leapwork", leapwork.storage.LOCAL);
const lw__ownerOrganizationWorkspace = leapwork.variables.get("ownerOrganizationWorkspace", leapwork.storage.LOCAL) as string;

leapwork.variables.set("personalAccessToken", "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", leapwork.storage.LOCAL);
const lw__personalAccessToken = leapwork.variables.get("personalAccessToken", leapwork.storage.LOCAL) as string;

leapwork.variables.set("myGithubConnector2", "connector-edited", leapwork.storage.LOCAL);
const lw__myGithubConnector2 = leapwork.variables.get("myGithubConnector2", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_21");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: a343808a
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 45d0e6bb
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw1o7v1u40
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    const loc = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await loc.waitFor({ state: 'visible' });
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});

// ai-studio-step-id: pw13fqp000
await leapwork.step("Click the + New connector button", async () => {
    // Click span
    await page.getByRole('button', { name: '+ New connector' }).click();
}, { action: "click" });

// ai-studio-step-id: pwgacctc00
await leapwork.step("Click the Name field in the New connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pwyapl4100
await leapwork.step(`Fill the Name field with "\${lw__myGithubConnector}" in the New ${lw__myGithubConnector} dialog`, async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector));
}, { action: "input" });

// ai-studio-step-id: pw2i87pg00
await leapwork.step("Click the Org field in the New connector dialog", async () => {
    // Click textbox "Org Field help"
    await page.getByRole('textbox', { name: 'Org Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1xgxj770
await leapwork.step(`Fill the Org field with "${lw__ownerOrganizationWorkspace}"`, async () => {
    // Fill textbox "Org Field help"
        await page.getByRole('textbox', { name: 'Org Field help' }).fill(String(lw__ownerOrganizationWorkspace));
}, { action: "input" });

// ai-studio-step-id: pw1cx7w6g0
await leapwork.step("Click the Token field in the New connector dialog", async () => {
    // Click textbox "Token Field help"
    await page.getByRole('textbox', { name: 'Token Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1egzcy70
await leapwork.step("Fill the Token field with the personal access token", async () => {
    // Fill textbox "Token Field help"
        await page.getByRole('textbox', { name: 'Token Field help' }).fill(String(lw__personalAccessToken));
}, { action: "input" });

// ai-studio-step-id: pw19xop300
await leapwork.step("Click the Test connection button in the New connector form", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pw80347800
await leapwork.step("Validate that Leapwork AI Studio shows \"Connection succeeded.\"", async () => {
    // Assert paragraph contains "Connection succeeded."
    await expect(page.getByText('Connection succeeded.')).toContainText("Connection succeeded.");
}, { action: "validate" });

// ai-studio-step-id: pw1nt0v6j0
await leapwork.step("Click the Save button in the New connector section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1jbnika0
await leapwork.step("Click the Edit button for the GitHub connector", async () => {
    // Click span
    await page.getByRole('button', { name: 'Edit' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1outnvr0
await leapwork.step("Click the Name field in the Edit connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pwk0zxcc00
await leapwork.step(`Fill the Name field in the Edit connector dialog with "${lw__myGithubConnector2}"`, async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector2));
}, { action: "input" });

// ai-studio-step-id: pwso6qh700
await leapwork.step("Click the Save button in the Edit connector section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pwvm05hg00
await leapwork.step("Click the Delete button on the Leapwork AI Studio asset page", async () => {
    // Click span
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });


// ai-studio-step-id: pw1ff39fj0
await leapwork.step("Click Delete to confirm deleting the \"connector-edited\" connector", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).nth(1).click();
}, { action: "click" });

// ai-studio-step-id: ac938e3e
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
