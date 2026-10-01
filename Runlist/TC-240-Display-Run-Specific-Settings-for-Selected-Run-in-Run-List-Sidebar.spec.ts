import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { AddEnvToATestCase } from "@assets/Utilities/Add Env to a test case";
import { BasicFlow } from "@assets/Utilities/Basic Flow";
import { RunlistDefaultExecutionMode } from "@assets/Utilities/Runlist- Default Execution Mode";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_6"); // Do not change the user (If necessary : change step 11 dependency as well)
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("assetType2", "New runlist");
leapwork.variables.set("renamedAssetName", "renamed");
leapwork.variables.set("envName", "Leapwork");
leapwork.variables.set("envUrl", "https://leapwork.com");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1y4nxq40
await leapwork.step("Use test case: Create New Asset - Test Case", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 10000 });

// ai-studio-step-id: pw1okapbh0
await leapwork.step("Use test case: Add Env to a test case", async () => {
    return await AddEnvToATestCase();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 42a9baf5
await leapwork.step("Use test case: Basic Flow", async () => {
    return await BasicFlow();
}, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 10000, continueOnFailure: true });

// await leapwork.step("Use test case: Create New Asset - Runlist", async () => {
//     return await CreateNewAsset();
// }, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 10000 });

//---
// ai-studio-step-id: pw1ji9kzj0
await leapwork.step(`click the "${teamName}" folder on the Leapwork AI Studio page`, async () => {
    const regression = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await regression.click({force: true });
},{ action: "click"});

// ai-studio-step-id: pw12ecmn40
await leapwork.step("Click Create new in the asset menu", async () => {   
    const createNewButton = page.getByRole('button', { name: `Create new in ${teamName}`, exact: true });
    await createNewButton.click({ force: true });
});

// ai-studio-step-id: pwh6qa7h00
await leapwork.step(`Click the "New runlist" option in the Create new menu`, async () => {
    // Click div
    await page.getByText("New runlist").click();
}, { action: "click" });

// ai-studio-step-id: pwpg90vm00
await leapwork.step(`Replace the textbox with \"New runlist\" with value \"Name\"`, async () => {
    const newAgent = page.getByRole('textbox', { name: '', exact: true });
    await newAgent.fill("Created");
});

//--
// await leapwork.step("Use test case: Runlist- Default Execution Mode", async () => {
//     return await RunlistDefaultExecutionMode();
// }, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1nf1u7a0
await leapwork.step("Click the Run settings button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Run settings' }).click();
}, { action: "click" });

// ai-studio-step-id: pw16jfl5h0
await leapwork.step("Click the Execution mode button in Run settings (currently set to Sequential)", async () => {
    // Click button "Execution mode"
    await page.getByRole('button', { name: 'Execution mode' }).click();
}, { action: "click" });

// ai-studio-step-id: pwmxhw0o00
await leapwork.step("Click the Execution mode button and select Sequential.", async () => {
    // Click div
    await page.getByText('Sequential').nth(1).click();
}, { action: "click" });

//--
// ai-studio-step-id: pw5w7x6200
await leapwork.step("Validate the Selection criteria shows Execution mode: \"Sequential\" on Leapwork Play", async () => {
    // Assert span contains "Sequential"
    await expect(page.getByText('Sequential')).toContainText("Sequential");
}, { action: "validate" });

// ai-studio-step-id: pwmugztn00
await leapwork.step("Validate on Leapwork Play that “Continue if a test case fails” is checked", async () => {
    // Assert checkbox "Continue if a test case fails" is unchecked
    await expect(page.getByRole('checkbox', { name: 'Continue if a test case fails' })).toBeChecked();
}, { action: "validate" });


// ai-studio-step-id: pw11u5pzd0
await leapwork.step("Click the Selection button in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Selection' }).click();
}, { action: "click"});

// ai-studio-step-id: YftlcpkN
await leapwork.step("Click the Filter dropdown in the Selection criteria section", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Filter$/ }).nth(2).click();
}, { action: "click" });

// ai-studio-step-id: 7LVmFs9L
await leapwork.step("Click the “Random” selection criterion under “Filter” in Leapwork Play", async () => {
    // Click div
    await page.getByText('Random').click();
}, { action: "click" });

// ai-studio-step-id: oyyCyx7g
await leapwork.step("Click the “Run now” button in the Selection criteria section", async () => {
    // Click button "Run now"
    await page.getByRole('button', { name: 'Run now' }).click();
}, { action: "click" });

// ai-studio-step-id: pw48phnh00
await leapwork.step("Click the running Test-6 Play run in the Run log", async () => {
    await page.locator(".rl-run")
        .filter({ hasText: "Test-6 Play" })
        .click();
}, {
    action: "click"
});

// ai-studio-step-id: pwuorly900
await leapwork.step("Wait for Run to Start - 1 minute", async () => {
  await page.waitForTimeout(60000);
}, {
  action: "custom"
});

// ai-studio-step-id: pw1jvvr0i0
await leapwork.step("Click Run information in the run details dialog", async () => {
    // Click button "Run information"
    await page.getByRole('button', { name: 'Run information' }).click();
}, { action: "click"});


// ai-studio-step-id: pwg6eltl00
await leapwork.step("Validate the Leapwork Play page heading shows \"Run Information\"", async () => {
    // Assert heading "Run Information" contains "Run Information"
    await expect(page.getByRole('heading', { name: 'Run Information' })).toContainText("Run Information");
}, { action: "validate" });

// ai-studio-step-id: pw1egr02y0
await leapwork.step("Validate the Run Information dialog shows \"Key details about this run.\"", async () => {
    // Assert paragraph contains "Key details about this run."
    await expect(page.getByText('Key details about this run.')).toContainText("Key details about this run.");
}, { action: "validate"});

// ai-studio-step-id: pw2ayfqz00
await leapwork.step("Validate the Run Information shows “Test cases selected” as 1", async () => {
    // Assert term contains "Test cases selected"
    await expect(page.getByText('Test cases selected')).toContainText("Test cases selected");
}, { action: "validate"});

// ai-studio-step-id: pw15nravc0
await leapwork.step("Click Close on the Run Information dialog", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Close$/ }).click();
}, { action: "click"});

// ai-studio-step-id: pwdczomt00
await leapwork.step("Validate the Run Information dialog shows “Environment”", async () => {
    // Assert span contains "Environment"
    await expect(page.getByText('Environment', { exact: true })).toContainText("Environment");
}, { action: "validate" });

// ai-studio-step-id: pw8z9qt700
await leapwork.step("Validate the Run Information shows Self-healing set to On on the Run log page", async () => {
    // Assert div contains "Self-healingOn"
    await expect(page.getByText('Self-healingOn')).toContainText("Self-healingOn");
}, { action: "validate"});

// ai-studio-step-id: pwgn0j6o00
await leapwork.step("Validate Run Information shows Environment as \"Default environment\"", async () => {
    // Assert span contains "Environment"
    await expect(page.getByText('Environment', { exact: true })).toContainText("Environment");
}, { action: "validate"});

// ai-studio-step-id: pw11gtxnj0
await leapwork.step("Click Close on the Run details dialog", async () => {
    // Click button "Close"
    await page.getByText('Close').click();
}, { action: "click" });

// ai-studio-step-id: pwswwi7k00
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });