import { leapwork } from "./leapwork";

import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { ImportTestsOrPlaywright } from "@assets/Utilities/Import Tests or Playwright";
import { DeleteTeam } from "@assets/Utilities/Delete Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
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


leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const userId = "reg_11";
const fileId = "FL-3"
const testCaseName = ["Multiple_tests", "Multiple_tests - shared helpers", "Add products to cart", "Checkout flow"]

leapwork.variables.set("userId", userId);
leapwork.variables.set("passwordId", "reg_11");
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("fileId", fileId);
leapwork.variables.set("testCasesNames", testCaseName);
leapwork.variables.set("importType", "playwright");

// ai-studio-step-id: pw1qh7j2z0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: cc309120
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: cd690b63
await leapwork.step("Use test case: Import Tests or Playwright", async () => {
    return await ImportTestsOrPlaywright();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: 5f116b5f
await leapwork.step("Use test case: Delete Team", async () => {
    return await DeleteTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });
