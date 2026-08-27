import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";

leapwork.variables.set("environmentName", "Test_QA", leapwork.storage.LOCAL);
const lw__environmentName = leapwork.variables.get("environmentName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("url", "https://www.qa-practice.com/elements/select/single_select", leapwork.storage.LOCAL);
const lw__url = leapwork.variables.get("url", leapwork.storage.LOCAL) as string;

leapwork.variables.set("userId", "user_52");

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 30000
});

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pw1l4afq30
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw11q5gzw0
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwt9ijzp00
await leapwork.step("Double Click on New team", async () => {
    // Double Click on New team"
    await page.getByText('New team').dblclick();
}, { action: "click" });

// ai-studio-step-id: pwzxyp9200
await leapwork.step("Click the + Add Environment button in the Environments section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add Environment' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1yz8n6h0
await leapwork.step(`Fill the Environment name field with "${lw__environmentName}"`, async () => {
    // Fill textbox "Environment name"
    await page.getByRole('textbox', { name: 'Environment name' }).fill(String(lw__environmentName));
}, { action: "input" });

// ai-studio-step-id: pw523nda00
await leapwork.step(`Fill the Url field for the Test_QA environment with "${lw__url}"`, async () => {
    // Fill textbox "Url"
    await page.getByRole('textbox', { name: 'Url' }).fill(String(lw__url));
}, { action: "input" });

// ai-studio-step-id: pwgv5tbz00
await leapwork.step("Click Save for the Test_QA environment URL.", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ohy6d60
await leapwork.step("Close the New team tab in Leapwork Play", async () => {
    // Click button "TM-1 New team close"
    await page
   .locator('div.tab[title="TM-1 New team"] img.tab-close')
   .click();
}, { action: "click" });

// ai-studio-step-id: pwml8rqz00
await leapwork.step("Click New team", async () => {
    // Click "New team"
     await page.locator('div.explorer-item[title="New team"]').click();
}, { action: "click" });

// ai-studio-step-id: pw5k0epr00
await leapwork.step("Click Create new in the New team section", async () => {
    // Click button "Create new in New team"
    await page.getByRole('button', { name: 'Create new in New team' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1gmu9su0
await leapwork.step("Click New recording adapter in the context menu", async () => {
    // Click div
    await page.getByText('New recording adapter').click();
}, { action: "click" });

// ai-studio-step-id: pw10a4x0x0
await leapwork.step("Click the Collapse chat button in Leapwork Play.", async () => {
    // Click button "Collapse chat"
    await page.getByRole('button', { name: 'Collapse chat' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1mxx1tg0
await leapwork.step("Fill the typescript with external adapter to enable LLM based code generation", async () => {
const editor = page.locator(".monaco-editor");

await page.evaluate(async (text) => {
  await navigator.clipboard.writeText(text);
}, `export const recordingAdapter: RecordingAdapterDefinition = {
   id: "test-adapter",
   displayName: "Test Adapter",
   preferLlmOverNative: (context) => {
     console.log("Call preferLlmOverNative to enable LLM based generation code");
     return true;
   },
 };`);

await editor.click();
await page.keyboard.press("Control+A");
await page.keyboard.press(process.platform === "darwin" ? "Meta+V" : "Control+V");

}, { action: "click" });

// ai-studio-step-id: pw10n7v850
await leapwork.step("Click New team", async () => {
    // Click "New team"
    await page.locator('div.explorer-item[title="New team"]').click();
}, { action: "click" });

// ai-studio-step-id: pw1a5b5yk0
await leapwork.step("Click Create new in New team", async () => {
    // Click button "Create new in New team"
    await page.getByRole('button', { name: 'Create new in New team' }).click();
}, { action: "click" });

// ai-studio-step-id: pwar7fyj00
await leapwork.step("Click New test case in the Leapwork Play context menu", async () => {
    // Click div
    await page.getByText('New test case').click();
}, { action: "click" });

// ai-studio-step-id: pwo8q7lg00
await leapwork.step("Click the Recording adapter dropdown", async () => {
    // Click span
    await page.getByRole('combobox', { name: 'Recording adapter' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div/div[2]/div/button[@aria-label=\"Recording adapter\"]/span[1]" });

// ai-studio-step-id: pwqzoq7h00
await leapwork.step("Click the Recording adapter dropdown and select “New recording adapter (TS-1)”", async () => {
    // Click span
    await page.getByRole('option', { name: 'New recording adapter (TS-1)' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"fluent-option_r_i_\"]/span[2]" });


// ai-studio-step-id: pw1spedvo0
await leapwork.step("Click the Connect button to connect to the Google Chromium browser", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pwycx0fo00
await leapwork.step("Click the Record button in the Leapwork Play test case.", async () => {
    // Click button "Run"
    await page.getByRole('button', { name: 'Record', exact: true }).click();
}, { action: "click" });


// ai-studio-step-id: pwqzjoqz00
await leapwork.step("Click Stop recording in the test case steps panel", async () => {
    // Click button "Stop recording"
    await page.getByRole('button', { name: 'Stop recording', exact: true }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[1]/div/div/button[@aria-label=\"Stop recording\"]" });

// ai-studio-step-id: pwu6r5w800
await leapwork.step("Click the Disconnect button in Leapwork Play's cloud browser panel", async () => {
    // Click button "Disconnect"
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[2]/div/div[2]/button[2]" });
