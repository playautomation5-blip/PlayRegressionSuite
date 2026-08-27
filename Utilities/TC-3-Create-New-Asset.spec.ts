import { leapwork } from "./leapwork";

const teamName = leapwork.variables.get("teamName") as string;
const assetType = leapwork.variables.get("assetType") as string;
const assetName = leapwork.variables.get("assetName") as string;

//Creates a asset in a team

// ai-studio-step-id: pw3dk6ig00
await leapwork.step(`click the "${teamName}" folder on the Leapwork AI Studio page`, async () => {
    const regression = page.locator('.explorer-list').getByText(teamName, { exact: true });
    await regression.click({force: true });
},{ action: "click"});

// ai-studio-step-id: pwipzryr00
await leapwork.step("Click Create new in the asset menu", async () => {   
    const createNewButton = page.getByRole('button', { name: `Create new in ${teamName}`, exact: true });
    await createNewButton.click({ force: true });
});

// ai-studio-step-id: pwdninky00
await leapwork.step(`Click the "${assetType}" option in the Create new menu`, async () => {
    // Click div
    await page.getByText(assetType).click();
}, { action: "click" });

// ai-studio-step-id: pw1ndlanx0
await leapwork.step(`Replace the textbox with \"${assetType}\" with value \"${assetName}\"`, async () => {
    const newAgent = page.getByRole('textbox', { name: '', exact: true });
    await newAgent.fill(assetName);
});

// ai-studio-step-id: pw1gltt100
await leapwork.step("Press Enter", async () => {
    await page.keyboard.press('Enter');
});