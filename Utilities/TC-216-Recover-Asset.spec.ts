import { leapwork } from "./leapwork";

const assetName = leapwork.variables.get("assetName") as string;

// ai-studio-step-id: pwyei35q00
await leapwork.step("Click the Expand trash button in the Explorer sidebar", async () => {
    // Click button "Expand trash"
    await page.getByRole('button', { name: 'Expand trash' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1kprpwt0
await leapwork.step("Right-click the Credit Team item", async () => {
    // Right-click "Credit Team"
    await page.getByText(assetName).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw1rr1qws0
await leapwork.step("Click Restore in the Trash context menu", async () => {
    // Click div
    await page.getByText('Restore').click();
}, { action: "click" });