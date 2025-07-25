import { BrowserContext, expect, Page } from "@playwright/test";
import { Link } from "../types";
import { triggerPopup } from "./triggerPopUp"

export async function testLink(
  link: Link,
  page: Page,
  context: BrowserContext
) {
  if (link.newTab) {
    const popup = await triggerPopup(context, link.target);
    await expect(popup).toHaveURL(link.url);
    await popup.close();
  } else {
    await link.target.click();
    await expect(page).toHaveURL(link.url);
  }
}
