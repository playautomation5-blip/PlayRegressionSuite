import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { ConstantORExtensions, generateRandomEmail } from "@assets/Utilities/ConstantORExtensions";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

//Invitation to a user from team settings section

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const invitationEmail = generateRandomEmail();
leapwork.variables.set("userId", "user_49");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("renamedAssetName", "renamed");


// ai-studio-step-id: fc0ed5a2
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: b9e0c2a9
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// await leapwork.step(`Double-click the ${teamName} item`, async () => {
//     // Double-click "team 33897"
//     await page.getByText(teamName).dblclick();
// }, { action: "click" });

// ai-studio-step-id: pw1mc77fq0
await leapwork.step("Click the “team 66689” team in Leapwork Play", async () => {
    // Click "team 66689"
    await page.getByText('team').first().dblclick();
}, { action: "click" });

// ai-studio-step-id: mKIoXkF0
await leapwork.step("Click the + Invite Team Member button", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Invite Team Member' }).click();
}, { action: "click" });

// ai-studio-step-id: CZUPhmgp
await leapwork.step(`Fill the Email field with ${invitationEmail}`, async () => {
    // Fill textbox "Email"
    await page.getByRole('textbox', { name: 'Email' }).fill(String(invitationEmail));
}, { action: "input" });

// ai-studio-step-id: Ouzehsna
await leapwork.step("Click the Role dropdown set to Write", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Role' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1vk1iju0
await leapwork.step("Validate the permission dropdown on Leapwork Play shows \"Administrator\"", async () => {
    // Assert option "Administrator" contains "Administrator"
    await expect(page.getByRole('option', { name: 'Administrator' })).toContainText("Administrator");
}, { action: "validate", relativeXpath: "//*[@id=\"fluent-option_r_3_\"]" });



// ai-studio-step-id: sMINM6E6
await leapwork.step("Click the Read option in the Role dropdown", async () => {
    // Click option "Read"
    await page.getByRole('option', { name: 'Read' }).click();
}, { action: "click"});

// ai-studio-step-id: StBwLHwq
await leapwork.step("Click the Invite button in the Invite Team Member dialog", async () => {
    // Click button "Invite"
    await page.getByRole('button', { name: 'Invite', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: q9yXk0MW
await leapwork.step("Validate the Invite Team Member dialog shows the invitation email sent confirmation message", async () => {
    // Assert paragraph contains "Invitation email sent. The selected team membership will be available when the user signs in."
    await expect(page.getByText('Invitation email sent. The')).toContainText("Invitation email sent. The selected team membership will be available when the user signs in.");
}, { action: "validate" });

// ai-studio-step-id: ovdnnMaJ
await leapwork.step("Click the Done button on the invitation sent popup", async () => {
    // Click button "Done"
    await page.getByRole('button', { name: 'Done' }).click();
}, { action: "click" });

// ai-studio-step-id: 3df6d1bb
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
