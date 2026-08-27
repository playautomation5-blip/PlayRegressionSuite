import { leapwork } from "./leapwork";

import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_20");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: b2428f91
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 87d7a51e
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw1u46evo0
await leapwork.step("Double-click team 35512", async () => {
    // Double-click "team 35512"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });


// await leapwork.step("Double-click the Search field in the Leapwork Play explorer.", async () => {
//     // Double-click textbox "Search"
//     await page.getByRole('textbox', { name: 'Search' }).dblclick();
// }, { action: "dblclick", relativeXpath: ".//div[2]/div[1]/div[2]/div[2]/div[1]/input" });



// ai-studio-step-id: pwkl1crt00
await leapwork.step("Click the + Add Environment button", async () => {
    const addEnvironmentButton = page.getByRole('button', { name: '+ Add Environment', exact: true });
    await addEnvironmentButton.click({ force: true });
});

// ai-studio-step-id: pwzdz0ho00
await leapwork.step("Fill the Environment name field with \"env name\"", async () => {
    const envName = page.getByPlaceholder('Environment name', { exact: true });
    await envName.fill('env name');
});

// ai-studio-step-id: pw6n4tm300
await leapwork.step("Click the Url field", async () => {
    const urlInput = page.getByPlaceholder('Url', { exact: true });
    await urlInput.click({ force: true });
});

// ai-studio-step-id: pwda4hlc00
await leapwork.step("Fill the Url field under Environments with \"env.com\"", async () => {
    const urlInput = page.getByPlaceholder('Url', { exact: true });
    await urlInput.fill('env.com');
});

// ai-studio-step-id: pw78kts000
await leapwork.step("Press Enter", async () => {
    await page.keyboard.press('Enter');
});

// ai-studio-step-id: pw13yhz7h0
await leapwork.step("Click the env.com environment name value", async () => {
    const envName = page.getByText('env.com', { exact: true });
    await envName.click({ force: true });
});

// ai-studio-step-id: pwmdn2mc00
await leapwork.step("Right-click the env.com environment name field", async () => {
    const target = page.locator('span', { hasText: 'env.com' });
    await target.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw1h4dtfh0
await leapwork.step("Click the Edit environment option", async () => {
    const target = page.getByText('Edit environment', { exact: true });
    await target.click({ force: true });
});

// ai-studio-step-id: pwd4pehs00
await leapwork.step("Click the env name text field", async () => {
    const envNameField = page.getByRole('textbox').filter({ has: page.getByText('env name', { exact: true }) });
});

// ai-studio-step-id: pwi9k03x00
await leapwork.step("Fill the first text field with \"env edit\"", async () => {
    const envName = page.getByRole('textbox', { name: '', exact: true }).and(page.locator('[value="env name"]'));
    await envName.fill('env edit');
});

// ai-studio-step-id: pw10rlmzu0
await leapwork.step("Click the env.com text field", async () => {
    const envComField = page.getByRole('textbox', { name: '', exact: true }).filter({ has: page.getByText('env.com', { exact: true }) });
});

// ai-studio-step-id: pw10vvlij0
await leapwork.step("Fill the Environment URL field with \"env.co.in\"", async () => {
    const environmentUrlField = page.locator('input[value="env.com"]');
    await environmentUrlField.click()
    await environmentUrlField.fill('env.co.in');
});

// ai-studio-step-id: pw11hqrh40
await leapwork.step("Press Enter", async () => {
    await page.keyboard.press('Enter');
});

// ai-studio-step-id: pw1o8qc5t0
await leapwork.step("Click the env.co.in environment URL link", async () => {
    const target = page.getByText('env.co.in', { exact: true });
    await target.click({ force: true });
});

// ai-studio-step-id: pw1a44zn70
await leapwork.step("Right-click the env.co.in environment URL in Leapwork AI Studio", async () => {
    const target = page.getByText('env.co.in', { exact: true });
    await target.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw1fin00o0
await leapwork.step("Click the Delete environment option", async () => {
    const deleteEnvironment = page.getByText('Delete environment', { exact: true });
    await deleteEnvironment.click({ force: true });
});

// ai-studio-step-id: pw1ej0fnn0
await leapwork.step("Click the Delete button in the delete environment confirmation dialog", async () => {
    const deleteButton = page.getByRole('button', { name: 'Delete', exact: true });
    await deleteButton.click({ force: true });
});

// ai-studio-step-id: f21ac143
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });