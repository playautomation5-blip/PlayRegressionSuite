import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 60000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: 8rA7QCCg
await leapwork.step("Open https://test-formz.vercel.app/", async () => {
    await page.goto("https://test-formz.vercel.app/", { waitUntil: 'load' });
});

// ai-studio-step-id: IoIHRMBZ
await leapwork.step("Click the Open Random Form button in the Random Form Opener section", async () => {
    const openRandomFormButton = page.getByRole('button', { name: 'Open Random Form', exact: true });
    await openRandomFormButton.click({ force: true });
}, { timeoutMs : 40000} );

// ai-studio-step-id: 6Xp0qAtz
await leapwork.step("Click the Full Name field on the User Profile form", async () => {
    const fullName = page.locator('#fullName');
    await fullName.click({ force: true });
});

// ai-studio-step-id: NVaxj1wr
await leapwork.step("Fill the Full Name field with test", async () => {
    const fullName = page.locator('#fullName');
    await fullName.fill('test');
});

// ai-studio-step-id: Y1pjaari
await leapwork.step("Click the Email field in the User Profile form", async () => {
    const email = page.getByLabel('Email', { exact: true });
    await email.click({ force: true });
});

// ai-studio-step-id: Z1I8nclT
await leapwork.step("Fill the Email Address field with test3234", async () => {
    const email = page.locator('#email');
    await email.fill('test3234');
});

// ai-studio-step-id: rSBVIrHX
await leapwork.step("Click the Details text area in the User Profile form", async () => {
    const details = page.locator('#details');
    await details.click({ force: true });
});

// ai-studio-step-id: KWrShGLZ
await leapwork.step("Fill the Details field with 21323", async () => {
    const details = page.locator('#details');
    await details.fill('21323');
});

// ai-studio-step-id: LbaniOpY
await leapwork.step("Click the Submit Form button on the User Profile page", async () => {
    const submitFormButton = page.getByRole('button', { name: 'Submit Form', exact: true });
    await submitFormButton.click({ force: true });
});

// ai-studio-step-id: 3J9t15Ot
await leapwork.step("Click the Back To Profile button on the User Profile page", async () => {
    const backToProfile = page.getByRole('button', { name: 'Back To Profile', exact: true });
    await backToProfile.click({ force: true });
});
















