import { leapwork } from "./leapwork";

const lw__categoryName = leapwork.variables.get("categoryName") as string;

// ai-studio-step-id: pwowc0tm00
await leapwork.step("Click the Category dropdown", async () => {
    await page.getByRole('combobox', { name: 'Category' }).click();
}, { action: "click" });

// ai-studio-step-id: pw53ip8d00
await leapwork.step("Click the Category dropdown option \"Category 1\"", async () => {
    await page.getByText(lw__categoryName).click();
}, { action: "click" });

// ai-studio-step-id: pw1qwbf5m0
await leapwork.step("Validate the Category combobox shows 'Category 1' on the Leapwork Play page", async () => {
    await expect(page.getByRole('combobox', { name: 'Category' })).toContainText(lw__categoryName);
}, { action: "validate" });