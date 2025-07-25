import { BrowserContext, Locator, Page } from "@playwright/test";

export async function triggerPopup(context: BrowserContext, target: Locator): Promise<Page> {
  const popup = await Promise.all([
    context.waitForEvent("page"),
    target.click(),
  ]).then(([p]) => p);

  return popup;
}