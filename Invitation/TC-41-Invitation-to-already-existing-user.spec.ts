import { leapwork } from "./leapwork";

import { RandomTeam2, RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { ConstantORExtensions, invitationEmail } from "@assets/Utilities/ConstantORExtensions";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

//Invitation to user who already exists in the system

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_17");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New agent");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");

// ai-studio-step-id: 0ed1213a
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });



// ai-studio-step-id: pwqkbaxl00
await leapwork.step("Validate that the \"Invite your colleague\" button shows \"Invite your colleague\" on Leapwork Play", async () => {
    // Assert span contains "Invite your colleague"
    await expect(page.getByRole('button', { name: 'Invite your colleague' })).toContainText("Invite your colleague");
}, { action: "validate" });

// ai-studio-step-id: pwlm49pq00
await leapwork.step("Click the Invite your colleague button", async () => {
    const inviteButton = page.getByRole('button', { name: 'Invite your colleague', exact: true });
    await inviteButton.click({ force: true });
});

// ai-studio-step-id: pwftag8r00
await leapwork.step("Click the name@company.com email field in the Invite a friend form", async () => {
    const emailInput = page.locator('#invite-user-email');
    await emailInput.click({ force: true });
});

// ai-studio-step-id: pwprvxr400
await leapwork.step(`Fill the name@company.com email field with ${invitationEmail}`, async () => {
    const email = page.locator('#invite-user-email');
    await email.fill(invitationEmail);
});

// ai-studio-step-id: pw1ty6bmn0
await leapwork.step("Click the Send invitation button in the Invite your colleague dialog", async () => {
    // Click button "Send invitation"
    await page.getByRole('button', { name: 'Send invitation' }).click();
}, { action: "click" });

// ai-studio-step-id: pwwgnvrg00
await leapwork.step("Validate the Leapwork Play invite popup shows 'User already exists'", async () => {
    // Assert paragraph contains "User already invited."
    await expect(page.getByText('User already exists')).toContainText("User already exists");
}, { action: "validate" });

// ai-studio-step-id: pwn08weh00
await leapwork.step("Click the Cancel button on the invite user popup", async () => {
    // Click button "Cancel"
    await page.getByRole('button', { name: 'Cancel' }).click();
}, { action: "click" });
