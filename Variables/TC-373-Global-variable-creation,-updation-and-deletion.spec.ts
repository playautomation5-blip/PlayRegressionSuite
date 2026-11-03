import { leapwork } from "./leapwork";

import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { UploadFileHelper, importLeapworkFile } from "@assets/Utilities/Upload file helper";

leapwork.variables.set("variableKey", "Added Variable", leapwork.storage.LOCAL);
const lw__variableKey = leapwork.variables.get("variableKey", leapwork.storage.LOCAL) as string;

leapwork.variables.set("value", "Varisble directly added", leapwork.storage.LOCAL);
const lw__value = leapwork.variables.get("value", leapwork.storage.LOCAL) as string;

const newFile14 = leapwork.files.path('FL-14');


leapwork.variables.set("email", "q5wz5tmrno@gmeenramy.com", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
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

const fileId = "FL-13"
const fileId1 = "FL-14"

const testCaseName = "Global variable creation"
const testCaseName2 = "Global variable update"

leapwork.variables.set("fileId", fileId);
leapwork.variables.set("fileId1", fileId1);

leapwork.variables.set("testCasesNames", [testCaseName]);
leapwork.variables.set("importType", "tests");
leapwork.variables.set("userId", "user-42");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: pw46dk8s00
await leapwork.step("Click the email field on the Leapwork Play login page", async () => {
    // Click textbox "email"
    await page.getByRole('textbox', { name: 'email' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pw1p0nxrx0
await leapwork.step(`Fill the email field with "${lw__email}"`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pw1rdjl960
await leapwork.step("Click the \"Log in with email\" button on the Leapwork Play login page", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw19kx0150
await leapwork.step("Fill the Password field on the Leapwork Play login page", async () => {
    // Fill textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).fill(leapwork.variables.getSecret("pwd_c1S0xNoa"));
}, { action: "input", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pw1daq1ko0
await leapwork.step("Click Sign in with password on the Leapwork Play login form", async () => {
    // Click button "Sign in with password"
    await page.getByRole('button', { name: 'Sign in with password' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1xqd8yf0
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwe5vwqm00
await leapwork.step("Upload the test case file", async () => {
 await importLeapworkFile(page, teamName, fileId, testCaseName);
}, { action: "upload" });

// ai-studio-step-id: pw19pzw0p0
await leapwork.step("Click Connect to connect to the Google Chromium browser in Leapwork Play", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div[1]/div[3]/button" });

// ai-studio-step-id: pw1ogtmgq0
await leapwork.step("Click the Run button to execute the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
    
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]", timeoutMs: 10000 });


// ai-studio-step-id: pw1hcx59f0
await leapwork.step("Click Disconnect in the cloud browser panel", async () => {
    // Click button "Disconnect"
    await page.waitForTimeout(20000);
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[2]/div/div[2]/button[2]", timeoutMs: 30000 });

// ai-studio-step-id: pw5s1xvv00
await leapwork.step("Double-click team twice", async () => {
    // Double-click textbox "Search"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pw1li3ih30
await leapwork.step("Click the Variables tab in Leapwork Play.", async () => {
    // Click tab "Variables"
    await page.getByRole('tab', { name: 'Variables' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div/div/div[@aria-label=\"Team sections\"]/button[2]" });

// ai-studio-step-id: pw1ynjtq00
await leapwork.step("Validate that the variable key “recipientName” equals “recipientName” in Leapwork Play", async () => {
    // Assert span contains "recipientName"
    await expect(page.getByText('recipientName')).toContainText("recipientName");
}, { action: "validate", relativeXpath: ".//div[3]/div/div/div[3]/div[2]/span[1]" });

// ai-studio-step-id: pw1xa4uxp0
await leapwork.step("Validate the recipientName variable shows \"Receipient name 1\" on Leapwork Play", async () => {
    // Assert span contains "Receipient name 1"
    await expect(page.getByText('Receipient name')).toContainText("Receipient name 1");
}, { action: "validate", relativeXpath: ".//div[3]/div/div/div[3]/div[2]/span[2]" });

// ai-studio-step-id: pwgxq93q00
await leapwork.step("Upload the test case file", async () => {
 await importLeapworkFile(page, teamName, fileId1, testCaseName2);
}, { action: "upload" });

// ai-studio-step-id: pwy66kfz00
await leapwork.step("Click Connect to connect to the Google Chromium browser in Leapwork Play", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div[1]/div[3]/button" });

// ai-studio-step-id: pw1l70lem0
await leapwork.step("Click the Run button to execute the test case", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
    
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Run\"]", timeoutMs: 10000 });


// ai-studio-step-id: pw1pc5mte0
await leapwork.step("Double-click team twice", async () => {
    // Double-click textbox "Search"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pwg5vxu700
await leapwork.step("Click the Variables tab in Leapwork Play.", async () => {
    // Click tab "Variables"
    await page.getByRole('tab', { name: 'Variables' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div/div/div[@aria-label=\"Team sections\"]/button[2]" });

// ai-studio-step-id: pws4m4yu00
await leapwork.step("Validate that the variable key “recipientName” equals “recipientName” in Leapwork Play", async () => {
    // Assert span contains "recipientName"
    await expect(page.getByText('recipientName')).toContainText("recipientName");
}, { action: "validate", relativeXpath: ".//div[3]/div/div/div[3]/div[2]/span[1]" });

// ai-studio-step-id: pw1s1oih00
await leapwork.step("Validate the recipientName variable shows \"Receipient name 1\" on Leapwork Play", async () => {
    // Assert span contains "Receipient name 1"
    await expect(page.getByText('Receipient name')).toContainText("Receipient name updated");
}, { action: "validate", relativeXpath: ".//div[3]/div/div/div[3]/div[2]/span[2]" });

// ai-studio-step-id: pw1ug7lc30
await leapwork.step("Click \"+ Add variable\" in the Team Variables section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add variable' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div/div/div[1]/button/span" });

// ai-studio-step-id: pw1jhuxy80
await leapwork.step(`Fill the Variable key field with "${lw__variableKey}"`, async () => {
    // Fill textbox "Variable key"
    await page.getByRole('textbox', { name: 'Variable key' }).fill(String(lw__variableKey));
}, { action: "input", relativeXpath: ".//div/div/div[3]/div[3]/span[1]/input" });

// ai-studio-step-id: pwzz2jtv00
await leapwork.step("Click the Value field next to the variable key.", async () => {
    // Click textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[3]/div[3]/span[2]/input[@aria-label=\"Value\"]" });

// ai-studio-step-id: pwaa3yyg00
await leapwork.step(`Fill the Value field with "${lw__value}"`, async () => {
    // Fill textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).fill(String(lw__value));
}, { action: "input", relativeXpath: ".//div/div/div[3]/div[3]/span[2]/input[@aria-label=\"Value\"]" });

// ai-studio-step-id: pwdirfbf00
await leapwork.step("Click Save for the Added Variable value.", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[3]/div[3]/span[3]/button" });

// ai-studio-step-id: pwyli9m200
await leapwork.step("Click More actions for recipientName next to \"Receipient name updated\"", async () => {
    // Click button "More actions for recipientName"
    await page.getByRole('button', { name: 'More actions for recipientName' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[3]/div[3]/span[3]/button[@aria-label=\"More actions for recipientName\"]" });

// ai-studio-step-id: pwzhw2d700
await leapwork.step("Click Delete variable in the confirmation dialog", async () => {
    // Click span
    await page.getByText('Delete variable').click();
}, { action: "click", relativeXpath: ".//div/div/div[@aria-label=\"Context menu\"]/div[2]/span/span" });

// ai-studio-step-id: pw1aezzgk0
await leapwork.step("Click Delete to remove the variable.", async () => {
    // Click button "Delete"
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[4]/div/div/button[2]" });
