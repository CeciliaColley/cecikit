import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { triggerPopup } from "./triggerPopUp";

type Redirector = {
  target: Locator;
  url: RegExp;
  newTab: boolean;
};

export async function testRedirect<T extends Redirector>(
  redirector: T,
  page: Page,
  context: BrowserContext
) {
  if (redirector.newTab) {
    const popup = await triggerPopup(context, redirector.target);
    await expect(popup).toHaveURL(redirector.url);
    await popup.close();
  } else {
    await redirector.target.click();
    await expect(page).toHaveURL(redirector.url);
  }
}
