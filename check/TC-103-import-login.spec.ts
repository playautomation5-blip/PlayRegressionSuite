import { leapwork } from "./leapwork";

import { Asset1Login } from "@assets/check/1-login";

// ai-studio-step-id: f229a482
await leapwork.step("Use test case: 1-login", async () => {
    return await Asset1Login();
}, { action: "asset_reference", linkedAssetType: "test-case" });
