import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: 10000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});
leapwork.variables.set("userId", "user_6");

// ai-studio-step-id: pwp9y7tk00
await leapwork.step("Click the Connect button for the Google Chromium browser", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).waitFor({ state: 'visible' })
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1pm780t0
await leapwork.step("Click the Record button", async () => {
    await page.waitForTimeout(500);
    const record = page.locator('[data-aistudio-id="testcase_toolbar_record"]');
    await expect(page.locator(".video-waiting-overlay")).toBeHidden({ timeout: 120000 });
    await expect(record).toBeEnabled();
    await record.click();
    await expect(record).toHaveAttribute("aria-label", "Stop recording");
}, { action: "click", timeoutMs: 10000 });


// ai-studio-step-id: pw6avb2800
await leapwork.step("Click the \"Waiting for video stream...\" canvas in the test case steps area", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw1anmnjv0
await leapwork.step("Click the \"Waiting for video stream...\" canvas in the test case steps area", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw1j6rg8u0
await leapwork.step("Click the “Waiting for video stream...” overlay", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw10o9il30
await leapwork.step("Click “Waiting for video stream...” in the video preview", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pwhinrag00
await leapwork.step("Click the “Waiting for video stream...” overlay in the video frame.", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw4tzy7r00
await leapwork.step("Click the video stream area showing “Waiting for video stream...”", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw1wpny740
await leapwork.step("Click the Stop recording button in the test case steps panel", async () => {
    // Click button "Stop recording"
    await page.getByRole('button', { name: 'Stop recording' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1xvm5d00
await leapwork.step("Click the Disconnect button in the cloud browser controls", async () => {
    // Click button "Disconnect"
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click" });
