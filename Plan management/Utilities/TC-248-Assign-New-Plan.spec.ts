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

// ai-studio-step-id: pwj98qy400
await leapwork.step("Open the Assign a plan accordion", async () => { 
    // Click text "Assign a plan" 
    await page.getByText('Assign a plan').click(); 
}, { action: "click" }); 
 
// ai-studio-step-id: pwa8sde900
await leapwork.step("Select \"Enterprise Hybrid (Scale Out) · v1\" from the plan dropdown", async () => { 
    // Select option from combobox "Published plan version" 
    await page.getByLabel('Published plan versionAI').selectOption({ label: "Enterprise Hybrid (Scale Out) · v1" }); 
}, { action: "click" }); 
 
// ai-studio-step-id: pwbzg5bs00
await leapwork.step("Click the Assign plan button", async () => { 
    // Click button "Assign plan" 
    await page.getByRole('button', { name: 'Assign plan' }).click(); 
}, { action: "click" }); 
 
// ai-studio-step-id: pw19m40dz0
await leapwork.step("Confirm the plan assignment", async () => { 
    // Click button "Confirm assignment" 
    await page.getByRole('button', { name: 'Confirm assignment' }).click(); 
}, { action: "click" }); 

// ai-studio-step-id: pw1kjjoc40
await leapwork.step("Close the Assign a plan accordion", async () => { 
    // Click text "Assign a plan" 
    await page.getByText('Assign a plan').click(); 
}, { action: "click" });