import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_51");

// ai-studio-step-id: N1wV56Qk
await leapwork.step("Open https://staging.leapwork.ai/n", async () => {
    await page.goto("https://staging.leapwork.ai/", { waitUntil: 'load' });
}, { action: "navigate" });

// ai-studio-step-id: SpNSpYNz
await leapwork.step("Validate the Leapwork Play homepage heading shows 'Turn your code, requirements and knowledge...'", async () => {
    // Assert heading "Turn your code, requirements and knowledge into tests you can trust" contains "Turn your code, requirements and knowledge into tests you can trust"
    await expect(page.getByRole('heading', { name: 'Turn your code, requirements' })).toContainText("Turn your code, requirements and knowledge into tests you can trust");
}, { action: "validate" });

// ai-studio-step-id: zjfRAsjN
await leapwork.step("Validate the Get Started button shows 'Get Started' on the Leapwork Play page", async () => {
    // Assert button "Get Started" contains "Get Started"
    await expect(page.getByRole('banner').getByRole('button', { name: 'Get Started' })).toContainText("Get Started");
}, { action: "validate" });

// ai-studio-step-id: 53y7ttXk
await leapwork.step("Validate the Login button shows 'Login' on Leapwork Play", async () => {
    // Assert button "Login" contains "Login"
    await expect(page.getByRole('button', { name: 'Login' })).toContainText("Login");
}, { action: "validate" });

// ai-studio-step-id: 37roO7SR
await leapwork.step("Click the Login button", async () => {
    // Click button "Login"
    await page.getByRole('button', { name: 'Login' }).click();
}, { action: "click" });

// ai-studio-step-id: cxaMVM6n
await leapwork.step("Validate the Login to continue heading on the Leapwork Play login page shows 'Login to continue'", async () => {
    // Assert heading "Login to continue" contains "Login to continue"
    await expect(page.getByRole('heading', { name: 'Login to continue' })).toContainText("Login to continue");
}, { action: "validate" });

// ai-studio-step-id: bN2jSi4X
await leapwork.step("Validate the Email* field on the Leapwork Play login page", async () => {
    // Assert textbox "Email*" is visible
    await expect(page.getByRole('textbox', { name: 'Email*' })).toBeVisible();
}, { action: "validate" });

// ai-studio-step-id: tEs0rvTe
await leapwork.step("Validate the Remember me checkbox is unchecked on the Leapwork Play login page", async () => {
    // Assert checkbox "Remember me" is unchecked
    await expect(page.getByRole('checkbox', { name: 'Remember me' })).not.toBeChecked();
}, { action: "validate" });

// ai-studio-step-id: ON7440Tv
await leapwork.step("Validate the Continue button shows 'Continue' on the Leapwork Play login page", async () => {
    // Assert button "Continue" contains "Continue"
    await expect(page.getByRole('button', { name: 'Continue' })).toContainText("Continue");
}, { action: "validate" });

// ai-studio-step-id: vAX7nrrX
await leapwork.step("Validate the Google sign-in button shows 'Google' on the Leapwork Play login page", async () => {
    // Assert span contains "Google"
    await expect(page.getByRole('button', { name: 'Sign in with Google' })).toContainText("Google");
}, { action: "validate" });

// ai-studio-step-id: ZWk2mPcV
await leapwork.step("Validate the Microsoft sign-in button shows 'Microsoft' on the Leapwork Play login page", async () => {
    // Assert span contains "Microsoft"
    await expect(page.getByRole('button', { name: 'Sign in with Microsoft' })).toContainText("Microsoft");
}, { action: "validate" });

// ai-studio-step-id: MnLIJggX
await leapwork.step("Validate the Sign in with Apple button shows 'Apple' on the Leapwork Play login page", async () => {
    // Assert button "Sign in with Apple" contains "Apple"
    await expect(page.getByRole('button', { name: 'Sign in with Apple' })).toContainText("Apple");
}, { action: "validate" });

// ai-studio-step-id: GpGPB3vt
await leapwork.step("Validate the GitHub button shows 'GitHub' on the Leapwork Play login page", async () => {
    // Assert span contains "GitHub"
    await expect(page.getByRole('button', { name: 'Sign in with GitHub' })).toContainText("GitHub");
}, { action: "validate" });

// ai-studio-step-id: hwAvH2wU
await leapwork.step("Validate the footer logo image on the Leapwork Play login page", async () => {
    // Assert presentation is visible
    await expect(page.locator('img').nth(5)).toBeVisible();
}, { action: "validate" });

// ai-studio-step-id: 0024f8a1
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });
