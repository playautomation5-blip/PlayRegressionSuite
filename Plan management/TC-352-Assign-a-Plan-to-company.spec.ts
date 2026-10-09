import { leapwork } from "./leapwork";

import { microsoftUsers } from "@assets/Utilities/random-team";
import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { EmailPasswordLogin } from "@assets/Utilities/Email Password Login";
import { ValidateSubscriptionAndUsagePage } from "@assets/Plan management/Utilities/Validate Subscription and Usage Page";
import { OpenPlanAssignmentPopup } from "@assets/Plan management/Utilities/Open Plan Assignment Popup";
import { CancelCurrentPlan } from "@assets/Plan management/Utilities/Cancel Current Plan";
import { AssignNewPlan } from "@assets/Plan management/Utilities/Assign New Plan";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

const userId = "aistudio_user_2";

leapwork.variables.set("email", microsoftUsers[userId], leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

// const userName = `${lw__email} (Personal)`
const userName = `Automation Account (Personal)`
leapwork.variables.set("userId", userId);
leapwork.variables.set("passwordId", userId);

leapwork.variables.set("userName", userName);
leapwork.variables.set("creditsAssigned", "1,500,000");
leapwork.variables.set("planName", "Enterprise Hybrid (Scale Out)");
leapwork.variables.set("planStatus", "Active");
leapwork.variables.set("parallelExecutionsIncludedCount", "40 included");
leapwork.variables.set("remoteBrowserSessionsIncludedCount", "60 included");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1ij1p9v0
await leapwork.step("Use test case: Open Plan Assignemnt popup", async () => {
    return await OpenPlanAssignmentPopup();
}, { action: "asset_reference", linkedAssetType: "test-case" });
 
// ai-studio-step-id: pw3fq6z600
await leapwork.step("Use test case: Cancel Current Plan", async () => {
    return await CancelCurrentPlan();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw54sspl00
await leapwork.step("Use test case: Cancel Current Plan", async () => {
    return await AssignNewPlan();
}, { action: "asset_reference", linkedAssetType: "test-case" }); 
 
// ai-studio-step-id: pw12i49zi0
await leapwork.step("Click the Close button on the workspace management dialog", async () => { 
    // Click button "Close workspace management" 
    await page.getByRole('button', { name: 'Close workspace management' }).click(); 
}, { action: "click" }); 

// ai-studio-step-id: pw1r149cr0
await leapwork.step("Use test case: Validate Subscription and Usage Page", async () => {
    return await ValidateSubscriptionAndUsagePage();
}, { action: "asset_reference", linkedAssetType: "test-case" });