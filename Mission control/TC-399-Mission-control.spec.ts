import { leapwork } from "./leapwork";

import { teamName } from "@assets/Utilities/random-team";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
  enableXpath:
    (leapwork.team.settings.get("enableXpath")
      ?? leapwork.workspace.settings.get("enableXpath")) !== "false",
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

const userId = "user_79";
const fileId = "FL-16"
const envName = "Env 2"
const envUrl = "https://demoapps.leapwork.ai/retail/"

leapwork.variables.set("userId", userId);
leapwork.variables.set("passwordId", userId);
leapwork.variables.set("teamName", teamName);
leapwork.files.path('FL-16');

// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw198f3qs0
await leapwork.step("Click the Mission control button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Mission control' }).first().click();
}, { action: "click"});

// ai-studio-step-id: pw1ormm0d0
await leapwork.step("Click Upload manually in the Getting ready section", async () => {
    // Click button "Upload manually"
    await page.getByRole('button', { name: 'Upload manually' }).click();
}, { action: "click" });

// ai-studio-step-id: pwbea1ha00
await leapwork.step("Click Upload requirements to open the requirements upload dialog", async () => {
    // Click span
    await page.getByText('Upload requirements').click();
}, { action: "click" });

// ai-studio-step-id: pwyan9bb00
await leapwork.step("Upload the requirements file", async () => {
  const testCaseFile = leapwork.files.path(fileId);

  await page
    .locator(".signup-landing-modal input[type='file']")
    .setInputFiles(testCaseFile);
}, { action: "upload" });

// ai-studio-step-id: pw1nqkmgq0
await leapwork.step("Click Continue in the setup dialog", async () => {
    // Click button "Continue"
    await page.getByRole('button', { name: 'Continue' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1fpfuu70
await leapwork.step("Click Build my test coverage to map retail-demo.txt and create test cases", async () => {
    // Click button "Build my test coverage"
    await page.getByRole('button', { name: 'Build my test coverage' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1m0b5k40
await leapwork.step("Wait for Mission Control button", async () => {
  await page
    .getByRole("button", { name: "Go to mission control" })
    .waitFor({ state: "visible" });
}, { action: "validate", timeoutMs: 300000 });

// ai-studio-step-id: pwfimp7r00
await leapwork.step("Click Go to mission control in the coverage plan dialog", async () => {
    // Click button "Go to mission control"
    await page.getByRole('button', { name: 'Go to mission control' }).click();
}, { action: "click"});

// ai-studio-step-id: pw11wcgdx0
await leapwork.step("Click Approve to approve the draft test cases", async () => {
    // Click button "Approve"
    await page.getByRole('button', { name: 'Approve' }).click();
}, { action: "click" });

// ai-studio-step-id: pwkqqs4s00
await leapwork.step("Verify approve and review buttons are not visible", async () => {
  await expect(page.getByRole("button", { name: "Approve", exact: true })).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Review test cases", exact: true })).not.toBeVisible();
}, { action: "validate" });

// ai-studio-step-id: pw2iqsfr00
await leapwork.step("Verify test cases TC-1 to TC-10 were created", async () => {
  const testCases = page.locator(".mission-control-page__test-cases");

  for (let i = 1; i <= 10; i++) {
    await expect(
      testCases.getByText(`TC-${i}`, { exact: true })
    ).toBeVisible();
  }
}, { action: "validate" });

// ai-studio-step-id: pw17xu3dm0
await leapwork.step("Click the Record and play button in the Getting ready section", async () => {
    // Click button "Record and play"
    await page.getByRole('button', { name: 'Record and play' }).click();
}, { action: "click" });

// ai-studio-step-id: pwpr5icr00
await leapwork.step(`Fill the Environment name field with "${envName}" in the baseline test dialog`, async () => {
    // Fill textbox "Environment name"
    await page.getByRole('textbox', { name: 'Environment name' }).fill(String(envName));
}, { action: "input" });

// ai-studio-step-id: pw5kacok00
await leapwork.step(`Fill the URL field with ${envUrl}`, async () => {
    // Fill textbox "URL"
    await page.getByRole('textbox', { name: 'URL' }).fill(String(envUrl));
}, { action: "input" });

// ai-studio-step-id: pwgylfn500
await leapwork.step("Click the Test cases dropdown in the “Record and play your first baseline test” dialog", async () => {
    // Click combobox "Test cases"
    await page.getByRole('combobox', { name: 'Test cases' }).click();
}, { action: "click" });

// ai-studio-step-id: pw48wmx600
await leapwork.step("Select TC-1 test case", async () => {
  await page.getByRole("option", { name: /^TC-1\b/ }).click();
}, { action: "click" });

// ai-studio-step-id: pwjz5p4x00
await leapwork.step("Click Record and play in the dialog", async () => {
  const dialog = page.getByRole("dialog", {
    name: "Record and play your first baseline test",
  });

  await dialog
    .getByRole("button", { name: "Record and play", exact: true })
    .click();
}, { action: "click" });

// ai-studio-step-id: pw1x040fy0
await leapwork.step("Verify TC-1 tab is visible and active", async () => {
  const tc1Tab = page.getByRole("button", {
    name: /^TC-1\b/,
  });

  await expect(tc1Tab).toBeVisible();
  await expect(tc1Tab).toHaveClass(/tab--active/);
}, { action: "validate" });

// ai-studio-step-id: pwqppyki00
await leapwork.step("Verify environment is Env 2", async () => {
  await expect(
    page.getByRole("combobox", { name: "Environment" })
  ).toHaveText("Env 2");
}, { action: "validate" });

// ai-studio-step-id: pw1z4vp300
await leapwork.step("Click Mission control tab", async () => {
   await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "Mission control", exact: true }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1xppikk0
await leapwork.step("Verify Record and play button not visible", async () => {
  await expect(page.getByRole("button", { name: "Record and play", exact: true })).not.toBeVisible();
}, { action: "validate" });

// ai-studio-step-id: pw104i55l0
await leapwork.step("Wait for TC-1 status to show Recording", async () => {
  const tc1Row = page
    .locator(".mission-control-page__test-case")
    .filter({
      has: page
        .locator(".mission-control-page__test-case-title")
        .getByText("TC-1", { exact: true }),
    });

  await tc1Row.getByText("Recording...", { exact: true }).waitFor({
    state: "visible"
  });
}, { action: "validate", timeoutMs: 300000 });

// ai-studio-step-id: pw1rb75rk0
await leapwork.step("Wait for TC-1 status to show Running", async () => {
  const tc1Row = page
    .locator(".mission-control-page__test-case")
    .filter({
      has: page
        .locator(".mission-control-page__test-case-title")
        .getByText("TC-1", { exact: true }),
    });

  await tc1Row.getByText("Running...", { exact: true }).waitFor({
    state: "visible"
  });
}, { action: "validate", timeoutMs: 300000 });

// ai-studio-step-id: pwu9jbtd00
await leapwork.step("Verify TC-1 passed", async () => {
  const tc1 = page
    .locator("article.mission-control-page__test-case")
    .filter({
      has: page
        .locator(".mission-control-page__test-case-title")
        .getByText("TC-1", { exact: true }),
    });

  await tc1.getByText("Passed", { exact: true }).waitFor({
    state: "visible",
  });
}, { action: "validate", timeoutMs: 300000 });

// ai-studio-step-id: pw8mm0y200
await leapwork.step("Click Schedule in the Getting ready section", async () => {
    // Click button "Schedule"
    await page.getByRole('button', { name: 'Schedule' }).click();
}, { action: "click" });

// ai-studio-step-id: pwz6a6b000
await leapwork.step("Verify RL-1 tab is visible and active", async () => {
  const rl1Tab = page.getByRole("button", {
    name: "RL-1 retail-demo.txt knowledge base baseline run list",
  });

  await expect(rl1Tab).toBeVisible();
  await expect(rl1Tab).toHaveClass(/tab--active/);
}, { action: "validate" });

// ai-studio-step-id: pww8gp4600
await leapwork.step("Verify TC-1 is visible in the run list", async () => {
  await expect(
    page.locator(".runlist-selected-table tbody tr")
      .filter({ has: page.getByRole("button", { name: "TC-1", exact: true }) })
  ).toBeVisible();
}, { action: "validate" });

// ai-studio-step-id: pwumahfd00
await leapwork.step("Click Mission control tab", async () => {
  await page.getByRole("button", { name: "Mission control", exact: true }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1sa28sv0
await leapwork.step("Schedule button not visible", async () => {
    // Click button "Schedule"
    await expect(page.getByRole("button", { name: "Schedule", exact: true })).not.toBeVisible();
}, { action: "validate" });

// ai-studio-step-id: pw10xbt2w0
await leapwork.step("Click Play again for TC-1", async () => {
  const tc1Row = page
    .locator(".mission-control-page__test-case-row")
    .filter({
      has: page
        .locator(".mission-control-page__test-case-title")
        .getByText("TC-1", { exact: true }),
    });

  const playAgainButton = tc1Row.getByRole("button", {
    name: /^Play again:/,
  });

  await expect(playAgainButton).toBeVisible();
  await playAgainButton.click();
}, { action: "click" });

// ai-studio-step-id: pw3tnn4v00
await leapwork.step("Verify TC-1 tab is visible and active", async () => {
  const tc1Tab = page.getByRole("button", {
    name: /^TC-1\b/,
  });

  await expect(tc1Tab).toBeVisible();
  await expect(tc1Tab).toHaveClass(/tab--active/);
  
  await page.waitForTimeout(5000);
}, { action: "validate" });

// ai-studio-step-id: pw5b59yu00
await leapwork.step("Click Mission control tab", async () => {
  await page.getByRole("button", { name: "Mission control", exact: true }).first().click();
}, { action: "click" });

// ai-studio-step-id: pw1o1lhit0
await leapwork.step("Wait for TC-1 status to show Running", async () => {
  const tc1Row = page
    .locator(".mission-control-page__test-case")
    .filter({
      has: page
        .locator(".mission-control-page__test-case-title")
        .getByText("TC-1", { exact: true }),
    });

  await tc1Row.getByText("Running...", { exact: true }).waitFor({
    state: "visible"
  });
}, { action: "validate", timeoutMs: 300000 });

// ai-studio-step-id: pwskv39800
await leapwork.step("Verify TC-1 passed", async () => {
  const tc1 = page
    .locator("article.mission-control-page__test-case")
    .filter({
      has: page
        .locator(".mission-control-page__test-case-title")
        .getByText("TC-1", { exact: true }),
    });

  await tc1.getByText("Passed", { exact: true }).waitFor({
    state: "visible",
  });
}, { action: "validate", timeoutMs: 300000 });
