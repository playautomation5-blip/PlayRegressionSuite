import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pwuv0yk000
await leapwork.step("Click the Sign in with Google button on the login page", async () => {
    // Click button "Sign in with Google"
    await page.getByRole('button', { name: 'Sign in with Google' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/ul/li[2]/button[@aria-label=\"Sign in with Google\"]" });
