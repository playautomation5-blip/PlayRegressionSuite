import { leapwork } from "./leapwork";

const initialStepCount = await page.locator('.testcase-step-row').count();

// ai-studio-step-id: pweha3r600
await leapwork.step("Right-click the 2nd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '4' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw1oqg6jh0
await leapwork.step("Click “Record after this step” in the step context menu", async () => {
    // Click div
    await page.getByText('Record after this step').click();
}, { action: "click" });

// ai-studio-step-id: pwirk05e00
await leapwork.step("Validate that the Stop recording button is visible", async () => {
    // Click button "Stop recording"
    await expect(page.getByRole('button', { name: 'Stop recording' })).toBeEnabled({ timeout: 30000 });
    await page.waitForTimeout(2000);
}, { action: "click" });

// ai-studio-step-id: pw1reg5yk0
await leapwork.step("Click the video canvas showing \"Waiting for video stream...\"", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw15iin4p0
await leapwork.step("Wait for 3 seconds", async () => {
    await page.waitForTimeout(3000);
}, { action: "wait" });

// ai-studio-step-id: pw14iilii0
await leapwork.step("Validate 1 new step was added", async () => {
    const steps = page.locator('.testcase-step-row');
    await expect(steps).toHaveCount(initialStepCount + 1);
}, { action: "validate", timeoutMs: 30000 });

// ai-studio-step-id: pwcmgvio00
await leapwork.step("Click the Test case steps content area in Leapwork AI Studio", async () => {
    // Click div
    await page.locator('.testcase-main-content').click();
}, { action: "click" });

// ai-studio-step-id: pw1oiybn90
await leapwork.step("Click the Stop recording button in the test case editor", async () => {
    // Click button "Stop recording"
    await expect(page.getByRole('button', { name: 'Stop recording' })).toBeEnabled({ timeout: 30000 });
    await page.getByRole('button', { name: 'Stop recording' }).click();
}, { action: "click" });

// await leapwork.step("Validate that the Record button shows 'Record' on the Leapwork Play page", async () => {
//     // Assert button "Record" contains "Record"
//     await expect(page.getByRole('button', { name: 'Record' })).toContainText("Record");
// }, { action: "validate" });

// ai-studio-step-id: pwtbyyrc00
await leapwork.step("Click the Disconnect button in the cloud browser panel", async () => {
    // Click button "Disconnect"
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click" });