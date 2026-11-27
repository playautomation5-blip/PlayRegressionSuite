import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName") as string;
const lw__tagName = leapwork.variables.get("tagName") as string;
const lw__tagDescription = leapwork.variables.get("tagDescription") as string;

// ai-studio-step-id: pwcegcfi00
await leapwork.step("Double-click team twice", async () => {
    // Double-click textbox "Search"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pwx41pp700
await leapwork.step("Click the Test case organization tab in Team settings navigation", async () => {
    // Click button "Test case organization"
    await page.getByRole('tab', { name: 'Test case organization' }).click();
}, { action: "click"});

// ai-studio-step-id: pw18012db0
await leapwork.step("Click the Add Tag button in the Tags section", async () => {
    // Click button "Add Tag"
    await page.getByRole('button', { name: 'Add Tag' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div[7]/div[8]/div[2]/button" });


// ai-studio-step-id: pw14c1zv60
await leapwork.step("Click the Tag name field", async () => {
    const tagName = page.getByPlaceholder('Tag name', { exact: true });
    await tagName.click({ force: true });
});

// ai-studio-step-id: pw1gs2qn00
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