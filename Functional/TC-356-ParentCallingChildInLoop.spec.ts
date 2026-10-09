import { LoopTestCase } from "@assets/Functional/Loop test case";

let counterVal= Number(leapwork.variables.get("globalCounter", leapwork.storage.GLOBAL));
leapwork.log.info("Get value");
leapwork.log.info((counterVal as unknown)as string);
// ai-studio-step-id: pw1ip8a0s0
await leapwork.step("Use test case: Loop test case", async () => {
    
    while(counterVal<5)
    {
        await LoopTestCase();
         //leapwork.log.info((counterVal as unknown) as string);
        counterVal++;
        leapwork.variables.set("globalCounter",counterVal, leapwork.storage.GLOBAL);
        leapwork.log.info("Set value");
        leapwork.log.info((counterVal as unknown)as string);
        await page.waitForTimeout(2000);
    
    
    } ;
}, { action: "asset_reference", linkedAssetType: "test-case" });
