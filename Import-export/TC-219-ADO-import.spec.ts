import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.variables.set("uRL", "https://dev.azure.com/leaptestcompany", leapwork.storage.LOCAL);
const lw__uRL = leapwork.variables.get("uRL", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
  enableXpath:
    (leapwork.team.settings.get("enableXpath")
      ?? leapwork.workspace.settings.get("enableXpath")) !== "false",
  chromiumArgs:
    leapwork.team.settings.get("chromiumArgs")
      ?? leapwork.workspace.settings.get("chromiumArgs")
      ?? ["--deny-permission-prompts",
          "--disable-notifications"
        ],
  chromiumPrefs: leapwork.team.settings.get("chromiumPrefs")
      ?? leapwork.workspace.settings.get("chromiumPrefs")
      ?? { "credentials_enable_service": false,
          "profile":
          {
            "password_manager_enabled": false,
            "password_manager_leak_detection": false
          }
        },
});

leapwork.variables.set("teamName", teamName);
leapwork.variables.set("userId", "user_78");

// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1rdgwa00
await leapwork.step("Click the Integrations tab in Team settings navigation", async () => {
    // Click button "Integrations"
    await page.getByRole('button', { name: 'Integrations' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div/div/nav[@aria-label=\"Team settings navigation\"]/button[2]" });

// ai-studio-step-id: pw1xudi550
await leapwork.step("Click the + New connection button to open the Azure DevOps connection dialog", async () => {
    // Click span
    await page.getByRole('button', { name: '+ New connection' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[4]/div/div[2]/button/span" });

// ai-studio-step-id: pwz52wrw00
await leapwork.step("Click the ADO URL field in the Azure DevOps connection dialog", async () => {
    // Click textbox "ADO URL"
    await page.getByRole('textbox', { name: 'ADO URL' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"ado-connector-url\"]" });

// ai-studio-step-id: pw14uqyf70
await leapwork.step(`Fill the ADO URL field with ${lw__uRL}`, async () => {
    // Fill textbox "ADO URL"
    await page.getByRole('textbox', { name: 'ADO URL' }).fill(String(lw__uRL));
}, { action: "input", relativeXpath: "//*[@id=\"ado-connector-url\"]" });

// ai-studio-step-id: pw69omie00
await leapwork.step("Click the Personal access token field in the Azure DevOps connection dialog", async () => {
    // Click textbox "Personal access token"
    await page.getByRole('textbox', { name: 'Personal access token' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"ado-connector-token\"]" });

// ai-studio-step-id: pw1ph4sq30
await leapwork.step("Fill the Personal access token field in the Azure DevOps connection dialog", async () => {
    // Fill textbox "Personal access token"
    await page.getByRole('textbox', { name: 'Personal access token' }).fill(leapwork.variables.getSecret("pwd_sRg9Eg9l"));
}, { action: "input", relativeXpath: "//*[@id=\"ado-connector-token\"]" });

// ai-studio-step-id: pw1dzm3040
await leapwork.step("Click the Test connection button in the Azure DevOps connection dialog", async () => {
    // Click button "Test connection"
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click", relativeXpath: ".//div[4]/div/div[3]/div/div[5]/button[1]" });

// ai-studio-step-id: pwl09z8j00
await leapwork.step("Click the Save button in the Azure DevOps connection dialog", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click", relativeXpath: ".//div[4]/div/div[3]/div/div[5]/button[2]" });

// ai-studio-step-id: pw12w9ix40
await leapwork.step("Validate the source control provider shows 'Azure DevOps' on the Leapwork Play page", async () => {
    // Assert span contains "Azure DevOps"
    await expect(page.locator('span').filter({ hasText: 'Azure DevOps' })).toContainText("Azure DevOps");
}, { action: "validate", relativeXpath: ".//div[1]/div[4]/div/div[1]/div[2]/span[1]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from Azure DevOps", async () => {
//     // Get value from span
//     const lw_value = (await page.locator('span').filter({ hasText: 'Azure DevOps' }).textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_azureDevOps", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[1]/div[4]/div/div[1]/div[2]/span[1]" });

// ai-studio-step-id: pw181il310
await leapwork.step("Right-click the \"${teamName}\" folder on the Leapwork AI Studio page", async () => {
    const regression = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await regression.click({ button: 'right', force: true });
});

// ai-studio-step-id: pwtxbzqi00
await leapwork.step("Click the Import menu item to expand its submenu in the context menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Import' }).first().click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[2]/div[@aria-label=\"Context menu\"]/div[2]/span[1]" });

// ai-studio-step-id: pw1b4aget0
await leapwork.step("Click the \"Import from ADO\" option in the context menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'Import from ADO' }).first().click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[2]/div[@aria-label=\"Submenu\"]/div[3]/span" });

// ai-studio-step-id: pwgneklw00
await leapwork.step("Click the Project dropdown to select a project", async () => {
    // Click button "Project"
    await page.getByRole('button', { name: 'Project' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div/div[2]/div/div[@aria-label=\"Project\"]" });

// ai-studio-step-id: pw15gly6z0
await leapwork.step("Click the \"LeapworkTestAutomation\" option in the Project dropdown", async () => {
    // Click div
    await page.getByText('LeapworkTestAutomation').click();
}, { action: "click", relativeXpath: ".//body/div[4]/div[1]" });

// ai-studio-step-id: pw2zkqpe00
await leapwork.step("Set \"13510 - test123\" checkbox", async () => {
    // Check checkbox "13510 - test123"
    await page.getByRole('checkbox', { name: '- test123' }).check();
}, { action: "click", relativeXpath: ".//div[2]/div[3]/div/div[@aria-label=\"Test plans\"]/label[4]/input" });

// ai-studio-step-id: pw1oz7zpj0
await leapwork.step("Click the Import button in the \"Import from ADO\" dialog", async () => {
    // Click button "Import"
    await page.getByRole('button', { name: 'Import' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[3]/div/div[4]/button[2]" });

// ai-studio-step-id: pw1viaovm0
await leapwork.step("Click the OK button to confirm successful import of 1 test plan with 2 test cases", async () => {
    // Click button "OK"
    await page.getByRole('button', { name: 'OK', exact: true }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[4]/div/div[3]/button" });

// ai-studio-step-id: pw1srtsus0
await leapwork.step("Click the Expand folder button for \"team 39589\"", async () => {
    // Click button "Expand folder"
    await page.getByRole('button', { name: 'Expand folder' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[3]/div[1]/div/button[@aria-label=\"Expand folder\"]" });

// ai-studio-step-id: pw13n2qb00
await leapwork.step("Click the Expand folder button for the LeapworkTestAutomation folder", async () => {
    // Click button "Expand folder"
    await page.getByRole('button', { name: 'Expand folder' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/div/div/button[@aria-label=\"Expand folder\"]" });

// ai-studio-step-id: pw11hwyri0
await leapwork.step("Click the Expand folder button for \"13510 - test123\"", async () => {
    // Click button "Expand folder"
    await page.getByRole('button', { name: 'Expand folder' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div/div[2]/div/div/button[@aria-label=\"Expand folder\"]" });

// ai-studio-step-id: pw1kad4jr0
await leapwork.step("Click the LeapworkTestAutomation folder in the explorer", async () => {
    // Click "LeapworkTestAutomation"
    await page.getByText('LeapworkTestAutomation').click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/div/div[1]/span[2]" });

// ai-studio-step-id: pwtg087800
await leapwork.step("Validate that the folder name shows 'LeapworkTestAutomation' in the explorer on Leapwork Play", async () => {
    // Assert "LeapworkTestAutomation" contains "LeapworkTestAutomation"
    await expect(page.getByText('LeapworkTestAutomation')).toContainText("LeapworkTestAutomation");
}, { action: "validate", relativeXpath: ".//div[3]/div[1]/div[2]/div/div[1]/span[2]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from LeapworkTestAutomation", async () => {
//     // Get value from "LeapworkTestAutomation"
//     const lw_value = await page.getByText('LeapworkTestAutomation').getAttribute('title');
//     leapwork.variables.set("lw_leapworkTestAutomation", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[3]/div[1]/div[2]/div/div[1]/span[2]" });

// ai-studio-step-id: pwj9aj9j00
await leapwork.step("Validate that the explorer item name shows '13510 - test123' on the Leapwork Play page", async () => {
    // Assert "13510 - test123" contains "13510 - test123"
    await expect(page.getByText('- test123').first()).toContainText("13510 - test123");
}, { action: "validate", relativeXpath: ".//div[2]/div/div[2]/div/div[1]/span[2]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from 13510 - test123", async () => {
//     // Get value from "13510 - test123"
//     const lw_value = await page.getByText('- test123').first().getAttribute('title');
//     leapwork.variables.set("lw_13510Test123", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[2]/div/div[2]/div/div[1]/span[2]" });

// ai-studio-step-id: pwbj3bqt00
await leapwork.step("Validate the explorer item name shows '13510 - test123' on the Leapwork Play page", async () => {
    // Assert "13510 - test123" contains "13510 - test123"
    await expect(page.getByText('- test123').nth(1)).toContainText("13510 - test123");
}, { action: "validate", relativeXpath: ".//div[2]/div/div[2]/div[1]/div/span[4]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from 13510 - test123", async () => {
//     // Get value from "13510 - test123"
//     const lw_value = await page.getByText('- test123').nth(1).getAttribute('title');
//     leapwork.variables.set("lw_13510Test123", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: ".//div[2]/div/div[2]/div[1]/div/span[4]" });