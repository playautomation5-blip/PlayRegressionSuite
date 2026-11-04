import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RandomTeam as teamName } from "@assets/Utilities/random-team";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";

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

// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
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
await leapwork.step("Double-click the TC-2 test case in Leapwork Play", async () => {
    // Double-click "Test Case"
    await page.getByText('TC-2').dblclick();
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

// ai-studio-step-id: pw1qkof5u0
await leapwork.step("Click Run to execute the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run', exact: true }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]" });

// ai-studio-step-id: pwv13t1800
await leapwork.step("Validate the Leapwork Play page shows \"Intentional runtime error before step execution\"", async () => {
    // Assert span contains "Intentional runtime error before step execution"
    await expect(page.locator('#root').getByText('Intentional runtime error before step execution', { exact: true })).toContainText("Intentional runtime error before step execution");
}, { action: "validate"});
