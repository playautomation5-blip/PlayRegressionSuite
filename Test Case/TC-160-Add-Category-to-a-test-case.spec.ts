import { leapwork } from "./leapwork";

import { RandomTeam, RandomTeam2, teamName } from "@assets/Utilities/random-team";
import { AddCategory } from "@assets/Team configuration/Utilities/Add Category";
import { AddCategory as AddCategory2 } from "@assets/Test Case/Utilities/Add Category";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteTeam } from "@assets/Utilities/Delete Team";

leapwork.variables.set("email", "test-play-29@outlook.com", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

leapwork.variables.set("userId", "user_29");
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


// ai-studio-step-id: pwdl44p200
await leapwork.step(`Fill the email field with ${lw__email}`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pw1hppb0l0
await leapwork.step("Click the “Log in with email” button on the Leapwork Play login page", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw14129m10
await leapwork.step("Fill the Password field with the password", async () => {
    // Fill textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).fill(leapwork.variables.getSecret("pwd_eqiiq4IP"));
}, { action: "input", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pwknrt8800
await leapwork.step("Click “Sign in with password” on the Leapwork Play login form", async () => {
    // Click button "Sign in with password"
    await page.getByRole('button', { name: 'Sign in with password' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: eddb8773
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 00c42243
await leapwork.step("Use test case: Add Category", async () => {
    return await AddCategory();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: e213f22b
await leapwork.step("Use test case: Create New Asset", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw2wc7uf00
await leapwork.step("Click the Explorer button", async () => {
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: f039743f
await leapwork.step("Use test case: Add Category", async () => {
    return await AddCategory2();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwhesed500
await leapwork.step("Click the Explorer button", async () => {
    await page.getByRole('button', { name: 'Explorer' }).click();
}, { action: "click" });

// ai-studio-step-id: be265498
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });