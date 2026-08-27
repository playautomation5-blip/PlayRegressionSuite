import { leapwork } from "./leapwork";

import { DeleteExistingModels } from "@assets/BYOK/utilities/Delete existing models";
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

leapwork.variables.set("name", "BYOK", leapwork.storage.LOCAL);
const lw__name = leapwork.variables.get("name", leapwork.storage.LOCAL) as string;

leapwork.variables.set("key", "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", leapwork.storage.LOCAL);
const lw__key = leapwork.variables.get("key", leapwork.storage.LOCAL) as string;

leapwork.variables.set("key2", "AIzaSyC_4OuQRWD_3QcUIT1I_mUZzpfGrr_WSKY", leapwork.storage.LOCAL);
const lw__key2 = leapwork.variables.get("key2", leapwork.storage.LOCAL) as string;

leapwork.variables.set("userId", "aistudio_user_4" );
leapwork.variables.set("passwordId", "aistudio_user_4");


// ai-studio-step-id: 3311c476
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 53d2aee0
await leapwork.step("Use test case: Delete existing models", async () => {
    return await DeleteExistingModels();
}, { action: "asset_reference", linkedAssetType: "test-case" });







// ai-studio-step-id: fDvFKKmp
await leapwork.step("Click the Own Key option", async () => {
    await page.getByText('Own Key', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: NaNT8UOr
await leapwork.step("Click the Name field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click" });

// ai-studio-step-id: wt17aEcu
await leapwork.step(`Fill the Name field with "${lw__name}" in the Configure LLM Key dialog`, async () => {
    await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__name));
}, { action: "input" });

// ai-studio-step-id: w549B0u9
await leapwork.step("Click the Key field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Key' }).click();
}, { action: "click" });

// ai-studio-step-id: 5mWn6laY
await leapwork.step("Fill the Key field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Key' }).fill(String(lw__key));
}, { action: "input" });

// ai-studio-step-id: 8siujzvI
await leapwork.step("Click the Test connection button in the Configure LLM Key dialog", async () => {
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });

// ai-studio-step-id: cSggOzvk
await leapwork.step("Validate that the Configure LLM Key dialog shows \"Connection successful.\" on Leapwork Play", async () => {
    await expect(page.getByText('Connection successful.')).toContainText("Connection successful.");
}, { action: "validate" });

// ai-studio-step-id: c1Nr4qHd
await leapwork.step("Click the Save button in the Configure LLM Key dialog", async () => {
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });

// ai-studio-step-id: LPc5ajaQ
await leapwork.step("Click the BYOK button", async () => {
    await page.locator('span').filter({ hasText: 'BYOK' }).first().click();
}, { action: "click" });

// ai-studio-step-id: 2JnrWdmu
await leapwork.step("Validate the BYOK button shows 'BYOK' on the Leapwork Play page", async () => {
    await page.getByRole('button', { name: 'BYOK' }).waitFor({ state: 'visible' });
    await expect(page.getByRole('button', { name: 'BYOK' })).toContainText("BYOK");
}, { action: "validate" });

// ai-studio-step-id: pwudt5bn00
await leapwork.step("Click the BYOK button", async () => {
    await page.getByRole('button', { name: 'BYOK' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1xwuu0u0
await leapwork.step("Click the Open actions button for BYOK", async () => {
    await page.getByRole('button', { name: 'Open actions for BYOK' }).click();
}, { action: "click" });

// ai-studio-step-id: pwrkqq9n00
await leapwork.step("Click the Edit Key option in the BYOK actions menu", async () => {
    await page.getByText('Edit Key').click();
}, { action: "click" });


// ai-studio-step-id: pwfblbf400
await leapwork.step("Click the Key field in the Configure LLM Key dialog", async () => {
    await page.getByRole('textbox', { name: 'Key' }).click();
}, { action: "click" });

// ai-studio-step-id: pwdcb79g00
await leapwork.step("Fill the Key field with the Google Gemini API key", async () => {
    await page.getByRole('textbox', { name: 'Key' }).fill(String(lw__key2));
}, { action: "input" });

// ai-studio-step-id: pw1brdls70
await leapwork.step("Click the Test connection button in the Configure LLM Key dialog", async () => {
    await page.getByRole('button', { name: 'Test connection' }).click();
}, { action: "click" });



// ai-studio-step-id: 3SizA0W7
await leapwork.step("Click Cancel in the BYOK key popup.", async () => {
    // Click button "Cancel"
    await page.getByRole('button', { name: 'Cancel' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[3]/div[3]/div/div[6]/button[1]" });



// ai-studio-step-id: pw3ji44d00
await leapwork.step("Click the Open actions button for BYOK", async () => {
    await page.getByRole('button', { name: 'Open actions for BYOK' }).click();
}, { action: "click" });

// ai-studio-step-id: 0RUz9IEX
await leapwork.step("Click the Delete Key option in the BYOK actions menu", async () => {
    await page.getByText('Delete Key').click();
}, { action: "click" });

// ai-studio-step-id: 4qcTpwYI
await leapwork.step("Click the Delete button to confirm deleting the BYOK LLM key", async () => {
    await page.getByRole('button', { name: 'Delete' }).click();
}, { action: "click" });
