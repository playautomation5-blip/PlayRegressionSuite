import { leapwork } from "./leapwork";

leapwork.variables.set("email2", "playautomation5@gmail.com", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email2", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1p0nxrx0
await leapwork.step(`Fill the email field with "${lw__email}"`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });


// ai-studio-step-id: pw13hayd40
await leapwork.step("Click the “Log in with email” button on the Leapwork Play login form", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pwrqobj100
await leapwork.step("Fill the Password field with the user's password", async () => {
    // Fill textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).fill(leapwork.variables.getSecret("pwd_4TXeRWMO"));
}, { action: "input", relativeXpath: "//*[@id=\"workos-password\"]" });


// ai-studio-step-id: pwd9hde000
await leapwork.step("Click “Sign in with password” on the Leapwork Play login form", async () => {
    // Click button "Sign in with password"
    await page.getByRole('button', { name: 'Sign in with password' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1ynb7of0
await leapwork.step("Validate the Leapwork Play page shows “Regression User (Personal)”", async () => {
    // Assert span contains "Regression User (Personal)"
    await expect(page.getByRole('button', { name: 'Regression User (Personal) AI' })).toContainText("Regression User (Personal)");
}, { action: "validate", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]" });

// ai-studio-step-id: pwpsxbq900
await leapwork.step("Click the Regression User (Personal) account menu", async () => {
    // Click span
    await page.getByRole('button', { name: 'Regression User (Personal) AI' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]" });

// ai-studio-step-id: pwm4mvnw00
await leapwork.step("Click Log out", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[3]/div[2]/div[9]/span" });
