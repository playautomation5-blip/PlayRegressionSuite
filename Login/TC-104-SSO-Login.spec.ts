import { leapwork } from "./leapwork";

leapwork.variables.set("email", "svc.playautomation@leapwork.com", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});




// ai-studio-step-id: pwyruerb00
await leapwork.step("Fill the email field on the Leapwork Play login page", async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input" });

// ai-studio-step-id: pw1rx243v0
await leapwork.step("Click the “Log in with email” button on the Leapwork Play login form", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click"  });

// ai-studio-step-id: pw29l1ry00
await leapwork.step("Fill the password field for svc.playautomation@leapwork.com", async () => {
    // Change textbox "Enter the password for svc.playautomation@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for svc.' }).fill(leapwork.variables.getSecret("pwd_HXU5faBl"));
}, { action: "input" });

// ai-studio-step-id: pw198ed0b0
await leapwork.step("Click the Sign in button for the svc.playautomation@leapwork.com account", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click" });

// ai-studio-step-id: pwlyulgw00
await leapwork.step("Click the Next button on the Microsoft sign-in page", async () => {
    // Click button "Next"
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSubmit_ProofUp_Redirect\"]" });

// ai-studio-step-id: pw1tfwyj30
await leapwork.step("Click Next to continue setting up the Authenticator app.", async () => {
    // Click span
    await page.getByTestId('reskin-step-next-button').click();
}, { action: "click", relativeXpath: "//*[@id=\"id__4\"]" });

// ai-studio-step-id: pwzajsym00
await leapwork.step("Click the Next button to continue setting up the Authenticator app.", async () => {
    // Click span
    await page.getByTestId('reskin-step-next-button').click();
}, { action: "click", relativeXpath: "//*[@id=\"id__10\"]" });

// ai-studio-step-id: pw1fyz46k0
await leapwork.step("Fill the password field for svc.playautomation@leapwork.com", async () => {
    // Change textbox "Enter the password for svc.playautomation@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for svc.' }).fill(leapwork.variables.getSecret("pwd_bbkAhKee"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });
