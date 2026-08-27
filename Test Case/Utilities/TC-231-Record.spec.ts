import { leapwork } from "./leapwork";

import { AddEnvToATestCase } from "@assets/Test Case/Utilities/Add Env to a test case";

// ai-studio-step-id: 76751a44
await leapwork.step("Use test case: Add Env to a test case", async () => {
    return await AddEnvToATestCase();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1hcx7ap0
await leapwork.step("Click the Connect button for the Google Chromium browser", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1pohsbs0
await leapwork.step("Click the Record button", async () => {
    // Click button "Record"
    await page.getByRole('button', { name: 'Record' }).click();
}, { action: "click", timeoutMs: 20000 });

// ai-studio-step-id: pwvawpxl00
await leapwork.step("Click the video canvas showing 'Waiting for video stream...'", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pwuvzdmc00
await leapwork.step("Click the video canvas showing \"Waiting for video stream...\"", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw9ues4n00
await leapwork.step("Click the video canvas in the Browser panel", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pw18aqw0i0
await leapwork.step("Click the video stream canvas in AI Studio", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pwhs63s100
await leapwork.step("Click the video stream canvas in Leapwork AI Studio", async () => {
    // Click canvas
    await page.locator('canvas').first().click();
}, { action: "click" });

// ai-studio-step-id: pwqrp7in00
await leapwork.step("Click the Test case steps content area in Leapwork AI Studio", async () => {
    // Click div
    await page.locator('.testcase-main-content').click();
}, { action: "click" });

// ai-studio-step-id: pwunt1ko00
await leapwork.step("Click the Stop recording button in the test case editor", async () => {
    // Click button "Stop recording"
    await page.getByRole('button', { name: 'Stop recording' }).click();
}, { action: "click" });

// ai-studio-step-id: pwsrb9r100
await leapwork.step("Validate that the Record button shows 'Record' on the Leapwork Play page", async () => {
    // Assert button "Record" contains "Record"
    const recordButton = page.getByRole('button', {
        name: 'Record',
        exact: true,
    });
    await expect(recordButton).toBeVisible({ timeout: 10_000 });
}, { action: "validate" });

// ai-studio-step-id: pwacr7us00
await leapwork.step("Click the Disconnect button in the cloud browser panel", async () => {
    // Click button "Disconnect"
    await page.getByRole('button', { name: 'Disconnect' }).click();
}, { action: "click" });

// ai-studio-step-id: pwcwfqbl00
await leapwork.step("Validate the Connect button shows 'Connect' on the Leapwork Play page", async () => {
    // Assert button "Connect" contains "Connect"
    await expect(page.getByRole('button', { name: 'Connect' })).toContainText("Connect");
}, { action: "validate" });
