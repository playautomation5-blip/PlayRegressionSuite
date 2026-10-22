import { leapwork } from "./leapwork";

const lw__emailOrPhone = leapwork.variables.get("emailOrPhone", leapwork.storage.LOCAL) as string;
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

// ai-studio-step-id: pwqr6rs800
await leapwork.step("Click Sign in with Google to continue to Leapwork Play", async () => {
    // Click button "Sign in with Google"
    await page.getByRole('button', { name: 'Sign in with Google' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/ul/li[2]/button[@aria-label=\"Sign in with Google\"]" });

// ai-studio-step-id: pw1h1xw0p0
await leapwork.step("Click the Email or phone field on the Google sign-in page", async () => {
    // Click textbox "Email or phone"
    await page.getByRole('textbox', { name: 'Email or phone' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"identifierId\"]" });

// ai-studio-step-id: pw199bopu0
await leapwork.step(`Fill the Google Email or phone field with "${lw__emailOrPhone}"`, async () => {
    // Fill textbox "Email or phone"
    await page.getByRole('textbox', { name: 'Email or phone' }).fill(String(lw__emailOrPhone));
}, { action: "input", relativeXpath: "//*[@id=\"identifierId\"]" });

// ai-studio-step-id: pw95y1kr00
await leapwork.step("Click the Next button to continue signing in with Google.", async () => {
    // Click span
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"identifierNext\"]/div/button/span" });

// ai-studio-step-id: pws5hvz600
await leapwork.step("Click the Enter your password field on the Google sign-in page", async () => {
    // Click textbox "Enter your password"
    await page.getByRole('textbox', { name: 'Enter your password' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"password\"]/div[1]/div/div[1]/input[@aria-label=\"Enter your password\"]" });

// ai-studio-step-id: pwo8ut0100
await leapwork.step("Fill the Enter your password field with the provided password", async () => {
    // Fill textbox "Enter your password"
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(String(lw__password));
}, { action: "input", relativeXpath: "//*[@id=\"password\"]/div[1]/div/div[1]/input[@aria-label=\"Enter your password\"]" });

// ai-studio-step-id: pw1tb1k000
await leapwork.step("Click Next to submit the Google password form", async () => {
    // Click div
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"passwordNext\"]/div/button/div[3]" });