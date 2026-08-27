import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.variables.set("nameCompanyCom", "dummy@dummy.com", leapwork.storage.LOCAL);
const lw__nameCompanyCom = leapwork.variables.get("nameCompanyCom", leapwork.storage.LOCAL) as string;

leapwork.variables.set("nameCompanyCom2", "d", leapwork.storage.LOCAL);
const lw__nameCompanyCom2 = leapwork.variables.get("nameCompanyCom2", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_47");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwfyiikl00
await leapwork.step("Click the Test-47 Play (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test-47 Play (Personal) AI' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]" });

// ai-studio-step-id: pw1y21xiw0
await leapwork.step("Click Account and settings in Leapwork Play.", async () => {
    // Click span
    await page.getByText('Account and settings').click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[3]/div[2]/div[6]/span" });

// ai-studio-step-id: pw9ewv2t00
await leapwork.step("Click the Workspace settings button in the settings navigation.", async () => {
    // Click button "Workspace settings"
    await page.getByRole('button', { name: 'Workspace settings' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div/div/nav/button[1]" });

// ai-studio-step-id: pwnai7x400
await leapwork.step("Click the Users tab in Workspace settings", async () => {
    // Click button "Users"
    await page.getByRole('button', { name: 'Users' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/div/div[@aria-label=\"Workspace settings tabs\"]/button[2]" });

// ai-studio-step-id: pwce2pyi00
await leapwork.step("Validate the Leapwork Play settings page shows “User Workspace role Teams & Roles Date added”", async () => {
    // Assert div contains "UserWorkspace roleTeams & RolesDate added"
    await expect(page.getByText('UserWorkspace roleTeams &')).toContainText("UserWorkspace roleTeams & RolesDate added");
}, { action: "validate", relativeXpath: ".//div/div/div/div[2]/div[2]/div[1]" });

// ai-studio-step-id: pw3j3w8900
await leapwork.step("Click the + Invite button in the Users section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Invite' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/div[1]/div[2]/button/span" });

// ai-studio-step-id: pw14x4qs20
await leapwork.step("Click the Email address field in the workspace invitation form", async () => {
    // Click textbox "Email address *"
    await page.getByRole('textbox', { name: 'Email address *' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"invite-workspace-user-email\"]" });

// ai-studio-step-id: pw1b9lljv0
await leapwork.step(`Fill the Email address field with "${lw__nameCompanyCom}"`, async () => {
    // Fill textbox "Email address *"
    await page.getByRole('textbox', { name: 'Email address *' }).fill(String(lw__nameCompanyCom));
}, { action: "input", relativeXpath: "//*[@id=\"invite-workspace-user-email\"]" });

// ai-studio-step-id: pww4nkw500
await leapwork.step("Click the Workspace role dropdown showing “Member”", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Workspace role' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/div[2]/div/button[@aria-label=\"Workspace role\"]/span[1]" });

// ai-studio-step-id: pw1661orc0
await leapwork.step("Click the Workspace admin option in the Workspace role menu", async () => {
    // Click span
    await page.getByText('Workspace admin').click();
}, { action: "click", relativeXpath: "//*[@id=\"fluent-option_r_h_\"]/span[2]" });

// ai-studio-step-id: pwsc176g00
await leapwork.step("Set \"My Team\" checkbox", async () => {
    // Check checkbox "My Team"
    await page.locator('.workspace-invite-popup-team-row', { hasText: 'My Team' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div/div/label/input" });

// ai-studio-step-id: pw3bucjq00
await leapwork.step("Click the My Team role dropdown currently set to Write", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'My Team role' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div/div/div/button[@aria-label=\"My Team role\"]/span[1]" });

// ai-studio-step-id: pwsrrqaf00
await leapwork.step("Click the Administrator option in the My Team role menu", async () => {
    // Click span
    await page.getByText('Administrator', { exact: true }).click();
}, { action: "click", relativeXpath: "//*[@id=\"fluent-option_r_j_\"]/span[2]" });

// ai-studio-step-id: pwkopcta00
await leapwork.step("Click Send invite in the workspace invitation popup", async () => {
    // Click button "Send invite"
    await page.getByRole('button', { name: 'Send invite' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div/div[3]/div/button[2]" });

// ai-studio-step-id: pw1glhk8v0
await leapwork.step("Click the Done button in the workspace invitation dialog", async () => {
    // Click button "Done"
    await page.getByRole('button', { name: 'Done' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div/div[3]/div/button" });

// ai-studio-step-id: pw1uw9yuc0
await leapwork.step("Click the + Invite button in the Users section", async () => {
    // Click button "+ Invite"
    await page.getByRole('button', { name: '+ Invite' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[2]/div[1]/div[2]/button" });

// ai-studio-step-id: pw1t8g3wf0
await leapwork.step(`Fill the Email address field with "${lw__nameCompanyCom2}"`, async () => {
    // Fill textbox "Email address *"
    await page.getByRole('textbox', { name: 'Email address *' }).fill(String(lw__nameCompanyCom2));
}, { action: "input", relativeXpath: "//*[@id=\"invite-workspace-user-email\"]" });

// ai-studio-step-id: pwc5dwei00
await leapwork.step("Click the Email address field in the workspace invitation form", async () => {
    // Click textbox "Email address *"
    await page.getByRole('textbox', { name: 'Email address *' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"invite-workspace-user-email\"]" });

// ai-studio-step-id: pwfr5lf000
await leapwork.step(`Fill the Email address field with ${lw__nameCompanyCom}`, async () => {
    // Fill textbox "Email address *"
    await page.getByRole('textbox', { name: 'Email address *' }).fill(String(lw__nameCompanyCom));
}, { action: "input", relativeXpath: "//*[@id=\"invite-workspace-user-email\"]" });

// ai-studio-step-id: pwp3ocku00
await leapwork.step("Set \"My Team\" checkbox", async () => {
    // Check checkbox "My Team"
    await page.locator('.workspace-invite-popup-team-row', { hasText: 'My Team' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div/div/label/input" });

// ai-studio-step-id: pw92gcwe00
await leapwork.step("Click the Send invite button", async () => {
    // Click button "Send invite"
    await page.getByRole('button', { name: 'Send invite' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div/div[3]/div/button[2]" });

// ai-studio-step-id: pw1jez8wn0
await leapwork.step("Validate the Leapwork Play settings page shows \"User already exists\" invite error", async () => {
    // Assert paragraph contains "User already exists. To update the permissions kindly edit the user."
    await expect(page.getByText('User already exists. To')).toContainText("User already exists. To update the permissions kindly edit the user.");
}, { action: "validate", relativeXpath: ".//div/div[2]/div[3]/div/div[2]/p" });

// ai-studio-step-id: pw1k8ee8y0
await leapwork.step("Click the Close invite popup button in the Invite users dialog", async () => {
    // Click button "Close invite popup"
    await page.getByRole('button', { name: 'Close invite popup' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/div[3]/div/div[1]/button[@aria-label=\"Close invite popup\"]" });

// ai-studio-step-id: pw6y5vkf00
await leapwork.step("Validate the user role shows \"Workspace admin\" for dummy@dummy.com on the Users page", async () => {
    // Assert span contains "Wrokspace admin"
    await expect(page.getByRole('button', { name: 'Edit dummy@dummy.com' })).toContainText("Workspace admin");
}, { action: "validate", relativeXpath: ".//div/div[2]/div[2]/div[@aria-label=\"Edit dummy@dummy.com\"]/span[1]/span" });

// ai-studio-step-id: pw1p3qavd0
await leapwork.step("Click the Edit button for the pending user dummy@dummy.com in the Users list", async () => {
    // Click span
    await page.getByRole('button', { name: 'Edit dummy@dummy.com' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[@aria-label=\"Edit dummy@dummy.com\"]/div/div[2]/div/span[1]" });

// ai-studio-step-id: pw17pt6xy0
await leapwork.step("Click the Workspace role dropdown showing “Workspace admin”", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Workspace role' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/div[2]/div/button[@aria-label=\"Workspace role\"]/span[1]" });

// ai-studio-step-id: pw1pp0gxh0
await leapwork.step("Click the Member option in the Workspace role dropdown for the user edit popup", async () => {
    // Click option "Member"
    await page.getByRole('option', { name: 'Member' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"fluent-option_r_r_\"]" });



// ai-studio-step-id: pwblfwds00
await leapwork.step("Click the My Team role dropdown set to Administrator", async () => {
    // Click combobox "My Team role"
    await page.getByRole('combobox', { name: 'My Team role' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div[2]/div/div/button[@aria-label=\"My Team role\"]" });

// ai-studio-step-id: pwf9dofd00
await leapwork.step("Click the \"Write\" option in the My Team role dropdown", async () => {
    // Click span
    await page.getByText('Write').click();
}, { action: "click", relativeXpath: "//*[@id=\"fluent-option_r_t_\"]/span[2]" });

// ai-studio-step-id: pw1njc3lf0
await leapwork.step("Click Save changes in the workspace user settings dialog", async () => {
    // Click button "Save changes"
    await page.getByRole('button', { name: 'Save changes' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div/div[3]/div/div/button[2]" });

// ai-studio-step-id: pwaxnd0u00
await leapwork.step("Validate the user role shows \"Member\" for dummy@dummy.com on the Users page", async () => {
    // Assert span contains "Member"
    await expect(page.getByRole('button', { name: 'Edit dummy@dummy.com' })).toContainText("Member");
}, { action: "validate", relativeXpath: ".//div/div[2]/div[2]/div[@aria-label=\"Edit dummy@dummy.com\"]/span[1]/span" });

// ai-studio-step-id: pws5bvx100
await leapwork.step("Click the Edit button for the pending user dummy@dummy.com", async () => {
    // Click span
    await page.getByRole('button', { name: 'Edit dummy@dummy.com' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[@aria-label=\"Edit dummy@dummy.com\"]/div/div[2]/div/span[1]" });

// ai-studio-step-id: pwlaeyyq00
await leapwork.step("Click the Revoke invite button in the user settings.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Revoke invite' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div/div[3]/div/button/span" });
