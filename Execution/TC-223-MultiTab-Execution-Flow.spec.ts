import { leapwork } from "./leapwork";

leapwork.variables.set("search", "iphone", leapwork.storage.LOCAL);
const lw__search = leapwork.variables.get("search", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
  enableXpath:
    (leapwork.team.settings.get("enableXpath")
      ?? leapwork.workspace.settings.get("enableXpath")) !== "false",
  chromiumArgs:
    leapwork.team.settings.get("chromiumArgs")
      ?? leapwork.workspace.settings.get("chromiumArgs")
      ?? ["--deny-permission-prompts",
          "--disable-notifications"
        ],
  chromiumPrefs: leapwork.team.settings.get("chromiumPrefs")
      ?? leapwork.workspace.settings.get("chromiumPrefs")
      ?? { "credentials_enable_service": false,
          "profile":
          {
            "password_manager_enabled": false,
            "password_manager_leak_detection": false
          }
        },
});

// ai-studio-step-id: pwcfnpsg00
await leapwork.step("Click the \"Shop products\" link on the Leap & Leash Pet Market homepage", async () => {
    // Click link "Shop products"
    await page.getByRole('link', { name: 'Shop products' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"heroSection\"]/div[2]/div/div/a" });

// ai-studio-step-id: pw1s5ahgh0
await leapwork.step("Click the \"View details for Low-Track Cloud Litter, $22.00\" product card", async () => {
    // Click button "View details for Low-Track Cloud Litter, $22.00"
    await page.getByRole('button', { name: 'View details for Low-Track' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productGrid\"]/article[@aria-label=\"View details for Low-Track Cloud Litter, $22.00\"]" });

// ai-studio-step-id: pw1lvroz40
await leapwork.step("Click the Add to cart button for Low-Track Cloud Litter in the product dialog", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productDialogContent\"]/div/div[2]/button" });

// ai-studio-step-id: pw1e5bwaf0
await leapwork.step("Click the View details button for Window Perch Cat Tree, $64.00 in the product grid", async () => {
    // Click button "View details for Window Perch Cat Tree, $64.00"
    await page.getByRole('button', { name: 'View details for Window Perch' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productGrid\"]/article[@aria-label=\"View details for Window Perch Cat Tree, $64.00\"]" });

// ai-studio-step-id: pw190vkv20
await leapwork.step("Click the Add to cart button for Window Perch Cat Tree ($64.00) in the product dialog", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productDialogContent\"]/div/div[2]/button" });

// ai-studio-step-id: pw1ul1ulf0
await leapwork.step("Click the Close cart button in the cart header", async () => {
    // Click button "Close cart"
    await page.getByRole('button', { name: 'Close cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"closeCart\"]" });

// ai-studio-step-id: pw1ssooxe0
await leapwork.step("Switch to tab \"amazon.com\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_E9rINbMC",
      title: "Amazon.com",
      url: "https://www.amazon.com/",
      fromTabKey: "tab_YgK0HGrx",
      toTabKey: "tab_E9rINbMC",
      switchSequence: 1,
      openedByTabKey: "tab_YgK0HGrx",
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw1b7q5w10
await leapwork.step("Click the Continue shopping button on the Amazon homepage", async () => {
    // Click button "Continue shopping"
    await page.getByRole('button', { name: 'Continue shopping' }).click();
}, { action: "click", relativeXpath: ".//form/div/div/span/span/button", continueOnFailure: true });

// ai-studio-step-id: pw232a3200
await leapwork.step("Switch to tab \"flipkart.com\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_ufZqrI9b",
      title: "flipkart.com",
      url: "https://www.flipkart.com/",
      fromTabKey: "tab_E9rINbMC",
      toTabKey: "tab_ufZqrI9b",
      switchSequence: 2,
      openedByTabKey: "tab_E9rINbMC",
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw1qjernv0
await leapwork.step("Switch to tab \"Window Operations | Practice Automation\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_TlGrBvYz",
      title: "Window Operations | Practice Automation",
      url: "https://practice-automation.com/window-operations/",
      fromTabKey: "tab_ufZqrI9b",
      toTabKey: "tab_TlGrBvYz",
      switchSequence: 3,
      openedByTabKey: "tab_ufZqrI9b",
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw1jgjrw90
await leapwork.step("Click the New Tab button on the Window Operations page", async () => {
    // Click b
    await page.getByRole('button', { name: 'New Tab' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"post-1147\"]/div/p[3]/button/b" });

// ai-studio-step-id: pw12dsi5u0
await leapwork.step("Switch to tab \"automateNow | The Best FREE Software Online Training Platform\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_nvtrhTgg",
      title: "automateNow | The Best FREE Software Online Training Platform",
      url: "https://automatenow.io/",
      fromTabKey: "tab_TlGrBvYz",
      toTabKey: "tab_nvtrhTgg",
      switchSequence: 4,
      openedByTabKey: "tab_TlGrBvYz",
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw1u7vj9b0
await leapwork.step("Switch to tab \"amazon.in\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_b1sfITXY",
      title: "Amazon.in",
      url: "https://www.amazon.in/",
      fromTabKey: "tab_yYOW6W0d",
      toTabKey: "tab_b1sfITXY",
      switchSequence: 1,
      openedByTabKey: "tab_yYOW6W0d",
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw10zdtvi0
await leapwork.step("Click the Continue shopping button on the Amazon.in homepage", async () => {
    // Click button "Continue shopping"
    await page.getByRole('button', { name: 'Continue shopping' }).click();
}, { action: "click", relativeXpath: ".//form/div/div/span/span/button", continueOnFailure: true });

// ai-studio-step-id: pw1t6479j0
await leapwork.step("Click the Search Amazon.in search box", async () => {
    // Click searchbox "Search Amazon.in"
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"twotabsearchtextbox\"]" });

// ai-studio-step-id: pw6a873i00
await leapwork.step(`Fill the Search Amazon.in field with "${lw__search}"`, async () => {
    // Fill searchbox "Search Amazon.in"
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill(String(lw__search));
}, { action: "input", relativeXpath: "//*[@id=\"twotabsearchtextbox\"]" });

// ai-studio-step-id: pw17tp19f0
await leapwork.step("Click the \"iphone 18 pro\" search suggestion on Amazon", async () => {
    // Click span
    await page.getByRole('button', { name: 'iphone 18 pro' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"sac-suggestion-row-2-cell-1\"]/div[@aria-label=\"iphone 18 pro\"]/span" });

// ai-studio-step-id: pw1s6hu0m0
await leapwork.step("Switch to tab \"amazon.com\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_C2qKsWLN",
      title: "amazon.com",
      url: "https://www.amazon.com/",
      fromTabKey: "tab_b1sfITXY",
      toTabKey: "tab_C2qKsWLN",
      switchSequence: 2,
      openedByTabKey: "tab_b1sfITXY",
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw1dpg7vl0
await leapwork.step("Switch to tab \"Amazon.in : iphone 18 pro\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_b1sfITXY",
      title: "Amazon.in : iphone 18 pro",
      url: "https://www.amazon.in/s?k=iphone+18+pro&crid=1VV0YDRDWSO3X&sprefix=iphone%2Caps%2C176&ref=nb_sb_ss_mvt-t11-ranker_2_6",
      fromTabKey: "tab_C2qKsWLN",
      toTabKey: "tab_b1sfITXY",
      switchSequence: 3,
    });
}, { action: "switch_tab" });

// ai-studio-step-id: pw1vv5txm0
await leapwork.step("Click the \"iPhone 18 Pro (1 TB) - Burgundy\" product link on the Amazon search results page", async () => {
    // Click span
    await page.getByRole('link', { name: 'iPhone 18 Pro (1 TB) - Burgundy', exact: true }).click();
}, { action: "click", relativeXpath: ".//div/div/div[1]/a/h2[@aria-label=\"iPhone 18 Pro (1 TB) - Burgundy\"]/span" });

// ai-studio-step-id: pw186e3sq0
await leapwork.step("Switch to tab \"iPhone 18 Pro (1 TB) - Burgundy | 15.93 cm (6.3″) Super Retina XDR Display with ProMotion, A20 Pro Chip, 48MP Fusion Main Camera with Variable Aperture : Amazon.in: Electronics\"", async () => {
    await leapwork.switchTab({
      tabKey: "tab_PksOPH2a",
      title: "iPhone 18 Pro (1 TB) - Burgundy | 15.93 cm (6.3″) Super Retina XDR Display with ProMotion, A20 Pro Chip, 48MP Fusion Main Camera with Variable Aperture : Amazon.in: Electronics",
      url: "https://www.amazon.in/iPhone-18-Pro-TB-ProMotion/dp/B0HJB696TW/ref=sr_1_1?crid=1VV0YDRDWSO3X&dib=eyJ2IjoiMSJ9.OsB_n8cCh396Usr3CAeP21T0z7TkjYteTntGfBwK-8QJ5sKuNnf8drKzc3BwNSSbnIXleS_GiKKp1Tn_GWuYoI7UvKH_WenlDSDVJINqRALrIK14wGYZ6WTOsqO6MXFFydq4CYw6WXSArlvm2i2X9DkAr5brc0aAirMtHy5BRsphKNGOCtPRwo5inCAlHkMHEO0NwMxdyFuVxa5cZfrtR8WFS2CTONsT2vMn_1AZVhI.cv7fVbDYI9YSo_JjRtzSSDT0PAe0m94j01fH0HzukF8&dib_tag=se&keywords=iphone+18+pro&qid=1795159072&sprefix=iphone%2Caps%2C176&sr=8-1",
      fromTabKey: "tab_b1sfITXY",
      toTabKey: "tab_PksOPH2a",
      switchSequence: 4,
      openedByTabKey: "tab_b1sfITXY",
    });
}, { action: "switch_tab" });