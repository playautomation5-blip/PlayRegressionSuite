import { leapwork } from "./leapwork";

// ai-studio-step-id: pwy04ha000
await leapwork.step("Delete exisitng models created by user", async () => {
    await page.waitForTimeout(3000);
    await page.locator('button.brandbar-model-button').click();
    const savedModels = page.locator('.line.own-model-saved-line');

    while (await savedModels.count()) {
        await savedModels.first().getByRole('button', { name: /^Open actions for/ }).click();
        await page.getByText('Delete Key').click();
        await page.getByRole('button', { name: 'Delete' }).click();
    }
});