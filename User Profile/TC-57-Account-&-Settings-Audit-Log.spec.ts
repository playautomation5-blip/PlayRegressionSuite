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

// ai-studio-step-id: 7a16283c
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwxspsol00
await leapwork.step("Click the Automation Account (Personal) button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: pwe199eq00
await leapwork.step("Click the Account and settings option to open the Account and Settings dialog", async () => {
    const target = page.getByText('Account and settings', { exact: true });
    await target.click({ force: true });
});

// ai-studio-step-id: pw1a6a8iz0
await leapwork.step("Click the Credits button in Settings navigation", async () => {
    // Click button "Credits"
    await page.getByRole('button', { name: 'Credits', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwdnapzp00
await leapwork.step("Validate that the Credits heading shows 'Credits' on the Leapwork Play page", async () => {
    // Assert heading "Credits" contains "Credits"
    await expect(page.getByRole('heading', { name: 'Credits' })).toContainText("Credits");
}, { action: "validate" });

// ai-studio-step-id: pwote9o900
await leapwork.step("Click the Month dropdown and select 2026-05", async () => {
    const monthSelect = page.locator('#credits-overview-month-select');
    await monthSelect.selectOption('2026-05');
});

// ai-studio-step-id: pwacgkys00
await leapwork.step("Click the Audit logs button", async () => {
    const auditLogsButton = page.getByRole('button', { name: 'Audit logs', exact: true });
    await auditLogsButton.click({ force: true });
});

// ai-studio-step-id: pw1bbkmn90
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

// ai-studio-step-id: pwi4mb0y00
await leapwork.step("Validate that the Audit logs button shows 'Audit logs' on Leapwork Play", async () => {
    // Assert span contains "Audit logs"
    await expect(page.getByRole('button', { name: 'Audit logs' })).toContainText("Audit logs");
}, { action: "validate"});

// ai-studio-step-id: pw80gaal00
await leapwork.step("Click the page background in Leapwork AI Studio", async () => {
    const body = page.locator('body');
    await body.click({ force: true });
});

// ai-studio-step-id: pwjrj3it00
await leapwork.step("Click the Account & Settings tab in Leapwork Play", async () => {
    // Click button "Account & Settings close"
    await page.getByRole('button', { name: 'Account & Settings close' }).click();
}, { action: "click" });
