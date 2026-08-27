import { leapwork } from "./leapwork";

// Import files here as well for reference, otherwise you will get file not found error
leapwork.files.path('FL-1');
leapwork.files.path('FL-2');

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

type ImportType = "tests" | "playwright";

const teamName = leapwork.variables.get("teamName") as string;
const fileId = leapwork.variables.get("fileId") as string;
const importType = leapwork.variables.get("importType") as ImportType;

// Name of the imported test case
const testCasesNames = leapwork.variables.get("testCasesNames") as string[];

const importOptions = {
  tests: {
    menuLabel: "Import tests",
    createButtonLabel: "Create test cases",
  },
  playwright: {
    menuLabel: "Import Playwright",
    createButtonLabel: "Import Playwright tests",
  },
} satisfies Record<ImportType,
  {
    menuLabel: string;
    createButtonLabel: string;
  }>;

const selectedImport = importOptions[importType];

// ai-studio-step-id: pw1nwspgg0
await leapwork.step(`Click the "${teamName}" team in the Explorer`, async () => {
  const teamLocator = page
    .locator('.explorer-list')
    .getByText(teamName, { exact: true });

  await teamLocator.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw1yl2qqz0
await leapwork.step(`Open More actions for the "${teamName}" team`, async () => {
  const moreActionsButton = page.getByRole('button', {
    name: `More actions for ${teamName}`,
    exact: true,
  });

  await moreActionsButton.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw1ld44000
await leapwork.step("Open the Import menu item", async () => {
  await page.getByText('Import', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1eyspex0
await leapwork.step("Open Import tests from the Import menu", async () => {
  await page.getByText(selectedImport.menuLabel, { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw6klt7w00
await leapwork.step("Upload the test case file", async () => {
  const testCaseFile = leapwork.files.path(fileId);
  
  await page
    .locator(".test-case-import-popup input[type='file']")
    .setInputFiles(testCaseFile);
}, { action: "upload" });

// ai-studio-step-id: pwvqzboh00
await leapwork.step("Create test cases from the uploaded file", async () => {
  await page
    .getByRole('button', { name: selectedImport.createButtonLabel, exact: true })
    .click();
}, { action: "click" });

// ai-studio-step-id: pw1r5nc860
await leapwork.step("Verify that the new test case was created", async () => {
  for (const testCaseName of testCasesNames) {
    const testCaseLocator = page
          .locator(".explorer-list")
          .getByText(testCaseName, { exact: true });
    await expect(testCaseLocator).toBeVisible();
  }
}, { action: "validate" });

