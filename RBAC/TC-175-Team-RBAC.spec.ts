import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { Login54 } from "@assets/RBAC/Utilities/login-54";
import { Login59 } from "@assets/RBAC/Utilities/login-59";

leapwork.variables.set("nameCompanyCom", "mofica1084@drtall.com", leapwork.storage.LOCAL);
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

leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: pw1x7o1vg0
await leapwork.step("Use test case: login-54", async () => {
    return await Login54();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwwnrips00
await leapwork.step("Click Invite Team Member in the Team Members section", async () => {
    // Click button "Invite Team Member"
    await page.getByRole('button', { name: 'Invite Team Member' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[1]/div[1]/div[2]/button" });

// ai-studio-step-id: pw1arcshd0
await leapwork.step(`Fill the Email field with "${lw__nameCompanyCom}"`, async () => {
    // Fill textbox "Email"
    await page.getByRole('textbox', { name: 'Email' }).fill(String(lw__nameCompanyCom));
}, { action: "input" });

// ai-studio-step-id: pw1eajttm0
await leapwork.step("Click the Role dropdown and select Write in the Invite Team Member form", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Role' }).click();
}, { action: "click" });

// ai-studio-step-id: pwoq3lmb00
await leapwork.step("Click the Administrator role option for the team member", async () => {
    // Click span
    await page.getByRole('option', { name: 'Administrator', exact: true }).last().click();
}, { action: "click", relativeXpath: "//*[@id=\"fluent-option_r_g_\"]/span[2]" });

// ai-studio-step-id: pw1k10anq0
await leapwork.step("Click Invite to send the team member invitation", async () => {
    // Click button "Invite"
    await page.getByRole('button', { name: 'Invite', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw132f1490
await leapwork.step("Click Done to close the invitation confirmation popup", async () => {
    // Click button "Done"
    await page.getByRole('button', { name: 'Done' }).click();
}, { action: "click" });

// ai-studio-step-id: pw16slk920
await leapwork.step("Click the monanig245@drtall.com (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'monanig245@drtall.com (Personal)' }).click();
}, { action: "click" });

// ai-studio-step-id: pw19wth2z0
await leapwork.step("Click the Log out link in the menu", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: pw1cqwua20
await leapwork.step("Use test case: login-59", async () => {
    return await Login59();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwcmezoo00
await leapwork.step("Double click the team item in the Leapwork Play explorer", async () => {
    // Click "team"
    // await page.locator("explorer-list").getByText(teamName).dblclick();
    await page.locator('.explorer-item-name', { hasText: teamName }).dblclick();
}, { action: "double click" });

// Validate the Administrator role: 

// ai-studio-step-id: pwcwn1s000
await leapwork.step("Validate the Leapwork Play page shows the `Create new in ${teamName}` button", async () => {
    const createButton = page.getByRole('button', { name: `Create new in ${teamName}` });
    await expect(createButton).toBeEnabled();
}, { action: "validate" });

// Validate the Write role: 

// ai-studio-step-id: pw1aaflbm0
await leapwork.step("Select \"Write\" from AdministratorWriteRead", async () => {
    await page.locator('.team-member-row').filter({ hasText: 'mofica1084@drtall.com' }).getByRole('combobox').first().selectOption({ label: "Write" });
}, { action: "click" });

// await leapwork.step("Double click the team item in the Leapwork Play explorer", async () => {
//     // Click "team"
//     await page.locator("explorer-list").getByText(teamName).dblclick();
// }, { action: "double click" });

// ai-studio-step-id: pw15ythdw0
await leapwork.step("Click the team item in the Leapwork Play", async () => {
    // Click "team"
    await page.getByText("TM-1").click();
}, { action: "click" });

// ai-studio-step-id: pw12uvl000
await leapwork.step("Validate that the \"Invite team member\" button is disbaled", async () => {
    // Assert span contains "Invite your colleague"
    const inviteButton = page.getByRole('button', { name:"Invite team member" });
    await expect(inviteButton).toBeDisabled();
}, { action: "validate" });

// ai-studio-step-id: pw3gl8hq00
await leapwork.step("Click the mofica1084@drtall.com workspace menu button in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'mofica1084@drtall.com (monanig245\'s' }).click();
}, { action: "click" });

// ai-studio-step-id: pwzlkmyo00
await leapwork.step("Click the Log out link", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: pw13xl7730
await leapwork.step("Use test case: login-54", async () => {
    return await Login54();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwo951ls00
await leapwork.step("Double click the team item in the Leapwork Play explorer", async () => {
    // Click "team"
    await page.locator('.explorer-item-name', { hasText: teamName }).dblclick();
}, { action: "double click" });

// Validate the Read role:

// ai-studio-step-id: pw14d34hm0
await leapwork.step("Select \"Read\" from AdministratorWriteRead", async () => {
    await page.locator('.team-member-row').filter({ hasText: 'mofica1084@drtall.com' }).getByRole('combobox').first().selectOption({ label: "Read" });
}, { action: "click" });

// ai-studio-step-id: pw16n5a6k0
await leapwork.step("Click the monanig245@drtall.com (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'monanig245@drtall.com (Personal)' }).click();
}, { action: "click" });

// ai-studio-step-id: pwud5wf200
await leapwork.step("Click the Log out link", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: pwgtsccq00
await leapwork.step("Use test case: login-59", async () => {
    return await Login59();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1f05u5l0
await leapwork.step("Validate the Create new button is disbaled", async () => {
    await expect(page.getByRole('button', { name: 'Unavailable in read-only mode' }).first()).toBeDisabled();
}, { action: "validate" });

// ai-studio-step-id: pwxzg39p00
await leapwork.step("Click the mofica1084@drtall.com workspace menu button in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'mofica1084@drtall.com (monanig245\'s' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1fg4rlq0
await leapwork.step("Click the Log out link", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });