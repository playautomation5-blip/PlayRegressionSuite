import { leapwork } from "./leapwork";

import { RandomTeam as password, passwords, microsoftUsers } from "@assets/Utilities/random-team";
import { AddCompany } from "@assets/Utilities/Add company";

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

// ai-studio-step-id: pw1jrlkka0
await leapwork.step("Fill the Email with ${lw__password}", async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password*' }).fill(String(effectivePassword));
}, { action: "input" });

// ai-studio-step-id: pwldljah00
await leapwork.step("Click the Sign in with password button", async () => {
    // Click button "Sign in"
    await page.getByRole('button', {name: 'Sign in with password'}).click();
}, { action: "click" });

//conditional step for new user
// ai-studio-step-id: pw1i7qcya0
await leapwork.step("Use test case: Add company", async () => {
    return await AddCompany();
}, { action: "asset_reference", linkedAssetType: "test-case" , continueOnFailure:true});
