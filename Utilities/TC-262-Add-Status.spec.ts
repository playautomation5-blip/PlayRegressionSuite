import { leapwork } from "./leapwork";
const teamName = leapwork.variables.get("teamName") as string;
const lw__statusName = leapwork.variables.get("statusName") as string;
const lw__description = leapwork.variables.get("description") as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// await leapwork.step("Double click the \"${teamName}\" folder in Leapwork AI Studio", async () => {
//     await page.getByText(teamName, { exact: true }).dblclick();
// });

// ai-studio-step-id: pwfij9qk00
await leapwork.step("Double-click  \"${teamName}\" ", async () => {
    // Double-click "team 35512"
    await page.getByText('team').first().dblclick();
}, { action: "dblclick" });

// ai-studio-step-id: pwcci5pf00
await leapwork.step("Click the + Add Status button on the Test Case Statuses page", async () => {
        const addStatusButton = page.getByRole('button', { name: '+ Add Status', exact: true });
        await addStatusButton.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw1adyu1e0
await leapwork.step(`Fill the Status name field with "Test Status"`, async () => {
        const statusName = page.getByPlaceholder('Status name', { exact: true });
        await statusName.fill(lw__statusName);
}, { action: "input" });

// ai-studio-step-id: pw1s34q6d0
await leapwork.step("Click the Description field for the status", async () => {
    const description = page.getByPlaceholder('Description', { exact: true });
    await description.click({ force: true });
}, { action: "click" });

// ai-studio-step-id: pw1h82hok0
await leapwork.step(`Fill the Description field with "Test Description" for the test-01 status`, async () => {
    const descriptionInput = page.getByPlaceholder('Description', { exact: true });
    await descriptionInput.fill(lw__description);
}, { action: "input"});

// ai-studio-step-id: pww321tv00
await leapwork.step("Click the Save button to save the test-01 status with value 'regression-test'", async () => {
    await page.getByRole('button', { name: 'Save' }).click();
}, { action: "click"});