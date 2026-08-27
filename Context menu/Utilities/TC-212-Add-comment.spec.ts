import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const lw__addAComment = leapwork.variables.get("addAComment", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw1bqjr1c0
await leapwork.step("Right-click the 3rd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '3' }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw1110c6j0
await leapwork.step("Click Add comment in the step comments section", async () => {
    // Click span
    await page.getByText('Add comment').click();
}, { action: "click" });

// ai-studio-step-id: pw1rhwwu20
await leapwork.step(`Fill the Add a comment field with "${lw__addAComment}"`, async () => {
    // Fill textbox "Add a comment"
    await page.getByRole('textbox', { name: 'Add a comment' }).fill(String(lw__addAComment));
}, { action: "input" });

// ai-studio-step-id: pw1mcabkb0
await leapwork.step("Press Enter on the Leapwork Play page", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pw9cfamk00
await leapwork.step("Click the 3rd step", async () => {
    // Right-click span
    await page.locator('.step-order', { hasText: '3' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1fqu0pu0
await leapwork.step("Validate the Leapwork Play step's comment count shows \"1\"", async () => {
    // Assert button "View comments (1)" contains "1"
    await expect(page.getByRole('button', { name: 'View comments (1)' })).toContainText("1");
}, { action: "validate" });


