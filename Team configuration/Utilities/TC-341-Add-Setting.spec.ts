import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName") as string;
const lw__SettingName = leapwork.variables.get("settingKey") as string;
const lw__SettingValue = leapwork.variables.get("settingValue") as string;

// ai-studio-step-id: pw1iggplw0
await leapwork.step("Double-click team twice", async () => {
    // Double-click textbox "Search"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });


// ai-studio-step-id: pw190c5rr0
await leapwork.step("Delete all settings", async () => {
    const buttonLocator = page.locator('.kv-settings-action-button');
  // Keep looping as long as at least one button is visible
  while (await buttonLocator.first().isVisible()) {
    // Click the first available button
    await buttonLocator.first().click();
    await page.getByText('Delete setting').click();
    await page.getByRole('button', { name: 'Delete' }).click();
  }
}, { action: "click", relativeXpath: ".//div[6]/div[5]/div/div[3]/button/span" });

// ai-studio-step-id: pwwjf6om00
await leapwork.step("Click the \"+ Add setting\" button in the Settings section", async () => {
    // Click span
    await page.getByRole('button', { name: '+ Add setting' }).click();
}, { action: "click", relativeXpath: ".//div[6]/div[5]/div/div[3]/button/span" });

// ai-studio-step-id: pw1wuw9ja0
await leapwork.step(`Fill the Setting key field with "${lw__SettingName}"`, async () => {
    // Fill textbox "Setting key"
    await page.getByRole('textbox', { name: 'Setting key' }).fill(String(lw__SettingName));
}, { action: "input", relativeXpath: ".//div[5]/div/div[2]/div[2]/span[1]/input" });

// ai-studio-step-id: pw1vkp3yt0
await leapwork.step(`Fill the Value field for enableSelfHeal with "${lw__SettingValue}"`, async () => {
    // Fill textbox "Value"
    await page.getByRole('textbox', { name: 'Value' }).fill(String(lw__SettingValue));
}, { action: "input", relativeXpath: ".//div[5]/div/div[2]/div[2]/span[2]/input" });

// ai-studio-step-id: pwb6n4zf00
await leapwork.step("Click the Save button in the team settings.", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click", relativeXpath: ".//div[5]/div/div[2]/div[2]/span[3]/button" });