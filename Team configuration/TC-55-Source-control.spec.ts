import { leapwork } from "./leapwork";

import { RandomTeam2, RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.variables.set("myGithubConnector", "connector", leapwork.storage.LOCAL);
const lw__myGithubConnector = leapwork.variables.get("myGithubConnector", leapwork.storage.LOCAL) as string;

leapwork.variables.set("ownerOrganizationWorkspace", "leapwork", leapwork.storage.LOCAL);
const lw__ownerOrganizationWorkspace = leapwork.variables.get("ownerOrganizationWorkspace", leapwork.storage.LOCAL) as string;

//PAT token set as a team secret
const lw__personalAccessToken = leapwork.variables.getSecret("SourceControlPAT", leapwork.storage.LOCAL) as string;

leapwork.variables.set("myGithubConnector2", "connector-edited", leapwork.storage.LOCAL);
const lw__myGithubConnector2 = leapwork.variables.get("myGithubConnector2", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 10000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
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
    await page.getByRole('button', { name: '+ New connector' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pwgacctc00
await leapwork.step("Click the Name field in the New connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pwyapl4100
await leapwork.step("Fill the Name field with \"${lw__myGithubConnector}\" in the New ${lw__myGithubConnector} dialog", async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector));
}, { action: "input" });

// ai-studio-step-id: pw2i87pg00
await leapwork.step("Click the Org field in the New connector dialog", async () => {
    // Click textbox "Org Field help"
    await page.getByRole('textbox', { name: 'Org Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1xgxj770
await leapwork.step("Fill the Org field with \"${lw__ownerOrganizationWorkspace}\"", async () => {
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

// ai-studio-step-id: pw7odch400
await leapwork.step("Click the More actions button for the connector", async () => {
    // Click button "More actions for connector"
    await page.getByRole('button', { name: 'More actions for connector' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div[2]/span[8]/div/button[@aria-label=\"More actions for connector\"]" });

// ai-studio-step-id: pwjlo9t300
await leapwork.step("Click Edit for the connector in Source Control settings", async () => {
    // Click menuitem "Edit"
    await page.getByRole('menuitem', { name: 'Edit' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/span[8]/div/div/button[1]" });



// ai-studio-step-id: pw1outnvr0
await leapwork.step("Click the Name field in the Edit connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pwk0zxcc00
await leapwork.step("Fill the Name field in the Edit connector dialog with \"${lw__myGithubConnector2}\"", async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector2));
}, { action: "input" });

// ai-studio-step-id: pwso6qh700
await leapwork.step("Click the Save button in the Edit connector section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });





// ai-studio-step-id: pw1h34jrp0
await leapwork.step("Click More actions for the connector-edited item", async () => {
    // Click button "More actions for connector-edited"
    await page.getByRole('button', { name: 'More actions for connector-' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div[2]/span[8]/div/button[@aria-label=\"More actions for connector-edited\"]" });

// ai-studio-step-id: pw1pq8d5o0
await leapwork.step("Click Delete in the Delete Connector confirmation dialog", async () => {
    // Click menuitem "Delete"
    await page.getByRole('menuitem', { name: 'Delete' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/span[8]/div/div/button[2]" });

// ai-studio-step-id: pw7w68go00
await leapwork.step("Click Delete to confirm deleting the “connector-edited” connector", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div/div[3]/div/div/button[2]" });



// ai-studio-step-id: ac938e3e
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
