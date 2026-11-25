import { leapwork } from "./leapwork";

leapwork.variables.set("emailPhoneOrSkype", "svc.dyn365fno.leap-test@leapwork.com", leapwork.storage.LOCAL);
const lw__emailPhoneOrSkype = leapwork.variables.get("emailPhoneOrSkype", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: m4nJrSpf
await leapwork.step("Click the email, phone, or Skype field on the Microsoft sign-in page", async () => {
    // Click textbox "Enter your email, phone, or Skype."
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"i0116\"]" });

// ai-studio-step-id: 7PoW3Cp4
await leapwork.step(`Fill the email field with ${lw__emailPhoneOrSkype}`, async () => {
    // Change textbox "Enter your email, phone, or Skype."
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(String(lw__emailPhoneOrSkype));
}, { action: "input", relativeXpath: "//*[@id=\"i0116\"]" });

// ai-studio-step-id: eqAYNHTy
await leapwork.step("Click the Next button on the Microsoft sign-in form after entering the email address", async () => {
    // Click button "Next"
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: 9xwBuEbR
await leapwork.step("Click the password field for svc.dyn365fno.leap-test@leapwork.com", async () => {
    // Click textbox "Enter the password for svc.dyn365fno.leap-test@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for svc.' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: jfmYCY1i
await leapwork.step("Fill the password field for svc.dyn365fno.leap-test@leapwork.com", async () => {
    // Change textbox "Enter the password for svc.dyn365fno.leap-test@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for svc.' }).fill(leapwork.variables.getSecret("pwd_jfmYCY1i"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: WGxCaNYi
await leapwork.step("Click the Sign in button for the Leapwork account.", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: wTRl0Til
await leapwork.step("Click \"I can't use my Microsoft Authenticator app right now\" on the identity verification page", async () => {
    // Click link "I can't use my Microsoft Authenticator app right now"
    await page.getByRole('link', { name: 'I can\'t use my Microsoft' }).click();
}, { action: "click", relativeXpath: "", continueOnFailure: true });

// ai-studio-step-id: DNQHArol
await leapwork.step("Click Use a verification code on the Verify your identity screen", async () => {
    // Click div
    await page.getByRole('button', { name: 'Use a verification code' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idDiv_SAOTCS_Proofs\"]/div[2]/div/div/div[2]/div" });

// ai-studio-step-id: wsFu0nAi
await leapwork.step("Set \"Don't ask again for 14 days\" checkbox", async () => {
    const donTAskAgainFor14DaysCheckbox = page.getByRole('checkbox', { name: "Don't ask again for 14 days", exact: true });
    await expect(donTAskAgainFor14DaysCheckbox).toHaveCount(1);
    await donTAskAgainFor14DaysCheckbox.setChecked(true, { force: true });
}, { action: "click", relativeXpath: "//*[@id=\"idChkBx_SAOTCC_TD\"]" });

// ai-studio-step-id: pwnz5bsn00
await leapwork.step(`Fill the Enter code field with otp on the Microsoft sign-in page`, async () => {
    // Fill textbox "Enter code"
    const otp = leapwork.generateTOTP(
    leapwork.variables.getSecret("mfa-secret")
);
await page.getByRole('textbox', { name: 'Enter code' }).fill(String(otp));
await page.getByRole("button", { name: "Verify", exact: true }).click();
}, { action: "input", relativeXpath: "//*[@id=\"idTxtBx_SAOTCC_OTC\"]" });


// ai-studio-step-id: pwuuib3n00
await leapwork.step("Click the “Not now” link to skip setting up another verification method", async () => {
    // Click link "Not now"
    await page.getByRole('link', { name: 'Not now' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"skipMfaRegistrationLink\"]", continueOnFailure: true });



// ai-studio-step-id: pw1npb7sg0
await leapwork.step("Click the Yes button to continue signing in to Finance and Operations Dynamics 365", async () => {
    // Click button "Yes"
    await page.getByRole('button', { name: 'Yes' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });