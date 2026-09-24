import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";

leapwork.variables.set("myGithubConnector", "Connector", leapwork.storage.LOCAL);
const lw__myGithubConnector = leapwork.variables.get("myGithubConnector", leapwork.storage.LOCAL) as string;

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
leapwork.variables.set("userId", "user_62");
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

// ai-studio-step-id: pwomej4w00
await leapwork.step("Validate that the \"Add connections\" heading is displayed on the knowledge base page", async () => {
    // Assert strong contains "Add connections"
    await expect(page.getByText('Add connections')).toContainText("Add connections");
}, { action: "validate" });

// ai-studio-step-id: pwa664bp00
await leapwork.step("Validate the Add connection dropdown shows \"Add connection\"", async () => {
    // Assert span contains "Add connection"
    await expect(page.getByRole('combobox', { name: 'Add connection' })).toContainText("Add connection");
}, { action: "validate" });

// ai-studio-step-id: pw15g7uqe0
await leapwork.step("Click the Add connection dropdown", async () => {
    // Click combobox "Add connection"
    await page.getByRole('combobox', { name: 'Add connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pw184xekr0
await leapwork.step("Click the GitHub option in the Provider dropdown", async () => {
    // Click span
    await page.getByText('GitHub').click();
}, { action: "click"});



// ai-studio-step-id: pws1n9hz00
await leapwork.step("Click the Name field in the new connector form", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1hehc0h0
await leapwork.step(`Fill the Name field with "${lw__myGithubConnector}" in the new connector modal`, async () => {
    // Fill textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector));
}, { action: "input" });


// ai-studio-step-id: pw1bf0r1k0
await leapwork.step("Click the Token field", async () => {
    // Click textbox "Token Token help"
    await page.getByRole('textbox', { name: 'Token Token help' }).click();
}, { action: "click" });

// ai-studio-step-id: pwockaf000
await leapwork.step("Fill the Token field with the GitHub personal access token", async () => {
    // Fill textbox "Token Token help"
    await page.getByRole('textbox', { name: 'Token Token help' }).fill(leapwork.variables.getSecret("git_token"));
}, { action: "input" });

// ai-studio-step-id: pw7ecokw00
await leapwork.step("Select 'Leap-Play-testing' from the Org dropdown", async () => {
    // Click div
    await page.getByRole('combobox', { name: 'Org' }).click();
}, { action: "click" });

// ai-studio-step-id: pwqwtrht00
await leapwork.step("Click the \"Leap-Play-testing\" option in the Org dropdown on the New connector dialog", async () => {
    await page.getByRole('option', { name: 'Leap-Play-testing' }).click();
}, { action: "click" });

// ai-studio-step-id: pw82wu6q00
await leapwork.step("Click the Connect button in the New connector dialog", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw2rtt8n00
await leapwork.step("Validate the Import from connection dropdown shows 'Import from connection'", async () => {
    // Assert span contains "Import from connection"
    await expect(page.getByRole('combobox', { name: 'Import from connection' })).toContainText("Import from connection");
}, { action: "validate" });

// ai-studio-step-id: pw10o7ny60
await leapwork.step("Click the \"Import from connection\" dropdown", async () => {
    // Click combobox "Import from connection"
    await page.getByRole('combobox', { name: 'Import from connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pwrktj6b00
await leapwork.step("Validate that the Connector option displays 'Connector' on the knowledge base connection page", async () => {
    // Assert span contains "Connector"
    await expect(page.getByText('Connector')).toContainText("Connector");
}, { action: "validate" });


