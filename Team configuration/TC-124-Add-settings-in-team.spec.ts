import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";


leapwork.variables.set("variableKey", "timeoutMs", leapwork.storage.LOCAL);
const lw__value4 = leapwork.variables.get("variableKey", leapwork.storage.LOCAL) as string;

leapwork.variables.set("value", "100000", leapwork.storage.LOCAL);
const lw__value = leapwork.variables.get("value", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_53");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: 5662571b
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: b1fbf60a
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw10ox4w00
await leapwork.step("Double-click the team 74800 item in the explorer pane", async () => {
    // Double-click "team 74800"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick", relativeXpath: ".//div[2]/div[2]/div[2]/div[1]/div/span[3]" });

// ai-studio-step-id: pw1b46hhf0
await leapwork.step("Click the \"Variables & Secrets\" tab in the Team settings navigation", async () => {
    // Click button "Variables & Secrets"
    await page.getByRole('tab', { name: 'Variables & Secrets' }).click();
}, { action: "click" });

// ai-studio-step-id: pwo59yu200
await leapwork.step("Click the Add variable button in the Team Variables panel", async () => {
    // Click button "Add variable"
    await page.getByRole('button', { name: 'Add variable' }).click();
}, { action: "click" });

// ai-studio-step-id: pwoxaydr00
await leapwork.step("Click the Variable key input field on the Leapwork Play page", async () => {
    // Click textbox "Variable key"
    await page.getByRole('textbox', { name: 'Variable key' }).click();
}, { action: "click" });

// ai-studio-step-id: pw3ulkm200
await leapwork.step(`Fill the Variable key field with "${lw__variableKey}"`, async () => {
    // Fill textbox "Variable key"
    await page.getByRole('textbox', { name: 'Variable key' }).fill(String(lw__variableKey));
}, { action: "input" });

// ai-studio-step-id: pw1royqj00
await leapwork.step("Click the Value field for the 'timeoutMs' key setting", async () => {
    // Click textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).click();
}, { action: "click" });

// ai-studio-step-id: pw18ik0oo0
await leapwork.step(`Fill the Value field with "${lw__value}" for the timeoutMs team variable`, async () => {
    // Fill textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).fill(String(lw__value));
}, { action: "input" });

// ai-studio-step-id: pw1iowbs50
await leapwork.step("Click the Save button to save the 'timeoutMs' team variable value of 100000", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw7w591000
await leapwork.step("Validate that the settings key 'timeoutMs' is displayed on the Leapwork Play page", async () => {
    // Assert span contains "timeoutMs"
    await expect(page.getByText('timeoutMs')).toContainText("timeoutMs");
}, { action: "validate" });

// ai-studio-step-id: pwy0fwan00
await leapwork.step("Validate the timeoutMs setting shows '100000' on the Leapwork Play page", async () => {
    // Assert span contains "100000"
    await expect(page.getByText('100000')).toContainText("100000");
}, { action: "validate"});

// ai-studio-step-id: pw1dm0jd10
await leapwork.step("Click the \"More actions for timeoutMs\" button for the timeoutMs setting (value 100000)", async () => {
    // Click button "More actions for timeoutMs"
    await page.getByRole('button', { name: 'More actions for timeoutMs' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1qv0ac20
await leapwork.step("Click the Delete variable option in the context menu for the \"timeoutMs\" team variable", async () => {
    // Click span
    await page.getByText('Delete variable').click();
}, { action: "click"});

// ai-studio-step-id: pwjtldck00
await leapwork.step("Click the Delete button to confirm removing the team variable", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });


// ai-studio-step-id: pw1jylhwo0
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });