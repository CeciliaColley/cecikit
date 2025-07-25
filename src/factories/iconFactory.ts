import { Page } from "@playwright/test";
import { Icon, IconBlueprint } from "../types";

export function iconFactory(
  page: Page,
  iconsPreview: Record<string, IconBlueprint>
): Record<string, Icon>{
  const basket: Record<string, Icon> = {};

  for (const key in iconsPreview) {
    const blueprint = iconsPreview[key];

    const icon = {
      position: blueprint.position,
      target: blueprint.target(page),
      text: blueprint.text,
      url: blueprint.url,
    };
    basket[key] = icon;
  }

  return basket;
}
