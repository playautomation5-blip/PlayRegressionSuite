import { leapwork } from "./leapwork";

const envName = leapwork.variables.get("envName") as string;
const envUrl = leapwork.variables.get("envUrl") as string;

// ai-studio-step-id: pwqf99w000
await leapwork.step("Click the Environment dropdown showing '(No environment)'", async () => {
    // Click combobox "Environment"
    await page.getByRole('combobox', { name: 'Environment' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1k7wd350
await leapwork.step("Click the + Add new environment option in the Environment dropdown", async () => {
    // Click span
    await page.getByText('+ Add new environment').click();
}, { action: "click" });

// ai-studio-step-id: pw1oqdc2k0
await leapwork.step("Fill the Environment name field with ${lw__environmentName2}", async () => {
    // Fill textbox "Environment name"
        await page.getByRole('textbox', { name: 'Environment name' }).fill(String(envName));
}, { action: "input" });

// ai-studio-step-id: pw1m2fru90
await leapwork.step("Click the URL field in the Add Environment form", async () => {
    // Click textbox "URL"
    await page.getByRole('textbox', { name: 'URL' }).click();
}, { action: "click" });

// ai-studio-step-id: pw426l5q00
await leapwork.step("Fill the URL field with ${lw__httpsExampleCom}", async () => {
    // Fill textbox "URL"
    await page.getByRole('textbox', { name: 'URL' }).fill(String(envUrl));
}, { action: "input" });

// ai-studio-step-id: pws86ryn00
await leapwork.step("Click the Save button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click" });