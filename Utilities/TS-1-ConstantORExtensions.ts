export const invitationEmail = "honeyjindgar@gmail.com";

//Random email function
export function generateRandomEmail(): string {
    const domain: string = "leapwork.com"
    const randomPart = Math.random().toString(36).substring(2, 10);
    const timestamp = Date.now();

    return `user_${randomPart}_${timestamp}@${domain}`;
}

export const assetTypeMap: Record<string, string> = {
  TC: "New test case",
  TS: "New typescript",
  FL: "New folder",
  KB: "New knowledge base",
  AG: "New agent",
  RL: "New runlist",
  FI: "New file"
};

export const randomTestCaseNames = [
  "Leapwork test case",
  "Regression suite check",
  "Login flow validation",
  "Smoke test asset",
  "D365 F&O test case",
  "Data entry validation",
  "UI verification case",
  "API integration test"
];
