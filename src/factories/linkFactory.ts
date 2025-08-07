import { Page } from "@playwright/test";
import { Link, LinkBlueprint } from "../types";

export function linkFactory(
  page: Page,
  linksPreview: Record<string, LinkBlueprint>
): Record<string, Link> {
  const basket: Record<string, Link> = {};

  for (const key in linksPreview) {
    const blueprint = linksPreview[key];

    const link: Link  = {
      target: blueprint.target(page),
      url: blueprint.url,
    };

    if(blueprint.newTab) {link.newTab = blueprint.newTab};

    basket[key] = link;
  }

  return basket;
}
