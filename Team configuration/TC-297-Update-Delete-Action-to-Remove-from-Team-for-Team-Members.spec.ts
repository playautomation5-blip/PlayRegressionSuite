import { leapwork } from "./leapwork";

import { teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("nameCompanyCom", "sagr@leapwork.com", leapwork.storage.LOCAL);
const lw__nameCompanyCom = leapwork.variables.get("nameCompanyCom", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_58");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwt5l0su00
await leapwork.step("Right-click the team 64512 item in the Leapwork Play explorer", async () => {
    // Right-click "team 64512"
    await page.getByText('team').first().click({ button: 'right' });
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[2]/div[1]/div/span[3]" });


// await leapwork.step("Right-click team 57496", async () => {
//     // Right-click "team 57496"
//     await page.getByText('team').click({ button: 'right' });
// }, { action: "click" });

// ai-studio-step-id: pw1u6ee690
await leapwork.step("Click Invite member in the team 57496 actions menu", async () => {
    // Click div
    await page.getByText('Invite member...').click();
}, { action: "click" });

// ai-studio-step-id: pw1x8pqqa0
await leapwork.step("Click the Email field in the Invite Team Member dialog", async () => {
    // Click textbox "Email"
    await page.getByRole('textbox', { name: 'Email' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1v3o16r0
await leapwork.step(`Fill the Email field with "${lw__nameCompanyCom}" in the Invite Team Member dialog`, async () => {
    // Fill textbox "Email"
    await page.getByRole('textbox', { name: 'Email' }).fill(String(lw__nameCompanyCom));
}, { action: "input" });

// ai-studio-step-id: pweg7pmy00
await leapwork.step("Click Invite to send the team member invitation", async () => {
    // Click button "Invite"
    await page.getByRole('button', { name: 'Invite', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1pp1wy50
await leapwork.step("Click the Done button after the invitation email is sent", async () => {
    // Click button "Done"
    await page.getByRole('button', { name: 'Done' }).click();
}, { action: "click" });

// ai-studio-step-id: pw149p7h00
await leapwork.step("Click the “team 5645” team in the explorer.", async () => {
    // Click "team 5645"
    await page.getByText('team').first().click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[2]/div[1]/div/span[3]" });

// ai-studio-step-id: pw10cegtj0
await leapwork.step("Double-click the Search field", async () => {
    // Double-click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).dblclick();
}, { action: "dblclick", relativeXpath: ".//div[2]/div[1]/div[2]/div[2]/div[1]/input" });

// await leapwork.step("Double-click the team 80313 item", async () => {
//     // Double-click "team 80313"
//     await page.getByText('team').dblclick();
// }, { action: "dblclick" });

// ai-studio-step-id: pwa421wd00
await leapwork.step("Click More actions for Saksham Garg in the team member list", async () => {
    // Click button "More actions for Saksham Garg"
    await page.getByRole('button', { name: 'More actions for Saksham Garg' }).click();
}, { action: "click" });

// ai-studio-step-id: pw140e3fd0
await leapwork.step("Click Remove member in the team member actions menu", async () => {
    // Click div
    await page.getByText('Remove member').click();
}, { action: "click" });

// ai-studio-step-id: pwp94pii00
await leapwork.step("Validate the “Confirm Remove from Team” heading on the Leapwork Play page", async () => {
    // Assert heading "Confirm Remove from Team" contains "Confirm Remove from Team"
    await expect(page.getByRole('heading', { name: 'Confirm Remove from Team' })).toContainText("Confirm Remove from Team");
}, { action: "validate" });

// ai-studio-step-id: pw1nnakhb0
await leapwork.step("Validate the confirmation says \"Remove Saksham Garg from this team?\" on Leapwork Play", async () => {
    // Assert paragraph contains "Remove Saksham Garg from this team?"
    await expect(page.getByText('Remove Saksham Garg from this')).toContainText("Remove Saksham Garg from this team?");
}, { action: "validate" });

// ai-studio-step-id: pwzy8asu00
await leapwork.step("Validate the Leapwork Play confirmation dialog shows \"Remove Saksham Garg from this team?\"", async () => {
    // Assert paragraph contains "Remove Saksham Garg from this team?"
    await expect(page.getByText('Remove Saksham Garg from this')).toContainText("Remove Saksham Garg from this team?");
}, { action: "validate" });

// ai-studio-step-id: pwu3tsxx00
await leapwork.step("Validate the “Remove from Team” button on the Leapwork Play page", async () => {
    // Assert button "Remove from Team" contains "Remove from Team"
    await expect(page.getByRole('button', { name: 'Remove from Team' })).toContainText("Remove from Team");
}, { action: "validate" });

// ai-studio-step-id: pwku2c5400
await leapwork.step("Click “Remove from Team” to remove Saksham Garg from the team", async () => {
    // Click button "Remove from Team"
    await page.getByRole('button', { name: 'Remove from Team' }).click();
}, { action: "click" });

// ai-studio-step-id: pwqq37j100
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
