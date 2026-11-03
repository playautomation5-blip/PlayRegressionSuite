import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;
const userName = leapwork.variables.get("userName", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw1wuw2fq0
await leapwork.step(`Click the ${userName} button`, async () => { 
    // Click button 
    await page.getByRole('button', { name: userName }).click(); 
}, { action: "click" }); 
 
// ai-studio-step-id: pw1uank6v0
await leapwork.step("Click the Admin Section link", async () => { 
    // Click link 
    await page.getByText('Admin Section').click(); 
}, { action: "click" }); 
 
// ai-studio-step-id: pw1h35pms0
await leapwork.step("Click the Admin Settings section", async () => { 
    // Click section 
    await page.getByText('Admin Settings').click(); 
}, { action: "click" }); 
 
// ai-studio-step-id: pwq32rwb00
await leapwork.step("Click the Company plans section", async () => { 
    // Click section 
    await page.getByText('Company plans').click(); 
}, { action: "click" }); 
 
// ai-studio-step-id: pw1gcrq4y0
await leapwork.step("Search for the company by name, ID, or owner email", async () => { 
    // Fill textbox "Search by company name or company ID or owner email..." 
    await page.getByPlaceholder('Search by company name or company ID or owner email...').fill(String(lw__email)); 
}, { action: "input" }); 
 
// ai-studio-step-id: pw1jm4exf0
await leapwork.step("Click the Manage button", async () => { 
    // Click button "Manage" 
    await page.getByRole('button', { name: 'Manage' }).first().click() 
}, { action: "click" });