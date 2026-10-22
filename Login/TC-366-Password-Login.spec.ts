import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
  enableXpath:
    (leapwork.team.settings.get("enableXpath")
      ?? leapwork.workspace.settings.get("enableXpath")) !== "false",
  chromiumArgs:
    leapwork.team.settings.get("chromiumArgs")
      ?? leapwork.workspace.settings.get("chromiumArgs")
      ?? ["--deny-permission-prompts",
          "--disable-notifications"
        ],
  chromiumPrefs: leapwork.team.settings.get("chromiumPrefs")
      ?? leapwork.workspace.settings.get("chromiumPrefs")
      ?? { "credentials_enable_service": false,
          "profile":
          {
            "password_manager_enabled": false,
            "password_manager_leak_detection": false
          }
        },
});

const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;
const lw__password = leapwork.variables.get("password", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw46dk8s00
await leapwork.step("Click the email field on the Leapwork Play login page", async () => {
    // Click textbox "email"
    await page.getByRole('textbox', { name: 'email' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pw1p0nxrx0
await leapwork.step(`Fill the email field with "${lw__email}"`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pwvsyx3q00
await leapwork.step("Click the “Log in with email” button on the Leapwork Play login form", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1k18k7p0
await leapwork.step("Click the Password field on the Leapwork Play login page", async () => {
    // Click textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pwo0qomy00
await leapwork.step("Fill the Password field with the provided password", async () => {
    // Fill textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).fill(String(lw__password));
}, { action: "input", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pwmcg59700
await leapwork.step("Click the “Sign in with password” button on the Leapwork Play login form", async () => {
    // Click button "Sign in with password"
    await page.getByRole('button', { name: 'Sign in with password' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });
