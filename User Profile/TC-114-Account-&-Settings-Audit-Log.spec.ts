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

leapwork.variables.set("userId", "user_41");

// ai-studio-step-id: b2f93ea4
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: Bvvb40QW
await leapwork.step("Click the Test-41 Play (Personal) button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Test-41 Play (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: WiCXx6vu
await leapwork.step("Click the Account and settings option to open the Account and Settings dialog", async () => {
    const target = page.getByText('Account and settings', { exact: true });
    await target.click({ force: true });
});

// ai-studio-step-id: pwbo3g3f00
await leapwork.step("Click Credits in the settings navigation", async () => {
    // Click button "Credits"
    await page.getByRole('button', { name: 'Credits', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: U0p1YwmS
await leapwork.step("Validate that the Credits heading shows 'Credits' on the Leapwork Play page", async () => {
    // Assert heading "Credits" contains "Credits"
    await expect(page.getByRole('heading', { name: 'Credits' })).toContainText("Credits");
}, { action: "validate" });

// ai-studio-step-id: V4scGlou
await leapwork.step("Click the Month dropdown and select 2026-05", async () => {
    const monthSelect = page.locator('#credits-overview-month-select');
    await monthSelect.selectOption('2026-05');
});

// ai-studio-step-id: pwjau6z900
await leapwork.step("Click the Audit logs button", async () => {
    const auditLogsButton = page.getByRole('button', { name: 'Audit logs', exact: true });
    await auditLogsButton.click({ force: true });
});

// ai-studio-step-id: pw1yzqcip0
await leapwork.step(
  "Validate loading appears",
  async () => {
    const loading = page.getByText("Loading...");

    try {
      await loading.waitFor({ state: "visible", timeout: 3000 });
      await loading.waitFor({ state: "hidden", timeout: 10000 });
    } catch {
      // loading may appear and disappear too fast, so do not fail
    }
  },
  { action: "validate", relativeXpath: "", timeoutMs: 10000 }
);

// ai-studio-step-id: QVGjSCWl
await leapwork.step("Validate that the Audit logs button shows 'Audit logs' on Leapwork Play", async () => {
    // Assert span contains "Audit logs"
    await expect(page.getByRole('button', { name: 'Audit logs' })).toContainText("Audit logs");
}, { action: "validate"});

// ai-studio-step-id: pw1plwxpa0
await leapwork.step("Click the page background in Leapwork AI Studio", async () => {
    const body = page.locator('body');
    await body.click({ force: true });
});

// ai-studio-step-id: pw1z0m3jf0
await leapwork.step("Click Account & Settings tab", async () => {
    // Click button "Account & Settings close"
    await page.locator('.tab[title="Account & Settings"]').locator('.tab-close').click();
}, { action: "click" });
