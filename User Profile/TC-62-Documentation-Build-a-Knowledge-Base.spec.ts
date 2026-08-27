import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");

// ai-studio-step-id: f70d55e4
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw9k6gc100
await leapwork.step("Click the Automation Account (Personal) button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: pw17esuey0
await leapwork.step("Click the Documentation item in the Leapwork Play docs dialog", async () => {
    
    const documentation = page.getByText('Documentation', { exact: true });
    await documentation.click({ force: true });
});

// ai-studio-step-id: pw1xsb4g70
await leapwork.step("Validate that the Welcome to Play heading shows 'Welcome to Play' on the Leapwork Play page", async () => {
    // Assert span contains "Welcome to Play"
    await expect(page.locator('h1').getByText('Welcome to Play')).toContainText("Welcome to Play");
}, { action: "validate" });

// ai-studio-step-id: pw1ge9ao60
await leapwork.step("Click the Build a Knowledge Base and Generate Blueprints button", async () => {
    const target = page.getByRole('button', { name: 'Build a Knowledge Base and Generate Blueprints', exact: true });
    await target.click({ force: true });
});

// ai-studio-step-id: pw1pw9k100
await leapwork.step("Click the Close documentation button", async () => {
    const closeDocButton = page.getByRole('button', { name: 'Close documentation', exact: true });
    await closeDocButton.click({ force: true });
});

