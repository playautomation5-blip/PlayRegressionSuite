import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import {teamName} from "@assets/Utilities/random-team";

leapwork.variables.set("userId", "user_57");
leapwork.variables.set("teamName", teamName);

leapwork.variables.set("myGithubConnector", "github connector", leapwork.storage.LOCAL);
const lw__myGithubConnector = leapwork.variables.get("myGithubConnector", leapwork.storage.LOCAL) as string;

leapwork.variables.set("ownerOrganizationWorkspace", "playautomation5-blip", leapwork.storage.LOCAL);
const lw__ownerOrganizationWorkspace = leapwork.variables.get("ownerOrganizationWorkspace", leapwork.storage.LOCAL) as string;

const personalAccessToken = leapwork.variables.getSecret("personalAccessToken");

leapwork.variables.set("personalAccessToken", personalAccessToken, leapwork.storage.LOCAL);
const lw__personalAccessToken = leapwork.variables.get("personalAccessToken", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: e60858c7
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 28253bbc
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: bCAzxXrs
await leapwork.step("Double-click the Search field.", async () => {
    // Double-click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: 6iW7jVCK
await leapwork.step("Click the + New connector button to open the connector form", async () => {
    // Click span
    await page.getByRole('button', { name: '+ New connector' }).first().click();
}, { action: "click" });

// ai-studio-step-id: AICgXGk6
await leapwork.step("Click the Name field in the New connector form", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: UvsKmO11
await leapwork.step(`Fill the Name field in the New connector dialog with "${lw__myGithubConnector}"`, async () => {
    // Fill textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__myGithubConnector));
}, { action: "input" });

// ai-studio-step-id: dd7B56VD
await leapwork.step("Click the Host (optional) field in the New connector form", async () => {
    // Click textbox "Host (optional) Field help"
    await page.getByRole('textbox', { name: 'Host (optional) Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: zTq1jDUz
await leapwork.step("Click the Org field in the New connector form", async () => {
    // Click textbox "Org Field help"
    await page.getByRole('textbox', { name: 'Org Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: pT0Etyxp
await leapwork.step(`Fill the Org field with "${lw__ownerOrganizationWorkspace}" in the new GitHub connector form`, async () => {
    // Fill textbox "Org Field help"
    await page.getByRole('textbox', { name: 'Org Field help' }).fill(String(lw__ownerOrganizationWorkspace));
}, { action: "input" });

// ai-studio-step-id: 9l8rWHyL
await leapwork.step("Click the Token field in the New connector form", async () => {
    // Click textbox "Token Field help"
    await page.getByRole('textbox', { name: 'Token Field help' }).click();
}, { action: "click" });

// ai-studio-step-id: qZQ6rgfz
await leapwork.step("Fill the Token field in the New connector dialog", async () => {
    // Fill textbox "Token Field help"
    await page.getByRole('textbox', { name: 'Token Field help' }).fill(String(lw__personalAccessToken));
}, { action: "input" });

// ai-studio-step-id: brxZar4r
await leapwork.step("Click the Test connection button in the New connector form", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });

// ai-studio-step-id: 5vR1U0NH
await leapwork.step("Click Save for the new GitHub connector setup", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click"});

// ai-studio-step-id: y5AxBmKQ
await leapwork.step("Click More actions for the GitHub connector", async () => {
    // Click button "More actions for github connector"
    await page.getByRole('button', { name: 'More actions for github' }).click();
}, { action: "click"});


// ai-studio-step-id: 1WrSeztE
await leapwork.step("Click Delete in the Delete Connector dialog for the github connector", async () => {
    // Click menuitem "Delete"
    await page.getByRole('menuitem', { name: 'Delete' }).click();
}, { action: "click" });

// ai-studio-step-id: U817WddX
await leapwork.step("Click Delete to confirm deleting the \"github connector\" connector", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });