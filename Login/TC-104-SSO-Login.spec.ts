import { leapwork } from "./leapwork";

leapwork.variables.set("enterYourEmail", "svc.playautomation@leapwork.com", leapwork.storage.LOCAL);
const lw__enterYourEmail = leapwork.variables.get("enterYourEmail", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});


// ai-studio-step-id: bRYPmGBl
await leapwork.step("Click the Email field on the Leapwork Play login page", async () => {
    // Click textbox "Email*"
    await page.getByRole('textbox', { name: 'Email*' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: 4g6qsGAK
await leapwork.step(`Fill the Email field with ${lw__enterYourEmail}`, async () => {
    // Fill textbox "Email*"
    await page.getByRole('textbox', { name: 'Email*' }).fill(String(lw__enterYourEmail));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: Mvm8m5U2
await leapwork.step("Click the Continue button on the Leapwork Play login form", async () => {
    // Click button "Continue"
    await page.getByRole('button', { name: 'Continue' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: RVwZShZo
await leapwork.step("Click the password field for svc.playautomation@leapwork.com", async () => {
    // Click textbox "Enter the password for svc.playautomation@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for svc.' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: bbkAhKee
await leapwork.step("Fill the password field for svc.playautomation@leapwork.com", async () => {
    // Change textbox "Enter the password for svc.playautomation@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for svc.' }).fill(leapwork.variables.getSecret("pwd_bbkAhKee"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: CbAIdJcl
await leapwork.step("Click the Sign in button for the svc.playautomation@leapwork.com account", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: 0dCkQ0Ag
await leapwork.step("Fill the code field with 1234 on the two-step verification page", async () => {
    // Change textbox "Enter code"
    const otp =  leapwork.generateTOTP("wcmdl7bkddwddktm")
    await page.getByRole('textbox', { name: 'Enter code' }).fill(String(otp));
}, { action: "input", relativeXpath: "//*[@id=\"idTxtBx_SAOTCC_OTC\"]" });

// ai-studio-step-id: 7JDbE4g6
await leapwork.step("Click Verify to submit the authenticator code on the Microsoft sign-in page", async () => {
    // Click button "Verify"
    await page.getByRole('button', { name: 'Verify' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSubmit_SAOTCC_Continue\"]" });

// ai-studio-step-id: F7VjlCKn
await leapwork.step("Click the Yes button to approve the Microsoft sign-in request", async () => {
    // Click button "Yes"
    await page.getByRole('button', { name: 'Yes' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });



// ai-studio-step-id: IOmTZWvT
await leapwork.step("Validate the Leapwork Play page shows the “Play Automation (Personal)” account button", async () => {
    // Assert span contains "Play Automation (Personal)"
    await expect(page.getByRole('button', { name: 'Play Automation (Personal)' })).toContainText("Play Automation (Personal)");
}, { action: "validate", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]" });
