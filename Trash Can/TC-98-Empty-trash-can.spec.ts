import { leapwork } from "./leapwork";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { ExpandCollapse } from "@assets/Trash Can/Utilities/Expand collapse";
import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";

leapwork.configuration({
  enableSelfHeal: false,
  timeoutMs: 5000
});

leapwork.variables.set("userId", "user_25");
leapwork.variables.set("teamName", teamName);

// ai-studio-step-id: 6d8df913
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: f05ffb2d
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 7f8676e2
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 3596e2cd
await leapwork.step("Use test case: Expand collapse", async () => {
    return await ExpandCollapse();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw74mdtu00
await leapwork.step("Right-click the Trash item in the explorer", async () => {
    await page.locator('div').filter({ hasText: /^Trash$/ }).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pwxetpbz00
await leapwork.step("Click the Empty now option in the trash context menu", async () => {
    await page.getByText('Empty now').click();
}, { action: "click"});

// ai-studio-step-id: pwwqp2o800
await leapwork.step("Click the Empty trashcan button in the delete confirmation dialog", async () => {
    await page.getByRole('button', { name: 'Empty trashcan' }).click();
}, { action: "click" });
