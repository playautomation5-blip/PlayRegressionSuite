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

// ai-studio-step-id: zqkYqy0U
await leapwork.step("Click the Save Profile button on the User Profile page", async () => {
    const saveProfileButton = page.getByRole('button', { name: 'Save Profile', exact: true });
    await saveProfileButton.click({ force: true });
});

// ai-studio-step-id: EUOlfWDe
await leapwork.step("Click the Open Additional Details Form button", async () => {
    const openAdditionalDetailsForm = page.getByRole('button', { name: 'Open Additional Details Form', exact: true });
    await openAdditionalDetailsForm.click({ force: true });
});

// ai-studio-step-id: XWku3V12
await leapwork.step("Click the Save Profile button on the User Profile page", async () => {
    const saveProfileButton = page.getByRole('button', { name: 'Save Profile', exact: true });
    await saveProfileButton.click({ force: true });
});

// ai-studio-step-id: 63pf8uwm
await leapwork.step("Click the Bio field on the User Profile form", async () => {
    const bio = page.getByLabel('Bio', { exact: true });
    await bio.click({ force: true });
});

// ai-studio-step-id: ozmYB2uQ
await leapwork.step("Click the Bio field on the User Profile form", async () => {
    const bio = page.getByLabel('Bio', { exact: true });
    await bio.click({ force: true });
});

// ai-studio-step-id: pBUTBXXt
await leapwork.step("Click the Bio field on the User Profile page", async () => {
    const bio = page.getByLabel('Bio', { exact: true });
    await bio.click({ force: true });
});

// ai-studio-step-id: YAZBv4id
await leapwork.step("Click the Close Window button on the Additional Details form", async () => {
    const closeWindowButton = page.getByRole('button', { name: 'Close Window', exact: true });
    await closeWindowButton.click({ force: true });
});

// ai-studio-step-id: Kjijq3Df
await leapwork.step("Click the Email Address field in the Contact Information section", async () => {
    const email = page.locator('#email');
    await email.click({ force: true });
});

// ai-studio-step-id: 76Oyari3
await leapwork.step("Click the Email Address field on the User Profile form", async () => {
    const email = page.locator('#email');
    await email.click({ force: true });
});
