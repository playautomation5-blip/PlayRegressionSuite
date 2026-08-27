import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName");

// ai-studio-step-id: pwk8r2ka00
await leapwork.step("Right-click the New team option", async () => {
    // [Leapwork Play self-heal preserved previous code]
    // const target = page.locator('.explorer-list').getByText('New team', { exact: true });
    // await target.click({ button: 'right', force: true });
    // [/Leapwork Play self-heal preserved previous code]
    
    const newTeamOption = page.getByRole('generic', { name: 'New team', exact: true });
    await expect(newTeamOption).toHaveCount(1);
    await newTeamOption.click({ button: 'right', force: true });
}, { relativeXpath: ".//div[2]/div[2]/div[2]/div[1]/div/span[1]" });

// ai-studio-step-id: pw1ugkr810
await leapwork.step("Click the Rename option in the item menu", async () => {
    await page.getByText('Rename', { exact: true }).click();
});

// ai-studio-step-id: pwqfuiua00
await leapwork.step("Click the New team text field", async () => {
    const newTeamField = page.getByRole('textbox', { name: '', exact: true });
    await newTeamField.click({ force: true });
});

// ai-studio-step-id: pwbsb1e500
await leapwork.step(`Fill the rename text field`, async () => {
    const renameField = page.getByRole('textbox', { name: '', exact: true });
    await renameField.fill(String(teamName));
}, { action: "input" });

// ai-studio-step-id: pw1gltt100
await leapwork.step("Press Enter", async () => {
    await page.keyboard.press('Enter');
});