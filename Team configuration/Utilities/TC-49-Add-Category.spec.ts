import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName") as string;
const lw__categoryName = leapwork.variables.get("categoryName") as string;
const lw__categoryDescription = leapwork.variables.get("categoryDescription") as string;

// await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
//     await page.getByText(teamName, { exact: true }).dblclick();
// });

// ai-studio-step-id: pw8350d600
await leapwork.step("Double-click \"${teamName}\" in the Leapwork Play explorer", async () => {
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pwy4gi4700
await leapwork.step("Click the Test case organization button in Team settings navigation", async () => {
    // Click button "Test case organization"
    await page.getByRole('tab', { name: 'Test case organization' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1r7b1kc0
await leapwork.step("Click the Test Case Statuses heading in the team settings page", async () => {
    // Click heading "Test Case Statuses"
    await page.getByRole('heading', { name: 'Test Case Statuses' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[1]/div[7]/div[5]/h2" });

// ai-studio-step-id: pw1ap657l0
await leapwork.step("Click the Add Category button in the Categories section", async () => {
    // Click button "Add Category"
    await page.getByRole('button', { name: 'Add Category' }).click();
}, { action: "click", relativeXpath: ".//div/div[1]/div[7]/div[7]/div[2]/button" });

// ai-studio-step-id: pw1nol4a40
await leapwork.step(`Fill the Category name field with "${lw__categoryName}"`, async () => {
    // Fill textbox "Category name"
    await page.getByRole('textbox', { name: 'Category name' }).fill(String(lw__categoryName));
}, { action: "input", relativeXpath: ".//div[7]/div[1]/div[2]/span[1]/span/input" });

// ai-studio-step-id: pw16jd1ar0
await leapwork.step("Click the Description text field", async () => {
    // Click textbox "Description"
    await page.getByRole('textbox', { name: 'Description' }).click();
}, { action: "click", relativeXpath: ".//div[7]/div[1]/div[2]/span[2]/span/input" });

// ai-studio-step-id: pw174d9xw0
await leapwork.step(`Fill the Description field with "${lw__categoryDescription}" under Categories`, async () => {
    // Fill textbox "Description"
    await page.getByRole('textbox', { name: 'Description' }).fill(String(lw__categoryDescription));
}, { action: "input", relativeXpath: ".//div[7]/div[1]/div[2]/span[2]/span/input" });

// ai-studio-step-id: pw162bnm50
await leapwork.step("Click Save for the Category 1 description 񟿿", async () => {
    // Click button "Save"
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click", relativeXpath: ".//div[7]/div[7]/div[1]/div[2]/span[3]/button" });

// ai-studio-step-id: pw1eicagw0
await leapwork.step("Press Enter on the Leapwork AI Studio asset page", async () => {
    await page.keyboard.press('Enter');
});