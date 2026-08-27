import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");


// ai-studio-step-id: 57ff770f
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw1roex190
await leapwork.step("Click the Automation Account (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click"});

// ai-studio-step-id: pw5lhfl000
await leapwork.step("Click the Leapwork Play Monitor link", async () => {
    // Click span
    await page.getByText('Leapwork Play Monitor').click();
}, { action: "click" });

// ai-studio-step-id: pwonrxvn00
await leapwork.step("Validate that the Clarity — Play Monitor heading appears on the Leapwork AI Studio page", async () => {
    // Assert heading "Clarity — AI Studio Monitor" contains "Clarity — AI Studio Monitor"
    await expect(page.getByRole('heading', { name: 'Clarity — Play Monitor' })).toContainText("Clarity — Play Monitor");
}, { action: "validate" });

// ai-studio-step-id: pwwlonw000
await leapwork.step("Validate that 'Cumulative data span' appears in the Cumulative data span section on Leapwork AI Studio", async () => {
    // Assert paragraph contains "Cumulative data span"
    await expect(page.getByText('Cumulative data span')).toContainText("Cumulative data span");
}, { action: "validate" });

// ai-studio-step-id: pwhn3x7500
await leapwork.step("Validate that 'Traffic (sessions)' appears in Summary metrics on Leapwork AI Studio", async () => {
    // Assert paragraph contains "Traffic (sessions)"
    await expect(page.getByText('Traffic (sessions)')).toContainText("Traffic (sessions)");
}, { action: "validate" });

// ai-studio-step-id: pw1ulako00
await leapwork.step("Validate that 'Dead clicks' appears in Summary metrics on the Leapwork AI Studio page", async () => {
    // Assert paragraph contains "Dead clicks"
    await expect(page.getByLabel('Summary metrics').getByText('Dead clicks')).toContainText("Dead clicks");
}, { action: "validate" });

// ai-studio-step-id: pw19kuy9x0
await leapwork.step("Validate that 'Script errors' appears in Summary metrics on the Leapwork AI Studio page", async () => {
    // Assert paragraph contains "Script errors"
    await expect(page.getByLabel('Summary metrics').getByText('Script errors')).toContainText("Script errors");
}, { action: "validate" });

// ai-studio-step-id: pw9ibh1e00
await leapwork.step("Validate that the Avg scroll depth label shows 'Avg scroll depth' in Summary metrics", async () => {
    // Assert paragraph contains "Avg scroll depth"
    await expect(page.getByText('Avg scroll depth')).toContainText("Avg scroll depth");
}, { action: "validate" });

// ai-studio-step-id: pwpxqsrl00
await leapwork.step("Validate that 'Avg engagement (total time)' appears in Summary metrics on Leapwork AI Studio", async () => {
    // Assert paragraph contains "Avg engagement (total time)"
    await expect(page.getByText('Avg engagement (total time)')).toContainText("Avg engagement (total time)");
}, { action: "validate" });

// ai-studio-step-id: pw7858fl00
await leapwork.step("Validate that the Traffic — totalSessionCount by URL heading appears on Leapwork AI Studio", async () => {
    // Assert heading "Traffic — totalSessionCount by URL" contains "Traffic — totalSessionCount by URL"
    await expect(page.getByRole('heading', { name: 'Traffic — totalSessionCount' })).toContainText("Traffic — totalSessionCount by URL");
}, { action: "validate" });

// ai-studio-step-id: pw1gbdl3u0
await leapwork.step("Validate that the \"Issue mix\" heading appears on the Leapwork AI Studio monitor page", async () => {
    // Assert heading "Issue mix" contains "Issue mix"
    await expect(page.getByRole('heading', { name: 'Issue mix' })).toContainText("Issue mix");
}, { action: "validate" });

