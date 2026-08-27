import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_45");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetName", "LLM testing");
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("text", "My testing team 10", leapwork.storage.LOCAL);
const lw__text = leapwork.variables.get("text", leapwork.storage.LOCAL) as string;

leapwork.variables.set("askAnything", "Go to amazon.com", leapwork.storage.LOCAL);
const lw__askAnything = leapwork.variables.get("askAnything", leapwork.storage.LOCAL) as string;


// ai-studio-step-id: 81cabc5a
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: a2732d42
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: d876f89f
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 73c17371
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 46d19916
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });



// ai-studio-step-id: pw1q929un0
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1srqsoy0
await leapwork.step("Click the New chat button", async () => {
    // Click button "New chat"
    await page.getByRole('button', { name: 'New chat' }).click();
}, { action: "click" });

// ai-studio-step-id: pw13ap92p0
await leapwork.step("Click the Connect button in the Action section", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1donwik0
await leapwork.step("Click the Ask anything text box", async () => {
    // Click textbox "Ask anything"
    await page.getByRole('textbox', { name: 'Ask anything' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1u970iz0
await leapwork.step(`Fill the Ask anything field with "${lw__askAnything}"`, async () => {
    // Fill textbox "Ask anything"
    await page.getByRole('textbox', { name: 'Ask anything' }).fill(String(lw__askAnything));
}, { action: "input" });

// ai-studio-step-id: pw1f1egwt0
await leapwork.step("Press Enter", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" }); 

// ai-studio-step-id: pw1kmn1j20
await leapwork.step("Validate that 'Thinking' appears in the chat on the Leapwork AI Studio page", async () => {
    // Assert span contains "Thinking"
    const loc = page.getByText('Thinking');
    await loc.waitFor({ state: 'visible' });
    await expect(page.getByText('Thinking')).toContainText("Thinking");
    await loc.waitFor({ state: 'hidden' });
}, { action: "validate", relativeXpath: "", timeoutMs:30000 });

// ai-studio-step-id: pw1fxb5xf0
await leapwork.step("Validate the Approve button shows 'Approve' on the Leapwork Play page", async () => {
    // Assert button "Approve" contains "Approve"
    await expect(page.getByRole('button', { name: 'Approve' })).toContainText("Approve");
}, { action: "validate" });

// ai-studio-step-id: pw1x275a60
await leapwork.step("Click the Approve button for the Amazon navigation plan", async () => {
    // Click button "Approve"
    await page.getByRole('button', { name: 'Approve' }).click();
}, { action: "click" });

// ai-studio-step-id: pw16n46p70
await leapwork.step("Validate that 'Done' appears in the chat on the Leapwork AI Studio page", async () => {
    const doneLoc = page.getByText('Done', { exact: true });
    await doneLoc.waitFor({ state: 'visible', timeout: 60000 });
    await expect(doneLoc).toContainText('Done');
}, { action: "validate", relativeXpath: "", timeoutMs: 60000 });

// ai-studio-step-id: pw1y920se0
await leapwork.step("Validate that Leapwork Play shows 'Open https://www.amazon.com/'", async () => {
    // Assert span contains "Open https://www.amazon.com/"
    await expect(page.getByText('Open https://www.amazon.com/', { exact: true })).toContainText("Open https://www.amazon.com/");
}, { action: "validate",timeoutMs:30000 });

// ai-studio-step-id: pw1swda3n0
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: dead6e5c
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });
