import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName") as string;
const lw__tagName = leapwork.variables.get("tagName") as string;
const lw__tagDescription = leapwork.variables.get("tagDescription") as string;

// ai-studio-step-id: pwcegcfi00
await leapwork.step("Double-click team twice", async () => {
    // Double-click textbox "Search"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pw18012db0
await leapwork.step("Click the disabled + Add Tag button in Leapwork AI Studio", async () => {
    const addTagButton = page.getByRole('button', { name: '+ Add Tag', exact: true });
    await addTagButton.click({ force: true });
});

// ai-studio-step-id: pw14c1zv60
await leapwork.step("Click the Tag name field", async () => {
    const tagName = page.getByPlaceholder('Tag name', { exact: true });
    await tagName.click({ force: true });
});

// ai-studio-step-id: pwo5gek500
await leapwork.step(`Fill the Tag name field with "${lw__tagName}"`, async () => {
    const tagName = page.getByPlaceholder('Tag name', { exact: true });
    await tagName.fill(lw__tagName);
});

// ai-studio-step-id: pwryti0200
await leapwork.step("Click the Description field in Leapwork AI Studio", async () => {
    const description = page.getByPlaceholder('Description', { exact: true });
    await description.click({ force: true });
});

// ai-studio-step-id: pw1v1hjg10
await leapwork.step(`Fill the Description field under Tags with "${lw__tagDescription}"`, async () => {
    const description = page.getByPlaceholder('Description', { exact: true });
    await description.fill(lw__tagDescription);
});

// ai-studio-step-id: pwakdckm00
await leapwork.step("Press Enter", async () => {
    await page.keyboard.press('Enter');
});