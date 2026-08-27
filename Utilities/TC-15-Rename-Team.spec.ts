import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName");

// await leapwork.step("Right-click the New team option", async () => {
//     const target = page.locator('.explorer-list').getByText('New team', { exact: true });
//     await target.click({ button: 'right', force: true });
// });

// await leapwork.step("Click the Rename option in the item menu", async () => {
//     await page.getByText('Rename', { exact: true }).click();
// });

// await leapwork.step("Click the New team text field", async () => {
//     const newTeamField = page.getByRole('textbox', { name: '', exact: true });
//     await newTeamField.click({ force: true });
// });

// ai-studio-step-id: pw1h6ae4w0
await leapwork.step(`Fill the rename text field`, async () => {
    await page.waitForTimeout(1000);
    const renameField = page.getByRole('textbox', { name: '', exact: true });
    await renameField.fill(String(teamName));
}, { action: "input" });

// ai-studio-step-id: pw1jy1asz0
await leapwork.step("Press Enter", async () => {
    await page.keyboard.press('Enter');
});