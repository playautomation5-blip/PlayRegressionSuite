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

// ai-studio-step-id: 35f5f099
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 5Pd05HIg
await leapwork.step("Click the Automation Account (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click"});

// ai-studio-step-id: a5q3EVdc
await leapwork.step("Click the Leapwork Play Monitor link", async () => {
    // Click span
    await page.getByText('Leapwork Play Monitor').click();
}, { action: "click" });

// ai-studio-step-id: E5c5v5bi
await leapwork.step("Validate that the Clarity — Play Monitor heading appears on the Leapwork AI Studio page", async () => {
    // Assert heading "Clarity — AI Studio Monitor" contains "Clarity — AI Studio Monitor"
    await expect(page.getByRole('heading', { name: 'Clarity — Play Monitor' })).toContainText("Clarity — Play Monitor");
}, { action: "validate" });

// ai-studio-step-id: 8FEf1XZs
await leapwork.step("Validate that 'Cumulative data span' appears in the Cumulative data span section on Leapwork AI Studio", async () => {
    // Assert paragraph contains "Cumulative data span"
    await expect(page.getByText('Cumulative data span')).toContainText("Cumulative data span");
}, { action: "validate" });

// ai-studio-step-id: DlQKwKoC
await leapwork.step("Validate that 'Traffic (sessions)' appears in Summary metrics on Leapwork AI Studio", async () => {
    // Assert paragraph contains "Traffic (sessions)"
    await expect(page.getByText('Traffic (sessions)')).toContainText("Traffic (sessions)");
}, { action: "validate" });

// ai-studio-step-id: D4TzGAaV
await leapwork.step("Validate that 'Dead clicks' appears in Summary metrics on the Leapwork AI Studio page", async () => {
    // Assert paragraph contains "Dead clicks"
    await expect(page.getByLabel('Summary metrics').getByText('Dead clicks')).toContainText("Dead clicks");
}, { action: "validate" });

// ai-studio-step-id: Gw13cfc0
await leapwork.step("Validate that 'Script errors' appears in Summary metrics on the Leapwork AI Studio page", async () => {
    // Assert paragraph contains "Script errors"
    await expect(page.getByLabel('Summary metrics').getByText('Script errors')).toContainText("Script errors");
}, { action: "validate" });

// ai-studio-step-id: Pcf8KPOk
await leapwork.step("Validate that the Avg scroll depth label shows 'Avg scroll depth' in Summary metrics", async () => {
    // Assert paragraph contains "Avg scroll depth"
    await expect(page.getByText('Avg scroll depth')).toContainText("Avg scroll depth");
}, { action: "validate" });

// ai-studio-step-id: 78OyjkKO
await leapwork.step("Validate that 'Avg engagement (total time)' appears in Summary metrics on Leapwork AI Studio", async () => {
    // Assert paragraph contains "Avg engagement (total time)"
    await expect(page.getByText('Avg engagement (total time)')).toContainText("Avg engagement (total time)");
}, { action: "validate" });

// ai-studio-step-id: q4as0NtL
await leapwork.step("Validate that the Traffic — totalSessionCount by URL heading appears on Leapwork AI Studio", async () => {
    // Assert heading "Traffic — totalSessionCount by URL" contains "Traffic — totalSessionCount by URL"
    await expect(page.getByRole('heading', { name: 'Traffic — totalSessionCount' })).toContainText("Traffic — totalSessionCount by URL");
}, { action: "validate" });

// ai-studio-step-id: 154PlAwm
await leapwork.step("Validate that the \"Issue mix\" heading appears on the Leapwork AI Studio monitor page", async () => {
    // Assert heading "Issue mix" contains "Issue mix"
    await expect(page.getByRole('heading', { name: 'Issue mix' })).toContainText("Issue mix");
}, { action: "validate" });
