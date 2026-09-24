import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";

leapwork.variables.set("myAtlassianConnector", "Atlassian", leapwork.storage.LOCAL);
const lw__myAtlassianConnector = leapwork.variables.get("myAtlassianConnector", leapwork.storage.LOCAL) as string;

leapwork.variables.set("yourCompanyAtlassianNet", "https://leapwork.atlassian.net/", leapwork.storage.LOCAL);
const lw__yourCompanyAtlassianNet = leapwork.variables.get("yourCompanyAtlassianNet", leapwork.storage.LOCAL) as string;

leapwork.variables.set("youEmailCom", "nina@leapwork.com", leapwork.storage.LOCAL);
const lw__youEmailCom = leapwork.variables.get("youEmailCom", leapwork.storage.LOCAL) as string;

leapwork.variables.set("lAIS", "LAIS", leapwork.storage.LOCAL);
const lw__lAIS = leapwork.variables.get("lAIS", leapwork.storage.LOCAL) as string;

leapwork.variables.set("eNG", "ENG", leapwork.storage.LOCAL);
const lw__eNG = leapwork.variables.get("eNG", leapwork.storage.LOCAL) as string;

leapwork.variables.set("teamName", teamName);

leapwork.variables.set("assetType", "New knowledge base");
leapwork.variables.set("assetName", "created");

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});
leapwork.variables.set("userId", "user_64");


// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwb5guge00
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1sb5m710
await leapwork.step("Validate that the \"Add connections\" heading is displayed on the knowledge base page", async () => {
    // Assert strong contains "Add connections"
    await expect(page.getByText('Add connections')).toContainText("Add connections");
}, { action: "validate" });

// ai-studio-step-id: pw1nzv5wy0
await leapwork.step("Validate the Add connection dropdown shows \"Add connection\"", async () => {
    // Assert span contains "Add connection"
    await expect(page.getByRole('combobox', { name: 'Add connection' })).toContainText("Add connection");
}, { action: "validate" });


// ai-studio-step-id: pwastky700
await leapwork.step("Click the Add connection dropdown", async () => {
    // Click combobox "Add connection"
    await page.getByRole('combobox', { name: 'Add connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1nut9as0
await leapwork.step("Validate the Atlassian option equals \"Atlassian\" in the knowledgebase connection list", async () => {
    // Assert span contains "Atlassian"
    await expect(page.getByText('Atlassian')).toContainText("Atlassian");
}, { action: "validate" });

// ai-studio-step-id: pwihhvwt00
await leapwork.step("Click the Atlassian option in the Provider dropdown of the New connector dialog", async () => {
    // Click span
    await page.getByText('Atlassian').click();
}, { action: "click" });

// ai-studio-step-id: pw1nog38i0
await leapwork.step("Validate the Provider dropdown shows 'Atlassian' on the new connector modal", async () => {
    // Assert span contains "Atlassian"
    await expect(page.getByRole('combobox', { name: 'Provider' })).toContainText("Atlassian");
}, { action: "validate" });

// ai-studio-step-id: pwoztlu700
await leapwork.step("Click the Name field in the new Atlassian connector modal", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1ghc4xl0
await leapwork.step(`Fill the Name field with "${lw__myAtlassianConnector}"`, async () => {
    // Fill textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myAtlassianConnector));
}, { action: "input" });

// ai-studio-step-id: pw1tbfa240
await leapwork.step("Click the Site URL field in the Atlassian connector modal", async () => {
    // Click textbox "Site URL Site URL help"
    await page.getByRole('textbox', { name: 'Site URL Site URL help' }).click();
}, { action: "click" });

// ai-studio-step-id: pw17y07cx0
await leapwork.step(`Fill the Site URL field with ${lw__yourCompanyAtlassianNet}`, async () => {
    // Fill textbox "Site URL Site URL help"
    await page.getByRole('textbox', { name: 'Site URL Site URL help' }).fill(String(lw__yourCompanyAtlassianNet));
}, { action: "input" });

// ai-studio-step-id: pw1wwals20
await leapwork.step("Click the Atlassian account email field", async () => {
    // Click textbox "Atlassian account email Atlassian account email help"
    await page.getByRole('textbox', { name: 'Atlassian account email' }).click();
}, { action: "click" });

// ai-studio-step-id: pw15rgoe90
await leapwork.step(`Fill the Atlassian account email field with ${lw__youEmailCom}`, async () => {
    // Fill textbox "Atlassian account email Atlassian account email help"
    await page.getByRole('textbox', { name: 'Atlassian account email' }).fill(String(lw__youEmailCom));
}, { action: "input" });

// ai-studio-step-id: pw1ytgu6o0
await leapwork.step("Click the Token API input field", async () => {
    // Click textbox "Token Token help"
    await page.getByRole('textbox', { name: 'Token Token help' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1gyoojn0
await leapwork.step("Fill the Token field with the Atlassian API token", async () => {
    // Fill textbox "Token Token help"
    await page.getByRole('textbox', { name: 'Token Token help' }).fill(leapwork.variables.getSecret("token_atlassian"));
}, { action: "input"});

// ai-studio-step-id: pwipiv9800
await leapwork.step("Click the Default Jira project key field", async () => {
    // Click textbox "Default Jira project key"
    await page.getByRole('textbox', { name: 'Default Jira project key' }).click();
}, { action: "click" });



// ai-studio-step-id: pw1509yxn0
await leapwork.step(`Fill the Default Jira project key field with "${lw__lAIS}"`, async () => {
    // Fill textbox "Default Jira project key"
    await page.getByRole('textbox', { name: 'Default Jira project key' }).fill(String(lw__lAIS));
}, { action: "input" });

// ai-studio-step-id: pwjnpjxk00
await leapwork.step("Click the \"LAIS Leapwork Play (a.k.a AIStudio)\" suggestion in the Provider dropdown", async () => {
    // Click button "LAIS Leapwork Play (a.k.a AIStudio)"
    await page.getByRole('button', { name: 'LAIS Leapwork Play (a.k.a' }).click();
}, { action: "click" });

// ai-studio-step-id: pw8ayp3r00
await leapwork.step("Click the Default Confluence space key field", async () => {
    // Click textbox "Default Confluence space key"
    await page.getByRole('textbox', { name: 'Default Confluence space key' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1v2rpzi0
await leapwork.step(`Fill the Default Confluence space key field with "${lw__eNG}"`, async () => {
    // Fill textbox "Default Confluence space key"
    await page.getByRole('textbox', { name: 'Default Confluence space key' }).fill(String(lw__eNG));
}, { action: "input" });

// ai-studio-step-id: pw1cfb3p10
await leapwork.step("Click the Engineering suggestion in the Default Confluence space key field", async () => {
    // Click "Engineering"
    await page.getByRole('button', { name: 'Engineering Engineering' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1yh14ka0
await leapwork.step("Click the Connect button in the New connector dialog", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwyaw38f00
await leapwork.step("Validate the Import from connection dropdown displays \"Import from connection\"", async () => {
    // Assert span contains "Import from connection"
    await expect(page.getByRole('combobox', { name: 'Import from connection' })).toContainText("Import from connection");
}, { action: "validate" });

// ai-studio-step-id: pwbnq6x200
await leapwork.step("Click the \"Import from connection\" dropdown", async () => {
    // Click combobox "Import from connection"
    await page.getByRole('combobox', { name: 'Import from connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pw14i5icc0
await leapwork.step("Validate that the option shows 'Add new connection' on the Leapwork Play page", async () => {
    // Assert span contains "Add new connection"
    await expect(page.getByText('Add new connection')).toContainText("Add new connection");
}, { action: "validate" });

// ai-studio-step-id: pw15nn7y70
await leapwork.step("Validate the Atlassian option equals \"Atlassian\" on the knowledge base connection page", async () => {
  await expect(page.getByRole('option', { name: 'Atlassian', exact: true }).first())
    .toBeVisible({ timeout: 5000 });
}, { action: "validate" });