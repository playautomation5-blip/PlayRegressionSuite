import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";

leapwork.variables.set("search", "shivani", leapwork.storage.LOCAL);
const lw__search = leapwork.variables.get("search", leapwork.storage.LOCAL) as string;

leapwork.variables.set("search2", "Common", leapwork.storage.LOCAL);
const lw__search2 = leapwork.variables.get("search2", leapwork.storage.LOCAL) as string;

leapwork.variables.set("search3", "", leapwork.storage.LOCAL);
const lw__search3 = leapwork.variables.get("search3", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.workspace.settings.get("enableSelfHeal")
      ?? leapwork.team.settings.get("enableSelfHeal")) !== "false",
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


// ai-studio-step-id: 9a6509e2
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 5986fd60
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 496057e8
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 8bec2294
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwqrpsmo00
await leapwork.step("Use test case: Create New Asset", async () => {
     const entries = Object.entries(assetDictionary);
    for (let i = 0; i < 5; i++) {
        const [assetType, assetName] = entries[i];
        leapwork.variables.set("assetType", assetType);
        leapwork.variables.set("assetName", assetName);
        await CreateNewAsset();
    }
}, { action: "asset_reference", linkedAssetType: "test-case" , timeoutMs : 60000});

// ai-studio-step-id: 69HAcHJ0
await leapwork.step("Click the Search field", async () => {
    // Click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).click();
}, { action: "click"});

// ai-studio-step-id: qeRLkoIo
await leapwork.step(`Fill the Search field with "${lw__search}"`, async () => {
    // Fill textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).fill(String(lw__search));
}, { action: "input" });

// ai-studio-step-id: pwods0x100
await leapwork.step("Validate that the Shivani folder name shows 'Shivani' on the Leapwork Play page", async () => {
    // Assert span contains "Shivani"
    await expect(page.getByText('Shivani').first()).toContainText("Shivani");
}, { action: "validate"});

// ai-studio-step-id: Ck0p5wP5
await leapwork.step("Click the Search field and enter shivani", async () => {
    // Click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).click();
}, { action: "click"});

// ai-studio-step-id: DOQtK6nG
await leapwork.step(`Fill the Search field with "${lw__search2}"`, async () => {
    // Fill textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).fill(String(lw__search2));
}, { action: "input" });

// ai-studio-step-id: 8OWxT5Ns
await leapwork.step("Click the Search field", async () => {
    // Click textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).click();
}, { action: "click"});

// ai-studio-step-id: tWy02OMZ
await leapwork.step("Validate that Common utility shows 'TS-1Common utility' on the Leapwork Play page", async () => {
    // Assert "Common utility" contains "TS-1Common utility"
    await expect(page.getByText('TS-1Common utility').first()).toContainText("TS-1Common utility");
}, { action: "validate" });


// ai-studio-step-id: pwz5567r00
await leapwork.step("Click the Search field in the Leapwork explorer panel", async () => {
    // Click div
    await page.locator('.explorer-search-container').click();
}, { action: "click", relativeXpath: ".//div[3]/div[2]/div[1]/div[2]/div[2]/div[1]" });

// ai-studio-step-id: pw1f7qbb60
await leapwork.step("Fill the Search field to filter Leapwork assets", async () => {
    // Fill textbox "Search"
    await page.getByRole('textbox', { name: 'Search' }).fill(String(lw__search3));
}, { action: "input", relativeXpath: ".//div[2]/div[1]/div[2]/div[2]/div[1]/input" });



// ai-studio-step-id: s74GWQ8m
await leapwork.step("Click the Collapse trash button", async () => {
    // Click button "Collapse trash"
    await page.getByRole('button', { name: 'Collapse trash' }).click();
}, { action: "click" });

// ai-studio-step-id: c6ebbf8a
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
