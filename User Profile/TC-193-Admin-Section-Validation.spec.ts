import { leapwork } from "./leapwork";

import { MicrosoftLogin } from "@assets/Utilities/Microsoft Login";
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

leapwork.variables.set("userId", "aistudio_user_2");
leapwork.variables.set("passwordId", "aistudio_user_2");



// ai-studio-step-id: pw1i22keo0
await leapwork.step("Use test case: Email Password Login", async () => {
    return await EmailPasswordLogin();
}, { action: "asset_reference", linkedAssetType: "test-case" });



// ai-studio-step-id: pw1k25tp00
await leapwork.step("Click the gamev24783@playfine.com (Personal) account menu", async () => {
    // Click span
    await page.getByRole('button', { name: 'gamev24783@playfine.com (' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]" });

// ai-studio-step-id: pwzhxl5e00
await leapwork.step("Click the Admin Section link", async () => {
    // Click span
    await page.getByText('Admin Section').click();
}, { action: "click" });

// ai-studio-step-id: pwegmh3l00
await leapwork.step("Click the Invites button in the Management section of the admin navigation", async () => {
    // Click button "Invites"
    await page.getByRole('button', { name: 'Invites' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Management\"]/button[@aria-label=\"Invites\"]" });



// ai-studio-step-id: pwl95cou00
await leapwork.step("Click the Date range and Users filter area in the Invite snapshot section", async () => {
    // Click div
    await page.getByText('Date rangeLast 7 daysLast 30 daysQuarter to dateAll timeCustom rangeUsersAll').click();
}, { action: "click" });

// ai-studio-step-id: pwfsatuf00
await leapwork.step("Click the Invite snapshot heading in the admin dashboard", async () => {
    // Click heading "Invite snapshot"
    await page.getByRole('heading', { name: 'Invite snapshot' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1xvsz1w0
await leapwork.step("Validate the 'Total invites sent' metric label on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "Total invites sent"
    await expect(page.locator('div').filter({ hasText: /^Total invites sent$/ })).toContainText("Total invites sent");
}, { action: "validate" });

// ai-studio-step-id: pw8jhhnh00
await leapwork.step("Validate the Signed up metric shows 'Signed up' in Invite snapshot on Leapwork AI Studio", async () => {
    // Assert div contains "Signed up"
    await expect(page.locator('div').filter({ hasText: /^Signed up$/ })).toContainText("Signed up");
}, { action: "validate" });

// ai-studio-step-id: pwxluww000
await leapwork.step("Validate that the Invite snapshot metric label shows 'Signup rate' on Leapwork AI Studio", async () => {
    // Assert div contains "Signup rate"
    await expect(page.getByText('Signup rate')).toContainText("Signup rate");
}, { action: "validate" });

// ai-studio-step-id: pwcebtkl00
await leapwork.step("Validate the Referral driver column header shows 'Referral driver' in Leapwork AI Studio", async () => {
    // Assert columnheader "Referral driver" contains "Referral driver"
    await expect(page.getByRole('columnheader', { name: 'Referral driver' })).toContainText("Referral driver");
}, { action: "validate" });

// ai-studio-step-id: pwym2bbp00
await leapwork.step("Validate the 'Total invites sent' column header on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Total invites sent" contains "Total invites sent"
    await expect(page.getByRole('columnheader', { name: 'Total invites sent' })).toContainText("Total invites sent");
}, { action: "validate" });

// ai-studio-step-id: pw1xf2d1e0
await leapwork.step("Validate the Signed up column header shows 'Signed up' in Leapwork AI Studio admin", async () => {
    // Assert columnheader "Signed up" contains "Signed up"
    await expect(page.getByRole('columnheader', { name: 'Signed up' })).toContainText("Signed up");
}, { action: "validate" });

// ai-studio-step-id: pw11144fh0
await leapwork.step("Validate the Pending column header shows 'Pending' on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Pending" contains "Pending"
    await expect(page.getByRole('columnheader', { name: 'Pending' })).toContainText("Pending");
}, { action: "validate" });

// ai-studio-step-id: pwz4wb1200
await leapwork.step("Validate that the \"Referral drivers\" heading appears on the Leapwork AI Studio admin page", async () => {
    // Assert heading "Referral drivers" contains "Referral drivers"
    await expect(page.getByRole('heading', { name: 'Referral drivers' })).toContainText("Referral drivers");
}, { action: "validate" });

// ai-studio-step-id: pwywz4cr00
await leapwork.step("Click the Execution Results tab in the Analytics section", async () => {
    // Click button "Execution Results"
    await page.getByRole('button', { name: 'Execution Results' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Analytics\"]/button[@aria-label=\"Execution Results\"]" });



// ai-studio-step-id: pw12r91e20
await leapwork.step("Validate that the Execution snapshot heading shows 'Execution snapshot' on Leapwork AI Studio", async () => {
    // Assert heading "Execution snapshot" contains "Execution snapshot"
    await expect(page.getByRole('heading', { name: 'Execution snapshot' })).toContainText("Execution snapshot");
}, { action: "validate" });

// ai-studio-step-id: pwvdiot000
await leapwork.step("Validate that 'Total executions' appears on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "Total executions"
    await expect(page.getByText('Total executions')).toContainText("Total executions");
}, { action: "validate" });

// ai-studio-step-id: pwe9err600
await leapwork.step("Validate that the Execution snapshot shows 'Passed' on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "Passed"
    await expect(page.getByText('Passed', { exact: true })).toContainText("Passed");
}, { action: "validate" });

// ai-studio-step-id: pw43r75300
await leapwork.step("Validate that the Failed metric shows 'Failed' in Execution snapshot on Leapwork AI Studio", async () => {
    // Assert div contains "Failed"
    await expect(page.getByRole('button', { name: 'Show failure breakdown' })).toContainText("Failed");
}, { action: "validate" });

// ai-studio-step-id: pw128fmuu0
await leapwork.step("Validate that the Stopped metric shows 'Stopped' on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "Stopped"
    await expect(page.getByText('Stopped')).toContainText("Stopped");
}, { action: "validate" });

// ai-studio-step-id: pwzqwkum00
await leapwork.step("Validate the Leapwork AI Studio admin page shows 'Executions by Runlist trigger type'", async () => {
    // Assert heading "Executions by Runlist trigger type" contains "Executions by Runlist trigger type"
    await expect(page.getByRole('heading', { name: 'Executions by Runlist trigger' })).toContainText("Executions by Runlist trigger type");
}, { action: "validate" });

// ai-studio-step-id: pw12hy39h0
await leapwork.step("Click the Engagement button in the Analytics section.", async () => {
    // Click button "Engagement"
    await page.getByRole('button', { name: 'Engagement' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Analytics\"]/button[@aria-label=\"Engagement\"]" });



// ai-studio-step-id: pw1vi02000
await leapwork.step("Validate the Engagement and retention heading shows 'Engagement and retention' on Leapwork AI Studio", async () => {
    // Assert heading "Engagement and retention" contains "Engagement and retention"
    await expect(page.getByRole('heading', { name: 'Engagement and retention' })).toContainText("Engagement and retention");
}, { action: "validate" });

// ai-studio-step-id: pw1imr1cn0
await leapwork.step("Validate that the D1 retained users label shows 'D1 retained users' in Leapwork AI Studio admin", async () => {
    // Assert div contains "D1 retained users"
    await expect(page.getByText('D1 retained users')).toContainText("D1 retained users");
}, { action: "validate" });

// ai-studio-step-id: pw1ig86zy0
await leapwork.step("Validate that 'D7 retained users' is shown on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "D7 retained users"
    await expect(page.getByText('D7 retained users')).toContainText("D7 retained users");
}, { action: "validate" });

// ai-studio-step-id: pwmj4q5l00
await leapwork.step("Validate the Leapwork AI Studio admin page shows 'D14 retained users' in Engagement and retention", async () => {
    // Assert div contains "D14 retained users"
    await expect(page.getByText('D14 retained users')).toContainText("D14 retained users");
}, { action: "validate" });

// ai-studio-step-id: pw1lvkwfe0
await leapwork.step("Validate that 'Active teams' is shown on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "Active teams"
    await expect(page.getByText('Active teams')).toContainText("Active teams");
}, { action: "validate" });

// ai-studio-step-id: pw8ahz9l00
await leapwork.step("Validate that \"Active teams\" is shown on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "Active teams"
    await expect(page.getByText('Active teams')).toContainText("Active teams");
}, { action: "validate" });

// ai-studio-step-id: pw16lbg2w0
await leapwork.step("Click the Activation tab in the Analytics section", async () => {
    // Click button "Activation"
    await page.getByRole('button', { name: 'Activation' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Analytics\"]/button[@aria-label=\"Activation\"]" });



// ai-studio-step-id: pw1hh4eo90
await leapwork.step("Validate that the Activation snapshot heading shows 'Activation snapshot' on Leapwork AI Studio", async () => {
    // Assert heading "Activation snapshot" contains "Activation snapshot"
    await expect(page.getByRole('heading', { name: 'Activation snapshot' })).toContainText("Activation snapshot");
}, { action: "validate" });

// ai-studio-step-id: pwyql8d300
await leapwork.step("Validate that 'Activated users' appears in the Activation snapshot on Leapwork AI Studio", async () => {
    // Assert div contains "Activated users"
    await expect(page.getByText('Activated users')).toContainText("Activated users");
}, { action: "validate" });

// ai-studio-step-id: pw17t34q00
await leapwork.step("Validate that \"Distinct actions used\" appears on the Leapwork AI Studio admin page", async () => {
    // Assert div contains "Distinct actions used"
    await expect(page.getByText('Distinct actions used')).toContainText("Distinct actions used");
}, { action: "validate" });

// ai-studio-step-id: pwgumo4100
await leapwork.step("Validate the Top action label shows 'Top action' on the Leapwork Play admin page", async () => {
    // Assert div contains "Top action"
    await expect(page.getByText('Top action')).toContainText("Top action");
}, { action: "validate" });

// ai-studio-step-id: pw1lb8pd40
await leapwork.step("Click the Power users tab in the Analytics section", async () => {
    // Click button "Power users"
    await page.getByRole('button', { name: 'Power users' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Analytics\"]/button[@aria-label=\"Power users\"]" });



// ai-studio-step-id: pw6lq5ff00
await leapwork.step("Validate that the Power users heading shows 'Power users' on the Leapwork AI Studio admin page", async () => {
    // Assert heading "Power users" contains "Power users"
    await expect(page.getByRole('heading', { name: 'Power users' })).toContainText("Power users");
}, { action: "validate" });



// ai-studio-step-id: pwlmvbpq00
await leapwork.step("Validate that the Credits used column header shows 'Credits used' on Leapwork AI Studio", async () => {
    // Assert span contains "Credits used"
    await expect(page.getByRole('button', { name: 'Credits used' })).toContainText("Credits used");
}, { action: "validate" });

// ai-studio-step-id: pwhccl4700
await leapwork.step("Validate that the Test cases created column header shows 'Test cases created' on Leapwork AI Studio", async () => {
    // Assert span contains "Test cases created"
    await expect(page.getByRole('button', { name: 'Test cases created' })).toContainText("Test cases created");
}, { action: "validate" });

// ai-studio-step-id: pw5rfr2a00
await leapwork.step("Validate the Blueprints generated column header shows 'Blueprints generated' on Leapwork AI Studio", async () => {
    // Assert span contains "Blueprints generated"
    await expect(page.getByRole('button', { name: 'Blueprints generated' })).toContainText("Blueprints generated");
}, { action: "validate" });

// ai-studio-step-id: pwntpyil00
await leapwork.step("Validate on Leapwork AI Studio admin page that the Remote browser mins column header shows 'Remote browser mins'", async () => {
    // Assert span contains "Remote browser mins"
    await expect(page.getByRole('button', { name: 'Remote browser mins' })).toContainText("Remote browser mins");
}, { action: "validate" });

// ai-studio-step-id: pwmu7cia00
await leapwork.step("Click the Overview tab under Analytics", async () => {
    // Click button "Overview"
    await page.getByRole('button', { name: 'Overview' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Analytics\"]/button[@aria-label=\"Overview\"]" });



// ai-studio-step-id: pw1yjbch80
await leapwork.step("Validate that the Users heading shows 'Users' on the Leapwork AI Studio admin page", async () => {
    // Assert heading "Users" contains "Users"
    await expect(page.getByRole('heading', { name: 'Users' })).toContainText("Users");
}, { action: "validate" });

// ai-studio-step-id: pw12je0830
await leapwork.step("Validate that the Product totals heading shows 'Product totals' on the Leapwork AI Studio admin page", async () => {
    // Assert heading "Product totals" contains "Product totals"
    await expect(page.getByRole('heading', { name: 'Product totals' })).toContainText("Product totals");
}, { action: "validate" });

// ai-studio-step-id: pwg556ic00
await leapwork.step("Click the Product Control button in the Management section.", async () => {
    // Click button "Product Control"
    await page.getByRole('button', { name: 'Product Control' }).click();
}, { action: "click" });



// ai-studio-step-id: pws0v8bj00
await leapwork.step("Validate the Product Control requests heading is shown on the Leapwork AI Studio admin page", async () => {
    // Assert heading "Product Control requests" contains "Product Control requests"
    await expect(page.getByRole('heading', { name: 'Product Control requests' })).toContainText("Product Control requests");
}, { action: "validate" });

// ai-studio-step-id: pw1htf49i0
await leapwork.step("Select \"Last 30 days\" from Time rangeLast hourTodayLast 7 daysLast 30 days", async () => {
    // Click combobox "Time range"
    await page.getByLabel('Time rangeLast hourTodayLast').selectOption({ label: "Last 30 days" });
}, { action: "click" });

// ai-studio-step-id: pw12va85l0
await leapwork.step("Validate the Leapwork Play Product Control requests table has a “Timestamp” header", async () => {
    // Assert columnheader "Timestamp" contains "Timestamp"
    await expect(page.getByRole('columnheader', { name: 'Timestamp' })).toContainText("Timestamp");
}, { action: "validate"});

// ai-studio-step-id: pw13m83vm0
await leapwork.step("Validate the “User” column header shows “User” on the Leapwork Play page", async () => {
    // Assert columnheader "User" contains "User"
    await expect(page.getByRole('columnheader', { name: 'User' })).toContainText("User");
}, { action: "validate" });

// ai-studio-step-id: pw427c0t00
await leapwork.step("Validate the User column header shows 'User' in Leapwork AI Studio admin", async () => {
    // Assert columnheader "User" contains "User"
    await expect(page.getByRole('columnheader', { name: 'User' })).toContainText("User");
}, { action: "validate" });

// ai-studio-step-id: pwflrsie00
await leapwork.step("Validate the Request column header shows 'Request' on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Request" contains "Request"
    await expect(page.getByRole('columnheader', { name: 'Request' })).toContainText("Request");
}, { action: "validate" });

// ai-studio-step-id: pwtxrayn00
await leapwork.step("Validate the Response column header is 'Response' in the Product Control requests table", async () => {
    // Assert columnheader "Response" contains "Response"
    await expect(page.getByRole('columnheader', { name: 'Response' })).toContainText("Response");
}, { action: "validate" });

// ai-studio-step-id: pw8gewan00
await leapwork.step("Click the Admin Settings button in the Management section", async () => {
    // Click button "Admin Settings"
    await page.getByRole('button', { name: 'Admin Settings' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Management\"]/button[@aria-label=\"Admin Settings\"]" });



// ai-studio-step-id: pw16v00gy0
await leapwork.step("Validate that the User Credits tab shows 'User Credits' in Leapwork AI Studio admin", async () => {
    // Assert tab "User Credits" contains "User Credits"
    await expect(page.getByRole('tab', { name: 'User Credits' })).toContainText("User Credits");
}, { action: "validate" });

// ai-studio-step-id: pwc3jie700
await leapwork.step("Validate that the History tab shows 'History' on the Leapwork AI Studio admin page", async () => {
    // Assert tab "History" contains "History"
    await expect(page.getByRole('tab', { name: 'History' })).toContainText("History");
}, { action: "validate" });

// ai-studio-step-id: pw1flfzik0
await leapwork.step("Validate that the Calculator tab shows 'Calculator' in Leapwork AI Studio admin", async () => {
    // Assert tab "Calculator" contains "Calculator"
    await expect(page.getByRole('tab', { name: 'Calculator' })).toContainText("Calculator");
}, { action: "validate" });

// ai-studio-step-id: pw6wz7rh00
await leapwork.step("Validate that the Email column header shows 'Email' on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Email" contains "Email"
    await expect(page.getByRole('columnheader', { name: 'Email' })).toContainText("Email");
}, { action: "validate" });

// ai-studio-step-id: pw99ckdy00
await leapwork.step("Validate that the Status column header shows 'Status' on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Status" contains "Status"
    await expect(page.getByRole('columnheader', { name: 'Status' })).toContainText("Status");
}, { action: "validate" });

// ai-studio-step-id: pw1uy95b10
await leapwork.step("Validate that the Total Credits column header shows 'Total Credits' in Leapwork AI Studio", async () => {
    // Assert columnheader "Total Credits" contains "Total Credits"
    await expect(page.getByRole('columnheader', { name: 'Total Credits' })).toContainText("Total Credits");
}, { action: "validate" });

// ai-studio-step-id: pw1rywxci0
await leapwork.step("Validate that the Consumed Credits column header shows 'Consumed Credits' on Leapwork AI Studio", async () => {
    // Assert columnheader "Consumed Credits" contains "Consumed Credits"
    await expect(page.getByRole('columnheader', { name: 'Consumed Credits' })).toContainText("Consumed Credits");
}, { action: "validate" });

// ai-studio-step-id: pwunnez300
await leapwork.step("Validate that the Available Credits column header shows 'Available Credits' on Leapwork AI Studio", async () => {
    // Assert columnheader "Available Credits" contains "Available Credits"
    await expect(page.getByRole('columnheader', { name: 'Available Credits' })).toContainText("Available Credits");
}, { action: "validate" });

// ai-studio-step-id: pw1s1lgte0
await leapwork.step("Validate that the Action column header shows 'Action' on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Action" contains "Action"
    await expect(page.getByRole('columnheader', { name: 'Action' })).toContainText("Action");
}, { action: "validate" });

// ai-studio-step-id: pwx0x3pw00
await leapwork.step("Click the Feature Flags button in the Admin section tabs", async () => {
    // Click button "Feature Flags"
    await page.getByRole('button', { name: 'Feature Flags' }).click();
}, { action: "click", relativeXpath: ".//div/div[2]/nav[@aria-label=\"Admin section tabs\"]/div/div[@aria-label=\"Management\"]/button[@aria-label=\"Feature Flags\"]" });



// ai-studio-step-id: pw14hjt890
await leapwork.step("Validate the Feature Flags heading shows 'Feature Flags' on the Leapwork AI Studio admin page", async () => {
    // Assert heading "Feature Flags" contains "Feature Flags"
    await expect(page.getByRole('heading', { name: 'Feature Flags' })).toContainText("Feature Flags");
}, { action: "validate"});

// ai-studio-step-id: pw78wv8s00
await leapwork.step("Validate that the Name column header shows 'Name' on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Name" contains "Name"
    await expect(page.getByRole('columnheader', { name: 'Name' })).toContainText("Name");
}, { action: "validate" });

// ai-studio-step-id: pw100n9fx0
await leapwork.step("Validate the Status column header shows 'Status' on the Leapwork AI Studio admin page", async () => {
    // Assert columnheader "Status" contains "Status"
    await expect(page.getByRole('columnheader', { name: 'Status' })).toContainText("Status");
}, { action: "validate" });

// ai-studio-step-id: pw1623m3k0
await leapwork.step("Validate that the Excluded users column header shows 'Excluded users' in Leapwork AI Studio", async () => {
    // Assert columnheader "Excluded users" contains "Excluded users"
    await expect(page.getByRole('columnheader', { name: 'Excluded users' })).toContainText("Excluded users");
}, { action: "validate" });

// ai-studio-step-id: pw3rsxx300
await leapwork.step("Validate that the Excluded teams column header shows 'Excluded teams' in Leapwork AI Studio", async () => {
    // Assert columnheader "Excluded teams" contains "Excluded teams"
    await expect(page.getByRole('columnheader', { name: 'Excluded teams' })).toContainText("Excluded teams");
}, { action: "validate" });

// ai-studio-step-id: pw16ciki80
await leapwork.step("Validate the Updated by column header shows 'Updated by' on Leapwork AI Studio admin", async () => {
    // Assert columnheader "Updated by" contains "Updated by"
    await expect(page.getByRole('columnheader', { name: 'Updated by' })).toContainText("Updated by");
}, { action: "validate" });

// ai-studio-step-id: pw1tzoqll0
await leapwork.step("Validate that the Updated at column header shows 'Updated at' on Leapwork AI Studio", async () => {
    // Assert columnheader "Updated at" contains "Updated at"
    await expect(page.getByRole('columnheader', { name: 'Updated at' })).toContainText("Updated at");
}, { action: "validate" });

// ai-studio-step-id: pw1c8gzg60
await leapwork.step("Click the Survey tab in the Admin section", async () => {
    // Click tab "Survey"
    await page.getByRole('button', { name: 'Survey' }).click();
}, { action: "click" });

// ai-studio-step-id: pw1ycwic70
await leapwork.step("Validate that the Date range label shows 'Date range' on Leapwork AI Studio admin", async () => {
    // Assert span contains "Date range"
    await expect(page.getByText('Date range')).toContainText("Date range");
}, { action: "validate" });

// ai-studio-step-id: pw1695o900
await leapwork.step("Validate the Users filter shows 'Users' in Leapwork AI Studio admin", async () => {
    // Assert span contains "Users"
    await expect(page.getByText('Users', { exact: true })).toContainText("Users");
}, { action: "validate" });

// ai-studio-step-id: pw1ht5ciy0
await leapwork.step("Validate that the Search label shows 'Search' on the Leapwork AI Studio admin page", async () => {
    // Assert span contains "Search"
    await expect(page.getByText('Search')).toContainText("Search");
}, { action: "validate" });

// ai-studio-step-id: pwxjs65h00
await leapwork.step("Validate that the Survey heading shows 'Survey' on the Leapwork AI Studio admin page", async () => {
    // Assert heading "Survey" contains "Survey"
    await expect(page.getByRole('heading', { name: 'Survey' })).toContainText("Survey");
}, { action: "validate" });
