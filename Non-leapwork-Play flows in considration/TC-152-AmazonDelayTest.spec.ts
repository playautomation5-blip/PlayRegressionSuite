import { leapwork } from "./leapwork";

leapwork.variables.set("textarea", "10", leapwork.storage.LOCAL);
const lw__textarea = leapwork.variables.get("textarea", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 10000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: jnb2F8aL
await leapwork.step("Open https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout", async () => {
    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout", { waitUntil: 'load' });
}, { action: "navigate" });

// ai-studio-step-id: CpaRPhbk
await leapwork.step("Click the Accept button in the cookie consent banner", async () => {
    // Click button "Accept"
    await page.getByRole('button', { name: 'Accept' }).click();
}, { action: "click", continueOnFailure: true });

// ai-studio-step-id: xL5Gmg8d
await leapwork.step(`Fill textarea field with "${lw__textarea}"`, async () => {
    const locator = page.locator("internal:role=textbox");
    await locator.click({ force: true });
    await locator.fill(String(lw__textarea));
}, { action: "input" });

// ai-studio-step-id: jvG1ryqg
await leapwork.step("Click the Run button in the W3Schools Tryit Editor", async () => {
    // Click button "Run ❯"
    await page.getByRole('button', { name: 'Run ❯' }).click();
}, { action: "click" });
