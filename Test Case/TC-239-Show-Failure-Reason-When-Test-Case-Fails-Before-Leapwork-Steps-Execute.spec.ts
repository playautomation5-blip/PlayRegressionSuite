import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { teamName } from "@assets/Utilities/random-team";

leapwork.variables.set("userId", "user_69");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("envName", "Leapwork");
leapwork.variables.set("envUrl", "https://demoapps.leapwork.ai/retail/");
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "Test Case")

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwr05kkv00
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });


// ai-studio-step-id: pw19rbue70
await leapwork.step("Click the Explorer button in the left navigation menu", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });


// ai-studio-step-id: pw9mfwyy00
await leapwork.step("Double-click the TC-1 test case in Leapwork Play", async () => {
    // Double-click "Test Case"
    await page.getByText('TC-').dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pweuclfd00
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1jth2uf0
await leapwork.step("Click Connect to connect to the Google Chromium browser in North Europe (Ireland)", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pw9evudx00
await leapwork.step("Click the Run button to execute the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
}, { action: "click"});

// ai-studio-step-id: pwv13t1800
await leapwork.step("Validate the Leapwork Play page shows \"Intentional runtime error before step execution\"", async () => {
    // Assert span contains "Intentional runtime error before step execution"
    await expect(page.locator('#root').getByText('Intentional runtime error before step execution', { exact: true })).toContainText("Intentional runtime error before step execution");
}, { action: "validate"});