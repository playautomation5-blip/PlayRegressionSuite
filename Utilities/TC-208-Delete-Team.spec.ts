import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName") as string;

//Deletes a team where team name comes from variable called "teamName" that comes from parent test case

// ai-studio-step-id: pwzl685200
await leapwork.step("Right-click the \"${teamName}\"", async () => {
    const target = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await target.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw1n51m1d0
await leapwork.step("Click the Delete button in the menu item", async () => {
    const loc = page.getByText('Delete', { exact: true });
    await loc.waitFor({ state: 'visible' });
    await page.getByText('Delete', { exact: true }).click();
});

// ai-studio-step-id: pwmiw4cy00
await leapwork.step("Click the Delete button", async () => {
    const deleteButton = page.getByRole('button', { name: 'Delete', exact: true });
    await deleteButton.click({ force: true });
});