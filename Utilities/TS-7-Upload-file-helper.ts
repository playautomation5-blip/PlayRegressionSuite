import { leapwork } from "./leapwork";

// Import files here as well for reference



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

const importOptions = {
  tests: {
    menuLabel: "Import tests",
    createButtonLabel: "Create test cases",
  },
  playwright: {
    menuLabel: "Import Playwright",
    createButtonLabel: "Import Playwright tests",
  },
} satisfies Record<ImportType, { menuLabel: string; createButtonLabel: string }>;

/**
 * Uploads a file to a specific team and verifies creation.
 * @param page The Playwright page instance
 * @param teamName The name of the team target
 * @param fileId The target file identifier (e.g., 'FL-4')
 */

export async function importLeapworkFile(page: Page, teamName: string, fileId: string, testCaseName: string) {
  // Pull internal dependencies automatically from variables
  const importType = leapwork.variables.get("importType") as ImportType;
  const selectedImport = importOptions[importType];

  await leapwork.step(`Click the "${teamName}" team in the Explorer`, async () => {
    leapwork.log.info(teamName);
    const teamLocator = page
      .locator('.explorer-list')
      .getByText(teamName, { exact: true });

    await teamLocator.click({ force: true });
  }, { action: "click" });

  await leapwork.step(`Open More actions for the "${teamName}" team`, async () => {
    const moreActionsButton = page.getByRole('button', {
      name: `More actions for ${teamName}`,
      exact: true,
    });

    await moreActionsButton.click({ force: true });
  }, { action: "click" });

  await leapwork.step("Open the Import menu item", async () => {
    await page.getByText('Import', { exact: true }).click();
  }, { action: "click" });

  await leapwork.step("Open Import tests from the Import menu", async () => {
    await page.getByText(selectedImport.menuLabel, { exact: true }).click();
  }, { action: "click" });

  await leapwork.step("Upload the test case file", async () => {
    leapwork.log.info(fileId);
    const testCaseFile = leapwork.files.path(fileId);
    
    await page
      .locator(".test-case-import-popup input[type='file']")
      .setInputFiles(testCaseFile);
  }, { action: "upload" });

  await leapwork.step("Create test cases from the uploaded file", async () => {
    await page
      .getByRole('button', { name: selectedImport.createButtonLabel, exact: true })
      .click();
  }, { action: "click" });

  await leapwork.step("Click the Import button in the linked asset popup", async () => {
      await page.getByRole('button', { name: 'Import' }).click();
  }, { action: "click", continueOnFailure: true, timeoutMs: 20000 });

  await leapwork.step("Verify that the new test case was created", async () => {
    leapwork.log.info(testCaseName);
      const testCaseLocator = page
            .locator(".explorer-list")
            .getByText(testCaseName, { exact: true });
      await expect(testCaseLocator).toBeVisible();
  }, { action: "validate" });
}
// --- How to call it in your test ---
// await uploadLeapworkFile(page, "My Team Name", "FL-4");
