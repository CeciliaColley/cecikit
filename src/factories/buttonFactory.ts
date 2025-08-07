import { Page } from "@playwright/test";
import { Button, ButtonBlueprint } from "../types";

export function buttonFactory(
  page: Page,
  buttonsPreview: Record<string, ButtonBlueprint>
): Record<string, Button> {
  const basket: Record<string, Button> = {};

  for (const key in buttonsPreview) {
    const bp = buttonsPreview[key];

    const btn: Button = { target: bp.button(page) };
    
    if (bp.endpoint) {
      btn.clickAndWait = async () => {
        const wait = page.waitForResponse(
          r => r.url().includes(bp.endpoint!) && r.status() === 200
        );
        await bp.button(page).click();
        return wait;
      };
    }

    if (bp.url)    btn.url    = bp.url;
    if (bp.newTab) btn.newTab = bp.newTab;

    basket[key] = btn;
  }

  return basket;
}
