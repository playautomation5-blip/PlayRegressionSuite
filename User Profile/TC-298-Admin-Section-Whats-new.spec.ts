import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: gimDSDYb
await leapwork.step("Click the gamev24783@playfine.com (Personal) button in Leapwork Play.", async () => {
    // Click span
    await page.getByRole('button', { name: 'gamev24783@playfine.com (Personal)' }).click();
}, { action: "click" });

// ai-studio-step-id: KSpWrjjk
await leapwork.step("Click the Admin Section link on the Leapwork Play page", async () => {
    // Click span
    await page.getByText('Admin Section').click();
}, { action: "click" });

// ai-studio-step-id: KQzQJdY9
await leapwork.step("Click the What's New tab in the Admin section tabs", async () => {
    // Click button "What's New"
    await page.getByRole('button', { name: 'What\'s New', exact: true }).click();
}, { action: "click"});

// ai-studio-step-id: Hkc259Hq
await leapwork.step("Validate the \"Download Template\" button on the Leapwork Play admin page.", async () => {
    // Assert button "Download Template" contains "Download Template"
    await expect(page.getByRole('button', { name: 'Download Template' })).toContainText("Download Template");
}, { action: "validate" });

// ai-studio-step-id: WudJOqhL
await leapwork.step("Click the Feature Flags button in the Admin section tabs", async () => {
    // Click button "Feature Flags"
    await page.getByRole('button', { name: 'Feature Flags' }).click();
}, { action: "click" });

// ai-studio-step-id: 887woMVc
await leapwork.step("Validate the Feature Flags table shows \"show-whats-new\" on Leapwork Play.", async () => {
    // Assert div contains "show-whats-new"
    await expect(page.getByText('show-whats-new')).toContainText("show-whats-new");
}, { action: "validate"});

// ai-studio-step-id: GUM5bwGv
await leapwork.step("Validate that the Feature Flags table contains “show-whats-new” on Leapwork Play.", async () => {
    // Assert div contains "show-whats-new"
    await expect(page.getByText('show-whats-new')).toContainText("show-whats-new");
}, { action: "validate"});

// ai-studio-step-id: cUlWtrfI
await leapwork.step("Validate the show-whats-new feature flag status is \"Enabled\" on Leapwork Play.", async () => {
    // Assert span contains "Enabled"
    await expect(page.locator('tr:nth-child(11) > td:nth-child(2) > .admin-status-pill')).toContainText("Enabled");
}, { action: "validate"});


// ai-studio-step-id: pwmy1ofp00
await leapwork.step("Click the What's new button in the Leapwork Play header", async () => {
    // Click button "What's new"
    await page.getByRole('button', { name: 'What\'s new', exact: true }).click();
}, { action: "click" });



// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from show-whats-new", async () => {
//     // Get value from div
//     const lw_value = (await page.getByText('show-whats-new').textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_showWhatsNew", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[2]/table/tbody/tr[10]/td[1]/div" });




// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from Enabled", async () => {
//     // Get value from span
//     const lw_value = (await page.locator('tr:nth-child(10) > td:nth-child(2) > .admin-status-pill').textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_enabled", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[2]/table/tbody/tr[10]/td[2]/span" });



// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from Enabled", async () => {
//     // Get value from span
//     const lw_value = (await page.locator('tr:nth-child(11) > td:nth-child(2) > .admin-status-pill').textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_enabled", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[2]/table/tbody/tr[11]/td[2]/span" });
