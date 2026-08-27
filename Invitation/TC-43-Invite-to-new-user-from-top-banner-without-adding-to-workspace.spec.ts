import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { ConstantORExtensions, generateRandomEmail } from "@assets/Utilities/ConstantORExtensions";

//Invitation to a new user from top banner, without adding him/her to any workspace/team. 

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

const invitationEmail = generateRandomEmail();
leapwork.variables.set("userId", "user_15");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New agent");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");

// ai-studio-step-id: c4c9c1bc
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 22e56983
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 2434887a
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwu0nltn00
await leapwork.step("Validate that the \"Invite your colleague\" button shows \"Invite your colleague\" on Leapwork Play", async () => {
    // Assert span contains "Invite your colleague"
    await expect(page.getByRole('button', { name: 'Invite your colleague' })).toContainText("Invite your colleague");
}, { action: "validate" });

// ai-studio-step-id: pw1mdrqo80
await leapwork.step("Click the Invite your colleague button", async () => {
    const inviteButton = page.getByRole('button', { name: 'Invite your colleague', exact: true });
    await inviteButton.click({ force: true });
});

// ai-studio-step-id: pwxf740500
await leapwork.step("Click the name@company.com email field in the Invite a friend form", async () => {
    const emailInput = page.locator('#invite-user-email');
    await emailInput.click({ force: true });
});

// ai-studio-step-id: pw1ptueb60
await leapwork.step(`Fill the name@company.com email field with ${invitationEmail}`, async () => {
    const email = page.locator('#invite-user-email');
    await email.fill(invitationEmail);
});

// ai-studio-step-id: pwyw435000
await leapwork.step("Set \"Add to my workspace\" checkbox", async () => {
    const addToWorkspaceCheckbox = page.getByRole('checkbox', { name: 'Add to my workspace', exact: true });
    await expect(addToWorkspaceCheckbox).toHaveCount(1);
    await addToWorkspaceCheckbox.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwtpxnmo00
await leapwork.step("Unset \"Add to my workspace\" checkbox", async () => {
    const addToWorkspaceCheckbox = page.getByRole('checkbox', { name: 'Add to my workspace', exact: true });
    await expect(addToWorkspaceCheckbox).toHaveCount(1);
    await addToWorkspaceCheckbox.click({ force: true });
}, { action: "click"});

// ai-studio-step-id: pw1gbzszf0
await leapwork.step("Click the Send invitation button in the Invite your colleague dialog", async () => {
    // Click button "Send invitation"
    await page.getByRole('button', { name: 'Send invitation' }).click();
}, { action: "click" });



// ai-studio-step-id: pwwq4gtz00
await leapwork.step("Validate the invitation sent message on Leapwork Play modal", async () => {
    // Assert paragraph contains "Invitation email sent. They can join Leapwork Play without being added to a team."
    await expect(page.getByText('Invitation email sent. They')).toContainText("Invitation email sent. They can join Leapwork Play without being added to a team.");
}, { action: "validate" });

// ai-studio-step-id: pwjyweg000
await leapwork.step("Click the Ok button on the invitation sent popup", async () => {
    // Click button "Ok"
    await page.getByRole('button', { name: 'Ok' }).click();
}, { action: "click" });

// ai-studio-step-id: f2f727d8
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
