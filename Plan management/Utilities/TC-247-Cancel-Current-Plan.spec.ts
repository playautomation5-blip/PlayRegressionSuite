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

// ai-studio-step-id: pwkkk32000
await leapwork.step("Open the Current plan accordion", async () => { 
    const currentPlanButton = await page.getByRole('button', { name: 'Plan management Current plan' }); 
    await expect(currentPlanButton).toHaveCount(1); 
    await currentPlanButton.click({ force: true }); 
}, { action: "click"}); 
 
// ai-studio-step-id: pw1oopfjj0
await leapwork.step("Cancel the current plan", async () => { 
    // Click button "Cancel current plan" 
    await page.getByRole('button', { name: 'Cancel current plan' }).click(); 
}, { action: "click", continueOnFailure: true }); 
 
// ai-studio-step-id: pwbdgpl200
await leapwork.step("Confirm cancellation of the current plan", async () => { 
    // Click button "Confirm cancellation" 
    await page.getByRole('button', { name: 'Confirm cancellation' }).click(); 
}, { action: "click", continueOnFailure: true }); 
 
// ai-studio-step-id: pwssm0zl00
await leapwork.step("Close the Current plan accordion", async () => { 
    const currentPlanButton = await page.getByRole('button', { name: 'Plan management Current plan' }); 
    await expect(currentPlanButton).toHaveCount(1); 
    await currentPlanButton.click({ force: true }); 
}, { action: "click" });