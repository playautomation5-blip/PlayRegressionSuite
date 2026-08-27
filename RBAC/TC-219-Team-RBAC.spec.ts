import { leapwork } from "./leapwork";

import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { Login54 } from "@assets/RBAC/Utilities/login-54";
import { Login59 } from "@assets/RBAC/Utilities/login-59";

leapwork.variables.set("nameCompanyCom", "test-play-59@outlook.com", leapwork.storage.LOCAL);
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
await leapwork.step("Click the \"+ Invite Team Member\" button on the Team Members page", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Invite Team Member' }).click();
}, { action: "click" });

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
await leapwork.step("Click the Administrator role option in the Invite Team Member form", async () => {
    // Click option "Administrator"
    await page.getByRole('option', { name: 'Administrator' }).click();
}, { action: "click" });

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

// ai-studio-step-id: pw1cmr6be0
await leapwork.step("Click the Test-54 Play (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test-54 Play (Personal)' }).click();
}, { action: "click" });

// ai-studio-step-id: pw19wth2z0
await leapwork.step("Click the Log out link in the menu", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: pwifai2700
await leapwork.step("Click the Login button", async () => {
    // Click button "Login"
    await page.getByRole('button', { name: 'Login' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1cqwua20
await leapwork.step("Use test case: login-59", async () => {
    return await Login59();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwudtoc000
await leapwork.step("Double click the team item in the Leapwork Play explorer", async () => {
    // Click "team"
    await page.getByText(teamName).dblclick();
}, { action: "double click" });

// Validate the Administrator role: 

// ai-studio-step-id: pwcwn1s000
await leapwork.step("Validate the Leapwork Play page shows the `Create new in ${teamName}` button", async () => {
    const createButton = page.getByRole('button', { name: `Create new in ${teamName}` });
    await expect(createButton).toBeEnabled();
}, { action: "validate" });

// Validate the Write role: 

// ai-studio-step-id: pw1n1xl5d0
await leapwork.step("Click in the dropdown menu", async () => {
    // Click div
    const dropdown = page.locator('.team-member-row').filter({ hasText: 'test-play-59@outlook.com' }).locator('.team-member-permissions .text');
    await dropdown.click();
}, { action: "click" });

// ai-studio-step-id: pwnn3p2w00
await leapwork.step("Click the Write option in the permissions menu", async () => {
    // Click div
    await page.getByText('Write').click();
}, { action: "click" });

// ai-studio-step-id: pwwrxqdm00
await leapwork.step("Double click the team item in the Leapwork Play explorer", async () => {
    // Click "team"
    await page.getByText(teamName).dblclick();
}, { action: "double click" });

// ai-studio-step-id: pw1xbnhb00
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

// ai-studio-step-id: pwxpsnex00
await leapwork.step("Click the Test-59 Play workspace menu button in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test-59 Play (Test-54 Play\'s' }).click();
}, { action: "click" });

// ai-studio-step-id: pwzlkmyo00
await leapwork.step("Click the Log out link", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: pwi9qj2s00
await leapwork.step("Click the Login button", async () => {
    // Click button "Login"
    await page.getByRole('button', { name: 'Login' }).click();
}, { action: "click" });

// ai-studio-step-id: pw13xl7730
await leapwork.step("Use test case: login-54", async () => {
    return await Login54();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwjqek4600
await leapwork.step("Double click the team item in the Leapwork Play explorer", async () => {
    // Click "team"
    await page.getByText(teamName).dblclick();
}, { action: "double click" });

// Validate the Read role:

// ai-studio-step-id: pw1y5ejcl0
await leapwork.step("Click in the dropdown menu", async () => {
    // Click div
    const dropdown = page.locator('.team-member-row').filter({ hasText: 'test-play-59@outlook.com' }).locator('.team-member-permissions .text');
    await dropdown.click();
}, { action: "click" });

// ai-studio-step-id: pw5yzqf400
await leapwork.step("Click the Read option in the Administrator menu", async () => {
    // Click div
    await page.getByText('Read', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw9n2pw900
await leapwork.step("Click the Test-54 Play (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test-54 Play (Personal)' }).click();
}, { action: "click" });

// ai-studio-step-id: pwud5wf200
await leapwork.step("Click the Log out link", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });

// ai-studio-step-id: pw1nkbwql0
await leapwork.step("Click the Login button", async () => {
    // Click button "Login"
    await page.getByRole('button', { name: 'Login' }).click();
}, { action: "click" });

// ai-studio-step-id: pwgtsccq00
await leapwork.step("Use test case: login-59", async () => {
    return await Login59();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1f05u5l0
await leapwork.step("Validate the Create new button is disbaled", async () => {
    await expect(page.getByRole('button', { name: 'Unavailable in read-only mode' }).first()).toBeDisabled();
}, { action: "validate" });

// ai-studio-step-id: pw6s9f3r00
await leapwork.step("Click the Test-59 Play workspace menu button in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test-59 Play (Test-54 Play\'s' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1fg4rlq0
await leapwork.step("Click the Log out link", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click" });