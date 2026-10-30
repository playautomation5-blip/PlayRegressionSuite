import { leapwork } from "./leapwork";

import { RandomTeam as password, passwords, microsoftUsers } from "@assets/Utilities/random-team";

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

const effectivePassword = passwords[leapwork.variables.get("passwordId") as string] || password;

// ai-studio-step-id: pwqk8bh200
await leapwork.step("Click the Create account button on the Leapwork Play signup page", async () => {
    // Click button "Create account"
    await page.getByRole('button', { name: 'Create account' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/div[2]/button" });

// ai-studio-step-id: pw605lch00
await leapwork.step("Click the “Sign up with email” button on the Leapwork Play signup form", async () => {
    // Click button "Sign up with email"
    await page.getByRole('button', { name: 'Sign up with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1gjeenb0
await leapwork.step("Fill the Password field with a password of at least 8 characters", async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill(String(effectivePassword));
}, { action: "input", relativeXpath: "//*[@id=\"field-_r_g___control\"]" });

// ai-studio-step-id: pw14z85ru0
await leapwork.step("Fill the Confirm password field with \"3\"", async () => {
    // Fill textbox "Confirm password"
    await page.getByRole('textbox', { name: 'Confirm password' }).fill(String(effectivePassword));
}, { action: "input", relativeXpath: "//*[@id=\"field-_r_6___control\"]" });

// ai-studio-step-id: pw1yosq600
await leapwork.step("Click the Create account button on the Leapwork Play signup form", async () => {
    // Click button "Create account"
    await page.getByRole('button', { name: 'Create account' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw13zjkbn0
await leapwork.step("Click “Skip for now” on the Leapwork Play onboarding screen", async () => {
    // Click button "Skip for now"
    await page.getByRole('button', { name: 'Skip for now' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[3]/div[2]/div/button[2]" });
