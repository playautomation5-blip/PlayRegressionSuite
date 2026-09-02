import { leapwork } from "./leapwork";

import { RandomTeam, RandomTeam2, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.variables.set("myGithubConnector", "connector", leapwork.storage.LOCAL);
const lw__myGithubConnector = leapwork.variables.get("myGithubConnector", leapwork.storage.LOCAL) as string;

leapwork.variables.set("ownerOrganizationWorkspace", "leapwork", leapwork.storage.LOCAL);
const lw__ownerOrganizationWorkspace = leapwork.variables.get("ownerOrganizationWorkspace", leapwork.storage.LOCAL) as string;

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

// ai-studio-step-id: fa95126e
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1xk60ky0
await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
    const loc = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await loc.waitFor({ state: 'visible' });
    await page.locator('.explorer-list').getByText(teamName, { exact: true }).dblclick();
});

// ai-studio-step-id: pwvq0a9b00
await leapwork.step("Click the + New connector button to open the connector setup form", async () => {
    // Click span
    await page.getByRole('button', { name: '+ New connector' }).first().click();
}, { action: "click", relativeXpath: ".//div/div[2]/div/div[2]/button/span" });



// ai-studio-step-id: pw1x1tq9u0
await leapwork.step("Click the Name field in the New connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pwwubcol00
await leapwork.step("Fill the Name field with \"${lw__myGithubConnector}\" in the New ${lw__myGithubConnector} dialog", async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector));
}, { action: "input" });

// ai-studio-step-id: pw19e3xk60
await leapwork.step("Click the Org field in the New connector dialog", async () => {
    // Click textbox "Org Field help"
    await page.getByRole('textbox', { name: 'Org Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1yu0dki0
await leapwork.step("Fill the Org field with \"${lw__ownerOrganizationWorkspace}\"", async () => {
    // Fill textbox "Org Field help"
        await page.getByRole('textbox', { name: 'Org Field help' }).fill(String(lw__ownerOrganizationWorkspace));
}, { action: "input" });

// ai-studio-step-id: pwyphjif00
await leapwork.step("Click the Token field in the New connector dialog", async () => {
    // Click textbox "Token Field help"
    await page.getByRole('textbox', { name: 'Token Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1oxzuoa0
await leapwork.step("Fill the Token field with the personal access token", async () => {
    // Fill textbox "Token Field help"
        await page.getByRole('textbox', { name: 'Token Field help' }).fill(String(lw__personalAccessToken));
}, { action: "input" });

// ai-studio-step-id: pw1awz22x0
await leapwork.step("Click the Test connection button in the New connector form", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pwjjlw8800
await leapwork.step("Validate that Leapwork AI Studio shows \"Connection succeeded.\"", async () => {
    // Assert paragraph contains "Connection succeeded."
    await expect(page.getByText('Connection succeeded.')).toContainText("Connection succeeded.");
}, { action: "validate" });

// ai-studio-step-id: pwlmjjul00
await leapwork.step("Click the Save button in the New connector section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: 3DWYa13K
await leapwork.step("Click the More actions button for the connector", async () => {
    // Click button "More actions for connector"
    await page.getByRole('button', { name: 'More actions for connector' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div[2]/span[8]/div/button[@aria-label=\"More actions for connector\"]" });

// ai-studio-step-id: pcLhikzc
await leapwork.step("Click Edit for the connector in Source Control settings", async () => {
    // Click menuitem "Edit"
    await page.getByRole('menuitem', { name: 'Edit' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/span[8]/div/div/button[1]" });



// ai-studio-step-id: pw16tpqbt0
await leapwork.step("Click the Name field in the Edit connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pw19eg0j40
await leapwork.step("Fill the Name field in the Edit connector dialog with \"${lw__myGithubConnector2}\"", async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector2));
}, { action: "input" });

// ai-studio-step-id: pw19y8blp0
await leapwork.step("Click the Save button in the Edit connector section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });





// ai-studio-step-id: GJDeqN1s
await leapwork.step("Click More actions for the connector-edited item", async () => {
    // Click button "More actions for connector-edited"
    await page.getByRole('button', { name: 'More actions for connector-' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div[2]/span[8]/div/button[@aria-label=\"More actions for connector-edited\"]" });

// ai-studio-step-id: ZkbihZjl
await leapwork.step("Click Delete in the Delete Connector confirmation dialog", async () => {
    // Click menuitem "Delete"
    await page.getByRole('menuitem', { name: 'Delete' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/span[8]/div/div/button[2]" });

// ai-studio-step-id: 6B8PP0sR
await leapwork.step("Click Delete to confirm deleting the “connector-edited” connector", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div/div[3]/div/div/button[2]" });


// ai-studio-step-id: c518ed5f
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

