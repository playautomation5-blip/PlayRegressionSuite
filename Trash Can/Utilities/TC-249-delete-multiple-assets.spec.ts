import { leapwork } from "./leapwork";


 const assetName = leapwork.variables.get("assetName") as string;

// ai-studio-step-id: pw6kduio00
await leapwork.step(`Right-click the "${assetName}" asset label`, async () => {
      const asset = page.locator('.explorer-list').getByText(assetName, { exact: true });
      await asset.click({ button: 'right', force: true });
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