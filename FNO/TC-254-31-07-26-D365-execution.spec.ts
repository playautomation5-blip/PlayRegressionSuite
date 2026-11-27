import { leapwork } from "./leapwork";

import { D365LogicWithTOTPVariable } from "@assets/FNO/Utilities/D365 logic with TOTP variable";

leapwork.variables.set("bankGroups", "BankEUR", leapwork.storage.LOCAL);
const lw__bankGroups = leapwork.variables.get("bankGroups", leapwork.storage.LOCAL) as string;

leapwork.variables.set("currency2", "BND", leapwork.storage.LOCAL);
const lw__currency2 = leapwork.variables.get("currency2", leapwork.storage.LOCAL) as string;

leapwork.variables.set("currency3", "USD", leapwork.storage.LOCAL);
const lw__currency3 = leapwork.variables.get("currency3", leapwork.storage.LOCAL) as string;

leapwork.variables.set("currency4", "SVC", leapwork.storage.LOCAL);
const lw__currency4 = leapwork.variables.get("currency4", leapwork.storage.LOCAL) as string;

leapwork.variables.set("bankGroups2", "BankUSA", leapwork.storage.LOCAL);
const lw__bankGroups2 = leapwork.variables.get("bankGroups2", leapwork.storage.LOCAL) as string;

leapwork.variables.set("zIPPostalCode", "20832", leapwork.storage.LOCAL);
const lw__zIPPostalCode = leapwork.variables.get("zIPPostalCode", leapwork.storage.LOCAL) as string;

leapwork.variables.set("customerAccount", "004232", leapwork.storage.LOCAL);
const lw__customerAccount = leapwork.variables.get("customerAccount", leapwork.storage.LOCAL) as string;

leapwork.variables.set("modeOfDelivery", "21", leapwork.storage.LOCAL);
const lw__modeOfDelivery = leapwork.variables.get("modeOfDelivery", leapwork.storage.LOCAL) as string;

leapwork.variables.set("itemNumber", "0023", leapwork.storage.LOCAL);
const lw__itemNumber = leapwork.variables.get("itemNumber", leapwork.storage.LOCAL) as string;

leapwork.variables.set("variantNumber", "test value", leapwork.storage.LOCAL);
const lw__variantNumber = leapwork.variables.get("variantNumber", leapwork.storage.LOCAL) as string;

leapwork.variables.set("quantity", "50.00", leapwork.storage.LOCAL);
const lw__quantity = leapwork.variables.get("quantity", leapwork.storage.LOCAL) as string;

leapwork.variables.set("vendorAccount", "4/6/2026 2:46:03 PM", leapwork.storage.LOCAL);
const lw__vendorAccount = leapwork.variables.get("vendorAccount", leapwork.storage.LOCAL) as string;

leapwork.variables.set("group", "90", leapwork.storage.LOCAL);
const lw__group = leapwork.variables.get("group", leapwork.storage.LOCAL) as string;

leapwork.variables.set("aBCCode", "B", leapwork.storage.LOCAL);
const lw__aBCCode = leapwork.variables.get("aBCCode", leapwork.storage.LOCAL) as string;

leapwork.variables.set("language", "en-sg", leapwork.storage.LOCAL);
const lw__language = leapwork.variables.get("language", leapwork.storage.LOCAL) as string;

leapwork.variables.set("collaborationActivation", "Active (PO is not auto-confirmed)", leapwork.storage.LOCAL);
const lw__collaborationActivation = leapwork.variables.get("collaborationActivation", leapwork.storage.LOCAL) as string;

leapwork.variables.set("addressBooksSelections", ["AnnArbor","Frankfurt"], leapwork.storage.LOCAL);
const lw__addressBooksSelections = leapwork.variables.get("addressBooksSelections", leapwork.storage.LOCAL) as string[];

leapwork.variables.set("currency", "AED", leapwork.storage.LOCAL);
const lw__currency = leapwork.variables.get("currency", leapwork.storage.LOCAL) as string;

leapwork.variables.set("employeeResponsible", "John Evans", leapwork.storage.LOCAL);
const lw__employeeResponsible = leapwork.variables.get("employeeResponsible", leapwork.storage.LOCAL) as string;

leapwork.variables.set("org_NameAlias", "Add Vendor", leapwork.storage.LOCAL);
const lw__org_NameAlias = leapwork.variables.get("org_NameAlias", leapwork.storage.LOCAL) as string;

leapwork.variables.set("orgPhoneticGroup_PhoneticName", "Add Vendor", leapwork.storage.LOCAL);
const lw__orgPhoneticGroup_PhoneticName = leapwork.variables.get("orgPhoneticGroup_PhoneticName", leapwork.storage.LOCAL) as string;

leapwork.variables.set("orgDetailGroup_DunsNumber", "1234", leapwork.storage.LOCAL);
const lw__orgDetailGroup_DunsNumber = leapwork.variables.get("orgDetailGroup_DunsNumber", leapwork.storage.LOCAL) as string;

leapwork.variables.set("org_KnownAs", "Test Cae for typing", leapwork.storage.LOCAL);
const lw__org_KnownAs = leapwork.variables.get("org_KnownAs", leapwork.storage.LOCAL) as string;

leapwork.variables.set("vendTable_Memo", "Notes Added", leapwork.storage.LOCAL);
const lw__vendTable_Memo = leapwork.variables.get("vendTable_Memo", leapwork.storage.LOCAL) as string;

leapwork.variables.set("cashDiscount", "2%D10", leapwork.storage.LOCAL);
const lw__cashDiscount = leapwork.variables.get("cashDiscount", leapwork.storage.LOCAL) as string;

leapwork.variables.set("name", "1-619-754-6249", leapwork.storage.LOCAL);
const lw__name = leapwork.variables.get("name", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: 60000,
  enableSelfHeal:false,
});





// ai-studio-step-id: c8c409b7
await leapwork.step("Use test case: D365 logic with TOTP variable", async () => {
    return await D365LogicWithTOTPVariable();
}, { action: "asset_reference", linkedAssetType: "test-case" });





// ai-studio-step-id: a05W3hAx
await leapwork.step("Click the Modules navigation item to expand the modules list", async () => {
    // Click span
    await page.locator('.workspace-image.GroupedList-symbol').click();
}, { action: "click", relativeXpath: "", timeoutMs: 30000 });

// ai-studio-step-id: ddMpQQ3W
await leapwork.step("Click Accounts payable in the navigation menu", async () => {
    // Click treeitem "Accounts payable"
    await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: ybkYrvCw
await leapwork.step("Click All vendors in the Vendors navigation menu", async () => {
    // Click link "All vendors"
    await page.getByRole('link', { name: 'All vendors' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: Bozy4rrw
await leapwork.step("Click Edit in the All vendors toolbar", async () => {
    // Click button " Edit"
    await page.getByRole('button', { name: ' Edit' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: EUhYBufl
await leapwork.step("Select the row where Vendor account is \"328-862-4371\"", async () => {
    await leapwork.d365.fno.grid.selectRow(page, {
      gridId: "Grid_3_0",
      controlName: "Grid",
      gridModuleName: "Grid_3_0_grid",
      strategy: "primaryKey",
      rowIndex: "52",
      primaryKey: "328-862-4371",
      primaryKeyColumn: "Vendor account",
      rowText: "328-862-4371",
    });
}, { action: "click", relativeXpath: "" });



// ai-studio-step-id: pw1mmu3wb0
await leapwork.step("Select \"${lw__currency4}\" from the Currency dropdown where Vendor account is \"328-862-4371\"", async () => {
    await leapwork.d365.fno.grid.selectRowDropdownOption(page, {
      controlSelector: "[aria-rowindex=\"54\"] [data-dyn-controlname=\"VendTable_Currency\"]",
      controlName: "VendTable_Currency",
      gridId: "Grid_3_0",
      gridModuleName: "Grid_3_0_grid",
      strategy: undefined,
      rowIndex: "52",
      columnName: "VendTable_Currency",
      primaryKey: "328-862-4371",
      primaryKeyColumn: "Vendor account",
      rowText: "328-862-4371",
      optionSelector: undefined,
      value: String(lw__currency4),
    });
}, { action: "change", relativeXpath: "" });





// ai-studio-step-id: po9uLPMO
await leapwork.step("Click the Finance and Operations home button in the navigation bar", async () => {
    // Click button "Finance and Operations"
    await page.getByRole('button', { name: 'Finance and Operations' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 3xLyZETM
await leapwork.step("Click the Bank management workspace tile in the Dashboard's Workspaces section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Bank management' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: LenKly73
await leapwork.step("Click All bank accounts in the Bank management Summary section", async () => {
    // Click button "All bank accounts"
    await page.getByRole('button', { name: 'All bank accounts' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: BBfL39wB
await leapwork.step("Click the Edit button on the Bank accounts page toolbar", async () => {
    // Click button " Edit"
    await page.getByRole('button', { name: ' Edit' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: lsgb7LEr
await leapwork.step("Select the row where Bank account is \"12366469\"", async () => {
    await leapwork.d365.fno.grid.selectRow(page, {
      gridId: "Grid_3_0",
      controlName: "Grid",
      gridModuleName: "Grid_3_0_grid",
      strategy: "primaryKey",
      rowIndex: "116",
      primaryKey: "12366469",
      primaryKeyColumn: "Bank account",
      rowText: "12366469",
    });
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: LU4AL92p
await leapwork.step("Select \"${lw__bankGroups}\" from the Bank groups dropdown where Bank account is \"12366469\"", async () => {
    await leapwork.d365.fno.grid.selectRowDropdownOption(page, {
      controlSelector: "[aria-rowindex=\"118\"] [data-dyn-controlname=\"BankAccountTable_BankGroupId\"]",
      controlName: "BankAccountTable_BankGroupId",
      gridId: "Grid_3_0",
      gridModuleName: "Grid_3_0_grid",
      strategy: undefined,
      rowIndex: "116",
      columnName: "BankAccountTable_BankGroupId",
      primaryKey: "12366469",
      primaryKeyColumn: "Bank account",
      rowText: "12366469",
      optionSelector: undefined,
      value: String(lw__bankGroups),
    });
}, { action: "change", relativeXpath: "" });



// ai-studio-step-id: GdzqhAPF
await leapwork.step("Select \"${lw__currency2}\" from the Currency dropdown where Bank account is \"12366469\"", async () => {
    await leapwork.d365.fno.grid.selectRowDropdownOption(page, {
      controlSelector: "[aria-rowindex=\"118\"] [data-dyn-controlname=\"BankAccountTable_CurrencyCode\"]",
      controlName: "BankAccountTable_CurrencyCode",
      gridId: "Grid_3_0",
      gridModuleName: "Grid_3_0_grid",
      strategy: undefined,
      rowIndex: "116",
      columnName: "BankAccountTable_CurrencyCode",
      primaryKey: "12366469",
      primaryKeyColumn: "Bank account",
      rowText: "12366469",
      optionSelector: undefined,
      value: String(lw__currency2),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: 7RL9h2bk
await leapwork.step("Click the Modules navigation item to expand the modules menu", async () => {
    // Click span
    await page.locator('.workspace-image.GroupedList-symbol').click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: rBcw9LIU
await leapwork.step("Click Sales and marketing in the navigation menu", async () => {
    // Click treeitem "Sales and marketing"
    await page.getByRole('treeitem', { name: 'Sales and marketing' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 750T2bgA
await leapwork.step("Click All customers in the Customers navigation menu", async () => {
    // Click a
    await page.getByText('All customers').click();
}, { action: "click", relativeXpath: "" });





// ai-studio-step-id: Qo0gRmCU
await leapwork.step("Click the New button in the All customers toolbar", async () => {
    // Click button " New"
    await page.getByRole('button', { name: ' New' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: Be0Ht3SF
await leapwork.step("Fill the ZIP/postal code field with \"${lw__zIPPostalCode}\"", async () => {
    await leapwork.d365.fno.SelectDropdown(page, {
      controlName: "LogisticsPostalAddress_ZipCode",
      value: String(lw__zIPPostalCode),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: HKbQhzO7
await leapwork.step("Select \"${lw__zIPPostalCode}\" from the ZIP/postal code lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "LogisticsPostalAddress_ZipCode",
      controlSelector: "[data-dyn-controlname=\"LogisticsPostalAddress_ZipCode\"]",
      triggerSelector: "#DirPartyQuickCreateForm_14_LogisticsPostalAddress_ZipCode > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__zIPPostalCode),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: 86vFAfNh
await leapwork.step("Click the Cancel button on the customer record form", async () => {
    // Click button "Cancel"
    await page.getByRole('button', { name: 'Cancel' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 84S0vMQX
await leapwork.step("Click the Modules navigation item to open the modules list", async () => {
    // Click span
    await page.locator('.workspace-image.GroupedList-symbol').click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: fzNBMfN0
await leapwork.step("Click Accounts receivable in the navigation menu", async () => {
    // Click treeitem "Accounts receivable"
    await page.getByRole('treeitem', { name: 'Accounts receivable' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: zgvd3m3F
await leapwork.step("Click All sales orders in the Orders navigation menu", async () => {
    // Click a
    await page.getByText('All sales orders').click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: KGw3fTr4
await leapwork.step("Click New on the All sales orders page", async () => {
    // Click button " New"
    await page.getByRole('button', { name: ' New' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 7XFqhi5A
await leapwork.step("Select \"${lw__customerAccount}\" from the Customer account lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "SalesTable_CustAccount",
      controlSelector: "[data-dyn-controlname=\"SalesTable_CustAccount\"]",
      triggerSelector: "#SalesCreateOrder_19_SalesTable_CustAccount > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__customerAccount),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: yADhJn4Y
await leapwork.step("Click the Customer tab on the sales order 014721 page", async () => {
    const customerTab = page.locator("[data-dyn-controlname=\"CustomerTab\"]").locator('button[aria-expanded], [role="button"][aria-expanded]').first();
    await expect(customerTab).toHaveCount(1);
    const shouldBeExpanded = false;
    const isExpanded = (await customerTab.getAttribute('aria-expanded')) === 'true';
    if (isExpanded !== shouldBeExpanded) {
      await customerTab.click({ force: true });
    }
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: r3rZTwIr
await leapwork.step("Click the Customer section on the sales order form", async () => {
    const customerTab = page.locator("[data-dyn-controlname=\"CustomerTab\"]").locator('button[aria-expanded], [role="button"][aria-expanded]').first();
    await expect(customerTab).toHaveCount(1);
    const shouldBeExpanded = false;
    const isExpanded = (await customerTab.getAttribute('aria-expanded')) === 'true';
    if (isExpanded !== shouldBeExpanded) {
      await customerTab.click({ force: true });
    }
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: b7d7pZlb
await leapwork.step("Select \"${lw__modeOfDelivery}\" from the Mode of delivery lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "SalesTable_DlvMode",
      controlSelector: "[data-dyn-controlname=\"SalesTable_DlvMode\"]",
      triggerSelector: "#SalesCreateOrder_19_SalesTable_DlvMode > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__modeOfDelivery),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: QUiJqL5v
await leapwork.step("Click the OK button in the sales order dialog", async () => {
    // Click button "OK"
    await page.getByRole('button', { name: 'OK' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: XYadqFJv
await leapwork.step("Select row 0 from the list", async () => {
    await leapwork.d365.fno.grid.selectRow(page, {
      gridId: "SalesLineGrid_16660_0",
      controlName: "Grid",
      gridModuleName: "SalesLineGrid_16660_0_grid",
      strategy: "index",
      rowIndex: "0",
      primaryKey: undefined,
      primaryKeyColumn: undefined,
      rowText: undefined,
    });
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: BCAKOAbQ
await leapwork.step("Select \"${lw__itemNumber}\" from the Item number dropdown in grid row 0", async () => {
    await leapwork.d365.fno.grid.selectRowDropdownOption(page, {
      controlSelector: "[aria-rowindex=\"2\"] [data-dyn-controlname=\"SalesLine_ItemId\"]",
      controlName: "SalesLine_ItemId",
      gridId: "SalesLineGrid_16660_0",
      gridModuleName: "SalesLineGrid_16660_0_grid",
      strategy: undefined,
      rowIndex: "0",
      columnName: "SalesLine_ItemId",
      primaryKey: undefined,
      primaryKeyColumn: undefined,
      rowText: undefined,
      optionSelector: undefined,
      value: String(lw__itemNumber),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: uamXL05t
await leapwork.step("Fill the Variant number field with \"${lw__variantNumber}\"", async () => {
    await leapwork.d365.fno.grid.selectDropdownOption(page, { controlSelector: "[aria-rowindex=\"2\"] [data-dyn-controlname=\"SalesLine_RBOVariantId\"]", value: String(lw__variantNumber) });
}, { action: "input", relativeXpath: "//*[@aria-rowindex=\"2\"]//*[@data-dyn-controlname=\"SalesLine_RBOVariantId\"]" });

// ai-studio-step-id: ayXYpyRP
await leapwork.step("Fill the Quantity field in the sales order line with ${lw__quantity}", async () => {
    await leapwork.d365.fno.grid.setTextBox(page, {
      gridId: "SalesLineGrid_37326_0",
      controlName: "SalesLine_SalesQty",
      gridModuleName: "SalesLineGrid_37326_0_grid",
      strategy: "index",
      rowIndex: "0",
      primaryKey: undefined,
      primaryKeyColumn: undefined,
      rowText: undefined,
      value: String(lw__quantity),
    });
}, { action: "input", relativeXpath: "" });

// ai-studio-step-id: dgEgWsHV
await leapwork.step("Click Remove to delete the selected sales order line", async () => {
    // Click button " Remove"
    await page.getByRole('button', { name: ' Remove' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: LMdLBEtM
await leapwork.step("Click the Modules navigation item to view available Finance and Operations modules", async () => {
    // Click span
    await page.locator('.workspace-image.GroupedList-symbol').click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: XMMVPAXI
await leapwork.step("Click Accounts payable in the navigation menu", async () => {
    // Click treeitem "Accounts payable"
    await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 5hFiJ6eN
await leapwork.step("Click All vendors in the Vendors navigation menu", async () => {
    // Click a
    await page.getByText('All vendors').click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: kdpDRxKz
await leapwork.step("Click the New button on the All vendors page", async () => {
    // Click button " New"
    await page.getByRole('button', { name: ' New' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: lyekab5F
await leapwork.step("Select \"${lw__vendorAccount}\" from the Vendor account lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "Identification_AccountNum",
      controlSelector: "[data-dyn-controlname=\"Identification_AccountNum\"]",
      triggerSelector: ".lookupButton >> nth=0",
      optionSelector: undefined,
      value: String(lw__vendorAccount),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: TKWqTl4X
await leapwork.step("Select \"${lw__group}\" from the Group lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "Posting_VendGroup",
      controlSelector: "[data-dyn-controlname=\"Posting_VendGroup\"]",
      triggerSelector: "#vendtablelistpage_35_Posting_VendGroup > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__group),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: S2u6dn93
await leapwork.step("Select \"${lw__aBCCode}\" from the ABC code dropdown", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "OrgDetailGroup_ABC",
      controlSelector: "[data-dyn-controlname=\"OrgDetailGroup_ABC\"]",
      triggerSelector: ".lookupDock-dockContainer.lookupDock-comboBox.displayoption.hasFocusedChild > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: "#vendtablelistpage_35_OrgDetailGroup_ABC_list_item2",
      value: String(lw__aBCCode),
    });
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 5RcCgk7M
await leapwork.step("Select \"${lw__language}\" from the Language lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "Org_LanguageId",
      controlSelector: "[data-dyn-controlname=\"Org_LanguageId\"]",
      triggerSelector: "#vendtablelistpage_35_Org_LanguageId > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__language),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: cBr9MADT
await leapwork.step("Select \"${lw__collaborationActivation}\" from the Collaboration activation dropdown", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "VendorCollaboration_VendVendorCollaborationType",
      controlSelector: "[data-dyn-controlname=\"VendorCollaboration_VendVendorCollaborationType\"]",
      triggerSelector: ".lookupDock-dockContainer.lookupDock-comboBox.displayoption.hasFocusedChild > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: "#vendtablelistpage_35_VendorCollaboration_VendVendorCollaborationType_list_item1",
      value: String(lw__collaborationActivation),
    });
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 2XejKXYp
await leapwork.step("Select \"AnnArbor;Frankfurt\" from the Address books dropdown", async () => {
    await leapwork.d365.fno.MultiSelect(page, {
      controlName: "AddressBooks",
      values: lw__addressBooksSelections,
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: UpIX6AJL
await leapwork.step("Select \"${lw__currency}\" from the Currency lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "Currency_Currency",
      controlSelector: "[data-dyn-controlname=\"Currency_Currency\"]",
      triggerSelector: "#vendtablelistpage_35_Currency_Currency > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__currency),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: 4MTCYDYV
await leapwork.step("Select \"${lw__employeeResponsible}\" from the Employee responsible lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "VendTable_MainContactWorker",
      controlSelector: "[data-dyn-controlname=\"VendTable_MainContactWorker\"]",
      triggerSelector: ".lookupDock.lookupDock-dockContainer.displayoption.hasdiscretesize-width.discretesize-width-large > div:nth-child(2) > .lookupButton",
      optionSelector: undefined,
      value: String(lw__employeeResponsible),
    });
}, { action: "change", relativeXpath: "" });



// ai-studio-step-id: pwsp8h5j00
await leapwork.step(`Select "${lw__name}" from the Name lookup list`, async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "Org_Name",
      controlSelector: "[data-dyn-controlname=\"Org_Name\"]",
      triggerSelector: "#vendtablelistpage_36_Org_Name > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__name),
    });
}, { action: "change", relativeXpath: "//*[@data-dyn-controlname=\"Org_Name\"]" });

// ai-studio-step-id: TWYpCxeh
await leapwork.step("Click the Delete button on the All vendors form for vendor test12", async () => {
    // Click button " Delete"
    await page.getByRole('button', { name: ' Delete' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pw295whh00
await leapwork.step("Click New to create a vendor on the All vendors page", async () => {
    // Click button " New"
    await page.getByRole('button', { name: ' New' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: d1cd7244
await leapwork.step("Fill the Vendor account field with \"${lw__vendorAccount}\"", async () => {
    await leapwork.d365.fno.SelectDropdown(page, {
      controlName: "Identification_AccountNum",
      value: String(lw__vendorAccount),
    });
}, { action: "input", relativeXpath: "" });

// ai-studio-step-id: 88279c1f
await leapwork.step("Click the Search name field in the All vendors form", async () => {
    // Click textbox "Search name"
    await page.getByRole('textbox', { name: 'Search name' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 0e905a2a
await leapwork.step("Fill the Search name field with \"${lw__org_NameAlias}\" on the vendor form", async () => {
    // Fill textbox "Search name"
    await page.getByRole('textbox', { name: 'Search name' }).fill(String(lw__org_NameAlias));
}, { action: "input", relativeXpath: "" });

// ai-studio-step-id: 90b25ebc
await leapwork.step("Click the Phonetic name field in the vendor's Other information section", async () => {
    // Click textbox "Phonetic name"
    await page.getByRole('textbox', { name: 'Phonetic name' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 4d3f38f7
await leapwork.step("Fill the Phonetic name field with \"${lw__orgPhoneticGroup_PhoneticName}\"", async () => {
    // Fill textbox "Phonetic name"
    await page.getByRole('textbox', { name: 'Phonetic name' }).fill(String(lw__orgPhoneticGroup_PhoneticName));
}, { action: "input", relativeXpath: "" });

// ai-studio-step-id: b3be1242
await leapwork.step("Click the DUNS number field in the Organization details section.", async () => {
    // Click textbox "DUNS number"
    await page.getByRole('textbox', { name: 'DUNS number' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 1361c416
await leapwork.step("Fill the DUNS number field with \"${lw__orgDetailGroup_DunsNumber}\" on the vendor form", async () => {
    // Fill textbox "DUNS number"
    await page.getByRole('textbox', { name: 'DUNS number' }).fill(String(lw__orgDetailGroup_DunsNumber));
}, { action: "input", relativeXpath: "" });

// ai-studio-step-id: 8d408027
await leapwork.step("Click the Known as field in the vendor's Other information section", async () => {
    // Click textbox "Known as"
    await page.getByRole('textbox', { name: 'Known as' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: 89070405
await leapwork.step("Fill the Known as field with \"${lw__org_KnownAs}\" on the vendor form", async () => {
    // Fill textbox "Known as"
    await page.getByRole('textbox', { name: 'Known as' }).fill(String(lw__org_KnownAs));
}, { action: "input", relativeXpath: "" });

// ai-studio-step-id: 3f5b8f90
await leapwork.step("Click the Notes field in the vendor's Purchasing demographics section", async () => {
    // Click textbox "Notes"
    await page.getByRole('textbox', { name: 'Notes' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: f2a2bf1f
await leapwork.step("Fill the Notes field with \"${lw__vendTable_Memo}\" on the vendor form", async () => {
    // Fill textbox "Notes"
    await page.getByRole('textbox', { name: 'Notes' }).fill(String(lw__vendTable_Memo));
}, { action: "input", relativeXpath: "" });

// ai-studio-step-id: d5163ddc
await leapwork.step("Select \"${lw__cashDiscount}\" from the Cash discount lookup list", async () => {
    await leapwork.d365.fno.SelectLookupOption(page, {
      controlName: "Payment_CashDisc",
      controlSelector: "[data-dyn-controlname=\"Payment_CashDisc\"]",
      triggerSelector: "#vendtablelistpage_2_Payment_CashDisc > .lookupDock-buttonContainer > .lookupButton",
      optionSelector: undefined,
      value: String(lw__cashDiscount),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: 802fb894
await leapwork.step("Click the Delete button on the All vendors form for vendor test12", async () => {
    // Click button " Delete"
    await page.getByRole('button', { name: ' Delete' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pwohzsqk00
await leapwork.step("Click the Modules navigation item to expand the modules list", async () => {
    // Click span
    await page.locator('.workspace-image.GroupedList-symbol').click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pwydwh6900
await leapwork.step("Click Accounts payable in the navigation menu", async () => {
    // Click treeitem "Accounts payable"
    await page.getByRole('treeitem', { name: 'Accounts payable' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pw12585na0
await leapwork.step("Click All vendors in the Vendors navigation menu", async () => {
    // Click a
    await page.getByLabel('All vendors', { exact: true }).getByText('All vendors').click();
}, { action: "click", relativeXpath: "" });



// ai-studio-step-id: pw382fb300
await leapwork.step("Click Edit in the All vendors toolbar", async () => {
    // Click button " Edit"
    await page.getByRole('button', { name: ' Edit' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pwlc27u500
await leapwork.step("Select the row where Vendor account is \"328-862-4371\"", async () => {
    await leapwork.d365.fno.grid.selectRow(page, {
      gridId: "Grid_3_0",
      controlName: "Grid",
      gridModuleName: "Grid_3_0_grid",
      strategy: "primaryKey",
      rowIndex: "52",
      primaryKey: "328-862-4371",
      primaryKeyColumn: "Vendor account",
      rowText: "328-862-4371",
    });
}, { action: "click" });

// ai-studio-step-id: 1ntmyUcG
await leapwork.step("Select \"${lw__currency3}\" from the Currency dropdown where Vendor account is \"328-862-4371\"", async () => {
    await leapwork.d365.fno.grid.selectRowDropdownOption(page, {
      controlSelector: "[aria-rowindex=\"54\"] [data-dyn-controlname=\"VendTable_Currency\"]",
      controlName: "VendTable_Currency",
      gridId: "Grid_3_0",
      gridModuleName: "Grid_3_0_grid",
      strategy: undefined,
      rowIndex: "52",
      columnName: "VendTable_Currency",
      primaryKey: "328-862-4371",
      primaryKeyColumn: "Vendor account",
      rowText: "328-862-4371",
      optionSelector: undefined,
      value: String(lw__currency3),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: pw8rk0ys00
await leapwork.step("Click the Save button on the All vendors page", async () => {
    // Click button " Save"
    await page.getByRole('button', { name: ' Save' }).click();
}, { action: "click", relativeXpath: "//*[@data-dyn-controlname=\"SystemDefinedSaveButton\"]" });

// ai-studio-step-id: pw1gpe1di0
await leapwork.step("Click the Finance and Operations home button in the navigation bar", async () => {
    // Click button "Finance and Operations"
    await page.getByRole('button', { name: 'Finance and Operations' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pw17409850
await leapwork.step("Click the Bank management workspace tile in the Dashboard's Workspaces section", async () => {
    // Click span
    await page.getByRole('button', { name: 'Bank management' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pw1t3uifw0
await leapwork.step("Click All bank accounts in the Bank management Summary section", async () => {
    // Click button "All bank accounts"
    await page.getByRole('button', { name: 'All bank accounts' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pwpisg8900
await leapwork.step("Click the Edit button on the Bank accounts page toolbar", async () => {
    // Click button " Edit"
    await page.getByRole('button', { name: ' Edit' }).click();
}, { action: "click", relativeXpath: "" });

// ai-studio-step-id: pw7vh07400
await leapwork.step("Select the row where Bank account is \"12366469\"", async () => {
    await leapwork.d365.fno.grid.selectRow(page, {
      gridId: "Grid_3_0",
      controlName: "Grid",
      gridModuleName: "Grid_3_0_grid",
      strategy: "primaryKey",
      rowIndex: "116",
      primaryKey: "12366469",
      primaryKeyColumn: "Bank account",
      rowText: "12366469",
    });
}, { action: "click" });

// ai-studio-step-id: 9neELYAk
await leapwork.step("Select \"${lw__bankGroups2}\" from the Bank groups dropdown where Bank account is \"12366469\"", async () => {
    await leapwork.d365.fno.grid.selectRowDropdownOption(page, {
      controlSelector: "[aria-rowindex=\"118\"] [data-dyn-controlname=\"BankAccountTable_BankGroupId\"]",
      controlName: "BankAccountTable_BankGroupId",
      gridId: "Grid_6087_0",
      gridModuleName: "Grid_6087_0_grid",
      strategy: undefined,
      rowIndex: "116",
      columnName: "BankAccountTable_BankGroupId",
      primaryKey: "12366469",
      primaryKeyColumn: "Bank account",
      rowText: "12366469",
      optionSelector: undefined,
      value: String(lw__bankGroups2),
    });
}, { action: "change", relativeXpath: "" });

// ai-studio-step-id: pw1e8ri8q0
await leapwork.step("Click the Save button in the Bank accounts toolbar", async () => {
    // Click button " Save"
    await page.getByRole('button', { name: ' Save' }).click();
}, { action: "click", relativeXpath: "//*[@data-dyn-controlname=\"SystemDefinedSaveButton\"]" });

// ai-studio-step-id: pwqst2q800
await leapwork.step("Click the Finance and Operations home button in the navigation bar", async () => {
    // Click button "Finance and Operations"
    await page.getByRole('button', { name: 'Finance and Operations' }).click();
}, { action: "click", relativeXpath: "//*[@data-dyn-controlname=\"NavBarDashboard\"]" });