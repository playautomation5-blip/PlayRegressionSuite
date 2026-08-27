import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { RenameTeam } from "@assets/Utilities/Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RandomTeam, RandomTeam2, teamName } from "@assets/Utilities/random-team";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_45");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetName", "LLM testing");
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("text", "My testing team 10", leapwork.storage.LOCAL);
const lw__text = leapwork.variables.get("text", leapwork.storage.LOCAL) as string;

leapwork.variables.set("askAnything", "Go to amazon.com", leapwork.storage.LOCAL);
const lw__askAnything = leapwork.variables.get("askAnything", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: b3b8763f
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 456aa693
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: e171cd4b
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 8f7e6872
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 6947da33
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1q929un0
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click"});

// ai-studio-step-id: pw1xwpw4q0
await leapwork.step("Click the Expand chat button in the chat panel", async () => {
    // Click button "Expand chat"
    await page.getByRole('button', { name: 'Expand chat' }).click();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: 1H5Ixv6y
await leapwork.step("Click the New chat button", async () => {
    // Click button "New chat"
    await page.getByRole('button', { name: 'New chat' }).click();
}, { action: "click" });

// ai-studio-step-id: UPN47Sxf
await leapwork.step("Click the Connect button in the Action section", async () => {
    // Click button "Connect"
    await page.getByRole('button', { name: 'Connect' }).click();
}, { action: "click" });

// ai-studio-step-id: CYsMhsuX
await leapwork.step("Click the Ask anything text box", async () => {
    // Click textbox "Ask anything"
    await page.getByRole('textbox', { name: 'Ask anything' }).click();
}, { action: "click"});

// ai-studio-step-id: RHqgnYRM
await leapwork.step(`Fill the Ask anything field with "${lw__askAnything}"`, async () => {
    // Fill textbox "Ask anything"
    await page.getByRole('textbox', { name: 'Ask anything' }).fill(String(lw__askAnything));
}, { action: "input" });

// ai-studio-step-id: DiEjWEBH
await leapwork.step("Press Enter", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" }); 

// ai-studio-step-id: pw1rfadbj0
await leapwork.step("Validate that 'Thinking' appears in the chat on the Leapwork AI Studio page", async () => {
    // Assert span contains "Thinking"
    const loc = page.getByText('Thinking');
    await loc.waitFor({ state: 'visible' });
    await expect(page.getByText('Thinking')).toContainText("Thinking");
    await loc.waitFor({ state: 'hidden' });
}, { action: "validate", relativeXpath: "", timeoutMs:30000, continueOnFailure: true });

// ai-studio-step-id: VpIOwcb9
await leapwork.step("Validate the Approve button shows 'Approve' on the Leapwork Play page", async () => {
    // Assert button "Approve" contains "Approve"
    await expect(page.getByRole('button', { name: 'Approve' })).toContainText("Approve");
}, { action: "validate" });

// ai-studio-step-id: ombNmoYa
await leapwork.step("Click the Approve button for the Amazon navigation plan", async () => {
    // Click button "Approve"
    await page.getByRole('button', { name: 'Approve' }).click();
}, { action: "click" });

// ai-studio-step-id: pwet218600
await leapwork.step("Validate that 'Done' appears in the chat on the Leapwork AI Studio page", async () => {
    const doneLoc = page.getByText('Done', { exact: true });
    await doneLoc.waitFor({ state: 'visible', timeout: 60000 });
    await expect(doneLoc).toContainText('Done');
}, { action: "validate", relativeXpath: "", timeoutMs: 60000 });

// ai-studio-step-id: gUPlFPtq
await leapwork.step("Validate that Leapwork Play shows 'Open https://www.amazon.com/'", async () => {
    // Assert span contains "Open https://www.amazon.com/"
    await expect(page.getByText('Open https://www.amazon.com/', { exact: true })).toContainText("Open https://www.amazon.com/");
}, { action: "validate",timeoutMs:30000 });

// ai-studio-step-id: TAB20uYK
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: 7e34c43d
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });
