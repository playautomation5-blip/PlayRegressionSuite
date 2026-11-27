
import { leapwork } from "./leapwork";

import { RandomTeam, teamName, password } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { AddTag } from "@assets/Team configuration/Utilities/Add Tag";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_24");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("tagName", "Tag 1");
leapwork.variables.set("tagDescription", "This is a tag");

// ai-studio-step-id: pw1qh7j2z0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwjjdnfw00
await leapwork.step("Click the team 75411 item", async () => {
    // Click "team 75411"
    await page.getByText('team').first().click();
}, { action: "click", relativeXpath: ".//div[2]/div[2]/div[2]/div[1]/div/span[3]" });

// ai-studio-step-id: pw1dpl2gl0
await leapwork.step("Click the Test case organization tab in Team settings navigation", async () => {
    // Click button "Test case organization"
    await page.getByRole('tab', { name: 'Test case organization' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div/div/nav[@aria-label=\"Team settings navigation\"]/button[4]" });

// ai-studio-step-id: pw72y65n00
await leapwork.step("Use test case: Add Tag", async () => {
    return await AddTag();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw17jofh00
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });


