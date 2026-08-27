import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

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
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: gimDSDYb
await leapwork.step("Click the Automation Account (Personal) button in Leapwork Play.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
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
await leapwork.step("Validate the show-whats-new feature flag is Enabled on the Feature Flags page", async () => {
    // Assert span contains "Enabled"
    const status = (await page
        .locator('tr:nth-child(19) > td:nth-child(2) > .admin-status-pill')
        .textContent())?.trim();

        expect(status).toBe("Enabled");
}, { action: "validate" });


// ai-studio-step-id: bk8DcwCe
await leapwork.step("Click the What's new button in the Leapwork Play header", async () => {
    // Click button "What's new"
    await page.getByRole('button', { name: 'What\'s new', exact: true }).click();
}, { action: "click", relativeXpath: "//*[@id=\"root\"]/div/div[3]/div[1]/div[2]/button[@aria-label=\"What's new\"]" });

// ai-studio-step-id: hG8SYFVu
await leapwork.step("Validate the Leapwork Play page heading shows “What's new in Leapwork Play”", async () => {
    // Assert heading "What's new in Leapwork Play" contains "What's new in Leapwork Play"
    await expect(page.getByRole('heading', { name: 'What\'s new in Leapwork Play' })).toContainText("What's new in Leapwork Play");
}, { action: "validate", relativeXpath: "//*[@id=\"whats-new-panel-title\"]" });