import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { ImportExcel } from "@assets/Functional/Utilities/Import excel";

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

leapwork.variables.set("userId", "reg_12");
leapwork.variables.set("teamName", teamName);

const fileId = "FL-11"
const folderName = "var"

leapwork.variables.set("fileId", fileId);

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });



// ai-studio-step-id: pwktv9fe00
await leapwork.step("Use test case: Import excel", async () => {
    return await ImportExcel();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1ps5aa90
await leapwork.step(`Click the "${teamName}" team in the Explorer`, async () => {
  const teamLocator = page
    .locator('.explorer-list')
    .getByText(teamName, { exact: true });

  await teamLocator.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw8fa7pu00
await leapwork.step("Click Create new in the asset menu", async () => {   
    const createNewButton = page.getByRole('button', { name: `Create new in ${teamName}`, exact: true });
    await createNewButton.click({ force: true });
});

// ai-studio-step-id: pwjqp1cb00
await leapwork.step("Click New test case in Leapwork Play", async () => {
    // Click span
    await page.getByText('New test case').click();
}, { action: "click" });

// ai-studio-step-id: pw12ohiq80
await leapwork.step("Click the Variables section to view testcase variables", async () => {
    // Click span
    await page.getByRole('button', { name: 'Variables' }).click();
}, { action: "click" });

// ai-studio-step-id: pwhc2p3t00
await leapwork.step("Click Connect variables from a file in the Variables section", async () => {
    // Click button "Connect variables from a file"
    await page.getByRole('button', { name: 'Connect variables from a file' }).click();
}, { action: "click" });

// ai-studio-step-id: pwdxwmm000
await leapwork.step("Click FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx file", async () => {
    // Click span
    await page.getByRole('button', { name: 'FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx' }).click();
}, { action: "click" });

// ai-studio-step-id: pwqzcrff00
await leapwork.step("Click Continue to proceed from the selected spreadsheet range.", async () => {
    // Click button "Continue"
    await page.getByRole('button', { name: 'Continue' }).click();
}, { action: "click", relativeXpath: ".//body/div[6]/div[@aria-label=\"Choose a data source\"]/div[3]/button[2]" });

// ai-studio-step-id: pw2iert700
await leapwork.step("Click Continue in the Map variables dialog", async () => {
    // Click button "Continue"
    await page.getByRole('button', { name: 'Continue' }).click();
}, { action: "click", relativeXpath: ".//body/div[6]/div[@aria-label=\"Select range\"]/div[4]/button[2]" });

// ai-studio-step-id: pw1rofyas0
await leapwork.step("Click Next in the Select run mode dialog", async () => {
    // Click button "Next"
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: ".//body/div[6]/div[@aria-label=\"Map variables\"]/div[4]/button[2]" });

// ai-studio-step-id: pwlokq5j00
await leapwork.step("Click “Random” to use a different row each run.", async () => {
    // Click button "Random Use a different row each run."
    await page.getByRole('button', { name: 'Random Use a different row' }).click();
}, { action: "click", relativeXpath: ".//div[6]/div[@aria-label=\"Select run mode\"]/div[3]/div/div/button[1]" });

// ai-studio-step-id: pw1rt52t60
await leapwork.step("Click Apply in the row selection dialog", async () => {
    // Click button "Apply"
    await page.getByRole('button', { name: 'Apply', exact: true }).click();
}, { action: "click", relativeXpath: ".//body/div[6]/div[@aria-label=\"Select run mode\"]/div[4]/button[2]" });

// ai-studio-step-id: pwe5hhlf00
await leapwork.step("Click the Playwright button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Playwright' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[2]/span/span" });

// ai-studio-step-id: pw1e294ra0
await leapwork.step("Validate the editor contains the generated row expression", async () => {
  await expect(page.locator(".view-lines")).toContainText(
    "const row = dataRows[Math.floor(Math.random() * dataRows.length)] ?? [];"
  );
}, { action: "validate" });

// ai-studio-step-id: pw1mm22n90
await leapwork.step("Click Edit for the FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx connection", async () => {
    // Click button "Edit FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx connection"
    await page.getByRole('button', { name: 'Edit FL-1' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[3]/div[1]/div/button[@aria-label=\"Edit FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx connection\"]" });

// ai-studio-step-id: pw123ch6u0
await leapwork.step("Click the Specific row option to always use the same row", async () => {
    // Click span
    await page.getByRole('button', { name: 'Specific row Always use the' }).click();
}, { action: "click", relativeXpath: ".//div[@aria-label=\"Select run mode\"]/div[3]/div/div/button[2]/span[1]" });

// ai-studio-step-id: pw1pwo4ah0
await leapwork.step("Click Apply to confirm the selected spreadsheet row.", async () => {
    // Click button "Apply"
    await page.getByRole('button', { name: 'Apply', exact: true }).click();
}, { action: "click", relativeXpath: ".//body/div[5]/div[@aria-label=\"Select run mode\"]/div[4]/button[2]" });

// ai-studio-step-id: pw17p892y0
await leapwork.step("Validate the editor contains the generated row expression", async () => {
  await expect(page.locator(".view-lines")).toContainText(
    "const row = dataRows[0] ?? [];"
  );
}, { action: "validate" });

// ai-studio-step-id: pw8xk5kc00
await leapwork.step("Click Edit for the FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx connection", async () => {
    // Click button "Edit FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx connection"
    await page.getByRole('button', { name: 'Edit FL-1' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div[3]/div[1]/div/button[@aria-label=\"Edit FL-1 MakeMyTrip_Basic_Requirements_Document.xlsx connection\"]" });

// ai-studio-step-id: pw1266xwz0
await leapwork.step("Click the \"Row to use\" dropdown to select Row 1", async () => {
    // Click button "Row to use"
    await page.getByRole('button', { name: 'Row to use' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div/div[2]/div[1]/div/div[@aria-label=\"Row to use\"]" });

// ai-studio-step-id: pwq96wy200
await leapwork.step("Click the “Row to use” dropdown to select Row 7", async () => {
    // Click div
    await page.getByText('Row 7').click();
}, { action: "click", relativeXpath: ".//body/div[6]/div[7]" });

// ai-studio-step-id: pwodkm6v00
await leapwork.step("Click Apply to select Row 7 for the spreadsheet data step", async () => {
    // Click button "Apply"
    await page.getByRole('button', { name: 'Apply', exact: true }).click();
}, { action: "click", relativeXpath: ".//body/div[5]/div[@aria-label=\"Select run mode\"]/div[4]/button[2]" });

// ai-studio-step-id: pw13ua98m0
await leapwork.step("Validate the editor contains the generated row expression", async () => {
  await expect(page.locator(".view-lines")).toContainText(
    "const row = dataRows[6] ?? [];"
  );
}, { action: "validate" });

// ai-studio-step-id: pwea0zqv00
await leapwork.step("Replace the MakeMyTrip variable name", async () => {
  await page.locator(".monaco-editor").click();
  await page.keyboard.press("Control+h");

  await page.getByRole("textbox", { name: "Find" }).fill(
    'const lw__makeMyTrip_-_Basic_Requirements_Document = leapwork.variables.get("MakeMyTrip - Basic Requirements Document", leapwork.storage.LOCAL) as string;'
  );
  await page.getByRole("textbox", { name: "Replace" }).fill(
    'const lw__makeMyTrip__Basic_Requirements_Document = leapwork.variables.get("MakeMyTrip - Basic Requirements Document", leapwork.storage.LOCAL) as string;'
  );

  await page.getByRole("button", { name: "Replace All" }).click();
  await page.keyboard.press("Escape");
}, { action: "input" });
