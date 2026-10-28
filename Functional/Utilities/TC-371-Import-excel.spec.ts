import { leapwork } from "./leapwork";

// Import files here as well for reference, otherwise you will get file not found error
leapwork.files.path('FL-15');


leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const teamName = leapwork.variables.get("teamName") as string;
const fileId = leapwork.variables.get("fileId") as string;

// ai-studio-step-id: pw1nwspgg0
await leapwork.step(`Click the "${teamName}" team in the Explorer`, async () => {
  const teamLocator = page
    .locator('.explorer-list')
    .getByText(teamName, { exact: true });

  await teamLocator.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pwipzryr00
await leapwork.step("Click Create new in the asset menu", async () => {   
    const createNewButton = page.getByRole('button', { name: `Create new in ${teamName}`, exact: true });
    await createNewButton.click({ force: true });
});

// ai-studio-step-id: pwhu066c00
await leapwork.step("Click New file in the Leapwork Play menu", async () => {
    // Click span
    await page.locator('span').filter({ hasText: 'New file' }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw18x3n770
await leapwork.step("Click Upload file", async () => {
    // Click button "Upload file"
    await page.getByRole("button", { name: "Upload file" }).click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw12ng6yc0
await leapwork.step("Upload the file", async () => {
  const file = leapwork.files.path('FL-15');
  await page.locator("input[type='file']").nth(1).setInputFiles(file);
}, { action: "upload" });

// await leapwork.step("Upload the file.", async () => {
//     const uploadMakeMyTripBasicRequirementsDocumentXlsxInput = page.locator("input[type='file']");
//     await uploadMakeMyTripBasicRequirementsDocumentXlsxInput.setInputFiles(leapwork.files.path('FL-13'));
// }, { action: "click" });
