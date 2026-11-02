import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_55");


// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwdze6x900
await leapwork.step("Click the Expand folder button for the Demo Assets folder", async () => {
    // Click button "Expand folder"
    await page.getByRole('button', { name: 'Expand folder' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div[2]/div/div/button[@aria-label=\"Expand folder\"]" });

// ai-studio-step-id: HxWL6V12
await leapwork.step("Click the Getting started test case item", async () => {
    // Click "Getting started test case"
    await page.getByText('Getting started test case').click();
}, { action: "click" });

// ai-studio-step-id: CVs6OJAP
await leapwork.step("Double-click the TC-1 test case item", async () => {
    // Double-click "Getting started test case"
    await page.getByText('TC-').dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pw9iz81c00
await leapwork.step("Click the “Search Amazon.in” search box", async () => {
    // Click span
    await page.getByText('Click the Search Amazon.in search box', { exact: true }).click();
}, { action: "click", relativeXpath: ".//div[1]/div/div/div[3]/div[@aria-label=\"Click the Search Amazon.in search box\"]/span" });

// ai-studio-step-id: pw1wkptwv0
await leapwork.step("Right-click the \"Click the Search Amazon.in search box\" step", async () => {
    // Right-click span
    await page.locator('div[title="Click the Search Amazon.in search box"]').click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: NC0yBn9t
await leapwork.step("Click Copy in the step context menu", async () => {
    // Click div
    await page.getByText('Copy', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwf7jt1900
await leapwork.step("Click the step to fill the Search Amazon.in field with \"${lw__search2}\"", async () => {
    // Click span
    await page.getByText('Fill the Search Amazon.in field with "${lw__search2}"', { exact: true }).click();
}, { action: "click", relativeXpath: ".//div[2]/div/div/div[3]/div[@aria-label='Fill the Search Amazon.in field with \"${lw__search2}\"']/span" });

// ai-studio-step-id: pw1wbyf600
await leapwork.step("Click More actions for step 2 next to the search field step", async () => {
    // Click button "More actions for step 2"
    await page.getByRole('button', { name: 'More actions for step' }).click();
}, { action: "click", relativeXpath: ".//div[1]/div[2]/div/div/div[4]/button[@aria-label=\"More actions for step 2\"]" });

// ai-studio-step-id: o17Qazc6
await leapwork.step("Click the Paste option in the context menu", async () => {
    // Click div
    await page.getByText('Paste', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pw1rdnhid0
await leapwork.step("Validate that the Leapwork Play page shows “Click the Search Amazon.in search box”", async () => {
    // Assert span contains "Click the Search Amazon.in search box"
    await expect(page.getByText('Click the Search Amazon.in').nth(3)).toContainText("Click the Search Amazon.in search box");
}, { action: "validate", relativeXpath: ".//div[3]/div/div/div[3]/div[@aria-label=\"Click the Search Amazon.in search box\"]/span", enableXpath: false });

// ai-studio-step-id: pwm8xcse00
await leapwork.step("Right-click the “Search Amazon.in” search box step.", async () => {
    // Right-click span
    await page.getByText('Click the Search Amazon.in').nth(3).click({ button: 'right' });
}, { action: "click", relativeXpath: ".//div[3]/div/div/div[3]/div[@aria-label=\"Click the Search Amazon.in search box\"]/span" });

// ai-studio-step-id: 2YcVFb2F
await leapwork.step("Click Delete in the step context menu", async () => {
    // Click div
    await page.getByText('Delete').click();
}, { action: "click" });
