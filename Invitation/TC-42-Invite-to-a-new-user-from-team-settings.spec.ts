import { leapwork } from "./leapwork";

import { ConstantORExtensions, generateRandomEmail } from "@assets/Utilities/ConstantORExtensions";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

//Invitation to a user from team settings section

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

const invitationEmail = generateRandomEmail();
leapwork.variables.set("userId", "user_49");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("renamedAssetName", "renamed");

// ai-studio-step-id: e11324dd
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 72100b01
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw1xsyupg0
await leapwork.step(`Double-click the ${teamName} item`, async () => {
    // Double-click "team 33897"
    await page.getByText(teamName).dblclick();
}, { action: "click" });

// ai-studio-step-id: pwf2kshn00
await leapwork.step("Click the + Invite Team Member button", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Invite Team Member' }).click();
}, { action: "click" });

// ai-studio-step-id: pwvxnz2k00
await leapwork.step(`Fill the Email field with ${invitationEmail}`, async () => {
    // Fill textbox "Email"
    await page.getByRole('textbox', { name: 'Email' }).fill(String(invitationEmail));
}, { action: "input" });

// ai-studio-step-id: pwuiliqx00
await leapwork.step("Click the Role dropdown set to Write", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Role' }).click();
}, { action: "click" });




// ai-studio-step-id: pw1nfx83d0
await leapwork.step("Click the Read option in the Role dropdown", async () => {
    // Click option "Read"
    await page.getByRole('option', { name: 'Read' }).click();
}, { action: "click"});

// ai-studio-step-id: pwt0ca8q00
await leapwork.step("Click the Invite button in the Invite Team Member dialog", async () => {
    // Click button "Invite"
    await page.getByRole('button', { name: 'Invite', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1enit0n0
await leapwork.step("Validate the Invite Team Member dialog shows the invitation email sent confirmation message", async () => {
    // Assert paragraph contains "Invitation email sent. The selected team membership will be available when the user signs in."
    await expect(page.getByText('Invitation email sent. The')).toContainText("Invitation email sent. The selected team membership will be available when the user signs in.");
}, { action: "validate" });

// ai-studio-step-id: pw1w4bhkn0
await leapwork.step("Click the Done button on the invitation sent popup", async () => {
    // Click button "Done"
    await page.getByRole('button', { name: 'Done' }).click();
}, { action: "click" });

// ai-studio-step-id: 70468e97
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

