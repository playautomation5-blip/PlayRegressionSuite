import { leapwork } from "./leapwork";

// ai-studio-step-id: pw1cbefq00
await leapwork.step("Ensure trash is expanded", async () => {
  const expandTrashButton = page.getByRole("button", {
    name: "Expand trash",
    exact: true,
  });

  const isCollapsed = await expandTrashButton.isVisible().catch(() => false);

  if (isCollapsed) {
    await expandTrashButton.click({ force: true });
  }
  await expect(page.locator(".explorer-trash-section")).toBeVisible();
});