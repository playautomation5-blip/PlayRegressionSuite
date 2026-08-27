import { leapwork } from "./leapwork";

//Deletes an asset

const renamedAssetName = leapwork.variables.get("renamedAssetName") as string;

// ai-studio-step-id: pwuhpqi400
await leapwork.step("Right-click the renamed asset label", async () => {
    const renamed = page.locator('.explorer-list').getByText(renamedAssetName, { exact: true });
    await renamed.click({ button: 'right', force: true });
});

// ai-studio-step-id: pw1oiee4h0
await leapwork.step("Click the Delete button in the menu item", async () => {
    await page.getByText('Delete', { exact: true }).click();
});

// ai-studio-step-id: pwmiw4cy00
await leapwork.step("Click the Delete button", async () => {
    const deleteButton = page.getByRole('button', { name: 'Delete', exact: true });
    await deleteButton.click({ force: true });
});