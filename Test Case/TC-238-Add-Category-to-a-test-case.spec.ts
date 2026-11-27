import { leapwork } from "./leapwork";

import { RandomTeam, RandomTeam2, teamName } from "@assets/Utilities/random-team";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { AddCategory } from "@assets/Team configuration/Utilities/Add Category";
import { AddCategory as AddCategory2 } from "@assets/Test Case/Utilities/Add Category";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("categoryName", "Category 1", leapwork.storage.LOCAL);
const lw__categoryName = leapwork.variables.get("categoryName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("description", "This is the first category", leapwork.storage.LOCAL);
const lw__description = leapwork.variables.get("description", leapwork.storage.LOCAL) as string;

leapwork.variables.set("userId", "user_28");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "Test Case");
leapwork.variables.set("categoryName", "Category 1");
leapwork.variables.set("categoryDescription", "This is a category");

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: eddb8773
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 00c42243
await leapwork.step("Use test case: Add Category", async () => {
    return await AddCategory();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// await leapwork.step("Click the Test case organization tab in Team settings navigation", async () => {
//     // Click tab "Test case organization"
//     await page.getByRole('tab', { name: 'Test case organization' }).click();
// }, { action: "click", relativeXpath: ".//div[2]/div[1]/div/div/nav[@aria-label=\"Team settings navigation\"]/button[4]" });


// ai-studio-step-id: e213f22b
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 5qpBqy5f
await leapwork.step("Click the Explorer button", async () => {
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: f039743f
await leapwork.step("Use test case: Add Category", async () => {
    return await AddCategory2();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pweuclfd00
await leapwork.step("Click the Explorer button", async () => {
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: be265498
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
