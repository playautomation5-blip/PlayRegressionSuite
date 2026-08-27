import { leapwork } from "./leapwork";

const currentWorkspace = leapwork.variables.get("currentWorkspace") as string;
const newWorkSpace = leapwork.variables.get("newWorkSpace") as string;
const targetWorkspace = leapwork.variables.get("targetWorkspace") as string;

// ai-studio-step-id: pwat2h5900
await leapwork.step(`Click the account button`, async () => {
    // Click span
    await page.locator('.brandbar-account-summary').click();
}, { action: "click" });

// ai-studio-step-id: pw14xptl00
await leapwork.step(`Click the Select workspace button for "${currentWorkspace}"`, async () => {
    // Click span
    await page.getByRole('button', { name: 'Select workspace' }).click();
}, { action: "click" });

// ai-studio-step-id: pw116wovc0
await leapwork.step(`Click the "${newWorkSpace}" workspace option`, async () => {
    // Click span
    await page.getByRole('option', { name: newWorkSpace }).click();
}, { action: "click" });

// ai-studio-step-id: pw1fq6dnd0
await leapwork.step("Click the main editor area in Leapwork Play", async () => {
    // Click div
    await page.locator('.editor-main').click();
}, { action: "click" });

// ai-studio-step-id: pw5fo1wc00
await leapwork.step(`Validate that the account button shows '${targetWorkspace}' on Leapwork Play`, async () => {
    // Assert span contains "AiStudio03 (Personal)"
    await expect(page.locator('.brandbar-account-summary')).toContainText(targetWorkspace);
}, { action: "validate" });