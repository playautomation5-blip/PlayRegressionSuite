import { leapwork } from "./leapwork";

import { RandomTeam as password, passwords, microsoftUsers } from "@assets/Utilities/random-team";
import { SetPasswordForLogin } from "@assets/Utilities/Set password for login";
import { CreateAccountWithEmail } from "@assets/Utilities/Create Account with Email";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

//Email Password login sub flow
//Picks random users for login from utility called @assets/random-team

const userId = leapwork.variables.get("userId") as string;

leapwork.variables.set("emailOrPhoneNumber", microsoftUsers[userId], leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("emailOrPhoneNumber", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pw1yf2pt30
await leapwork.step("Fill the Email with ${lw__email}", async () => {
    // Fill textbox "Email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input" });

// ai-studio-step-id: pw1asp4u40
await leapwork.step("Click the Log in with email button", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', {name: 'Log in with email'}).click();
}, { action: "click" });

// ai-studio-step-id: pw1gpa4xl0
await leapwork.step("Login or create new account", async () => {
    // Click button "Log in with email"
    const isNotRegistered = await page.getByText('No account was found for this email. Please create an account first.').isVisible();
    if(isNotRegistered){
        await CreateAccountWithEmail()
    }
    else{
        await SetPasswordForLogin();
    }
}, { action: "asset_reference", linkedAssetType: "test-case" });
