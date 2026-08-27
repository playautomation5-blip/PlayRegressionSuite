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

// ai-studio-step-id: pw17c5z190
await leapwork.step("Click the + Add Category button", async () => {
    const addCategoryButton = page.getByRole('button', { name: '+ Add Category', exact: true });
    await addCategoryButton.click({ force: true });
});

// ai-studio-step-id: pwcsxnby00
await leapwork.step("Click the Category name field", async () => {
    const categoryName = page.getByPlaceholder('Category name', { exact: true });
    await categoryName.click({ force: true });
});

// ai-studio-step-id: pwa8968b00
await leapwork.step("Fill the Category name field with \"Category 1\"", async () => {
    const categoryName = page.getByPlaceholder('Category name', { exact: true });
    await categoryName.fill(lw__categoryName);
});

// ai-studio-step-id: pw1pk9re60
await leapwork.step("Click the Description field", async () => {
    const description = page.getByPlaceholder('Description', { exact: true });
    await description.click({ force: true });
});

// ai-studio-step-id: pw12okywv0
await leapwork.step("Fill the Description field with \"This is the first category\"", async () => {
    const descriptionInput = page.getByPlaceholder('Description', { exact: true });
    await descriptionInput.fill(lw__categoryDescription);
});

// ai-studio-step-id: pw1eicagw0
await leapwork.step("Press Enter on the Leapwork AI Studio asset page", async () => {
    await page.keyboard.press('Enter');
});