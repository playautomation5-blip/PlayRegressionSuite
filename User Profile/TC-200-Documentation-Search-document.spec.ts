import { leapwork } from "./leapwork";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");
leapwork.variables.set("searchDocumentation", "welc", leapwork.storage.LOCAL);
const lw__searchDocumentation = leapwork.variables.get("searchDocumentation", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: 80955b0e
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: md35sLm9
await leapwork.step("Click the Automation Account (Personal) account menu button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Automation Account (Personal' }).click();
}, { action: "click" });

// ai-studio-step-id: 3aHBPm1R
await leapwork.step("Click the Documentation button in the docs dialog", async () => {
    // Click span
    await page.getByText('Documentation').click();
}, { action: "click" });

// ai-studio-step-id: WA2w94KN
await leapwork.step("Validate that the Welcome to Play button shows 'Welcome to Play' on Leapwork Play docs", async () => {
    // Assert span contains "Welcome to Play"
    await expect(page.getByRole('button', { name: 'Welcome to Play' })).toContainText("Welcome to Play");
}, { action: "validate" });

// ai-studio-step-id: Iu66OMDz
await leapwork.step("Validate the \"Run Your First Automation\" button text on the Leapwork Play page", async () => {
    // Assert button "Run Your First Automation" contains "Run Your First Automation"
    await expect(page.getByRole('button', { name: 'Run Your First Automation' })).toContainText("Run Your First Automation");
}, { action: "validate" });

// ai-studio-step-id: aKOZoL7E
await leapwork.step("Validate the Leapwork Play page shows 'Record-Edit-Run Playwright With Self-Healing AIA'", async () => {
    // Assert span contains "Record-Edit-Run Playwright With Self-Healing AIA"
    await expect(page.getByRole('button', { name: 'Record-Edit-Run Playwright' })).toContainText("Record-Edit-Run Playwright With Self-Healing AIA");
}, { action: "validate" });

// ai-studio-step-id: UekzbbjB
await leapwork.step("Validate the Search documentation search box on the Leapwork Play docs page", async () => {
    // Assert searchbox "Search documentation" is visible
    await expect(page.getByRole('searchbox', { name: 'Search documentation' })).toBeVisible();
}, { action: "validate" });

// ai-studio-step-id: 5cKO6PXx
await leapwork.step(`Fill the Search documentation field with "${lw__searchDocumentation}"`, async () => {
    // Fill searchbox "Search documentation"
    await page.getByRole('searchbox', { name: 'Search documentation' }).fill(String(lw__searchDocumentation));
}, { action: "input" });

// ai-studio-step-id: 7gCGpdSp
await leapwork.step("Validate that the Welcome to Play result shows 'Welcome to Play' on Leapwork Play docs", async () => {
    // Assert span contains "Welcome to Play"
    await expect(page.getByRole('button', { name: 'Welcome to Play getting-' })).toContainText("Welcome to Play");
}, { action: "validate" });

// ai-studio-step-id: RI3HsYyG
await leapwork.step("Click the Close documentation button in the Leapwork Play documentation popup", async () => {
    // Click button "Close documentation"
    await page.getByRole('button', { name: 'Close documentation' }).click();
}, { action: "click" });
