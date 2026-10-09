import { leapwork } from "./leapwork";

import { RandomTeam, RandomTeam2, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.variables.set("myGithubConnector", "connector", leapwork.storage.LOCAL);
const lw__myGithubConnector = leapwork.variables.get("myGithubConnector", leapwork.storage.LOCAL) as string;

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

// ai-studio-step-id: pw1c44uev0
await leapwork.step("Click the + New connector button", async () => {
    // Click span
    await page.getByRole('button', { name: '+ New connector' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pwgacctc00
await leapwork.step("Click the Name field in the New connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pwhukl6b00
await leapwork.step("Fill the Name field with \"${lw__myGithubConnector}\" in the New ${lw__myGithubConnector} dialog", async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector));
}, { action: "input" });

// ai-studio-step-id: pw1c61qy60
await leapwork.step("Click the Token field in the New connector dialog", async () => {
    // Click textbox "Token Field help"
    await page.getByRole('textbox', { name: 'Token Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: pwifhmgd00
await leapwork.step("Fill the Token field with the personal access token", async () => {
    // Fill textbox "Token Field help"
        await page.getByRole('textbox', { name: 'Token Field help' }).fill(String(lw__personalAccessToken));
}, { action: "input" });

// ai-studio-step-id: pwh33vqg00
await leapwork.step("Select \"playautomation5-blip/PlayRegressionSuite\" from Repository", async () => {
    // Click combobox "Repository"
    await page.getByLabel('Repository').selectOption({ label: "playautomation5-blip/PlayRegressionSuite" });
}, { action: "click", relativeXpath: "//*[@id=\"source-control-repo\"]" });

// ai-studio-step-id: pw18sywif0
await leapwork.step("Click the Test connection button in the New connector form", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pwjbcor000
await leapwork.step("Validate that Leapwork AI Studio shows \"Connection succeeded.\"", async () => {
    // Assert paragraph contains "Connection succeeded."
    await expect(page.getByText('Connection succeeded.')).toContainText("Connection succeeded.");
}, { action: "validate" });

// ai-studio-step-id: pwzrhp7600
await leapwork.step("Click the Save button in the New connector section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pwivc0mh00
await leapwork.step("Click Collapse chat in Leapwork Play.", async () => {
    // Click button "Collapse chat"
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div/div[2]/div[1]/button[@aria-label=\"Collapse chat\"]" });

// ai-studio-step-id: pw1nksw1k0
await leapwork.step("Click the More actions button for the connector", async () => {
    // Click button "More actions for connector"
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'More actions for connector' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div[2]/span[8]/div/button[@aria-label=\"More actions for connector\"]" });

// ai-studio-step-id: pw1kzar6l0
await leapwork.step("Click Edit for the connector in Source Control settings", async () => {
    // Click menuitem "Edit"
    await page.getByRole('menuitem', { name: 'Edit' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/span[8]/div/div/button[1]" });



// ai-studio-step-id: pw1jeu6nc0
await leapwork.step("Click the Name field in the Edit connector dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1l5d1vb0
await leapwork.step("Fill the Name field in the Edit connector dialog with \"${lw__myGithubConnector2}\"", async () => {
    // Fill textbox "Name"
        await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector2));
}, { action: "input" });

// ai-studio-step-id: pweeq89g00
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



// ai-studio-step-id: pw1dtaele0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
