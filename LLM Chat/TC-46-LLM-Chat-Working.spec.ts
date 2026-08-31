import { leapwork } from "./leapwork";

import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { CreateNewTeam } from "@assets/Utilities/Create New Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { RenameTeam } from "@assets/Utilities/Rename Team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_44");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetName", "LLM testing");
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("text", "My Testing team 9", leapwork.storage.LOCAL);
const lw__text = leapwork.variables.get("text", leapwork.storage.LOCAL) as string;

leapwork.variables.set("askAnything", "Hi", leapwork.storage.LOCAL);
const lw__askAnything = leapwork.variables.get("askAnything", leapwork.storage.LOCAL) as string;


// ai-studio-step-id: 2d287ba3
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: cf6c054f
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: e5dc9a44
await leapwork.step("Use test case: Create New Team", async () => {
    return await CreateNewTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });



// ai-studio-step-id: 4fd4eac7
await leapwork.step("Use test case: Rename Team", async () => {
    return await RenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: bcd8925f
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: pweuclfd00
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: pw19mgpt20
await leapwork.step("Click the Expand chat button in the chat panel", async () => {
    // Click button "Expand chat"
    await page.getByRole('button', { name: 'Expand chat' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[2]/div/div/button[@aria-label=\"Expand chat\"]", continueOnFailure: true });

// ai-studio-step-id: pwt8mcl200
await leapwork.step("Click the New chat button in Leapwork AI Studio", async () => {
    // Click button "New chat"
    await page.getByRole('button', { name: 'New chat' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1mb47kj0
await leapwork.step("Click the Ask anything text box", async () => {
    // Click textbox "Ask anything"
    await page.getByRole('textbox', { name: 'Ask anything' }).click();
}, { action: "click" });

// ai-studio-step-id: pwk3zou400
await leapwork.step(`Fill the Ask anything field with ${lw__askAnything}`, async () => {
    // Fill textbox "Ask anything"
    await page.getByRole('textbox', { name: 'Ask anything' }).fill(String(lw__askAnything));
}, { action: "input" });

// ai-studio-step-id: pw1bwobal0
await leapwork.step("Press Enter on the Leapwork AI Studio asset page", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pwlj9okt00
await leapwork.step("Validate that 'Thinking' appears in the chat on the Leapwork AI Studio page", async () => {
    // Assert span contains "Thinking"
    const loc = page.getByText('Thinking');
    await loc.waitFor({ state: 'visible' });
    await expect(page.getByText('Thinking')).toContainText("Thinking");
    await loc.waitFor({ state: 'hidden' });
}, { action: "validate", relativeXpath: "", timeoutMs:30000 });

// ai-studio-step-id: pw1fsif2q0
await leapwork.step("Validate that the chat message shows 'Hi! How can I help?' on the Leapwork Play page", async () => {
    const spanText = await page
    .locator('.chat-message-assistant .chat-message-content span')
    .last()
    .innerText();

    expect(spanText).toMatch(/hi/i);
}, { action: "validate" });


// await leapwork.step("Validate that the chat message shows 'Hi! How can I help?' on the Leapwork Play page", async () => {
//     // Assert span contains "Hi! How can I help?"
//     await expect(page.getByText('Hi! How can I help?')).toContainText("Hi! How can I help?");
// }, { action: "validate" });

// ai-studio-step-id: pw1f70o7z0
await leapwork.step("Click the Explorer button", async () => {
    // Click button "Explorer"
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[2]/div[1]/div[1]/div/button[@aria-label=\"Explorer\"]" });

// ai-studio-step-id: bf33d129
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });
