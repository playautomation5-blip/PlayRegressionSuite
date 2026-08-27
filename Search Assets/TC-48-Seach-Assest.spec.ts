import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";

leapwork.variables.set("search", "shivani", leapwork.storage.LOCAL);
const lw__search = leapwork.variables.get("search", leapwork.storage.LOCAL) as string;

leapwork.variables.set("search2", "Common", leapwork.storage.LOCAL);
const lw__search2 = leapwork.variables.get("search2", leapwork.storage.LOCAL) as string;

leapwork.variables.set("search3", "", leapwork.storage.LOCAL);
const lw__search3 = leapwork.variables.get("search3", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

const teamName = "Leapwork";
const testCaseName ="Leapwork test case";

const assetDictionary: Record<string, string> = {
  "New test case": "Leapwork test case",
  "New typescript": "Common utility",
  "New folder": "Shivani folder name",
  "New knowledge base": "AI Studio KB",
  "New agent":"Force agent ",
  "New runlist":"Combined runlist"
};


leapwork.variables.set("userId", "user_18");
leapwork.variables.set("teamName",teamName);
leapwork.variables.set("assetType", "New test case");


// ai-studio-step-id: 678520c3
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 429acea6
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: c19ab113
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 5d23df4b
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: f5724df9
await leapwork.step("Use test case: Create New Asset", async () => {
      const entries = Object.entries(assetDictionary);
    for (let i = 0; i < 5; i++) {
        const [assetType, assetName] = entries[i];
        leapwork.variables.set("assetType", assetType);
        leapwork.variables.set("assetName", assetName);
        await CreateNewAsset();
    }
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pwp852wb00
await leapwork.step("Click the Search field", async () => {
    // Click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).click();
}, { action: "click"});

// ai-studio-step-id: pwwvdrn800
await leapwork.step(`Fill the Search field with "${lw__search}"`, async () => {
    // Fill textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).fill(String(lw__search));
}, { action: "input" });

// ai-studio-step-id: pwx3jakx00
await leapwork.step("Validate that 'Shivani' is shown in the folder name on the Leapwork Play page", async () => {
    // Assert span contains "Shivani"
    assertScreenshot("Shivani folder exists in Leapwork team")
}, { action: "validate"});

// ai-studio-step-id: pwwf0k2q00
await leapwork.step("Click the Search field and enter shivani", async () => {
    // Click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1p03zgp0
await leapwork.step(`Fill the Search field with "${lw__search2}"`, async () => {
    // Fill textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).fill(String(lw__search2));
}, { action: "input" });

// ai-studio-step-id: pwgsi8uv00
await leapwork.step("Click the Search field", async () => {
    // Click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1twiham0
await leapwork.step("Validate that Common utility shows 'TS-1Common utility' on the Leapwork Play page", async () => {
    // Assert "Common utility" contains "TS-1Common utility"
    await expect(page.getByText('TS-1Common utility').first()).toContainText("TS-1Common utility");
}, { action: "validate" });

// await leapwork.step("Click the Explorer sidebar pane for TS-1 Common utility", async () => {
//     // Click div
//     await page.locator('div').filter({ hasText: 'Leapwork TeamTS-1Common' }).nth(5).click();
// }, { action: "click" });

// ai-studio-step-id: pwjggsa200
await leapwork.step("Fill the Search field", async () => {
    // Fill textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).fill(String(lw__search3));
}, { action: "input" });

// await leapwork.step("Click the Collapse trash button", async () => {
//     // Click button "Collapse trash"
//     await page.getByRole('button', { name: 'Collapse trash' }).click();
// }, { action: "click" });

// ai-studio-step-id: 9d789c46
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

