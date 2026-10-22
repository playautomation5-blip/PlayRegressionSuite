import { leapwork } from "./leapwork";

leapwork.variables.set("emailOrPhone", "playautomation5@gmail.com");
leapwork.variables.set("password", "7iNToBzXWA3Q0MKg");
const lw__usernameOrEmailAddress = leapwork.variables.get("emailOrPhone", leapwork.storage.LOCAL) as string;
const lw__password = leapwork.variables.get("password", leapwork.storage.LOCAL) as string;

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

// ai-studio-step-id: pw1edr2v80
await leapwork.step("Click Sign in with GitHub on the WorkOS Demo login page", async () => {
    // Click button "Sign in with Github"
    await page.getByRole('button', { name: 'Sign in with Github' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/ul/li[1]/button[@aria-label=\"Sign in with Github\"]" });

// ai-studio-step-id: pw1i4w9500
await leapwork.step("Click the Username or email address field on the GitHub sign-in page", async () => {
    // Click textbox "Username or email address"
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"login_field\"]" });

// ai-studio-step-id: pw35ji5i00
await leapwork.step(`Fill the GitHub username or email address field with "${lw__usernameOrEmailAddress}"`, async () => {
    // Fill textbox "Username or email address"
    await page.getByRole('textbox', { name: 'Username or email address' }).fill(String(lw__usernameOrEmailAddress));
}, { action: "input", relativeXpath: "//*[@id=\"login_field\"]" });

// ai-studio-step-id: pwdi44un00
await leapwork.step("Click the Password field on the GitHub sign-in form", async () => {
    // Click textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"password\"]" });

// ai-studio-step-id: pw1804suw0
await leapwork.step("Fill the Password field on the GitHub sign-in page", async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).fill(String(lw__password));
}, { action: "input", relativeXpath: "//*[@id=\"password\"]" });

// ai-studio-step-id: pw10dc0p10
await leapwork.step("Click the Sign in button", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
}, { action: "click", relativeXpath: ".//main/div/div[2]/form/div[3]/input[@name=\"commit\"]" });
