import { leapwork } from "./leapwork";

const assetName = leapwork.variables.get("assetName") as string;
const renamedAssetName = leapwork.variables.get("renamedAssetName") as string;

// ai-studio-step-id: pw1yeb95a0
await leapwork.step("Right-click the created label", async () => {
    const target = page.locator('.explorer-list').getByText(assetName, { exact: true });
    await target.click({ button: 'right', force: true });
});

// ai-studio-step-id: pwom2m2t00
await leapwork.step("Click the Rename option", async () => {
    const renameTarget = page.getByText('Rename', { exact: true });
    await renameTarget.click({ force: true });
});

// ai-studio-step-id: pw1vs6sle0
await leapwork.step("Fill the text field with \"renamed\"", async () => {
    const createdTextbox = page.getByRole('textbox', { name: '', exact: true });
    await createdTextbox.fill(renamedAssetName);
});

// ai-studio-step-id: pwwsm33z00
await leapwork.step("Press Enter on the Leapwork AI Studio asset page", async () => {
    await page.keyboard.press('Enter');
});