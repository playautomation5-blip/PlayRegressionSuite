import { leapwork } from "./leapwork";

const lw__emailOrPhoneNumber = leapwork.variables.get("emailOrPhoneNumber", leapwork.storage.LOCAL) as string;
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

// ai-studio-step-id: pwa1hmle00
await leapwork.step("Click Sign in with Apple on the login page", async () => {
    // Click button "Sign in with Apple"
    await page.getByRole('button', { name: 'Sign in with Apple' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/ul/li[4]/button[@aria-label=\"Sign in with Apple\"]" });

// ai-studio-step-id: pwsur33t00
await leapwork.step("Click the “See how your data is managed...” link on the Apple sign-in page", async () => {
    // Click div
    await page.locator('.label-small').click();
}, { action: "click", relativeXpath: "//*[@id=\"sign_in_form\"]/div/div[1]/div[4]/div" });

// ai-studio-step-id: pw162xnky0
await leapwork.step("Click the Email or Phone Number field on the Apple Account sign-in page", async () => {
    // Click textbox "Email or Phone Number"
    await page.getByRole('textbox', { name: 'Email or Phone Number' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"account_name_text_field\"]" });

// ai-studio-step-id: pw11p37hb0
await leapwork.step(`Fill the Email or Phone Number field with "${lw__emailOrPhoneNumber}"`, async () => {
    // Fill textbox "Email or Phone Number"
    await page.getByRole('textbox', { name: 'Email or Phone Number' }).fill(String(lw__emailOrPhoneNumber));
}, { action: "input", relativeXpath: "//*[@id=\"account_name_text_field\"]" });

// ai-studio-step-id: pw1mkr1ri0
await leapwork.step("Click the Continue button to sign in to WorkOS Demo Credentials", async () => {
    // Click span
    await page.getByRole('button', { name: 'Continue' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"sign-in\"]/span" });

// ai-studio-step-id: pwpdc2zr00
await leapwork.step("Fill the Password field on the Apple Account sign-in page", async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).fill(String(lw__password));
}, { action: "input", relativeXpath: "//*[@id=\"password_text_field\"]" });

// ai-studio-step-id: pw1jhtcli0
await leapwork.step("Click the Sign In button on the Apple Account sign-in page", async () => {
    // Click span
    await page.getByRole('button', { name: 'Sign In' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"sign-in\"]/span" });
