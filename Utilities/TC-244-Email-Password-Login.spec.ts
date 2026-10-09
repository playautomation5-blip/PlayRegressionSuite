import { leapwork } from "./leapwork";

import { SkipOnboardingTour } from "@assets/Utilities/SkipOnboardingTour";
import { RandomTeam as password, passwords, microsoftUsers } from "@assets/Utilities/random-team";
import { AddCompany } from "@assets/Utilities/Add company";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

//Email Password login sub flow
//Picks random users for login from utility called @assets/random-team

const userId = leapwork.variables.get("userId") as string;
const effectivePassword = passwords[leapwork.variables.get("passwordId") as string] || password;

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

// ai-studio-step-id: pw1ly13160
await leapwork.step("Fill the Email with ${lw__password}", async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password*' }).fill(String(effectivePassword));
}, { action: "input" });

// ai-studio-step-id: pwdadsxp00
await leapwork.step("Click the Sign in with password button", async () => {
    // Click button "Sign in"
    await page.getByRole('button', {name: 'Sign in with password'}).click();
}, { action: "click" });

//conditional step for new user
// ai-studio-step-id: pw4jzn7w00
await leapwork.step("Use test case: Add company", async () => {
    return await AddCompany();
}, { action: "asset_reference", linkedAssetType: "test-case" , continueOnFailure:true});

// ai-studio-step-id: pwn9yo8r00
await leapwork.step("Use test case: SkipOnboardingTour", async () => {
    return await SkipOnboardingTour();
}, { action: "asset_reference", linkedAssetType: "test-case" , continueOnFailure:true});