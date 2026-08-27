import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: ApIdoTNd
await leapwork.step("Open https://v0-user-profile-popup.vercel.app/", async () => {
    await page.goto("https://v0-user-profile-popup.vercel.app/", { waitUntil: 'load' });
});

// ai-studio-step-id: kHTYNrEa
await leapwork.step("Click the First Name field on the User Profile form", async () => {
    const firstName = page.getByLabel('First Name', { exact: true });
    await firstName.click({ force: true });
});

// ai-studio-step-id: WXg4bCEV
await leapwork.step("Fill the First Name field with \"test\"", async () => {
    const firstName = page.locator('#firstName');
    await firstName.fill('test');
});

// ai-studio-step-id: 48pFbLMe
await leapwork.step("Click the Last Name field", async () => {
    const lastName = page.locator('#lastName');
    await lastName.click({ force: true });
});

// ai-studio-step-id: ZVd84gwQ
await leapwork.step("Fill the Last Name field with user", async () => {
    const lastName = page.locator('#lastName');
    await lastName.fill('user');
});

// ai-studio-step-id: DbqnMufT
await leapwork.step("Click the Email Address field", async () => {
    const email = page.getByLabel('Email Address', { exact: true });
    await email.click({ force: true });
});

// ai-studio-step-id: p446Vu8R
await leapwork.step("Fill the Email Address field with test@leapwork.com", async () => {
    const email = page.getByLabel('Email Address', { exact: true });
    await email.fill('test@leapwork.com');
});

// ai-studio-step-id: NBYUJ4mk
await leapwork.step("Click the Phone Number field in the User Profile form", async () => {
    const phone = page.locator('#phone');
    await phone.click({ force: true });
});

// ai-studio-step-id: sUhNZRrQ
await leapwork.step("Fill the Phone Number field with 1234567890", async () => {
    const phone = page.getByLabel('Phone Number', { exact: true });
    await phone.fill('1234567890');
});

// ai-studio-step-id: FOXL6Zbp
await leapwork.step("Click the Bio field on the User Profile form", async () => {
    const bio = page.locator('#bio');
    await bio.click({ force: true });
});

// ai-studio-step-id: 6isbzvVC
await leapwork.step("Fill the Bio field with test user", async () => {
    const bio = page.locator('#bio');
    await bio.fill('test user');
});

// ai-studio-step-id: 91tu9JI9
await leapwork.step("Click the Open Address Form button in the Address Information section", async () => {
    const openAddressFormButton = page.getByRole('button', { name: 'Open Address Form', exact: true });
    await openAddressFormButton.click({ force: true });
});

// ai-studio-step-id: UyNNNwbe
await leapwork.step("Click the Address Line 1 field", async () => {
    const addressLine1 = page.getByLabel('Address Line 1', { exact: true });
    await addressLine1.click({ force: true });
});

// ai-studio-step-id: clycaCPb
await leapwork.step("Fill the Address Line 1 field with \"addr \"", async () => {
    const address1 = page.locator('#address1');
    await address1.fill('addr ');
});

// ai-studio-step-id: SwSSeXJg
await leapwork.step("Click the Address Line 2 field", async () => {
    const addressLine2 = page.getByLabel('Address Line 2', { exact: true });
    await addressLine2.click({ force: true });
});

// ai-studio-step-id: hKlFa9uf
await leapwork.step("Fill the Address Line 2 field with \"ddr 2\"", async () => {
    const address2 = page.locator('#address2');
    await address2.fill('ddr 2');
});

// ai-studio-step-id: HLK7jlWb
await leapwork.step("Click the City field in the address form", async () => {
    const city = page.locator('#city');
    await city.click({ force: true });
});

// ai-studio-step-id: AotXu70p
await leapwork.step("Fill the City field with \"new delhi\"", async () => {
    const city = page.getByLabel('City', { exact: true });
    await city.fill('new delhi');
});

// ai-studio-step-id: ECokZSV6
await leapwork.step("Click the State field on the address form", async () => {
    const state = page.locator('#state');
    await state.click({ force: true });
});

// ai-studio-step-id: 5L136xQ4
await leapwork.step("Fill the State field with Delhi", async () => {
    const state = page.locator('#state');
    await state.fill('Delhi');
});

// ai-studio-step-id: mu7dh0Pc
await leapwork.step("Click the Pin Code field in the address form", async () => {
    const pinCode = page.getByLabel('Pin Code', { exact: true });
    await pinCode.click({ force: true });
});

// ai-studio-step-id: 90U9WmyY
await leapwork.step("Fill the Pin Code field with 110001", async () => {
    const pincode = page.getByLabel('Pin Code', { exact: true });
    await pincode.fill('110001');
});

// ai-studio-step-id: LUjxYHjA
await leapwork.step("Click the Save Address button on the address form", async () => {
    const saveAddressButton = page.getByRole('button', { name: 'Save Address', exact: true });
    await saveAddressButton.click({ force: true });
});

// ai-studio-step-id: BwU7yWdJ
await leapwork.step("Click the Save Profile button on the User Profile page", async () => {
    const saveProfileButton = page.getByRole('button', { name: 'Save Profile', exact: true });
    await saveProfileButton.click({ force: true });
});
