import { Page } from "@playwright/test";
import { Icon, IconBlueprint } from "../types";

export function iconFactory(
  page: Page,
  iconsPreview: Record<string, IconBlueprint>
): Record<string, Icon>{
  const basket: Record<string, Icon> = {};

  for (const key in iconsPreview) {

    const blueprint = iconsPreview[key];

    const icon: Icon = {target: blueprint.target(page)};
    
    if(blueprint.position) {icon.position = blueprint.position};
    if(blueprint.text) {icon.text = blueprint.text};
    if(blueprint.url) {icon.url = blueprint.url};
    if(blueprint.newTab) {icon.newTab = blueprint.newTab};
    basket[key] = icon;
  }

  return basket;
}
