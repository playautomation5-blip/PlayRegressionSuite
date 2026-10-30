import { leapwork } from "./leapwork";

import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, password, teamName } from "@assets/Utilities/random-team";
import { ExpandCollapse } from "@assets/Utilities/Expand collapse";

leapwork.variables.set("teamName", teamName);
leapwork.variables.set("userId", "user_73");
leapwork.variables.set("passwordId", "user_73");

leapwork.configuration({ enableSelfHeal: false, timeoutMs: 30000, chromiumArgs: ["--deny-permission-prompts", "--disable-notifications"], chromiumPrefs: { "credentials_enable_service": false, "profile": {"password_manager_enabled":false,"password_manager_leak_detection":false} } });

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw11q5gzw0
await leapwork.step("Use test case: Create New Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwft3po200
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1yctxlr0
await leapwork.step("Use test case: Expand collapse", async () => {
    return await ExpandCollapse();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwequvea00
await leapwork.step("Right-click \"${teamName}\" team", async () => {
    const target = page.getByText(teamName, { exact: true });
    await target.click({ button: 'right', force: true });
});

// ai-studio-step-id: pwzcog1t00
await leapwork.step("Click Restore in the trash actions menu", async () => {
    const restore = page.getByText('Restore', { exact: true });
    await restore.click({ force: true });
});
// ai-studio-step-id: pw94glp100
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1i4hoyz0
await leapwork.step("Use test case: Expand collapse", async () => {
    return await ExpandCollapse();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pww62i3k00
await leapwork.step("Right-click the \"${teamName}\" team", async () => {
    await page.getByTitle(teamName).nth(2).click({ button: 'right' });
}, { action: "click" });

// ai-studio-step-id: pw16nrdy10
await leapwork.step("Click Delete permanently in the Trash context menu", async () => {
    await page.getByText('Delete permanently').click();
}, { action: "click" });

// ai-studio-step-id: pwnq6nx300
await leapwork.step("Click Delete permanently to confirm asset deletion", async () => {
    // Click button "Delete permanently"
    await page.getByRole('button', { name: 'Delete permanently' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[3]/div/div/button[1]" });
