import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("variableKey", "timeoutMs", leapwork.storage.LOCAL);
const lw__variableKey = leapwork.variables.get("variableKey", leapwork.storage.LOCAL) as string;

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

// await leapwork.step(`Double-click "${teamName}"`, async () => {
//     // Double-click "team 99509"
//     await page.getByText(teamName).dblclick();
// }, { action: "click", });

// ai-studio-step-id: pw10ox4w00
await leapwork.step("Double-click the team 74800 item in the explorer pane", async () => {
    // Double-click "team 74800"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pwvexmhd00
await leapwork.step("Click the \"Variables & Secrets\" tab in the Team settings navigation", async () => {
    // Click button "Variables & Secrets"
    await page.getByRole('button', { name: 'Variables & Secrets' }).click();
}, { action: "click" });

// ai-studio-step-id: pwcfc6zi00
await leapwork.step("Click the + Add variable button in the Team Variables section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add variable' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1qyuds10
await leapwork.step("Click the Variable key input field on the Leapwork Play page", async () => {
    // Click textbox "Variable key"
    await page.getByRole('textbox', { name: 'Variable key' }).click();
}, { action: "click" });

// ai-studio-step-id: pw13uhjfy0
await leapwork.step(`Fill the Variable key field with "${lw__variableKey}"`, async () => {
    // Fill textbox "Variable key"
    await page.getByRole('textbox', { name: 'Variable key' }).fill(String(lw__variableKey));
}, { action: "input" });

// ai-studio-step-id: pw7ojx5l00
await leapwork.step("Click the Value field for the 'timeoutMs' key setting", async () => {
    // Click textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).click();
}, { action: "click" });

// ai-studio-step-id: pwsnspca00
await leapwork.step(`Fill the Value field with "${lw__value}" for the timeoutMs team variable`, async () => {
    // Fill textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).fill(String(lw__value));
}, { action: "input" });

// ai-studio-step-id: pw1i5zx350
await leapwork.step("Click the Save button to save the 'timeoutMs' team variable value of 100000", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ar5f210
await leapwork.step("Validate that the settings key 'timeoutMs' is displayed on the Leapwork Play page", async () => {
    // Assert span contains "timeoutMs"
    await expect(page.getByText('timeoutMs')).toContainText("timeoutMs");
}, { action: "validate" });

// ai-studio-step-id: pw1838vv00
await leapwork.step("Validate the timeoutMs setting shows '100000' on the Leapwork Play page", async () => {
    // Assert span contains "100000"
    await expect(page.getByText('100000')).toContainText("100000");
}, { action: "validate"});

// ai-studio-step-id: pw1ayyv2p0
await leapwork.step("Click the \"More actions for timeoutMs\" button for the timeoutMs setting (value 100000)", async () => {
    // Click button "More actions for timeoutMs"
    await page.getByRole('button', { name: 'More actions for timeoutMs' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1y6kez00
await leapwork.step("Click the Delete variable option in the context menu for the \"timeoutMs\" team variable", async () => {
    // Click span
    await page.getByText('Delete variable').click();
}, { action: "click"});

// ai-studio-step-id: pwlj06o000
await leapwork.step("Click the Delete button to confirm removing the team variable", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });


// ai-studio-step-id: pwqq37j100
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });



// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from timeoutMs", async () => {
//     // Get value from span
//     const lw_value = (await page.getByText('timeoutMs').textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_timeoutMs", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[2]/div/div/div[3]/div[2]/span[1]" });



// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from 100000", async () => {
//     // Get value from span
//     const lw_value = (await page.getByText('100000').textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_100000", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[2]/div/div/div[3]/div[2]/span[2]" });


