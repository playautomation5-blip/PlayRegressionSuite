import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
import { DeleteCreateRenameTeam } from "@assets/Utilities/Delete-Create-Rename Team";
import { RandomTeam, teamName } from "@assets/Utilities/random-team";
import { CreateNewAsset } from "@assets/Utilities/Create New Asset";
import { DeleteAllTeams } from "@assets/Utilities/Delete All Teams";
import { AddEnvToATestCase } from "@assets/Utilities/Add Env to a test case";
import { BasicFlow } from "@assets/Runlist/Utility/Basic Flow";
import { RunlistDefaultExecutionMode } from "@assets/Runlist/Utility/Runlist- Default Execution Mode";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

leapwork.variables.set("userId", "user_6"); // Do not change the user (If necessary : change step 11 dependency as well)
leapwork.variables.set("teamName", teamName);
leapwork.variables.set("assetType", "New test case");
leapwork.variables.set("assetName", "created");
leapwork.variables.set("renamedAssetName", "renamed");
leapwork.variables.set("envName", "Leapwork");
leapwork.variables.set("envUrl", "https://leapwork.com");

// ai-studio-step-id: pw1vs03ju0
await leapwork.step("Use test case: Microsoft Login", async () => {
    return await MicrosoftLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwyrpbaz00
await leapwork.step("Use test case: Delete-Create-Rename Team", async () => {
    return await DeleteCreateRenameTeam();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1y4nxq40
await leapwork.step("Use test case: Create New Asset - Test Case", async () => {
    return await CreateNewAsset();
}, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 10000 });

// ai-studio-step-id: pw1okapbh0
await leapwork.step("Use test case: Add Env to a test case", async () => {
    return await AddEnvToATestCase();
}, { action: "asset_reference", linkedAssetType: "test-case" });


// ai-studio-step-id: 42a9baf5
await leapwork.step("Use test case: Basic Flow", async () => {
    return await BasicFlow();
}, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 10000});


// ai-studio-step-id: 812c7379
await leapwork.step("Use test case: Runlist- Default Execution Mode", async () => {
    return await RunlistDefaultExecutionMode();
}, { action: "asset_reference", linkedAssetType: "test-case", timeoutMs: 10000 });

// ai-studio-step-id: pwp1428800
await leapwork.step("Click the Selection button in Leapwork Play", async () => {
    // Click span
    await page.getByRole('button', { name: 'Selection' }).click();
}, { action: "click" });

// ai-studio-step-id: YftlcpkN
await leapwork.step("Click the Filter dropdown in the Selection criteria section", async () => {
    // Click div
    await page.locator('div').filter({ hasText: /^Filter$/ }).nth(2).click();
}, { action: "click" });

// ai-studio-step-id: 7LVmFs9L
await leapwork.step("Click the “Random” selection criterion under “Filter” in Leapwork Play", async () => {
    // Click div
    await page.getByText('Random').click();
}, { action: "click" });

// ai-studio-step-id: oyyCyx7g
await leapwork.step("Click the “Run now” button in the Selection criteria section", async () => {
    // Click button "Run now"
    await page.getByRole('button', { name: 'Run now' }).click();
}, { action: "click" });

// ai-studio-step-id: pwuorly900
await leapwork.step("Wait for Run to Start - 45 Seconds", async () => {
  await page.waitForTimeout(45000);
}, {
  action: "custom"
});

// ai-studio-step-id: pkv1n0fP
await leapwork.step("Click Test-6 Play in the Run log list", async () => {
    // Click span
    await page.getByText('Test-6 Play', { exact: true }).click();
}, { action: "click" });

// ai-studio-step-id: pwc27fij00
await leapwork.step("Validate the Leapwork Play run log screenshot loaded", async () => {
    await expect(page.locator("img.rl-drawer-shot-img").first()).not.toHaveJSProperty("naturalWidth", 0,  { timeout: 10000 });
}, { action: "validate" });

// ai-studio-step-id: d4f4nZ1o
await leapwork.step("Click the screenshot", async () => {
    const shot = page.locator("img.rl-drawer-shot-img").first();
    await expect(shot).not.toHaveJSProperty("naturalWidth", 0);
    await shot.click();
}, { action: "click", timeoutMs: 10000 });


// ai-studio-step-id: 468p5GQS
await leapwork.step("Validate the image titled “dGwNnJjb-5768-1785323071432.jpg” is displayed", async () => {
    // Assert img is visible
    await expect(page.getByRole('img')).toBeVisible();
}, { action: "validate" });



// ai-studio-step-id: 3ihevNgj
await leapwork.step("Switch to tab \"Leapwork Play\"", async () => {
    const pages = context.pages().filter(candidate => !candidate.isClosed());
    if (pages.length <= 1) {
      throw new Error('No alternate tab is available to switch to.');
    }
    
    const normalize = (value) => String(value ?? '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
    const tokenize = (value) => Array.from(new Set(
      normalize(value)
        .split(/\s+/)
        .filter(token => token.length >= 2 && !new Set(['http', 'https', 'www', 'com', 'in', 'amazon', 'ref', 'page', 'tab']).has(token))
    ));
    const parseUrl = (value) => {
      if (!value) return null;
      try {
        return new URL(value);
      } catch {
        return null;
      }
    };
    const countTokenMatches = (haystack, tokens) => tokens.reduce((count, token) => (
      haystack.includes(token) ? count + 1 : count
    ), 0);
    
    const currentPageUrl = typeof page.url === 'function' ? page.url() : '';
    const currentPageTitle = await page.title().catch(() => '');
    const expectedTitle = "Leapwork Play";
    const expectedUrl = "https://dev.leapwork.ai/assets/TM-581/RL-1?assetId=5785";
    const expectedTitleNormalized = normalize(expectedTitle);
    const expectedTitleTokens = tokenize(expectedTitle);
    const expectedUrlObject = parseUrl(expectedUrl);
    const expectedUrlTokens = tokenize(expectedUrlObject
      ? `${expectedUrlObject.hostname} ${expectedUrlObject.pathname} ${expectedUrlObject.search}`
      : expectedUrl);
    
    const ranked = await Promise.all(pages.map(async (candidate, index) => {
      const candidateTitle = await candidate.title().catch(() => '');
      const candidateUrl = candidate.url();
      const candidateTitleNormalized = normalize(candidateTitle);
      const candidateUrlNormalized = normalize(candidateUrl);
      const candidateUrlObject = parseUrl(candidateUrl);
    
      let score = 0;
      if (candidateUrl === currentPageUrl) score -= 900;
      if (candidateTitle && candidateTitle === currentPageTitle) score -= 900;
      score += countTokenMatches(candidateTitleNormalized, expectedTitleTokens) * 20;
      score += countTokenMatches(candidateUrlNormalized, expectedUrlTokens) * 8;
    
      if (expectedTitleNormalized) {
        if (candidateTitleNormalized === expectedTitleNormalized) score += 120;
        else if (candidateTitleNormalized.includes(expectedTitleNormalized)) score += 60;
      }
    
      if (expectedUrlObject && candidateUrlObject) {
        if (candidateUrlObject.hostname === expectedUrlObject.hostname) score += 10;
        if (candidateUrlObject.pathname === expectedUrlObject.pathname) score += 15;
      }
    
      return {
        candidate,
        index,
        score,
        title: candidateTitle,
        url: candidateUrl,
      };
    }));
    
    ranked.sort((left, right) => right.score - left.score);
    const targetPage = ranked[0]?.candidate ?? null;
    const targetPageTitle = targetPage ? await targetPage.title().catch(() => '') : '';
    const targetPageUrl = targetPage?.url() ?? '';
    const targetMatchesCurrentPage = targetPage != null
      && targetPageUrl === currentPageUrl
      && targetPageTitle === currentPageTitle;
    if (!targetPage || targetMatchesCurrentPage) {
      throw new Error(`Unable to find the intended tab for step 3ihevNgj. Ranked tabs: ${JSON.stringify(ranked.map(entry => ({
        index: entry.index,
        score: entry.score,
        title: entry.title,
        url: entry.url,
      })))}`);
    }
    
    await targetPage.bringToFront();
    await setActiveExecutionPage(targetPage);
    await Promise.allSettled([
      targetPage.waitForLoadState('domcontentloaded', { timeout: 10_000 }),
      targetPage.waitForLoadState('load', { timeout: 10_000 }),
    ]);
    await targetPage.waitForFunction(() => document.readyState === 'complete', undefined, {
      timeout: 5_000,
    }).catch(() => undefined);
    await targetPage.waitForLoadState('networkidle', { timeout: 2_000 }).catch(() => undefined);
}, { action: "switch_tab" });

// ai-studio-step-id: pwswwi7k00
await leapwork.step("Use test case: Delete All Teams", async () => {
    return await DeleteAllTeams();
}, { action: "asset_reference", linkedAssetType: "test-case" });
