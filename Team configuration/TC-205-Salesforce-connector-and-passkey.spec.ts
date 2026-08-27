import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";

await leapwork.ImportPassKey(leapwork.variables.getSecret("passKeyCred_9LDQSTMu"));

leapwork.variables.set("name", "Salesforce auth app", leapwork.storage.LOCAL);
const lw__name = leapwork.variables.get("name", leapwork.storage.LOCAL) as string;

leapwork.variables.set("clientIdConsumerKey", "3MVG9Ksgrx32hOM3b5AwPtPKmtoZqOsVIaBKRESMtcpi3BzAXHbp64taihc_Bl8KiYdxY1ONfqRS6tZy9Pe1z", leapwork.storage.LOCAL);
const lw__clientIdConsumerKey = leapwork.variables.get("clientIdConsumerKey", leapwork.storage.LOCAL) as string;

leapwork.variables.set("connectionName", "SF regression conn", leapwork.storage.LOCAL);
const lw__connectionName = leapwork.variables.get("connectionName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("username", "udch@leapwork.com", leapwork.storage.LOCAL);
const lw__username = leapwork.variables.get("username", leapwork.storage.LOCAL) as string;

leapwork.variables.set("descriptionOutline", "Navigate to passKey page", leapwork.storage.LOCAL);
const lw__descriptionOutline = leapwork.variables.get("descriptionOutline", leapwork.storage.LOCAL) as string;

leapwork.variables.set("descriptionOutline2", "Click Delete Passkey for Built-In Authenticator #1", leapwork.storage.LOCAL);
const lw__descriptionOutline2 = leapwork.variables.get("descriptionOutline2", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_60");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "Test Case");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw2ocyti00
await leapwork.step("Click the \"+ Add auth settings\" button in the Auth settings section", async () => {
    // Click button "+ Add auth settings"
    await page.getByRole('button', { name: '+ Add auth settings' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1gp1bmx0
await leapwork.step("Click the Name field in the Add auth settings dialog", async () => {
    // Click textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1l2enaw0
await leapwork.step(`Fill the Name field with "${lw__name}"`, async () => {
    // Fill textbox "Name"
    await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__name));
}, { action: "input" });

// ai-studio-step-id: pwfjy9zz00
await leapwork.step("Click the Client ID / Consumer Key field in the Add auth settings dialog", async () => {
    // Click textbox "Client ID / Consumer Key"
    await page.getByRole('textbox', { name: 'Client ID / Consumer Key' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1itbx760
await leapwork.step("Fill the Client ID / Consumer Key field with the client ID", async () => {
    // Fill textbox "Client ID / Consumer Key"
    await page.getByRole('textbox', { name: 'Client ID / Consumer Key' }).fill(String(lw__clientIdConsumerKey));
}, { action: "input" });

// ai-studio-step-id: pwl4nr7900
await leapwork.step("Click the Client secret field in the Add auth settings dialog", async () => {
    // Click textbox "Client secret"
    await page.getByRole('textbox', { name: 'Client secret' }).click();
}, { action: "click" });

// ai-studio-step-id: pwotdpdm00
await leapwork.step("Fill the Client secret field with the provided secret.", async () => {
    // Fill textbox "Client secret"
    await page.getByRole('textbox', { name: 'Client secret' }).fill(leapwork.variables.getSecret("pwd_9OS8Ld0o"));
}, { action: "input" });

// ai-studio-step-id: pw1tsjz8f0
await leapwork.step("Click the Save button in the team settings.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ocaln70
await leapwork.step("Click the + Add connection button in the Connections section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ubfyzu0
await leapwork.step("Click the Connection name field in the Salesforce connection dialog", async () => {
    // Click textbox "Connection name"
    await page.getByRole('textbox', { name: 'Connection name' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1dfrmv70
await leapwork.step(`Fill the Connection name field with "${lw__connectionName}"`, async () => {
    // Fill textbox "Connection name"
    await page.getByRole('textbox', { name: 'Connection name' }).fill(String(lw__connectionName));
}, { action: "input" });

// ai-studio-step-id: pw1bjey680
await leapwork.step("Select \"Sandbox\" from Salesforce environment", async () => {
    // Click combobox "Salesforce environment"
    await page.getByLabel('Salesforce environment').selectOption({ label: "Sandbox" });
}, { action: "click" });

// ai-studio-step-id: pw19g2ruj0
await leapwork.step("Click Continue to Salesforce in the Salesforce authentication modal", async () => {
    // Click button "Continue to Salesforce"
    await page.getByRole('button', { name: 'Continue to Salesforce' }).click();
}, { action: "click" });

// ai-studio-step-id: pwqy2egi00
await leapwork.step(`Fill the Username field with "${lw__username}"`, async () => {
    const username = page.getByRole('textbox', { name: 'Username', exact: true });
    await expect(username).toHaveCount(1);
    await username.fill(String(lw__username));
}, { action: "input" });

// ai-studio-step-id: pwvn917p00
await leapwork.step("Click the “Log In to sandbox” button on the Salesforce login form", async () => {
    // Click button "Log In to Sandbox"
    await page.getByRole('button', { name: 'Log In to sandbox' }).click();
}, { action: "click" });

// ai-studio-step-id: pwr4l49200
await leapwork.step("Fill the Password field on the Salesforce login form", async () => {
    const password = page.getByRole('textbox', { name: 'Password', exact: true });
    await expect(password).toHaveCount(1);
    await password.fill(leapwork.variables.getSecret("pwd_u59SIaBO"));
}, { action: "input" });

// ai-studio-step-id: pw1por44f0
await leapwork.step("Click the Log In to sandbox button on the Salesforce login form", async () => {
    // Click button "Log In to Sandbox"
    await page.getByRole('button', { name: 'Log In to sandbox' }).click();
}, { action: "click"});

// ai-studio-step-id: pwj9qsy000
await leapwork.step("Fill the Verification Code field with 103237", async () => {
    const textbox = page.getByRole('textbox', { name: 'Verification Code', exact: true });
    await expect(textbox).toHaveCount(1);
    await textbox.fill(leapwork.generateTOTP(leapwork.variables.getSecret("mfaSecret_bt9Lruh8")));
}, { action: "input" });

// ai-studio-step-id: pw1yybgre0
await leapwork.step("Click the Verify button to submit the verification code", async () => {
    // Click button "Verify"
    await page.getByRole('button', { name: 'Verify' }).click();
}, { action: "click" });

// ai-studio-step-id: pwk1lg9600
await leapwork.step("Click the Create Passkey button to connect a built-in authenticator", async () => {
    // Click span
    await page.getByRole('button', { name: 'Create Passkey' }).click();
}, { action: "click" });

// ai-studio-step-id: pww5v9xj00
await leapwork.step("Click the Allow button to authorize access for udch@leapwork.com", async () => {
    // Click button "Allow"
    await page.getByRole('button', { name: 'Allow' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1iqtf340
await leapwork.step("Validate “SF regression conn” appears in the source control list on Leapwork Play", async () => {
    // Assert span contains "SF regression conn"
    await expect(page.getByText('SF regression conn')).toContainText("SF regression conn");
}, { action: "validate" });

// ai-studio-step-id: pw12tgxcx0
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1d4482w0
await leapwork.step("Click the Connector dropdown currently set to “(No connector)”", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Connector' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1sv0zej0
await leapwork.step("Click the Connector dropdown and select Salesforce - SF regression conn", async () => {
    // Click span
    await page.getByText('Salesforce - SF regression').click();
}, { action: "click" });

// ai-studio-step-id: pw10wmwk60
await leapwork.step("Validate the Connector on Leapwork Play is \"Salesforce - SF regression conn\"", async () => {
    // Assert span contains "Salesforce - SF regression conn"
    await expect(page.getByRole('combobox', { name: 'Connector' })).toContainText("Salesforce - SF regression conn");
}, { action: "validate" });

// ai-studio-step-id: pwa3xaht00
await leapwork.step("Click Connect to connect to the Google Chromium browser in North Europe (Ireland)", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
    await page.waitForTimeout(5000);
}, { action: "click" });

// ai-studio-step-id: pwdt5beb00
await leapwork.step("Right-click VariablesReferences in Leapwork Play", async () => {
    // Right-click div
    await page.getByText('VariablesReferences').click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwux3wa700
await leapwork.step("Click Insert step to add a step below step 1", async () => {
    // Click span
    await page.getByText('Insert step').click();
}, { action: "click" });

// ai-studio-step-id: pw1h85la20
await leapwork.step(`Fill the Description / outline field with "${lw__descriptionOutline}"`, async () => {
    // Fill textbox "Description / outline"
    await page.getByRole('textbox', { name: 'Description / outline' }).fill(String(lw__descriptionOutline));
}, { action: "input" });

// ai-studio-step-id: pw1m7eyqy0
await leapwork.step("Fill the Playwright code", async () => {
const editor = page.locator('.monaco-editor:visible')
 
await page.evaluate(async (text) => {
  await navigator.clipboard.writeText(text);
}, `await page.goto('https://leapworkaps--loopqa.sandbox.lightning.force.com/lightning/settings/personal/PasskeysAndAuthenticators/home%27%27');
await page.waitForTimeout(5000);`);
 
await editor.click();
await page.keyboard.press("Control+A");
await page.keyboard.press(process.platform === "darwin" ? "Meta+V" : "Control+V");
 
}, { action: "click" });

// ai-studio-step-id: pw1valt500
await leapwork.step("Click Insert step to add a new test step", async () => {
    // Click span
    await page.getByRole('button', { name: 'Insert step', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwnyb01e00
await leapwork.step("Right-click “Navigate to passKey page” in Leapwork Play", async () => {
    // Right-click span
    await page.getByText('Navigate to passKey page', { exact: true }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwv4deyp00
await leapwork.step("Click the Insert step menu item", async () => {
    // Click span
    await page.getByText('Insert step').click();
}, { action: "click" });

// ai-studio-step-id: pw1nbe0gi0
await leapwork.step("Click “Below this step” in the step context menu", async () => {
    // Click span
    await page.getByText('Below this step').click();
}, { action: "click" });

// ai-studio-step-id: pw18s3na50
await leapwork.step(`Fill the Description / outline field with "${lw__descriptionOutline}"`, async () => {
    // Fill textbox "Description / outline"
    await page.getByRole('textbox', { name: 'Description / outline' }).fill(String(lw__descriptionOutline));
}, { action: "input" });

// ai-studio-step-id: pw1uh851c0
await leapwork.step("Fill the typescript with external adapter to enable LLM based code generation", async () => {
const editor = page.locator('.monaco-editor:visible')
 
await page.evaluate(async (text) => {
  await navigator.clipboard.writeText(text);
}, `page.once("dialog", async dialog => {
     console.log(dialog.type(), dialog.message());  
 
     if (dialog.type() === "confirm") {
       await dialog.accept(); // Click OK
     } else {
       await dialog.dismiss();
     }
   });
    // Click button "Delete Passkey"
    await page.getByRole('button', { name: 'Delete Passkey' }).click();`);
 
await editor.click();
await page.keyboard.press("Control+A");
await page.keyboard.press(process.platform === "darwin" ? "Meta+V" : "Control+V");
 
}, { action: "click" });

// ai-studio-step-id: pw10sf47m0
await leapwork.step("Click Insert step in the test case steps panel", async () => {
    // Click span
    await page.getByRole('button', { name: 'Insert step', exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1yiv4490
await leapwork.step("Click the Run button in the Leapwork Play test case.", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Run' }).click();
    await page.waitForTimeout(45000);
}, { action: "click" });

// ai-studio-step-id: pw1c6r3o70
await leapwork.step("Validate that all steps are executed", async () => {
    await assertScreenshot("Validate that all 2 steps are executed successfully");
}, {
    action: "validate",
});






