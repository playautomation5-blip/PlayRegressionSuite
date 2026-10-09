import { leapwork } from "./leapwork";

// leapwork-file-variables:start
// Generated from File connector.
declare const require: (name: string) => any;
const XLSX = require("xlsx");

// FL-11
const filePath = leapwork.files.path("FL-11");
const workbook = XLSX.readFile(filePath);
const worksheet = workbook.Sheets["Test Users"];
const dataRows = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: "A1:C7", raw: false, defval: "" }).slice(1);
const counterValue = leapwork.variables.get("globalCounter", leapwork.storage.GLOBAL) as string
const row = dataRows[counterValue];//dataRows[Math.floor(Math.random() * dataRows.length)] ?? [];

leapwork.variables.set("Email", row[1] ?? "", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("Email", leapwork.storage.LOCAL) as string;

leapwork.variables.set("Password", row[2] ?? "", leapwork.storage.LOCAL);
const lw__password = leapwork.variables.get("Password", leapwork.storage.LOCAL) as string;
// leapwork-file-variables:end

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw46dk8s00
await leapwork.step("Click the email field on the Leapwork Play login page", async () => {
    // Click textbox "email"
    await page.getByRole('textbox', { name: 'email' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pwdajirp00
await leapwork.step(`Fill the email field with ${lw__email}`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });



// ai-studio-step-id: pw1tiw4w50
await leapwork.step("Click the “Log in with email” button on the Leapwork Play login form", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1a5k0g40
await leapwork.step("Click the Password field on the Leapwork Play login page", async () => {
    // Click textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pw1tvxoyz0
await leapwork.step("Fill the Password field.", async () => {
    // Fill textbox "Password*"
    await page.getByRole('textbox', { name: 'Password*' }).fill(String(lw__password));
}, { action: "input", relativeXpath: "//*[@id=\"workos-password\"]" });

// ai-studio-step-id: pw1dutsdc0
await leapwork.step("Click the “Sign in with password” button on the login form", async () => {
    // Click button "Sign in with password"
    await page.getByRole('button', { name: 'Sign in with password' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1voog650
await leapwork.step("Click the test-play-8abc@outlook.com (Personal) account menu", async () => {
    // Click span
    await page.getByRole('button', { name: 'blah' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[2]/button[4]/span/span[1]", timeoutMs:2000 });

// ai-studio-step-id: pw1dv95a20
await leapwork.step("Click the Log out link", async () => {
    // Click span
    await page.getByText('Log out').click();
}, { action: "click", relativeXpath: ".//div[3]/div[1]/div[3]/div[2]/div[9]/span" });
