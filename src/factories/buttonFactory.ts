import { Page } from "@playwright/test";
import { Button, ButtonBlueprint } from "../types";

export function buttonFactory(
  page: Page,
  buttonsPreview: Record<string, ButtonBlueprint>
): Record<string, Button> {
  const basket: Record<string, Button> = {};

  for (const key in buttonsPreview) {
    const bp = buttonsPreview[key];

    const clickAndWait = bp.endpoint
      ? async () => {
          const wait = page.waitForResponse(
            (r) => r.url().includes(bp.endpoint!) && r.status() === 200
          );
          await bp.button(page).click();
          return wait;
        }
      : undefined;

    const button = {
      button: bp.button(page),
      ...(clickAndWait && { clickAndWait }),
      url: bp.url,

    };

    basket[key] = button;
  }

  return basket;
}
