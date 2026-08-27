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

// ai-studio-step-id: 23fb4baf
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: mofCWEHi
await leapwork.step("Click the Automation Account (Personal) button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: 70STccdh
await leapwork.step("Click the Documentation item in the Leapwork Play docs dialog", async () => {
    
    const documentation = page.getByText('Documentation', { exact: true });
    await documentation.click({ force: true });
});

// ai-studio-step-id: QWsmCUB9
await leapwork.step("Validate that the Welcome to Play heading shows 'Welcome to Play' on the Leapwork Play page", async () => {
    // Assert span contains "Welcome to Play"
    await expect(page.locator('h1').getByText('Welcome to Play')).toContainText("Welcome to Play");
}, { action: "validate" });

// ai-studio-step-id: DVFXiTyE
await leapwork.step("Click the Build a Knowledge Base and Generate Blueprints button", async () => {
    const target = page.getByRole('button', { name: 'Build a Knowledge Base and Generate Blueprints', exact: true });
    await target.click({ force: true });
});

// ai-studio-step-id: 4eTjlres
await leapwork.step("Click the Close documentation button", async () => {
    const closeDocButton = page.getByRole('button', { name: 'Close documentation', exact: true });
    await closeDocButton.click({ force: true });
});
