import { leapwork } from "./leapwork";

// ai-studio-step-id: pw1sfescu0
await leapwork.step("Delete the teams", async () => {
    await page.waitForSelector('.explorer-item-name', { state: 'visible' });
    while (await page.locator('.explorer-item[data-explorer-item-id]').count()) {
        const team = page.locator('.explorer-item[data-explorer-item-id]').first();

        await team.click({ button: 'right', force: true });
        await page.getByText('Delete', { exact: true }).click();
        const deleteButton = page.getByRole('button', { name: 'Delete', exact: true });
        await deleteButton.click({ force: true });
    }
}, {timeoutMs: 10000});