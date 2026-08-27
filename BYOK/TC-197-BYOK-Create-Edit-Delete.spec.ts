import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteExistingModels } from "@assets/Utilities/Delete existing models";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("name", "BYOK", leapwork.storage.LOCAL);
const lw__name = leapwork.variables.get("name", leapwork.storage.LOCAL) as string;

leapwork.variables.set("key", "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", leapwork.storage.LOCAL);
const lw__key = leapwork.variables.get("key", leapwork.storage.LOCAL) as string;

leapwork.variables.set("key2", "AIzaSyC_4OuQRWD_3QcUIT1I_mUZzpfGrr_WSKY", leapwork.storage.LOCAL);
const lw__key2 = leapwork.variables.get("key2", leapwork.storage.LOCAL) as string;

leapwork.variables.set("userId", "aistudio_user_4" );
leapwork.variables.set("passwordId", "aistudio_user_4");












// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw143c14r0
await leapwork.step("Use test case: Delete existing models", async () => {
    return await DeleteExistingModels();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1ltjw8q0
await leapwork.step("Click the Own Key option", async () => {
    await page.getByText('Own Key', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1jenw1j0
await leapwork.step("Click the Name field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: pwlpznjw00
await leapwork.step(`Fill the Name field with "${lw__name}" in the Configure LLM Key dialog`, async () => {
    await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__name));
}, { action: "input" });

// ai-studio-step-id: pw1jwbap00
await leapwork.step("Click the Key field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Key' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1s8szeq0
await leapwork.step("Fill the Key field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Key' }).fill(String(lw__key));
}, { action: "input" });

// ai-studio-step-id: pw1xzfzst0
await leapwork.step("Click the Test connection button in the Configure LLM Key dialog", async () => {
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });

// ai-studio-step-id: pw19d7gm00
await leapwork.step("Validate that the Configure LLM Key dialog shows \"Connection successful.\" on Leapwork Play", async () => {
    await expect(page.getByText('Connection successful.')).toContainText("Connection successful.");
}, { action: "validate" });

// ai-studio-step-id: pw17szozp0
await leapwork.step("Click the Save button in the Configure LLM Key dialog", async () => {
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: pw85hx8300
await leapwork.step("Click the BYOK button", async () => {
    await page.locator('span').filter({ hasText: 'BYOK' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1b6wrvk0
await leapwork.step("Validate the BYOK button shows 'BYOK' on the Leapwork Play page", async () => {
    await page.getByRole('button', { name: 'BYOK' }).waitFor({ state: 'visible' });
    await expect(page.getByRole('button', { name: 'BYOK' })).toContainText("BYOK");
}, { action: "validate" });

// ai-studio-step-id: pw7efwar00
await leapwork.step("Click the BYOK button", async () => {
    await page.getByRole('button', { name: 'BYOK' }).click();
}, { action: "click" });

// ai-studio-step-id: pwobwjxc00
await leapwork.step("Click the Open actions button for BYOK", async () => {
    await page.getByRole('button', { name: 'Open actions for BYOK' }).click();
}, { action: "click" });

// ai-studio-step-id: pw7oxqj100
await leapwork.step("Click the Edit Key option in the BYOK actions menu", async () => {
    await page.getByText('Edit Key').click();
}, { action: "click" });


// ai-studio-step-id: pw1kjtb2i0
await leapwork.step("Click the Key field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Key' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1t1f7110
await leapwork.step("Fill the Key field with the Google Gemini API key", async () => {
    await page.getByRole('textbox', { name: 'Key' }).fill(String(lw__key2));
}, { action: "input" });

// ai-studio-step-id: pw171a3wq0
await leapwork.step("Click the Test connection button in the Configure LLM Key dialog", async () => {
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });



// ai-studio-step-id: pw1t1sht30
await leapwork.step("Click Cancel in the BYOK key popup.", async () => {
    // Click button "Cancel"
    await page.getByRole('button', { name: 'Cancel' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[3]/div[3]/div/div[6]/button[1]" });



// ai-studio-step-id: pw14j8szy0
await leapwork.step("Click the Open actions button for BYOK", async () => {
    await page.getByRole('button', { name: 'Open actions for BYOK' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ogcto00
await leapwork.step("Click the Delete Key option in the BYOK actions menu", async () => {
    await page.getByText('Delete Key').click();
}, { action: "click" });

// ai-studio-step-id: pwl3jfob00
await leapwork.step("Click the Delete button to confirm deleting the BYOK LLM key", async () => {
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });
