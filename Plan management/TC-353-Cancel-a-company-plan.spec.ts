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

// Cancelling a plan, should assign the default AI builder plan to the company

const userId = "aistudio_user_2";

leapwork.variables.set("email", microsoftUsers[userId], leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

// const userName = `${lw__email} (Personal)`
const userName = `Automation Account (Personal)`
leapwork.variables.set("userId", userId);
leapwork.variables.set("passwordId", userId);

leapwork.variables.set("userName", userName);
leapwork.variables.set("creditsAssigned", "0");
leapwork.variables.set("planName", "AI Builder");
leapwork.variables.set("planStatus", "Active");
leapwork.variables.set("parallelExecutionsIncludedCount", "1 included");
leapwork.variables.set("remoteBrowserSessionsIncludedCount", "1 included");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwoyzsgr00
await leapwork.step("Use test case: Open Plan Assignemnt popup", async () => {
    return await OpenPlanAssignmentPopup();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwbtvl8u00
await leapwork.step("Use test case: Assign a new Plan", async () => {
    return await AssignNewPlan();
}, { action: "asset_reference", linkedAssetType: "test-case" });
 
// ai-studio-step-id: pw82z4sh00
await leapwork.step("Use test case: Cancel Current Plan", async () => {
    return await CancelCurrentPlan();
}, { action: "asset_reference", linkedAssetType: "test-case" });
 
// ai-studio-step-id: pw12i49zi0
await leapwork.step("Click the Close button on the workspace management dialog", async () => { 
    // Click button "Close workspace management" 
    await page.getByRole('button', { name: 'Close workspace management' }).click(); 
}, { action: "click" }); 

// ai-studio-step-id: pwut25rj00
await leapwork.step("Use test case: Validate Subscription and Usage Page", async () => {
    return await ValidateSubscriptionAndUsagePage();
}, { action: "asset_reference", linkedAssetType: "test-case" });