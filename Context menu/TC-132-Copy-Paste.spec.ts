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

leapwork.variables.set("userId", "user_55");


// ai-studio-step-id: pw1nmis310
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: HxWL6V12
await leapwork.step("Click the Getting started test case item", async () => {
    // Click "Getting started test case"
    await page.getByText('Getting started test case').click();
}, { action: "click" });

// ai-studio-step-id: CVs6OJAP
await leapwork.step("Double-click the TC-1 test case item", async () => {
    // Double-click "Getting started test case"
    await page.getByText('TC-').dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: BZNJEQRt
await leapwork.step("Click the Products link in the primary navigation", async () => {
    // Click span
    await page.getByText('Click the Products link in the primary navigation', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: yrLZw3b2
await leapwork.step("Right-click the \"Click the Products link in the primary navigation\" step", async () => {
    // Right-click span
    await page.getByText('Click the Products link in the primary navigation', { exact: true }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: NC0yBn9t
await leapwork.step("Click Copy in the step context menu", async () => {
    // Click div
    await page.getByText('Copy', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: ADGvQx8j
await leapwork.step("Click the View details button for Window Perch Cat Tree in the product list", async () => {
    // Click span
    await page.getByText('Click the View details button for Window Perch Cat Tree in the product list', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: nePwI34j
await leapwork.step("Right-click the step \"Click the View details button for Window Perch Cat Tree in the product list\"", async () => {
    // Right-click span
    await page.getByText('Click the View details button for Window Perch Cat Tree in the product list', { exact: true }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: o17Qazc6
await leapwork.step("Click the Paste option in the context menu", async () => {
    // Click div
    await page.getByText('Paste', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: XUuaJqMs
await leapwork.step("Validate that \"Click the Products link in the primary navigation\" appears on Leapwork Play", async () => {
    // Assert span contains "Click the Products link in the primary navigation"
    await expect(page.getByText('Click the Products link in').nth(3)).toContainText("Click the Products link in the primary navigation");
}, { action: "validate" });

// ai-studio-step-id: q1Jukgs7
await leapwork.step("Right-click the \"Click the Products link in the primary navigation\" step", async () => {
    // Right-click span
    await page.getByText('Click the Products link in').nth(3).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: 2YcVFb2F
await leapwork.step("Click Delete in the step context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click" });